import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCf3ew9d8CUAt3qaKUnoGZ0yzzsA4WWYkc",
  authDomain: "mrt-queue-system.firebaseapp.com",
  projectId: "mrt-queue-system",
  storageBucket: "mrt-queue-system.firebasestorage.app",
  messagingSenderId: "1045810417595",
  appId: "1:1045810417595:web:8d7e9327f32af4d2e17e9e",
  measurementId: "G-CT9LPJK46E"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);