import React from 'react';
import './Trusted.css';

const Trusted = () => {
  return (
    <div className="trusted-container">
      <div className="trusted-badge">Trusted by Millions</div>

      <div className="trusted-features">
        <div className="feature-item">
          <span className="icon">👩‍❤️‍👨</span>
          <p>Best Matches</p>
        </div>
        <div className="feature-item">
          <span className="icon">🛡️</span>
          <p>Verified Profiles</p>
        </div>
        <div className="feature-item">
          <span className="icon">🔒</span>
          <p>100% Privacy</p>
        </div>
      </div>

      <div className="footer-links">
        <div className="footer-column">
          <h4>Need Help?</h4>
          <ul>
            <li>Member Login</li>
            <li>Sign Up</li>
            <li>Partner Search</li>
            <li>How to Use Shaadi.com</li>
            <li>Premium Memberships</li>
            <li>Customer Support</li>
            <li>Site Map</li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>Company</h4>
          <ul>
            <li>About Us</li>
            <li>Shaadi Blog</li>
            <li>Careers</li>
            <li>Awards & Recognition</li>
            <li>Contact Us</li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>Privacy & You</h4>
          <ul>
            <li>Terms of Use</li>
            <li>Privacy Policy</li>
            <li>Be Safe Online</li>
            <li>Report Misuse</li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>More</h4>
          <ul>
            <li>VIP Shaadi</li>
            <li>Select Shaadi</li>
            <li>Sangam</li>
            <li>Shaadi Centres</li>
            <li>Success Stories</li>
            <li>Shaadi Live</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Trusted;
