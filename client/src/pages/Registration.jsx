// src/pages/Registration.jsx
import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import "../styles/Loginandregistration.css";
import logo from '../img/inorout.png';

function Registration() {
  const [full_name, setFull_Name] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [userType, setUserType] = useState('');

  const navigate = useNavigate();

  const handleRegistration = async () => {
    try {
      const response = await axios.post('http://localhost:5000/api/register', {
        full_name,
        password,
        email,
        userType,
      });
      
      
      console.log(response.data);
      navigate('/');
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
      <h1>Registration Page</h1>
        <label>
          Full Name:
          <input type="text" value={full_name} onChange={(e) => setFull_Name(e.target.value)} />
        </label>
        <br />
        <label>
          Password:
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </label>
        <br />
        <label>
          Email:
          <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
        </label>
        <br />
        <center>
        <label class="choose">
          <input
            type="radio"
            value="instructor"
            checked={userType === 'instructor'}
            onChange={() => setUserType('instructor')}
          />
          
          Instructor &nbsp;
          <input
            type="radio"
            value="student"
            checked={userType === 'student'}
            onChange={() => setUserType('student')}
          />
          Student
        </label>
        </center>
        <br></br>
        <button type="button" class="loginbutton" onClick={handleRegistration}>
          Register
        </button>
        <p class="noacc">
        Already have an account? <Link to="/">Sign In</Link>.
      </p>
      </form>

    </div>
    </div>
  );
}

export default Registration;
