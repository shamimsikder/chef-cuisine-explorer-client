// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCubs6BYIk9FTDjKB68fdzU2sdibckDYjA",
  authDomain: "chef-recipe-hunter.firebaseapp.com",
  projectId: "chef-recipe-hunter",
  storageBucket: "chef-recipe-hunter.appspot.com",
  messagingSenderId: "979712589992",
  appId: "1:979712589992:web:627993133e148d850e429d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app