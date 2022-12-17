const Patient = require('../models/Patient');


const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
Patientregister = async (req, res) => { 
    console.log(req.body)
	console.log("fjdm")
	const newPassword = await bcrypt.hash(req.body.password, 10)
	
	const newPatient= new Patient({
		name: req.body.name,
		email: req.body.email,
		password: newPassword,
	})
	console.log(newPassword)
	try { 
		console.log(newPatient)
		await newPatient.save();
		res.status(201).json(Patient);
	} catch (err) {
		console.log(err.message)
		res.status(409).json({ message: err.message });
	}
}
const Patientlogin = async (req, res) => {
    const patient = await Patient.findOne({
		email: req.body.email,
	})
	
	
		if (!patient) {
			console.log("not a ")
			return res.json( { status: 'error', error: 'Invalid login' })
Patient

		}
		console.log('still here')
	const isPasswordValid = await bcrypt.compare(
		req.body.password,
		patient.password
	)

	if (isPasswordValid) {
		const token = jwt.sign(
			{
				name: Patient.name,
				email: Patient.email,
			},
			'secret123'
		)
			console.log(res)
		return res.json({ status: 'ok', Patient: token })
	} else {
		console.log(res)
		
		return res.json({ status: 'error', Patient: false })
	}
}
module.exports={
    Patientlogin,
    Patientregister
}