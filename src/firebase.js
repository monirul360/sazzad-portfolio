// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBqmQs_Q0VoacayndM7imiAsQ2FUXq3acs",
    authDomain: "sazzad-9aa91.firebaseapp.com",
    projectId: "sazzad-9aa91",
    storageBucket: "sazzad-9aa91.appspot.com",
    messagingSenderId: "1094894996463",
    appId: "1:1094894996463:web:cf5f41ceeb90b9cd66c41a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;