// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAnalytics} from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDsNdWIn8f6janJThz2IRQNbXV_ERJsIA8",
  authDomain: "mern-book-inventory-fbfa3.firebaseapp.com",
  projectId: "mern-book-inventory-fbfa3",
  storageBucket: "mern-book-inventory-fbfa3.appspot.com",
  messagingSenderId: "175457722977",
  appId: "1:175457722977:web:b624dd4bf057ebc03f0020"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);





export const auth = getAuth();