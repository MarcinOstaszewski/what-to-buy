import * as firebase from 'firebase';
import { auth } from 'firebase';
// import { zakupy, kategorie } from './helpers/const';

const config = {
    apiKey: "AIzaSyB_psG_2HT8VisbjB3szsMjZsnlfQIS9ko",
    authDomain: "what-to-buy-94750.firebaseapp.com",
    databaseURL: "https://what-to-buy-94750.firebaseio.com",
    projectId: "what-to-buy-94750",
    storageBucket: "what-to-buy-94750.appspot.com",
    messagingSenderId: "194092546135",
    appId: "1:194092546135:web:7661e65a00a7f2aa390b12",
    measurementId: "G-XWZR1H0ZMY"
};
firebase.initializeApp(config);
const fbDB = firebase.database()

const googleAuth = new auth.GoogleAuthProvider();

const addProducts = (ref, data) => {
    fbDB.ref(ref).set(data);
}

// addProducts('zakupy', zakupy);
// addProducts('kategorie', kategorie);

export {
    fbDB,
    firebase,
    googleAuth,
    addProducts,
};