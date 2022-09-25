import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAiDlRTLa1MX7U3TgDfD0K9bsp5FeQgFxc",
  authDomain: "ceramicando-app.firebaseapp.com",
  projectId: "ceramicando-app",
  storageBucket: "ceramicando-app.appspot.com",
  messagingSenderId: "395355146423",
  appId: "1:395355146423:web:4c6b2735721409886be532",
};

// Initialize Firebase
initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>
);
