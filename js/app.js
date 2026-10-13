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
    'liqui-blueberry': 'Liquipops | Blueberry',
    'liqui-coco': 'Liquipops | Coco',
    'liqui-cereza': 'Liquipops | Cereza',
    'liqui-lychee': 'Liquipops | Lychee',
    'liqui-sandia': 'Liquipop | Sandía',
    'liqui-icepink': 'Liquipops | Ice Pink',
    'liqui-fresa': 'Liquipops | Fresa',
    'siropes': 'Siropes y Chamoy',
    'escarchas': 'Escarchas y Micheladas'
};

// 1. ABRIR Y CERRAR EL MENÚ ROJO ELEGANTE
function toggleMobileMenu() {
    const mobileNav = document.getElementById('mobile-nav');
    if (mobileNav) {
        mobileNav.classList.toggle('open');
        document.body.classList.toggle('menu-open');
    }
}

// 2. NAVEGAR A SECCIÓN Y CERRAR MENÚ AUTOMÁTICAMENTE
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

// 3. RENDERIZAR MARCAS
function renderizarMarcas() {
    if (typeof marcasData === 'undefined' || !Array.isArray(marcasData)) return;
    const container = document.getElementById('brands-container');
    if (!container) return;
    container.innerHTML = '';
    
    marcasData.forEach(marca => {
        const card = document.createElement('div');
        card.className = 'brand-card';
        card.innerHTML = `<img src="${marca.logo}" alt="Logo ${marca.nombre}" class="brand-img">`;
        container.appendChild(card);
    });
}

// 4. RENDERIZAR PRODUCTOS
function renderizarProductos(categoria = 'todos', subcat = null, filtroTexto = '') {
    if (typeof productosData === 'undefined' || !Array.isArray(productosData)) return;

    const grid = document.getElementById('grid-productos');
    const statusText = document.getElementById('categoria-activa-titulo');
    if (!grid) return;

    const nombreTitulo = subcat && subcat !== 'todos' ? nombresCategorias[subcat] : nombresCategorias[categoria];
    if (statusText) {
        statusText.innerText = `Mostrando: ${nombreTitulo || categoria}`;
    }

    grid.innerHTML = '';

    let filtrados = productosData;

    if (categoria && categoria !== 'todos') {
        filtrados = filtrados.filter(p => p.categoria === categoria);
    }

    if (subcat && subcat !== 'todos') {
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

        const card = document.createElement('div');
        card.className = 'product-card';
        card.innerHTML = `
            <div class="product-img-wrapper" onclick="ampliarImagen('${prod.imagen}', '${prod.nombre}')">
                <img src="${prod.imagen}" alt="${prod.nombre}" class="product-img" onerror="this.src='https://images.unsplash.com/photo-1552767059-ce182eadecec?q=80&w=500'">
                <span class="zoom-hint"><i class="fa-solid fa-magnifying-glass-plus"></i> Ver foto</span>
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

// 5. NAVEGACIÓN DE CATEGORÍAS
function toggleTopDropdown(idDropdown, event) {
    if (event) event.stopPropagation();
    
    document.querySelectorAll('.top-dropdown-content').forEach(d => {
        if (d.id !== idDropdown) d.classList.remove('open');
    });

    const target = document.getElementById(idDropdown);
    if (target) {
        target.classList.toggle('open');
    }
}

document.addEventListener('click', (e) => {
    if (!e.target.closest('.top-dropdown')) {
        document.querySelectorAll('.top-dropdown-content').forEach(d => d.classList.remove('open'));
    }
});

// 6. MODAL PARA AMPLIAR IMÁGENES
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

// 7. BUSCADOR
function buscarProductos() {
    const texto = document.getElementById('input-buscar').value;
    renderizarProductos('todos', null, texto);
}

// 8. MANEJO DE CANTIDADES Y FILTRADO POR BOTONES
function modificarCantidadTarjeta(id, cambio) {
    if (!cantidadesTarjetas[id]) cantidadesTarjetas[id] = 1;
    cantidadesTarjetas[id] += cambio;
    if (cantidadesTarjetas[id] < 1) cantidadesTarjetas[id] = 1;

    const spanQty = document.getElementById(`card-qty-${id}`);
    if (spanQty) spanQty.innerText = cantidadesTarjetas[id];
}

function filtrarCategoria(cat, subcat = null, event = null) {
    document.querySelectorAll('.top-nav-btn').forEach(b => b.classList.remove('active'));
    document.querySelectorAll('.top-dropdown-content button').forEach(b => b.classList.remove('active'));

    if (event && event.currentTarget) {
        event.currentTarget.classList.add('active');
    }
    
    document.querySelectorAll('.top-dropdown-content').forEach(d => d.classList.remove('open'));
    renderizarProductos(cat, subcat);
}

// 9. CARRITO DE COMPRAS Y ENVÍO A WHATSAPP
function agregarAlCarritoConCantidad(id) {
    const cantidadSeleccionada = cantidadesTarjetas[id] || 1;
    const existe = carrito.find(p => p.id === id);

    if (existe) {
        existe.cantidad += cantidadSeleccionada;
    } else {
        const prod = productosData.find(p => p.id === id);
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

    let msg = "🛒 *SOLICITUD DE PEDIDO - QUESERA Y SALSAMENTARIA LA CENTRAL*\n\n";
    msg += "Hola, deseo consultar disponibilidad de los siguientes productos:\n\n";

    carrito.forEach(p => {
        msg += `• *${p.nombre}* (${p.cantidad} unidad${p.cantidad > 1 ? 'es' : ''})\n`;
    });

    msg += "\n📍 *Ubicación del local:* Carrera 12 N.º 8-11 Local 2, Barrio La Cabaña, Florida, Valle del Cauca.\n\n";
    msg += "Quedo atento a su respuesta. ¡Muchas gracias!";

    const url = `https://wa.me/${NUMERO_WHATSAPP}?text=${encodeURIComponent(msg)}`;
    window.open(url, '_blank');
}

// INICIALIZAR CUANDO EL DOM ESTÉ LISTO
window.addEventListener('DOMContentLoaded', () => {
    renderizarProductos();
    renderizarMarcas();
});
