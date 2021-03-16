import firebase from 'firebase'


// For Firebase JS SDK v7.20.0 and later, measurementId is optional


const firebaseConfig = {
    apiKey: "AIzaSyAGKPmMqa-Cr0GhoOOEC-FzRGutQZCOknw",
    authDomain: "facebook-clone-2df67.firebaseapp.com",
    projectId: "facebook-clone-2df67",
    storageBucket: "facebook-clone-2df67.appspot.com",
    messagingSenderId: "403957560176",
    appId: "1:403957560176:web:db43ed51ac38c4d91bd5b5",
    measurementId: "G-EL98K3MMVB"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export {auth, provider};
  export default db;