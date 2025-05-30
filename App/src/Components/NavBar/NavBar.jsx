import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css'; 

const Navbar = ({ role }) => {
  const loggedinuser = JSON.parse(localStorage.getItem("logginuser"));
  const loggedinadmin = JSON.parse(localStorage.getItem("logginadmin"));
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("logginuser");
    localStorage.removeItem("logginadmin");
    navigate("/login");
  };

  return (
    <nav className="navbar">
      <h2>{role === 'admin' ? 'Admin Panel' : 'User Panel'}</h2>
      <ul>
        <li>
          <Link to={role === 'admin' ? '/adminDashBoard' : '/DashBoard'}></Link>
        </li>
         {role === 'admin' && loggedinadmin && (
        <p className="welcome-msg">Welcome:- {loggedinadmin.user.displayName}</p>
      )}
      {role !== 'admin' && loggedinuser && (
        <p className="welcome-msg">Welcome:- {loggedinuser.user.displayName}</p>
      )}
        <li>
          <button onClick={handleLogout} className="logout-button">Logout</button>
        </li>
      </ul>

     
    </nav>
  );
};

export default Navbar;
