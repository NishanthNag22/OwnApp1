import firebase from 'firebase'
require('@firebase/firestore');

var firebaseConfig = {
    apiKey: "AIzaSyDjgk5q6JKlrE4ElKeWQeefP9t0BUKclmw",
    authDomain: "myownapp-265e5.firebaseapp.com",
    databaseURL: "https://myownapp-265e5-default-rtdb.firebaseio.com",
    projectId: "myownapp-265e5",
    storageBucket: "myownapp-265e5.appspot.com",
    messagingSenderId: "921498339634",
    appId: "1:921498339634:web:92043f20117678490c2f2b"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();