import React, { useState } from 'react';
import axios from 'axios';
import './Upload.css';
// import { useNavigate } from 'react-router-dom';


const Upload = () => {
  // const navigate=useNavigate()
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    email: '',
    caste: '',
    religion: '',
    phone: '',
    city: '',
    profession: '',
    education: '',
    about: '',
    image: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('https://684a93b0165d05c5d3595dea.mockapi.io/marriages', formData);
      alert('Profile uploaded!');
      // navigate('userDashBoard/peoples')
      
      setFormData({
        name: '', age: '', email: '', caste: '', religion: '', phone: '',
        city: '', profession: '', education: '', about: '', image: ''
      });
    } catch (error) {
      console.error('Error uploading:', error);
    }
  };

  return (
    <div className="upload-container">
      <div className="upload-content">
        <div className="upload-form animated-form">
          <h1>Upload My Details</h1>
          <form onSubmit={handleSubmit}>
            <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Full Name" required />
            <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email Address" required />
            <input type="number" name="age" value={formData.age} onChange={handleChange} placeholder="Age" required />
            <input type="text" name="caste" value={formData.caste} onChange={handleChange} placeholder="Caste" />
            <input type="text" name="religion" value={formData.religion} onChange={handleChange} placeholder="Religion" />
            <input type="text" name="city" value={formData.city} onChange={handleChange} placeholder="City" />
            <input type="text" name="profession" value={formData.profession} onChange={handleChange} placeholder="Profession" />
            <input type="text" name="education" value={formData.education} onChange={handleChange} placeholder="Education" />
            <input type="text" name="about" value={formData.about} onChange={handleChange} placeholder="About Yourself" />
            <input type="text" name="phone" value={formData.phone} onChange={handleChange} placeholder="Phone Number" />
            <input type="text" name="image" value={formData.image} onChange={handleChange} placeholder="Image URL (Paste Google Image Link)" required />
            <button type="submit">Submit</button>
          </form>
        </div>
        <div className="upload-image animated-image">
          <img src="https://clipart-library.com/image_gallery/n1100911.jpg" alt="Upload Illustration" />
        </div>
      </div>
    </div>
  );
};

export default Upload;
