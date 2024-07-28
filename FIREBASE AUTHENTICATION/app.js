const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');

signUpButton.addEventListener('click', () => {
    container.classList.add("right-panel-active");
});

signInButton.addEventListener('click', () => {
    container.classList.remove("right-panel-active");
});

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-firestore.js";

import { getAuth, onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-auth.js";

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
const auth = getAuth(app);
const db = getFirestore(app);

let signupEmail = document.getElementById("signup_email");
let signupPassword = document.getElementById("signup_password");
let signupBtn = document.getElementById("signup_btn");

let signInEmail = document.getElementById("signin_email");
let signInPassword = document.getElementById("signin_password");
let signInBtn = document.getElementById("signin_btn");

signupBtn.addEventListener("click", createUserAccount);
signInBtn.addEventListener("click", signIn);

onAuthStateChanged(auth, (user) => {
    if (user) {
        console.log("User is logged in");
    } else {
        console.log("User is not logged in");
    }
});

function createUserAccount(e) {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, signupEmail.value, signupPassword.value)
        .then((userCredential) => {
            alert('User signed up: ' + userCredential.user.email);
            console.log('Redirecting to: ../index.html');
            window.location.href = "../index.html"; // Ensure the path is correct
        })
        .catch((error) => {
            console.error('Error signing up:', error);
            alert('Error signing up: ' + error.message);
        });
}

function signIn(e) {
    e.preventDefault();
    signInWithEmailAndPassword(auth, signInEmail.value, signInPassword.value)
        .then((userCredential) => {
            alert('User signed in: ' + userCredential.user.email);
            console.log('Redirecting to: ../index.html');
            window.location.href = "../index.html"; // Ensure the path is correct
        })
        .catch((error) => {
            console.error('Error signing in:', error);
            alert('Error signing in: ' + error.message);
        });
}

function logOut() {
    signOut(auth).then(() => {
        // alert('User logged out');
        console.log('Redirecting to: ../index.html');
        window.location.href = "../index.html"; // Ensure the path is correct
    }).catch((error) => {
        console.error('Error logging out:', error);
        alert('Error logging out: ' + error.message);
    });
}
























// const signUpButton = document.getElementById('signUp');
// const signInButton = document.getElementById('signIn');
// const container = document.getElementById('container');

// signUpButton.addEventListener('click', () => {
// 	container.classList.add("right-panel-active");
// });

// signInButton.addEventListener('click', () => {
// 	container.classList.remove("right-panel-active");
// });














// import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-app.js";
// //   import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-analytics.js";
//   import { getAuth,
//            onAuthStateChanged,
//            createUserWithEmailAndPassword,
//            signInWithEmailAndPassword,
//            signOut,

           
//    } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-auth.js";
  

//   const firebaseConfig = {
//     apiKey: "AIzaSyCGIGDAGnpkPMyWmd4NaTTlvosqGrnSVPg",
//     authDomain: "e-commerce-web-75390.firebaseapp.com",
//     projectId: "e-commerce-web-75390",
//     storageBucket: "e-commerce-web-75390.appspot.com",
//     messagingSenderId: "949515037608",
//     appId: "1:949515037608:web:298c2fbdb44905a42b0b9d",
//     measurementId: "G-7LMPV0W7VR"
//   };

//   // Initialize Firebase
//   const app = initializeApp(firebaseConfig);
// //   const analytics = getAnalytics(app);
// //   console.log("app==>>" , app)
//   const auth = getAuth(app)
// //   console.log(auth);



//   let signupUserName = document.getElementById("signup_userName")
//   let signupEmail = document.getElementById("signup_email")
//   let signupPassword = document.getElementById("signup_password")
//   let signupBtn = document.getElementById("signup_btn")


//   let signInUserName = document.getElementById("signin_userName")
//   let signInEmail = document.getElementById("signin_email")
//   let signInPassword = document.getElementById("signin_password")
//   let signInBtn = document.getElementById("signin_btn")


// //   let auth_container = document.getElementById("auth_container")
// //   let user_container = document.getElementById("user_container")


  

// //   let logout_btn = document.getElementById("logout")
// //   let user_email = document.getElementById("user_email")

  

//   signupBtn.addEventListener("click" , createUserAccount)
//   signInBtn.addEventListener("click" , signIn)
//   logout_btn.addEventListener("click" , logOut)



//     // on auth state change function 

//     onAuthStateChanged(auth, (user) => {
//         if (user) {
//             console.log("user is logged in");
//           // User is signed in, see docs for a list of available properties
//           // https://firebase.google.com/docs/reference/js/auth.user
//           const uid = user.uid;
          
//         //   auth_container.style.display = "none"
//         //   user_container.style.display = "block"
//         //   user_email.innerText = user.email
//           // ...
//         } else {
//         //      auth_container.style.display = "block"
//         //   user_container.style.display = "none"
//         //     console.log("user is not logged in");

//           // User is signed out
//           // ...
//         }
//       });



//       function createUserAccount(){
//         // console.log("email==>" , signupEmail.value);
//         // console.log("password==>" , signupPassword.value);
//         // console.log("user==>" , signupUserName.value);

//         createUserWithEmailAndPassword(auth, signupEmail.value, signupPassword.value )
//   .then((userCredential) => {
//     // Signed up 
//     const user = userCredential.user;
//     // ...
//   })
//   .catch((error) => {
//     const errorCode = error.code;
//     const errorMessage = error.message;
//     // ..
//     // alert(errorMessage)
//     console.log(error);
//     alert(error)
//   });
//       }


// // var LoginForm = document.getElementById("LoginForm")


// // LoginForm.addEventListener("submit" , (e)=>{
// //     e.preventDefault()
// // })

// function signIn(){
//     //  console.log("email==>" , signInEmail.value);
//     //     console.log("password==>" , signInPassword.value);
//     //     console.log("user==>" , signInUserName.value);
//     signInWithEmailAndPassword(auth, signInEmail.value, signInPassword.value)
//     .then((userCredential) => {
//         console.log("user" );
//       // Signed in 
//       const user = userCredential.user;
//       // ...
//     })
//     .catch((error) => {
//       const errorCode = error.code;
//       const errorMessage = error.message;
//       console.log(error);
//       alert(errorMessage)
//     });

// }


// function logOut(){
//     signOut(auth).then(() => {
//         // Sign-out successful.
//       }).catch((error) => {
//         // An error happened.
//         alert(error)
//         console.log(error);
//       });
// }