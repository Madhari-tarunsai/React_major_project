import React from 'react';
import './About.css';
import brideImage from '../../../assets/Images/image01.png';
import dressImage from '../../../assets/Images/image02.png';
import Sites from './Sites/Sites';
import Trusted from './Trusted/Trusted';

const About = () => {
  return (
    <section className="about-section">
      <h2 className="about-heading">About Shaadi.com</h2>
      <div className="about-content">
        <div className="about-left">
          <img src={brideImage} alt="Shaadi.com Bride" className="main-img" />
          <img src={dressImage} alt="Traditional Attire" className="dress-overlay" />
        </div>
        <div className="about-right">
          <h3>
            <span className="dropcap">W</span>elcome to Shaadi.com
          </h3>
          <p>
            Shaadi.com is one of India’s leading and most trusted matrimonial platforms, connecting millions of people in the search for their perfect life partner.
          </p>
          <p>
            Since our inception, we’ve been dedicated to helping individuals from all walks of life discover meaningful relationships built on trust, compatibility, and tradition. Our advanced matching algorithm, secure platform, and personalized matchmaking services ensure an exceptional experience for every member.
          </p>
          <p>
            Whether you're searching for a partner who shares your values, culture, or lifestyle, Shaadi.com is here to guide your journey to love. Join us and be a part of countless success stories!
          </p>
          <button className="discover-btn">Join Now</button>
        </div>
      </div>
     
     <Sites/>
     <Trusted/>
    </section>
  );
};

export default About;
