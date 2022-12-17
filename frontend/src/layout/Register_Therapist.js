import { Link ,useNavigate } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Register_Therapist = () => {

    const [Userdata,setUserdata ] = React.useState({ fname: '',lname : '',email : '' });

    const navigate = useNavigate();


const handleSubmit = async (e) => {
      e.preventDefault();

      if(Userdata.password.length<8){

       alert("password must be greater than 8")
  }
  else if(!Boolean(Userdata.password.match(/[A-Z]/))){
    alert("MUST INCLUDE AN UPPERCASE LETTER")
  }  
  else if(!Boolean(Userdata.password.match(/[a-z]/))){
    alert("MUST INCLUDE AN LOWERCASE LETTER")
  } 
  else if(!Boolean(Userdata.password.match(/[0-9]/))){
    alert("MUST INCLUDE AN NUMBER")
  }
  else if(!Boolean(Userdata.email.endsWith("com"))){
    alert("PLEASE ENTER VALID EMAIL")
  }
  else{
    const tobeSaved= {
          name:Userdata.name,
            password:Userdata.password,
            email:Userdata.email,
   
        
     }

    console.log(tobeSaved)
    axios.post(`http://localhost:8080/api/Therapistregister`, tobeSaved)

    .then((response) => {
      console.log(response);
      
      // Handle data
    })
    .catch((error) => {
      console.log(error);
    })
    alert("successful")
    navigate('/');
  }

}
return (
    <section class="vh-100" style={{ backgroundColor: '#eee' }}>
        <div class="container h-100">
            <div class="row d-flex justify-content-center align-items-center h-100">
                <div class="col-lg-12 col-xl-11">
                    <div class="card text-black" style={{ borderRadius: '25px' }}>
                        <div class="card-body p-md-5">
                            <div class="row justify-content-center">
                                <div class="col-md-10 col-lg-6 col-xl-6 order-2 order-lg-1">

                                    <p class="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign up</p>

                                    <form class="mx-1 mx-md-4" onSubmit={handleSubmit}>

                                        <div class="d-flex flex-row align-items-center mb-4">
                                            <label for="name">
                                                <i class="fas fa-user fa-lg me-3 fa-fw"></i>
                                            </label>
                                            <div class="form-outline flex-fill mb-0">
                                                <input type="text" name='name' id="name" class="form-control" placeholder='Your Name' onChange={(e) => setUserdata({ ...Userdata,name : e.target.value })}/>
                                            </div>
                                        </div>

                                        <div class="d-flex flex-row align-items-center mb-4">
                                            <label for="email">
                                                <i class="fas fa-envelope fa-lg me-3 fa-fw"></i>
                                            </label>
                                            <div class="form-outline flex-fill mb-0">
                                                <input type="email" name='email' id="email" class="form-control" placeholder='Your Email' onChange={(e) => setUserdata({ ...Userdata,email : e.target.value })}/>
                                            </div>
                                        </div>

                                        <div class="d-flex flex-row align-items-center mb-4">
                                            <label for="password">
                                                <i class="fas fa-lock fa-lg me-3 fa-fw"></i>
                                            </label>
                                            <div class="form-outline flex-fill mb-0">
                                                <input type="password" name="password" id="password" class="form-control" placeholder='Password' onChange={(e) => setUserdata({ ...Userdata,password : e.target.value })} />
                                            </div>
                                        </div>

                                        {/* <div class="d-flex flex-row align-items-center mb-4">
                                            <label for="confirmpass">
                                                <i class="fas fa-key fa-lg me-3 fa-fw"></i>
                                            </label>
                                            <div class="form-outline flex-fill mb-0">
                                                <input type="password" name='confirmpass' id="confirmpass" class="form-control" placeholder='Confirm Password' />
                                            </div>
                                        </div>

                                        <div class="d-flex flex-row align-items-center mb-4">
                                            <label for="number">
                                                <i class="fas fa-key fa-lg me-3 fa-fw"></i>
                                            </label>
                                            <div class="form-outline flex-fill mb-0">
                                                <input type="password" name='number' id="number" class="form-control" placeholder='Mobile Number' />
                                            </div> */}
                                        {/* </div> */}

                                        {/* <div class="d-flex flex-row align-items-center mb-4">
                                            <label for="otp">
                                                <i class="fas fa-key fa-lg me-3 fa-fw"></i>
                                            </label>
                                            <div class="form-outline flex-fill mb-0">
                                                <input type="password" name='otp' id="otp" class="form-control" placeholder='Send OTP' />
                                            </div>
                                        </div>

                                        <div class="d-flex flex-row align-items-center mb-4">
                                            <label for="confirmotp">
                                                <i class="fas fa-key fa-lg me-3 fa-fw"></i>
                                            </label>
                                            <div class="form-outline flex-fill mb-0">
                                                <input type="password" name='confirmotp' id="confirmpass" class="form-control" placeholder='Confirm OTP' />
                                            </div>
                                        </div> */}

                                        <div class="d-flex justify-content-between mx-4 mb-3 mb-lg-4">
                                            <button type="submit" class="btn btn-primary btn-lg">Register</button>
                                        </div>

                                    </form>
                                    <div>
                                        <ul style={{ listStyle: 'none', hover: { color: 'transparent' }, fontSize: '1.5rem', fontStyle: 'italic' }}>
                                            <li><Link to='/register-therapist' className="links">SignUp as Therapist</Link></li>
                                        </ul>
                                    </div>

                                </div>

                                <div class="col-md-10 col-lg-8 col-xl-6 d-flex align-items-center order-1 order-lg-2">

                                    <img src="assets/img/blog/register.jpg" class="img-fluid" alt="Sample image" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    </section >
)
}


export default Register_Therapist
