// ===================================
// FUNCIONES DEL CATÁLOGO
// ===================================

let currentFilter = 'all';

// Cargar productos al iniciar
document.addEventListener('DOMContentLoaded', function() {
    renderProducts();
    initScrollTop();
});

// Renderizar productos
function renderProducts() {
    const grid = document.getElementById('productsGrid');
    const counter = document.getElementById('resultsCounter');
    const emptyState = document.getElementById('emptyState');
    
    grid.innerHTML = '';
    
    const filtered = currentFilter === 'all' 
        ? products 
        : products.filter(p => p.category.includes(currentFilter) || p.category === currentFilter);
    
    if (filtered.length === 0) {
        emptyState.classList.add('active');
        counter.innerHTML = '';
        return;
    }
    
    emptyState.classList.remove('active');
    counter.innerHTML = `Mostrando <strong>${filtered.length}</strong> productos`;
    
    filtered.forEach(product => {
        const card = createProductCard(product);
        grid.appendChild(card);
    });
}

// Crear tarjeta de producto
function createProductCard(product) {
    const card = document.createElement('div');
    card.className = 'product-card';
    card.setAttribute('data-category', product.category);
    
    const formattedPrice = new Intl.NumberFormat('es-CO', {
        style: 'currency',
        currency: 'COP',
        minimumFractionDigits: 0
    }).format(product.price);
    
    card.innerHTML = `
        <div class="product-image-container" onclick="openLightbox('${product.image}', 'COD_${product.code} - ${product.name}', '${formattedPrice}')">
            <img src="${product.image}" alt="${product.name}" class="product-image" loading="lazy">
            <div class="zoom-icon">
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"/>
                </svg>
            </div>
            <span class="product-badge">COD_${product.code}</span>
        </div>
        <div class="product-info">
            <h3 class="product-name">${product.name}</h3>
            <p class="product-description">${product.description}</p>
            <div class="product-footer">
                <div>
                    <span class="price-label">Precio</span>
                    <div class="product-price">${formattedPrice}</div>
                </div>
                <a href="#" class="btn-order" onclick="orderProduct('COD_${product.code}', '${product.name}', ${product.price}); return false;">
                    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"/>
                    </svg>
                    Pedir
                </a>
            </div>
        </div>
    `;
    
    return card;
}

// Filtrar productos
function filterProducts(category) {
    currentFilter = category;
    
    // Actualizar botones activos
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    event.target.classList.add('active');
    
    renderProducts();
    
    // Scroll suave al inicio de productos
    document.getElementById('productsGrid').scrollIntoView({ behavior: 'smooth' });
}

// Abrir lightbox
function openLightbox(image, title, price) {
    const lightbox = document.getElementById('lightbox');
    const lightboxImage = document.getElementById('lightboxImage');
    const lightboxTitle = document.getElementById('lightboxTitle');
    const lightboxPrice = document.getElementById('lightboxPrice');
    
    lightboxImage.src = image;
    lightboxTitle.textContent = title;
    lightboxPrice.textContent = price;
    lightbox.classList.add('active');
    document.body.style.overflow = 'hidden';
}

// Cerrar lightbox
function closeLightbox() {
    const lightbox = document.getElementById('lightbox');
    lightbox.classList.remove('active');
    document.body.style.overflow = '';
}

// Ordenar producto
function orderProduct(code, name, price) {
    // Enviar evento a Google Analytics
    if (typeof gtag !== 'undefined') {
        gtag('event', 'product_order', {
            'event_category': 'Catalog',
            'event_label': code,
            'value': price,
            'product_name': name
        });
    }
    
    const formattedPrice = new Intl.NumberFormat('es-CO', {
        style: 'currency',
        currency: 'COP',
        minimumFractionDigits: 0
    }).format(price);
    
    const message = `Hola, me interesa el ramo *${code} - ${name}* con un precio de ${formattedPrice}. ¿Podrían darme más información?`;
    const whatsappUrl = `https://wa.me/573114701386?text=${encodeURIComponent(message)}`;
    
    window.open(whatsappUrl, '_blank');
}

// Scroll to top
function initScrollTop() {
    const scrollBtn = document.getElementById('scrollTop');
    
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            scrollBtn.classList.add('visible');
        } else {
            scrollBtn.classList.remove('visible');
        }
    });
}

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Cerrar lightbox con tecla ESC
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeLightbox();
    }
});
