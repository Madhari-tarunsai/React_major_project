import React from 'react';
import './Maps.css';
// import { useNavigate } from 'react-router-dom';
// import { IoArrowBack } from 'react-icons/io5';

const Maps = () => {
//   const navigate = useNavigate();

//   const handleBack = () => {
//     navigate('/');
//   };

  return (
    <div className="maps-container">
      <div className="map-card">

        {/* <button className="back-button" onClick={handleBack}>
          <IoArrowBack className="back-icon" /> Back to Home
        </button> */}

        <div className="left-map-section">
          <h1>📍 Location</h1>
          <h2>🗺️ Address</h2>
          <div className="address">
            <p>251/19/A, 3rd Floor</p>
            <p>Jayalakshmi Towers, Motilal Nehru Nagar,</p>
            <p>Prakash Nagar, Begumpet, Hyderabad, Telangana</p>
            <p><strong>PinCode:</strong> 500016</p>
          </div>
        </div>

        <div className="right-map-section">
          <iframe
            title="Google Map"
            src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Jayalakshmi Towers Motilal Nehru Nagar, Prakash Nagar, Begumpet, Hyderabad, Telangana 500016+(My%20Location)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
            frameBorder="0"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Maps;
