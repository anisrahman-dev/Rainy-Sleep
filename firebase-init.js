import { initializeApp } from "https://www.gstatic.com/firebasejs/12.13.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.13.0/firebase-analytics.js";

const firebaseConfig = {
  apiKey: "AIzaSyDSsugCnb7ecr3yAxT0Uq9wySkszw8sbPQ",
  authDomain: "rainscape-b4acd.firebaseapp.com",
  projectId: "rainscape-b4acd",
  storageBucket: "rainscape-b4acd.firebasestorage.app",
  messagingSenderId: "537886226926",
  appId: "1:537886226926:web:b9313e093abd26202e76ff",
  measurementId: "G-6NQ2ZRLDFX"
};

const app = initializeApp(firebaseConfig);
getAnalytics(app);
