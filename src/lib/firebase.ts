// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAnZ-hao8ENU3NiirzPtlxFH3RjYz69z2c",
  authDomain: "qbogame-sm2gr.firebaseapp.com",
  projectId: "qbogame-sm2gr",
  storageBucket: "qbogame-sm2gr.appspot.com",
  messagingSenderId: "418240252553",
  appId: "1:418240252553:web:4275d376b24a5562a91458",
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const auth = getAuth(app);
const db = getFirestore(app);

export { app, auth, db };
