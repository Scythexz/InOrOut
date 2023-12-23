// src/components/Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import "../styles/navbar.css";
import logo from '../img/logo.png';

function Navbar() {
  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li className="navbar-item">
          <Link to="/ins-home"><img src={logo}/></Link>
          {/* <Link to="/std-home">''LogoPlaceholder''</Link> */}
          {/* put code to link to either std-home or ins-home depending on who is logged in*/}
        </li>
      </ul>

      <ul className="navbar-list navbar-list-right">
        <li className="navbar-item">
          <Link to="/ins-home"><i class='fas fa-home'></i></Link>
          {/* <Link to="/std-home">Home</Link> */}
          {/* put code to link to either std-home or ins-home depending on who is logged in*/}
        </li>
        <li className="navbar-item">
          <Link to="/ins-profile"><i class='fas fa-user'></i></Link>
          {/* <Link to="/std-profile">Profile</Link> */}
          {/* put code to link to either std-profile or ins-profile depending on who is logged in*/}
        </li>
        <li className="navbar-item">
          <Link to="/"><i class='fad fa-door-open' ></i></Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;