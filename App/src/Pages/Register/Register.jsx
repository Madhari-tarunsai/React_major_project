// import React, { useState } from 'react'
// import './Register.css'
// import {Authentication,dataBase} from "../../FireBase/FireBase"
// import { createUserWithEmailAndPassword,updateProfile} from 'firebase/auth'
// import {setDoc,doc} from 'firebase/firestore'
// import { useNavigate } from 'react-router-dom'

// const Register = () => {
//     const navigate=useNavigate()
//     const [signin,setSigin]=useState({name:'',password:'',email:'',role:''})
//     const handlersubmit=async(e)=>{
//         e.preventDefault()
//         try{
//             const userDetails=await createUserWithEmailAndPassword(Authentication,signin.email,signin.password)
//             await setDoc( doc(dataBase,`${signin.role}`,signin.name),{
//                 name:signin.name,
//                 email:signin.email,
//                 role:signin.role
//             })
//             console.log(userDetails)
//             alert("Register Done Successfully")
//             navigate('/login')
//             await updateProfile(userDetails.user,{
//                 displayName:signin.name
//             })
            

//         }catch(err){
//             console.log(err)
//             alert('FirebaseError: Firebase: Error (auth/email-already-in-use).')
//         }
        


//     }

//   return (
//     <div className="register-container">
//       <div className="register-box">
//         <div className="register-form">
//           <h1>Wedding Bell Start</h1>
//           <form onSubmit={handlersubmit}>
//             <input type="text" placeholder="Enter Name" onChange={(e)=>setSigin({Authentication,...signin,name:e.target.value})}/>
//             <input type="password" placeholder="Enter Password" onChange={(e)=>setSigin({Authentication,...signin,password:e.target.value})} />
//             <input type="email" placeholder="Enter Email"onChange={(e)=>setSigin({Authentication,...signin,email:e.target.value})} />
//             <select onChange={(e)=>setSigin({Authentication,...signin,role:e.target.value})}>
//               <option value="">Choose Role:</option>
//               <option value="admin">Admin</option>
//               <option value="user">User</option>
//             </select>
//             <button type="submit">Register</button>
//             <p>
//               I already have an account... <a href="/login">Login</a>
//             </p>
//           </form>
//         </div>
//         <div className="register-image">
//           <img
//             src="https://i.pinimg.com/564x/65/ea/0e/65ea0e50299eb71dab67a3d68ef6d3a5.jpg"
//             alt="Wedding"
//           />
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Register
import React, { useState } from 'react';
import './Register.css';
import { Authentication, dataBase } from '../../FireBase/FireBase';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { setDoc, doc } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const navigate = useNavigate();
  const [signin, setSigin] = useState({ name: '', password: '', email: '', role: '' });

  const handlersubmit = async (e) => {
    e.preventDefault();
    const { name, email, password, role } = signin;

    // Restrict admin access to only Tarunsai
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

    try {
      // Create user in Firebase Authentication
      const userDetails = await createUserWithEmailAndPassword(Authentication, email, password);
      console.log('User created:', userDetails.user.uid);

      // Store user in Firestore under their role collection
      await setDoc(doc(dataBase, `${role}`, userDetails.user.uid), {
        uid: userDetails.user.uid,
        name,
        email,
        role,
      });

      // Update user profile with name
      await updateProfile(userDetails.user, {
        displayName: name,
      });

      alert('Register Done Successfully');
      navigate('/login');
    } catch (err) {
      console.error('Error during registration:', err);
      alert(err.message);
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
            <button type="submit">Register</button>
            <p>
              I already have an account... <a href="/login">Login</a>
            </p>
          </form>
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
