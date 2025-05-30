import React from 'react';
import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register';
import { Routes, Route } from 'react-router-dom';
import UserDashBoard from './DashBoards/UserDashBoard/UserDashBoard';
import AdminDashBoard from './DashBoards/AdminDashBoard/AdminDashBoard';
import Home from './DashBoards/AdminDashBoard/Home/Home';

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/userDashBoard" element={<UserDashBoard />} />
        <Route path="/adminDashBoard" element={<AdminDashBoard />}>
        <Route path='' element={<Home/>}/>
        </Route>
      </Routes>
    </div>
  );
};

export default App;
