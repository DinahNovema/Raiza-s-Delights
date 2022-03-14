import firebase from "firebase";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBDjKWOhwQ-iRU5PkIYiZ4xbMolxWT6h0M",
  authDomain: "raiza-s-deligths.firebaseapp.com",
  projectId: "raiza-s-deligths",
  storageBucket: "raiza-s-deligths.appspot.com",
  messagingSenderId: "182727245278",
  appId: "1:182727245278:web:e3747a68423f733e20714f",
};

//init firebase
firebase.initializeApp(firebaseConfig);

//init services
const projectFirestore = firebase.firestore();

export { projectFirestore };
