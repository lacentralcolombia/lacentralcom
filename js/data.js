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
    // ---------------------------------------------------------------
    // DULCES y PANES: aún no hay productos cargados.
    // Para agregar uno, copia este modelo, quita los // del inicio,
    // cambia los datos y pégalo AQUÍ, antes del primer producto.
    // Usa un id que no exista todavía.
    //
    // {
    //     id: 4001,
    //     nombre: "Nombre del dulce | presentación",
    //     categoria: "dulces",          // "dulces" o "panes"
    //     subcategoria: "general",
    //     descripcion: "Descripción corta del producto.",
    //     imagen: "nombre-de-la-foto.jpg"
    // },
    // ---------------------------------------------------------------
    {
      id: 501,
        nombre: "Queso Mozzarella Tajado Bloque Lácteos Villa Gloria",
        categoria: "quesos",
        subcategoria: "quesos-bloque",
        descripcion: "Queso fresco semiduro, semigraso y moldeado con cuajo, marca Lácteos Villa Gloria en práctico bloque tajado.",
        imagen: "bloquequesomozzarelatajado.jpg"
    },

    {
        id: 502,
        nombre: "Queso Bloque Semigraso Semiduro Frescocrema La Favorita x 2.500 g",
        categoria: "quesos",
        subcategoria: "quesos-bloque",
        descripcion: "Queso semigraso, semiduro y fresco crema marca La Favorita en presentación de bloque con peso neto de 2.500 g.",
        imagen: "quesobloquelafavorita.jpg"
    },
    {
        id: 503,
        nombre: "Queso Tajado 200g Semigraso Semiduro Frescocrema La Favorita ",
        categoria: "quesos",
        subcategoria: "quesos-tajados",
        descripcion: "Queso semigraso, semiduro y fresco crema marca La Favorita en práctica presentación tajada de 200 g.",
        imagen: "quesotajadolafavorita200gramos.jpg"
    },
      {
        id: 504,
        nombre: "Queso Tajado 400g Semigraso Semiduro Frescocrema La Favorita ",
        categoria: "quesos",
        subcategoria: "quesos-tajados",
        descripcion: "Queso semigraso, semiduro y fresco crema marca La Favorita en presentación tajada de 400 gramos.",
        imagen: "quesotajadolafavorita400gramos.jpg"
    },
    {
        id: 505,
        nombre: "Queso Tajado 500g Semigraso Semiduro Frescocrema La Favorita ",
        categoria: "quesos",
        subcategoria: "quesos-tajados",
        descripcion: "Queso semigraso, semiduro y fresco crema marca La Favorita en presentación tajada de 500 gramos.",
        imagen: "quesotajadolafavorita500gramos.jpg"
    },
    {
        id: 506,
        nombre: "Queso Campesino 500g Fresco Graso Molido Semiblando La Favorita ",
        categoria: "quesos",
        subcategoria: "quesos-frescos",
        descripcion: "Queso fresco graso, molido y semiblando tipo campesino, marca La Favorita en presentación de 500 gramos.",
        imagen: "quesocampesino500gramos.jpg"
    },
    {
        id: 507,
        nombre: "Queso Cuajada 500g Semigraso Semiduro Fresco La Favorita",
        categoria: "quesos",
        subcategoria: "quesos-frescos",
        descripcion: "Queso cuajada semigraso, semiduro y fresco, marca La Favorita en presentación empacada de 500 gramos.",
        imagen: "quesocuajada500gramos.jpg"
    },
    {
        id: 508,
        nombre: "Yogurt Entero con Dulce y Trozos de Fruta J.A x 1950 g (Sabores: Melocotón, Fresa y Mora)",
        categoria: "quesos",
        subcategoria: "leche-yogures",
        descripcion: "Delicioso yogurt entero con dulce y trozos de fruta marca J.A en presentación familiar de 1.950 gramos. Disponible en sabores surtidos: Melocotón, Fresa y Mora.",
        imagen: "yogurtJA.jpg"
    },
    {
        id: 510,
        nombre: "Crema de Leche Original Semientera UHT Alquería Food Service x 1000 g",
        categoria: "quesos",
        subcategoria: "leche-yogures",
        descripcion: "Crema de leche original semientera UAT (UHT) Alquería Food Service para uso institucional. Ideal para batir, con cremosidad y textura inigualable. Presentación de 1.000 g.",
        imagen: "cremadelechefood1000gramos.jpg"
    },
    {
        id: 511,
        nombre: "Crema de Leche Semientera Esterilizada Nestlé x 186 g",
        categoria: "quesos",
        subcategoria: "leche-yogures",
        descripcion: "Crema de leche semientera esterilizada marca Nestlé en presentación doypack con práctico tazón de rosca. Contenido neto: 186 g (aprox. 12 porciones por empaque). Agítese antes de abrir.",
        imagen: "cremadelecheNestle186gramos.jpg"
    },
    {
        id: 512,
        nombre: "Leche Condensada Original La Lechera Nestlé x 190 g",
        categoria: "quesos",
        subcategoria: "leche-yogures",
        descripcion: "Leche condensada azucarada semidescremada marca La Lechera Nestlé (Original, leche 100% de vaca). Presentación doypack con contenido neto de 190 g y aprox. 9 porciones.",
        imagen: "LaLecheraNestlelechecondesada190g.jpg"
    },
    {
        id: 513,
        nombre: "Leche Condensada Cowie Proalba | Presentaciones de 380 g y 1.300 g",
        categoria: "quesos",
        subcategoria: "leche-yogures",
        descripcion: "Leche condensada azucarada marca Cowie (Proalba) elaborada con leche (lactosa). Disponible en práctica presentación dosificadora de 380 g (aprox. 13 porciones) y presentación institucional/familiar de 1.300 g con manija (aprox. 43 porciones).",
        imagen: "lecheracondesada380y1300g.jpg"
    },
    {
        id: 514,
        nombre: "Leche en Polvo Parcialmente Descremada El Rodeo Nestlé x 187 g | Rinde 1.5 Litros",
        categoria: "quesos",
        subcategoria: "leche-yogures",
        descripcion: "Leche en polvo parcialmente descremada marca El Rodeo (Nestlé). Fortificada con Hierro, Calcio y Vitamina A. Contenido Neto de 187 g (aprox. 7 porciones, rinde 1.5 litros).",
        imagen: "lecheelrodeoenpolvo187gramos.jpg"
    },
   
    {
        id: 6,
        nombre: "Jamón Sevilla x 450 gramos | 22 Tajadas",
        categoria: "embutidos",
        subcategoria: "jamones",
        descripcion: "Exquisito Jamón marca Sevilla en presentación de 450 gramos (22 tajadas), ideal para tus sándwiches, desayunos y preparaciones diarias.",
        imagen: "jamonsevilla450gramos.jpg"
    },
    {
        id: 601,
        nombre: "Jamón Ideal Rica x 230 gramos | 12 Tajadas",
        categoria: "embutidos",
        subcategoria: "jamones",
        descripcion: "Delicioso Jamón Ideal marca Rica en presentación de 230 gramos (12 tajadas), perfecto para sándwiches y desayunos.",
        imagen: "JAMONIDEALRICA230GRAMOS.JPG"
    },
    {
        id: 602,
        nombre: "Jamón Ideal Rica x 400 gramos | 21 Tajadas",
        categoria: "embutidos",
        subcategoria: "jamones",
        descripcion: "Rico y rendidor Jamón Ideal marca Rica en presentación familiar de 400 gramos (21 tajadas), excelente para compartir.",
        imagen: "JAMONIDEALRICA400GRAMOS.jpg"
    },
    {
        id: 603,
        nombre: "Jamón Sabor Ahumado Karvalle x 450 gramos | 13 Porciones Aprox.",
        categoria: "embutidos",
        subcategoria: "jamones",
        descripcion: "Delicioso Jamón Sabor Ahumado marca Karvalle en presentación de 450 gramos (13 porciones aprox.), perfecto para acompañar cualquier platillo.",
        imagen: "jamonkarvalle.jpg"
    },
    {
        id: 7,
        nombre: "Salchicha Campesina Deli x 16 Unidades | 500 gramos",
        categoria: "embutidos",
        subcategoria: "salchichas",
        descripcion: "Deliciosa salchicha mixta de pollo y cerdo marca Deli Campesina en presentación de 500 gramos y 16 porciones aprox.",
        imagen: "campesina16.jpg"
    },
    {
        id: 701,
        nombre: "Salchicha Premium Ranchera x 480gr x 14 Unidades",
        categoria: "embutidos",
        subcategoria: "salchichas",
        descripcion: "Deliciosas salchichas premium marca Ranchera en presentación de 480 gramos y 14 unidades, empaque resellable zip-pak.",
        imagen: "ranchera14.jpg"
    },
    {
        id: 702,
        nombre: "Salchicha Premium Ranchera x 3 Unidades",
        categoria: "embutidos",
        subcategoria: "salchichas",
        descripcion: "Salchicha premium marca Ranchera en presentación práctica de 3 unidades (Peso neto 75 g), ideal para porciones individuales.",
        imagen: "ranchera3.jpg"
    },
    {
        id: 703,
        nombre: "Salchicha Súper Perro La Vitta x 12 Unidades | 1000 gramos",
        categoria: "embutidos",
        subcategoria: "salchichas",
        descripcion: "Salchicha Súper Perro marca Carnes Frías La Vitta en presentación institucional de 1.000 gramos y 12 unidades.",
        imagen: "salchcialavillasuperperro.jpg"
    },
    {
        id: 8,
        nombre: "Chorizo Ideal Rica x 3 Porciones | 150 gramos",
        categoria: "embutidos",
        subcategoria: "chorizos",
        descripcion: "Delicioso Chorizo Ideal marca Rica en presentación de 3 porciones (Peso neto 150 gramos), práctico y con gran sabor.",
        imagen: "chorizrica3porciones.jpg"
    },
    {
        id: 801,
        nombre: "Chorizo Español La Vitta x 15 Unidades | 1000 gramos",
        categoria: "embutidos",
        subcategoria: "chorizos",
        descripcion: "Exquisito Chorizo Español marca La Vitta en presentación de 1.000 gramos y 15 unidades, ideal para asados y preparaciones especiales.",
        imagen: "chorizolavilla15.jpg"
    },
    {
        id: 802,
        nombre: "Chorizo Paisa La Vitta x 12 Unidades | 500 gramos",
        categoria: "embutidos",
        subcategoria: "chorizos",
        descripcion: "Tradicional Chorizo Paisa marca La Vitta en presentación de 500 gramos y 12 unidades, con el auténtico sabor antioqueño.",
        imagen: "chorizopaisa12unidades500gramos.jpg"
    },
    {
        id: 803,
        nombre: "Chorizo de Cerdo Chorival | 1200 gramos",
        categoria: "embutidos",
        subcategoria: "chorizos",
        descripcion: "Auténtico Chorizo de Cerdo marca Chorival en presentación de 1.200 gramos, con sabores naturales y frescos ideales para asados.",
        imagen: "chorivaldecerdo1200gramos.jpeg"
    },
    {
        id: 804,
        nombre: "Chorizo de Pollo Chorival x 10 Unidades",
        categoria: "embutidos",
        subcategoria: "chorizos",
        descripcion: "Suave y saludable Chorizo de Pollo marca Chorival en presentación de 10 unidades, sin sabores artificiales y 100% natural.",
        imagen: "chorivalchorizodepolllo10unidades.jpg"
    },
    {
        id: 805,
        nombre: "Chorizo Paisita Sevilla x 6 Unidades | 200 gramos",
        categoria: "embutidos",
        subcategoria: "chorizos",
        descripcion: "Auténtico Chorizo Paisita marca Sevilla en presentación de 6 unidades (Peso Neto 200 gramos), ideal para acompañar tus platos favoritos.",
        imagen: "chorizopaisita6unidades.jpg"
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
        nombre: "Tocineta Ahumada Chorival | 450 gramos",
        categoria: "embutidos",
        subcategoria: "tocinetas",
        descripcion: "Exquisita tocineta ahumada marca Chorival en presentación de 450 gramos, perfecta para darle un toque crujiente y delicioso a tus hamburguesas y recetas.",
        imagen: "tocineta ahumada chorival450gramos.jpg"
    },
    {
        id: 1001,
        nombre: "Tocineta Ahumada Premium La Americanísima | 450 gramos",
        categoria: "embutidos",
        subcategoria: "tocinetas",
        descripcion: "Exclusiva Tocineta Ahumada Premium marca La Americanísima en presentación de 450 gramos, seleccionada para dar máxima calidad y sabor gourmet.",
        imagen: "TOCINETAAUMADAPREMIUN450G.JPG"
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
        id: 1201,
        nombre: "Saborizantes para Alimentos x 60 ml | Carolesen y Sabrimax (Chocolate, Coco, Vainilla Negra y Vainilla Blanca)",
        categoria: "alimentos",
        subcategoria: "saborizantes",
        descripcion: "Saborizantes para alimentos con sabor artificial marcas Carolesen (Chocolate) y Sabrimax de Colorisa (Coco, Vainilla Negra y Vainilla Blanca). Presentación de Cont. Neto 60 ml.",
        imagen: "saborizantesabrimax60ml.jpg"
    },
    {
        id: 1202,
        nombre: "Esencias Saborizantes Levapan x 60 ml | Variedades Coco y Vainilla Caramelo",
        categoria: "alimentos",
        subcategoria: "saborizantes",
        descripcion: "Esencias sabor artificiales marca Levapan en presentación de Cont. Neto: 60 ml. Incluye variedad de Esencia Sabor a Coco y Esencia Sabor a Vainilla Caramelo, perfectas para repostería y preparaciones.",
        imagen: "levapanesencia60mk.jpg"
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
        id: 1299,
        nombre: "Empanadas Vallunas Línea Premium Horneadas Precocidos y Congelados del Valle x 850 g | 10 Porciones",
        categoria: "alimentos",
        subcategoria: "precocidos",
        descripcion: "Empanadas vallunas línea premium horneadas, marca Precocidos y Congelados del Valle. ¡Más carne... mejor sabor...!. Presentación con peso neto de 850 g (10 porciones). Consérvese congelado a -4°C.",
        imagen: "empanadasvallunas850.jpg"
    },
    {
        id: 1300,
        nombre: "Empanadas Vallunas Coctel Mixta Línea Premium Horneadas Precovel S.A.S. x 1.100 g | 25 Porciones",
        categoria: "alimentos",
        subcategoria: "precocidos",
        descripcion: "Empanadas vallunas coctel mixta línea premium horneadas, fabricadas por Precovel S.A.S. ¡Más carne... mejor sabor...!. Presentación con peso neto de 1.100 g (25 porciones). Consérvese congelado a -5°C.",
        imagen: "empanadasvallunas1100g.jpg"
    },
   
    {
        id: 1301,
        nombre: "Empanadas Vallunas Línea Premium Horneadas Precocidos y Congelados del Valle x 2.050 g | 25 Porciones",
        categoria: "alimentos",
        subcategoria: "precocidos",
        descripcion: "Empanadas vallunas línea premium horneadas, marca Precocidos y Congelados del Valle. ¡Más carne... mejor sabor...!. Presentación institucional/familiar con peso neto de 2.050 g (25 porciones). Conservar congelado a -4°C.",
        imagen: "empanadasvallunas2050g.jpg"
    },
   {
        id: 1302,
        nombre: "Dedos con Queso La Fé Congelados x 700 g | 10 Porciones Aprox.",
        categoria: "alimentos",
        subcategoria: "precocidos",
        descripcion: "Dedos con queso congelados marca La Fé Congelados. Presentación de 700 g (10 porciones aprox.). Manténgase congelado.",
        imagen: "dedosconqueso700g.jpg"
    },
    {
        id: 1303,
        nombre: "Hojaldras La Fé Congelados",
        categoria: "alimentos",
        subcategoria: "precocidos",
        descripcion: "Hojaldras congeladas marca La Fé Congelados. Ideales para preparar horneadas o fritas con una textura crujiente y dorada. Manténgase congelado.",
        imagen: "ojaldraslafe.jpg"
    },
    {
        id: 1306,
        nombre: "Maíz Dulce Desgranado Maíz Importado Productos Antojos x 1.000 g | 12 Porciones Aprox.",
        categoria: "alimentos",
        subcategoria: "precocidos",
        descripcion: "Maíz dulce desgranado (maíz importado) congelado, marca Productos Antojos. Presentación de contenido neto 1.000 g (12 porciones aprox.), ideal para preparaciones y maicitos.",
        imagen: "antojosmaizdulce1000g.jpg"
    },
    {
        id: 1307,
        nombre: "Practi Pasta para Empanadas con Separador Indubáez x 500 g | 15 Unidades",
        categoria: "alimentos",
        subcategoria: "precocidos",
        descripcion: "Pasta base para preparar empanadas marca Indubáez con separador (15 unidades, diámetro de 15 cm). Presentación de peso neto 500 g. Mantener en congelación a temperatura menor de 0°C.",
        imagen: "practipasta500g.jpg"
    },
    {
        id: 1308,
        nombre: "Papas Fritas Prefritas Congeladas Bart's Tradition x 2.5 kg | 31 Porciones Aprox.",
        categoria: "alimentos",
        subcategoria: "precocidos",
        descripcion: "Papas fritas prefritas congeladas (prefried frozen fries) marca Bart's Tradition. Presentación institucional / familiar de contenido neto 2.5 kg (5.5 lbs) y aprox. 31 porciones.",
        imagen: "bartstradition.jpg"
    },
    {
        id: 1309,
        nombre: "Harina de Maíz Blanco Precocida P.A.N. x 500 g | 18 Porciones Aprox.",
        categoria: "alimentos",
        subcategoria: "general",
        descripcion: "Harina de maíz blanco precocida (precooked white corn meal) marca P.A.N. Presentación de Contenido Neto 500 g (aprox. 18 porciones). Ideal para preparar arepas y diversas recetas tradicionales.",
        imagen: "arinapan500gramos.jpg"
    },
    {
        id: 1310,
        nombre: "Avena Hojuelas Original Quaker x 115 g | 5 Porciones Aprox.",
        categoria: "alimentos",
        subcategoria: "general",
        descripcion: "Avena en hojuelas original 100% natural marca Quaker. Buena fuente de fibra que contribuye a la digestión. Contenido Neto: 115 g (5 porciones aprox.).",
        imagen: "avenahojuelasoriginal115gramos.jpg"
    },
    {
        id: 1311,
        nombre: "Avena Molida Original Quaker x 115 g | 6 Porciones Aprox.",
        categoria: "alimentos",
        subcategoria: "general",
        descripcion: "Avena molida original 100% natural marca Quaker. Buena fuente de fibra que contribuye a la digestión. Contenido Neto: 115 g (6 porciones aprox.).",
        imagen: "avenamolidaoriginal115gramos.jpg"
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
        descripcion: "Mezcla de azúcar con sabor artificial a cereza para escarchar y decorar bebidas (Presentación de 500 gramos).",
        imagen: "azucarcereza.jpg"
    },
    {
        id: 2102,
        nombre: "Azúcar para michelar Skarcha x 500 gramos | Sandía 🍉",
        categoria: "cocteleria",
        subcategoria: "escarchas",
        descripcion: "Mezcla de azúcar con sabor artificial a sandía para escarchar y decorar bebidas (Presentación de 500 gramos).",
        imagen: "azucarsandia.jpg"
    },
    {
        id: 2103,
        nombre: "Azúcar para michelar Skarcha x 500 gramos | Blueberry 🔵",
        categoria: "cocteleria",
        subcategoria: "escarchas",
        descripcion: "Mezcla de azúcar con sabor artificial a blueberry para escarchar y decorar bebidas (Presentación de 500 gramos).",
        imagen: "azucarbluberry.jpg"
    },
    {
        id: 2104,
        nombre: "Azúcar para michelar Skarcha x 500 gramos | Chicle 🫧",
        categoria: "cocteleria",
        subcategoria: "escarchas",
        descripcion: "Mezcla de azúcar con sabor artificial a chicle para escarchar y decorar bebidas (Presentación de 500 gramos).",
        imagen: "azucarchicle.jpg"
    },
    {
        id: 2105,
        nombre: "Sal Mix para michelar Skarcha x 500 gramos | Maracuyá 🍋",
        categoria: "cocteleria",
        subcategoria: "escarchas",
        descripcion: "Mezcla de sal con sabor artificial a maracuyá para escarchar y decorar bebidas (Presentación de 500 gramos).",
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
        id: 3001,
        nombre: "Yexis x 1,100 gramos | Fresa 🍓",
        categoria: "cocteleria",
        subcategoria: "yexis",
        descripcion: "Caramelo blando en almíbar con sabor artificial a fresa. Presentación de 1.100 g ideal como topping para bubble tea, sodas y frappés.",
        imagen: "yexisfresa.jpg"
    },
    {
        id: 3002,
        nombre: "Yexis x 1,100 gramos | Blue Berry 🔵",
        categoria: "cocteleria",
        subcategoria: "yexis",
        descripcion: "Caramelo blando en almíbar con sabor artificial a blueberry. Presentación de 1.100 g ideal como topping para bubble tea, sodas y frappés.",
        imagen: "yexisblueberry.jpg"
    },
    {
        id: 3003,
        nombre: "Yexis x 1,100 gramos | Lychee 🍚",
        categoria: "cocteleria",
        subcategoria: "yexis",
        descripcion: "Caramelo blando en almíbar con sabor artificial a lychee. Presentación de 1.100 g ideal como topping para bubble tea, sodas y frappés.",
        imagen: "yexislychee.jpg"
    },
    {
        id: 3004,
        nombre: "Yexis x 1,100 gramos | Maracuyá 🍋",
        categoria: "cocteleria",
        subcategoria: "yexis",
        descripcion: "Caramelo blando en almíbar con sabor artificial a maracuyá. Presentación de 1.100 g ideal como topping para bubble tea, sodas y frappés.",
        imagen: "yexismaracuya.jpg"
    },
    {
        id: 3005,
        nombre: "Yexis x 1,100 gramos | Coco 🥥",
        categoria: "cocteleria",
        subcategoria: "yexis",
        descripcion: "Caramelo blando en almíbar con sabor artificial a coco. Presentación de 1.100 g ideal como topping para bubble tea, sodas y frappés.",
        imagen: "yexiscoco.jpg"
    },
    {
        id: 4001,
        nombre: "Caramelos  CandyRanch x 30 Unidades | Sabores Surtidos",
        categoria: "dulces",
        subcategoria: "general",
        descripcion: "Caja de caramelos  con azúcar CandyRanch x 30 unidades. Disponible en variedad de sabores: Mango Biche, Maracuyá, Manzana Verde, Sandía, Maracululo, Mora Azul y Cereza.",
        imagen: "CandyRanchcaramelo.jpg"
    },
    {
        id: 4002,
        nombre: "Goma de Mascar Sandia Bubble Gum Sour x 60 Unidades | Más Dulces",
        categoria: "dulces",
        subcategoria: "general",
        descripcion: "Goma de mascar con sabor artificial a sandía rellena con polvo ácido. Presentación en tarrina con 60 porciones/units (Peso Neto 300 g), marca Más Dulces.",
        imagen: "gomasandia60u.jpg"
    },
    {
        id: 4003,
        nombre: "Gomitas Grissly x 72 g | Variedades Clásica y Splash Ácidos (Colombina)",
        categoria: "dulces",
        subcategoria: "general",
        descripcion: "Deliciosas gomitas sabor a frutas marca Grissly de Colombina en presentación de 72 gramos (4 porciones aprox.). Disponibles en versiones Clásica y Splash Ácidos.",
        imagen: "gomitasgrissly72gramos.jpg"
    },
    {
        id: 4004,
        nombre: "Gomas Franki Trululu x 70 g | Sabor Frutal con Relleno Líquido",
        categoria: "dulces",
        subcategoria: "general",
        descripcion: "Gomas sabor frutal con delicioso relleno líquido, marca Franki Trululu en presentación de 70 gramos (4 porciones aprox. por envase).",
        imagen: "gomastrululufranki70gramos.jpg"
    },
    {
        id: 4005,
        nombre: "Gomitas Trululu Gusanos Ácidos x 100 Unidades | 320 g",
        categoria: "dulces",
        subcategoria: "general",
        descripcion: "Gomas sabor frutal con relleno líquido en forma de gusanos ácidos. Presentación familiar de 100 unidades (Contenido Neto 320 g), marca Trululu.",
        imagen: "gomitastrululugusanos100unidadesacidos302g.jpg"
    },
    {
        id: 4006,
        nombre: "Gomitas Trululu Aros x 100 Unidades | 600 g",
        categoria: "dulces",
        subcategoria: "general",
        descripcion: "Gomitas en forma de aros surtidos en presentación familiar de 100 unidades (Contenido Neto 600 g, porciones por envase aprox. 33), marca Trululu.",
        imagen: "gomitasarostrululus100unidades.jpg"
    },
    {
        id: 4007,
        nombre: "Bocadillo de Guayaba Frutos del Valle x 280 g | 7 Porciones",
        categoria: "dulces",
        subcategoria: "general",
        descripcion: "Tradicional bocadillo de guayaba marca Frutos del Valle en presentación de 280 gramos (7 porciones).",
        imagen: "bocadillodeguallaba28g7porciones.jpg"
    },
    {
        id: 4008,
        nombre: "Cobertura de Chocolate Lucky x 500 g | Variedades Leche y Blanco",
        categoria: "dulces",
        subcategoria: "general",
        descripcion: "Coberturas de chocolate marca Lucky en presentación de 500 g (20 porciones). Disponibles en sabores de Chocolate de Leche y Chocolate Blanco.",
        imagen: "coberturadechocolateleche500g.jpg"
    },
    {
        id: 4009,
        nombre: "Brevas en Almíbar La Coruña x 560 g | Peso Drenado 320 g",
        categoria: "dulces",
        subcategoria: "general",
        descripcion: "Brevas en almíbar (frutas en conserva, variedad brevas) marca La Coruña en presentación de frasco de vidrio. Peso Neto: 560 g, Peso Drenado: 320 g (aprox. 3 porciones por envase). Ideal para postres y acompañamientos.",
        imagen: "brevasenalmibar560.jpg"
    },
    {
        id: 4010,
        nombre: "Duraznos Amarillos en Mitades en Almíbar Frutivita x 800 g | Peso Escurrido 480 g",
        categoria: "dulces",
        subcategoria: "general",
        descripcion: "Duraznos amarillos en mitades en almíbar marca Frutivita (Frutas en almíbar, contiene edulcorantes, sin colorantes ni preservantes). Contenido Neto: 800 g, Peso Escurrido: 480 g (aprox. 6 porciones por envase).",
        imagen: "duraznosamarillos480g.jpg"
    },
    {
        id: 4011,
        nombre: "Cerezas Marrasquino La Coruña | Presentaciones de 500 g y 1.000 g",
        categoria: "dulces",
        subcategoria: "general",
        descripcion: "Cerezas marrasquino en conserva marca La Coruña (frutas en conserva, variedad cerezas en conserva). Disponible en presentación de 500 g (Peso Drenado: 280 g, aprox. 14 porciones) y presentación familiar de 1.000 g (Peso Drenado: 500 g, aprox. 25 porciones).",
        imagen: "lacoruñacerezamarraquito.jpg"
    },
    {
        id: 4012,
        nombre: "Azúcar Pulverizada 5X Especial para Repostería Manuelita x 5 kg | 1000 Porciones",
        categoria: "dulces",
        subcategoria: "general",
        descripcion: "Azúcar pulverizada 5X especial para repostería marca Manuelita. Presentación institucional en costal con Peso Neto de 5 kg (1000 porciones). Ideal para decoraciones, pastelería y repostería.",
        imagen: "azucarpulverizada5kilos.jpg"
    },
    {
        id: 4013,
        nombre: "Arequipe Uso Industrial Cobertura y Relleno San Lorenzo x 1 kg",
        categoria: "dulces",
        subcategoria: "general",
        descripcion: "Arequipe premium de uso industrial, ideal como cobertura y relleno para panadería, pastelería y repostería. Marca Productos Alimenticios San Lorenzo. Presentación en bolsa de 1 kg.",
        imagen: "dulcedearequipe.jpg"
    },
    {
        id: 4014,
        nombre: "Cernido Reina Guayaba Uso Gastronómico Mezval x 1 Kilo",
        categoria: "dulces",
        subcategoria: "general",
        descripcion: "Cernido de guayaba para uso gastronómico, marca Mezval. Presentación doypack con boquilla y un Peso Neto de 1 Kilo. Ideal para preparaciones de repostería.",
        imagen: "dulcedeguayaba1kilo.jpg"
    },
    // ---------------------------------------------------------------
    // PANES
    // ---------------------------------------------------------------
    {
        id: 5001,
        nombre: "Pan Hamburguesa Brioche Junior Pan Valle x 660 g | 16 Porciones Aprox.",
        categoria: "panes",
        subcategoria: "general",
        descripcion: "Pan para hamburguesa estilo brioche Junior marca Pan Valle. ¡Más Rico..., Más Pan...!. Presentación de Peso Neto 660 g (aprox. 16 porciones por empaque). Producto listo para consumo.",
        imagen: "panbriochevalle66gramos.jpg"
    },
    {
        id: 5002,
        nombre: "Pan Angus Pan Valle x 800 g | Pan Brioche con Ajonjolí Blanco y Negro",
        categoria: "panes",
        subcategoria: "general",
        descripcion: "Pan Angus marca Pan Valle S.A.S. Pan brioche especialmente diseñado para usar con tus más jugosas carnes y mejores ingredientes, espolvoreado con ajonjolí blanco y negro. Peso Neto: 800 g. Fabricado en Palmaseca, Cali - Valle.",
        imagen: "panangus800gramos.jpg"
    },
    {
        id: 5003,
        nombre: "Pan Angus Tradicional Liso Pan Valle x 800 g | Pan Brioche para Hamburguesa",
        categoria: "panes",
        subcategoria: "general",
        descripcion: "Pan Angus tradicional liso (sin ajonjolí) marca Pan Valle S.A.S. Pan brioche especialmente diseñado para usar con tus más jugosas carnes y mejores ingredientes. Peso Neto: 800 g. Fabricado en Cali - Valle.",
        imagen: "panangus800gramossinescarcha.jpg"
    },
    {
        id: 5004,
        nombre: "Pan Perro Línea Profesional Pan Valle x 12 Unidades",
        categoria: "panes",
        subcategoria: "general",
        descripcion: "Pan para perro caliente marca Pan Valle, Línea Profesional. Presentación institucional con 12 unidades espolvoreadas con ajonjolí.",
        imagen: "panperro12unidades.jpg"
    },
    {
        id: 5005,
        nombre: "Pan Perro Línea Profesional Pan Valle x 6 Unidades",
        categoria: "panes",
        subcategoria: "general",
        descripcion: "Pan para perro caliente marca Pan Valle, Línea Profesional. Presentación práctica de 6 unidades espolvoreadas con ajonjolí.",
        imagen: "pamperro6unidades.jpg"
    },
    {
        id: 5006,
        nombre: "Dedos de Queso Pan Valle",
        categoria: "panes",
        subcategoria: "general",
        descripcion: "Deliciosos dedos de queso congelados marca Pan Valle en práctico envase transparente institucional con tapa.",
        imagen: "dedosdequesopanballe.jpg"
    },
    {
        id: 5007,
        nombre: "Tostados Tostiricos Mantequilla Pan Valle x 100 g | 6 Unidades",
        categoria: "panes",
        subcategoria: "general",
        descripcion: "Pan tostado sabor a mantequilla Tostados Tostiricos marca Pan Valle. ¡Ricos y Crocanticos!. Sin conservantes. Peso neto 100 g (aprox. 3 porciones / 6 unidades).",
        imagen: "totadostostiricos100gramos.jpg"
    },
    {
        id: 5008,
        nombre: "Mini Pancitos de Mantequilla Pan Valle x 30 Unidades",
        categoria: "panes",
        subcategoria: "general",
        descripcion: "Mini pancitos de mantequilla marca Pan Valle. Presentación familiar o institucional con 30 unidades suaves y esponjosas.",
        imagen: "minipancitos30unidades.jpg"
    },
    {
        id: 5009,
        nombre: "Pan Perro Pan Valle x 900 g | 10 Unidades",
        categoria: "panes",
        subcategoria: "general",
        descripcion: "Pan para perro caliente marca Pan Valle. Presentación familiar con peso neto de 900 g, contiene 10 unidades (aprox. 20 porciones por empaque).",
        imagen: "panperro900gramospanvalle.jpg"
    },
    {
        id: 5010,
        nombre: "Pan Tajado Familiar Pan Valle x 650 g | 22 Porciones Aprox.",
        categoria: "panes",
        subcategoria: "general",
        descripcion: "Pan tajado tradicional familiar marca Pan Valle. Presentación de Peso Neto 650 g (porciones por envase aprox. 22).",
        imagen: "pantajadofamiliar65ogramos.jpg"
    },
    {
        id: 5011,
        nombre: "Pan Perro Brioche Pan Valle x 10 Unidades",
        categoria: "panes",
        subcategoria: "general",
        descripcion: "Pan para perro estilo brioche marca Pan Valle, decorado con ajonjolí blanco y negro. Presentación de 10 unidades.",
        imagen: "panbrioche10unidades.jpg"
    },
    {
        id: 5012,
        nombre: "Pan Perro Brioche Pan Valle x 770 g | 10 Unidades",
        categoria: "panes",
        subcategoria: "general",
        descripcion: "Pan para perro estilo brioche marca Pan Valle con ajonjolí. Presentación institucional de Peso Neto 770 g, contiene 10 unidades.",
        imagen: "panbrioche12unidades.jpg"
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
