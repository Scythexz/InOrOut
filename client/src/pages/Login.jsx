// src/pages/Login.jsx
import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import "../styles/Loginandregistration.css";
import logo from '../img/inorout.png';
import { jwtDecode } from "jwt-decode";

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const response = await axios.post('http://localhost:5000/api/login', {
        email,
        password,
      });
      console.log('Start of the Login Console Logs');
      console.log('This is the response data:', response.data);

      const { token, userType } = response.data;

      
      // Navigate to the corresponding home page based on user type
      if (userType === 'instructor') {
        navigate('/ins-home');
      } else if (userType === 'student') {
        navigate('/std-home');
      } else {
        console.error('Unknown user type');
      }
      console.log('User Type:', response.data.userType);
         sessionStorage.setItem('token', token);
         sessionStorage.setItem('userType', userType);
         console.log('Set Token:', token);
         console.log('Set Session Storage - User Type:', userType);

         const decoded = jwtDecode(token);
         console.log('Decoded:', decoded);
         console.log('End of the Login Console Logs');
    } catch (error) {
      console.error('Error:', error.response.data.message);
    }
  };












  return (
    <div className= 'container flex'>
      <div className='login-page flex'>
        <div className='text'>
          <div className='logo'>
          <img src={logo}/>
          </div>
          <p className="slogan">Save time, no hassle. Class alerts in a flash</p>
        </div>
            <form>
            <h1 className="loginh1">Login Page</h1>
            <hr></hr>
              <label>
                Email:
                </label>
                <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
              
              <br />
              <label>
                Password:
                </label>
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
              
              <br />
              <button type="button" className="loginbutton"onClick={handleLogin}>
                Login
              </button>
              <p className="noacc">Don't have an account? </p>
              <p className="noacc"><Link to="/registration">Register here</Link>
              </p>
            </form>
        </div>
      </div>
  );
}





























    // <div className="container flex">
    //   <div className="facebook-page flex">
    //     <div className="text">
    //       <h1>facebook</h1>
    //       <p>Connect with friends and the world </p>
    //       <p> around you on Facebook.</p>
    //     </div>
    //     <form action="#">
    //       <input type="email" placeholder="Email or phone number" required>
    //       <input type="password" placeholder="Password" required>
    //       <div className="link">
    //         <button type="submit" className="login">Login</button>
    //         <a href="#" className="forgot">Forgot password?</a>
    //       </div>
    //       <hr>
    //       <div className="button">
    //         <a href="#">Create new account</a>
    //       </div>
    //     </form>
    //   </div>
    // </div>



export default Login;
