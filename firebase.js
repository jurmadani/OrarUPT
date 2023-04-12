import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage"

const firebaseConfig = {
  apiKey: "AIzaSyCAvQSr6SH8IsEkLUgHOC6iMyEV8HNtD2o",
  authDomain: "orar-upt.firebaseapp.com",
  projectId: "orar-upt",
  storageBucket: "orar-upt.appspot.com",
  messagingSenderId: "874642053207",
  appId: "1:874642053207:web:6dd59db4644409f2762b12",
  measurementId: "G-MFF6D4T5CF",
};

if (!firebase.apps.length) {
  const app = firebase.initializeApp(firebaseConfig);

}

export { firebase };
