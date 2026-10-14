var marcasData = [
    { nombre: "Zenú", logo: "zenu.jpg" },
    { nombre: "Alpina", logo: "alpina.jpg" },
    { nombre: "Alquería", logo: "alqueria.jpg" },
    { nombre: "Rica", logo: "rica.jpg" },
    { nombre: "Bimbo", logo: "bimbo.jpg" },
    { nombre: "Darnel", logo: "darnel.jpg" },
    { nombre: "El Rey", logo: "elrey.jpg" },
    { nombre: "Nestlé", logo: "nestle.jpg" }
];

var productosData = [
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
    {
        id: 1081,
        nombre: "Liquipops x 350 gramos | Manzana verde 🍏",
        categoria: "cocteleria",
        subcategoria: "liqui-manzana",
        descripcion: "Perlas explosivas sabor a manzana verde ácida y refrescante (Presentación de 350 gramos).",
        imagen: "liquipopsmanzana350gr.jpg"
    },
    {
        id: 1082,
        nombre: "Liquipops x 1,150 gramos | Manzana verde 🍏",
        categoria: "cocteleria",
        subcategoria: "liqui-manzana",
        descripcion: "Perlas explosivas sabor a manzana verde ácida y refrescante (Presentación de 1,150 gramos).",
        imagen: "liquipops1150gramos.jpg"
    },
    {
        id: 1083,
        nombre: "Liquipops x 3,400 gramos | Manzana verde 🍏",
        categoria: "cocteleria",
        subcategoria: "liqui-manzana",
        descripcion: "Perlas explosivas sabor a manzana verde ácida y refrescante (Presentación de 3,400 gramos).",
        imagen: "liquipopsmanzana3400.jpg"
    },
    {
        id: 1011,
        nombre: "Liquipops x 350 gramos | Blueberry 🔵",
        categoria: "cocteleria",
        subcategoria: "liqui-blueberry",
        descripcion: "Perlas explosivas sabor a mora azul / blueberry con centro líquido estallante (Presentación de 350 gramos).",
        imagen: "liquipopsblueberry350gramos.jpg"
    },
    {
        id: 1012,
        nombre: "Liquipops x 1,150 gramos | Blueberry 🫐",
        categoria: "cocteleria",
        subcategoria: "liqui-blueberry",
        descripcion: "Perlas explosivas sabor a mora azul / blueberry con centro líquido estallante (Presentación de 1,150 gramos).",
        imagen: "liquipopsblueberry1150gramos.jpg"
    },
    {
        id: 1013,
        nombre: "Liquipops x 3,400 gramos | Blueberry 🔵",
        categoria: "cocteleria",
        subcategoria: "liqui-blueberry",
        descripcion: "Perlas explosivas sabor a mora azul / blueberry con centro líquido estallante (Presentación de 3,400 gramos).",
        imagen: "liquipopsblueberry3400gramos.jpg"
    },
    {
        id: 1021,
        nombre: "Liquipops x 350 gramos | Coco 🥥",
        categoria: "cocteleria",
        subcategoria: "liqui-coco",
        descripcion: "Perlas explosivas sabor a coco cremoso con centro líquido estallante (Presentación de 350 gramos).",
        imagen: "liquipopscoco350gramos.jpg"
    },
    {
        id: 1022,
        nombre: "Liquipops x 1,150 gramos | Coco 🥥",
        categoria: "cocteleria",
        subcategoria: "liqui-coco",
        descripcion: "Perlas explosivas sabor a coco cremoso con centro líquido estallante (Presentación de 1,150 gramos).",
        imagen: "liquipopscoco1150gramos.jpg"
    },
    {
        id: 1023,
        nombre: "Liquipops x 3,400 gramos | Coco 🥥",
        categoria: "cocteleria",
        subcategoria: "liqui-coco",
        descripcion: "Perlas explosivas sabor a coco cremoso con centro líquido estallante (Presentación de 3,400 gramos).",
        imagen: "liquipopscoco3400gramos.jpg"
    },
    {
        id: 1031,
        nombre: "Liquipops x 350 gramos | Cereza 🍒",
        categoria: "cocteleria",
        subcategoria: "liqui-cereza",
        descripcion: "Perlas explosivas sabor a cereza dulce e intensa con centro líquido estallante (Presentación de 350 gramos).",
        imagen: "liquipopscereza350gramos.jpg"
    },
    {
        id: 1032,
        nombre: "Liquipops x 1,150 gramos | Cereza 🍒",
        categoria: "cocteleria",
        subcategoria: "liqui-cereza",
        descripcion: "Perlas explosivas sabor a cereza dulce e intensa con centro líquido estallante (Presentación de 1,150 gramos).",
        imagen: "liquipopscereza1150gramos.jpg"
    },
    {
        id: 1033,
        nombre: "Liquipops x 3,400 gramos | Cereza 🍒",
        categoria: "cocteleria",
        subcategoria: "liqui-cereza",
        descripcion: "Perlas explosivas sabor a cereza dulce e intensa con centro líquido estallante (Presentación de 3,400 gramos).",
        imagen: "liquipopscereza3400gramos.jpg"
    },
    {
        id: 1041,
        nombre: "Liquipops x 350 gramos | Lychee 🍚",
        categoria: "cocteleria",
        subcategoria: "liqui-lychee",
        descripcion: "Perlas explosivas sabor exótico a lychee con centro líquido estallante (Presentación de 350 gramos).",
        imagen: "liquipopslychee350gramos.jpg"
    },
    {
        id: 1042,
        nombre: "Liquipops x 1,150 gramos | Lychee 🍚",
        categoria: "cocteleria",
        subcategoria: "liqui-lychee",
        descripcion: "Perlas explosivas sabor exótico a lychee con centro líquido estallante (Presentación de 1,150 gramos).",
        imagen: "liquipopslychee1150gramos.jpg"
    },
    {
        id: 1043,
        nombre: "Liquipops x 3,400 gramos | Lychee 🍚",
        categoria: "cocteleria",
        subcategoria: "liqui-lychee",
        descripcion: "Perlas explosivas sabor exótico a lychee con centro líquido estallante (Presentación de 3,400 gramos).",
        imagen: "liquipopslychee3400gramos.jpg"
    },
    {
        id: 1051,
        nombre: "Liquipops x 350 gramos | Sandia 🍉",
        categoria: "cocteleria",
        subcategoria: "liqui-sandia",
        descripcion: "Perlas explosivas sabor a jugosa sandía con centro líquido estallante (Presentación de 350 gramos).",
        imagen: "liquipopssandia350gramos.jpg"
    },
    {
        id: 1052,
        nombre: "Liquipops x 1,150 gramos | Sandía 🍉",
        categoria: "cocteleria",
        subcategoria: "liqui-sandia",
        descripcion: "Perlas explosivas sabor a jugosa sandía con centro líquido estallante (Presentación de 1,150 gramos).",
        imagen: "liquipopssandia1150gramos.jpg"
    },
    {
        id: 1053,
        nombre: "Liquipops x 3,400 gramos | Sandia 🍉",
        categoria: "cocteleria",
        subcategoria: "liqui-sandia",
        descripcion: "Perlas explosivas sabor a jugosa sandía con centro líquido estallante (Presentación de 3,400 gramos).",
        imagen: "liquipopssandia3400gramos.jpg"
    },
    {
        id: 1061,
        nombre: "Liquipops x 350 gramos | Ice pink 🫧",
        categoria: "cocteleria",
        subcategoria: "liqui-icepink",
        descripcion: "Perlas de edición especial frutos rosados y toque frío helado (Presentación de 350 gramos).",
        imagen: "liquipopsicepink350gramos.jpg"
    },
    {
        id: 1062,
        nombre: "Liquipops x 1,150 gramos | Ice pink 🫧",
        categoria: "cocteleria",
        subcategoria: "liqui-icepink",
        descripcion: "Perlas de edición especial frutos rosados y toque frío helado (Presentación de 1,150 gramos).",
        imagen: "liquipopsicepink1150gramos.jpg"
    },
    {
        id: 1063,
        nombre: "Liquipops x 3,400 gramos | Ice pink 🫧",
        categoria: "cocteleria",
        subcategoria: "liqui-icepink",
        descripcion: "Perlas de edición especial frutos rosados y toque frío helado (Presentación de 3,400 gramos).",
        imagen: "liquipopsicepink3400gramos.jpg"
    },
    {
        id: 1071,
        nombre: "Liquipops x 350 gramos | Fresa 🍓",
        categoria: "cocteleria",
        subcategoria: "liqui-fresa",
        descripcion: "Perlas explosivas sabor a fresa natural con centro líquido jugoso (Presentación de 350 gramos).",
        imagen: "liquipopsfresa350gramos.jpg"
    },
    {
        id: 1072,
        nombre: "Liquipops x 1,150 gramos | Fresa 🍓",
        categoria: "cocteleria",
        subcategoria: "liqui-fresa",
        descripcion: "Perlas explosivas sabor a fresa natural con centro líquido jugoso (Presentación de 1,150 gramos).",
        imagen: "liquipopsfresa1150gramos.jpg"
    },
    {
        id: 1073,
        nombre: "Liquipops x 3,400 gramos | Fresa 🍓",
        categoria: "cocteleria",
        subcategoria: "liqui-fresa",
        descripcion: "Perlas explosivas sabor a fresa natural con centro líquido jugoso (Presentación de 3,400 gramos).",
        imagen: "liquipopsfresa3400gramos.jpg"
    },
    {
        id: 1091,
        nombre: "Liquipops x 350 gramos | Chicle 💦",
        categoria: "cocteleria",
        subcategoria: "liqui-chicle",
        descripcion: "Perlas explosivas con dulce y divertido sabor a chicle (Presentación de 350 gramos).",
        imagen: "liquipopschicle350gramos.jpg"
    },
    {
        id: 1092,
        nombre: "Liquipops x 1,150 gramos | Chicle 💦",
        categoria: "cocteleria",
        subcategoria: "liqui-chicle",
        descripcion: "Perlas explosivas con dulce y divertido sabor a chicle (Presentación de 1,150 gramos).",
        imagen: "liquipopschicle1150gramos.jpg"
    },
    {
        id: 1093,
        nombre: "Liquipops x 3,400 gramos | Chicle 💦",
        categoria: "cocteleria",
        subcategoria: "liqui-chicle",
        descripcion: "Perlas explosivas con dulce y divertido sabor a chicle (Presentación de 3,400 gramos).",
        imagen: "liquipopschicle3400gramos.jpg"
    },
    {
        id: 1101,
        nombre: "Liquipops x 350 gramos | Mango 🥭",
        categoria: "cocteleria",
        subcategoria: "liqui-mango",
        descripcion: "Sabor ácido y refrescante a mango biche con centro estallante (Presentación de 350 gramos).",
        imagen: "liquipopsmango350gramos.jpg"
    },
    {
        id: 1102,
        nombre: "Liquipops x 1,150 gramos | Mango Biche 🥭",
        categoria: "cocteleria",
        subcategoria: "liqui-mango",
        descripcion: "Sabor ácido y refrescante a mango biche con centro estallante (Presentación de 1,150 gramos).",
        imagen: "liquipopsmango1150gramos.jpg"
    },
    {
        id: 1103,
        nombre: "Liquipops x 3,400 gramos | Mango 🥭",
        categoria: "cocteleria",
        subcategoria: "liqui-mango",
        descripcion: "Sabor ácido y refrescante a mango biche con centro estallante (Presentación de 3,400 gramos).",
        imagen: "liquipopsmango3400gramos.jpg"
    },
    {
        id: 1111,
        nombre: "Liquipops x 350 gramos | Maracuya 🍋",
        categoria: "cocteleria",
        subcategoria: "liqui-maracuya",
        descripcion: "Perlas explosivas con el toque tropical y cítrico de la maracuyá (Presentación de 350 gramos).",
        imagen: "liquipopsmaracuya350gramos.jpg"
    },
    {
        id: 1112,
        nombre: "Liquipops x 1,150 gramos | Maracuya 🍋",
        categoria: "cocteleria",
        subcategoria: "liqui-maracuya",
        descripcion: "Perlas explosivas con el toque tropical y cítrico de la maracuyá (Presentación de 1,150 gramos).",
        imagen: "liquipopsmaracuya1150gramos.jpg"
    },
    {
        id: 1113,
        nombre: "Liquipops x 3,400 gramos | Maracuyá 🍋",
        categoria: "cocteleria",
        subcategoria: "liqui-maracuya",
        descripcion: "Perlas explosivas con el toque tropical y cítrico de la maracuyá (Presentación de 3,400 gramos).",
        imagen: "liquipopsmaracuya3400gramos.jpg"
    },
    {
        id: 1121,
        nombre: "Liquipops x 350 gramos | Café 🤎",
        categoria: "cocteleria",
        subcategoria: "liqui-cafe",
        descripcion: "Perlas de edición especial con intenso aroma y sabor a café (Presentación de 350 gramos).",
        imagen: "liquipopscafe350gramos.jpg"
    },
    {
        id: 1122,
        nombre: "Liquipops x 1,150 gramos | Café 🤎",
        categoria: "cocteleria",
        subcategoria: "liqui-cafe",
        descripcion: "Perlas de edición especial con intenso aroma y sabor a café (Presentación de 1,150 gramos).",
        imagen: "liquipopscafe1150gramos.jpg"
    },
    {
        id: 1123,
        nombre: "Liquipops x 3,400 gramos | Café 🤎",
        categoria: "cocteleria",
        subcategoria: "liqui-cafe",
        descripcion: "Perlas de edición especial con intenso aroma y sabor a café (Presentación de 3,400 gramos).",
        imagen: "liquipopscafe3400gramos.jpg"
    },
    {
        id: 2001,
        nombre: "Sirope de Geniality x 1.000 ml | Fresa",
        categoria: "cocteleria",
        subcategoria: "siropes",
        descripcion: "Sirope concentrado marca Geniality sabor Fresa x 1.000 ml, perfecto para granizados, frappés, sodas saborizadas y cócteles.",
        imagen: "siropefresa1000ml.jpg"
    },
    {
        id: 2002,
        nombre: "Sirope de Geniality x 1.000 ml | Cereza 🍒",
        categoria: "cocteleria",
        subcategoria: "siropes",
        descripcion: "Sirope concentrado marca Geniality sabor Cereza x 1.000 ml, ideal para dar un toque dulce e intenso a bebidas y postres.",
        imagen: "siropecereza1000.jpg"
    },
    {
        id: 2003,
        nombre: "Sirope de Geniality x 1.000 ml | Lychee 🍚",
        categoria: "cocteleria",
        subcategoria: "siropes",
        descripcion: "Sirope concentrado marca Geniality sabor Lychee x 1.000 ml, con notas tropicales exóticas para coctelería de autor.",
        imagen: "siropelyche.jpg"
    },
    {
        id: 2004,
        nombre: "Sirope de Geniality x 1.000 ml | Blueberry 🔵",
        categoria: "cocteleria",
        subcategoria: "siropes",
        descripcion: "Sirope concentrado marca Geniality sabor Blueberry x 1.000 ml, con el sabor característico y vibrante de la mora azul.",
        imagen: "siropeBlueberry.jpg"
    },
    {
        id: 2005,
        nombre: "Sirope de Geniality x 1.000 ml | Manzana Verde 🍏",
        categoria: "cocteleria",
        subcategoria: "siropes",
        descripcion: "Sirope concentrado marca Geniality sabor Manzana Verde x 1.000 ml, refrescante y ácido para sodas y frappés.",
        imagen: "siropemanzana.jpg"
    },
    {
        id: 2006,
        nombre: "Sirope de Geniality x 1.000 ml | Maracuyá 🍋",
        categoria: "cocteleria",
        subcategoria: "siropes",
        descripcion: "Sirope concentrado marca Geniality sabor Maracuyá x 1.000 ml, con un balance perfecto entre dulce y cítrico.",
        imagen: "siropemaracuya.jpg"
    },
    {
        id: 2007,
        nombre: "Siropes Concentrados y Chamoy Variados",
        categoria: "cocteleria",
        subcategoria: "siropes",
        descripcion: "Jarabes concentrados adicionales y chamoy agridulce para escarchar y bordear vasos.",
        imagen: "imagenlacentral.jpeg"
    },
    {
        id: 2101,
        nombre: "Azúcar para michelar Skarcha x 500 gramos | Cereza 🍒",
        categoria: "cocteleria",
        subcategoria: "escarchas",
        descripcion: "Mezcla de azúcar con sabor artificial a cereza para escarchar y decorar bebidas (Presentación de 500 gramos)[cite: 8].",
        imagen: "azucarcereza.jpg"
    },
    {
        id: 2102,
        nombre: "Azúcar para michelar Skarcha x 500 gramos | Sandía 🍉",
        categoria: "cocteleria",
        subcategoria: "escarchas",
        descripcion: "Mezcla de azúcar con sabor artificial a sandía para escarchar y decorar bebidas (Presentación de 500 gramos)[cite: 9].",
        imagen: "azucarsandia.jpg"
    },
    {
        id: 2103,
        nombre: "Azúcar para michelar Skarcha x 500 gramos | Blueberry 🔵",
        categoria: "cocteleria",
        subcategoria: "escarchas",
        descripcion: "Mezcla de azúcar con sabor artificial a blueberry para escarchar y decorar bebidas (Presentación de 500 gramos)[cite: 10].",
        imagen: "azucarbluberry.jpg"
    },
    {
        id: 2104,
        nombre: "Azúcar para michelar Skarcha x 500 gramos | Chicle 🫧",
        categoria: "cocteleria",
        subcategoria: "escarchas",
        descripcion: "Mezcla de azúcar con sabor artificial a chicle para escarchar y decorar bebidas (Presentación de 500 gramos)[cite: 11].",
        imagen: "azucarchicle.jpg"
    },
    {
        id: 2105,
        nombre: "Sal Mix para michelar Skarcha x 500 gramos | Maracuyá 🍋",
        categoria: "cocteleria",
        subcategoria: "escarchas",
        descripcion: "Mezcla de sal con sabor artificial a maracuyá para escarchar y decorar bebidas (Presentación de 500 gramos)[cite: 12].",
        imagen: "salmaracuya.jpg"
    },
    {
        id: 2106,
        nombre: "Azúcar para michelar Skarcha x 500 gramos | Maracuyá 🍋",
        categoria: "cocteleria",
        subcategoria: "escarchas",
        descripcion: "Mezcla de azúcar con sabor artificial a maracuyá para escarchar y decorar bebidas (Presentación de 500 gramos).",
        imagen: "azucarmaracuya.jpg"
    },
    {
        id: 22,
        nombre: "Vasos Desechables Darnel",
        categoria: "desechables",
        subcategoria: "general",
        descripcion: "Vasos transparentes, tipo domo y térmicos marca Darnel en varias medidas.",
        imagen: "imagenlacentral.jpeg"
    },
    {
        id: 23,
        nombre: "Platos y Cubiertos",
        categoria: "desechables",
        subcategoria: "general",
        descripcion: "Platos hondos, panderos, tenedores, cucharas y cuchillos resistentes.",
        imagen: "imagenlacentral.jpeg"
    },
    {
        id: 24,
        nombre: "Envases y Bolsas de Empaque",
        categoria: "desechables",
        subcategoria: "general",
        descripcion: "Recipientes porta-comida, bolsas transparentes y para empaque al vacío.",
        imagen: "imagenlacentral.jpeg"
    }
];

if (typeof window !== 'undefined') {
    window.marcasData = marcasData;
    window.productosData = productosData;
}
