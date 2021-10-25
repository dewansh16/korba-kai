import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';


const config =  {
    apiKey: "AIzaSyDOeM9wXuw7gBeNm7-0sQi0XrLvFZzHURs",
    authDomain: "crwn-db-2b0ce.firebaseapp.com",
    projectId: "crwn-db-2b0ce",
    storageBucket: "crwn-db-2b0ce.appspot.com",
    messagingSenderId: "5903144229",
    appId: "1:5903144229:web:a5578305e8e5dce08ef6cc",
    measurementId: "G-MRFG95MMGW"
  };

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;