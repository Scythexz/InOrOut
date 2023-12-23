import React from 'react';
import Navbar from '../components/navbar';
import AddClass from '../components/addClassButton';
import InsClassCard from '../components/insClassCard';

function InsHome() {
    const classData = {
        className: 'Mathematics 101',
        classSchedule: 'MWF 10:00 AM - 11:30 AM',
        classCode: 'MATH101',
        // Add other className properties as needed
      }; 

  return (
    <div>
      <Navbar />
<center>
  <br></br>
      <AddClass />

      <InsClassCard classData={classData} /></center>
    </div>
  );
}

export default InsHome;