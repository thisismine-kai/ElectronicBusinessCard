import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBYql0Vh1uFGUKfViIqnzmJp5nphrPQKGQ",
  authDomain: "electronicbusinesscard-f3372.firebaseapp.com",
  projectId: "electronicbusinesscard-f3372",
  stojectId: "electronicbusinesscard-f3372",
  storageBucket: "electronicbusinesscard-f3372.appspot.com",
  messagingSenderId: "746502358122",
  appId:"1:746502358122:web:3a282ad08445165cd2f613",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);