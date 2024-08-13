
// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-analytics.js";
import { getFirestore, doc, setDoc, collection, addDoc } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-firestore.js";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyD14PdRg0seuHketpvv9-MumjjPW9Hgqec",
    authDomain: "stanmed1.firebaseapp.com",
    projectId: "stanmed1",
    storageBucket: "stanmed1.appspot.com",
    messagingSenderId: "785422279749",
    appId: "1:785422279749:web:6c95976c02017943e06f2c",
    measurementId: "G-650GLKGRHZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

export {
    db,
    doc,
    setDoc,
    collection,
    addDoc
}