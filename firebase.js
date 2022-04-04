// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// import * as firebase from "firebase";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCwT66AOPaQsJC5gGZ5Jn4jzZM6ifjtWRQ",
    authDomain: "test-518e4.firebaseapp.com",
    projectId: "test-518e4",
    storageBucket: "test-518e4.appspot.com",
    messagingSenderId: "750444216158",
    appId: "1:750444216158:web:db46aff3ac69d3e07399cf",
    measurementId: "G-E2VNZ6XRBH"
};

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// // const analytics = getAnalytics(app);
// export default app;

const app = initializeApp(firebaseConfig);

export default app;