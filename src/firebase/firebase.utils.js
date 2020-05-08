// Your web app's Firebase configuration
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyCqSrUJCd0h6ntKR6EZEBs--47wzUCi3Io',
  authDomain: 'crwnclothing-e82bf.firebaseapp.com',
  databaseURL: 'https://crwnclothing-e82bf.firebaseio.com',
  projectId: 'crwnclothing-e82bf',
  storageBucket: 'crwnclothing-e82bf.appspot.com',
  messagingSenderId: '847239183037',
  appId: '1:847239183037:web:9c512086be492ee8ac15d4',
  measurementId: 'G-NNKM83JTH3'
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
