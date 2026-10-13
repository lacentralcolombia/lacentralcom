// =========================================================
// CONFIGURACIÓN OFICIAL DE QUESERA Y SALSAMENTARIA LA CENTRAL
// =========================================================
const NUMERO_WHATSAPP = "573116017186";

let carrito = [];

// MAPA DE NOMBRES PARA BANNERS E INDICADORES
const nombresCategorias = {
    'todos': 'Todas las Categorías',
    'quesos': 'Quesos y Lácteos',
    'embutidos': 'Embutidos y Cárnicos',
    'alimentos': 'Alimentos y Condimentos',
    'frutos-secos': 'Frutos Secos',
    'cocteleria': 'Coctelería y Micheladas',
    'desechables': 'Plásticos y Desechables'
};

// =========================================================
// 1. CARGAR Y MOSTRAR MARCAS DESTACADAS CON VECTORES SVG
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
// 2. CARGAR Y MOSTRAR PRODUCTOS DEL CATÁLOGO (SIN PRECIOS)
// =========================================================
function renderizarProductos(categoria = 'todos') {
    const grid = document.getElementById('grid-productos');
    const statusText = document.getElementById('categoria-activa-titulo');
    if (!grid) return;

    if (statusText) {
        statusText.innerText = `Mostrando: ${nombresCategorias[categoria] || categoria}`;
    }

    grid.innerHTML = '';

    const filtrados = categoria === 'todos' 
        ? productosData 
        : productosData.filter(p => p.categoria === categoria);

    if (filtrados.length === 0) {
        grid.innerHTML = `
            <div style="grid-column: 1/-1; text-align: center; color: var(--text-muted); padding: 40px;">
                <p>No se encontraron productos en esta categoría.</p>
            </div>
        `;
        return;
    }

    filtrados.forEach(prod => {
        const card = document.createElement('div');
        card.className = 'product-card';
        card.innerHTML = `
            <img src="${prod.imagen}" alt="${prod.nombre}" class="product-img">
            <div class="product-info">
                <span class="product-category">${nombresCategorias[prod.categoria] || prod.categoria}</span>
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

// =========================================================
// 3. FILTRAR POR CATEGORÍAS DESDE EL SIDEBAR
// =========================================================
function filtrarCategoria(cat, event) {
    document.querySelectorAll('.sidebar-btn').forEach(b => b.classList.remove('active'));
    
    if (event && event.currentTarget) {
        event.currentTarget.classList.add('active');
    }
    renderizarProductos(cat);
}

// =========================================================
// 4. LÓGICA DEL CARRITO DE COMPRAS
// =========================================================
function agregarAlCarrito(id) {
    const existe = carrito.find(p => p.id === id);
    if (existe) {
        existe.cantidad++;
    } else {
        const prod = productosData.find(p => p.id === id);
        if (prod) {
            carrito.push({ ...prod, cantidad: 1 });
        }
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
                    <span style="font-size: 0.8rem; color: var(--gold-brand);">${nombresCategorias[prod.categoria] || prod.categoria}</span>
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
// 6. ENVIAR SOLICITUD A WHATSAPP (ESTRICTAMENTE SIN PRECIOS)
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
