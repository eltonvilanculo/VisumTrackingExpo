import * as firebase from 'firebase';


const firebaseConfig = {
    apiKey: "AIzaSyDeSz2roW3K7jXkTrVUyRJU3BBhMmYw368",
    authDomain: "visum-tracking.firebaseapp.com",
    databaseURL: "https://visum-tracking.firebaseio.com",
    projectId: "visum-tracking",
    storageBucket: "visum-tracking.appspot.com",
    messagingSenderId: "852969480153",
    appId: "1:852969480153:web:46939f23869f14af1b03c8",
    measurementId: "G-JTXYFPJMYV"
};


module.exports =   {firebase:firebase.initializeApp(firebaseConfig)}