// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey:import.meta.env.VITE_FIREBASE_APIKEY ,
  authDomain: "lms-learning-7d299.firebaseapp.com",
  projectId: "lms-learning-7d299",
  storageBucket: "lms-learning-7d299.firebasestorage.app",
  messagingSenderId: "1055395797404",
  appId: "1:1055395797404:web:82da1fbc050a4f71ee1059"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app)
const provider=new GoogleAuthProvider()

export {auth,provider}