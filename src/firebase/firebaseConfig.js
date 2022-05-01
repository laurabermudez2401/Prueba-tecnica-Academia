import { initializeApp } from "firebase/app";
import { GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBnKNnom0-27ZR1uNd9MpHUiqzL0xtisaA",
    authDomain: "risoto-vegano.firebaseapp.com",
    projectId: "risoto-vegano",
    storageBucket: "risoto-vegano.appspot.com",
    messagingSenderId: "176877025358",
    appId: "1:176877025358:web:8723edc5d1571489972b1f"
};

const app = initializeApp(firebaseConfig);
const google = new GoogleAuthProvider();
const db = getFirestore();

export {
    app,
    google,
    db
}