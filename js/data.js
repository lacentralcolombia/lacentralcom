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

    // --- ALIMENTOS Y CONDIMENTOS ---
    {
        id: 11,
        nombre: "Aliños a Granel",
        categoria: "alimentos",
        subcategoria: "general",
        descripcion: "Variedad de aliños preparados por peso para darle el toque secreto a tus comidas.",
        imagen: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?q=80&w=500"
    },
    {
        id: 12,
        nombre: "Especias Seleccionadas",
        categoria: "alimentos",
        subcategoria: "general",
        descripcion: "Pimienta, orégano, comino, laurel, tomillo, paprika y especias.",
        imagen: "https://images.unsplash.com/photo-1509358217950-0fd228257184?q=80&w=500"
    },
    {
        id: 13,
        nombre: "Condimentos El Rey",
        categoria: "alimentos",
        subcategoria: "general",
        descripcion: "Sazonadores en polvo, color, caldo y sazonados El Rey.",
        imagen: "https://images.unsplash.com/photo-1532336414038-cf19250c5757?q=80&w=500"
    },
    {
        id: 14,
        nombre: "Salsas Caseras Emanuel",
        categoria: "alimentos",
        subcategoria: "general",
        descripcion: "Salsas artesanales, tártara, ajo, piña, rosada y especialidades.",
        imagen: "https://images.unsplash.com/photo-1472476443507-c7a5948772fc?q=80&w=500"
    },

    // --- FRUTOS SECOS ---
    {
        id: 15,
        nombre: "Maní Variado",
        categoria: "frutos-secos",
        subcategoria: "general",
        descripcion: "Maní salado, con pasas, confitado, picante y horneado.",
        imagen: "https://images.unsplash.com/photo-1536591375315-1b83681e5b22?q=80&w=500"
    },
    {
        id: 16,
        nombre: "Almendras Tostadas",
        categoria: "frutos-secos",
        subcategoria: "general",
        descripcion: "Almendras enteras, fileteadas y tostadas para snacks o repostería.",
        imagen: "https://images.unsplash.com/photo-1508061253366-f7da158b6d96?q=80&w=500"
    },
    {
        id: 17,
        nombre: "Nueces Seleccionadas",
        categoria: "frutos-secos",
        subcategoria: "general",
        descripcion: "Nuez mariposa, pacanas y marañón de primera calidad.",
        imagen: "https://images.unsplash.com/photo-1563245372-f21724e3856d?q=80&w=500"
    },
    {
        id: 18,
        nombre: "Mix de Frutos Secos",
        categoria: "frutos-secos",
        subcategoria: "general",
        descripcion: "Combinación equilibrada de maní, almendras, nueces, arándanos y pasas.",
        imagen: "https://images.unsplash.com/photo-1608686207856-001b95cf60ca?q=80&w=500"
    },

    // --- COCTELERÍA Y LIQUIPOPS ---
    {
        id: 101,
        nombre: "Liquipops | Blueberry",
        categoria: "cocteleria",
        subcategoria: "liqui-blueberry",
        descripcion: "Perlas explosivas de mora azul con centro líquido estallante para cócteles, sodas y micheladas.",
        imagen: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?q=80&w=500"
    },
    {
        id: 102,
        nombre: "Liquipops | Coco",
        categoria: "cocteleria",
        subcategoria: "liqui-coco",
        descripcion: "Perlas explosivas sabor a coco cremoso, ideales para piña colada y bebidas tropicales.",
        imagen: "liquipopscoco.jpg"
    },
    {
        id: 103,
        nombre: "Liquipops | Cereza",
        categoria: "cocteleria",
        subcategoria: "liqui-cereza",
        descripcion: "Perlas explosivas con el toque dulce e intenso de la cereza para acompañar tus tragos.",
        imagen: "liquicereza.jpg"
    },
    {
        id: 104,
        nombre: "Liquipops | Lychee",
        categoria: "cocteleria",
        subcategoria: "liqui-lychee",
        descripcion: "Sabor exótico y súper refrescante de lychee en perlas estallantes de textura suave.",
        imagen: "liquilychee.jpg"
    },
    {
        id: 105,
        nombre: "Liquipop | Sandia",
        categoria: "cocteleria",
        subcategoria: "liqui-sandia",
        descripcion: "Explosión refrescante de jugosa sandía para escarchar y combinar en tus micheladas.",
        imagen: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?q=80&w=500"
    },
    {
        id: 106,
        nombre: "Liquipops | Ice Pink",
        categoria: "cocteleria",
        subcategoria: "liqui-icepink",
        descripcion: "Perlas de edición especial frutos rosados y toque frío helado para frappés y granizados.",
        imagen: "liquipopsicepink.jpg"
    },
    {
        id: 107,
        nombre: "Liquipops | Fresa",
        categoria: "cocteleria",
        subcategoria: "liqui-fresa",
        descripcion: "Perlas explosivas sabor a fresa natural con centro líquido jugoso para cócteles y micheladas.",
        imagen: "liquipfresa.jpg"
    },
    {
        id: 20,
        nombre: "Siropes Concentrados y Chamoy",
        categoria: "cocteleria",
        subcategoria: "siropes",
        descripcion: "Jarabes concentrados de múltiples sabores y chamoy agridulce para bordear vasos.",
        imagen: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?q=80&w=500"
    },
    {
        id: 21,
        nombre: "Escarchas para Micheladas",
        categoria: "cocteleria",
        subcategoria: "escarchas",
        descripcion: "Sales picantes, polvos azucarados y mezclas de sabores (milo, pimienta, tajín, frutos rojos).",
        imagen: "https://images.unsplash.com/photo-1536935338788-846bb9981813?q=80&w=500"
    },

    // --- PLÁSTICOS Y DESECHABLES ---
    {
        id: 22,
        nombre: "Vasos Desechables Darnel",
        categoria: "desechables",
        subcategoria: "general",
        descripcion: "Vasos transparentes, tipo domo y térmicos marca Darnel en varias medidas.",
        imagen: "https://images.unsplash.com/photo-1577705998148-6da4f3963bc8?q=80&w=500"
    },
    {
        id: 23,
        nombre: "Platos y Cubiertos",
        categoria: "desechables",
        subcategoria: "general",
        descripcion: "Platos hondos, panderos, tenedores, cucharas y cuchillos desechables resistentes.",
        imagen: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?q=80&w=500"
    },
    {
        id: 24,
        nombre: "Envases y Bolsas de Empaque",
        categoria: "desechables",
        subcategoria: "general",
        descripcion: "Recipientes porta-comida, bolsas transparentes y para empaque al vacío.",
        imagen: "https://images.unsplash.com/photo-1607613009820-a29f7bb81c04?q=80&w=500"
    }
];
