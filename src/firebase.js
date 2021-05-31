import firebase from "firebase/app";
import "firebase/auth";

export const auth = firebase.initializeApp({
    apiKey: "AIzaSyDplyXegwgH5btq-KIrVxjabI7_cNftVBM",
    authDomain: "unichat-7dfd2.firebaseapp.com",
    projectId: "unichat-7dfd2",
    storageBucket: "unichat-7dfd2.appspot.com",
    messagingSenderId: "72507133017",
    appId: "1:72507133017:web:497d88658a41884fbfb548"
  }).auth();