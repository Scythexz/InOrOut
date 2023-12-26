// src/components/Navbar.jsx
import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import "../styles/navbar.css";
import logo from '../img/navlogo.png';

function Navbar() {
  const navigate = useNavigate();
  const userType = sessionStorage.getItem('userType');
  const token = sessionStorage.getItem('token');

  console.log('------------');
  console.log('Retrieved userType from sessionStorage:', userType);
  console.log('Retrieved token from sessionStorage:', token);


const handleLogout = () => {
  ['token', 'email', 'userType', 'full_name'].forEach((e)=>{
    sessionStorage.removeItem(e);
  })
  
  navigate('/');
}












  return (

    <nav className="navbar">
      <ul className="navbar-list">
        <li className="navbar-item">

          {/* <Link to="/ins-home"><img className="navlo" src={logo}/></Link> */}

           <Link to={userType === 'instructor' ? '/ins-home' : (userType === 'student' ? '/std-home' : '/')}>
            <img className="navlo" src={logo} alt="Logo" />
            </Link>
        </li>
      </ul>

      <ul className="navbar-list navbar-list-right">
        <li className="navbar-item">

          {/* <Link to="/ins-home"><i className='fas fa-home'></i></Link> */}
          
          <Link to={userType === 'instructor' ? '/ins-home' : (userType === 'student' ? '/std-home' : '/')}>
            <i className='fas fa-home'></i>
            </Link>
        </li>

        <li className="navbar-item">

          {/* <Link to="/ins-profile"><i className='fas fa-user'></i></Link> */}

          <Link to={userType === 'instructor' ? '/ins-profile' : (userType === 'student' ? '/std-profile' : '/')}>
            <i className='fas fa-user'></i>
          </Link>
        </li>

        <li className="navbar-item">
          <button onClick={handleLogout}>
            <i className='fad fa-door-open' ></i>
          </button>
        </li>

      </ul>
    </nav>
  );
}

export default Navbar;