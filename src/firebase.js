// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth , createUserWithEmailAndPassword} from 'firebase/auth'
import {getStorage} from 'firebase/storage'
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBa9vljwGoJg76LBBiPvLSDEa0C14kGABg",
  authDomain: "lawyer-link-cae22.firebaseapp.com",
  projectId: "lawyer-link-cae22",
  storageBucket: "lawyer-link-cae22.appspot.com",
  messagingSenderId: "943128383290",
  appId: "1:943128383290:web:7edb67875e8aae8262ca03"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage()
export const db = getFirestore()