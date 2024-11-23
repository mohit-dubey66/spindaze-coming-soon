import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCSguyP0aS4Ox_DcoQU9aR2R7-PsteVY0s",
  authDomain: "og-database-01.firebaseapp.com",
  projectId: "og-database-01",
  storageBucket: "og-database-01.firebasestorage.app",
  messagingSenderId: "399184146845",
  appId: "1:399184146845:web:0b23cfb17abe2ff61d7f74",
  measurementId: "G-33JK4Z65XE"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);