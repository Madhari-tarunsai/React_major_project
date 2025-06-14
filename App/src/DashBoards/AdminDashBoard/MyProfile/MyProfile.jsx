import React from 'react';
import './MyProfile.css';
import image from '../../../assets/Images/image04.jpg'

const MyProfile = () => {
  return (
    <div>
    <div className="profile-block">
      <img
        src={image}
        alt="Admin"
        className="profile-photo"
      />

      <div className="profile-details">
        <h2>Tarunsai Madhari</h2>
        <p><strong>Role:</strong> Admin</p>
        <p><strong>Email:</strong> tarunsai@example.com</p>
        <p><strong>Phone:</strong> +91 9876543210</p>
        <p><strong>Gender:</strong> Male</p>
        <p><strong>Date of Birth:</strong> 12th August 2000</p>
        <p><strong>Location:</strong> Hyderabad, Telangana</p>
        <p><strong>Address:</strong> 5-9-20, Near Charminar, Hyderabad, 500001</p>

        <h3>About Me (Admin)</h3>
        <p>
          I am the administrator of this marriage portal, where I manage user profiles, approvals,
          and match-making analytics. I ensure a secure, engaging, and reliable experience for all users.
        </p>

        <h4>Education</h4>
        <p>
          B.Tech in Computer Science from Jawaharlal Nehru Technological University, Hyderabad (2023), 
          specialized in Web Development and Cloud Computing.
        </p>
      </div>
    </div>
    </div>
  );
};

export default MyProfile;
