import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../../Components/NavBar/NavBar';

const UserDashBoard = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  );
};

export default UserDashBoard;
