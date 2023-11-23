// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBtKJrManU-SuLJjEK3SemmEHDh1bgkgZw",
  authDomain: "cryptobase-2e0e7.firebaseapp.com",
  projectId: "cryptobase-2e0e7",
  storageBucket: "cryptobase-2e0e7.appspot.com",
  messagingSenderId: "24216421062",
  appId: "1:24216421062:web:29e9b9ab49b48e41748dc7",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);

export default app;
