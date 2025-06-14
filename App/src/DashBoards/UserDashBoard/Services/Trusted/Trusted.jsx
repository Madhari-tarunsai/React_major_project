import React from 'react';
import './Trusted.css';

const Trusted = () => {
  return (
    <section className="trusted-section">
      <h2>Shaadi.com - Other trusted services</h2>
      <div className="trusted-cards">
        <div className="trusted-card">
          <h3>
            <span className="weddingbazaar-logo">wedding</span><span className="highlight">bazaar</span><br />
            <span className="subtext">from Matrimony.com group</span>
          </h3>
          <p>India's Largest Wedding Planning Platform</p>
          <ul>
            <li><strong>Photographers, Makeup artists, Caterers</strong> and more. Hire best vendors!</li>
            <li><strong>Trusted wedding market place</strong> from matrimony.com group</li>
            <li><strong>2.8 Lakh+ trusted vendors across 40+ cities</strong></li>
          </ul>
        </div>

        <div className="trusted-card">
          <h3>
            <span className="mandap-logo">mandap.com</span><br />
            <span className="subtext">from Matrimony.com group</span>
          </h3>
          <p>India's Largest Wedding Venue Booking Platform</p>
          <ul>
            <li><strong>Free assistance</strong> in finding your venue</li>
            <li><strong>100% verified</strong> venues</li>
            <li><strong>40,000+ venues</strong></li>
            <li><strong>Service available over 20+ cities</strong></li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Trusted;
