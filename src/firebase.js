// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCcL6z3ticrmITdzPi_re7tETC_qpTQxS4",
  authDomain: "calendardaniel-78047.firebaseapp.com",
  projectId: "calendardaniel-78047",
  storageBucket: "calendardaniel-78047.appspot.com",
  messagingSenderId: "611201925512",
  appId: "1:611201925512:web:04304578a07a5c380cfa3d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
var auth = getAuth(app);
var provider = new GoogleAuthProvider(); 
export {auth , provider};
