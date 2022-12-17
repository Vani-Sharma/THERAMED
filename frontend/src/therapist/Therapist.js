import React from 'react';
import { Routes, Route } from 'react-router-dom'

import Navbar from './Navbar';
import Landing from '../layout/Landing';
import Footer from '../layout/Footer';
import Your_Patients from './Your_Patients'

function Therapist() {
    return (
        <>
            <Routes>
                <Route exact path='/' element={
                    <>
                        <Navbar />
                        <Landing />
                        <Your_Patients />
                        <Footer />
                    </>
                } />
            </Routes>

        </>

    )
}

export default Therapist;
