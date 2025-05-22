// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

import {getAuth,GoogleAuthProvider} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBGLjdtXmwj61XFWFvRkc0Z90ApUtkP1Go",
  authDomain: "shopping-3ead1.firebaseapp.com",
  projectId: "shopping-3ead1",
  storageBucket: "shopping-3ead1.firebasestorage.app",
  messagingSenderId: "403849582441",
  appId: "1:403849582441:web:73a54e69a398bf1f89cff8",
  measurementId: "G-TPHNND4TYT"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);

export const auth = getAuth(app)
export const provider = new GoogleAuthProvider();