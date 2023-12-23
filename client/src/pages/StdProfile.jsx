import React from 'react';
import Navbar from '../components/navbar';
import StdProfileCard from '../components/stdProfileCard';

function StdProfile() {
  return (
    <div>
      <Navbar />
      <br></br>
      <StdProfileCard />
      {/* Add your content for the home page */}
    </div>
  );
}

export default StdProfile;