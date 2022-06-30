// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDnsI5fS4ubiWcSboyexAPYVlJiSRJOWaQ",
  authDomain: "e-commerce-2022-ba6e0.firebaseapp.com",
  projectId: "e-commerce-2022-ba6e0",
  storageBucket: "e-commerce-2022-ba6e0.appspot.com",
  messagingSenderId: "33338290046",
  appId: "1:33338290046:web:202feddeb388022f4ecd2f",
  measurementId: "G-N25W5BM7V6",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
const analytics = getAnalytics(app);


 