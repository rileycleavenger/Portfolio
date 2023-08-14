// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
export const firebaseConfig = {
  apiKey: "AIzaSyC2o1M5v9YzLrNBTsszaKxV8Rs9SEp-zGw",
  authDomain: "rileycleavengerportfolio.firebaseapp.com",
  databaseURL: "https://rileycleavengerportfolio-default-rtdb.firebaseio.com",
  projectId: "rileycleavengerportfolio",
  storageBucket: "rileycleavengerportfolio.appspot.com",
  messagingSenderId: "817818736345",
  appId: "1:817818736345:web:ea8f18a03a568508ffd0c8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);