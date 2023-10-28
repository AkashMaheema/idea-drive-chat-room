import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDSORN09D4m4-vQuxuVwE-LcvcrEJb4-IQ",
  authDomain: "chat-room-1b453.firebaseapp.com",
  projectId: "chat-room-1b453",
  storageBucket: "chat-room-1b453.appspot.com",
  messagingSenderId: "449044691688",
  appId: "1:449044691688:web:52036afa6a6927e078e75d"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();