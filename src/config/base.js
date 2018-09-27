import firebase from "firebase";

const app = firebase.initializeApp({
  apiKey: process.env.REACT_NATIVE_GOOGLE_API_KEY,
  authDomain: process.env.REACT_NATIVE_GOOGLE_AUTH_DOMAIN,
  databaseURL: process.env.REACT_NATIVE_GOOGLE_DATABASE_URL,
  projectId: process.env.REACT_NATIVE_GOOGLE_PROJECT_ID,
  storageBucket: process.env.REACT_NATIVE_GOOGLE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_NATIVE_GOOGLE_MESSAGING_SENDER_ID
});

//DATABASE
const db = app.firestore();

// Disable deprecated features
db.settings({
  timestampsInSnapshots: true
});

export { db };
