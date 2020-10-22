import * as firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: process.env.FIREBASE_KEY,
    authDomain: "xiexuc-mygallery.firebaseapp.com",
    databaseURL: "https://xiexuc-mygallery.firebaseio.com",
    projectId: "xiexuc-mygallery",
    storageBucket: process.env.FIREBASE_BUCKET,
    messagingSenderId: "399983928342",
    appId: process.env.FIREBASE_APPID
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };