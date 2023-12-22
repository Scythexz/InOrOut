// src/pages/Login.jsx
import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      const response = await axios.post('http://localhost:5000/api/login', {
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
      <h1>Login Page</h1>
      <form>
        <label>
          Email:
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
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
