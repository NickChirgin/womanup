// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAQ223ZOliKX5bB7xRvHMUt4tMOXjUwrXo",
  authDomain: "womanup-fab2d.firebaseapp.com",
  databaseURL: "https://womanup-fab2d-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "womanup-fab2d",
  storageBucket: "womanup-fab2d.appspot.com",
  messagingSenderId: "1060491776525",
  appId: "1:1060491776525:web:f2c9ae5fe528786f327b44"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app)
const db = getFirestore(app)

export {db, storage}