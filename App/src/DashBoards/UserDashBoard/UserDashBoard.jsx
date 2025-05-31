import React from 'react';
import Navbar from '../../Components/NavBar/NavBar';
import './UserDashboard.css';

const UserDashBoard = () => {
  return (
    <div className="dashboard-container">
      <Navbar role="user" />
      <div className="dashboard-banner">
        <div className="dashboard-overlay">
          <div className="dashboard-content">
            <h1 className="fade-in">Welcome to Your Matchmaking Journey</h1>
            <p className="slide-in">Where hearts meet and dreams begin</p>
            <button className="pulse-button">Explore Matches</button>
          </div>
        </div>
        <div className="dashboard-images">
          <img src="https://is1-ssl.mzstatic.com/image/thumb/PurpleSource211/v4/dc/63/3d/dc633d4c-0533-e9f7-c639-c0e13345fd89/06_-_App_store_images_-_iPad_12.9.jpg/643x0w.jpg" alt="Couple 1" className="dashboard-image image1" />
          <img src="https://play-lh.googleusercontent.com/pl0ZDQi0LXgt5sgjznLQ_kYwRlwzB9OqD2KPe9NCwTa5jKvHxDilCyVpMFHHKZeS2v8" alt="Couple 2" className="dashboard-image image2" />
        </div>
      </div>
    </div>
  );
};

export default UserDashBoard;
