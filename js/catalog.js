// ===================================
// FUNCIONES DEL CATÁLOGO
// Floristeria Toda Ocasion
// ===================================

let currentFilter = 'all';
let currentSearch = '';

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

    // Aplicar filtro por categoría
    let filtered = currentFilter === 'all'
        ? [...products]
        : products.filter(p => p.category.toLowerCase().includes(currentFilter.toLowerCase()));

    // Aplicar búsqueda por nombre o código
    if (currentSearch.trim() !== '') {
        const term = currentSearch.toLowerCase().trim();
        filtered = filtered.filter(p =>
            p.name.toLowerCase().includes(term) ||
            String(p.code).toLowerCase().includes(term) ||
            p.category.toLowerCase().includes(term) ||
            p.description.toLowerCase().includes(term)
        );
    }

    // Ordenar por precio ascendente (menor a mayor)
    filtered.sort((a, b) => a.price - b.price);

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
                <a href="#" class="btn-order" onclick="orderProduct('COD_${product.code}', '${product.name}', ${product.price}, '${product.image}'); return false;">
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

    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    if (event && event.target) {
        event.target.classList.add('active');
    }

    renderProducts();
    document.getElementById('productsGrid').scrollIntoView({ behavior: 'smooth' });
}

// Buscar productos
function searchProducts() {
    const input = document.getElementById('searchInput');
    const clearBtn = document.getElementById('searchClear');
    currentSearch = input.value;
    clearBtn.style.display = currentSearch ? 'block' : 'none';
    renderProducts();
}

// Limpiar búsqueda
function clearSearch() {
    const input = document.getElementById('searchInput');
    input.value = '';
    currentSearch = '';
    document.getElementById('searchClear').style.display = 'none';
    renderProducts();
    input.focus();
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

// Ordenar producto - envía mensaje a WhatsApp con código, nombre, precio y URL de la foto
function orderProduct(code, name, price, image) {
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

    // Construir URL absoluta de la foto
    let photoLine = '';
    if (image) {
        try {
            const photoUrl = new URL(image, document.baseURI).href;
            photoLine = `\nFoto: ${photoUrl}`;
        } catch (e) {
            photoLine = `\nFoto: ${image}`;
        }
    }

    const message = `Hola, me interesa el ramo *${code} - ${name}* con un precio de ${formattedPrice}. ¿Podrían darme más información?${photoLine}`;
    const whatsappUrl = `https://wa.me/573148624244?text=${encodeURIComponent(message)}`;
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
