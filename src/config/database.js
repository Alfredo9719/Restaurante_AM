// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDYqGhjnHPS4toEZ05ndA6T-9xlr3daqi0",
  authDomain: "fb-proyect-db61a.firebaseapp.com",
  projectId: "fb-proyect-db61a",
  storageBucket: "fb-proyect-db61a.appspot.com",
  messagingSenderId: "472356437411",
  appId: "1:472356437411:web:90aad460d78d79fa242e16"
};

// Initialize Firebase
initializeApp(firebaseConfig);

export const db = getFirestore();