






// const signUpButton = document.getElementById('signUp');
// const signInButton = document.getElementById('signIn');
// const container = document.getElementById('container');

// signUpButton.addEventListener('click', () => {
//     container.classList.add("right-panel-active");
// });

// signInButton.addEventListener('click', () => {
//     container.classList.remove("right-panel-active");
// });

// import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-app.js";
// import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-firestore.js";



// const firebaseConfig = {
//     apiKey: "AIzaSyCGIGDAGnpkPMyWmd4NaTTlvosqGrnSVPg",
//     authDomain: "e-commerce-web-75390.firebaseapp.com",
//     projectId: "e-commerce-web-75390",
//     storageBucket: "e-commerce-web-75390.appspot.com",
//     messagingSenderId: "949515037608",
//     appId: "1:949515037608:web:298c2fbdb44905a42b0b9d",
//     measurementId: "G-7LMPV0W7VR"
// };

// const app = initializeApp(firebaseConfig);
// const auth = getAuth(app);
// const db = getFirestore(app);

// let signupEmail = document.getElementById("signup_email");
// let signupPassword = document.getElementById("signup_password");
// let signupBtn = document.getElementById("signup_btn");

// let signInEmail = document.getElementById("signin_email");
// let signInPassword = document.getElementById("signin_password");
// let signInBtn = document.getElementById("signin_btn");

// signupBtn.addEventListener("click", createUserAccount);
// signInBtn.addEventListener("click", signIn);

// onAuthStateChanged(auth, (user) => {
//     if (user) {
//         console.log("User is logged in");
//     } else {
//         console.log("User is not logged in");
//     }
// });

// function createUserAccount(e) {
//     e.preventDefault();
//     createUserWithEmailAndPassword(auth, signupEmail.value, signupPassword.value)
//         .then((userCredential) => {
//             alert('User signed up: ' + userCredential.user.email);
//             console.log('Redirecting to: ../index.html');
//             window.location.href = "../index.html"; // Ensure the path is correct
//         })
//         .catch((error) => {
//             console.error('Error signing up:', error);
//             alert('Error signing up: ' + error.message);
//         });
// }

// function signIn(e) {
//     e.preventDefault();
//     signInWithEmailAndPassword(auth, signInEmail.value, signInPassword.value)
//         .then((userCredential) => {
//             alert('User signed in: ' + userCredential.user.email);
//             console.log('Redirecting to: ../index.html');
//             window.location.href = "../index.html"; // Ensure the path is correct
//         })
//         .catch((error) => {
//             console.error('Error signing in:', error);
//             alert('Error signing in: ' + error.message);
//         });
// }

// function logOut() {
//     signOut(auth).then(() => {
//         // alert('User logged out');
//         console.log('Redirecting to: ../index.html');
//         window.location.href = "../index.html"; // Ensure the path is correct
//     }).catch((error) => {
//         console.error('Error logging out:', error);
//         alert('Error logging out: ' + error.message);
//     });
// }























const bar = document.getElementById("bar")
const nav = document.getElementById("navbar")
let close = document.getElementById("close")


if(bar){
    bar.addEventListener("click" , ()=>{
        nav.classList.add("active")
    })
}


if(close){
    close.addEventListener("click" , ()=>{
        nav.classList.remove("active")
    })
}


import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-app.js";
import { getAuth, onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-auth.js";
//   import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-analytics.js";
  import { getFirestore ,
    addDoc, collection, getDocs

   } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-firestore.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyCGIGDAGnpkPMyWmd4NaTTlvosqGrnSVPg",
    authDomain: "e-commerce-web-75390.firebaseapp.com",
    projectId: "e-commerce-web-75390",
    storageBucket: "e-commerce-web-75390.appspot.com",
    messagingSenderId: "949515037608",
    appId: "1:949515037608:web:298c2fbdb44905a42b0b9d",
    measurementId: "G-7LMPV0W7VR"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
//   const analytics = getAnalytics(app);
  const db = getFirestore(app)
   const auth = getAuth(app);
  console.log(db);






document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.add-to-cart').forEach(button => {
        button.addEventListener('click', async (event) => {
            event.preventDefault();
            event.stopPropagation();

            const user = getAuth().currentUser;
            if (user) {
                const productElement = event.target.closest('.pro');
                const brand = productElement.querySelector('.des span').innerText;
                const name = productElement.querySelector('.des h5').innerText;
                const price = parseFloat(productElement.querySelector('.des h4').innerText.replace('$', ''));
                const quantity = 1;

                try {
                    await addDoc(collection(db, "carts"), {
                        userId: user.uid, 
                        brand: brand,
                        name: name,
                        price: price,
                        quantity: quantity
                    });
                    alert("Cart item added successfully!");
                    updateCartCount(); 
                } catch (error) {
                    console.error("Error adding document: ", error);
                    alert("Error adding cart item: " + error.message);
                }
            } else {
                alert("Please log in to add items to the cart.");
            }
        });
    });
});




async function updateCartCount() {
    const user = getAuth().currentUser;
    if (user) {
        const userId = user.uid;
        const cartRef = collection(db, 'carts');
        const cartSnapshot = await getDocs(cartRef);
        const cartItems = cartSnapshot.docs.filter(doc => doc.data().userId === userId);
        const itemCount = cartItems.length; 
        
        document.getElementById('newest_span').innerText = itemCount;
    }
}

getAuth().onAuthStateChanged(user => {
    if (user) {
        updateCartCount();
    }
});




// iconCart.addEventListener("click" , ()=>{
//     body.classList.toggle('showCart')
// })

// closeCart.addEventListener('click' , ()=>{
//     body.classList.toggle('showCart')
// })


