// MARCAS DESTACADAS CON SUS LOGOS OFICIALES
const marcasData = [
    {
        nombre: "Zenú",
        logo: "https://seeklogo.com/images/Z/zenu-logo-670CA20641-seeklogo.com.png"
    },
    {
        nombre: "Alpina",
        logo: "https://seeklogo.com/images/A/alpina-logo-2782BB2FB8-seeklogo.com.png"
    },
    {
        nombre: "Alquería",
        logo: "https://seeklogo.com/images/A/alqueria-logo-4E15ED103B-seeklogo.com.png"
    },
    {
        nombre: "Rica",
        logo: "https://seeklogo.com/images/R/rica-rondo-logo-E31BC81B34-seeklogo.com.png"
    },
    {
        nombre: "Bimbo",
        logo: "https://seeklogo.com/images/B/bimbo-logo-07A57813FD-seeklogo.com.png"
    },
    {
        nombre: "Darnel",
        logo: "https://seeklogo.com/images/D/darnel-logo-D384D0A9EE-seeklogo.com.png"
    },
    {
        nombre: "El Rey",
        logo: "https://seeklogo.com/images/E/el-rey-logo-DFE8B4C0FE-seeklogo.com.png"
    },
    {
        nombre: "Nestlé",
        logo: "https://seeklogo.com/images/N/nestle-logo-D5B41EB81A-seeklogo.com.png"
    }
];

// PRODUCTOS DEL CATÁLOGO OFICIAL DESGLOSADOS (SIN PRECIOS)
const productosData = [
    // --- QUESOS Y LÁCTEOS ---
    {
        id: 1,
        nombre: "Quesos y Yogures",
        categoria: "quesos",
        descripcion: "Surtido variado en quesos tajados, frescos y yogures lácteos de marcas reconocidas.",
        imagen: "https://images.unsplash.com/photo-1552767059-ce182eadecec?q=80&w=500"
    },
    {
        id: 2,
        nombre: "Quesos Artesanales",
        categoria: "quesos",
        descripcion: "Sabor campesino, tradicional y fresco de elaboración artesanal pura.",
        imagen: "https://images.unsplash.com/photo-1486297678162-eb2a19b0a32d?q=80&w=500"
    },
    {
        id: 3,
        nombre: "Mantequillas",
        categoria: "quesos",
        descripcion: "Mantequillas de excelente consistencia y sabor para tus desayunos y cocina.",
        imagen: "https://images.unsplash.com/photo-1589985270826-4b7bb135bc9d?q=80&w=500"
    },
    {
        id: 4,
        nombre: "Crema y Derivados",
        categoria: "quesos",
        descripcion: "Crema de leche, suero costeño y derivados de consistencia cremosa y fresca.",
        imagen: "https://images.unsplash.com/photo-1528751014936-863e6e7a319c?q=80&w=500"
    },
    {
        id: 5,
        nombre: "Queso Rallado",
        categoria: "quesos",
        descripcion: "Queso listo para gratinar y acompañar tus pastas, lasañas o arepas.",
        imagen: "https://images.unsplash.com/photo-1452195100486-9cc805987862?q=80&w=500"
    },

    // --- EMBUTIDOS Y CÁRNICOS ---
    {
        id: 6,
        nombre: "Jamones",
        categoria: "embutidos",
        descripcion: "Lajas seleccionadas de jamón de cerdo, pavo y finas hierbas (Zenú, Rica, Differ).",
        imagen: "https://images.unsplash.com/photo-1541529086526-db283c563270?q=80&w=500"
    },
    {
        id: 7,
        nombre: "Salchichas",
        categoria: "embutidos",
        descripcion: "Salchichas manguera, tradicionales, rancheras y manguera especial para perritos o desayunos.",
        imagen: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?q=80&w=500"
    },
    {
        id: 8,
        nombre: "Chorizos",
        categoria: "embutidos",
        descripcion: "Chorizo santarrosano, antioqueño y de la casa con sazón ahumada.",
        imagen: "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?q=80&w=500"
    },
    {
        id: 9,
        nombre: "Mortadelas",
        categoria: "embutidos",
        descripcion: "Tajadas de mortadela fresca de primera calidad para tus pasabocas.",
        imagen: "https://images.unsplash.com/photo-1528607929212-2636ec44253e?q=80&w=500"
    },
    {
        id: 10,
        nombre: "Tocineta",
        categoria: "embutidos",
        descripcion: "Cortes de tocineta ahumada crujiente ideal para hamburguesas y recetas.",
        imagen: "https://images.unsplash.com/photo-1606851094655-b2593a9af63f?q=80&w=500"
    },
    {
        id: 11,
        nombre: "Picadas y Preparaciones",
        categoria: "embutidos",
        descripcion: "Kits y mezclas listas de carnes frías para reuniones y eventos sociales.",
        imagen: "https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=500"
    },

    // --- ALIMENTOS Y CONDIMENTOS ---
    {
        id: 12,
        nombre: "Aliños a Granel",
        categoria: "alimentos",
        descripcion: "Variedad de aliños preparados por peso para darle el toque secreto a tus comidas.",
        imagen: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?q=80&w=500"
    },
    {
        id: 13,
        nombre: "Especias",
        categoria: "alimentos",
        descripcion: "Pimienta, orégano, comino, laurel, tomillo, paprika y especias seleccionadas.",
        imagen: "https://images.unsplash.com/photo-1509358217950-0fd228257184?q=80&w=500"
    },
    {
        id: 14,
        nombre: "Condimentos",
        categoria: "alimentos",
        descripcion: "Sazonadores en polvo, color, caldo y sazonados El Rey para todo tipo de preparación.",
        imagen: "https://images.unsplash.com/photo-1532336414038-cf19250c5757?q=80&w=500"
    },
    {
        id: 15,
        nombre: "Salsas Caseras",
        categoria: "alimentos",
        descripcion: "Salsas artesanales, tártara, ajo, piña, rosada y especialidades Salsa Emanuel.",
        imagen: "https://images.unsplash.com/photo-1472476443507-c7a5948772fc?q=80&w=500"
    },
    {
        id: 16,
        nombre: "Mezclas Especiales",
        categoria: "alimentos",
        descripcion: "Adobos y aderezos especiales para carnes, pollo y pescados.",
        imagen: "https://images.unsplash.com/photo-1615485290382-441e4d049cb5?q=80&w=500"
    },

    // --- FRUTOS SECOS ---
    {
        id: 17,
        nombre: "Maní",
        categoria: "frutos-secos",
        descripcion: "Maní salado, con pasas, confitado, picante y maní horneado sin sal.",
        imagen: "https://images.unsplash.com/photo-1536591375315-1b83681e5b22?q=80&w=500"
    },
    {
        id: 18,
        nombre: "Almendras",
        categoria: "frutos-secos",
        descripcion: "Almendras enteras, fileteadas y tostadas para snacks o reposteria.",
        imagen: "https://images.unsplash.com/photo-1508061253366-f7da158b6d96?q=80&w=500"
    },
    {
        id: 19,
        nombre: "Nueces",
        categoria: "frutos-secos",
        descripcion: "Nuez mariposa, pacanas y marañón de primera calidad alimenticia.",
        imagen: "https://images.unsplash.com/photo-1563245372-f21724e3856d?q=80&w=500"
    },
    {
        id: 20,
        nombre: "Pasas",
        categoria: "frutos-secos",
        descripcion: "Uvas pasas dulce natural para ensaladas, postres y mezclas.",
        imagen: "https://images.unsplash.com/photo-1582234372722-50d7ccc30ebd?q=80&w=500"
    },
    {
        id: 21,
        nombre: "Mix de Frutos Secos",
        categoria: "frutos-secos",
        descripcion: "Combinación equilibrada de maní, almendras, nueces, arándanos y pasas.",
        imagen: "https://images.unsplash.com/photo-1608686207856-001b95cf60ca?q=80&w=500"
    },

    // --- COCTELERÍA Y MICHELADAS ---
    {
        id: 22,
        nombre: "Perlas Explosivas (Liqui POPS)",
        categoria: "cocteleria",
        descripcion: "Toppings de perlas con centro líquido estallante de diversos sabores frutales.",
        imagen: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?q=80&w=500"
    },
    {
        id: 23,
        nombre: "Siropes",
        categoria: "cocteleria",
        descripcion: "Jarabes concentrados de sabores para sodas saborizadas y cócteles.",
        imagen: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?q=80&w=500"
    },
    {
        id: 24,
        nombre: "Chamoy",
        categoria: "cocteleria",
        descripcion: "Salsa agridulce chamoy para escarchar vasos y acompañar bebidas.",
        imagen: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?q=80&w=500"
    },
    {
        id: 25,
        nombre: "Escarchas",
        categoria: "cocteleria",
        descripcion: "Sales y polvos de sabores (milo, pimienta, tajín, frutos rojos) para micheladas.",
        imagen: "https://images.unsplash.com/photo-1536935338788-846bb9981813?q=80&w=500"
    },
    {
        id: 26,
        nombre: "Insumos para Micheladas y Cócteles",
        categoria: "cocteleria",
        descripcion: "Sazonadores, gomitas, pitillos decorativos y bases concentradas.",
        imagen: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=500"
    },

    // --- PLÁSTICOS Y DESECHABLES ---
    {
        id: 27,
        nombre: "Vasos Desechables",
        categoria: "desechables",
        descripcion: "Vasos transparentes, domo, térmicos y de diferentes onzas marca Darnel.",
        imagen: "https://images.unsplash.com/photo-1577705998148-6da4f3963bc8?q=80&w=500"
    },
    {
        id: 28,
        nombre: "Platos y Cubiertos",
        categoria: "desechables",
        descripcion: "Platos hondos, panderos, tenedores, cucharas y cuchillos biodegradables o plásticos.",
        imagen: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?q=80&w=500"
    },
    {
        id: 29,
        nombre: "Envases y Bolsas",
        categoria: "desechables",
        descripcion: "Recipientes porta-comida, bolsas transparentes, herméticas y para empaque al vacío.",
        imagen: "https://images.unsplash.com/photo-1607613009820-a29f7bb81c04?q=80&w=500"
    }
];
