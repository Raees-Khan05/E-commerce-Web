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


let iconCart = document.getElementById("mainer");
let closeCart = document.querySelector('.close')
let body = document.querySelector('body')
let listProductHTML = document.querySelector(".pro-container");
let proContainer = document.querySelector(".pro-container")
let iconCartSpan = document.querySelector(".mainer newest_span")


let listProduct = [];
let carts = [];

const addDataToHTML = ()=> {
  listProductHTML.innerHTML = '';
  if(listProduct.length > 0){
    listProduct.forEach(product => {
        let newProduct = document.createElement('div');
        newProduct.classList.add('pro');
        newProduct.dataset.id = product.id;
        newProduct.innerHTML = `<div class="pro" >
                    <img src="${'../img/products/f1.jpg'}" alt="">
                    <div class="des">
                        <span>adidas</span>
                        <h5>Lazy Low Shoulder t-shirts</h5>
                        <div class="star">
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                        </div>
                        <h4>$20</h4>
                    </div>
                    <a class='addCart'>Add To Cart</a>
                </div>`;
                listProductHTML.appendChild(newProduct)
    })
  }
}


listProductHTML.addEventListener('click' , (event) => {
    let positionClick = event.target;
    if(positionClick.classList.contains('addCart')){
        let product_id = positionClick.parentElement.dataset.id;
        // alert(product_id)
        addToCart(product_id)
    }
})


const addToCart = (product_id)=>{
    let positionThisProductInCard = carts.findIndex((value) => value.product_id == product_id);
        if(carts.length <= 0){
            carts = [{
                product_id: product_id,
                quantity : 1
            }]
        }else if (positionThisProductInCard < 0){
            carts.push({
                product_id : product_id,
                quantity : 1
            })
        }else{
            carts[positionThisProductInCard].quantity =  carts[positionThisProductInCard].quantity + 1
        }
        // console.log(carts);
        addCartToHTML();
}

const addCartToHTML = ()=>{
    listCartHTML.innerHTML = '';
    if(carts.length > 0){
        carts.forEach(cart => {

            let newCart = document.createElement('div');
            newCart.classList.add('item');
            newCart.innerHTML = `<td><a href="#"><i class="far fa-times-circle"></i></a></td>
                    <td><img src="img/products/f1.jpg" alt=""></td>
                    <td>Cartoon Astronaut T-shirts</td>
                    <td>$111.08</td>
                    <td>${cart.quantity}</td>
                    <td>$111.08</td>`;
                    listCartHTML.appendChild(newCart)
            
        })
    }
}

const initApp = ()=>{
    fetch("products.json")
    .then(respone => respone.json())
    .then(data => {
        listProduct = data
        console.log(listProduct);
        addDataToHTML()
    })
}

initApp()



// iconCart.addEventListener("click" , ()=>{
//     body.classList.toggle('showCart')
// })

// closeCart.addEventListener('click' , ()=>{
//     body.classList.toggle('showCart')
// })


