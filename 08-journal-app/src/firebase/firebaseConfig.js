import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyCWNpbLVTB3fhPTE54fXVTtvLCxj0otWzE",
    authDomain: "react-apps-curso-84318.firebaseapp.com",
    projectId: "react-apps-curso-84318",
    storageBucket: "react-apps-curso-84318.appspot.com",
    messagingSenderId: "447863896442",
    appId: "1:447863896442:web:359ddf24d62b6da4b97ec3"
};
  
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export {
    db,
    googleAuthProvider,
    firebase
}