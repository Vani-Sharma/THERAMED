const mongoose = require('mongoose')

const Patientschema = new mongoose.Schema(
	{
		name: { type: String, required: true },
		email: { type: String, required: true, unique: true },
		password: { type: String, required: true },
		
	}
)

const Patient = mongoose.model('CustomePatient', Patientschema)

module.exports = Patient
