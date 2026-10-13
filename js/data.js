// MARCAS DESTACADAS CON VECTORES SVG NATIVOS
const marcasData = [
    {
        nombre: "Zenú",
        logo: "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 80'><text x='50%' y='55%' dominant-baseline='middle' text-anchor='middle' font-family='Arial Black, sans-serif' font-size='38' font-weight='900' font-style='italic' fill='%23e60000'>Zenú</text></svg>"
    },
    {
        nombre: "Alpina",
        logo: "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 80'><path d='M70 50 L100 20 L130 50 Z' fill='%230055a5'/><text x='50%' y='68%' dominant-baseline='middle' text-anchor='middle' font-family='Georgia, serif' font-size='30' font-weight='bold' font-style='italic' fill='%230055a5'>Alpina</text></svg>"
    },
    {
        nombre: "Alquería",
        logo: "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 80'><rect x='20' y='15' width='160' height='50' rx='25' fill='%23e3211b'/><text x='50%' y='52%' dominant-baseline='middle' text-anchor='middle' font-family='Arial, sans-serif' font-size='24' font-weight='bold' fill='%23ffffff'>Alquería</text></svg>"
    },
    {
        nombre: "Rica",
        logo: "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 80'><text x='50%' y='55%' dominant-baseline='middle' text-anchor='middle' font-family='Impact, sans-serif' font-size='42' font-style='italic' fill='%23e3211b' stroke='%23000000' stroke-width='1'>Rica</text></svg>"
    },
    {
        nombre: "Bimbo",
        logo: "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 80'><text x='50%' y='55%' dominant-baseline='middle' text-anchor='middle' font-family='Arial Black, sans-serif' font-size='36' font-weight='900' fill='%23d61b22'>BIMBO</text></svg>"
    },
    {
        nombre: "Darnel",
        logo: "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 80'><rect x='15' y='18' width='170' height='44' rx='8' fill='%230033a0'/><text x='50%' y='53%' dominant-baseline='middle' text-anchor='middle' font-family='Arial, sans-serif' font-size='26' font-weight='bold' fill='%23ffffff'>DARNEL</text></svg>"
    },
    {
        nombre: "El Rey",
        logo: "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 80'><polygon points='80,22 100,10 120,22 115,32 85,32' fill='%23e6b64f'/><text x='50%' y='62%' dominant-baseline='middle' text-anchor='middle' font-family='Arial Black, sans-serif' font-size='26' font-weight='bold' fill='%23e3211b'>EL REY</text></svg>"
    },
    {
        nombre: "Nestlé",
        logo: "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 80'><text x='50%' y='55%' dominant-baseline='middle' text-anchor='middle' font-family='Georgia, serif' font-size='34' font-weight='bold' fill='%23185a9d'>Nestlé</text></svg>"
    }
];

// PRODUCTOS DEL CATÁLOGO COMPLETO
const productosData = [
    // --- QUESOS Y LÁCTEOS ---
    {
        id: 1,
        nombre: "Quesos y Yogures",
        categoria: "quesos",
        subcategoria: "general",
        descripcion: "Surtido variado en quesos tajados, frescos y yogures lácteos de marcas reconocidas.",
        imagen: "https://images.unsplash.com/photo-1552767059-ce182eadecec?q=80&w=500"
    },
    {
        id: 2,
        nombre: "Quesos Artesanales",
        categoria: "quesos",
        subcategoria: "general",
        descripcion: "Sabor campesino, tradicional y fresco de elaboración artesanal pura.",
        imagen: "https://images.unsplash.com/photo-1486297678162-eb2a19b0a32d?q=80&w=500"
    },
    {
        id: 3,
        nombre: "Mantequillas",
        categoria: "quesos",
        subcategoria: "general",
        descripcion: "Mantequillas de excelente consistencia y sabor para tus desayunos y cocina.",
        imagen: "https://images.unsplash.com/photo-1589985270826-4b7bb135bc9d?q=80&w=500"
    },
    {
        id: 4,
        nombre: "Crema y Derivados",
        categoria: "quesos",
        subcategoria: "general",
        descripcion: "Crema de leche, suero costeño y derivados de consistencia cremosa y fresca.",
        imagen: "https://images.unsplash.com/photo-1528751014936-863e6e7a319c?q=80&w=500"
    },
    {
        id: 5,
        nombre: "Queso Rallado",
        categoria: "quesos",
        subcategoria: "general",
        descripcion: "Queso listo para gratinar y acompañar tus pastas, lasañas o arepas.",
        imagen: "https://images.unsplash.com/photo-1452195100486-9cc805987862?q=80&w=500"
    },

    // --- EMBUTIDOS ---
    {
        id: 6,
        nombre: "Jamones Tradicionales y Especiales",
        categoria: "embutidos",
        subcategoria: "jamones",
        descripcion: "Lajas seleccionadas de jamón de cerdo, pavo y finas hierbas (Zenú, Rica, Differ).",
        imagen: "https://images.unsplash.com/photo-1541529086526-db283c563270?q=80&w=500"
    },
    {
        id: 7,
        nombre: "Salchichas Manguera y Ranchera",
        categoria: "embutidos",
        subcategoria: "salchichas",
        descripcion: "Salchichas manguera especial, rancheras y mangueras para perritos o desayunos.",
        imagen: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?q=80&w=500"
    },
    {
        id: 8,
        nombre: "Chorizos Ahumados y Santarrosanos",
        categoria: "embutidos",
        subcategoria: "chorizos",
        descripcion: "Chorizo santarrosano, antioqueño y de la casa con sazón ahumada.",
        imagen: "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?q=80&w=500"
    },
    {
        id: 9,
        nombre: "Mortadelas Especiales",
        categoria: "embutidos",
        subcategoria: "mortadelas",
        descripcion: "Tajadas de mortadela fresca de primera calidad para tus pasabocas.",
        imagen: "https://images.unsplash.com/photo-1528607929212-2636ec44253e?q=80&w=500"
    },
    {
        id: 10,
        nombre: "Tocineta Ahumada",
        categoria: "embutidos",
        subcategoria: "tocinetas",
        descripcion: "Cortes de tocineta ahumada crujiente ideal para hamburguesas y recetas.",
        imagen: "https://images.unsplash.com/photo-1606851094655-b2593a9af63f?q=80&w=500"
    },
