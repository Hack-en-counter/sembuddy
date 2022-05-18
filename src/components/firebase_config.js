import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAnP8_NtvifJMGI8VNQWeP5nNynSZR_dDc",
  authDomain: "sembuddy-5495b.firebaseapp.com",
  projectId: "sembuddy-5495b",
  storageBucket: "sembuddy-5495b.appspot.com",
  messagingSenderId: "1000800134882",
  appId: "1:1000800134882:web:2ff8303222844d3c4ee0bb",
  measurementId: "G-LH5F67ZQ6D"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);