import { initializeApp } from "firebase/app";
import { getAuth,GoogleAuthProvider } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: "AIzaSyAVrzvKpRQPKHbkJwqKmKTNOCQqyrUB-RE",
	authDomain: "todolist-19410.firebaseapp.com",
	projectId: "todolist-19410",
	storageBucket: "todolist-19410.appspot.com",
	messagingSenderId: "394724042613",
	appId: "1:394724042613:web:db9bb689a2c68d4c1b153c",
	measurementId: "G-SDL66DYGXY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app) 
export const googleAuth = new GoogleAuthProvider()