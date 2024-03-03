// Sample product data
const products = [
    { id: 1, name: 'Product 1', price: 10, description: 'Description of Product 1', image: 'product1.jpg', reviews: [{ user: 'User 1', comment: 'Good product' }] },
    { id: 2, name: 'Product 2', price: 20, description: 'Description of Product 2', image: 'product2.jpg', reviews: [{ user: 'User 2', comment: 'Excellent!' }] },
    { id: 3, name: 'Product 3', price: 15, description: 'Description of Product 3', image: 'product3.jpg', reviews: [{ user: 'User 3', comment: 'Nice product' }] },
];

const productList = document.getElementById('product-list');
const searchInput = document.getElementById('search');
const sortSelect = document.getElementById('sort');

displayProducts(products);

function displayProducts(productsArray) {
    productList.innerHTML = '';
    productsArray.forEach(product => {
        const productElement = document.createElement('div');
        productElement.classList.add('product');
        productElement.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <div class="product-content">
                <h2>${product.name}</h2>
                <p>${product.description}</p>
                <p>$${product.price}</p>
                <button class="details-btn" data-id="${product.id}">View Details</button>
            </div>
        `;
        productList.appendChild(productElement);
    });

    // Add event listener for details button
    document.querySelectorAll('.details-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const productId = parseInt(btn.getAttribute('data-id'));
            viewDetails(productId);
        });
    });
}


function viewDetails(productId) {
    const product = products.find(p => p.id === productId);
    const modalContent = `
        <div class="modal">
            <div class="modal-content">
                <span class="close-btn">&times;</span>
                <h2>${product.name}</h2>
                <p>${product.description}</p>
                <p>$${product.price}</p>
                <!-- Add more product details here as needed -->
            </div>
        </div>
    `;
    document.body.insertAdjacentHTML('beforeend', modalContent);

    const modal = document.querySelector('.modal');
    const closeBtn = document.querySelector('.close-btn');
    closeBtn.addEventListener('click', () => {
        modal.remove();
    });
}

