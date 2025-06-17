import React, { useState } from 'react';
import './Login.css';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { Authentication } from '../../FireBase/FireBase';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  const [loggin, setLoggin] = useState({ email: '', password: '', role: '' });
  const [imageSrc, setImageSrc] = useState(
    'https://images.squarespace-cdn.com/content/v1/56b6347007eaa0749953ef98/1621280206978-TT2X17CNP4AUEX56M8T7/BZ6A1696-Edit-2.jpg?format=2500w'
  );
  const [loading, setLoading] = useState(false);

  const handleMouseEnter = () => {
    setImageSrc('https://cdn0.weddingwire.in/article/1262/3_2/960/jpg/82621-telugu-marriage-dates-krishnamoorthi-lead.jpeg');
  };

  const handleMouseLeave = () => {
    setImageSrc(
      'https://images.squarespace-cdn.com/content/v1/56b6347007eaa0749953ef98/1621280206978-TT2X17CNP4AUEX56M8T7/BZ6A1696-Edit-2.jpg?format=2500w'
    );
  };

  const handlersub = async (e) => {
    e.preventDefault();
    const { email, password, role } = loggin;
    setLoading(true);
    try {
      const loginUser = await signInWithEmailAndPassword(Authentication, email, password);
      alert("Login successful");

      if (role === "admin") {
        localStorage.setItem("logginadmin", JSON.stringify(loginUser));
      } else {
        localStorage.setItem("logginuser", JSON.stringify(loginUser));
      }

      navigate(`/${role}DashBoard`);
    } catch (err) {
      console.log(err);
      alert("Login failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {loading && (
        <div className="login-loading-overlay">
          <div className="spinner-ring"></div>
          <p className="loading-text">Logging you in...</p>
        </div>
      )}

      <div className="login-container">
        <div className="login-box">
          <div className="login-image">
            <img
              src={imageSrc}
              alt="Logo"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            />
          </div>
          <div className="login-form">
            <h1>Join Hands Again</h1>
            <form onSubmit={handlersub}>
              <input type="text" placeholder="Enter Email" onChange={(e) => setLoggin({ ...loggin, email: e.target.value })} />
              <input type="password" placeholder="Password" onChange={(e) => setLoggin({ ...loggin, password: e.target.value })} />
              <select onChange={(e) => setLoggin({ ...loggin, role: e.target.value })}>
                <option value="">Choose Role:</option>
                <option value="admin">Admin</option>
                <option value="user">User</option>
              </select>
              <button type="submit" disabled={loading}>Login</button>
              <p>
                I don't have an account... <Link to={"/register"}>Register</Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
