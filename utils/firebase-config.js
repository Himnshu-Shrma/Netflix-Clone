import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
const firebaseConfig = {
  apiKey: "AIzaSyCJvpW6fkcTV3rJhHmAPPYXKDcKiIVX1sA",
  authDomain: "react-netflix-clone-a112d.firebaseapp.com",
  projectId: "react-netflix-clone-a112d",
  storageBucket: "react-netflix-clone-a112d.appspot.com",
  messagingSenderId: "615950600563",
  appId: "1:615950600563:web:0f87238161cd68e6551d06",
  measurementId: "G-XXV3MBVPM7"
};


const app = initializeApp(firebaseConfig);

export const firebaseAuth=getAuth(app);




// Fire base link for futute reference
// https://console.firebase.google.com/u/0/project/react-netflix-clone-a112d/authentication/users