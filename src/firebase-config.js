import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyD1I7CkAZz4cirl0-cWs8j3vHEw_MvLwKQ",
    authDomain: "react-food-ordering-app-2b703.firebaseapp.com",
    projectId: "react-food-ordering-app-2b703",
    storageBucket: "react-food-ordering-app-2b703.appspot.com",
    messagingSenderId: "887949439925",
    appId: "1:887949439925:web:9641b65e76130efa82dffc",
    measurementId: "G-KYJLKEBFZE"
  };
  
export const app = initializeApp(firebaseConfig);