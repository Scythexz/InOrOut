import React, { useState } from 'react';
import axios from 'axios';
import Navbar from '../components/navbar';
import "../styles/insAddClass.css";
import { useNavigate } from 'react-router-dom';

function InsAddClass() {
    const [class_name, setClass_Name] = useState('');
    const [class_schedule, setClass_Schedule] = useState('');
    const [class_code, setClass_Code] = useState('');

    const navigate = useNavigate();


    console.log('Class Name:', class_name);
    console.log('Class Schedule:', class_schedule);
    console.log('Class Code:', class_code);

      const handleAddClass = async () => {
        try {
          const response = await axios.post(
            'http://localhost:5000/api/ins-add-class',
            {
              class_name: class_name,
              class_schedule: class_schedule,
              class_code: class_code,
            },
            // {
            //   headers: {
            //     Authorization: sessionStorage.getItem('token'),
            //   },
            // }
          );
    
          console.log(response.data);
            
          if (response.data.success) {
            console.log('Class added successfully');
            navigate('/ins-home');

          } else {
            console.error('Failed to add class:', response.data.message);
          }
        } catch (error) {
          console.error('Error:', error.response.data.message);
        }
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
            <input type="text" value={class_name} onChange={(e) => setClass_Name(e.target.value)} />
          </label>
          <br />
          <label>
            Class Schedule:
            <input type="text" value={class_schedule} onChange={(e) => setClass_Schedule(e.target.value)} />
          </label>
          <br />
          <label>
            Invite Code:
            <input type="text" value={class_code} onChange={(e) => setClass_Code(e.target.value)} />
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