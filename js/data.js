// MARCAS DESTACADAS
const marcasData = [
    "Zenú", "Alpina", "Alquería", "Differ", "Rica", "Bimbo", "Darnel", "El Rey", "Liqui POPS", "Salsa Emanuel", "Panvalle"
];

// PRODUCTOS DEL CATÁLOGO (SIN PRECIOS)
const productosData = [
    // QUESOS
    {
        id: 1,
        nombre: "Quesos y Yogures",
        categoria: "quesos",
        descripcion: "Gran variedad en quesos frescos, tajados y yogures de marcas reconocidas.",
        imagen: "https://images.unsplash.com/photo-1552767059-ce182eadecec?q=80&w=500"
    },
    {
        id: 2,
        nombre: "Quesos Artesanales",
        categoria: "quesos",
        descripcion: "Sabor tradicional y fresco de elaboración artesanal.",
        imagen: "https://images.unsplash.com/photo-1486297678162-eb2a19b0a32d?q=80&w=500"
    },
    {
        id: 3,
        nombre: "Mantequillas, Crema y Rallado",
        categoria: "quesos",
        descripcion: "Derivados lácteos indispensables para tus comidas y repostería.",
        imagen: "https://images.unsplash.com/photo-1589985270826-4b7bb135bc9d?q=80&w=500"
    },

    // EMBUTIDOS
    {
        id: 4,
        nombre: "Jamones y Salchichas",
        categoria: "embutidos",
        descripcion: "Lajas de jamón y salchichas de alta calidad de Zenú, Rica y Differ.",
        imagen: "https://images.unsplash.com/photo-1541529086526-db283c563270?q=80&w=500"
    },
    {
        id: 5,
        nombre: "Chorizos y Mortadelas",
        categoria: "embutidos",
        descripcion: "Sabrosos embutidos sazonados ideales para picadas y platos especiales.",
        imagen: "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?q=80&w=500"
    },
    {
        id: 6,
        nombre: "Tocineta y Picadas",
        categoria: "embutidos",
        descripcion: "Tocineta ahumada y combinación de embutidos para tus eventos.",
        imagen: "https://images.unsplash.com/photo-1528607929212-2636ec44253e?q=80&w=500"
    },

    // ALIMENTOS Y CONDIMENTOS
    {
        id: 7,
        nombre: "Aliños a Granel y Especias",
        categoria: "alimentos",
        descripcion: "Condimentos y aliños variados para sazonar tus recetas favoritas.",
        imagen: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?q=80&w=500"
    },
    {
        id: 8,
        nombre: "Salsas Caseras y Mezclas",
        categoria: "alimentos",
        descripcion: "Salsas Emanuel, Cowie y condimentos preparados del Rey.",
        imagen: "https://images.unsplash.com/photo-1472476443507-c7a5948772fc?q=80&w=500"
    },

    // FRUTOS SECOS
    {
        id: 9,
        nombre: "Mix de Frutos Secos y Maní",
        categoria: "frutos-secos",
        descripcion: "Maní, almendras, nueces y pasas para tus pasabocas o desayunos.",
        imagen: "https://images.unsplash.com/photo-1536591375315-1b83681e5b22?q=80&w=500"
    },

    // COCTELERÍA
    {
        id: 10,
        nombre: "Perlas Explosivas (Liqui POPS)",
        categoria: "cocteleria",
        descripcion: "Toppings explosivos de sabor para micheladas, granizados y bebidas.",
        imagen: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?q=80&w=500"
    },
    {
        id: 11,
        nombre: "Siropes, Chamoy y Escarchas",
        categoria: "cocteleria",
        descripcion: "Saborizadores e insumos profesionales para coctelería.",
        imagen: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?q=80&w=500"
    },

    // DESECHABLES
    {
        id: 12,
        nombre: "Plásticos y Desechables Darnel",
        categoria: "desechables",
        descripcion: "Vasos, platos, cubiertos, envases y bolsas para hogar o negocio.",
        imagen: "https://images.unsplash.com/photo-1577705998148-6da4f3963bc8?q=80&w=500"
    }
];
