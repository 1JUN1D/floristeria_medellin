// ===================================
// FLYER FLOTANTE DE PROMOCIÓN
// Familia en Pétalos - Medellín
// Usa `products` y `promoFlyer` de js/catalog-data.js
// Se muestra al cargar, se cierra solo después de N segundos
// y deja de aparecer automáticamente cuando vence la promoción.
// ===================================

(function () {
    if (typeof products === 'undefined' || typeof promoFlyer === 'undefined') return;

    const product = products.find(p => p.id === promoFlyer.productId);
    if (!product || !product.promo || !product.promo.until) return;

    const endTime = new Date(product.promo.until).getTime();
    if (isNaN(endTime) || endTime <= Date.now()) return; // promoción vencida: no mostrar

    const formatCOP = value => new Intl.NumberFormat('es-CO', {
        style: 'currency', currency: 'COP', minimumFractionDigits: 0
    }).format(value);

    const autoClose = Number(promoFlyer.autoCloseSeconds) > 0 ? Number(promoFlyer.autoCloseSeconds) : 5;

    const waMessage = `Hola, me interesa el arreglo en promoción *COD_${product.code} - ${product.name}* con un precio de ${formatCOP(product.price)}. ¿Podrían darme más información?`;
    const waUrl = `https://wa.me/573108970263?text=${encodeURIComponent(waMessage)}`;

    const oldPriceHtml = product.promo.oldPrice
        ? `<div class="promo-flyer__old-price">Antes ${formatCOP(product.promo.oldPrice)}</div>`
        : '';

    const flyer = document.createElement('div');
    flyer.className = 'promo-flyer';
    flyer.id = 'promoFlyer';
    flyer.setAttribute('role', 'dialog');
    flyer.setAttribute('aria-modal', 'true');
    flyer.setAttribute('aria-label', promoFlyer.title);
    flyer.style.setProperty('--promo-auto-close', autoClose + 's');
    flyer.innerHTML = `
        <div class="promo-flyer__card">
            <button class="promo-flyer__close" type="button" aria-label="Cerrar" data-promo-close>×</button>
            <div class="promo-flyer__media">
                <span class="promo-flyer__tag">${product.promo.label || 'En promoción'}</span>
                <img src="${product.image}" alt="${product.name}">
            </div>
            <div class="promo-flyer__body">
                <div class="promo-flyer__eyebrow">Familia en Pétalos</div>
                <h2 class="promo-flyer__title">${promoFlyer.title}</h2>
                <p class="promo-flyer__product">${product.name} · COD_${product.code}</p>
                ${oldPriceHtml}
                <div class="promo-flyer__price">${formatCOP(product.price)}</div>
                <div class="promo-flyer__subtitle">${promoFlyer.subtitle}</div>
                <div class="promo-flyer__countdown" aria-live="polite">
                    <div class="promo-flyer__unit"><b data-unit="d">00</b><span>Días</span></div>
                    <div class="promo-flyer__unit"><b data-unit="h">00</b><span>Horas</span></div>
                    <div class="promo-flyer__unit"><b data-unit="m">00</b><span>Min</span></div>
                    <div class="promo-flyer__unit"><b data-unit="s">00</b><span>Seg</span></div>
                </div>
                <a class="promo-flyer__cta" href="${waUrl}" target="_blank" rel="noopener" data-promo-cta>
                    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"/></svg>
                    Pedir ahora
                </a>
            </div>
            <div class="promo-flyer__timer"></div>
        </div>
    `;

    const pad = n => String(n).padStart(2, '0');
    let tickTimer = null;
    let closeTimer = null;

    function tick() {
        const diff = endTime - Date.now();
        if (diff <= 0) { close(); return; }
        const d = Math.floor(diff / 86400000);
        const h = Math.floor((diff % 86400000) / 3600000);
        const m = Math.floor((diff % 3600000) / 60000);
        const s = Math.floor((diff % 60000) / 1000);
        flyer.querySelector('[data-unit="d"]').textContent = pad(d);
        flyer.querySelector('[data-unit="h"]').textContent = pad(h);
        flyer.querySelector('[data-unit="m"]').textContent = pad(m);
        flyer.querySelector('[data-unit="s"]').textContent = pad(s);
    }

    function open() {
        document.body.appendChild(flyer);
        tick();
        tickTimer = setInterval(tick, 1000);
        requestAnimationFrame(() => flyer.classList.add('is-open'));
        closeTimer = setTimeout(close, autoClose * 1000);

        if (typeof gtag !== 'undefined') {
            gtag('event', 'promo_flyer_view', { 'event_category': 'Promo', 'event_label': `COD_${product.code}` });
        }
    }

    function close() {
        clearInterval(tickTimer);
        clearTimeout(closeTimer);
        flyer.classList.remove('is-open');
        setTimeout(() => { if (flyer.parentNode) flyer.parentNode.removeChild(flyer); }, 400);
        document.removeEventListener('keydown', onKey);
    }

    function onKey(e) { if (e.key === 'Escape') close(); }

    flyer.addEventListener('click', e => {
        if (e.target === flyer || e.target.closest('[data-promo-close]')) close();
        if (e.target.closest('[data-promo-cta]')) {
            if (typeof gtag !== 'undefined') {
                gtag('event', 'product_order', { 'event_category': 'Promo', 'event_label': `COD_${product.code}`, 'value': product.price, 'product_name': product.name });
            }
            close();
        }
    });
    document.addEventListener('keydown', onKey);

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', () => setTimeout(open, 600));
    } else {
        setTimeout(open, 600);
    }
})();
