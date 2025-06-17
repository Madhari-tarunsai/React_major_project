import React, { useEffect, useState } from 'react';
import './Celebrations.css';
import { dataBase } from '../../../../FireBase/FireBase';
import { collection, getDocs } from 'firebase/firestore';

const Celebrations = () => {
  // const logginadmin=localStorage.getItem('logginadmin')
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        
        const querySnapshot = await getDocs(collection(dataBase, "admin"));
        const eventData = querySnapshot.docs.map(doc => doc.data().eventDetails);
        console.log(eventData)
        setEvents(eventData);
      } catch (error) {
        console.error("Error fetching events:", error);
      }
    };

    fetchEvents();

    
  }, []);
      console.log(events);


  return (
    <div className="celebration-container">
      <h2>Matrimony Celebrations</h2>
      <div className="event-list">
        {events.map((eventArray, i) => (
  eventArray.map((event, j) => (
    <div className="event-card" key={`${i}-${j}`}>
      <h3>{event.name}</h3>
      <p><strong>Date:</strong> {event.date}</p>
      <p><strong>Time:</strong> {event.time}</p>
      <p><strong>Location:</strong> {event.location}</p>
    </div>
  ))
))}

      </div>
    </div>
  );
};

export default Celebrations;
