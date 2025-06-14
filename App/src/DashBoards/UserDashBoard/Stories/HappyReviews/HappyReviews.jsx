import React from 'react';
import './HappyReviews.css';
const reviews = [
  {
    name: "Amit & Priya",
    position: "Married Couple",
    company: "Found love via Shaadi.com",
    message: "We met through the platform and instantly connected. Our families met soon after, and the rest is a beautiful journey.",
    image: "https://randomuser.me/api/portraits/men/32.jpg"
  },
  {
    name: "Sneha & Rohan",
    position: "Married Couple",
    company: "Shaadi.com Success Story",
    message: "We found compatibility in every aspect. Thank you for helping us find each other!",
    image: "https://randomuser.me/api/portraits/women/44.jpg"
  },
  {
    name: "Ankit & Neha",
    position: "Happily Married",
    company: "Met via Shaadi.com",
    message: "The process was smooth and respectful. We’re so glad we gave it a chance!",
    image: "https://randomuser.me/api/portraits/men/54.jpg"
  },
  {
    name: "Rahul & Ananya",
    position: "Happily Married",
    company: "Thanks to Shaadi.com",
    message: "Our experience was wonderful. Everything just felt right from the start!",
    image: "https://randomuser.me/api/portraits/women/65.jpg"
  },
  {
    name: "Karan & Meera",
    position: "Soulmates",
    company: "Shaadi.com Couple",
    message: "From the first message to forever — it’s been an incredible journey!",
    image: "https://randomuser.me/api/portraits/men/76.jpg"
  },
  {
    name: "Divya & Raj",
    position: "Newlyweds",
    company: "Love found online",
    message: "We matched, met, and knew it was meant to be. Grateful for this platform!",
    image: "https://randomuser.me/api/portraits/women/77.jpg"
  },
  {
    name: "Pooja & Arvind",
    position: "Happy Couple",
    company: "Shaadi.com Users",
    message: "Our story is simple and sweet — all thanks to a single connection made here.",
    image: "https://randomuser.me/api/portraits/women/85.jpg"
  },
  {
    name: "Ritika & Nikhil",
    position: "Forever Together",
    company: "A Shaadi.com Love Story",
    message: "It felt surreal how quickly we clicked. Thank you for changing our lives!",
    image: "https://randomuser.me/api/portraits/men/90.jpg"
  }
];


const HappyReviews = () => {
  return (
    <div className="reviews-section">
      <h2 className="section-title">What Couples Say About Their Journey</h2>
      <p className="section-subtitle">Real stories from real people who found love through our platform</p>
      <div className="reviews-container">
        {reviews.map((review, index) => (
          <div className="review-card" key={index}>
            <p className="review-text">“{review.message}”</p>
            <div className="reviewer">
              <img src={review.image} alt={review.name} className="reviewer-img" />
              <div>
                <h4>{review.name}</h4>
                <p>{review.position}@{review.company}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HappyReviews;
