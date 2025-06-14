import React from 'react';
import './Location.css';
import { useNavigate } from 'react-router-dom';

const Loaction = () => {
  const navigate = useNavigate();

  const handlerclick = (e) => {
    e.preventDefault();
    alert("Thank you for visiting the store");
    navigate('/maps'); 
  };

  return (
    <div className="location-container">
      <div className="location-inner">
        <div className="location-left">
          <h2>
            <span className="bold-text">Shaadi.com</span>{' '}
            <span className="orange-text">Retail Outlet</span>
          </h2>
          <p className="location-subtext">
              Visit your nearest Shaadi.com store  <br /> to get assistance on
          </p>

          <ul className="location-services">
            <li>
              <span className="icon">👤</span>
              <p><strong>Registering your profile</strong></p>
            </li>
            <li>
              <span className="icon">📱</span>
              <p><strong>Using Shaadi.com platform</strong></p>
            </li>
            <li>
              <span className="icon">🎛️</span>
              <p>
                <strong>Enhancing your profile</strong> and setting your preferences
              </p>
            </li>
            <li>
              <span className="icon">💳</span>
              <p><strong>Making payments</strong></p>
            </li>
          </ul>

          <button className="store-button" onClick={handlerclick}>
            Find nearest store →
          </button>
        </div>

        <div className="location-right">
          <img
            src="https://mir-s3-cdn-cf.behance.net/projects/404/f92d4f215832679.Y3JvcCw1MTM0LDQwMTYsMzgsMA.jpg"
            alt="BharatMatrimony store"
            className="store-image"
          />
        </div>
      </div>
    </div>
  );
};

export default Loaction;
