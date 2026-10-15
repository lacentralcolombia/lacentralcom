document.addEventListener('DOMContentLoaded', () => {
    const catalogoContainer = document.getElementById('catalogoContainer');
    const categoriasContainer = document.getElementById('categoriasContainer');
    const searchInput = document.getElementById('searchInput');

    const productos = window.productosData || [];

    function mostrarProductos(lista) {
        if (!catalogoContainer) return;
        
        catalogoContainer.innerHTML = '';

        if (lista.length === 0) {
            catalogoContainer.innerHTML = '<p style="text-align: center; grid-column: 1 / -1; color: #888; font-size: 18px; padding: 40px;">No se encontraron productos.</p>';
            return;
        }

        lista.forEach(producto => {
            const card = document.createElement('div');
            card.className = 'producto-card';

            card.innerHTML = `
                <div style="width: 100%; height: 200px; background-color: #222; overflow: hidden; display: flex; align-items: center; justify-content: center;">
                    <img src="${producto.imagen}" alt="${producto.nombre}" style="width: 100%; height: 100%; object-fit: cover;" onerror="this.src='https://images.unsplash.com/photo-1541529086526-db283c563270?q=80&w=500'">
                </div>
                <div style="padding: 18px; display: flex; flex-direction: column; flex-grow: 1;">
                    <h3 style="font-size: 18px; margin: 0 0 10px 0; color: #f39c12;">${producto.nombre}</h3>
                    <p style="font-size: 14px; color: #aaa; margin: 0 0 15px 0; flex-grow: 1; line-height: 1.4;">${producto.descripcion}</p>
                    <a href="${producto.imagen}" target="_blank" style="display: inline-block; background-color: #ff3b30; color: #fff; text-align: center; padding: 10px 15px; border-radius: 8px; text-decoration: none; font-weight: 500; font-size: 14px;">Ver más</a>
                </div>
            `;
            catalogoContainer.appendChild(card);
        });
    }

    function generarCategorias() {
        if (!categoriasContainer) return;

        categoriasContainer.innerHTML = '';

        const categoriasUnicas = ['todas', ...new Set(productos.map(p => p.categoria))];

        const nombresCategorias = {
            'todas': '🔥 Todas',
            'quesos': '🧀 Quesos y Lácteos',
            'embutidos': '🥓 Embutidos y Cárnicos',
            'alimentos': '🧂 Alimentos y Condimentos',
            'frutos-secos': '🥜 Frutos Secos',
            'cocteleria': '🍹 Coctelería y Perlas',
            'desechables': '🥡 Plásticos y Desechables'
        };

        categoriasUnicas.forEach(cat => {
            const btn = document.createElement('button');
            btn.className = `categoria-btn ${cat === 'todas' ? 'active' : ''}`;
            btn.textContent = nombresCategorias[cat] || cat.toUpperCase();
            btn.dataset.categoria = cat;

            btn.addEventListener('click', () => {
                document.querySelectorAll('.categoria-btn').forEach(b => b.classList.remove('active'));
                btn.classList.add('active');

                if (cat === 'todas') {
                    mostrarProductos(productos);
                } else {
                    const filtrados = productos.filter(p => p.categoria === cat);
                    mostrarProductos(filtrados);
                }
            });

            categoriasContainer.appendChild(btn);
        });
    }

    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            const texto = e.target.value.toLowerCase().trim();
            const filtrados = productos.filter(p => 
                p.nombre.toLowerCase().includes(texto) || 
                p.descripcion.toLowerCase().includes(texto)
            );
            mostrarProductos(filtrados);
        });
    }

    generarCategorias();
    mostrarProductos(productos);
});
