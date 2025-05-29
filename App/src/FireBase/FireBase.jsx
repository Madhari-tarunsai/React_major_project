import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
const firebaseConfig = {
  apiKey: "AIzaSyAovCitOJ43Lmv_a47bfjo6sfRKn7mve20",
  authDomain: "react-project-667f7.firebaseapp.com",
  projectId: "react-project-667f7",
  storageBucket: "react-project-667f7.firebasestorage.app",
  messagingSenderId: "920267388337",
  appId: "1:920267388337:web:bca35aee482c0f8636b990",
  measurementId: "G-GKVQ5KZWCV"
};
const app = initializeApp(firebaseConfig);
export const Auth=getAuth(app)
