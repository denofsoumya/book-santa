import firebase from 'firebase';
require('@firebase/firestore')

var firebaseConfig = {
    apiKey: "AIzaSyDiALSCVGW8QtnQIshRhBQkZuGgGeXQWc4",
    authDomain: "book-santa-d5682.firebaseapp.com",
    databaseURL: "https://book-santa-d5682-default-rtdb.firebaseio.com",
    projectId: "book-santa-d5682",
    storageBucket: "book-santa-d5682.appspot.com",
    messagingSenderId: "113637333947",
    appId: "1:113637333947:web:60ee29db756dde1161429e"
  };
  // Initialize Firebase
  
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();