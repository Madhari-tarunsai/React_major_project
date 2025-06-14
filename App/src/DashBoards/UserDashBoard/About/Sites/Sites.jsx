import React from 'react';
import './Sites.css'; 

const Sites = () => {
  return (
    <div className="sites-section">
      <div className="cta-banner">
        <p>Your story is waiting to happen!</p>
        <button>Get Started</button>
      </div>

      <h2 className="sites-title">Search by Popular Matchmaking Sites</h2>

      <div className="sites-grid">
        <div className="site-column">
          <h3>By Mother Tongue</h3>
          <p>Bengali | Gujarati | Hindi | Kannada | Malayalam | Marathi | Odia | Punjabi | Sindhi | Tamil | Telugu</p>
          <a href="#">More Matrimonials ▸</a>
        </div>

        <div className="site-column">
          <h3>By Religion</h3>
          <p>Buddhist | Christian | Jain | Muslim</p>
          <a href="#">More Matrimonials ▸</a>
        </div>

        <div className="site-column">
          <h3>By Community</h3>
          <p>Adi Dravida | Arya Vysya | Brahmin | Ezhava | Iyer | Kamma | Maratha | Nadar | Nair | Reddy | Vokkaliga | Yadav</p>
          <a href="#">More Matrimonials ▸</a>
        </div>
      </div>

      <div className="other-sites">
        <h3>Other Matrimonials</h3>
        <p>
          Agarwal | Balija | Chettiar | Defence | Elite | Iyengar | Jat | Kapu | Kayastha |
          Lingayat | Mudaliyar | Padmashali | Pillai | Rajput | Sourashtra | Thevar |
          Vanniar | Vishwakarma
        </p>
      </div>
    </div>
  );
};

export default Sites;
