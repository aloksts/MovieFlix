// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAt0cJvJgOssgKGxzWYJAnLRbFY5KCXSmk",
  authDomain: "movieflix-71250.firebaseapp.com",
  projectId: "movieflix-71250",
  storageBucket: "movieflix-71250.appspot.com",
  messagingSenderId: "681520690420",
  appId: "1:681520690420:web:27b63b54a18505cdaedaa1",
  measurementId: "G-0R1TYY5K4S"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
console.log(analytics);

export const auth = getAuth();


