import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: replace with your own config
const firebaseConfig = {
	apiKey: "AIzaSyCI0H8gx8NbhhAG3HJk9WVQ6tuNserh4fA",
    authDomain: "pair-50-dts-mini-project.firebaseapp.com",
    projectId: "pair-50-dts-mini-project",
    storageBucket: "pair-50-dts-mini-project.appspot.com",
    messagingSenderId: "315419081965",
    appId: "1:315419081965:web:27701bcd45068d007f60e4"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
