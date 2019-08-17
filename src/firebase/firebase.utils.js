import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyCTOsMDBQbb2kqdhIqJMibW4w8-hj-1eu0',
  authDomain: 'crwn-db-5a874.firebaseapp.com',
  databaseURL: 'https://crwn-db-5a874.firebaseio.com',
  projectId: 'crwn-db-5a874',
  storageBucket: '',
  messagingSenderId: '191557801723',
  appId: '1:191557801723:web:e9a12f999c127071'
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
