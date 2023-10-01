// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBbU7StdMZPP7WK-m6re-yTllun0ZlBWn4",
  authDomain: "simple-firebase-2-e8385.firebaseapp.com",
  projectId: "simple-firebase-2-e8385",
  storageBucket: "simple-firebase-2-e8385.appspot.com",
  messagingSenderId: "84468169462",
  appId: "1:84468169462:web:a49116276e02dbca074ad7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth