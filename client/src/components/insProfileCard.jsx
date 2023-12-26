// src/components/InsProfileCard.jsx
import React from 'react';
import '../styles/insProfileCard.css';
import { jwtDecode } from "jwt-decode";

function InsProfileCard() {
  const token = sessionStorage.getItem('token');
  console.log('Undecoded Token:', token);
  const decoded = jwtDecode(token);
  console.log('Decoded:', decoded);

  const handleEdit = (section) => {
    // Add logic for editing the corresponding section
    console.log(`Editing ${section}`);
  };

  return (
    <div className="ins-profile-card">
      {/* Basic Info */}
      <div className="profile-section">
        <h2>Basic Info</h2>
        <ul>
          <li>Name: <h3 className=''>{decoded.full_name}</h3><button onClick={() => handleEdit('Name')}><i className='fas fa-pencil-alt'></i></button></li>
          <hr></hr>
          <li>Email: <h3 className=''>{decoded.email}</h3><button onClick={() => handleEdit('Email')}><i className='fas fa-pencil-alt'></i></button></li>
        </ul>
      </div>

      {/* Security */}
      <div className="profile-section">
        <h2>Security</h2>
        <ul>
          <li>Change password <button onClick={() => handleEdit('Password')}><i className='fas fa-pencil-alt'></i></button></li>
        </ul>
      </div>
    </div>
  );
}

export default InsProfileCard;
