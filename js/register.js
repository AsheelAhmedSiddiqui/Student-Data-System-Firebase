import { auth, app, db } from "./firebase.mjs";
import {
	createUserWithEmailAndPassword,
	getAuth,
} from "https://www.gstatic.com/firebasejs/10.12.5/firebase-auth.js";
import {
	collection,
	addDoc,
} from "https://www.gstatic.com/firebasejs/10.12.5/firebase-firestore.js";

let studentName = document.getElementById("name");
let contactNum = document.getElementById("contact");
let course = document.getElementById("course");
let dateOfBirth = document.getElementById("date");
let address = document.getElementById("address");
let email = document.getElementById("email");
let password = document.getElementById("password");
let registerBtn = document.getElementById("regisBtn");

// console.log(email, password, registerBtn);

registerBtn.addEventListener("click", async () => {
	// console.log(email.value);
	// console.log(password.value);
	// console.log(registerBtn);

	const auth = getAuth();
	createUserWithEmailAndPassword(auth, email.value, password.value)
		.then((userCredential) => {
			const user = userCredential.user;
			alert("You are registered");
		})
		.catch((error) => {
			const errorCode = error.code;
			const errorMessage = error.message;
			alert(errorCode + "\n" + errorMessage);
		});

	try {
		const docRef = await addDoc(collection(db, "users"), {
			userName: studentName.value,
			userDOB: dateOfBirth.value,
			userCourse: course.value,
			userContact: contactNum.value,
			userEmail: email.value,
			userAddress: address.value,
			userPassword: password.value,
		});
		console.log("Document written with ID: ", docRef.id);
		alert("you are registered"); 
		console.log(addDoc);
		
	} catch (e) {
		console.error("Error adding document: ", e);
	}
	studentName.value = "";
	dateOfBirth.value = "";
	course.value = "";
	contactNum.value = "";
	email.value = "";
	address.value = "";
	password.value = "";
});
