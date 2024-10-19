document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('searchInput');
    const categoryFilter = document.getElementById('categoryFilter');
    const priceFilter = document.getElementById('priceFilter');
    const priceValue = document.getElementById('priceValue');
    const productList = document.getElementById('productList');
    const products = productList.getElementsByTagName('li');

    // Update price value display
    priceFilter.addEventListener('input', function() {
        priceValue.textContent = `Max Price: $${priceFilter.value}`;
        filterProducts();
    });

    // Event listeners for filtering
    searchInput.addEventListener('input', filterProducts);
    categoryFilter.addEventListener('change', filterProducts);

    function filterProducts() {
        const searchTerm = searchInput.value.toLowerCase();
        const selectedCategory = categoryFilter.value;
        const maxPrice = priceFilter.value;

        for (let i = 0; i < products.length; i++) {
            const product = products[i];
            const productName = product.textContent.toLowerCase();
            const productCategory = product.getAttribute('data-category');
            const productPrice = parseFloat(product.getAttribute('data-price'));

            const matchesSearch = productName.includes(searchTerm);
            const matchesCategory = selectedCategory ? productCategory === selectedCategory : true;
            const matchesPrice = productPrice <= maxPrice;

            // Show or hide product based on filters
            if (matchesSearch && matchesCategory && matchesPrice) {
                product.style.display = ''; // Show
            } else {
                product.style.display = 'none'; // Hide
            }
        }
    }
});
