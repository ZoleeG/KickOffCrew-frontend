import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDxWAFcE1NvO6-6vJomLqoRpM9cAKsUwb8",
  authDomain: "kickoffcrew-fe.firebaseapp.com",
  projectId: "kickoffcrew-fe",
  storageBucket: "kickoffcrew-fe.appspot.com",
  messagingSenderId: "948813811410",
  appId: "1:948813811410:web:912586e2d0e45812b3270b"
};

// Initialize Firebase
export const FIREBASE_APP = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);

