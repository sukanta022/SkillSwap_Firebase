// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAI6eTd27pK5ldkgglHm1P3eFlV7ku29-Q",
  authDomain: "skillswap-1a2a7.firebaseapp.com",
  projectId: "skillswap-1a2a7",
  storageBucket: "skillswap-1a2a7.firebasestorage.app",
  messagingSenderId: "761788445130",
  appId: "1:761788445130:web:f47445ee22ee51f6365f33"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);