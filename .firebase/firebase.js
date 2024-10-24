// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyApJW2JSn9SR5BvoZcCiqFXyipTIvNsheE",
  authDomain: "pawfectcare-defb4.firebaseapp.com",
  projectId: "pawfectcare-defb4",
  storageBucket: "pawfectcare-defb4.appspot.com",
  messagingSenderId: "1076967043668",
  appId: "1:1076967043668:web:24523c20a484372755b3c1",
  measurementId: "G-DNFTZ8S6T8"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);