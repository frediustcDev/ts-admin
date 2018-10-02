import firebase from "firebase";
require("firebase/firestore");

firebase.initializeApp({
  apiKey: "AIzaSyB96JwsoCteXpowXRudmKhk2peObsIa3OE",
  authDomain: "ts-final.firebaseapp.com",
  databaseURL: "https://ts-final.firebaseio.com",
  projectId: "ts-final",
  storageBucket: "ts-final.appspot.com",
  messagingSenderId: "1022519776592"
});

//DATABASE
const firestore = firebase.firestore();

// Disable deprecated features
firestore.settings({
  timestampsInSnapshots: true
});

//Storage
const storage = firebase.storage();
export { storage, firestore };
