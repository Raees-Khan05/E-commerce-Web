
import { auth , db } from "./path/to/firebase-config.js";
// console.log(auth , db);


import { onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-auth.js";

document.addEventListener('DOMContentLoaded', () => {
    const authButton = document.getElementById('auth-button');

    onAuthStateChanged(auth, (user) => {
        if (user) {
            // User is signed in
            authButton.innerHTML = '<button id="logout-button" class="logo nav-btn">Logout</button>';
            document.getElementById('logout-button').addEventListener('click', () => {
                signOut(auth).then(() => {
                    alert('User logged out');
                    window.location.href = "index.html"; // Redirect to home page
                }).catch((error) => {
                    console.error('Error logging out:', error);
                    alert('Error logging out: ' + error.message);
                });
            });
        } else {
            // No user is signed in
            authButton.innerHTML = '<a href="FIREBASE AUTHENTICATION/login-signup-form.html"><button class="logo nav-btn">Create Account</button></a>';
        }
    });
});


onAuthStateChanged(auth, (user) => {
    console.log('Auth state changed');
    if (user) {
        console.log('User is signed in:', user);
        // Rest of the code
    } else {
        console.log('User is not signed in');
        // Rest of the code
    }
});

