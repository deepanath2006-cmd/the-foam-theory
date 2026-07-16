 import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDP5IYcUcpNr13f5Qc1w8pD7ScVyMPU02g",
  authDomain: "the-foam-theory.firebaseapp.com",
  projectId: "the-foam-theory",
  storageBucket: "the-foam-theory.firebasestorage.app",
  messagingSenderId: "137577352938",
  appId: "1:137577352938:web:fdf83883c1b613db70d193",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);