import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyB3921o72mLSLht2selgomTE4EHkT4LRrU',
  authDomain: 'music-fbccd.firebaseapp.com',
  projectId: 'music-fbccd',
  storageBucket: 'music-fbccd.appspot.com',
  appId: '1:822576679011:web:092ef4a45cc1fa563cd056',
};
// Initialize Firebase

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();
const storage = firebase.storage();

db.enablePersistence().catch((error) => {
  console.log('Firebase persistance error', error);
});

const usersCollection = db.collection('users');
const songsCollection = db.collection('songs');
const commentsCollection = db.collection('comments');

export {
  auth,
  db,
  usersCollection,
  storage,
  songsCollection,
  commentsCollection,
};
