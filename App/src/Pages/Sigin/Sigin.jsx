import React, { useState } from 'react';
import { Auth } from '../../FireBase/FireBase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import './Sigin.css';

const Sigin = () => {
  const [sigin, setSigin] = useState({
    name: '',
    email: '',
    password: '',
    role: '',
  });

  const handlerSubmit = async (e) => {
    e.preventDefault(); 
    try {
      const userCredential = await createUserWithEmailAndPassword(
        Auth,
        sigin.email,
        sigin.password
      );
      console.log('User Registered:', userCredential.user);
      alert('register sucessfully...!')

    } catch (err) {
      console.error('Error during sign up:', err.message);
    }
  };

  return (
    <div className="sigin-container">
      <div className="sigin-box">
        <h1>Secure Your Place</h1>
        <form onSubmit={handlerSubmit}>
          <input
            type="text"
            placeholder="Enter Name"
            onChange={(e) => setSigin({ ...sigin, name: e.target.value })}
          />
          <input
            type="email"
            placeholder="Enter Email"
            onChange={(e) => setSigin({ ...sigin, email: e.target.value })}
          />
          <input
            type="password"
            placeholder="Enter Password"
            onChange={(e) => setSigin({ ...sigin, password: e.target.value })}
          />
          <select
            defaultValue=""
            onChange={(e) => setSigin({ ...sigin, role: e.target.value })}
          >
            <option value="" disabled>
              Choose Role
            </option>
            <option value="farmer">Farmer</option>
            <option value="buyer">Buyer</option>
          </select>
          <button type="submit">Register</button>
          <p>
            I already have a membership <a href="/login">Login</a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Sigin;
