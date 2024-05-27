import { initializeApp } from "firebase/app";
import {getFirestore} from '@firebase/firestore'


const firebaseConfig = {
  apiKey: "AIzaSyAl86w0HZpEfpIw4z_pc9-bauf6ZSq9Mdk",
  authDomain: "extra-clase.firebaseapp.com",
  projectId: "extra-clase",
  storageBucket: "extra-clase.appspot.com",
  messagingSenderId: "984623785178",
  appId: "1:984623785178:web:09e4907896f7dfe898f1e3"
};


const app = initializeApp(firebaseConfig);
export const connDatabase = getFirestore(app);
