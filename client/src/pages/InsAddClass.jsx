import React from 'react';
import Navbar from '../components/navbar';
import InsAddClassCard from '../components/insAddClassCard';

function InsAddClass() {
  return (
    <div>
      <Navbar />
      <h1>Instructor's Add Class Page</h1>
      <InsAddClassCard />
      {/* Add your content for the home page */}
    </div>
  );
}

export default InsAddClass;