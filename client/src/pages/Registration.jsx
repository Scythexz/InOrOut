// src/pages/Registration.jsx
import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function Registration() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [userType, setUserType] = useState('');

  const handleRegistration = async () => {
    try {
      const response = await axios.post('http://localhost:5000/api/register', {
        username,
        password,
      });

      console.log(response.data);
    } catch (error) {
      console.error('Error:', error.response.data.message);
    }
  };

  return (
    <div>
      <h1>Registration Page</h1>
      <form>
        <label>
          Full Name:
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
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
        <label>
          <input
            type="radio"
            value="instructor"
            checked={userType === 'instructor'}
            onChange={() => setUserType('instructor')}
          />
          Instructor
          <input
            type="radio"
            value="student"
            checked={userType === 'student'}
            onChange={() => setUserType('student')}
          />
          Student
        </label>
        <br></br>
        <button type="button" onClick={handleRegistration}>
          Register
        </button>
      </form>
      <p>
        Already have an account? <Link to="/">Sign In</Link>.
      </p>
    </div>
  );
}

export default Registration;
