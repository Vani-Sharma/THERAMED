import React from 'react';
import { Routes, Route } from 'react-router-dom' 
import Navbar from './layout/Home/Navbar';
import Footer from './layout/Footer';
import Patient from './patient/Patient';
import Register_Patient from './layout/Register_Patient';
import Login_Patient from './layout/Login_Patient';
import MoodTracking from './patient/MoodTracking';
import TherapistDB from './patient/TherapistDB';
import Therapist from './therapist/Therapist';
import Your_Patients from './therapist/Your_Patients';
import Login_Therapist from './layout/Login_Therapist';
import Register_Therapist from './layout/Register_Therapist';
import Chat from './layout/Chat';
import VideoChat from './layout/Video_Chat';
import Home from './layout/Home';

function App() {
  const user = false;
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path="/" element={user ? <Register_Patient /> : <Home/>} />
        <Route exact path="/register-patient" element={!user ? <Register_Patient /> : <Login_Patient />} />
        <Route exact path="/login-patient" element={user ? <Login_Patient /> : <Patient />} />
        <Route exact path="/patient" element={<Patient />} />
        <Route exact path="/mood-tracking" element={<MoodTracking />} />
        <Route exact path="/therapistsdb" element={<TherapistDB />} />
        <Route exact path="/therapist" element={<Therapist />} />
        <Route exact path="/patientinfo" element={<Your_Patients />} />
        <Route exact path="/register-therapist" element={!user ? <Register_Therapist /> : <Login_Therapist />} />
        <Route exact path="/login-therapist" element={user ? <Login_Therapist /> : <Therapist />} />
        <Route exact path="/video-chat" element={user ? <Login_Therapist /> : <VideoChat />} />
        <Route exact path="/chat" element={user ? <Login_Therapist /> : <Chat />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
