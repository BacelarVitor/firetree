// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyC7zH3d_LvsN7PxTcQQ4lbt7wDiBPJJzfw",
  authDomain: "studies-87ef5.firebaseapp.com",
  projectId: "studies-87ef5",
  storageBucket: "studies-87ef5.firebasestorage.app",
  messagingSenderId: "564999000321",
  appId: "1:564999000321:web:1678d028ddc4d0cc564b00",
  measurementId: "G-7H6BMDHDPQ"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const db = getFirestore();
export const auth = getAuth();
export const storage = getStorage();