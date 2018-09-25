import firebase from "firebase";

const app = firebase.initializeApp({
  apiKey: "AIzaSyB96JwsoCteXpowXRudmKhk2peObsIa3OE",
  authDomain: "ts-final.firebaseapp.com",
  databaseURL: "https://ts-final.firebaseio.com",
  projectId: "ts-final",
  storageBucket: "ts-final.appspot.com",
  messagingSenderId: "1022519776592"
});

//DATABASE
const db = app.firestore();

// Disable deprecated features
db.settings({
  timestampsInSnapshots: true
});

export { db };
