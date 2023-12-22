import React from 'react';
import Navbar from '../components/navbar';
import StdClassCard from '../components/stdClassCard';

function StdHome() {
    const classData = {
      title: 'Mathematics 101',
      schedule: 'MWF 10:00 AM - 11:30 AM',
      teacher: 'Mr. Johnson',
      status: 'Enrolled',
    };
  
    return (
      <div>
        <Navbar />
        <h1>Student Home Page</h1>
        <input type="text" placeholder="Invite Code" />
        <button>Join Class</button>
        <StdClassCard classData={classData} />
      </div>
    );
  }
  
export default StdHome;