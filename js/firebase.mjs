// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-app.js";
import {
	getAuth,
	onAuthStateChanged,
	signOut,
} from "https://www.gstatic.com/firebasejs/10.12.5/firebase-auth.js";
import { getFirestore, collection, getDocs } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-firestore.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyBTrp4-IvgnZvpPKF4FOgcgC1w2F2LcQrw",
	authDomain: "student-registration-e0e98.firebaseapp.com",
	projectId: "student-registration-e0e98",
	storageBucket: "student-registration-e0e98.appspot.com",
	messagingSenderId: "602756043035",
	appId: "1:602756043035:web:e34804b1d27b89c6dd83be",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
export { app, auth, db, signOut, onAuthStateChanged, collection, getDocs };
