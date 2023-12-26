// src/components/InsClassCard.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../styles/insClassCard.css';

function InsClassCard() {

  const [classesList, setClasses] = useState([]);
  const [isStatusOn, setStatus] = useState(false);
  // Start of changes
  const [statusList, setStatusList] = useState([]);
  
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

    const handleToggle = (index) => {
      const newStatusList = [...statusList];
      newStatusList[index] = !newStatusList[index];
      setStatusList(newStatusList);
        // Toggle the status
        if (newStatusList[index]) {
          console.log('-----Sent Email-----');
          console.log('Slider status: On');
          sendEmail();
        } else {
          console.log('Slider status: Off');
        }
      };

  useEffect(() => {
     axios.get('http://localhost:5000/api/ins-show-classes', {
          headers: {
            Authorization: `Bearer ${sessionStorage.getItem('token')}`,
          },
        })
        .then((response) => {
          setClasses(response.data);
          setStatusList(response.data.map(()=>false));
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
    {classesList.map((class_data, index) => (
      <tr key={class_data.id}>
        <td>{class_data.class_name}</td>
        <td>{class_data.class_schedule}</td>
        <td>{class_data.class_code}</td>
        <td>
          <button onClick={handleDelete}>Delete</button>
          <button onClick={handleEdit}>Edit</button>

          <label className="sliderSwitch">
          <input 
            className='sliderInput' 
            type="checkbox" 
            checked={statusList[index]} 
            onChange={() => handleToggle(index)}/>
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