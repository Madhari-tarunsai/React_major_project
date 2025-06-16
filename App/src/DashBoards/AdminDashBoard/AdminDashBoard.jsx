
import Navbar from '../../Components/NavBar/NavBar';
import './AdminDashBoard.css';
import { Outlet } from 'react-router-dom';

const AdminDashBoard = () => {


  return (
    <div className="admin-dashboard">
      <Navbar role="admin" />
      <Outlet />
      
    </div>
  );
};

export default AdminDashBoard;
