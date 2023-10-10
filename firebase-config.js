import { initializeApp } from "firebase/app";
import { collection, getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDelYbtpQ4XbLoelmuq3AE8oUL3qfHb3lc",
  authDomain: "react-notes-cfcb2.firebaseapp.com",
  projectId: "react-notes-cfcb2",
  storageBucket: "react-notes-cfcb2.appspot.com",
  messagingSenderId: "156751844423",
  appId: "1:156751844423:web:8acf64c8ed2acbccdb8d62",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const notesCollection = collection(db, "notes");
