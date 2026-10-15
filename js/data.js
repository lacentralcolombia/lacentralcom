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
        imagen: "JAMONIDEALRICA400GRAMOS.JPG"
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
