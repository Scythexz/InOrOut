import React from 'react';
import Navbar from '../components/navbar';
import StdProfileCard from '../components/stdProfileCard';

function StdProfile() {
  return (
    <div>
      <Navbar />
      <h1>Student's Profile Page</h1>
      <h1>Welcome, {'<'}student{'>'}</h1>
      <p>Info about you</p>
      <StdProfileCard />
      {/* Add your content for the home page */}
    </div>
  );
}

export default StdProfile;