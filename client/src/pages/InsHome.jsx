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
      {/* <h1>Instructor's Home Page</h1> */}
      <br></br>
      <center><AddClass /></center>
      {/* <table className="styled-table">
        <thead>
          <tr>
            <th>Class Name</th>
            <th>Class Schedule</th>
            <th>Class Code</th>
            <th>Manage</th>
          </tr>
        </thead>
        {/* <tbody>
        <InsClassCard classData={classData} />
        </tbody> */}
      </table>
      <InsClassCard classData={classData} />
    </div>
  );
}

export default InsHome;