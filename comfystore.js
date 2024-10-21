const products = [
    { id: 1, name: "Cozy Blanket", price: 29.99, image: "cozy blanket.jpg" },
    { id: 2, name: "Comfy Chair", price: 89.99, image: "comfychair.jpg" },
    { id: 3, name: "Soft Pillow", price: 19.99, image: "softpillow.jpg" },
    { id: 4, name: "Warm Slippers", price: 24.99, image: "warmslippers.jpg" },
];

let cart = [];

function displayProducts() {
    const productList = document.getElementById('product-list');
    products.forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.className = 'product';
        productDiv.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h2>${product.name}</h2>
            <p>$${product.price.toFixed(2)}</p>
            <button onclick="addToCart(${product.id})">Add to Cart</button>
        `;
        productList.appendChild(productDiv);
    });
}

function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    cart.push(product);
    updateCart();
}

function updateCart() {
    const cartCount = document.getElementById('cart-count');
    const cartItems = document.getElementById('cart-items');
    const totalPrice = document.getElementById('total-price');
    
    cartCount.textContent = cart.length;
    cartItems.innerHTML = '';

    let total = 0;
    cart.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.name} - $${item.price.toFixed(2)}`;
        cartItems.appendChild(li);
        total += item.price;
    });

    totalPrice.textContent = total.toFixed(2);
}

document.getElementById('cart-button').addEventListener('click', () => {
    document.getElementById('cart').classList.toggle('visible');
});

document.getElementById('close-cart').addEventListener('click', () => {
    document.getElementById('cart').classList.remove('visible');
});

document.getElementById('checkout-button').addEventListener('click', () => {
    alert("Proceeding to checkout...");
});

displayProducts();
