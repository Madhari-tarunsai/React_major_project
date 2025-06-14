import React from 'react';
import './Info.css';

const Info = () => {
  return (
    <div className="info-section">
      <div className="download-banner">
        <h2>Download the Matrimony App</h2>
        <div className="app-buttons">
          <a href="https://play.google.com/store/games?hl=en&pli=1" target="_blank" rel="noopener noreferrer">
            <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Google Play" />
          </a>
          <a href="https://apps.apple.com/in/app/shaadi-com-matrimony-app/id480093204" target="_blank" rel="noopener noreferrer">
            <img src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg" alt="Apple Store" />
          </a>
        </div>
      </div>

      <div className="info-logo">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTUOw1Cl96sMG_XOa692Nz2iiVJ8d0YsrdnA&s" alt="Shaadi Logo" />
      </div>

      <div className="info-description">
        <p>
          <strong>Shaadi.com</strong>, India’s No.1 Matchmaking and Matrimony Service<sup>*</sup>, was founded with a simple objective – to help people find happiness.
          Shaadi.com is a leader in what is sometimes known as the matrimony category, having touched more than 50 million lives.
        </p>
        <p>
          <strong>Shaadi.com</strong> – a trusted matrimonial & matchmaking service, has always differentiated itself from other matrimonials through its innovation-led approach by redefining the way Indian brides and grooms meet for marriage.
        </p>
        <p>
          We have also created trusted and renowned community-specific matrimony platforms such as TamilShaadi.com, TeluguShaadi.com, MalayaleeShaadi.com, KannadaShaadi.com,
          BengaliShaadi.com, GujaratiShaadi.com, MarathiShaadi.com, PunjabiShaadi.com and more that have changed the way of finding a life partner.
        </p>
        <p>
          <strong>Shaadi.com</strong> (sometimes mis-spelt as Shadi.com, Shadhi.com or Sadi.com) is a social networking site specialising in matchmaking and not just a matrimonial service.
        </p>
        <p className="note">
          * Based on the number of downloads in the last 12 months of the Shaadi.com App – as reported by AppTweak. <a href="#">Learn more ▸</a>
        </p>
      </div>

      <div className="info-links">
        <a href="#">India</a> | <a href="#">USA</a> | <a href="#">Canada</a> | <a href="#">UK</a> |
        <a href="#">Singapore</a> | <a href="#">Australia</a> | <a href="#">UAE</a> | <a href="#">NRI Matrimonials ▸</a>
      </div>
    </div>
  );
};

export default Info;