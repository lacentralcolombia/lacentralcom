// CONFIGURACIÓN OFICIAL
const NUMERO_WHATSAPP = "573116017186";

let carrito = [];
let cantidadesTarjetas = {};

const nombresCategorias = {
    'todos': 'Todas las Categorías',
    'general': 'General',
    'quesos': 'Quesos y Lácteos',
    'embutidos': 'Embutidos y Cárnicos',
    'alimentos': 'Alimentos y Condimentos',
    'frutos-secos': 'Frutos Secos',
    'cocteleria': 'Coctelería y Micheladas',
    'desechables': 'Plásticos y Desechables',
    'jamones': 'Embutidos - Jamones',
    'salchichas': 'Embutidos - Salchichas',
    'chorizos': 'Embutidos - Chorizos',
    'mortadelas': 'Embutidos - Mortadelas',
    'tocinetas': 'Embutidos - Tocinetas',
    'liqui-todos': 'Todas las Perlas Explosivas (Liqui POPS)',
    'liqui-manzana': 'Liquipops | Manzana Verde',
    'liqui-blueberry': 'Liquipops | Blueberry',
    'liqui-coco': 'Liquipops | Coco',
    'liqui-cereza': 'Liquipops | Cereza',
    'liqui-lychee': 'Liquipops | Lychee',
    'liqui-sandia': 'Liquipop | Sandía',
    'liqui-icepink': 'Liquipops | Ice Pink',
    'liqui-fresa': 'Liquipops | Fresa',
    'liqui-chicle': 'Liquipops | Chicle',
    'liqui-mango': 'Liquipops | Mango Biche',
    'liqui-maracuya': 'Liquipops | Maracuyá',
    'liqui-cafe': 'Liquipops | Café',
    'siropes': 'Siropes y Chamoy',
    'escarchas': 'Escarchas y Micheladas'
};

function getProductos() {
    if (typeof productosData !== 'undefined' && Array.isArray(productosData)) {
        return productosData;
    }
    if (window.productosData && Array.isArray(window.productosData)) {
        return window.productosData;
    }
    return [];
}

function getMarcas() {
    if (typeof marcasData !== 'undefined' && Array.isArray(marcasData)) {
        return marcasData;
    }
    if (window.marcasData && Array.isArray(window.marcasData)) {
        return window.marcasData;
    }
    return [];
}

// CONTROL DEL MENÚ MÓVIL
function toggleMobileMenu() {
    const mobileNav = document.getElementById('mobile-nav');
    const overlay = document.getElementById('mobile-nav-overlay');
    if (mobileNav) {
        mobileNav.classList.toggle('open');
        document.body.classList.toggle('menu-open');
        if (overlay) overlay.classList.toggle('open');
    }
}

function irASeccion(idSeccion) {
    const mobileNav = document.getElementById('mobile-nav');
    const overlay = document.getElementById('mobile-nav-overlay');
    if (mobileNav) {
        mobileNav.classList.remove('open');
        document.body.classList.remove('menu-open');
        if (overlay) overlay.classList.remove('open');
    }

    const targetId = idSeccion.replace('#', '');
    const elemento = document.getElementById(targetId);
    if (elemento) {
        elemento.scrollIntoView({ behavior: 'smooth' });
    }
}

// FUNCIÓN PARA NAVEGAR Y FILTRAR DESDE EL MENÚ MÓVIL SIN ERRORES
function navegarYFiltrar(categoria, subcategoria = null, idSeccion = 'catalogo', event = null, colorExplosion = null) {
    irASeccion(idSeccion);
    filtrarCategoria(categoria, subcategoria, event, colorExplosion);
}

// CONTROL DE DESPLEGABLES SUPERIORES
function toggleTopDropdown(idDropdown, event) {
    if (event && typeof event.stopPropagation === 'function') {
        event.stopPropagation();
    }
    
    const target = document.getElementById(idDropdown);
    if (!target) return;

    const estaAbierto = target.classList.contains('open');

    document.querySelectorAll('.top-dropdown-content').forEach(d => {
        d.classList.remove('open');
    });

    if (!estaAbierto) {
        target.classList.add('open');
    }
}

document.addEventListener('click', (e) => {
    if (!e.target.closest('.top-dropdown')) {
        document.querySelectorAll('.top-dropdown-content').forEach(d => {
            d.classList.remove('open');
        });
    }
});

// EFECTO DE EXPLOSIÓN DE PERLAS CON SONIDO POP
function crearEfectoExplosion(event, colorHex) {
    reproducirSonidoPop();

    let originX = window.innerWidth / 2;
    let originY = window.innerHeight / 2;

    if (event) {
        if (event.clientX !== undefined) {
            originX = event.clientX;
            originY = event.clientY;
        } else if (event.touches && event.touches[0]) {
            originX = event.touches[0].clientX;
            originY = event.touches[0].clientY;
        }
    }

    const cantidadParticulas = 28;
    const colorBase = colorHex || '#E6B64F';
    const paletaSecundaria = [colorBase, '#ffffff', '#E6B64F', '#2ecc71', '#ff69b4', '#00bfff', '#8b4513'];

    for (let i = 0; i < cantidadParticulas; i++) {
        const particula = document.createElement('div');
        particula.className = 'pop-sphere-particle';

        const color = i % 2 === 0 ? colorBase : paletaSecundaria[Math.floor(Math.random() * paletaSecundaria.length)];
        const tamano = Math.floor(Math.random() * 18) + 10;

        particula.style.width = `${tamano}px`;
        particula.style.height = `${tamano}px`;
        particula.style.left = `${originX}px`;
        particula.style.top = `${originY}px`;
        particula.style.background = `radial-gradient(circle at 35% 35%, #ffffff 0%, ${color} 60%, #000000 100%)`;
        particula.style.boxShadow = `0 0 12px ${color}`;

        const angulo = Math.random() * Math.PI * 2;
        const distancia = Math.floor(Math.random() * 180) + 50;
        const destX = Math.cos(angulo) * distancia;
        const destY = Math.sin(angulo) * distancia - 30;

        particula.style.setProperty('--dx', `${destX}px`);
        particula.style.setProperty('--dy', `${destY}px`);

        document.body.appendChild(particula);

        setTimeout(() => {
            particula.remove();
        }, 750);
    }
}

function reproducirSonidoPop() {
    try {
        const AudioContext = window.AudioContext || window.webkitAudioContext;
        if (!AudioContext) return;
        const ctx = new AudioContext();

        const osc = ctx.createOscillator();
        const gain = ctx.createGain();

        osc.type = 'sine';
        osc.frequency.setValueAtTime(300, ctx.currentTime);
        osc.frequency.exponentialRampToValueAtTime(900, ctx.currentTime + 0.08);

        gain.gain.setValueAtTime(0.35, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.08);

        osc.connect(gain);
        gain.connect(ctx.destination);

        osc.start();
        osc.stop(ctx.currentTime + 0.09);
    } catch (e) {}
}

// RENDERIZAR MARCAS
function renderizarMarcas() {
    const marcas = getMarcas();
    const container = document.getElementById('brands-container');
    if (!container) return;
    container.innerHTML = '';
    
    marcas.forEach(marca => {
        const card = document.createElement('div');
        card.className = 'brand-card';
        card.innerHTML = `<img src="${marca.logo}" alt="Logo ${marca.nombre}" class="brand-img">`;
        container.appendChild(card);
    });
}

// RENDERIZAR PRODUCTOS
function renderizarProductos(categoria = 'todos', subcat = null, filtroTexto = '') {
    const grid = document.getElementById('grid-productos');
    const statusText = document.getElementById('categoria-activa-titulo');
    if (!grid) return;

    const nombreTitulo = subcat && subcat !== 'todos' ? nombresCategorias[subcat] : nombresCategorias[categoria];
    if (statusText) {
        statusText.innerText = `Mostrando: ${nombreTitulo || categoria}`;
    }

    grid.innerHTML = '';

    const productos = getProductos();

    if (!productos || productos.length === 0) {
        grid.innerHTML = `
            <div style="grid-column: 1/-1; text-align: center; color: var(--text-muted); padding: 40px;">
                <i class="fa-solid fa-triangle-exclamation" style="font-size: 2.5rem; margin-bottom: 10px; color: var(--gold-brand);"></i>
                <p>Cargando productos del catálogo...</p>
            </div>
        `;
        return;
    }

    let filtrados = productos;

    if (categoria && categoria !== 'todos') {
        filtrados = filtrados.filter(p => p.categoria === categoria);
    }

    if (subcat === 'liqui-todos') {
        filtrados = filtrados.filter(p => p.subcategoria && p.subcategoria.startsWith('liqui-'));
    } else if (subcat && subcat !== 'todos') {
        filtrados = filtrados.filter(p => p.subcategoria === subcat);
    }

    if (filtroTexto.trim() !== '') {
        const query = filtroTexto.toLowerCase();
        filtrados = filtrados.filter(p => 
            p.nombre.toLowerCase().includes(query) || 
            p.descripcion.toLowerCase().includes(query)
        );
    }

    if (filtrados.length === 0) {
        grid.innerHTML = `
            <div style="grid-column: 1/-1; text-align: center; color: var(--text-muted); padding: 40px;">
                <i class="fa-solid fa-magnifying-glass" style="font-size: 2.5rem; margin-bottom: 10px;"></i>
                <p>No se encontraron productos que coincidan con la búsqueda.</p>
            </div>
        `;
        return;
    }

    filtrados.forEach(prod => {
        if (!cantidadesTarjetas[prod.id]) {
            cantidadesTarjetas[prod.id] = 1;
        }

        const catNombre = (prod.subcategoria && prod.subcategoria !== 'general' && nombresCategorias[prod.subcategoria]) 
            ? nombresCategorias[prod.subcategoria] 
            : (nombresCategorias[prod.categoria] || prod.categoria);

        const nombreLimpio = prod.nombre.replace(/'/g, "\\'");
        const imgLimpia = prod.imagen.replace(/'/g, "\\'");

        const card = document.createElement('div');
        card.className = 'product-card';
        card.innerHTML = `
            <div class="product-img-wrapper" onclick="ampliarImagen('${imgLimpia}', '${nombreLimpio}')">
                <img src="${prod.imagen}" alt="${prod.nombre}" class="product-img" onerror="this.src='https://via.placeholder.com/500?text=Producto'">
                <span class="zoom-hint"><i class="fa-solid fa-eye"></i> Ver más</span>
            </div>
            <div class="product-info">
                <span class="product-category">${catNombre}</span>
                <h3 class="product-title">${prod.nombre}</h3>
                <p class="product-desc">${prod.descripcion}</p>
                <div class="product-status">
                    <i class="fa-solid fa-circle-check"></i> Consultar disponibilidad
                </div>
                <div class="card-action-row">
                    <div class="card-qty-selector">
                        <button class="card-qty-btn" onclick="modificarCantidadTarjeta(${prod.id}, -1)">-</button>
                        <span class="card-qty-num" id="card-qty-${prod.id}">${cantidadesTarjetas[prod.id]}</span>
                        <button class="card-qty-btn" onclick="modificarCantidadTarjeta(${prod.id}, 1)">+</button>
                    </div>
                    <button class="btn-add-item" onclick="agregarAlCarritoConCantidad(${prod.id})">
                        <i class="fa-solid fa-cart-plus"></i> Agregar al pedido
                    </button>
                </div>
            </div>
        `;
        grid.appendChild(card);
    });
}

function ampliarImagen(url, titulo) {
    const modal = document.getElementById('image-modal');
    const modalImg = document.getElementById('img-ampliada');
    const captionText = document.getElementById('caption-modal');

    if (modal && modalImg && captionText) {
        modal.style.display = "block";
        modalImg.src = url;
        captionText.innerHTML = titulo;
    }
}

function cerrarImagenModal() {
    const modal = document.getElementById('image-modal');
    if (modal) modal.style.display = "none";
}

function buscarProductos() {
    const input = document.getElementById('input-buscar');
    const texto = input ? input.value : '';
    renderizarProductos('todos', null, texto);
}

function modificarCantidadTarjeta(id, cambio) {
    if (!cantidadesTarjetas[id]) cantidadesTarjetas[id] = 1;
    cantidadesTarjetas[id] += cambio;
    if (cantidadesTarjetas[id] < 1) cantidadesTarjetas[id] = 1;

    const spanQty = document.getElementById(`card-qty-${id}`);
    if (spanQty) spanQty.innerText = cantidadesTarjetas[id];
}

function filtrarCategoria(cat, subcat = null, event = null, colorExplosion = null) {
    if (colorExplosion && event) {
        crearEfectoExplosion(event, colorExplosion);
    }

    document.querySelectorAll('.top-nav-btn').forEach(b => b.classList.remove('active'));
    document.querySelectorAll('.top-dropdown-content button').forEach(b => b.classList.remove('active'));

    if (event && event.currentTarget && event.currentTarget.classList) {
        event.currentTarget.classList.add('active');
    }
    
    document.querySelectorAll('.top-dropdown-content').forEach(d => d.classList.remove('open'));
    renderizarProductos(cat, subcat);
}

function agregarAlCarritoConCantidad(id) {
    const cantidadSeleccionada = cantidadesTarjetas[id] || 1;
    const existe = carrito.find(p => p.id === id);
    const productos = getProductos();

    if (existe) {
        existe.cantidad += cantidadSeleccionada;
    } else {
        const prod = productos.find(p => p.id === id);
        if (prod) {
            carrito.push({ ...prod, cantidad: cantidadSeleccionada });
        }
    }

    cantidadesTarjetas[id] = 1;
    const spanQty = document.getElementById(`card-qty-${id}`);
    if (spanQty) spanQty.innerText = 1;

    actualizarCarritoUI();
    abrirCarrito();
}

function cambiarCantidadCarrito(id, cambio) {
    const item = carrito.find(p => p.id === id);
    if (item) {
        item.cantidad += cambio;
        if (item.cantidad <= 0) {
            carrito = carrito.filter(p => p.id !== id);
        }
    }
    actualizarCarritoUI();
}

function actualizarCarritoUI() {
    const container = document.getElementById('cart-items-container');
    const badge = document.getElementById('cart-count');

    if (!container || !badge) return;
    container.innerHTML = '';
    let totalItems = 0;

    if (carrito.length === 0) {
        container.innerHTML = `
            <div style="text-align: center; color: var(--text-muted); margin-top: 40px;">
                <i class="fa-solid fa-basket-shopping" style="font-size: 3rem; margin-bottom: 10px;"></i>
                <p>Tu lista de pedido está vacía.</p>
            </div>
        `;
    } else {
        carrito.forEach(prod => {
            totalItems += prod.cantidad;
            const subName = (prod.subcategoria && prod.subcategoria !== 'general' && nombresCategorias[prod.subcategoria]) 
                ? nombresCategorias[prod.subcategoria] 
                : (nombresCategorias[prod.categoria] || prod.categoria);

            const itemDiv = document.createElement('div');
            itemDiv.className = 'cart-item';
            itemDiv.innerHTML = `
                <div>
                    <h4 style="font-size: 0.95rem;">${prod.nombre}</h4>
                    <span style="font-size: 0.8rem; color: var(--gold-brand);">${subName}</span>
                </div>
                <div class="cart-item-qty">
                    <button class="qty-btn" onclick="cambiarCantidadCarrito(${prod.id}, -1)">-</button>
                    <span>${prod.cantidad}</span>
                    <button class="qty-btn" onclick="cambiarCantidadCarrito(${prod.id}, 1)">+</button>
                </div>
            `;
            container.appendChild(itemDiv);
        });
    }

    badge.innerText = totalItems;
}

function toggleCart() {
    const drawer = document.getElementById('cart-drawer');
    const overlay = document.getElementById('cart-overlay');
    if (drawer && overlay) {
        drawer.classList.toggle('open');
        overlay.classList.toggle('open');
    }
}

function abrirCarrito() {
    const drawer = document.getElementById('cart-drawer');
    const overlay = document.getElementById('cart-overlay');
    if (drawer && overlay) {
        drawer.classList.add('open');
        overlay.classList.add('open');
    }
}

function enviarPedidoWhatsApp() {
    if (carrito.length === 0) {
        alert('Por favor agrega al menos un producto a tu lista de pedido.');
        return;
    }

    let msg = "🛒 *SOLICITUD DE PEDIDO*\n\n";
    msg += "Hola, deseo consultar disponibilidad de:\n\n";

    carrito.forEach(p => {
        let urlImagen = p.imagen;
        if (!urlImagen.startsWith('http')) {
            const baseUrl = window.location.href.substring(0, window.location.href.lastIndexOf('/') + 1);
            urlImagen = baseUrl + p.imagen;
        }

        msg += `• *${p.nombre}* (${p.cantidad} unidad${p.cantidad > 1 ? 'es' : ''})\n`;
        msg += `  🖼️ Ver imagen: ${urlImagen}\n\n`;
    });

    msg += "Quedo atento a su respuesta. ¡Muchas gracias!";

    const url = `https://wa.me/${NUMERO_WHATSAPP}?text=${encodeURIComponent(msg)}`;
    window.open(url, '_blank');
}

function iniciarApp() {
    renderizarProductos();
    renderizarMarcas();
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', iniciarApp);
} else {
    iniciarApp();
}

window.addEventListener('load', iniciarApp);
/* ============================================================
   FIX DESPLEGABLES AL FRENTE (PC + CELULAR)
   Pegar AL FINAL de jsapp (reemplaza la versión anterior).
   Mientras un menú está abierto, se mueve al <body> para que
   ninguna capa del catálogo (scroll táctil, z-index) lo tape.
   Al cerrarse, vuelve a su lugar original.
   ============================================================ */
(function () {
    const homes = new WeakMap();

    function openMenu(menu) {
        // Guarda dónde estaba y lo mueve al body
        if (menu.parentElement !== document.body) {
            homes.set(menu, { parent: menu.parentElement, next: menu.nextSibling });
            const home = homes.get(menu);
            const trigger = home.parent.querySelector(':scope > button, :scope > .top-nav-btn, :scope > a');
            if (trigger) menu._trigger = trigger;
            document.body.appendChild(menu);
        }

        const trigger = menu._trigger;
        if (!trigger) return;

        const rect = trigger.getBoundingClientRect();
        menu.style.top = (rect.bottom + 6) + 'px';

        const menuWidth = menu.offsetWidth || 290;
        const left = Math.min(rect.left, window.innerWidth - menuWidth - 10);
        menu.style.left = Math.max(10, left) + 'px';
    }

    function closeMenu(menu) {
        const home = homes.get(menu);
        if (home && home.parent) {
            home.parent.insertBefore(menu, home.next);
            homes.delete(menu);
        }
    }

    new MutationObserver(mutations => {
        mutations.forEach(m => {
            const el = m.target;
            if (!el.classList || !el.classList.contains('top-dropdown-content')) return;
            if (el.classList.contains('open')) openMenu(el);
            else closeMenu(el);
        });
    }).observe(document.body, {
        subtree: true,
        attributes: true,
        attributeFilter: ['class']
    });

    // Cierra los menús al hacer scroll de la página
    window.addEventListener('scroll', () => {
        document.querySelectorAll('.top-dropdown-content.open')
            .forEach(m => m.classList.remove('open'));
    }, { passive: true });
})();
