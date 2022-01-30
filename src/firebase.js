import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore';
let config = {
    apiKey: "AIzaSyBU6ZoQocrpnS5-lp9CkFeeOJXWItyfeaQ",
    authDomain: "younity-631fd.firebaseapp.com",
    projectId: "younity-631fd",
    storageBucket: "younity-631fd.appspot.com",
    messagingSenderId: "4603573780",
    appId: "1:4603573780:web:8b19cab5b424314a005901"
};
firebase.initializeApp(config)
var db = firebase.firestore();

export { db };