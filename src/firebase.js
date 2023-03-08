// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBxOM3zXSBZzieAXix92DHOOgcPO09zmww",
  authDomain: "disney-clone-5efcc.firebaseapp.com",
  projectId: "disney-clone-5efcc",
  storageBucket: "disney-clone-5efcc.appspot.com",
  messagingSenderId: "262332628471",
  appId: "1:262332628471:web:5cbdc1c083ab90e06402f2",
  measurementId: "G-BTKYBW02F8",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const analytics = getAnalytics(firebaseApp);
const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);
const provider = new GoogleAuthProvider();
const storage = getStorage();

export { auth, provider, storage, signInWithPopup };
export default db;
