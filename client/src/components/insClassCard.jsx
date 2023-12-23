// src/components/InsClassCard.jsx
import React, { useState } from 'react';
import '../styles/insClassCard.css';

function InsClassCard({ classData, onToggleStatus }) {
  const { className, classSchedule, classCode } = classData;
  const [isStatusOn, setStatus] = useState(false);

  const handleDelete = () => {
    // Add logic for deleting the class
    console.log('Deleting class:', className);
  };

  const handleEdit = () => {
    // Add logic for editing the class
    console.log('Editing class:', className);
  };

  const sendEmail = () => {
    // Add logic for sending an email
    alert('--Sent Email--')
  };

  


  const handleToggle = () => {
    // Toggle the status
    setStatus(!isStatusOn);
    if (!isStatusOn) {
      console.log('-----Sent Email-----');
      console.log('Slider status: On');
      sendEmail();
    } else {
      console.log('Slider status: Off');
    }
  }

  return (
    // <div className="ins-class-card">
    <table className="styled-table">
    <thead>
      <tr>
        <th>Class Name</th>
        <th>Class Schedule</th>
        <th>Class Code</th>
        <th>Manage</th>
      </tr>
    </thead>
        <tbody>
          <tr>
            <td>{className}</td>
            <td>{classSchedule}</td>
            <td>{classCode}</td>
            <td>
              <button onClick={handleDelete}>Delete</button>
              <button onClick={handleEdit}>Edit</button>

              <label className="sliderSwitch">
              <input className='sliderInput' type="checkbox" checked={isStatusOn} onChange={handleToggle} />
              <span className="slider round"></span>
              </label>

            </td>
          </tr>
        </tbody>
      </table>
  )
}

export default InsClassCard;