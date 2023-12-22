// src/components/InsProfileCard.jsx
import React from 'react';
import '../styles/insProfileCard.css';

function InsProfileCard() {
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
          <li>Name <button onClick={() => handleEdit('Name')}>Edit</button></li>
          <hr></hr>
          <li>Email <button onClick={() => handleEdit('Email')}>Edit</button></li>
        </ul>
      </div>

      {/* Security */}
      <div className="profile-section">
        <h2>Security</h2>
        <ul>
          <li>Password <button onClick={() => handleEdit('Password')}>Edit</button></li>
        </ul>
      </div>
    </div>
  );
}

export default InsProfileCard;
