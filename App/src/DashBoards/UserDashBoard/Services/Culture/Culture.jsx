import React from 'react';
import './Culture.css';

const Culture = () => {
  return (
    <section className="culture-section">
      <div className="culture-content">
        <div className="culture-media">
          <video
            src="https://careers.peopleinteractive.in/wp-content/uploads/2023/04/5576582-2.mp4"
            autoPlay
            loop
            muted
            playsInline
          />
        </div>
        <div className="culture-text">
          <h2>Culture</h2>
          <p>
            This is why we’ll be the perfect pair. We best describe our culture, like every Shaadi ever —
            it takes a village to make it amazing. We are a bunch of people always working together, with
            a bold, innovative, dynamic approach always looking to up our game. We have figured that the
            best way to get results is by leveraging scale and encouraging our culture of startup thinking.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Culture;
