import React from 'react';
import './Events.css';
import { useNavigate } from 'react-router-dom';

const Event = () => {
    const navigate=useNavigate()
    const handlerform=()=>{
        navigate('Form')

    }
  const events = [
    {
      title: "TANA Matrimony Meet‑Up (USA)",
      date: "July 4, 2025",
      location: "Novi, Michigan",
      description: "A special Telugu matrimonial gathering hosted by TANA for professionals and families.",
    },
    {
      title: "Shaadi Live – Virtual Speed Match",
      date: "Every Weekend",
      location: "Shaadi.com Platform",
      description: "Meet up to 10 matches in 1 hour via live video chat. Premium Shaadi.com users invited weekly.",
    },
    {
      title: "Telugu Speed Dating – Online",
      date: "June 8, 2025",
      location: "Zoom (USA Participants)",
      description: "10-minute video calls to meet Telugu singles across the USA.",
    },
    {
      title: "APTA Matrimony Event (Virtual)",
      date: "March 29, 2025",
      location: "Zoom",
      description: "Hosted by the American Progressive Telugu Association for Telugu singles & families.",
    },
  ];

  return (
    <div className="event-container">
      <h2 className="event-heading">Matrimony Events</h2>

      <div className="event-grid">
        {events.map((event, index) => (
          <div className="event-card" key={index}>
            <h3>{event.title}</h3>
            <p><strong>Date:</strong> {event.date}</p>
            <p><strong>Location:</strong> {event.location}</p>
            <p className="description">{event.description}</p>
          </div>
        ))}
      </div>

      <div className="upload-btn-container">
        <button className="upload-btn" onClick={handlerform}>Upload Event</button>
      </div>
    </div>
  );
};

export default Event;
