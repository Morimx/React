import firebase from "firebase";
import "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDBTEDMFnUhCM5vuchYUGjyNhl_sveRzLE",
  authDomain: "coderhouse-11a4e.firebaseapp.com",
  projectId: "coderhouse-11a4e",
  storageBucket: "coderhouse-11a4e.appspot.com",
  messagingSenderId: "693903693855",
  appId: "1:693903693855:web:98378035d946e602dc1d2a",
  measurementId: "G-53XBN5GZVZ",
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

export function getFirebase() {
  return app;
}

export function getFirestore() {
  return firebase.firestore(app);
}
