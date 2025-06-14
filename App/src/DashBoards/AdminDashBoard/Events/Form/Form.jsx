import React, { useState } from 'react';
import './Form.css';
import { dataBase } from "../../../../FireBase/FireBase";
import { collection, addDoc } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';

const Form = () => {
  const navigate = useNavigate();
  const [eventDetails, setEventDetails] = useState({
    name: '',
    location: '',
    time: '',
    date: ''
  });

  const handleUpload = async (e) => {
    e.preventDefault();
    try {
     
      await addDoc(collection(dataBase, "admin"), eventDetails);
      alert("Your event is added, Boss! Thank you.");
      navigate("/AdminDashBoard/home"); 
    } catch (error) {
      console.error("Error uploading event:", error);
      alert("Failed to upload event.");
    }
  };

  return (
    <div className="form-background">
      <form onSubmit={handleUpload}>
        <h1>Upload Events</h1>
        <input
          type="text"
          placeholder="Enter Event Name"
          required
          onChange={(e) => setEventDetails({ ...eventDetails, name: e.target.value })}
        />
        <input
          type="text"
          placeholder="Enter Event Location"
          required
          onChange={(e) => setEventDetails({ ...eventDetails, location: e.target.value })}
        />
        <input
          type="time"
          required
          onChange={(e) => setEventDetails({ ...eventDetails, time: e.target.value })}
        />
        <input
          type="date"
          required
          onChange={(e) => setEventDetails({ ...eventDetails, date: e.target.value })}
        />
        <button type="submit">Upload</button>
      </form>
    </div>
  );
};

export default Form;
