// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDeBZOZxHTNcWmiwPRfcFO0NPVOzATuv4s",
  authDomain: "react-blog-9b4b1.firebaseapp.com",
  projectId: "react-blog-9b4b1",
  storageBucket: "react-blog-9b4b1.appspot.com",
  messagingSenderId: "485130169893",
  appId: "1:485130169893:web:6cc5aa75859b3c839899cc"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);