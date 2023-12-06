// Cart Functionality

let cart = JSON.parse(localStorage.getItem("cart")) ?
    JSON.parse(localStorage.getItem("cart")) :
    [];

function readBooks(items) {
    document.querySelector("#cart").innerHTML = "";
    items.forEach((product, position) => {
        document.querySelector("#cart").innerHTML += `
        
        <div class="card main">
          <img src="${product.image}" class="card-Image-top" alt="${product.title}">
          
          <div class="card-body">
            <h4 class="card-title">${product.title}</h4>
            <p><strong> ${product.title} by ${product.author} </strong>- ${product.year} </p>
            <p class="card-text">R<strong> ${parseInt(product.price)}</strong></p>
            </div>
            <div d-flex>
            <input type="number" value=${product.quantity} class="cart" min=1 id="addToCart${position}">
            </div>
          
            <div>
            <button type="button" class="btn btn-primary" onclick="updateCart(${position})" ><i class='fas fa-edit'></i>
          <p class="write">Update</p>
        </button>
        <button type="button" class="btn btn-danger" onclick="removeCart(${position})" ><i class='fas fa-trash-alt'></i>
        <p class="write">Remove</p>
        </button>
      </div>

    </div>
            `
    })

    document.querySelector("#cost").innerHTML = `Total: R${ totalCost() }`
}

readBooks(cart)

// UPDATE
function updateCart(position) {
    let quantity = document.querySelector(`#addToCart${position}`).value;
    try {
        if (quantity === cart[position].quantity) {
            throw new Error("You did not make any changes")
        }

        cart[position] = ({
            ...cart[position],
            quantity
        })

        localStorage.setItem("cart", JSON.stringify(cart));
        cart[position].quantity
        readBooks(cart)

    } catch (error) {
        alert(error)
    }

}

// REMOVE
function removeCart(position) {
    let confirmation = confirm(
        `Are you sure you want to remove ${cart[position].title}?`
    );

    if (confirmation) {
        cart.splice(position, 1);
        localStorage.setItem("cart", JSON.stringify(cart));
        readBooks(cart);
    }
    totalCost();
}

//REMOVE MULTIPLE 
function removeMultiple(position) {

}

// Total Cost
function totalCost() {
    let totalCost = 0
    items = JSON.parse(localStorage.getItem("cart"))
    for (let i = 0; i < items.length; i++) {

        totalCost += items[i].price * items[i].quantity;

    }
    return parseInt(totalCost)
}

// Checkout
function checkout() {
    let confirmation = confirm(
        `Your totalcost is ${totalCost()}`
    );
    if (confirmation) {
        cart.length = 0
        localStorage.removeItem('cart')
        readBooks(cart)
    }

}