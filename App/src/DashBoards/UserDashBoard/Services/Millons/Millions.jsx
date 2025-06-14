import React, { useState } from 'react';
import './Millons.css';

const Millions = () => {
  const [active, setActive] = useState(null);

  const handleClick = (section) => {
    setActive(section);
  };

  return (
    <div className="millions-section">
      <div className="millions-header">
        <h1>Get to know us</h1>
      </div>

      <div className="millions-buttons">
        <button
          className={active === 'section1' ? 'active' : ''}
          onClick={() => handleClick('section1')}
        >
          <img src="https://careers.peopleinteractive.in/wp-content/uploads/2023/02/Frame-15.png" alt="Section 1" />
        </button>

        <img src="https://careers.peopleinteractive.in/wp-content/uploads/2023/02/Frame-18.png" alt="Just an image" />

        <button
          className={active === 'section2' ? 'active' : ''}
          onClick={() => handleClick('section2')}
        >
          <img src="https://careers.peopleinteractive.in/wp-content/uploads/2025/06/astrochat_672x168.png" alt="Section 2" />
        </button>

        <button
          className={active === 'section3' ? 'active' : ''}
          onClick={() => handleClick('section3')}
        >
          <img src="https://careers.peopleinteractive.in/wp-content/uploads/2023/02/Frame-16.png" alt="Section 3" />
        </button>
      </div>

      <div className="millions-content">
        {active === 'section1' && (
          <div className="content-box">
            <h2>Section 1: Our Culture</h2>
            <p>We believe in innovation, creativity, and collaboration across all teams.People Interactive is one of India’s best-known consumer internet companies, always a step ahead of the rest. As suggested in its name, It was conceived not as a business but as an idea that would change the way people find their life partners leveraging the digital ecosystem.</p>
          </div>
        )}
        {active === 'section2' && (
          <div className="content-box">
            <h2>Section 2: AstroChat Services</h2>
            <p>We offer personalized astrological consultations for relationship guidance.Astrochat is your go-to platform for real-time astrology consultations with top astrologers.
Get answers on love, career, and more – live, personal, and just a message away.  </p>
          </div>
        )}
        {active === 'section3' && (
          <div className="content-box">
            <h2>Section 3: Team & Careers</h2>
            <p>Join a diverse and passionate team building technology that matters.In India marriages mean two families coming together. Sangam.com  as a business unit comes with the superpower that innovates to do just that. With more than 2 million profiles, it is emerging as the preferred matchmaking service for Indian families globally.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Millions;
