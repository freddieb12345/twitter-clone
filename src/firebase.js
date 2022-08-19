// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
import { getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBeVo6MS3MDhUdgeNmc64jGiR0jF0iL6uk",
  authDomain: "twitter-clone-9dae7.firebaseapp.com",
  projectId: "twitter-clone-9dae7",
  storageBucket: "twitter-clone-9dae7.appspot.com",
  messagingSenderId: "944787848921",
  appId: "1:944787848921:web:8fcbb04abe4ab22ff648c8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth()
export const db = getFirestore(app)