// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-app.js"
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-analytics.js"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAQBAbhovCWlj4pYy698FUZopaitIlZBdA",
    authDomain: "fixit-tugas.firebaseapp.com",
    projectId: "fixit-tugas",
    storageBucket: "fixit-tugas.appspot.com",
    messagingSenderId: "748094157484",
    appId: "1:748094157484:web:7ae70a67f6554976312509",
    measurementId: "G-6E6T3YZ72R",
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const analytics = getAnalytics(app)
