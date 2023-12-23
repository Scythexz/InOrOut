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

      const sendEmail = () => {
        console.log('Send Email');
      };

  return (
    <div>
      <Navbar />
<center>
  <br></br>
      <AddClass />

      <InsClassCard classData={classData} onToggleStatus={sendEmail()}/></center>
    </div>
  );
}

export default InsHome;