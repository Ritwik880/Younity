import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore';
let config = {
    apiKey: "AIzaSyBorqXshDGuQZvP_FEniW1i6fes7H5qZ1c",
    authDomain: "younity-d2232.firebaseapp.com",
    projectId: "younity-d2232",
    storageBucket: "younity-d2232.appspot.com",
    messagingSenderId: "489117580945",
    appId: "1:489117580945:web:4f63ab057695f5c1a9c930"
};
firebase.initializeApp(config)
var db = firebase.firestore();

export { db };