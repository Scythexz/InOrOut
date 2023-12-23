import React from 'react';
import Navbar from '../components/navbar';
import StdClassCard from '../components/stdClassCard';
import '../styles/stdhome.css';
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
        <br></br>
        <center><input type="text" placeholder="Invite Code" className='inv'/>
        <button className='join'><i class='fas fa-plus'></i></button></center>
        <StdClassCard classData={classData} />
      </div>
    );
  }
  
export default StdHome;