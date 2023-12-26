// src/components/InsClassCard.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../styles/insClassCard.css';

function InsClassCard() {

  const [classesList, setClasses] = useState([]);
  const [isStatusOn, setStatus] = useState(false);
  
  const handleDelete = () => {
    // Add logic for deleting the class
    console.log('Deleting class:', className);
  };

  const handleEdit = () => {
    // Add logic for editing the class
    console.log('Editing class:', className);
  };

  const sendEmail = async () => {
    try {
      const response = await axios.post('http://localhost:5000/api/send-email');
  
        // Check if the response is defined before accessing the data property
        if (response && response.data) {
        console.log(response.data);
        } else {
        console.error('Error: Invalid response from the server');
        }
    } catch (error) {
        console.error('Error sending email:', error.response ? error.response.data.message : error.message);
    }
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

  useEffect(() => {
     axios.get('http://localhost:5000/api/ins-show-classes', {
          headers: {
            Authorization: `Bearer ${sessionStorage.getItem('token')}`,
          },
        })
        .then((response) => {
          setClasses(response.data);
          console.log("This is the response data: ", response.data);
        })
       .catch((error) => {
        console.error('Error fetching classes:', error);
      });
    }, []);

return (
    // mapping the data without the table
    // <div>
    //   <ul>
    //     {classesList.map((class_data) => (
    //       <li key={class_data.id}>{class_data.class_name}</li>
    //     ))}
    //   </ul>



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
    {classesList.map((class_data) => (
      <tr key={class_data.id}>
        <td>{class_data.class_name}</td>
        <td>{class_data.class_schedule}</td>
        <td>{class_data.class_code}</td>
        <td>
          <button onClick={handleDelete}>Delete</button>
          <button onClick={handleEdit}>Edit</button>

          <label className="sliderSwitch">
          <input className='sliderInput' type="checkbox" checked={isStatusOn} onChange={handleToggle}/>
          <span className="slider round"></span>
          </label>
        </td>
      </tr>
    ))}
    </tbody>
  </table>
//   </div>
  )
}

export default InsClassCard;