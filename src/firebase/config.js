import * as firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyDyoI70H0vfI9JCeTxu3zzk8TnHl69ktQo",
    authDomain: "xiexuc-mygallery.firebaseapp.com",
    databaseURL: "https://xiexuc-mygallery.firebaseio.com",
    projectId: "xiexuc-mygallery",
    storageBucket: "xiexuc-mygallery.appspot.com",
    messagingSenderId: "399983928342",
    appId: "1:399983928342:web:80684166cdba4692a24137"
};
// Initialize Firebase
firebase.default.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };