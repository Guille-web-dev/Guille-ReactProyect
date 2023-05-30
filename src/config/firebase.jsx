import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAaegCkPgf9dtDI_hCpjUxbU172A7PiJmU",
    authDomain: "dye-industrial.firebaseapp.com",
    projectId: "dye-industrial",
    storageBucket: "dye-industrial.appspot.com",
    messagingSenderId: "853124588200",
    appId: "1:853124588200:web:a1202f387870dd2bb2989d"
  };

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);