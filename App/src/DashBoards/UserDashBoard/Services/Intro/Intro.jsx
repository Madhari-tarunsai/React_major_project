import React from 'react';
import './Intro.css';

const Intro = () => {
  return (
    <div className="intro-section">
      <h2 className="intro-title">Why Shaadi.com</h2>
      <p className="intro-description">
        Shaadi.com is not just a matchmaking company, we’re a team of driven, technology-first creative minds that are constantly innovation hungry. When you join us, you join a team that is constantly bringing people together not only in India, but across the globe. This is what spearheading togetherness can look like.
      </p>

      <div className="intro-gallery">
        <div className="intro-card">
          <img src="https://careers.peopleinteractive.in/wp-content/uploads/2025/04/Shaadi-Bangalore-2024-scaled-e1744953616733.jpeg" alt="Team at beach" />
          <div className="intro-info">Fun Team Outing</div>
        </div>
        <div className="intro-card">
          <img src="https://careers.peopleinteractive.in/wp-content/uploads/2023/05/DSC01513.jpg" alt="Award ceremony" />
          <div className="intro-info">Recognizing Excellence</div>
        </div>
        <div className="intro-card">
          <img src="https://careers.peopleinteractive.in/wp-content/uploads/2023/05/DSC01588.jpg" alt="Office champion" />
          <div className="intro-info">Office Vibes</div>
        </div>
      </div>
    </div>
  );
};

export default Intro;
