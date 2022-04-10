// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAxCMx-gxoTlxhf_bOyk2g9Y9CJQt0o8s4",
  authDomain: "simple-firebase-auth-b01be.firebaseapp.com",
  projectId: "simple-firebase-auth-b01be",
  storageBucket: "simple-firebase-auth-b01be.appspot.com",
  messagingSenderId: "1059696929058",
  appId: "1:1059696929058:web:355b7f6102034859a21d7b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Get auth
export const auth = getAuth(app);

export default app;