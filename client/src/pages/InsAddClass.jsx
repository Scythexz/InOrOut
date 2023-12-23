import React from 'react';
import Navbar from '../components/navbar';
import "../styles/insAddClass.css";

function InsAddClass() {
  const handleAddClass = () => {
    
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
    
    console.log('Adding class...');
  };

  return (
    <div>
      <Navbar />
      <h1>Instructor's Add Class Page</h1>
      <div>

        <form>
        <h2>Add Class</h2>
          <label>
            Class Name:
            <input type="text" />
          </label>
          <br />
          <label>
            Class Schedule:
            <input type="text" />
          </label>
          <br />
          <label>
            Invite Code:
            <input type="text" />
          </label>
          <br />
          <button type="button" onClick={handleAddClass}>
            Add Class
          </button>
        </form>
      </div>
    </div>
  );
}

export default InsAddClass;