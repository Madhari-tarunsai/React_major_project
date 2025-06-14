import React from 'react';
import './Benifits.css';

const Benifits = () => {
  return (
    <section className="benefits-section">
      <h2 className="benefits-title">Employee benefits</h2>
      <p className="benefits-subtitle">
        You’re the special one for us! While you work relentlessly for togetherness, we take care of your wellbeing.
      </p>

      <div className="benefit-item">
        <div className="benefit-text">
          <h3 className="benefit-heading">Career progression</h3>
          <blockquote className="benefit-quote">
            “Opportunities don’t happen, you create them.” —<i>Chris Grosser</i>
          </blockquote>
          <p className="benefit-description">
            We truly believe in this philosophy. At People Group, we care for your growth!
            Innumerable success stories are testimony to the fact that we are a true
            <strong> #Peoplefirst </strong> company. If you have the hunger, the ability to question
            status quo, are passionate about solving problems or are a hustler, we have the opportunity!
          </p>
        </div>
        <div className="benefit-image">
          <img src="https://careers.peopleinteractive.in/wp-content/uploads/2023/06/DSC01642-500x500.jpg" alt="Team discussing career growth" />
        </div>
      </div>
    </section>
  );
};

export default Benifits;
