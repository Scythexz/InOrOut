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
      // const userType = response.data.userType;
      const { success, userType, message } = response.data;

      // Navigate to the corresponding home page based on user type
      if (userType === 'instructor') {
        navigate('/ins-home');
      } else if (userType === 'student') {
        navigate('/std-home');
      } else {
        console.error('Unknown user type');
      }
      console.log(response.data.userType);
      if (success) {
        console.log(`Login successful! User Type: ${userType}`);
        // Now you can use userType to navigate accordingly
      } else {
        console.log(`Login failed. ${message}`);
      }
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
              <p className="noacc">
              Don't have an account? </p>
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
