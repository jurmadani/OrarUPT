// Import the necessary Firebase modules
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage"

// Set up the Firebase configuration object
const firebaseConfig = {
  apiKey: "AIzaSyCAvQSr6SH8IsEkLUgHOC6iMyEV8HNtD2o",
  authDomain: "orar-upt.firebaseapp.com",
  projectId: "orar-upt",
  storageBucket: "orar-upt.appspot.com",
  messagingSenderId: "874642053207",
  appId: "1:874642053207:web:6dd59db4644409f2762b12",
  measurementId: "G-MFF6D4T5CF",
};

// Initialize Firebase app if it hasn't been initialized already
if (!firebase.apps.length) {
  const app = firebase.initializeApp(firebaseConfig);
}

// Export the firebase object for use in other parts of the app
export { firebase };
