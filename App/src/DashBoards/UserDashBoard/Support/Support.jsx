import React, { useState } from 'react';
import './Support.css';

const faqs = [
  {
    question: 'How to register on Shaadi?',
    answer: 'You can register by visiting the Shaadi website, clicking on “Register Free,” and filling in your personal details.'
  },
  {
    question: 'What are some of the top-notch safety measures in Shaadi?',
    answer: 'Shaadi offers privacy settings, profile verification, secure communication, and report abuse features to ensure safety.'
  },
  {
    question: 'What is Shaadi "Prime"?',
    answer: 'Shaadi Prime is a premium service that offers personalized matchmaking by relationship managers.'
  },
  {
    question: 'Why choose Shaadi Premium Membership plan?',
    answer: 'It offers enhanced visibility, access to verified profiles, and premium support for better matchmaking.'
  },
  {
    question: 'What are the features of Shaadi?',
    answer: 'Key features include profile creation, partner preferences, match suggestions, chat, and premium upgrades.'
  },
  {
    question: 'How can I verify my profile on Shaadi?',
    answer: 'You can verify your profile using email, phone, or document upload under the verification section.'
  },
  {
    question: 'What is Assisted Service from Shaadi?',
    answer: 'It is a personalized service where experts assist you in finding suitable matches.'
  },
];

const Support = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div className="faq-container">
      <h2 className="faq-title">❓ Frequently Asked Questions</h2>
      {faqs.map((faq, index) => (
        <div key={index} className="faq-item">
          <div className="faq-question" onClick={() => toggleFAQ(index)}>
            {faq.question}
            <span className="faq-toggle">{activeIndex === index ? '−' : '+'}</span>
          </div>
          {activeIndex === index && (
            <div className="faq-answer">{faq.answer}</div>
          )}
        </div>
      ))}
      <p className="faq-footer">
        Looking for something else? Refer to our <span className="highlight">detailed FAQs</span> page
      </p>
    </div>
  );
};

export default Support;
