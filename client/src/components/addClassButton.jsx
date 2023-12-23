// src/components/AddClass.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';

function AddClass() {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    // Redirect to the InsAddClass page
    navigate('/ins-add-class');
  };

  return (
    <button className='addclass' onClick={handleButtonClick}>
      Add Class
    </button>
  );
}

export default AddClass;