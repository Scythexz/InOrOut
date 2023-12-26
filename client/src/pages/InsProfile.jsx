import React from 'react';
import Navbar from '../components/navbar';
import InsProfileCard from '../components/insProfileCard';
import { jwtDecode } from "jwt-decode";

function InsProfile() {

  const token = sessionStorage.getItem('token');
  console.log('Undecoded Token:', token);
  const decoded = jwtDecode(token);
  console.log('Decoded:', decoded);

  return (
    <div>
      <Navbar />
      <h1>Instructor's Profile Page</h1>
      <h1>Welcome, {decoded.full_name}</h1>
      <p>Info about you</p>
      {/* Add your content for the home page */}
      {/* Render the InsProfileCard component */}
      <InsProfileCard />
    </div>
  );
}

export default InsProfile;