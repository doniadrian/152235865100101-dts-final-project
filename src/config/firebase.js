import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// TODO: replace with your own config
const firebaseConfig = {
	apiKey: "AIzaSyBGWXjKOZ_iQ6xh-aYFEom0ts9SjcDNk9o",
    authDomain: "dts-final-project-66e95.firebaseapp.com",
    projectId: "dts-final-project-66e95",
    storageBucket: "dts-final-project-66e95.appspot.com",
    messagingSenderId: "950056300939",
    appId: "1:950056300939:web:9958b883de8a5e98a7bf8e"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
