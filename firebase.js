// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB4jV13BS2oPp4_Ml_vEPJ22sgfdbo_M6g",
  authDomain: "campusconnect-s.firebaseapp.com",
  projectId: "campusconnect-s",
  storageBucket: "campusconnect-s.firebasestorage.app",
  messagingSenderId: "482465005260",
  appId: "1:482465005260:web:20008b938ecc6ffd9b8c69",
  measurementId: "G-ZZXP0MWCE0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);