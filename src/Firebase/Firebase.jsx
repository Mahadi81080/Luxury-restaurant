// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCnhs-QVLhlw4mOkB8alUt_E-cthNZhxu4",
  authDomain: "luxury-restaurant-df419.firebaseapp.com",
  projectId: "luxury-restaurant-df419",
  storageBucket: "luxury-restaurant-df419.appspot.com",
  messagingSenderId: "989892229597",
  appId: "1:989892229597:web:bac75dad5268cafa061e34"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth