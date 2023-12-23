// src/components/insAddClassCard.jsx
import React, { useState } from 'react';
import "../styles/insAddClassCard.css"; // Add your custom styles if needed

function InsAddClassCard() {
  const [className, setClassName] = useState('');
  const [classSchedule, setClassSchedule] = useState('');
  const [inviteCode, setInviteCode] = useState('');

  const handleAddClass = () => {
    // Perform actions when the "Add Class" button is clicked
    // You can send the form data to the server or handle it as needed
    console.log('Class Name:', className);
    console.log('Class Schedule:', classSchedule);
    console.log('Invite Code:', inviteCode);

    // Add your logic here to handle the form data (e.g., send it to the server)
  };

  return (
    <div className="addClassCard">
      <form>
      <h2>Add Class</h2>
        <label>
          Class Name:
          <input type="text" value={className} onChange={(e) => setClassName(e.target.value)} />
        </label>
        <br />
        <label>
          Class Schedule:
          <input type="text" value={classSchedule} onChange={(e) => setClassSchedule(e.target.value)} />
        </label>
        <br />
        <label>
          Invite Code:
          <input type="text" value={inviteCode} onChange={(e) => setInviteCode(e.target.value)} />
        </label>
        <br />
        <button type="button" onClick={handleAddClass}>
          Add Class
        </button>
      </form>
    </div>
  );
}

export default InsAddClassCard;