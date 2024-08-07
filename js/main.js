import { auth, app, db } from "./firebase.mjs";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-auth.js";

let email = document.getElementById("email");
let password = document.getElementById("password");
let loginBtn = document.getElementById("login");

loginBtn.addEventListener("click", () => {
	const auth = getAuth();
	signInWithEmailAndPassword(auth, email.value, password.value)
		.then((userCredential) => {
			// Signed in
			const user = userCredential.user;
            alert(user.email);
            console.log(user);
            
			// ...
		})
		.catch((error) => {
			const errorCode = error.code;
			const errorMessage = error.message;
			alert(errorCode + "\n" + errorMessage);
		});
});
