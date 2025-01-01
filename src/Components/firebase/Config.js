// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = { 
  apiKey: import.meta.env.REACT_APP_API,
  authDomain: import.meta.env.REACT_APP_API_DOMAIN,
  projectId: import.meta.env.REACT_APP_API_PROJECT,
  storageBucket: import.meta.env.REACT_APP_API_STORAGE,
  messagingSenderId: import.meta.env.REACT_APP_API_MESSAGE,
  appId: import.meta.env.REACT_APP_API_APPID,
  measurementId: import.meta.env.REACT_APP_API_MEASURE
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);