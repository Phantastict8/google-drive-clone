import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyBy48LQ8VPQ7lYxElg5T2d-hdmHBCDFBvw",
    authDomain: "drive-clone-11408.firebaseapp.com",
    projectId: "drive-clone-11408",
    storageBucket: "drive-clone-11408.appspot.com",
    messagingSenderId: "450096894683",
    appId: "1:450096894683:web:96b3c09bfbcc2ff802b2fe"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig)

  const auth = firebase.auth()
  const provider = new firebase.auth.GoogleAuthProvider()
  const storage = firebase.storage()
  const db = firebaseApp.firestore()

  export {auth, provider, db, storage}