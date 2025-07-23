// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  "projectId": "qbogame-sm2gr",
  "appId": "1:418240252553:web:4275d376b24a5562a91458",
  "storageBucket": "qbogame-sm2gr.firebasestorage.app",
  "apiKey": "AIzaSyAnZ-hao8ENU3NiirzPtlxFH3RjYz69z2c",
  "authDomain": "qbogame-sm2gr.firebaseapp.com",
  "measurementId": "",
  "messagingSenderId": "418240252553"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const auth = getAuth(app);
const db = getFirestore(app);

export { app, auth, db };
