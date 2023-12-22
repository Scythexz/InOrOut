// src/pages/Login.jsx
import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

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
    } catch (error) {
      console.error('Error:', error.response.data.message);
    }
  };

  return (
    <div>
      <h1>Login Page</h1>
      <form>
        <label>
          Email:
          <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
        </label>
        <br />
        <label>
          Password:
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </label>
        <br />
        <button type="button" onClick={handleLogin}>
          Login
        </button>
      </form>

      <p>
        Don't have an account? <Link to="/registration">Register here</Link>.
      </p>
    </div>
  );
}

export default Login;
