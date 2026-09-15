/* ============================================
   APP.JS - LÓGICA PRINCIPAL DA APLICAÇÃO
   ============================================ */

/* ============================================
   VARIÁVEIS GLOBAIS
   ============================================ */

let cart = [];
let currentCategory = 'all';
let currentSort = 'default';
let currentMaxPrice = 500;
let waiterTipEnabled = false;
let orderNumber = 0;

/* ============================================
   INICIALIZAÇÃO DA APLICAÇÃO
   ============================================ */

document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

function initializeApp() {
    loadCartFromLocalStorage();
    renderProducts(getAllProducts());
    attachEventListeners();
    updateCartDisplay();
    initTheme();
}

/* ============================================
   TEMAS (LIGHT/DARK MODE)
   ============================================ */

function initTheme() {
    const savedTheme = localStorage.getItem('theme') || 'light-mode';
    document.body.classList.add(savedTheme);
}

document.addEventListener('DOMContentLoaded', function() {
    const themeToggle = document.getElementById('themeToggle');
    if (themeToggle) {
        themeToggle.addEventListener('click', toggleTheme);
    }
});

function toggleTheme() {
    const isDarkMode = document.body.classList.contains('dark-mode');
    
    if (isDarkMode) {
        document.body.classList.remove('dark-mode');
        localStorage.setItem('theme', 'light-mode');
    } else {
        document.body.classList.add('dark-mode');
        localStorage.setItem('theme', 'dark-mode');
    }
}

/* ============================================
   EVENT LISTENERS
   ============================================ */

function attachEventListeners() {
    // CATEGORY BUTTONS
    document.querySelectorAll('.category-btn').forEach(btn => {
        btn.addEventListener('click', handleCategoryFilter);
    });

    // SEARCH
    document.getElementById('searchBtn').addEventListener('click', toggleSearchBar);
    document.getElementById('closeSearch').addEventListener('click', closeSearchBar);
    document.getElementById('searchInput').addEventListener('input', handleSearch);

    // CART
    document.getElementById('cartBtn').addEventListener('click', toggleCartSidebar);
    document.getElementById('closeCart').addEventListener('click', closeCartSidebar);

    // FILTERS
    document.getElementById('priceRange').addEventListener('input', handlePriceFilter);
    document.getElementById('sortBy').addEventListener('change', handleSort);

    // WAITER TIP
    document.getElementById('waiterTip').addEventListener('change', handleWaiterTip);

    // CHECKOUT
    document.getElementById('checkoutBtn').addEventListener('click', openCheckoutModal);
    document.getElementById('closeCheckout').addEventListener('click', closeCheckoutModal);
    document.getElementById('cancelCheckout').addEventListener('click', closeCheckoutModal);
    document.getElementById('confirmCheckout').addEventListener('click', confirmOrder);

    // MODALS
    document.getElementById('closeModal').addEventListener('click', closeProductModal);
    document.getElementById('productModal').addEventListener('click', closeProductModalOnBackdrop);

    // NEW ORDER
    document.getElementById('newOrderBtn').addEventListener('click', newOrder);
}

/* ============================================
   BUSCA E FILTROS
   ============================================ */

function toggleSearchBar() {
    const searchBar = document.getElementById('searchBar');
    searchBar.classList.toggle('active');
    if (searchBar.classList.contains('active')) {
        document.getElementById('searchInput').focus();
    }
}

function closeSearchBar() {
    document.getElementById('searchBar').classList.remove('active');
    document.getElementById('searchInput').value = '';
    renderProducts(getProductsByCategory(currentCategory));
}

function handleSearch(e) {
    const searchTerm = e.target.value.trim();
    
    if (searchTerm === '') {
        renderProducts(getProductsByCategory(currentCategory));
        return;
    }

    const results = searchProducts(searchTerm);
    renderProducts(results);
    updateEmptyState(results.length === 0);
}

function handleCategoryFilter(e) {
    // Update active button
    document.querySelectorAll('.category-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    e.target.closest('.category-btn').classList.add('active');

    // Get category
    const category = e.target.closest('.category-btn').dataset.category;
    currentCategory = category;

    // Update title
    const categoryInfo = getCategoryInfo();
    const title = category === 'all' ? 'Todos os Produtos' : categoryInfo[category];
    document.getElementById('categoryTitle').textContent = title;

    // Clear search
    closeSearchBar();

    // Render products
    const products = getProductsByCategory(category);
    const filtered = getProductsByPrice(currentMaxPrice, products);
    const sorted = sortProducts(currentSort, filtered);
    renderProducts(sorted);
}

function handlePriceFilter(e) {
    currentMaxPrice = parseInt(e.target.value);
    document.getElementById('priceValue').textContent = currentMaxPrice;

    // Apply filters
    const products = getProductsByCategory(currentCategory);
    const filtered = getProductsByPrice(currentMaxPrice, products);
    const sorted = sortProducts(currentSort, filtered);
    renderProducts(sorted);
}

function handleSort(e) {
    currentSort = e.target.value;

    // Apply filters
    const products = getProductsByCategory(currentCategory);
    const filtered = getProductsByPrice(currentMaxPrice, products);
    const sorted = sortProducts(currentSort, filtered);
    renderProducts(sorted);
}

function getProductsByPrice(maxPrice, productsArray = null) {
    const arr = productsArray || getAllProducts();
    return arr.filter(product => product.price <= maxPrice);
}

/* ============================================
   RENDERIZAÇÃO DE PRODUTOS
   ============================================ */

function renderProducts(productsArray) {
    const grid = document.getElementById('productsGrid');
    grid.innerHTML = '';

    if (productsArray.length === 0) {
        updateEmptyState(true);
        return;
    }

    updateEmptyState(false);

    productsArray.forEach(product => {
        const card = createProductCard(product);
        grid.appendChild(card);
    });
}

function createProductCard(product) {
    const card = document.createElement('div');
    card.className = 'product-card';

    card.innerHTML = `
        <div class="product-image">${product.emoji}</div>
        <div class="product-info">
            <div class="product-category">${product.category.replace('-', ' ')}</div>
            <div class="product-name">${product.name}</div>
            <div class="product-description">${product.description}</div>
            <div class="product-price">R$ ${product.price.toFixed(2)}</div>
            <button class="add-btn" data-id="${product.id}">
                <i class="fas fa-plus"></i> Adicionar
            </button>
        </div>
    `;

    // Product click for details
    card.addEventListener('click', (e) => {
        if (!e.target.closest('.add-btn')) {
            openProductModal(product);
        }
    });

    // Add to cart button
    card.querySelector('.add-btn').addEventListener('click', (e) => {
        e.stopPropagation();
        addToCart(product);
    });

    return card;
}

function updateEmptyState(show) {
    const emptyState = document.getElementById('emptyState');
    if (show) {
        emptyState.style.display = 'block';
    } else {
        emptyState.style.display = 'none';
    }
}

/* ============================================
   MODAL DE DETALHES DO PRODUTO
   ============================================ */

function openProductModal(product) {
    const modal = document.getElementById('productModal');
    const details = document.getElementById('productDetails');

    details.innerHTML = `
        <div class="product-details-image">${product.emoji}</div>
        <div class="product-details-category">${product.category.replace('-', ' ')}</div>
        <div class="product-details-name">${product.name}</div>
        <div class="product-details-description">${product.description}</div>
        <div class="product-details-price">R$ ${product.price.toFixed(2)}</div>
        <div class="product-details-footer">
            <button class="add-btn-modal" data-id="${product.id}">
                <i class="fas fa-shopping-cart"></i> Adicionar ao Pedido
            </button>
        </div>
    `;

    details.querySelector('.add-btn-modal').addEventListener('click', () => {
        addToCart(product);
        closeProductModal();
    });

    modal.classList.add('active');
}

function closeProductModal() {
    document.getElementById('productModal').classList.remove('active');
}

function closeProductModalOnBackdrop(e) {
    if (e.target === document.getElementById('productModal')) {
        closeProductModal();
    }
}

/* ============================================
   CARRINHO DE COMPRAS
   ============================================ */

function addToCart(product) {
    const existingItem = cart.find(item => item.id === product.id);

    if (existingItem) {
        existingItem.quantity++;
    } else {
        cart.push({
            id: product.id,
            name: product.name,
            price: product.price,
            quantity: 1
        });
    }

    saveCartToLocalStorage();
    updateCartDisplay();
    showCartNotification();
}

function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    saveCartToLocalStorage();
    updateCartDisplay();
}

function updateQuantity(productId, change) {
    const item = cart.find(item => item.id === productId);
    
    if (item) {
        item.quantity += change;
        
        if (item.quantity <= 0) {
            removeFromCart(productId);
        } else {
            saveCartToLocalStorage();
            updateCartDisplay();
        }
    }
}

function updateCartDisplay() {
    const cartItemsContainer = document.getElementById('cartItems');
    const cartBadge = document.getElementById('cartBadge');

    // Update badge
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartBadge.textContent = totalItems;

    // Clear container
    cartItemsContainer.innerHTML = '';

    if (cart.length === 0) {
        cartItemsContainer.innerHTML = '<p class="empty-cart-msg">Seu carrinho está vazio</p>';
        document.getElementById('checkoutBtn').disabled = true;
        return;
    }

    document.getElementById('checkoutBtn').disabled = false;

    // Add items
    cart.forEach(item => {
        const cartItem = document.createElement('div');
        cartItem.className = 'cart-item';

        const itemTotal = item.price * item.quantity;

        cartItem.innerHTML = `
            <div class="cart-item-header">
                <div class="cart-item-name">${item.name}</div>
                <button class="cart-item-remove" data-id="${item.id}">
                    <i class="fas fa-trash"></i>
                </button>
            </div>
            <div class="cart-item-price">R$ ${item.price.toFixed(2)} cada</div>
            <div class="quantity-controls">
                <button class="qty-btn" data-id="${item.id}" data-action="decrease">−</button>
                <span class="quantity-display">${item.quantity}</span>
                <button class="qty-btn" data-id="${item.id}" data-action="increase">+</button>
            </div>
            <div class="cart-item-total">
                Total: R$ ${itemTotal.toFixed(2)}
            </div>
        `;

        // Event listeners
        cartItem.querySelector('.cart-item-remove').addEventListener('click', (e) => {
            removeFromCart(item.id);
        });

        cartItem.querySelectorAll('.qty-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const action = btn.dataset.action;
                const change = action === 'increase' ? 1 : -1;
                updateQuantity(item.id, change);
            });
        });

        cartItemsContainer.appendChild(cartItem);
    });

    // Update summary
    updateCartSummary();
}

function updateCartSummary() {
    const subtotal = calculateSubtotal();
    const waiterValue = waiterTipEnabled ? subtotal * 0.1 : 0;
    const total = subtotal + waiterValue;

    document.getElementById('subtotalValue').textContent = `R$ ${subtotal.toFixed(2)}`;
    document.getElementById('waiterValue').textContent = `R$ ${waiterValue.toFixed(2)}`;
    document.getElementById('totalValue').textContent = `R$ ${total.toFixed(2)}`;
}

function calculateSubtotal() {
    return cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
}

function handleWaiterTip(e) {
    waiterTipEnabled = e.target.checked;
    updateCartSummary();
}

function toggleCartSidebar() {
    const sidebar = document.getElementById('cartSidebar');
    sidebar.classList.toggle('open');
    document.getElementById('closeCart').classList.toggle('open');
}

function closeCartSidebar() {
    const sidebar = document.getElementById('cartSidebar');
    sidebar.classList.remove('open');
    document.getElementById('closeCart').classList.remove('open');
}

function showCartNotification() {
    // Opcional: adicionar notificação visual
    console.log('Produto adicionado ao carrinho');
}

/* ============================================
   LOCALSTORAGE
   ============================================ */

function saveCartToLocalStorage() {
    const cartData = {
        items: cart,
        waiterTip: waiterTipEnabled
    };
    localStorage.setItem('cardapioCart', JSON.stringify(cartData));
}

function loadCartFromLocalStorage() {
    const saved = localStorage.getItem('cardapioCart');
    if (saved) {
        const data = JSON.parse(saved);
        cart = data.items || [];
        waiterTipEnabled = data.waiterTip || false;
        document.getElementById('waiterTip').checked = waiterTipEnabled;
    }
}

/* ============================================
   CHECKOUT
   ============================================ */

function openCheckoutModal() {
    if (cart.length === 0) {
        alert('Seu carrinho está vazio!');
        return;
    }

    // Prepare summary
    const summaryContent = document.getElementById('summaryContent');
    summaryContent.innerHTML = '';

    cart.forEach(item => {
        const div = document.createElement('div');
        div.className = 'summary-item';
        const itemTotal = item.price * item.quantity;
        div.innerHTML = `
            <span>${item.quantity}x ${item.name}</span>
            <span>R$ ${itemTotal.toFixed(2)}</span>
        `;
        summaryContent.appendChild(div);
    });

    // Add waiter tip info
    const subtotal = calculateSubtotal();
    const waiterValue = waiterTipEnabled ? subtotal * 0.1 : 0;
    
    if (waiterTipEnabled) {
        const waiterDiv = document.createElement('div');
        waiterDiv.className = 'summary-item';
        waiterDiv.innerHTML = `
            <span>Garçom (10%)</span>
            <span>R$ ${waiterValue.toFixed(2)}</span>
        `;
        summaryContent.appendChild(waiterDiv);
    }

    // Update total
    const total = subtotal + waiterValue;
    document.getElementById('summaryTotal').textContent = `R$ ${total.toFixed(2)}`;

    // Open modal
    document.getElementById('checkoutModal').classList.add('active');
}

function closeCheckoutModal() {
    document.getElementById('checkoutModal').classList.remove('active');
}

function confirmOrder() {
    const form = document.getElementById('checkoutForm');
    
    if (!form.checkValidity()) {
        form.reportValidity();
        return;
    }

    const clientName = document.getElementById('clientName').value;
    const tableNumber = document.getElementById('tableNumber').value;
    const notes = document.getElementById('notes').value;
    const paymentMethod = document.getElementById('paymentMethod').value;

    // Generate order number
    orderNumber = Math.floor(Math.random() * 10000) + 1000;

    // Save order to localStorage
    saveOrder({
        orderNumber,
        clientName,
        tableNumber,
        notes,
        paymentMethod,
        items: cart,
        waiterTip: waiterTipEnabled,
        subtotal: calculateSubtotal(),
        total: calculateSubtotal() + (waiterTipEnabled ? calculateSubtotal() * 0.1 : 0),
        timestamp: new Date().toLocaleString('pt-BR')
    });

    // Close checkout modal
    closeCheckoutModal();

    // Show confirmation modal
    showConfirmationModal();
}

function saveOrder(order) {
    let orders = JSON.parse(localStorage.getItem('orders')) || [];
    orders.push(order);
    localStorage.setItem('orders', JSON.stringify(orders));
}

function showConfirmationModal() {
    document.getElementById('orderNumber').innerHTML = `Número do Pedido: <strong>#${String(orderNumber).padStart(5, '0')}</strong>`;
    document.getElementById('confirmationModal').classList.add('active');
}

function newOrder() {
    // Reset form
    document.getElementById('checkoutForm').reset();
    document.getElementById('waiterTip').checked = false;
    waiterTipEnabled = false;

    // Clear cart
    cart = [];
    saveCartToLocalStorage();
    updateCartDisplay();

    // Close modals
    document.getElementById('confirmationModal').classList.remove('active');
    closeCartSidebar();

    // Reset filters
    document.querySelector('[data-category="all"]').click();
    
    // Show success message
    alert('Obrigado pelo seu pedido! 🎉');
}

/* ============================================
   FUNÇÕES AUXILIARES
   ============================================ */

/**
 * Formatar moeda brasileira
 */
function formatBRL(value) {
    return new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    }).format(value);
}

/**
 * Obter nome da categoria
 */
function getCategoryName(category) {
    const names = {
        'entradas': 'Entradas',
        'prato-principal': 'Prato Principal',
        'sobremesas': 'Sobremesas',
        'bebidas': 'Bebidas',
        'vinhos': 'Carta de Vinhos'
    };
    return names[category] || category;
}

/**
 * Validar carrinho
 */
function isCartValid() {
    return cart.length > 0;
}

/**
 * Limpar carrinho
 */
function clearCart() {
    if (confirm('Deseja limpar todo o carrinho?')) {
        cart = [];
        saveCartToLocalStorage();
        updateCartDisplay();
    }
}

/* ============================================
   RESPONSIVIDADE
   ============================================ */

function handleMobileMenu() {
    const sidebar = document.querySelector('.sidebar');
    const cartSidebar = document.querySelector('.cart-sidebar');
    
    if (window.innerWidth <= 1024) {
        // Mobile layout
        sidebar.classList.add('mobile-only');
    } else {
        // Desktop layout
        sidebar.classList.remove('mobile-only');
        cartSidebar.classList.remove('open');
    }
}

window.addEventListener('resize', handleMobileMenu);
window.addEventListener('load', handleMobileMenu);

/* ============================================
   DEBUG / CONSOLE HELPERS
   ============================================ */

console.log('🍽️ Cardápio Digital Carregado!');
console.log('Total de produtos:', getAllProducts().length);
console.log('Categorias:', getCategories());
