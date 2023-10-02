// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDDj6s5ntlSRxWCHRzZMdLUhK8BqY5AXcA",
  authDomain: "user-email-password-5ee7c.firebaseapp.com",
  projectId: "user-email-password-5ee7c",
  storageBucket: "user-email-password-5ee7c.appspot.com",
  messagingSenderId: "327109378555",
  appId: "1:327109378555:web:3bcf50d36c68b69e914b5e",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
