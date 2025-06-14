import React, { useEffect, useState } from 'react';
import './Home.css';
import video from '../../../assets/Videos/Video01.mp4';
import Assisent from './Assisent/Assisent';
import Elite from './Elite/Elite';
import Location from './Location/Location';
import Info from './Info/Info'




const Home = () => {
  const [showAlert, setShowAlert] = useState(false);

  useEffect(() => {
    const showTimer = setTimeout(() => {
      setShowAlert(true);

      const hideTimer = setTimeout(() => {
        setShowAlert(false);
      }, 9000); 

      return () => clearTimeout(hideTimer);
    }, 3000); 

    return () => clearTimeout(showTimer);
  }, []);

  return (
    <div>
      <div className='home'>
        <div className='head'>
          <h1>Together<span>Always</span></h1>
          <p>A wedding is a ceremonial event where two people are united in marriage. It is both a personal commitment and often</p>
          <p>a cultural or religious tradition, celebrated with various rituals, customs, and festivities.</p>
        </div>
        <div className='video'>
          <video src={video} muted autoPlay loop controls />
        </div>
      </div>

      {showAlert && (
        <div className='alert-card'>
          <h3>Hey User! 😊</h3>
          <p>Please register if you're interested in selecting the best life partner 💑</p>
        </div>
      )}
      <Assisent/>
      <Elite/>
      <Location/>
      <Info/>
      
      
    

      
    </div>
    
  );
};

export default Home;
