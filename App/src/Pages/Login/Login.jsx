import React, { useState } from 'react';
import {signInWithEmailAndPassword} from 'firebase/auth'
import {Auth} from '../../FireBase/FireBase'
import {useNavigate}from 'react-router-dom'
import './Login.css';

const Login = () => {
  const navitage=useNavigate()
  const[login,setLogin]=useState({email:'',password:'',role:''})
  const handlerlogin=async(e)=>{
    e.preventDefault()
    try{
      await signInWithEmailAndPassword(Auth,login.email,login.password)
      alert("Login sucessfully")
      navitage("/")

    }catch(err){
      console.log(err)
      alert("please check the email or password")
    }

  }

  return (
    <div className="login-container">
      <div className="login-box">
        <h1>User Login</h1>
        <form action="" onSubmit={handlerlogin}>
        <input type="email" placeholder="Enter Email" className="login-input" onChange={(e)=>setLogin({...login,email:e.target.value,})}/>
        <input type="password" placeholder="Enter Password" className="login-input"  onChange={(e)=>setLogin({...login,password:e.target.value,})}/>
        <select className="login-select" defaultValue=""  onChange={(e)=>setLogin({...login,role:e.target.value,})}>
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
        </form>
      </div>
    </div>
  );
};

export default Login;
