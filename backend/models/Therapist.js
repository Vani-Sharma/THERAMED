const mongoose = require('mongoose')

const Therapistschema = new mongoose.Schema(
	{
		// name: { type: String, required: true },
		email: { type: String, required: true, unique: true },
		password: { type: String, required: true },
		
	}
)

const Therapist = mongoose.model('Therapist', Therapistschema)

module.exports = Therapist