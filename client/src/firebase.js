// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
    authDomain: "blog-aec5d.firebaseapp.com",
    projectId: "blog-aec5d",
    storageBucket: "blog-aec5d.appspot.com",
    messagingSenderId: "85842561184",
    appId: "1:85842561184:web:830c3e8c41ad444c6121c5"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);