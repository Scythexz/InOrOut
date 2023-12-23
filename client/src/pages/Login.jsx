// src/pages/Login.jsx
import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import "../styles/Loginandregistration.css";
import logo from '../img/inorout.png';

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

      console.log(response.data);

      // Check the user type after successful login
      const userType = response.data.userType;

      // Navigate to the corresponding home page based on user type
      if (userType === 'instructor') {
        navigate('/ins-home');
      } else if (userType === 'student') {
        navigate('/std-home');
      } else {
        console.error('Unknown user type');
      }
      console.log(response.data.userType);
    } catch (error) {
      console.error('Error:', error.response.data.message);
    }
  };

  return (


    <div class = 'container flex'>
      <div class ='login-page flex'>
        <div class ='text'>
          <div class='logo'>
          <img src={logo}/>
          </div>
          <p class="slogan">Save time, no hassle. Class alerts in a flash</p>
        </div>
            <form>
            <h1 class="loginh1">Login Page</h1>
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
              <button type="button" class="loginbutton"onClick={handleLogin}>
                Login
              </button>
              <p class="noacc">
              Don't have an account? </p>
              <p class="noacc"><Link to="/registration">Register here</Link>
              </p>
            </form>
        </div>
      </div>


  );
}





























    // <div class="container flex">
    //   <div class="facebook-page flex">
    //     <div class="text">
    //       <h1>facebook</h1>
    //       <p>Connect with friends and the world </p>
    //       <p> around you on Facebook.</p>
    //     </div>
    //     <form action="#">
    //       <input type="email" placeholder="Email or phone number" required>
    //       <input type="password" placeholder="Password" required>
    //       <div class="link">
    //         <button type="submit" class="login">Login</button>
    //         <a href="#" class="forgot">Forgot password?</a>
    //       </div>
    //       <hr>
    //       <div class="button">
    //         <a href="#">Create new account</a>
    //       </div>
    //     </form>
    //   </div>
    // </div>



export default Login;
