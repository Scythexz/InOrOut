// src/components/InsClassCard.jsx
import React from 'react';
import '../styles/insClassCard.css';

function InsClassCard({ classData }) {
  const { className, classSchedule, classCode } = classData;

  const handleDelete = () => {
    // Add logic for deleting the class
    console.log('Deleting class:', className);
  };

  const handleEdit = () => {
    // Add logic for editing the class
    console.log('Editing class:', className);
  };

  const handleStatus = () => {
    // Add logic for managing the class status
    console.log('Managing status for class:', className);
  };

  return (
    <div className="ins-class-card">
      <table>
        <tbody>
          <tr>
            <td>{className}</td>
            <td>{classSchedule}</td>
            <td>{classCode}</td>
            <td>
              <button onClick={handleDelete}>Delete</button>
              <button onClick={handleEdit}>Edit</button>
              <button onClick={handleStatus}>Status</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default InsClassCard;