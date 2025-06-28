
import { initializeApp,getApp,getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyDDUJpF0pms8mpqQPcDD13rwM2x6-8gdL4",
  authDomain: "prepo-fad19.firebaseapp.com",
  projectId: "prepo-fad19",
  storageBucket: "prepo-fad19.firebasestorage.app",
  messagingSenderId: "289217602972",
  appId: "1:289217602972:web:063a2dd3e811d3dab8d459",
  measurementId: "G-GEBG61QXHD"
};

// Initialize Firebase
const app =!getApps.length? initializeApp(firebaseConfig):getApp();
export const auth = getAuth(app);
export const db = getFirestore(app);