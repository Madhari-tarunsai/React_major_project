import React from 'react';
import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register';
import { Routes, Route } from 'react-router-dom';
import UserDashBoard from './DashBoards/UserDashBoard/UserDashBoard';
import AdminDashBoard from './DashBoards/AdminDashBoard/AdminDashBoard';

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/DashBoard" element={<UserDashBoard />} />
        <Route path="/adminDashBoard" element={<AdminDashBoard />} />
      </Routes>
    </div>
  );
};

export default App;
