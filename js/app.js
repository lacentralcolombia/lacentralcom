// =========================================================
// CONFIGURACIÓN OFICIAL DE QUESERA Y SALSAMENTARIA LA CENTRAL
// =========================================================
const NUMERO_WHATSAPP = "573116017186";

let carrito = [];
// ESTADO LOCAL DE CANTIDADES EN TARJETAS DE PRODUCTOS
let cantidadesTarjetas = {};

// MAPA DE NOMBRES PARA TITULARES Y BANNERS
const nombresCategorias = {
    'todos': 'Todas las Categorías',
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
    'tocinetas': 'Embutidos - Tocinetas'
};

// =========================================================
// 1. CARGAR Y MOSTRAR MARCAS DESTACADAS
// =========================================================
function renderizarMarcas() {
    const container = document.getElementById('brands-container');
    if (!container) return;

    container.innerHTML = '';
    
    marcasData.forEach(marca => {
        const card = document.createElement('div');
        card.className = 'brand-card';
        card.innerHTML = `
            <img src="${marca.logo}" alt="Logo ${marca.nombre}" class="brand-img">
        `;
        container.appendChild(card);
    });
}

// =========================================================
// 2. CARGAR Y MOSTRAR PRODUCTOS CON SELECTOR DE CANTIDAD
// =========================================================
function renderizarProductos(categoria = 'todos', subcat = null) {
    const grid = document.getElementById('grid-productos');
    const statusText = document.getElementById('categoria-activa-titulo');
    if (!grid) return;

    const nombreTitulo = subcat && subcat !== 'todos' ? nombresCategorias[subcat] : nombresCategorias[categoria];
    if (statusText) {
        statusText.innerText = `Mostrando: ${nombreTitulo || categoria}`;
    }

    grid.innerHTML = '';

    let filtrados = productosData;

    if (categoria !== 'todos') {
        filtrados = filtrados.filter(p => p.categoria === categoria);
    }

    if (subcat && subcat !== 'todos') {
        filtrados = filtrados.filter(p => p.subcategoria === subcat);
    }

    if (filtrados.length === 0) {
        grid.innerHTML = `
            <div style="grid-column: 1/-1; text-align: center; color: var(--text-muted); padding: 40px;">
                <p>No se encontraron productos en esta categoría.</p>
            </div>
        `;
        return;
    }

    filtrados.forEach(prod => {
        if (!cantidadesTarjetas[prod.id]) {
            cantidadesTarjetas[prod.id] = 1;
        }

        const card = document.createElement('div');
        card.className = 'product-card';
        card.innerHTML = `
            <img src="${prod.imagen}" alt="${prod.nombre}" class="product-img">
            <div class="product-info">
                <span class="product-category">${nombresCategorias[prod.subcategoria] || nombresCategorias[prod.categoria]}</span>
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

// MODIFICAR CANTIDAD DE LA TARJETA
function modificarCantidadTarjeta(id, cambio) {
    if (!cantidadesTarjetas[id]) cantidadesTarjetas[id] = 1;
    
    cantidadesTarjetas[id] += cambio;
    if (cantidadesTarjetas[id] < 1) cantidadesTarjetas[id] = 1;

    const spanQty = document.getElementById(`card-qty-${id}`);
    if (spanQty) {
        spanQty.innerText = cantidadesTarjetas[id];
    }
}

// =========================================================
// 3. DESPLIEGUE Y FILTRADO POR CATEGORÍAS / SUBMENÚ
// =========================================================
function toggleSubmenuEmbutidos(event) {
    if (event) event.stopPropagation();
    const submenu = document.getElementById('submenu-embutidos');
    const parentBtn = event ? event.currentTarget : null;

    if (submenu) {
        submenu.classList.toggle('open');
    }
    
    // Activa la categoría principal Embutidos
    filtrarCategoria('embutidos', 'todos', event);
}

function filtrarCategoria(cat, subcat = null, event = null) {
    document.querySelectorAll('.sidebar-btn').forEach(b => b.classList.remove('active'));
    document.querySelectorAll('.sub-btn').forEach(b => b.classList.remove('active'));

    if (event && event.currentTarget) {
        event.currentTarget.classList.add('active');
    }

    renderizarProductos(cat, subcat);
}

// =========================================================
// 4. LÓGICA DEL CARRITO DE COMPRAS
// =========================================================
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

    // Reinicia el contador de la tarjeta a 1
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
            const itemDiv = document.createElement('div');
            itemDiv.className = 'cart-item';
            itemDiv.innerHTML = `
                <div>
                    <h4 style="font-size: 0.95rem;">${prod.nombre}</h4>
                    <span style="font-size: 0.8rem; color: var(--gold-brand);">${nombresCategorias[prod.subcategoria] || nombresCategorias[prod.categoria]}</span>
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

// =========================================================
// 5. INTERFAZ Y MENÚS
// =========================================================
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

function toggleMobileMenu() {
    const mobileNav = document.getElementById('mobile-nav');
    if (mobileNav) {
        mobileNav.classList.toggle('open');
    }
}

// =========================================================
// 6. ENVIAR SOLICITUD DE PEDIDO A WHATSAPP
// =========================================================
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

// =========================================================
// INICIALIZACIÓN
// =========================================================
document.addEventListener('DOMContentLoaded', () => {
    renderizarProductos();
    renderizarMarcas();
});
