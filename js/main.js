import { auth, app, db } from "./firebase.mjs";
import {
	getAuth,
	signInWithEmailAndPassword,
	onAuthStateChanged,
} from "https://www.gstatic.com/firebasejs/10.12.5/firebase-auth.js";

let email = document.getElementById("email");
let password = document.getElementById("password");
let showPass = document.getElementById("show-password");

showPass.addEventListener("click", () => {
	if (showPass.checked) {
		password.type = "text";
	} else {
		password.type = "password";
	}
});

let loginBtn = document.getElementById("login");

loginBtn.addEventListener("click", () => {
	const auth = getAuth();
	signInWithEmailAndPassword(auth, email.value, password.value)
		.then((userCredential) => {
			// Signed in
			const user = userCredential.user;
			alert(`Hello ${user.email}`);
			// ...
		})
		.catch((error) => {
			const errorCode = error.code;
			const errorMessage = error.message;
			alert(errorCode + "\n" + errorMessage);
		});
});
