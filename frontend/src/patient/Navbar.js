import React from "react";
import { Link } from 'react-router-dom';
const Navbar = () => {
    return (
        <header id="header" className="header d-flex align-items-center">

            <div className="container-fluid container-xxl d-flex align-items-center justify-content-between">
                <a href="/" className="logo d-flex align-items-center">

                    <img src="assets/img/hearts.png" alt="img" />
                    <h1>TheraMed<span>.</span></h1>
                </a>
                <nav id="navbar" className="navbar">
                    <ul>
                        <li><Link to='/patient' className="links">Home</Link></li>
                        <li><Link to='/patient' className="links">Your Therapist</Link></li>
                        <li><Link to='/therapistsdb' className="links">Find a Therapist</Link></li>
                        <li><Link to='/' className="links">My Points</Link></li>
                        <li><Link to='/' className="links">FAQ</Link></li>
                        <li><Link to='/' className="links">Blog</Link></li>
                        <li><Link to='/' className="links">My Profile</Link></li>
                        <li><Link to='/login' className="links">LogOut</Link></li>
                    </ul>

                </nav>

                <i className="mobile-nav-toggle mobile-nav-show bi bi-list"></i>
                <i className="mobile-nav-toggle mobile-nav-hide d-none bi bi-x"></i>



            </div>
        </header>
    )
}

export default Navbar;