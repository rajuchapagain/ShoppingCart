import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyBVy01JVt-5ZgRV-JEVkIcG7EewXWWGiQ8",
  authDomain: "darsakdb.firebaseapp.com",
  databaseURL: "https://darsakdb.firebaseio.com",
  projectId: "darsakdb",
  storageBucket: "darsakdb.appspot.com",
  messagingSenderId: "229741500255",
  appId: "1:229741500255:web:9b3ee0a28f02f82a5bc8ea",
  measurementId: "G-VFQ2BCRLEG"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
