import React from 'react';
import './Login.css';

const Login = () => {
  return (
    <div className="login-container">
      <div className="login-box">
        <h1>User Login</h1>
        <input type="email" placeholder="Enter Email" className="login-input" />
        <input type="password" placeholder="Enter Password" className="login-input" />
        <select className="login-select" defaultValue="">
          <option value="" disabled>Choose a Role</option>
          <option value="farmer">Farmer</option>
          <option value="buyer">Buyer</option>
        </select>
        <div className="login-actions">
          <button className="login-button">Login</button>
        </div>
        <p className="login-register">
          I don't have an account... <a href="/sigin">Register</a>
        </p>
      </div>
    </div>
  );
};

export default Login;
