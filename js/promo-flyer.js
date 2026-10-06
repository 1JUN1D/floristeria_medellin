// ===================================
// ARREGLOS DE LA SEMANA · Flyer flotante + sección destacada
// Familia en Pétalos - Medellín
// Usa `products`, `weeklyPromo` y `getWeekEnd()` de js/catalog-data.js
//
// - El contador corre hasta el domingo 23:59:59 (hora Colombia)
//   y se reinicia solo cada lunes a las 00:00.
// - La sección se pinta dentro de <div id="weekly-deals"></div>.
// - El flyer se muestra una vez por visita y se cierra solo
//   después de `weeklyPromo.autoCloseSeconds`.
// ===================================

(function () {
    if (typeof products === 'undefined' || typeof weeklyPromo === 'undefined' || !weeklyPromo.active) return;

    const deals = weeklyPromo.productIds
        .map(id => products.find(p => p.id === id))
        .filter(p => p && p.promo && p.promo.oldPrice);
    if (!deals.length) return;

    const WA_NUMBER = '573108970263';
    const SECTION_ID = 'arreglos-semana';
    const SEEN_KEY = 'fep_weekly_flyer_seen';

    const formatCOP = value => new Intl.NumberFormat('es-CO', {
        style: 'currency', currency: 'COP', minimumFractionDigits: 0
    }).format(value);
    const pad = n => String(n).padStart(2, '0');
    const discount = p => Math.round((1 - p.price / p.promo.oldPrice) * 100);

    // ---------- Pedido por WhatsApp ----------
    function orderDeal(id, source) {
        const p = deals.find(d => d.id === id);
        if (!p) return;
        if (typeof gtag !== 'undefined') {
            gtag('event', 'product_order', {
                'event_category': 'Promo semana',
                'event_label': `COD_${p.code}`,
                'value': p.price,
                'product_name': p.name,
                'source': source
            });
        }
        let photo = '';
        try { photo = `\nFoto: ${new URL(p.image, document.baseURI).href}`; } catch (e) { photo = `\nFoto: ${p.image}`; }
        const msg = `Hola, me interesa el arreglo de la semana *COD_${p.code} - ${p.name}* con precio de promoción de ${formatCOP(p.price)} (antes ${formatCOP(p.promo.oldPrice)}). ¿Podrían darme más información?${photo}`;
        window.open(`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(msg)}`, '_blank');
    }

    // ---------- Contador compartido ----------
    const counters = [];
    function countdownHtml(prefix) {
        return `
            <div class="${prefix}__unit"><b data-unit="d">00</b><span>Días</span></div>
            <div class="${prefix}__unit"><b data-unit="h">00</b><span>Horas</span></div>
            <div class="${prefix}__unit"><b data-unit="m">00</b><span>Min</span></div>
            <div class="${prefix}__unit"><b data-unit="s">00</b><span>Seg</span></div>`;
    }
    function tick() {
        // Al llegar a cero (lunes 00:00) getWeekEnd() devuelve el próximo domingo: se reinicia solo.
        const diff = Math.max(0, getWeekEnd() - Date.now());
        const parts = {
            d: Math.floor(diff / 86400000),
            h: Math.floor((diff % 86400000) / 3600000),
            m: Math.floor((diff % 3600000) / 60000),
            s: Math.floor((diff % 60000) / 1000)
        };
        counters.forEach(root => {
            if (!root.isConnected) return;
            Object.keys(parts).forEach(k => {
                const el = root.querySelector(`[data-unit="${k}"]`);
                if (el) el.textContent = pad(parts[k]);
            });
        });
    }

    // ---------- Sección destacada ----------
    function renderSection() {
        const host = document.getElementById('weekly-deals');
        if (!host) return null;

        const cards = deals.map(p => `
            <article class="deal-card">
                <div class="deal-card__media" data-deal-zoom="${p.id}">
                    <span class="deal-card__off">-${discount(p)}%</span>
                    <img src="${p.image}" alt="${p.name} - arreglo floral en promoción en Medellín" loading="lazy">
                </div>
                <div class="deal-card__body">
                    <span class="deal-card__code">COD_${p.code}</span>
                    <h3 class="deal-card__name">${p.name}</h3>
                    <p class="deal-card__desc">${p.description}</p>
                    <div class="deal-card__prices">
                        <span class="deal-card__old"><small>Antes</small><s>${formatCOP(p.promo.oldPrice)}</s></span>
                        <span class="deal-card__new"><small>Ahora</small> ${formatCOP(p.price)}</span>
                    </div>
                    <span class="deal-card__save">Ahorras ${formatCOP(p.promo.oldPrice - p.price)}</span>
                    <button type="button" class="deal-card__btn" data-deal-order="${p.id}">
                        <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.16-.17.2-.35.22-.64.08-.3-.15-1.26-.46-2.39-1.48-.88-.79-1.48-1.76-1.65-2.06-.17-.3-.02-.46.13-.6.13-.14.3-.35.45-.52.15-.18.2-.3.3-.5.1-.2.05-.37-.03-.52-.07-.15-.67-1.61-.92-2.2-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.21 3.07c.15.2 2.1 3.2 5.08 4.49.71.3 1.26.49 1.7.63.71.22 1.36.19 1.87.12.57-.09 1.76-.72 2-1.41.25-.7.25-1.29.18-1.41-.08-.13-.27-.2-.57-.35zM12.05 21.8h-.01a9.87 9.87 0 01-5.03-1.38l-.36-.21-3.74.98 1-3.65-.24-.37a9.86 9.86 0 01-1.51-5.26c0-5.45 4.44-9.88 9.89-9.88 2.64 0 5.12 1.03 6.99 2.9a9.83 9.83 0 012.89 7c0 5.45-4.44 9.88-9.88 9.88zm8.41-18.3A11.82 11.82 0 0012.05 0C5.5 0 .16 5.34.16 11.89c0 2.1.55 4.14 1.59 5.95L.06 24l6.3-1.65a11.88 11.88 0 005.68 1.45h.01c6.55 0 11.89-5.34 11.89-11.89 0-3.18-1.24-6.17-3.48-8.41z"/></svg>
                        Pedir<span class="deal-card__btn-long"> por WhatsApp</span>
                    </button>
                </div>
            </article>`).join('');

        host.innerHTML = `
            <section class="weekly-deals" id="${SECTION_ID}" aria-labelledby="weeklyDealsTitle">
                <div class="container">
                    <div class="weekly-deals__head">
                        <div class="weekly-deals__intro">
                            <span class="weekly-deals__eyebrow">Promoción · Solo esta semana</span>
                            <h2 class="weekly-deals__title" id="weeklyDealsTitle">${weeklyPromo.title}</h2>
                            <p class="weekly-deals__text">${weeklyPromo.subtitle}</p>
                        </div>
                        <div class="weekly-deals__timer">
                            <span class="weekly-deals__timer-label">La promoción termina en</span>
                            <div class="weekly-deals__countdown" aria-live="off">${countdownHtml('weekly-deals')}</div>
                            <span class="weekly-deals__timer-foot">Domingo a medianoche</span>
                        </div>
                    </div>
                    <div class="weekly-deals__grid">${cards}</div>
                </div>
            </section>`;

        const section = host.querySelector('.weekly-deals');
        counters.push(section.querySelector('.weekly-deals__countdown'));

        section.addEventListener('click', e => {
            const orderBtn = e.target.closest('[data-deal-order]');
            if (orderBtn) { orderDeal(Number(orderBtn.dataset.dealOrder), 'section'); return; }
            const zoom = e.target.closest('[data-deal-zoom]');
            if (zoom && typeof openLightbox === 'function') {
                const p = deals.find(d => d.id === Number(zoom.dataset.dealZoom));
                if (p) openLightbox(p.image, `COD_${p.code} - ${p.name}`, `Antes ${formatCOP(p.promo.oldPrice)} · Ahora ${formatCOP(p.price)}`);
            }
        });

        return section;
    }

    // ---------- Flyer flotante ----------
    function buildFlyer(hasSection) {
        const autoClose = Number(weeklyPromo.autoCloseSeconds) > 0 ? Number(weeklyPromo.autoCloseSeconds) : 300;
        const ctaHref = hasSection ? `#${SECTION_ID}` : `/catalogo.html#${SECTION_ID}`;

        const items = deals.map(p => `
            <button type="button" class="wk-flyer__item" data-deal-order="${p.id}" aria-label="Pedir ${p.name} por WhatsApp">
                <span class="wk-flyer__img">
                    <span class="wk-flyer__off">-${discount(p)}%</span>
                    <img src="${p.image}" alt="${p.name}">
                </span>
                <span class="wk-flyer__name">${p.name}</span>
                <span class="wk-flyer__old">${formatCOP(p.promo.oldPrice)}</span>
                <span class="wk-flyer__new">${formatCOP(p.price)}</span>
            </button>`).join('');

        const flyer = document.createElement('div');
        flyer.className = 'wk-flyer';
        flyer.setAttribute('role', 'dialog');
        flyer.setAttribute('aria-modal', 'true');
        flyer.setAttribute('aria-label', weeklyPromo.title);
        flyer.style.setProperty('--wk-auto-close', autoClose + 's');
        flyer.innerHTML = `
            <div class="wk-flyer__card">
                <button class="wk-flyer__close" type="button" aria-label="Cerrar" data-flyer-close>×</button>
                <div class="wk-flyer__head">
                    <div class="wk-flyer__eyebrow">Familia en Pétalos · Promoción</div>
                    <h2 class="wk-flyer__title">${weeklyPromo.title}</h2>
                    <p class="wk-flyer__subtitle">Precios especiales hasta el domingo</p>
                    <div class="wk-flyer__countdown">${countdownHtml('wk-flyer')}</div>
                </div>
                <div class="wk-flyer__grid">${items}</div>
                <div class="wk-flyer__foot">
                    <a class="wk-flyer__cta" href="${ctaHref}" data-flyer-cta>Ver los arreglos de la semana</a>
                    <span class="wk-flyer__hint">Toca un arreglo para pedirlo por WhatsApp</span>
                </div>
                <div class="wk-flyer__timer"></div>
            </div>`;

        let closeTimer = null;

        function open() {
            document.body.appendChild(flyer);
            counters.push(flyer.querySelector('.wk-flyer__countdown'));
            tick();
            requestAnimationFrame(() => flyer.classList.add('is-open'));
            closeTimer = setTimeout(close, autoClose * 1000);
            try { sessionStorage.setItem(SEEN_KEY, '1'); } catch (e) {}
            if (typeof gtag !== 'undefined') {
                gtag('event', 'promo_flyer_view', { 'event_category': 'Promo semana', 'event_label': 'arreglos_semana' });
            }
        }

        function close() {
            clearTimeout(closeTimer);
            flyer.classList.remove('is-open');
            setTimeout(() => { if (flyer.parentNode) flyer.parentNode.removeChild(flyer); }, 400);
            document.removeEventListener('keydown', onKey);
        }

        function onKey(e) { if (e.key === 'Escape') close(); }

        flyer.addEventListener('click', e => {
            if (e.target === flyer || e.target.closest('[data-flyer-close]')) { close(); return; }
            const item = e.target.closest('[data-deal-order]');
            if (item) { orderDeal(Number(item.dataset.dealOrder), 'flyer'); close(); return; }
            const cta = e.target.closest('[data-flyer-cta]');
            if (cta && hasSection) {
                e.preventDefault();
                close();
                document.getElementById(SECTION_ID).scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
        document.addEventListener('keydown', onKey);

        return open;
    }

    // ---------- Arranque ----------
    function init() {
        const section = renderSection();
        tick();
        setInterval(tick, 1000);

        // Si llegan desde el enlace del flyer, bajar directo a la sección y no repetir el flyer
        const arrivedAtSection = section && location.hash === `#${SECTION_ID}`;
        if (arrivedAtSection) {
            setTimeout(() => section.scrollIntoView({ behavior: 'smooth', block: 'start' }), 300);
        }

        let seen = false;
        try { seen = sessionStorage.getItem(SEEN_KEY) === '1'; } catch (e) {}
        if (!seen && !arrivedAtSection) {
            const open = buildFlyer(!!section);
            setTimeout(open, 600);
        }
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();
