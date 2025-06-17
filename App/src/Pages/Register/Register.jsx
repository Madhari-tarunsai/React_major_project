import React, { useState } from 'react';
import './Register.css';
import { Authentication, dataBase } from '../../FireBase/FireBase';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { setDoc, doc } from 'firebase/firestore';
import { Link, useNavigate } from 'react-router-dom';

const Register = () => {
  const navigate = useNavigate();
  const [signin, setSigin] = useState({ name: '', password: '', email: '', role: '' });
  const [loading, setLoading] = useState(false);

  const handlersubmit = async (e) => {
    e.preventDefault();
    const { name, email, password, role } = signin;

    if (role === 'admin') {
  if (
    email !== 'tarunsai@gmail.com' ||
    password !== '1234567890' ||
    name.toLowerCase() !== 'tarunsai'
  ) {
    alert('Access denied: Only authorized person can register as admin.');
    return;
  }
}


    setLoading(true); 
    try {
      const userDetails = await createUserWithEmailAndPassword(Authentication, email, password);
            await updateProfile(userDetails.user, { displayName:signin.name });


      await setDoc(doc(dataBase, `${role}`, signin.name), {
     
        name,
        email,
        role,
      });
console.log(userDetails);


      alert('Register Done Successfully');
      navigate('/login');
    } catch (err) {
      console.error('Error during registration:', err);
      alert(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="register-container">
      <div className="register-box">
        <div className="register-form">
          <h1>Wedding Bell Start</h1>
          <form onSubmit={handlersubmit}>
            <input
              type="text"
              placeholder="Enter Name"
              onChange={(e) => setSigin({ ...signin, name: e.target.value })}
              required
            />
            <input
              type="password"
              placeholder="Enter Password"
              onChange={(e) => setSigin({ ...signin, password: e.target.value })}
              required
            />
            <input
              type="email"
              placeholder="Enter Email"
              onChange={(e) => setSigin({ ...signin, email: e.target.value })}
              required
            />
            <select
              onChange={(e) => setSigin({ ...signin, role: e.target.value })}
              required
            >
              <option value="">Choose Role:</option>
              <option value="admin">Admin</option>
              <option value="user">User</option>
            </select>
            <button type="submit" disabled={loading}>
              {loading ? 'Registering...' : 'Register'}
            </button>
            <p>
              I already have an account... <Link to={"/login"}>Login</Link>
            </p>
          </form>
          {loading && <div className="loading-spinner"></div>}
        </div>
        <div className="register-image">
          <img
            src="https://i.pinimg.com/564x/65/ea/0e/65ea0e50299eb71dab67a3d68ef6d3a5.jpg"
            alt="Wedding"
          />
        </div>
      </div>
    </div>
  );
};

export default Register;
