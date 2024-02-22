// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAUzy-4QFTYpIGYnVDJteyL2PAuSI7ilkM",
    authDomain: "instagram-ammar.firebaseapp.com",
    projectId: "instagram-ammar",
    storageBucket: "instagram-ammar.appspot.com",
    messagingSenderId: "787896669691",
    appId: "1:787896669691:web:416b99ab5b8c39724f675e",
    measurementId: "G-9FC3PD1Q4Z"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app)
const firestore = getFirestore(app)

export { auth  , firestore}