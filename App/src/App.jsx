import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";
import UserDashBoard from "./DashBoards/UserDashBoard/UserDashBoard";
import AdminDashBoard from "./DashBoards/AdminDashBoard/AdminDashBoard";
import Home from "./DashBoards/UserDashBoard/Home/Home";
import About from "./DashBoards/UserDashBoard/About/About";
import Services from './DashBoards/UserDashBoard/Services/Services'
import Support from './DashBoards/UserDashBoard/Support/Support'
import Stories from './DashBoards/UserDashBoard/Stories/Stories'
import People from './DashBoards/UserDashBoard/People/People'
import Celebrations from "./DashBoards/UserDashBoard/People/Celebrations/Celebrations";
import Upload from "./DashBoards/UserDashBoard/People/Upload/Upload";
import ShownInterest from './DashBoards/UserDashBoard/People/ShownInterest/ShownInterest'
import Astrology from "./DashBoards/UserDashBoard/People/Astrology/Astrology";
import Banner from "./DashBoards/AdminDashBoard/Banner/Banner";
import MyProfile from "./DashBoards/AdminDashBoard/MyProfile/MyProfile";
import Event from "./DashBoards/AdminDashBoard/Events/Event";
import Form from "./DashBoards/AdminDashBoard/Events/Form/Form";

const App = () => {
  return (
    <div>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        <Route path="/userDashBoard" element={<UserDashBoard />}>
          <Route index element={<Navigate to="home" replace />} />
          <Route path="home" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="stories" element={<Stories/>} />
          <Route path='services' element={<Services/>}/>
          <Route path='support' element={<Support/>}/>
          <Route path='peoples' element={<People/>}/>
          <Route path='peoples/Celebration' element={<Celebrations/>}/>
          <Route path='peoples/Upload' element={<Upload/>}/>
          <Route path='peoples/ShownIntrest' element={<ShownInterest/>}/>
           <Route path='peoples/astrology' element={<Astrology/>}/>
        </Route>

        {/* Admin Dashboard */}
        <Route path="/AdminDashBoard" element={<AdminDashBoard />} >
          <Route index element={<Navigate to="home" replace />} />
        <Route path='/AdminDashBoard/home' element={<Banner/>}/>
        <Route path='MyProfile' element={<MyProfile/>}/>
        <Route path='Events' element={<Event/>}/>
        <Route path="Events/Form" element={<Form/>}/>
        </Route>
      </Routes>
    </div>
  );
};

export default App;
