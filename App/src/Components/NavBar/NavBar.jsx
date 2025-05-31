import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css';

const Navbar = ({ role }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const loggedinuser = JSON.parse(localStorage.getItem("logginuser"));
  const loggedinadmin = JSON.parse(localStorage.getItem("logginadmin"));
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("logginuser");
    localStorage.removeItem("logginadmin");
    alert("Logged out successfully...!");
    navigate("/login");
  };

  const displayName = role === 'admin' && loggedinadmin
    ? loggedinadmin.user.displayName
    : loggedinuser?.user?.displayName;

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <h2>{role === 'admin' ? 'Admin Panel' : 'User Panel'}</h2>
      </div>

      <div className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
        ☰
      </div>

      <div className={`navbar-center ${menuOpen ? 'open' : ''}`}>
        <ul className={`nav-links ${menuOpen ? 'active' : ''}`}>
          {role === 'admin' ? (
            <>
              <li><Link to="/adminDashBoard">Home</Link></li>
              <li><Link to="/uploadDetails">Upload Details</Link></li>
              <li><Link to="/showDetail">Show Detail</Link></li>
              <li><Link to="/showDetail">Connection</Link></li>
            </>
          ) : (
            <>
              <li><Link to="/UserDashBoard">Home</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/peoples">Peoples</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </>
          )}
        </ul>
      </div>

      <div className="navbar-right">
        {displayName && <span className="welcome-msg">Welcome: {displayName}</span>}
        <button onClick={handleLogout} className="logout-button">Logout</button>
      </div>
    </nav>
  );
};

export default Navbar;
