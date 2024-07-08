
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAkcbIrjHJ2DxFBYxuhDUjuYKlVM1OKBV0",
  authDomain: "portfolio-fba79.firebaseapp.com",
  projectId: "portfolio-fba79",
  storageBucket: "portfolio-fba79.appspot.com",
  messagingSenderId: "86172006713",
  appId: "1:86172006713:web:6a98e00ef5b45a800050e8",
  measurementId: "G-FD0EMVG5R5"
};

const app = initializeApp(firebaseConfig);
export const imgdb = getStorage(app);
export const db = getFirestore(app)