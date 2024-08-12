import { auth, onAuthStateChanged } from "./firebase.mjs";


// onAuthStateChanged(auth, (user) => {
// 	if (user) {
// 		// User is signed in, see docs for a list of available properties
// 		// https://firebase.google.com/docs/reference/js/auth.user
// 		const uid = user.uid;
// 		if (location.pathname !== "pages/dashboard.html") {
// 			window.location = "pages/dashboard.html";
// 		}
// 		// ...
// 	} else {
// 		// User is signed out
// 		window.location.href = "index.html";
// 		// ...
// 	}
// });