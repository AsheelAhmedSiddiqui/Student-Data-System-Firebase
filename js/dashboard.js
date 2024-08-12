import { auth, db, signOut, collection, getDocs } from "./firebase.mjs";

// console.log(onAuthStateChanged);

// let logOut = document.getElementById("logout");


// // logOut.addEventListener("click", () => {
// // 	signOut(auth)
// // 		.then(() => {
// // 			// Sign-out successful.
// // 			console.log("signOut");
// // 		})
// // 		.catch((error) => {
// // 			// An error happened.
// // 			console.log("sign In");
// // 		});
// // });


const querySnapshot = await getDocs(collection(db, "users"));
querySnapshot.forEach((doc) => {
	console.log(doc.data());
	
//   console.log(`${doc.id} => ${doc.data()}`);
});
