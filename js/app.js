// CONFIGURACIÓN OFICIAL DE WHATSAPP
const NUMERO_WHATSAPP = "573116017186";

let carrito = [];

// CARGA INICIAL DEL CATÁLOGO
function renderizarProductos(categoria = 'todos') {
    const grid = document.getElementById('grid-productos');
    grid.innerHTML = '';

    const filtrados = categoria === 'todos' 
        ? productosData 
        : productosData.filter(p => p.categoria === categoria);

    filtrados.forEach(prod => {
        const card = document.createElement('div');
        card.className = 'product-card';
        card.innerHTML = `
            <img src="${prod.imagen}" alt="${prod.nombre}" class="product-img">
            <div class="product-info">
                <span class="product-category">${prod.categoria}</span>
                <h3 class="product-title">${prod.nombre}</h3>
                <p class="product-desc">${prod.descripcion}</p>
                <div class="product-status">
                    <i class="fa-solid fa-circle-check"></i> Consultar disponibilidad
                </div>
                <button class="btn-add-item" onclick="agregarAlCarrito(${prod.id})">
                    <i class="fa-solid fa-cart-plus"></i> Agregar al pedido
                </button>
            </div>
        `;
        grid.appendChild(card);
    });
}

// FILTRAR CATEGORÍAS
function filtrarCategoria(cat, event) {
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    event.target.classList.add('active');
    renderizarProductos(cat);
}

// FUNCIONALIDAD DEL CARRITO DE COMPRAS
function agregarAlCarrito(id) {
    const existe = carrito.find(p => p.id === id);
    if (existe) {
        existe.cantidad++;
    } else {
        const prod = productosData.find(p => p.id === id);
        carrito.push({ ...prod, cantidad: 1 });
    }
    actualizarCarritoUI();
    abrirCarrito();
}

function cambiarCantidad(id, cambio) {
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
                    <span style="font-size: 0.8rem; color: var(--gold-brand);">${prod.categoria}</span>
                </div>
                <div class="cart-item-qty">
                    <button class="qty-btn" onclick="cambiarCantidad(${prod.id}, -1)">-</button>
                    <span>${prod.cantidad}</span>
                    <button class="qty-btn" onclick="cambiarCantidad(${prod.id}, 1)">+</button>
                </div>
            `;
            container.appendChild(itemDiv);
        });
    }

    badge.innerText = totalItems;
}

function toggleCart() {
    document.getElementById('cart-drawer').classList.toggle('open');
    document.getElementById('cart-overlay').classList.toggle('open');
}

function abrirCarrito() {
    document.getElementById('cart-drawer').classList.add('open');
    document.getElementById('cart-overlay').classList.add('open');
}

function toggleMobileMenu() {
    document.getElementById('mobile-nav').classList.toggle('open');
}

// ENVIAR LISTADO SIN PRECIOS A WHATSAPP
function enviarPedidoWhatsApp() {
    if (carrito.length === 0) {
        alert('Por favor agrega al menos un producto a tu pedido.');
        return;
    }

    let msg = "🛒 *SOLICITUD DE PEDIDO - LA CENTRAL*\n\n";
    msg += "Hola, deseo consultar la disponibilidad y precios de los siguientes productos:\n\n";

    carrito.forEach(p => {
        msg += `• *${p.nombre}* (${p.cantidad} unidad${p.cantidad > 1 ? 'es' : ''})\n`;
    });

    msg += "\n📍 *Ubicación del local:* Carrera 12 #8-11 Local 2, Floridablanca, Valle del Cauca.\n\n";
    msg += "Quedo atento a su respuesta. ¡Muchas gracias!";

    const url = `https://wa.me/${NUMERO_WHATSAPP}?text=${encodeURIComponent(msg)}`;
    window.open(url, '_blank');
}

// INICIALIZACIÓN
document.addEventListener('DOMContentLoaded', () => {
    renderizarProductos();
});
