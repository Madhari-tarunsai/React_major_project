import React from 'react';
import './Footer.css';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import logo from '../assets/Images/image05.png'; // Update path as needed

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">

        <div className="footer-column footer-logo-section">
          <img src={logo} alt="ShaadiMitra Logo" className="footer-logo" />
        </div>

        <div className="footer-column footer-brand">
          <h3>ShaadiMitra</h3>
          <p className="tagline">Bringing hearts together with trust and technology.</p>
        </div>

        <div className="footer-column footer-info">
          <p><FaPhoneAlt className="icon" /> +91 98765 43210</p>
          <p><FaEnvelope className="icon" /> support@shaadimitra.com</p>
          <p><FaMapMarkerAlt className="icon" /> 2nd Floor, Love Lane, Hyderabad, India</p>
        </div>

      </div>

      <div className="footer-socials">
        <a href="#"><FaFacebookF /></a>
        <a href="#"><FaInstagram /></a>
        <a href="#"><FaLinkedinIn /></a>
      </div>

      <p className="footer-copy">&copy; {new Date().getFullYear()} ShaadiMitra. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
