// src/components/Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import "../styles/navbar.css";
import logo from '../img/logo.png';

function Navbar() {
  // Retrieve userType from sessionStorage
  const userType = sessionStorage.getItem('userType');
  const token = sessionStorage.getItem('token');
  const full_name = sessionStorage.getItem('full_name');

  console.log('------------');
  console.log('Retrieved userType from sessionStorage:', userType);
  console.log('Retrieved token from sessionStorage:', token);
  console.log('Retrieved full_name from sessionStorage:', full_name);

  return (
    
    <nav className="navbar">
      <ul className="navbar-list">
        <li className="navbar-item">

          {/* <Link to="/ins-home"><img className="navlo" src={logo}/></Link> */}
          {/* <Link to="/std-home">''LogoPlaceholder''</Link> */}

           {/* Conditional rendering of logo link based on userType */}
           <Link to={userType === 'instructor' ? '/ins-home' : (userType === 'student' ? '/std-home' : '/')}>
            <img className="navlo" src={logo} alt="Logo" />
            </Link>
        </li>
      </ul>

      <ul className="navbar-list navbar-list-right">
        <li className="navbar-item">

          {/* <Link to="/ins-home"><i className='fas fa-home'></i></Link> */}
          {/* <Link to="/std-home">Home</Link> */}
          
          {/* Conditional rendering of home link based on userType */}
          <Link to={userType === 'instructor' ? '/ins-home' : (userType === 'student' ? '/std-home' : '/')}>
            <i className='fas fa-home'></i>
            </Link>
        </li>

        <li className="navbar-item">

          {/* <Link to="/ins-profile"><i className='fas fa-user'></i></Link>
          <Link to="/std-profile">Profile</Link> */}

          {/* Conditional rendering of profile link based on userType */}
          <Link to={userType === 'instructor' ? '/ins-profile' : (userType === 'student' ? '/std-profile' : '/')}>
            <i className='fas fa-user'></i>
          </Link>
        </li>

        <li className="navbar-item">
          <Link to="/">
            <i className='fad fa-door-open' ></i>
          </Link>
        </li>

      </ul>
    </nav>
  );
}

export default Navbar;