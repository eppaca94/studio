
// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp, FirebaseApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, FacebookAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAnZ-hao8ENU3NiirzPtlxFH3RjYz69z2c",
  authDomain: "qbogame-sm2gr.firebaseapp.com",
  projectId: "qbogame-sm2gr",
  storageBucket: "qbogame-sm2gr.appspot.com",
  messagingSenderId: "418240252553",
  appId: "1:418240252553:web:4275d376b24a5562a91458",
};

// Initialize Firebase for SSR
const app: FirebaseApp = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore(app);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const facebookProvider = new FacebookAuthProvider();


export { app, auth, db, googleProvider, facebookProvider };
