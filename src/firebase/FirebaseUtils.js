import firebase from 'firebase/app';
import 'firebase/auth'
import 'firebase/firestore';


const config = {
    apiKey: "AIzaSyDabB7JmWeOl5JqvMmMm2ijkCsHLYaB-1o",
    authDomain: "clothing-db-53b18.firebaseapp.com",
    projectId: "clothing-db-53b18",
    storageBucket: "clothing-db-53b18.appspot.com",
    messagingSenderId: "1046879674552",
    appId: "1:1046879674552:web:c065d2de9e2e9d62aad44d",
    measurementId: "G-G4CND0G1QB"
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider  = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;