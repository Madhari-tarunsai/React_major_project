import React from 'react';
import './Services.css';
import image from '../../../assets/Images/image03.png';
import Millions from './Millons/Millions';
import Intro from './Intro/Intro';
import Benifits from './Benifits/Benifits';
import Culture from './Culture/Culture';
import Trusted from './Trusted/Trusted';
import Provides from './Provides/Provides';

const Services = () => {
  return (
    <div>
    <div className="services-section">
      <div className="services-left">
        <h1>
          Magic happens with<br />the right match!
        </h1>
        <p>Choose growth, choose us!</p>
        <button className="services-button">Explore Opportunities</button>
      </div>

      <div className="services-right">
        <img
          src={image}
          alt="Team working on launching ideas"
          className="services-image"
        />
      </div>
      
    </div>
    <Millions/>
    <Intro/>
    <Benifits/>
    <Provides/>
    <Culture/>
    <Trusted/>
    
    </div>
    
  );
};

export default Services;
