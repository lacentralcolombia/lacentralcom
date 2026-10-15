/* --- ESTILOS GENERALES Y DISEÑO OSCURO --- */
* {
    box-sizing: border-box;
}

body {
    background-color: #121212 !important;
    color: #ffffff !important;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    margin: 0;
    padding: 0;
}

.header-container {
    text-align: center;
    padding: 30px 20px;
    background-color: #121212;
    border-bottom: 1px solid #222;
}

.header-container h1 {
    font-size: 2.3rem;
    color: #f39c12 !important;
    margin-bottom: 8px;
}

.header-container p {
    color: #bbbbbb;
    font-size: 1rem;
    margin-bottom: 15px;
}

.search-container input {
    width: 100%;
    max-width: 450px;
    padding: 12px 20px;
    border-radius: 25px;
    border: 1px solid #333;
    background-color: #1a1a1a;
    color: #fff;
    font-size: 15px;
    outline: none;
}

/* --- MENÚ DE CATEGORÍAS --- */
.categorias-container {
    display: flex !important;
    flex-wrap: wrap !important;
    justify-content: center !important;
    gap: 12px;
    padding: 15px 25px;
    margin: 20px auto;
    max-width: 1100px;
}

.categoria-btn, .filter-btn {
    font-size: 15px;
    font-weight: 500;
    padding: 10px 20px;
    border-radius: 30px;
    border: 1px solid #444;
    background-color: #1a1a1a;
    color: #ffffff;
    cursor: pointer;
    transition: all 0.3s ease;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3);
}

.categoria-btn.active, .filter-btn.active, .categoria-btn:hover, .filter-btn:hover {
    background-color: #ff3b30;
    border-color: #ff3b30;
    color: #ffffff;
}

/* --- CUADRÍCULA Y TARJETAS DE PRODUCTOS --- */
.catalogo-container {
    display: grid !important;
    grid-template-columns: repeat(auto-fill, minmax(260px, 1fr)) !important;
    gap: 25px !important;
    padding: 30px 40px !important;
    max-width: 1200px !important;
    margin: 0 auto !important;
}

.producto-card {
    background-color: #1a1a1a !important;
    border: 1px solid #333 !important;
    border-radius: 12px !important;
    overflow: hidden !important;
    display: flex !important;
    flex-direction: column !important;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.5) !important;
}

.producto-card img {
    width: 100% !important;
    height: 200px !important;
    object-fit: cover !important;
    background-color: #222 !important;
}

.producto-card h3 {
    color: #f39c12 !important;
    font-size: 17px !important;
    margin: 15px 15px 8px 15px !important;
}

.producto-card p {
    color: #aaaaaa !important;
    font-size: 13px !important;
    margin: 0 15px 15px 15px !important;
    line-height: 1.4 !important;
    flex-grow: 1 !important;
}

.producto-card a {
    display: block !important;
    background-color: #ff3b30 !important;
    color: #fff !important;
    text-align: center !important;
    padding: 10px !important;
    margin: 0 15px 15px 15px !important;
    border-radius: 8px !important;
    text-decoration: none !important;
    font-weight: bold !important;
}

.producto-card a:hover {
    background-color: #e03229 !important;
}
