// src/components/Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Optional styling

const Navbar = ({ role }) => {
  return (
    <nav className="navbar">
      <h2>{role === 'admin' ? 'Admin Panel' : 'User Panel'}</h2>
      <ul>
        <li><Link to={role === 'admin' ? '/adminDashBoard' : '/DashBoard'}>Home</Link></li>
        <li><Link to="/login">Logout</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
