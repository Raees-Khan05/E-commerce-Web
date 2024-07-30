import { getFirestore, collection, getDocs, doc, deleteDoc } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-firestore.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-auth.js";
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-app.js";

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
const db = getFirestore(app);
const auth = getAuth(app);

async function loadCartItems() {
    try {
        const user = auth.currentUser;
        console.log('Current user:', user);
        if (user) {
            const cartRef = collection(db, 'carts');
            const querySnapshot = await getDocs(cartRef);
            const cartTableBody = document.getElementById('cartTableBody');

            cartTableBody.innerHTML = ''; 

            querySnapshot.forEach((doc) => {
                const data = doc.data();
                console.log('Loading item:', doc.id, data); 

                // const tr = document.createElement('tr');
                // tr.classList.add('item');
                cartTableBody.innerHTML = `
                   <tr> <td><a href="#" class="remove-item" data-id="${doc.id}"><i class="far fa-times-circle"></i></a></td>
                    <td><img src="${data.image || 'default.jpg'}" alt="Product Image"></td>
                    <td>${data.name}</td>
                    <td>$${data.price.toFixed(2)}</td>
                    <td><input type="number" value="${data.quantity}" min="1"></td>
                    <td>$${(data.price * data.quantity).toFixed(2)}</td></tr>
                `;
                // cartTableBody.appendChild(tr);
            });

            // console.log("querysnapshot===>>", querySnapshot);


            document.querySelectorAll('.remove-item').forEach(button => {
                button.addEventListener('click', (event) => {
                    event.preventDefault();
                    const productId = event.target.closest('a').dataset.id;
                    removeCartItem(productId);
                });
            });
        } else {
            console.log('User is not logged in.');
        }
    } catch (error) {
        console.error('Error loading cart items:', error);
    }
}

loadCartItems();
removeCartItem()
async function removeCartItem(id) {
    try {
        const cartRef = doc(db, 'carts', id);
        await deleteDoc(cartRef);
        alert('Item removed from cart');
        loadCartItems(); // Reload items instead of reloading the page
    } catch (error) {
        console.error('Error removing item:', error);
        alert('Error removing item: ' + error.message);
    }
}

document.addEventListener('DOMContentLoaded', loadCartItems);
