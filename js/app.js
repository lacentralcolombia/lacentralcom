const NUMERO_WHATSAPP = "573000000000"; // Reemplaza con tu número con código de país

function cargarProductos(categoria = 'todos') {
    const contenedor = document.getElementById('grid-productos');
    contenedor.innerHTML = '';

    const productosFiltrados = categoria === 'todos' 
        ? productos 
        : productos.filter(p => p.categoria === categoria);

    productosFiltrados.forEach(prod => {
        const mensajeWS = encodeURIComponent(`Hola LA CENTRAL, estoy interesado en comprar: ${prod.nombre} (${prod.precio})`);
        const urlWS = `https://wa.me/${NUMERO_WHATSAPP}?text=${mensajeWS}`;

        const card = document.createElement('div');
        card.className = 'product-card';
        card.innerHTML = `
            <img src="${prod.imagen}" alt="${prod.nombre}" class="product-img">
            <h3>${prod.nombre}</h3>
            <span class="product-price">${prod.precio}</span>
            <a href="${urlWS}" target="_blank" class="btn-order-ws">
                <i class="fa-brands fa-whatsapp"></i> Pedir por WhatsApp
            </a>
        `;
        contenedor.appendChild(card);
    });
}

function filtrarProductos(cat) {
    document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');
    cargarProductos(cat);
}

// Carga inicial al abrir la página
document.addEventListener('DOMContentLoaded', () => {
    cargarProductos();
});
