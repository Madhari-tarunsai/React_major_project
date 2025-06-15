import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './PData.css';
import { BsBookmarkHeartFill } from "react-icons/bs";
import { FaPhone } from "react-icons/fa";

const PData = () => {
  const [profiles, setProfiles] = useState([]);

  useEffect(() => {
    axios.get('https://684a93b0165d05c5d3595dea.mockapi.io/marriages')
      .then((res) => {
        setProfiles(res.data);
      })
      .catch((err) => {
        console.error('Error fetching data:', err);
      });
  }, []);

  return (
    <div className="pdata-container">
      <h1>Marriage Profiles</h1>
      <div className="profiles-grid">
        {profiles.map((profile) => (
          <div className="profile-card" key={profile.id}>
            <img src={profile.image} alt={profile.name} className="profile-img" />
            <h3>{profile.name}</h3>
            <p><strong>About:</strong> {profile.about}</p>
            <p><strong>Caste:</strong> {profile.caste}</p>
            <p><strong>Religion:</strong> {profile.religion}</p>
            <p><strong>Age:</strong> {profile.age}</p>
            <p><strong>City:</strong> {profile.location}</p>
            <p><strong>Profession:</strong> {profile.profession}</p>
            <p><strong>Education:</strong> {profile.education}</p>
            <button style={{backgroundColor:'orange'}}>save <BsBookmarkHeartFill/> </button>
            <button style={{backgroundColor:'green'}}>contact <FaPhone/></button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PData;
