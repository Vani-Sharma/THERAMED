import React from 'react';
import { Routes, Route } from 'react-router-dom'

import Navbar from './Navbar';
import Landing from '../layout/Landing';
import MoodStart from '../layout/Home/mood-start';
import Your_Therapist from './Your_Therapist';
import Faq from '../layout/Home/Faq';
import Blog from '../layout/Home/Blogs';
import Footer from '../layout/Footer';

function Patient() {
    return (
        <>
            <Routes>
                <Route exact path='/' element={
                    <>
                        <Navbar />
                        <Landing />
                        <MoodStart />
                        <Your_Therapist />
                        <Faq />
                        <Blog />
                        <Footer />
                    </>
                }></Route>
            </Routes>

        </>

    )
}

export default Patient;
