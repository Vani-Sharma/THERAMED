const Therapist = require('../models/Therapist');

const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
Therapistregister = async (req, res) => { 
    // console.log(req.body)
	// console.log("fjdm")
	const newPassword = await bcrypt.hash(req.body.password, 10)
	
	const newTherapist= new Therapist({
		name: req.body.name,
		email: req.body.email,
		password: newPassword,
	})
	console.log(newPassword)
	try { 
		// console.log(newOwner)
		await newTherapist.save();
		res.status(201).json(Therapist);
	} catch (err) {
		console.log(err.message)
		res.status(409).json({ message: err.message });
	}
}
const Therapistlogin = async (req, res) => {
    const therapist = await Therapist.findOne({
		email: req.body.email,
	})

	if(!therapist) {

		 return res.json( { status: 'error', error: 'Invalid login' })
	
	}

	const isPasswordValid = await bcrypt.compare(
		req.body.password,
		therapist.password
	)

	if (isPasswordValid) {
		const token = jwt.sign(
			{
				name: Therapist.name,
				email: Therapist.email,
			},
			'secret123'
		)

		return res.json({ status: 'ok' ,Therapist: token })
	} else {
		return res.json({ status: 'error', Therapist: false })
	}
}
module.exports={
    Therapistlogin,
    Therapistregister
}