// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyB0D_njIOvSXIxyYTrM9moXIfjVh0HxUqg",
    authDomain: "maliste-e1b3f.firebaseapp.com",
    projectId: "maliste-e1b3f",
    storageBucket: "maliste-e1b3f.appspot.com",
    messagingSenderId: "602741427948",
    appId: "1:602741427948:web:e63c10dd03e80d27079fc9"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export default db;
