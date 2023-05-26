// Import the functions you need from the SDKs you need
import firebase from "firebase";
// import { initializeApp } from "firebase/app";
// import { getFirestore } from "firebase/firestore";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBPXgD4p8aySc8dUZV_ows2mbbtvvHk_2U",
    authDomain: "todoapp-f2890.firebaseapp.com",
    projectId: "todoapp-f2890",
    storageBucket: "todoapp-f2890.appspot.com",
    messagingSenderId: "1018971814107",
    appId: "1:1018971814107:web:a15f838fcffaacace974fe",
    measurementId: "G-7XNBLX216R"
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
// const db = getFirestore(app);
// export {db, analytics};
export default firebase.initializeApp(firebaseConfig);
