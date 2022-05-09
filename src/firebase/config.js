import app from 'firebase/app'
import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyA564YTd9g2-QjlrG3K1f9BljeUrhZ5XIA",
    authDomain: "react-prueba-tomi.firebaseapp.com",
    projectId: "react-prueba-tomi",
    storageBucket: "react-prueba-tomi.appspot.com",
    messagingSenderId: "557517076115",
    appId: "1:557517076115:web:89ba1eae13a20ba9b6bf66"
  };

app.initializeApp(firebaseConfig)

export const auth = firebase.auth();
export const storage = app.storage();
export const db = app.firestore();
