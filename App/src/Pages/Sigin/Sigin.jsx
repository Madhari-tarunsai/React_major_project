import React, { useState } from 'react';
import { Auth, db } from '../../FireBase/FireBase';
import { createUserWithEmailAndPassword,updateProfile } from 'firebase/auth';
import { setDoc, doc, getDoc } from 'firebase/firestore';
import './Sigin.css';
import { useNavigate } from 'react-router-dom';

const Sigin = () => {
  const navigate = useNavigate();
  const [sigin, setSigin] = useState({
    name: '',
    email: '',
    password: '',
    role: '',
  });

  const handlerSubmit = async (e) => {
    e.preventDefault();

    try {
      const nameDocRef = doc(db, sigin.role, sigin.name);
      const nameDocSnap = await getDoc(nameDocRef);

      if (nameDocSnap.exists()) {
        alert('Name is already registered!');
        return;
      }

      const userCredential = await createUserWithEmailAndPassword(
        Auth,
        sigin.email,
        sigin.password
      );

      console.log('User Registered:', userCredential.user);
      await updateProfile( userCredential .user,{displayName:sigin.name})

     
      await setDoc(doc(db, sigin.role, sigin.name), {
        name: sigin.name,
        email: sigin.email,
        role: sigin.role,
        id: Date.now(),
      });

      alert('Registered successfully!');
      navigate('/login');
    } catch (err) {
      if (err.code === 'auth/email-already-in-use') {
        alert('Email is already registered!');
      } else {
        console.error('Error during sign up:', err.message);
        alert('Registration failed. Please try again.');
      }
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
            value={sigin.name}
            onChange={(e) => setSigin({ ...sigin, name: e.target.value })}
            required
          />
          <input
            type="email"
            placeholder="Enter Email"
            value={sigin.email}
            onChange={(e) => setSigin({ ...sigin, email: e.target.value })}
            required
          />
          <input
            type="password"
            placeholder="Enter Password"
            value={sigin.password}
            onChange={(e) => setSigin({ ...sigin, password: e.target.value })}
            required
          />
          <select
            value={sigin.role}
            onChange={(e) => setSigin({ ...sigin, role: e.target.value })}
            required
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
