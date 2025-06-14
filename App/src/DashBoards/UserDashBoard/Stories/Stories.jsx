import React from 'react';
import './Stories.css'; 
import HappyStories from './HappyStories/HappyStories';
const Stories = () => {
  return (
    <div>
    <div className="stories-section">
      <h1 className="stories-title">Millions of Happy Stories</h1>
      <div className="stories-grid">
        <div className="story-card">
          <img src="https://img.shaadi.com/success-story/0SH55395199-3SH14719424-big.jpg" alt="Couple 1" />
          <div className="overlay">
            <h2>Rahul & Sneha</h2>
            <p>Met on Shaadi.com & happily married since 2023.</p>
          </div>
        </div>
        <div className="story-card">
          <img src="https://img.shaadi.com/success-story/PSH36189286-dSH14082042-big.jpg" alt="Couple 2" />
          <div className="overlay">
            <h2>Aryan & Priya</h2>
            <p>A perfect match, thanks to online love!</p>
          </div>
        </div>
        <div className="story-card">
          <img src="https://img.shaadi.com/success-story/lSH62007627-3SH86532006-big.jpg" alt="Couple 3" />
          <div className="overlay">
            <h2>Vikas & Neha</h2>
            <p>Found each other through destiny & swipes.</p>
          </div>
        </div>
        <div className="story-card">
          <img src="https://img.shaadi.com/success-story/zSH16791218-hSH90531714-big.jpg" alt="Couple 4" />
          <div className="overlay">
            <h2>Rohan & Kavya</h2>
            <p>Love at first chat. Married in 2024!</p>
          </div>
        </div>
        <div className="story-card">
          <img src="https://img.shaadi.com/success-story/sSH11230940-0SH47525590-big.jpg" alt="Couple 5" />
          <div className="overlay">
            <h2>Manoj & Aditi</h2>
            <p>Forever together after finding each other online.</p>
          </div>
        </div>
        <div className="story-card">
          <img src="https://img.shaadi.com/success-story/MSH67789311-4SH17374704-big.jpg" alt="Couple 6" />
          <div className="overlay">
            <h2>Kunal & Riya</h2>
            <p>A magical story written on Shaadi.com</p>
          </div>
        </div>
         <div className="story-card">
          <img src="https://img.shaadi.com/success-story/NSH96150218-RSH75103656-big.jpg" alt="Couple 6" />
          <div className="overlay">
            <h2>Rahul & Mounika</h2>
            <p>Out of all the people in the world Out of all the places Somehow, something brought The two of us together At the right place At the right time ..... It's on shadi.com thanks to all teamShaadi.com</p>
          </div>
        </div>
         <div className="story-card">
          <img src="https://img.shaadi.com/success-story/CSH22286757-9SH27665459-big.jpg" alt="Couple 6" />
          <div className="overlay">
            <h2>Preeti & Hanish</h2>
            <p>I never believed in love at first sightuntil I met Hanish. The moment he opened the door of the restaurant and our eyes met, I instantly fell in love. He felt the same special connection, and in that Shaadi.com</p>
          </div>
        </div>
      </div>
    </div>
    <HappyStories/>
    </div>
  );
};

export default Stories;
