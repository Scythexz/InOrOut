import React from 'react';
import Navbar from '../components/navbar';
import InsProfileCard from '../components/insProfileCard';

function InsProfile() {
  return (
    <div>
      <Navbar />
      <h1>Instructor's Profile Page</h1>
      <h1>Welcome, {'<'}instructor{'>'}</h1>
      <p>Info about you</p>
      {/* Add your content for the home page */}
      {/* Render the InsProfileCard component */}
      <InsProfileCard />
    </div>
  );
}

export default InsProfile;