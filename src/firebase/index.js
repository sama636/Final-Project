import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCYwq6rjC5NhL-QemKjSxS7bcepQLvwETk",
  authDomain: "dash-549e0.firebaseapp.com",
  projectId: "dash-549e0",
  storageBucket: "dash-549e0.appspot.com",
  messagingSenderId: "577541162125",
  appId: "1:577541162125:web:248a4a956595afb7320ec4",
  measurementId: "G-GVMC7MVRCR"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);