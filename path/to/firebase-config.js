import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-app.js";
import { getAuth, onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-auth.js";
  import { getFirestore, collection, getDocs, doc, deleteDoc
   } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-firestore.js";
 
  const firebaseConfig = {
    apiKey: "AIzaSyCGIGDAGnpkPMyWmd4NaTTlvosqGrnSVPg",
    authDomain: "e-commerce-web-75390.firebaseapp.com",
    projectId: "e-commerce-web-75390",
    storageBucket: "e-commerce-web-75390.appspot.com",
    messagingSenderId: "949515037608",
    appId: "1:949515037608:web:298c2fbdb44905a42b0b9d",
    measurementId: "G-7LMPV0W7VR"
  };

  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app)
   const auth = getAuth(app);
  // console.log(db);
  // console.log(auth);
  // console.log(db);


  export {auth , db};