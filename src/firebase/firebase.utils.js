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

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();
  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }

  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
