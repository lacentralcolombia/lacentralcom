// CONFIGURACIÓN OFICIAL
const NUMERO_WHATSAPP = "573116017186";

let carrito = [];
let cantidadesTarjetas = {};

const nombresCategorias = {
    'todos': 'Todas las Categorías',
    'general': 'General',
    'quesos-bloque': 'Quesos y Lácteos - En Bloque',
    'quesos-tajados': 'Quesos y Lácteos - Tajados',
    'quesos-frescos': 'Quesos y Lácteos - Frescos y Tradicionales',
    'leche-yogures': 'Quesos y Lácteos - Leche y Yogures',
    'embutidos': 'Embutidos y Cárnicos',
    'alimentos': 'Alimentos y Condimentos',
    'frutos-secos': 'Frutos Secos',
    'cocteleria': 'Coctelería y Micheladas',
    'desechables': 'Plásticos y Desechables',
    'dulces': 'Dulces',
    'saborizantes': 'Saborizantes',
    'precocidos': 'Precocidos y congelados',
    'panes': 'Panes',
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
    'yexis': 'Yexis | Caramelos en almíbar',
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
        cerrarTodosLosDropdowns();
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

/* =========================================================
   DESPLEGABLES SUPERIORES (siempre al frente de los productos)
   Mientras un menú está abierto se mueve al <body> y se
   posiciona justo debajo de su botón. Al cerrarse vuelve a
   su lugar. Así ninguna capa del catálogo lo puede tapar,
   ni en PC ni en celular.
   ========================================================= */
const dropdownHogar = new Map(); // menu -> { padre, boton }

function posicionarDropdown(menu, boton) {
    if (!menu || !boton) return;
    const rect = boton.getBoundingClientRect();
    menu.style.top = (rect.bottom + 6) + 'px';

    const ancho = menu.offsetWidth || 320;
    const left = Math.min(rect.left, window.innerWidth - ancho - 10);
    menu.style.left = Math.max(10, left) + 'px';
}

function cerrarDropdown(menu) {
    menu.classList.remove('open');
    const hogar = dropdownHogar.get(menu);
    if (hogar && hogar.padre) {
        hogar.padre.appendChild(menu);
    }
    dropdownHogar.delete(menu);
}

function cerrarTodosLosDropdowns() {
    document.querySelectorAll('.top-dropdown-content.open').forEach(cerrarDropdown);
}

function reposicionarDropdownsAbiertos() {
    dropdownHogar.forEach((hogar, menu) => {
        const rect = hogar.boton.getBoundingClientRect();
        // Si el botón sale de la pantalla, se cierra el menú
        if (rect.bottom < 60 || rect.top > window.innerHeight) {
            cerrarDropdown(menu);
        } else {
            posicionarDropdown(menu, hogar.boton);
        }
    });
}

function toggleTopDropdown(idDropdown, event) {
    if (event && typeof event.stopPropagation === 'function') {
        event.stopPropagation();
    }

    const menu = document.getElementById(idDropdown);
    if (!menu) return;

    const boton = (event && event.currentTarget)
        || document.querySelector(`[onclick*="${idDropdown}"]`);

    const estabaAbierto = menu.classList.contains('open');
    cerrarTodosLosDropdowns();
    if (estabaAbierto) return;

    dropdownHogar.set(menu, { padre: menu.parentElement, boton: boton });
    document.body.appendChild(menu);
    menu.classList.add('open');
    posicionarDropdown(menu, boton);
}

// Cerrar al hacer clic fuera
document.addEventListener('click', (e) => {
    if (!e.target.closest('.top-dropdown') && !e.target.closest('.top-dropdown-content')) {
        cerrarTodosLosDropdowns();
    }
});

// Cerrar con la tecla Escape
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') cerrarTodosLosDropdowns();
});

// Mantener el menú pegado a su botón al hacer scroll o girar el celular
window.addEventListener('scroll', reposicionarDropdownsAbiertos, { passive: true });
window.addEventListener('resize', reposicionarDropdownsAbiertos);

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
// Muestra el logo original de cada marca (archivo indicado en data.js).
// Si el archivo todavía no está subido, muestra el nombre de la marca
// en una tarjeta limpia, sin imágenes rotas.
function renderizarMarcas() {
    const marcas = getMarcas();
    const container = document.getElementById('brands-container');
    if (!container) return;
    container.innerHTML = '';

    marcas.forEach((marca, i) => {
        const card = document.createElement('div');
        card.className = 'brand-card';
        card.style.setProperty('--i', i);
        card.title = marca.nombre;

        const mostrarNombre = () => {
            card.classList.add('sin-logo');
            card.innerHTML = '';
            const nombre = document.createElement('span');
            nombre.className = 'brand-name';
            nombre.textContent = marca.nombre;
            card.appendChild(nombre);
        };

        if (marca.logo) {
            const img = document.createElement('img');
            img.className = 'brand-img';
            img.alt = 'Logo ' + marca.nombre;
            img.loading = 'lazy';
            img.decoding = 'async';
            // Prueba automáticamente el mismo nombre con otras extensiones
            // (png, webp, svg, jpg, jpeg) antes de mostrar solo el nombre.
            const base = marca.logo.replace(/\.(jpe?g|png|webp|svg)$/i, '');
            const extras = ['.png', '.webp', '.svg', '.jpg', '.jpeg']
                .map(e => base + e).filter(u => u !== marca.logo);
            img.addEventListener('error', () => {
                const siguiente = extras.shift();
                if (siguiente) { img.src = siguiente; } else { mostrarNombre(); }
            });
            img.src = marca.logo;
            card.appendChild(img);
        } else {
            mostrarNombre();
        }
        container.appendChild(card);
    });

    // Aparición suave, una tarjeta tras otra, al llegar a la sección
    const tarjetas = container.querySelectorAll('.brand-card');
    if ('IntersectionObserver' in window) {
        const obs = new IntersectionObserver((entradas, o) => {
            entradas.forEach(e => {
                if (e.isIntersecting) {
                    e.target.classList.add('visible');
                    o.unobserve(e.target);
                }
            });
        }, { threshold: 0.2 });
        tarjetas.forEach(t => obs.observe(t));
    } else {
        tarjetas.forEach(t => t.classList.add('visible'));
    }
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

    if (filtrados.length === 0 && filtroTexto.trim() === '') {
        const nombreCat = nombreTitulo || categoria;
        const iconos = { dulces: 'fa-candy-cane', panes: 'fa-bread-slice' };
        const icono = iconos[categoria] || 'fa-box-open';
        const msg = encodeURIComponent('Hola LA CENTRAL, quisiera consultar disponibilidad de: ' + nombreCat);
        grid.innerHTML = `
            <div class="empty-state">
                <div class="empty-state-icon"><i class="fa-solid ${icono}"></i></div>
                <h3>${nombreCat}</h3>
                <p>Estamos preparando esta sección del catálogo. Escríbenos y te contamos qué tenemos disponible hoy.</p>
                <a class="empty-state-btn" href="https://wa.me/${NUMERO_WHATSAPP}?text=${msg}" target="_blank" rel="noopener">
                    <i class="fa-brands fa-whatsapp"></i> Consultar por WhatsApp
                </a>
            </div>
        `;
        return;
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
                <img src="${prod.imagen}" alt="${prod.nombre}" class="product-img" loading="lazy" decoding="async" onerror="this.src='https://via.placeholder.com/500?text=Producto'">
                <span class="zoom-hint"><i class="fa-solid fa-eye"></i> Ver más</span>
            </div>
            <div class="product-info">
                <span class="product-category">${catNombre}</span>
                <h3 class="product-title">${prod.nombre}</h3>
                <p class="product-desc">${prod.descripcion}</p>
                <div class="product-status" style="font-size:0.8rem; color:var(--text-muted); margin-bottom:12px;">
                    <i class="fa-solid fa-circle-check" style="color:var(--gold-brand);"></i> Disponible
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
        modal.style.display = "flex";
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

    cerrarTodosLosDropdowns();
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
            itemDiv.style.cssText = "display: flex; justify-content: space-between; align-items: center; background: #1c1c1c; padding: 12px; border-radius: 8px; margin-bottom: 10px; border: 1px solid var(--border-color);";
            itemDiv.innerHTML = `
                <div style="flex-grow: 1; padding-right: 10px;">
                    <h4 style="font-size: 0.95rem; color: #fff; margin-bottom: 2px;">${prod.nombre}</h4>
                    <span style="font-size: 0.75rem; color: var(--gold-brand);">${subName}</span>
                </div>
                <div class="cart-item-qty" style="display: flex; align-items: center; gap: 8px; background: #252525; padding: 4px 8px; border-radius: 6px;">
                    <button class="qty-btn" onclick="cambiarCantidadCarrito(${prod.id}, -1)" style="background:none; border:none; color:#fff; cursor:pointer; font-weight:bold;">-</button>
                    <span style="color:#fff; font-weight:bold; font-size:0.9rem;">${prod.cantidad}</span>
                    <button class="qty-btn" onclick="cambiarCantidadCarrito(${prod.id}, 1)" style="background:none; border:none; color:#fff; cursor:pointer; font-weight:bold;">+</button>
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
        if (!urlImagen.startsWith('http') && !urlImagen.startsWith('//')) {
            const basePath = window.location.origin + window.location.pathname.substring(0, window.location.pathname.lastIndexOf('/') + 1);
            urlImagen = basePath + p.imagen.replace(/^\.\//, '');
        }
        // Codifica espacios y caracteres especiales para que el enlace funcione en WhatsApp
        urlImagen = encodeURI(urlImagen);

        msg += `• *${p.nombre}* (${p.cantidad} unidad${p.cantidad > 1 ? 'es' : ''})\n`;
        msg += `  🖼️ Ver imagen: ${urlImagen}\n\n`;
    });

    msg += "Quedo atento a su respuesta. ¡Muchas gracias!";

    const url = `https://wa.me/${NUMERO_WHATSAPP}?text=${encodeURIComponent(msg)}`;
    window.open(url, '_blank');
}

/* =========================================================
   MENÚ DESLIZABLE: invita al cliente a deslizar
   ========================================================= */
function iniciarMenuDeslizable() {
    const nav = document.getElementById('catalog-top-nav');
    const menu = document.getElementById('top-nav-menu');
    const flechaIzq = document.getElementById('flecha-izq');
    const flechaDer = document.getElementById('flecha-der');
    if (!nav || !menu) return;

    const reducirMovimiento = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    let usuarioInteractuo = false;
    let visible = false;
    let temporizador = null;

    function actualizarBordes() {
        const max = menu.scrollWidth - menu.clientWidth;
        nav.classList.toggle('puede-izq', menu.scrollLeft > 8);
        nav.classList.toggle('puede-der', menu.scrollLeft < max - 8);
        nav.classList.toggle('sin-desborde', max <= 4);
    }

    function marcarInteraccion() {
        if (usuarioInteractuo) return;
        usuarioInteractuo = true;
        clearTimeout(temporizador);
        nav.classList.add('sin-pista');
    }

    function asomar() {
        const max = menu.scrollWidth - menu.clientWidth;
        const hayDropdownAbierto = document.querySelector('.top-dropdown-content.open');
        if (usuarioInteractuo || reducirMovimiento || max < 20 || hayDropdownAbierto) return;
        menu.scrollTo({ left: Math.min(max, 120), behavior: 'smooth' });
        setTimeout(() => {
            if (!usuarioInteractuo) menu.scrollTo({ left: 0, behavior: 'smooth' });
        }, 850);
    }

    function programar(espera) {
        clearTimeout(temporizador);
        if (usuarioInteractuo || !visible) return;
        temporizador = setTimeout(() => {
            asomar();
            programar(4800);
        }, espera);
    }

    ['pointerdown', 'touchstart', 'wheel', 'keydown'].forEach(ev => {
        menu.addEventListener(ev, marcarInteraccion, { passive: true });
    });

    if (flechaDer) {
        flechaDer.addEventListener('click', () => {
            marcarInteraccion();
            menu.scrollBy({ left: Math.max(200, menu.clientWidth * 0.6), behavior: 'smooth' });
        });
    }
    if (flechaIzq) {
        flechaIzq.addEventListener('click', () => {
            marcarInteraccion();
            menu.scrollBy({ left: -Math.max(200, menu.clientWidth * 0.6), behavior: 'smooth' });
        });
    }

    menu.addEventListener('scroll', actualizarBordes, { passive: true });
    window.addEventListener('resize', actualizarBordes);
    window.addEventListener('load', actualizarBordes);
    actualizarBordes();

    if ('IntersectionObserver' in window) {
        new IntersectionObserver(entradas => {
            visible = entradas[0].isIntersecting;
            if (visible) {
                actualizarBordes();
                programar(1200);
            } else {
                clearTimeout(temporizador);
            }
        }, { threshold: 0.6 }).observe(nav);
    } else {
        visible = true;
        programar(1500);
    }
}

function iniciarApp() {
    renderizarProductos();
    renderizarMarcas();
    iniciarMenuDeslizable();

    // Si se desliza de lado la barra de categorías, el menú abierto la sigue
    const barraCategorias = document.querySelector('.top-nav-menu');
    if (barraCategorias) {
        barraCategorias.addEventListener('scroll', reposicionarDropdownsAbiertos, { passive: true });
    }
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', iniciarApp);
} else {
    iniciarApp();
}

/* =========================================================
   FRANJA SUPERIOR: efecto al bajar, sección activa y globito
   ========================================================= */
(function () {
    const nav = document.querySelector('.navbar');
    if (!nav) return;

    // 1) Al bajar: se esconde la barra fina y el menú se achica
    let ticking = false;
    function alDesplazar() {
        document.body.classList.toggle('scrolled', window.scrollY > 40);
        ticking = false;
    }
    window.addEventListener('scroll', () => {
        if (!ticking) { requestAnimationFrame(alDesplazar); ticking = true; }
    }, { passive: true });
    alDesplazar();

    // 2) Resalta en dorado la sección que se está viendo
    const enlaces = Array.from(document.querySelectorAll('.nav-links a[href^="#"]'));
    const mapa = new Map();
    enlaces.forEach(a => {
        const seccion = document.querySelector(a.getAttribute('href'));
        if (seccion) mapa.set(seccion, a);
    });
    if ('IntersectionObserver' in window && mapa.size) {
        const obs = new IntersectionObserver(entradas => {
            entradas.forEach(e => {
                if (!e.isIntersecting) return;
                enlaces.forEach(l => l.classList.remove('active'));
                const activo = mapa.get(e.target);
                if (activo) activo.classList.add('active');
            });
        }, { rootMargin: '-45% 0px -50% 0px' });
        mapa.forEach((_, seccion) => obs.observe(seccion));
    }

    // 3) El numerito de "Mi pedido" hace un pequeño salto al cambiar
    const globito = document.getElementById('cart-count');
    if (globito) {
        new MutationObserver(() => {
            globito.classList.remove('bump');
            void globito.offsetWidth;
            globito.classList.add('bump');
        }).observe(globito, { childList: true, characterData: true, subtree: true });
    }
})();
