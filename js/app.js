document.addEventListener('DOMContentLoaded', () => {
    const catalogoContainer = document.getElementById('catalogoContainer');
    const categoriasContainer = document.getElementById('categoriasContainer') || document.getElementById('filterButtonsContainer');
    const searchInput = document.getElementById('searchInput');

    // Cargar productos desde data.js
    const productos = window.productosData || [];

    // --- FUNCION DE EXPLOSION DE BURBUJAS (COLOR ESPECIFICO) ---
    function dispararExplosionBurbujas(x, y, categoria) {
        // Definir colores base según la categoría (puedes ajustar los códigos HEX)
        let colores = ['#ffffff', '#cccccc']; // Color por defecto

        if (categoria === 'cocteleria') {
            // Ejemplo: explosión multicolor para coctelería
            colores = ['#ff3b30', '#34c759', '#007aff', '#ffcc00', '#5ac8fa', '#af52de'];
        } else if (categoria === 'quesos') {
            colores = ['#f39c12', '#ffecb3', '#ffc107']; // Tonos amarillos y queso
        } else if (categoria === 'embutidos') {
            colores = ['#8e24aa', '#ce93d8', '#e91e63']; // Tonos morados y rosados
        } else if (categoria === 'liquipops') {
            // Si tuviéramos subcategorías de sabores, podríamos afinar más el color aquí.
            // Por ahora, usaremos los colores divertidos de arriba.
            colores = ['#00c853', '#fbc02d', '#ff7043', '#1976d2', '#c2185b'];
        }

        // Opciones de configuración de la explosión (partículas que suben)
        const defaults = {
            spread: 40, // Qué tanto se dispersan
            ticks: 50,  // Duración de la animación
            gravity: 0.5, // Gravedad (caen un poco)
            decay: 0.94, // Desvanecimiento
            startVelocity: 25, // Velocidad inicial hacia arriba
            scalar: 1.5, // Tamaño de las partículas (burbujas)
            shapes: ['circle', 'circle'], // Usar solo círculos (burbujas)
            colors: colores,
            zIndex: 1000,
            origin: { x: x / window.innerWidth, y: y / window.innerHeight }, // Posición del clic
            particleCount: 30 // Cantidad de burbujas
        };

        // Lanzar la explosión
        confetti(defaults);
        confetti(Object.assign({}, defaults, { particleCount: 15, spread: 100, startVelocity: 15, scalar: 1.0 }));
        confetti(Object.assign({}, defaults, { particleCount: 10, spread: 80, scalar: 0.8 }));

        // --- Opcional: Sonido de Pop ---
        // Asegúrate de tener un archivo de audio corto llamado 'pop.mp3' en la carpeta raíz
        /*
        const audio = new Audio('pop.mp3');
        audio.volume = 0.5;
        audio.play().catch(e => console.log("Error al reproducir sonido (el navegador podría bloquearlo inicialmente):", e));
        */
    }

    // Función para mostrar los productos en pantalla
    function mostrarProductos(lista) {
        if (!catalogoContainer) return;
        
        catalogoContainer.innerHTML = '';

        if (lista.length === 0) {
            catalogoContainer.innerHTML = '<p style="text-align: center; grid-column: 1 / -1; color: #888; font-size: 18px; padding: 40px;">No se encontraron productos en esta selección.</p>';
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
            
            // --- AGREGAR EVENTO DE CLIC PARA LA EXPLOSION ---
            card.addEventListener('click', (e) => {
                // Solo disparar si es un producto de la categoría 'cocteleria' (que incluye los Liqui Pops)
                if (producto.categoria === 'cocteleria') {
                    dispararExplosionBurbujas(e.clientX, e.clientY, producto.categoria);
                }
            });

            catalogoContainer.appendChild(card);
        });
    }

    // Generar categorías y menús desplegables de subcategorías
    function generarFiltrosDesplegables() {
        if (!categoriasContainer) return;

        categoriasContainer.innerHTML = '';

        // Botón "Todas"
        const btnTodas = document.createElement('button');
        btnTodas.className = 'categoria-btn active';
        btnTodas.textContent = '🔥 Todas';
        btnTodas.addEventListener('click', () => {
            document.querySelectorAll('.categoria-btn, .subcat-btn').forEach(b => b.classList.remove('active'));
            btnTodas.classList.add('active');
            mostrarProductos(productos);
        });
        categoriasContainer.appendChild(btnTodas);

        // Obtener categorías únicas
        const categoriasUnicas = [...new Set(productos.map(p => p.categoria))];

        const nombresCategorias = {
            'quesos': '🧀 Quesos y Lácteos',
            'embutidos': '🥓 Embutidos y Cárnicos',
            'alimentos': '🧂 Alimentos y Condimentos',
            'frutos-secos': '🥜 Frutos Secos',
            'cocteleria': '🍹 Coctelería y Perlas',
            'desechables': '🥡 Plásticos y Desechables'
        };

        categoriasUnicas.forEach(cat => {
            const prodsCat = productos.filter(p => p.categoria === cat);
            const subcategorias = [...new Set(prodsCat.map(p => p.subcategoria))];

            const grupoWrapper = document.createElement('div');
            grupoWrapper.style.cssText = 'position: relative; display: inline-block;';

            const btnCat = document.createElement('button');
            btnCat.className = 'categoria-btn';
            btnCat.textContent = (nombresCategorias[cat] || cat.toUpperCase()) + (subcategorias.length > 1 ? ' ▾' : '');
            
            grupoWrapper.appendChild(btnCat);

            if (subcategorias.length > 1 || (subcategorias.length === 1 && subcategorias[0] !== 'general')) {
                const dropdownMenu = document.createElement('div');
                dropdownMenu.style.cssText = `
                    display: none;
                    position: absolute;
                    top: 100%;
                    left: 0;
                    background-color: #1a1a1a;
                    border: 1px solid #333;
                    border-radius: 8px;
                    box-shadow: 0 8px 16px rgba(0,0,0,0.5);
                    z-index: 100;
                    min-width: 180px;
                    padding: 8px 0;
                    white-space: nowrap;
                `;

                const itemTodo = document.createElement('a');
                itemTodo.href = '#';
                itemTodo.style.cssText = 'display: block; padding: 8px 15px; color: #fff; text-decoration: none; font-size: 14px;';
                itemTodo.textContent = 'Ver todo de ' + (nombresCategorias[cat] || cat);
                itemTodo.addEventListener('click', (e) => {
                    e.preventDefault();
                    document.querySelectorAll('.categoria-btn').forEach(b => b.classList.remove('active'));
                    btnCat.classList.add('active');
                    dropdownMenu.style.display = 'none';
                    mostrarProductos(prodsCat);
                });
                dropdownMenu.appendChild(itemTodo);

                subcategorias.forEach(sub => {
                    if (sub === 'general') return;
                    const subItem = document.createElement('a');
                    subItem.href = '#';
                    subItem.style.cssText = 'display: block; padding: 8px 15px; color: #bbb; text-decoration: none; font-size: 14px; text-transform: capitalize;';
                    subItem.textContent = sub;
                    
                    subItem.addEventListener('click', (e) => {
                        e.preventDefault();
                        document.querySelectorAll('.categoria-btn').forEach(b => b.classList.remove('active'));
                        btnCat.classList.add('active');
                        dropdownMenu.style.display = 'none';
                        const filtradosSub = prodsCat.filter(p => p.subcategoria === sub);
                        mostrarProductos(filtradosSub);
                    });

                    dropdownMenu.addEventListener('mouseenter', () => subItem.style.color = '#ff3b30');
                    dropdownMenu.addEventListener('mouseleave', () => subItem.style.color = '#bbb');

                    dropdownMenu.appendChild(subItem);
                });

                grupoWrapper.appendChild(dropdownMenu);

                btnCat.addEventListener('click', (e) => {
                    e.stopPropagation();
                    document.querySelectorAll('div[style*="position: absolute"]').forEach(d => {
                        if (d !== dropdownMenu) d.style.display = 'none';
                    });
                    dropdownMenu.style.display = dropdownMenu.style.display === 'block' ? 'none' : 'block';
                });

            } else {
                btnCat.addEventListener('click', () => {
                    document.querySelectorAll('.categoria-btn').forEach(b => b.classList.remove('active'));
                    btnCat.classList.add('active');
                    mostrarProductos(prodsCat);
                });
            }

            categoriasContainer.appendChild(grupoWrapper);
        });

        window.addEventListener('click', () => {
            document.querySelectorAll('div[style*="position: absolute"]').forEach(d => {
                d.style.display = 'none';
            });
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

    generarFiltrosDesplegables();
    mostrarProductos(productos);
});
