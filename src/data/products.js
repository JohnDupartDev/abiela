// src/data/products.js
export const eBikes = [
    {
        slug: 'huyser-moscow-2-0',
        name: 'Huyser Moscow 2.0',
        fullName: 'Bicicleta Eléctrica Huyser Moscow 2.0',
        category: 'urban',
        price: '$3.900.000',
        priceNumber: 3900000,
        tag: 'Top Ventas',
        inStock: true, // 👈 Nuevo campo
        stockLocation: 'En Stock Zipaquirá', // 👈 Nuevo campo
        description: 'La Huyser Moscow 2.0 es una E-bike urbana potente y robusta, diseñada para quienes buscan mayor rendimiento y carácter en cada trayecto. Combina potencia, seguridad y tecnología avanzada para una conducción firme.',
        image: '/images/e-bike-moscow.jpg',
        variants: [
            { name: 'Naranja', hex: '#ff8c00', img: '/images/e-bike-moscow.jpg' },
            { name: 'Negro', hex: '#000000', img: '/images/e-bike.jpg' },
            { name: 'Rojo', hex: '#e31b23', img: '/images/e-bike-portugal.jpg' },
            { name: 'Verde', hex: '#28a745', img: '/images/e-bike-new-york.jpg' }
        ],
        specs: {
            autonomy: '50 km (Modo ECO)',
            speed: '55 km/h',
            battery: '72V – 20Ah',
            rines: 'Rin 10” de 3.00',
            brakes: 'Doble disco hidráulico sin bandas',
            extras: 'Encendido a distancia, alarma, luces LED'
        },
        seoTitle: 'Huyser Moscow 2.0 | E-Bike Urbana Potente | Abiela',
        seoDesc: 'Compra la Huyser Moscow 2.0 en Abiela. 55km/h y frenos hidráulicos para la mejor experiencia urbana.'
    },
    {
        slug: 'huyser-madrid-litio',
        name: 'Huyser Madrid Litio',
        fullName: 'Bicicleta Eléctrica Huyser Madrid Litio',
        category: 'urban',
        price: '$5.100.000',
        priceNumber: 5100000,
        tag: 'Premium',
        inStock: true,
        stockLocation: 'En Stock Zipaquirá',
        description: 'Inspirada en la energía vibrante de la capital española, combina potencia, diseño compacto y tecnología de litio extraíble para una movilidad urbana dinámica y ágil.',
        image: '/images/e-bike-portugal.jpg',
        variants: [
            { name: 'Verde Bosque', hex: '#2e5a31', img: '/images/e-bike.jpg' },
            { name: 'Crema', hex: '#f5f5dc', img: '/images/madrid-crema.jpg' },
            { name: 'Negro Mate', hex: '#1a1a1a', img: '/images/madrid-negro.jpg' }
        ],
        specs: {
            autonomy: '55 km',
            speed: '60 km/h',
            battery: 'Litio Extraíble 60V – 20Ah',
            rines: 'Rin 10” de 3.00',
            brakes: 'Doble disco hidráulico',
            extras: 'Cargador USB, Bluetooth, Alarma, Claxon'
        },
        seoTitle: 'Huyser Madrid Litio | Movilidad Urbana con Batería Extraíble | Abiela',
        seoDesc: 'La Huyser Madrid Litio ofrece 60km/h y la comodidad de cargar tu batería en cualquier lugar.'
    },
    {
        slug: 'huyser-madrid-std',
        name: 'Huyser Madrid',
        fullName: 'Bicicleta Eléctrica Huyser Madrid',
        category: 'urban',
        price: '$4.100.000',
        priceNumber: 4100000,
        tag: 'Resistente',
        inStock: false, // 👈 Ejemplo: Agotado
        stockLocation: 'Agotado Temporalmente',
        description: 'Diseñada para ofrecer potencia y estabilidad. Una e-bike urbana de alto rendimiento con desempeño sólido, seguridad y confort para el día a día en la ciudad.',
        image: '/images/e-bike-new-york.jpg',
        variants: [
            { name: 'Arena', hex: '#dcb35c', img: '/images/e-bike-portugal.jpg' },
            { name: 'Azul', hex: '#4a90e2', img: '/images/madrid-azul.jpg' },
            { name: 'Verde', hex: '#7ed321', img: '/images/madrid-verde.jpg' }
        ],
        specs: {
            autonomy: '60 km',
            speed: '50 km/h',
            battery: '72V – 20Ah',
            rines: 'Rin 10” de 3.00',
            brakes: 'Doble disco hidráulico',
            extras: 'NFC, Luces LED, Direccionales, Doble amortiguador'
        },
        seoTitle: 'Huyser Madrid | Potencia y Estabilidad Urbana | Abiela',
        seoDesc: 'Conoce la Huyser Madrid estándar en Abiela. Estabilidad y tecnología NFC para tu ruta.'
    },
    {
        slug: 'huyser-portugal-ultramax',
        name: 'Huyser Portugal UltraMax',
        fullName: 'Bicicleta Eléctrica Huyser Portugal UltraMax Litio',
        category: 'compact',
        price: '$3.200.000',
        priceNumber: 3200000,
        tag: 'Ágil',
        inStock: true,
        stockLocation: 'En Stock Zipaquirá',
        description: 'Compacta, práctica y eficiente. Diseñada para moverte con agilidad. Su batería de litio facilita la carga en casa u oficina ofreciendo movilidad sostenible.',
        image: '/images/e-bike-portugal.jpg',
        variants: [
            { name: 'Negro', hex: '#000000', img: '/images/portugal-ultramax.jpg' },
            { name: 'Rosa', hex: '#ffc0cb', img: '/images/portugal-rosa.jpg' },
            { name: 'Naranja', hex: '#ff8c00', img: '/images/portugal-naranja.jpg' }
        ],
        specs: {
            autonomy: '55 km',
            speed: '38 km/h',
            battery: 'Litio Extraíble 48V – 15Ah',
            rines: 'Rin 10” de 3.00',
            brakes: 'Doble freno de banda',
            extras: 'Canasta, Alarma, Bluetooth, Soporte central'
        },
        seoTitle: 'Huyser Portugal UltraMax Litio | Compacta y Sostenible | Abiela',
        seoDesc: 'La UltraMax es la opción más práctica para Zipaquirá. Ligera y fácil de cargar.'
    },
    {
        slug: 'huyser-portugal-2-0',
        name: 'Huyser Portugal 2.0',
        fullName: 'Bicicleta Eléctrica Huyser Portugal 2.0',
        category: 'compact',
        price: '$2.600.000',
        priceNumber: 2600000,
        tag: 'Económica',
        inStock: true,
        stockLocation: 'En Stock Zipaquirá',
        description: 'Urbana compacta y funcional, ideal para desplazamientos diarios. Ágil, económica y fácil de manejar, ofrece una solución práctica de movilidad eléctrica.',
        image: '/images/e-bike-new-york.jpg',
        variants: [
            { name: 'Rojo', hex: '#ff0000', img: '/images/portugal-2.jpg' },
            { name: 'Menta', hex: '#98ff98', img: '/images/portugal-menta.jpg' },
            { name: 'Blanco', hex: '#ffffff', img: '/images/portugal-blanco.jpg' }
        ],
        specs: {
            autonomy: '30 - 40 km',
            speed: '35 km/h',
            battery: '48V – 12Ah',
            rines: 'Rin 10” de 3.00',
            brakes: 'Doble freno de banda',
            extras: 'Batería extraíble, Alarma, Claxon, Luces LED'
        },
        seoTitle: 'Huyser Portugal 2.0 | La E-Bike más accesible | Abiela',
        seoDesc: 'Iníciate en la movilidad eléctrica con la Portugal 2.0. Económica y funcional.'
    },
    {
        slug: 'huyser-new-york',
        name: 'Huyser New York',
        fullName: 'Bicicleta Eléctrica Huyser New York',
        category: 'urban',
        price: '$3.800.000',
        priceNumber: 3800000,
        tag: 'Moderna',
        inStock: true,
        stockLocation: 'En Stock Zipaquirá',
        description: 'Inspirada en el movimiento constante de la Gran Manzana. Versátil, práctica y moderna, perfecta para quienes buscan equilibrio entre rendimiento y eficiencia.',
        image: '/images/new-york.jpg',
        variants: [
            { name: 'Gris Tech', hex: '#b2b2b2', img: '/images/new-york.jpg' },
            { name: 'Azul Deep', hex: '#2c3e50', img: '/images/new-york-blue.jpg' },
            { name: 'Negro', hex: '#000000', img: '/images/new-york-black.jpg' }
        ],
        specs: {
            autonomy: '50 km en modo ECO',
            speed: '50 km/h',
            battery: '72V – 20Ah',
            rines: 'Rin 10” de 3.00',
            brakes: 'Doble freno de disco hidráulico',
            extras: 'Diseño urbano, Alarma, Luces LED Pro'
        },
        seoTitle: 'Huyser New York | Estilo y Potencia Urbana | Abiela',
        seoDesc: 'Recorre la ciudad con el estilo de la Huyser New York. Eficiencia y diseño moderno.'
    },
    {
        slug: 'huyser-roma',
        name: 'Huyser Roma',
        fullName: 'Bicicleta Eléctrica Huyser Roma',
        category: 'vintage',
        price: '$3.500.000',
        priceNumber: 3500000,
        tag: 'Elegante',
        inStock: true,
        stockLocation: 'En Stock Zipaquirá',
        description: 'Combina simplicidad, eficiencia y estilo para tus recorridos diarios. Pensada para quienes valoran la practicidad sin renunciar al carácter histórico y elegante.',
        image: '/images/roma.jpg',
        variants: [
            { name: 'Rojo Ferrari', hex: '#ff0000', img: '/images/roma.jpg' },
            { name: 'Blanco Perla', hex: '#fdfdfd', img: '/images/roma-white.jpg' },
            { name: 'Negro', hex: '#000000', img: '/images/roma-black.jpg' }
        ],
        specs: {
            autonomy: '50 km en modo ECO',
            speed: '35 km/h',
            battery: '60V – 20Ah',
            rines: 'Rin 10” de 3.00',
            brakes: 'Doble freno de banda',
            extras: 'Asiento confort, Luces LED Retro, Alarma'
        },
        seoTitle: 'Huyser Roma | Estilo Clásico Eléctrico | Abiela',
        seoDesc: 'Elegancia eterna en cada trayecto. La Huyser Roma es confort y diseño vintage.'
    },
    {
        slug: 'huyser-new-york-ultramax',
        name: 'Huyser NY UltraMax',
        fullName: 'Bicicleta Eléctrica Huyser New York Ultra Max Litio',
        category: 'urban',
        price: '$5.800.000',
        priceNumber: 5800000,
        tag: 'Bestia',
        inStock: true,
        stockLocation: 'En Stock Zipaquirá',
        description: 'La e-bike más eficiente y rápida del país. Su combinación de potencia y autonomía extendida redefine la movilidad urbana extrema.',
        image: '/images/ny-ultramax.jpg',
        variants: [
            { name: 'Sport (Rojo/Blanco/Azul)', hex: '#ffffff', img: '/images/ny-ultramax.jpg' },
            { name: 'Purple Night', hex: '#4b0082', img: '/images/ny-purple.jpg' },
            { name: 'Negro', hex: '#000000', img: '/images/ny-black.jpg' }
        ],
        specs: {
            autonomy: 'Hasta 90 km en modo ECO',
            speed: '65 km/h',
            battery: 'Litio 64V – 32Ah',
            rines: 'Rin 12',
            brakes: 'Doble freno de disco hidráulico',
            extras: 'Llantas 90/90-12, USB, Proyectores LED, Bluetooth'
        },
        seoTitle: 'Huyser New York Ultra Max Litio | La más rápida | Abiela',
        seoDesc: '90km de autonomía y 65km/h. La Huyser NY Ultra Max es la cima de la tecnología eléctrica.'
    }
];