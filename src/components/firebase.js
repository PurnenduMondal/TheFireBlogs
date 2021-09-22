import firebase from 'firebase/compat/app';
import 'firebase/compat/auth'
import "firebase/compat/firestore"

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCQSN_uWyjZG1UFfegllhJzTn1ftrbXfeE",
  authDomain: "ffblogapp.firebaseapp.com",
  projectId: "ffblogapp",
  storageBucket: "ffblogapp.appspot.com",
  messagingSenderId: "62679474419",
  appId: "1:62679474419:web:45c342e26236e573e19786",
  measurementId: "G-9QBNJ1KX94"
};
  const firebaseApp = firebase.initializeApp(firebaseConfig)
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider()
  export { auth, provider }
  export default db