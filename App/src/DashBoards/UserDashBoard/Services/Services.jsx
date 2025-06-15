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
    <>
      <div className="services-section">
        <div className="services-left">
          <h1>
            Magic happens with<br />the right match!
          </h1>
          <p style={{textAlign:'center'}}>Choose growth, choose us!</p>
        </div>

        <div className="services-right">
          <img
            src={image}
            alt="Illustration of a team collaborating to launch new ideas"
            className="services-image"
          />
        </div>
      </div>

      <Millions />
      <Intro />
      <Benifits />
      <Provides />
      <Culture />
      <Trusted />
    </>
  );
};

export default Services;
