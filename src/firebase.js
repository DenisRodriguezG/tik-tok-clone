import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC4qvVYDGpA-tbRkH3IqpEDWHq5CTuPeSc",
  authDomain: "tik-tok-clone-b6fe4.firebaseapp.com",
  projectId: "tik-tok-clone-b6fe4",
  storageBucket: "tik-tok-clone-b6fe4.appspot.com",
  messagingSenderId: "286292648065",
  appId: "1:286292648065:web:504552eb7e55f23f3bed80",
  measurementId: "G-EY0BWBLC5C"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
console.log(firebaseApp)
const db = firebase.firestore();

export default db;