// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
    authDomain: "imaginationstation-528f1.firebaseapp.com",
    projectId: "imaginationstation-528f1",
    storageBucket: "imaginationstation-528f1.appspot.com",
    messagingSenderId: "731799376715",
    appId: "1:731799376715:web:770cf37adf90630bc20ece"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);