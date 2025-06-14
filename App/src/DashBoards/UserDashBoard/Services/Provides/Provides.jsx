import React from 'react';
import './Provides.css';

const services = [
  {
    title: "Free Registration",
    points: ["Create your profile", "Browse profiles", "Express interest freely"],
    img: "https://as1.ftcdn.net/jpg/00/33/08/24/1000_F_33082487_RSOWvCAsZRdW3jnvBE2nLvLpLCPvbgss.jpg",
  },
  {
    title: "Verified Profiles",
    points: ["Strict verification process", "Authentic user base"],
    img: "https://moosocial.com/wp-content/uploads/2016/01/profileverify.png",
  },
  {
    title: "Match Recommendations",
    points: ["AI-powered matches", "Based on preferences"],
    img: "https://www.rchilli.com/hs-fs/hubfs/Search%20%26%20Match%20Engine%20to%20Simplify%20Recruitment.jpg?width=2240&name=Search%20%26%20Match%20Engine%20to%20Simplify%20Recruitment.jpg",
  },
  {
    title: "Premium Membership",
    points: ["See contact info", "Boosted profile visibility"],
    img: "https://thumbs.dreamstime.com/b/premium-membership-badge-stamp-golden-red-ribbon-text-30827692.jpg",
  },
  {
    title: "Shaadi Live",
    points: ["Attend virtual events", "Meet people live"],
    img: "https://img.utdstc.com/screen/db3/4ba/db34ba8335d849a409f050520725fd8d7f29703c1ac765b42f65a0b0311837ec:600",
  },
  {
    title: "Personalized Matchmaking",
    points: ["Relationship manager", "Tailored suggestions"],
    img: "https://images.squarespace-cdn.com/content/v1/5817b2eb9de4bbcf7313f0bc/1588462093052-S55UQR8NQA58VGBT1ZBY/shutterstock_1461933098-min.jpg?format=1500w",
  },
  
  {
    title: "Shaadi App",
    points: ["Access anywhere", "Quick match updates"],
    img: "https://www.shutterstock.com/shutterstock/photos/1910401801/display_1500/stock-photo-new-york-usa-december-shaadi-com-matchmaking-mobile-app-icon-on-phone-screen-top-view-1910401801.jpg",
  },
  {
    title: "Privacy & Security",
    points: ["Profile control", "Encrypted data"],
    img: "https://images.unsplash.com/photo-1584433144859-1fc3ab64a957",
  }
];

const Provides = () => {
  return (
    <div className="provides-section">
      <h2 className="section-title">🌟 Shaadi.com Services</h2>

      <div className="services-grid">
        {services.map((service, index) => (
          <div className="service-card fade-in-up" key={index}>
            <img src={service.img} alt={service.title} className="service-image" />
            <h3>{service.title}</h3>
            <ul>
              {service.points.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Provides;
