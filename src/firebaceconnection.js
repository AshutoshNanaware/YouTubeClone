// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDntB1bUCRo56sRb7NzLlTfz7UgWz-sBSI",
  authDomain: "clone-d4a43.firebaseapp.com",
  databaseURL: "https://clone-d4a43-default-rtdb.firebaseio.com",
  projectId: "clone-d4a43",
  storageBucket: "clone-d4a43.appspot.com",
  messagingSenderId: "691737996361",
  appId: "1:691737996361:web:47e0d404a75d8f1acba398",
  measurementId: "G-PMR4QWNT5R"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);