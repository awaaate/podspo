import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/firebase-auth';

const config = {
    apiKey: "AIzaSyBUfW47NCQP44XdTfKoqKKFkeoPFHzRmSY",
    authDomain: "crwn-cda44.firebaseapp.com",
    databaseURL: "https://crwn-cda44.firebaseio.com",
    projectId: "crwn-cda44",
    storageBucket: "crwn-cda44.appspot.com",
    messagingSenderId: "113898730172",
    appId: "1:113898730172:web:6d6f5807aa8bb1856ad6b9"
};

firebase.initializeApp(config)
export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;