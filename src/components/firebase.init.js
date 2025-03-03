// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD53Y5uKehnIn9ADguC41dDgcDxM-Vno40",
  authDomain: "assignment-10-a6aeb.firebaseapp.com",
  projectId: "assignment-10-a6aeb",
  storageBucket: "assignment-10-a6aeb.firebasestorage.app",
  messagingSenderId: "239549219784",
  appId: "1:239549219784:web:d83241df648bb68ea036fd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
