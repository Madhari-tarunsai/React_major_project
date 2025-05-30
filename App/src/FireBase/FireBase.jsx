
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'
const firebaseConfig = {
  apiKey: "AIzaSyAPAE2RAUDZSa4oGCEGz6nhcuzGKfEewUE",
  authDomain: "telugu-matrimony-app.firebaseapp.com",
  projectId: "telugu-matrimony-app",
  storageBucket: "telugu-matrimony-app.firebasestorage.app",
  messagingSenderId: "970544269910",
  appId: "1:970544269910:web:d8bf9cad9a9b95901749f7",
  measurementId: "G-QN3ZRC6ZW8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
 export const Authentication=getAuth(app)
 export const dataBase=getFirestore(app)
