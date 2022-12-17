const express = require('express');
require('dotenv').config();
const router = express.Router();
require('dotenv').config();


const PatientController =require('../controllers/Patient');
const TherapistController =require('../controllers/Therapist');

router.get('/test', (req, res) => {
  res.send('Working');
});




//customer 
router.post('/PatientRegister',PatientController.Patientregister);
router.post('/PatientLogin',PatientController.Patientlogin);

//owner
router.post('/TherapistLogin',TherapistController.Therapistlogin);
router.post('/TherapistRegister',TherapistController.Therapistregister);

module.exports = router;
