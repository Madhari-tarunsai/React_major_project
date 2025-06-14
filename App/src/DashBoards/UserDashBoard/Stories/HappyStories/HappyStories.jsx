import React from 'react';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './HappyStories.css';
import HappyReviews from '../HappyReviews/HappyReviews';

const HappyStories = () => {
  return (
    <div>
    <div className="happy-stories-container">
      <div className="heading-wrapper">
        <h1 className="section-title">💞 Happy Stories</h1>
      </div>
      <Carousel fade>
        <Carousel.Item interval={1500}>
          <img
            className="d-block w-100"
            src="https://images.unsplash.com/photo-1621801306185-8c0ccf9c8eb8?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW5kaWFuJTIwbWFycmlhZ2V8ZW58MHx8MHx8fDA%3D"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First Love Story</h3>
            <p>
              Ceremony that each guest looks forward to the most. While sangeet ceremonies are often separate,
              today’s generation believes in celebrating together with friends and family.
              It's a joyful memory-making moment filled with dance, fun, and love.
            </p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item interval={1500}>
          <img
            className="d-block w-100"
            src="https://img.freepik.com/free-photo/groom-putting-ring-bride-s-finger_1157-338.jpg?semt=ais_hybrid&w=740"
            alt="Second slide"
          />
          <Carousel.Caption>
            <h3>Our Wedding Journey</h3>
            <p>
              The engagement ceremony is a traditional ritual where rings are exchanged and gifts are shared.
              It marks the beginning of a beautiful journey together with blessings from both families.
            </p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://camouflageclicks.com/assets/uploads/blog/8972747.png"
            alt="Third slide"
          />
          <Carousel.Caption>
            <h3>A Match Made in Heaven</h3>
            <p>
              Indian weddings are rich with rituals and culture. Each tradition brings people closer, celebrating
              love like a festival across vibrant ceremonies, languages, and cultures.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
     
    </div>
     <HappyReviews/>
    </div>
  );
};

export default HappyStories;
