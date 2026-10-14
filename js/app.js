// CONFIGURACIÓN OFICIAL
const NUMERO_WHATSAPP = "573116017186";

let carrito = [];
let cantidadesTarjetas = {};
let presentacionSeleccionada = {}; // Para productos con múltiples gramajes

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

function crearEfectoExplosion(event, colorHex) {
    reproducirSonidoPop();

    const originX = event ? (event.clientX || window.innerWidth / 2) : window.innerWidth / 2;
    const originY = event ? (event.clientY || window.innerHeight / 2) : window.innerHeight / 2;

    const cantidadParticulas = 36;
    const colorBase = colorHex || '#E6B64F';
    const paletaSecundaria = [colorBase, '#ffffff', '#E6B64F', '#2ecc71', '#ff69b4', '#4a90e2', '#00bfff', '#8b4513'];

    for (let i = 0; i < cantidadParticulas; i++) {
        const particula = document.createElement('div');
        particula.className = 'pop-sphere-particle';

        const color = i % 2 === 0 ? colorBase : paletaSecundaria[Math.floor(Math.random() * paletaSecundaria.length)];
        const tamaño = Math.floor(Math.random() * 22) + 12;

        particula.style.width = `${tamaño}px`;
        particula.style.height = `${tamaño}px`;
        particula.style.left = `${originX}px`;
        particula.style.top = `${originY}px`;
        particula.style.background = `radial-gradient(circle at 35% 35%, #ffffff, ${color} 70%, #000000 100%)`;
        particula.style.boxShadow = `0 0 16px ${color}`;

        const angulo = Math.random() * Math.PI * 2;
        const distancia = Math.floor(Math.random() * 220) + 80;
        const destX = Math.cos(angulo) * distancia;
        const destY = Math.sin(angulo) * distancia - 45;

        particula.style.setProperty('--dx', `${destX}px`);
        particula.style.setProperty('--dy', `${destY}px`);

        document.body.appendChild(particula);

        setTimeout(() => {
            particula.remove();
        }, 800);
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
        osc.frequency.setValueAtTime(320, ctx.currentTime);
        osc.frequency.exponentialRampToValueAtTime(850, ctx.currentTime + 0.08);

        gain.gain.setValueAtTime(0.4, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.08);

        osc.connect(gain);
        gain.connect(ctx.destination);

        osc.start();
        osc.stop(ctx.currentTime + 0.09);
    } catch (e) {}
}

function toggleMobileMenu() {
    const mobileNav = document.getElementById('mobile-nav');
    if (mobileNav) {
        mobileNav.classList.toggle('open');
        document.body.classList.toggle('menu-open');
    }
}

function irASeccion(idSeccion) {
    const mobileNav = document.getElementById('mobile-nav');
    if (mobileNav) {
        mobileNav.classList.remove('open');
        document.body.classList.remove('menu-open');
    }

    const targetId = idSeccion.replace('#', '');
    const elemento = document.getElementById(targetId);
    if (elemento) {
        elemento.scrollIntoView({ behavior: 'smooth' });
    }
}

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
        
        let clickImagenAccion = `ampliarImagen('${prod.imagen.replace(/'/g, "\\'")}', '${nombreLimpio}')`;
        let selectorHTML = '';
        let imagenActual = prod.imagen;

        if (prod.presentaciones && prod.presentaciones.length > 0) {
            clickImagenAccion = `abrirModalPresentaciones(${prod.id})`;
            if (presentacionSeleccionada[prod.id] === undefined) {
                presentacionSeleccionada[prod.id] = 0;
            }
            const presActual = prod.presentaciones[presentacionSeleccionada[prod.id]];
            imagenActual = presActual ? presActual.imagen : prod.imagen;

            selectorHTML = `
                <div class="pres-selector-container">
                    <label class="pres-label"><i class="fa-solid fa-weight-hanging text-gold"></i> Presentación:</label>
                    <select class="pres-select" onchange="cambiarPresentacionCard(${prod.id}, this.value)">
                        ${prod.presentaciones.map((p, idx) => `
                            <option value="${idx}" ${idx === presentacionSeleccionada[prod.id] ? 'selected' : ''}>${p.gramaje}</option>
                        `).join('')}
                    </select>
                </div>
            `;
        }

        const card = document.createElement('div');
        card.className = 'product-card';
        card.innerHTML = `
            <div class="product-img-wrapper" onclick="${clickImagenAccion}">
                <img id="img-prod-${prod.id}" src="${imagenActual}" alt="${prod.nombre}" class="product-img" onerror="this.src='https://images.unsplash.com/photo-1552767059-ce182eadecec?q=80&w=500'">
                <span class="zoom-hint"><i class="fa-solid fa-eye"></i> Ver más</span>
            </div>
            <div class="product-info">
                <span class="product-category">${catNombre}</span>
                <h3 class="product-title">${prod.nombre}</h3>
                <p class="product-desc">${prod.descripcion}</p>
                ${selectorHTML}
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

function cambiarPresentacionCard(prodId, indexPres) {
    const productos = getProductos();
    const prod = productos.find(p => p.id === prodId);
    if (!prod || !prod.presentaciones) return;

    presentacionSeleccionada[prodId] = parseInt(indexPres);
    const pres = prod.presentaciones[presentacionSeleccionada[prodId]];
    
    const imgEl = document.getElementById(`img-prod-${prodId}`);
    if (imgEl && pres) {
        imgEl.src = pres.imagen;
    }
}

function abrirModalPresentaciones(prodId) {
    const productos = getProductos();
    const prod = productos.find(p => p.id === prodId);
    if (!prod || !prod.presentaciones) return;

    const modal = document.getElementById('modal-presentaciones');
    const container = document.getElementById('grid-presentaciones-modal');
    const titulo = document.getElementById('titulo-modal-presentaciones');

    if (!modal || !container || !titulo) return;

    titulo.innerText = `${prod.nombre} - Presentaciones`;
    container.innerHTML = '';

    prod.presentaciones.forEach((pres, idx) => {
        if (!cantidadesTarjetas[pres.idPres]) {
            cantidadesTarjetas[pres.idPres] = 1;
        }

        const nombreLimpio = pres.nombre.replace(/'/g, "\\'");
        const imgLimpia = pres.imagen.replace(/'/g, "\\'");

        const presCard = document.createElement('div');
        presCard.className = 'card-pres-modal';
        presCard.innerHTML = `
            <img src="${pres.imagen}" alt="${pres.nombre}" onclick="ampliarImagen('${imgLimpia}', '${nombreLimpio}')">
            <h4>${pres.nombre}</h4>
            <span class="pres-badge">${pres.gramaje}</span>
            <div class="card-action-row" style="margin-top: 15px; width: 100%;">
                <div class="card-qty-selector">
                    <button class="card-qty-btn" onclick="modificarCantidadTarjeta(${pres.idPres}, -1)">-</button>
                    <span class="card-qty-num" id="card-qty-${pres.idPres}">${cantidadesTarjetas[pres.idPres]}</span>
                    <button class="card-qty-btn" onclick="modificarCantidadTarjeta(${pres.idPres}, 1)">+</button>
                </div>
                <button class="btn-add-item" onclick="agregarPresentacionDirecta(${prodId}, ${idx})">
                    <i class="fa-solid fa-cart-plus"></i> Agregar
                </button>
            </div>
        `;
        container.appendChild(presCard);
    });

    modal.style.display = "block";
}

function cerrarModalPresentaciones() {
    const modal = document.getElementById('modal-presentaciones');
    if (modal) modal.style.display = "none";
}

function agregarPresentacionDirecta(prodId, presIndex) {
    const productos = getProductos();
    const prod = productos.find(p => p.id === prodId);
    if (!prod || !prod.presentaciones) return;

    const pres = prod.presentaciones[presIndex];
    const cantidadSeleccionada = cantidadesTarjetas[pres.idPres] || 1;

    const existe = carrito.find(p => p.id === pres.idPres);

    if (existe) {
        existe.cantidad += cantidadSeleccionada;
    } else {
        carrito.push({
            id: pres.idPres,
            nombre: pres.nombre,
            categoria: prod.categoria,
            subcategoria: prod.subcategoria,
            descripcion: `Presentación de ${pres.gramaje}`,
            imagen: pres.imagen,
            cantidad: cantidadSeleccionada
        });
    }

    cantidadesTarjetas[pres.idPres] = 1;
    const spanQty = document.getElementById(`card-qty-${pres.idPres}`);
    if (spanQty) spanQty.innerText = 1;

    actualizarCarritoUI();
    abrirCarrito();
}

function toggleTopDropdown(idDropdown, event)
