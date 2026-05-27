// ===================================
// LANDING PAGE JS - Floristeria Toda Ocasion Medellín
// Catálogo con prioridad por categoría + Conversiones Google Ads
// ===================================

// --- DATOS DEL CATÁLOGO COMPLETO ---
const products = [
    { id: 1, code: "001", category: "Anchetas con Flores", tags: ["rosas", "girasoles", "cumpleaños", "arreglos"], name: "Sorpresa Festiva", description: "Arreglo alegre de rosas fucsia y girasoles acompañado de dulces, fruta y mariposa decorativa. Perfecto para cumpleaños llenos de color y sabor.", price: 175000, image: "assets/catalog/foto1.webp" },
    { id: 2, code: "002", category: "Anchetas Snacks", tags: ["rosas", "girasoles", "cumpleaños", "arreglos"], name: "Cumpleaños Dorado", description: "Ancheta de snacks variados con globos de cumpleaños y mini bouquet de rosas con girasol. Combina dulzura, alegría y celebración en un solo regalo.", price: 162500, image: "assets/catalog/foto2.webp" },
    { id: 3, code: "003", category: "Rosas Rojas", tags: ["rosas", "rosas rojas", "arreglos"], name: "Pasión Envuelta", description: "Bouquet elegante de rosas rojas con papel negro y dorado decorado con mariposa. Símbolo clásico de amor presentado con distinción premium.", price: 187500, image: "assets/catalog/foto3.webp" },
    { id: 4, code: "004", category: "Bebés y Recién Nacidos", tags: ["rosas", "arreglos"], name: "Bienvenida Tierna", description: "Bouquet de rosas en tonos pastel con osito de peluche para celebrar la llegada del bebé. Detalle delicado y lleno de ternura para mamá y recién nacido.", price: 218750, image: "assets/catalog/foto4.webp" },
    { id: 5, code: "005", category: "Rosas Rojas", tags: ["rosas", "rosas rojas", "arreglos"], name: "Romance Eterno", description: "Bouquet abundante de rosas rojas con mariposas doradas y aster blanca. Regalo perfecto para aniversarios y declaraciones románticas inolvidables.", price: 256250, image: "assets/catalog/foto5.webp" },
    { id: 6, code: "006", category: "Anchetas con Flores", tags: ["rosas", "girasoles", "arreglos", "chocolates"], name: "Cascada Rosa", description: "Arreglo en cascada con rosas fucsia, girasoles, manzanas verdes y rojas, globo y chocolates. Una explosión de color y sabor para ocasiones especiales.", price: 200000, image: "assets/catalog/foto6.webp" },
    { id: 7, code: "007", category: "Rosas y Girasoles", tags: ["rosas", "girasoles", "arreglos", "chocolates"], name: "Fusión Vibrante", description: "Bouquet espectacular con rosas rojas, rosadas y girasol central rodeado de chocolates. Diseño que combina pasión y alegría en perfecta armonía.", price: 212500, image: "assets/catalog/foto7.webp" },
    { id: 8, code: "008", category: "Rosas Premium", tags: ["rosas", "arreglos"], name: "Corona de Reina", description: "Bouquet sofisticado de rosas blancas y rosadas con corona plateada y mariposas. Perfecto para princesas que merecen sentirse como reinas.", price: 287500, image: "assets/catalog/foto8.webp" },
    { id: 9, code: "009", category: "Anchetas con Flores", tags: ["rosas", "girasoles", "arreglos", "chocolates"], name: "Sol y Pasión Frutal", description: "Arreglo grande de girasoles, rosas rojas con manzanas, chocolates y globo de Feliz Día. Ancheta perfecta para regalar alegría y dulzura.", price: 193750, image: "assets/catalog/foto9.webp" },
    { id: 10, code: "010", category: "Combinación de Rosas", tags: ["rosas", "arreglos"], name: "Jardín Encantado", description: "Bouquet romántico de rosas fucsia, blancas y crema con aster lila y mariposa dorada. Diseño tierno ideal para sorprender con elegancia natural.", price: 162500, image: "assets/catalog/foto10.webp" },
    { id: 11, code: "011", category: "Rosas y Girasoles", tags: ["rosas", "girasoles", "arreglos"], name: "Sol Apasionado", description: "Bouquet circular de girasoles centrales rodeados de rosas rojas y mariposa decorativa. Combina la calidez del sol con la intensidad del amor.", price: 206250, image: "assets/catalog/foto11.webp" },
    { id: 12, code: "012", category: "Anchetas con Flores", tags: ["rosas", "girasoles", "arreglos", "chocolates"], name: "Festejo Completo", description: "Arreglo majestuoso de rosas rojas y girasoles con peluche, globo de corazón y chocolates. Para celebraciones que merecen ser inolvidables.", price: 262500, image: "assets/catalog/foto12.webp" },
    { id: 13, code: "013", category: "Rosas Rojas", tags: ["rosas", "rosas rojas", "cumpleaños", "arreglos"], name: "Clásico Cumpleaños", description: "Bouquet tradicional de rosas rojas con gypsophila y dedicatoria personalizada. La opción más elegante para celebrar fechas especiales.", price: 112500, image: "assets/catalog/foto13.webp" },
    { id: 14, code: "014", category: "Girasoles", tags: ["rosas", "girasoles", "arreglos"], name: "Rayos de Sol", description: "Bouquet de girasoles frescos con toque de rosas rojas y mariposa decorativa. Transmite alegría, energía positiva y luz en cada pétalo.", price: 106250, image: "assets/catalog/foto14.webp" },
    { id: 15, code: "015", category: "Anchetas con Flores", tags: ["rosas", "girasoles", "arreglos", "chocolates"], name: "Doble Sorpresa", description: "Ancheta de oso, dulces y chocolates acompañada de bouquet de flores variadas con girasol. Doble regalo para conquistar el corazón.", price: 206250, image: "assets/catalog/foto15.webp" },
    { id: 16, code: "016", category: "Arreglos Especiales", tags: ["rosas", "girasoles", "arreglos"], name: "Amor Imperial", description: "Arreglo imponente de rosas rojas, girasoles, ave del paraíso, osito y globo Te Amo. Diseño exclusivo para declaraciones de amor profundas.", price: 262500, image: "assets/catalog/foto16.webp" },
    { id: 17, code: "017", category: "Girasoles", tags: ["rosas", "girasoles", "arreglos"], name: "Docena Solar", description: "Bouquet abundante de girasoles frescos con helechos y mariposa decorativa. Perfecto para iluminar el día de quien lo recibe.", price: 181250, image: "assets/catalog/foto17.webp" },
    { id: 18, code: "018", category: "Rosas con Chocolates", tags: ["rosas", "arreglos", "chocolates"], name: "Tesoro Dorado", description: "Bouquet de rosas rojas con caja de Ferrero Rocher al centro y mariposa decorativa. Combina romance y sabor en presentación elegante negra.", price: 237500, image: "assets/catalog/foto18.webp" },
    { id: 19, code: "019", category: "Arreglos Especiales", tags: ["rosas", "girasoles", "arreglos"], name: "Trópico Vibrante", description: "Arreglo grande con girasoles, rosas rojas y aves del paraíso acompañado de globo Te Quiero. Para celebraciones que necesitan presencia imponente.", price: 231250, image: "assets/catalog/foto19.webp" },
    { id: 20, code: "020", category: "Rosas y Girasoles", tags: ["rosas", "girasoles", "arreglos"], name: "Mariposas Doradas", description: "Bouquet circular de girasoles y rosas rosadas con múltiples mariposas decorativas. Diseño romántico y delicado para ocasiones especiales.", price: 231250, image: "assets/catalog/foto20.webp" },
    { id: 21, code: "021", category: "Arreglos Fúnebres", tags: ["rosas", "arreglos"], name: "Paz Blanca", description: "Arreglo majestuoso de rosas blancas, lirios y margaritas en base de madera. Expresa condolencias con elegancia y respeto absoluto.", price: 312500, image: "assets/catalog/foto21.webp" },
    { id: 22, code: "022", category: "Grados", tags: ["rosas", "arreglos"], name: "Logro Coronado", description: "Bouquet de rosas rojas con birrete negro y mariposas doradas para celebrar grados. El regalo perfecto para quienes alcanzan sus metas académicas.", price: 225000, image: "assets/catalog/foto22.webp" },
    { id: 23, code: "023", category: "Grados", tags: ["rosas", "arreglos"], name: "Oso Graduado", description: "Bouquet en tonos rojo y crema con osito graduado y banda Lo lograste. Detalle especial para quienes culminan una etapa académica importante.", price: 231250, image: "assets/catalog/foto23.webp" },
    { id: 24, code: "024", category: "Grados", tags: ["rosas", "arreglos"], name: "Grado Lila", description: "Bouquet pastel de rosas rosadas y crema con birrete morado y aster lila. Celebra los logros con elegancia y suavidad inigualable.", price: 168750, image: "assets/catalog/foto24.webp" },
    { id: 25, code: "025", category: "Desayunos Sorpresa", tags: ["rosas", "girasoles", "arreglos", "chocolates"], name: "Desayuno Romántico", description: "Caja desayuno con arreglo de rosas rojas, girasoles, frutas, yogurt y chocolates más globo de corazón. Ideal para sorprender desde temprano.", price: 212500, image: "assets/catalog/foto25.webp" },
    { id: 26, code: "026", category: "Arreglos Especiales", tags: ["rosas", "girasoles", "arreglos"], name: "Pirámide Tropical", description: "Arreglo monumental de girasoles, rosas fucsia, ave del paraíso, manzanas y uvas. Diseño impactante para celebraciones de gran escala.", price: 312500, image: "assets/catalog/foto26.webp" },
    { id: 27, code: "027", category: "Rosas Premium", tags: ["rosas", "arreglos"], name: "Panda Enamorado", description: "Bouquet abundante de rosas rojas con panda de peluche Loves y globo rojo. Detalle adorable y romántico para conquistar corazones.", price: 312500, image: "assets/catalog/foto27.webp" },
    { id: 28, code: "028", category: "Rosas Rosadas", tags: ["rosas", "arreglos"], name: "Ternura Rosa", description: "Bouquet delicado de rosas rosadas con gypsophila en empaque crema. Transmite amor tierno y sentimientos suaves con elegancia natural.", price: 150000, image: "assets/catalog/foto28.webp" },
    { id: 29, code: "029", category: "Arreglos Especiales", tags: ["rosas", "arreglos"], name: "Blanco Festivo", description: "Arreglo grande de rosas blancas y crema con panda, globo y ave del paraíso. Combinación elegante para celebraciones inolvidables.", price: 287500, image: "assets/catalog/foto29.webp" },
    { id: 30, code: "030", category: "Arreglos Fúnebres", tags: ["rosas", "arreglos"], name: "Despedida Serena", description: "Arreglo fúnebre de rosas blancas, hortensias, rosas pastel y gladiolos. Expresa respeto y serenidad en momentos de dolor.", price: 325000, image: "assets/catalog/foto30.webp" },
    { id: 31, code: "031", category: "Arreglos Especiales", tags: ["rosas", "girasoles", "arreglos"], name: "Triángulo Floral", description: "Arreglo triangular de rosas blancas, rosadas y girasoles con lazo blanco. Diseño armonioso ideal para ocasiones formales o expresar admiración.", price: 325000, image: "assets/catalog/foto31.webp" },
    { id: 32, code: "032", category: "Anchetas con Flores", tags: ["rosas", "girasoles", "arreglos"], name: "Cascada de Amor", description: "Arreglo en cascada de rosas fucsia, girasoles y rosas blancas con globo Te Amo. Romántico y abundante para sorprender en grande.", price: 206250, image: "assets/catalog/foto32.webp" },
    { id: 33, code: "033", category: "Bouquets de Chocolates", tags: ["rosas", "arreglos", "chocolates"], name: "Festival Chocolatero", description: "Bouquet exclusivo de chocolates surtidos (KitKat, Hersheys, Twix, Ferrero) con toque de rosas. Regalo irresistible para amantes del chocolate.", price: 337500, image: "assets/catalog/foto33.webp" },
    { id: 34, code: "034", category: "Arreglos Especiales", tags: ["rosas", "girasoles", "cumpleaños", "arreglos", "chocolates"], name: "Domo de Pasión", description: "Arreglo abundante de rosas rojas y girasoles con chocolates Hersheys y globo de cumpleaños. Para celebraciones espectaculares de gran impacto.", price: 306250, image: "assets/catalog/foto34.webp" },
    { id: 35, code: "035", category: "Anchetas con Flores", tags: ["rosas", "girasoles", "arreglos", "chocolates"], name: "Día de Mamá", description: "Arreglo con girasoles, rosas rojas, uvas, manzanas y chocolates más globo Te Amo Mamá. Regalo perfecto para el día más importante.", price: 312500, image: "assets/catalog/foto35.webp" },
    { id: 36, code: "036", category: "Anchetas con Flores", tags: ["rosas", "girasoles", "arreglos", "chocolates"], name: "Pirámide Festiva", description: "Arreglo piramidal de rosas rojas, girasoles, ave del paraíso, chocolates y manzana. Diseño elegante para celebrar momentos importantes.", price: 206250, image: "assets/catalog/foto36.webp" },
    { id: 37, code: "037", category: "Caja de Corazón", tags: ["rosas", "arreglos", "chocolates"], name: "Corazón Ferrero", description: "Caja en forma de corazón con rosas rojas y bombones Ferrero Rocher. Detalle exquisito que une romance y sabor en presentación premium.", price: 325000, image: "assets/catalog/foto37.webp" },
    { id: 38, code: "038", category: "Arreglos Fúnebres", tags: ["rosas", "arreglos"], name: "Sinfonía Naranja", description: "Arreglo fúnebre alto de rosas naranjas, crisantemos blancos y heliconia. Diseño elegante para ofrendas y condolencias respetuosas.", price: 231250, image: "assets/catalog/foto38.webp" },
    { id: 39, code: "039", category: "Caja de Corazón", tags: ["rosas", "arreglos", "chocolates"], name: "Corazón Kinder", description: "Caja corazón con rosas rojas en forma de corazón y chocolates Kinder Bueno. Detalle dulce y romántico para enamorar todos los sentidos.", price: 300000, image: "assets/catalog/foto39.webp" },
    { id: 40, code: "040", category: "Rosas Rojas", tags: ["rosas", "rosas rojas", "arreglos"], name: "Ramo Cilíndrico", description: "Bouquet de rosas rojas alineadas en filas con empaque blanco y moño rosa-rojo. Diseño clásico y ordenado que nunca falla.", price: 150000, image: "assets/catalog/foto40.webp" },
    { id: 41, code: "041", category: "Rosas con Chocolates", tags: ["rosas", "arreglos", "chocolates"], name: "Mármol Rocher", description: "Bouquet de rosas rojas con caja de Ferrero Rocher y papel mármol negro dorado. Elegancia sofisticada para regalos premium.", price: 200000, image: "assets/catalog/foto41.webp" },
    { id: 42, code: "042", category: "Desayunos Sorpresa", tags: ["rosas", "cumpleaños", "arreglos"], name: "Mesa Romántica", description: "Bandeja con arreglo de rosas rojas, vino, postres y globos Te Amo y Feliz Cumple. Sorprende con una experiencia completa de desayuno.", price: 337500, image: "assets/catalog/foto42.webp" },
    { id: 43, code: "043", category: "Rosas con Chocolates", tags: ["rosas", "arreglos", "chocolates"], name: "Rosas Ferrero Corazón", description: "Bouquet de rosas rojas con caja Ferrero Rocher en forma de corazón. Combina romance clásico con dulzura premium en cada detalle.", price: 187500, image: "assets/catalog/foto43.webp" },
    { id: 44, code: "044", category: "Rosas Rosadas", tags: ["rosas", "arreglos"], name: "Sinfonía Rosa", description: "Bouquet de rosas rosadas y claveles en empaque fucsia con moño violeta. Diseño femenino y delicado lleno de ternura.", price: 150000, image: "assets/catalog/foto44.webp" },
    { id: 45, code: "045", category: "Anchetas con Flores", tags: ["rosas", "girasoles", "arreglos"], name: "Oso Enamorado", description: "Arreglo de rosas rojas con osito Love, girasol superior y globo Te Amo. Detalle adorable que conquista en cualquier ocasión.", price: 175000, image: "assets/catalog/foto45.webp" },
    { id: 46, code: "046", category: "Rosas Premium", tags: ["rosas", "arreglos"], name: "Corona de Perlas", description: "Bouquet exclusivo de rosas rojas con corona de perlas y mariposas doradas. Diseño regio para sorprender a quien merece lo mejor.", price: 287500, image: "assets/catalog/foto46.webp" },
    { id: 47, code: "047", category: "Arreglos Fúnebres", tags: ["rosas", "girasoles", "arreglos"], name: "Cristo Blanco", description: "Arreglo fúnebre alto de rosas blancas con crucifijo, ave del paraíso y girasol. Expresión solemne de fe y respeto en momentos difíciles.", price: 262500, image: "assets/catalog/foto47.webp" },
    { id: 48, code: "048", category: "Anchetas Combo", tags: ["rosas", "cumpleaños", "arreglos"], name: "Combo Cumpleañero", description: "Bouquet de rosas rojas más ancheta con globo Happy Birthday, panda, dulces y manzanas. Doble sorpresa para celebrar cumpleaños memorables.", price: 187500, image: "assets/catalog/foto48.webp" },
    { id: 49, code: "049", category: "Arreglos Especiales", tags: ["rosas", "girasoles", "arreglos", "chocolates"], name: "Champagne Floral", description: "Arreglo abundante de rosas rojas y girasoles con botella de champagne, chocolates y globo Feliz Día. Para brindis y celebraciones especiales.", price: 287500, image: "assets/catalog/foto49.webp" },
    { id: 50, code: "050", category: "Girasoles", tags: ["rosas", "girasoles", "arreglos"], name: "Sol Amarillo", description: "Bouquet de girasoles y rosas amarillas en empaque dorado y crema. Diseño radiante que transmite amistad y buenos deseos.", price: 150000, image: "assets/catalog/foto50.webp" },
    { id: 51, code: "051", category: "Desayunos Sorpresa", tags: ["rosas", "arreglos"], name: "Desayuno Postre", description: "Bandeja con bouquet de rosas rojas, torta, malvaviscos, jugos y globos Te Amo. Desayuno romántico cargado de dulzura y detalle.", price: 200000, image: "assets/catalog/foto51.webp" },
    { id: 52, code: "052", category: "Rosas Rojas", tags: ["rosas", "rosas rojas", "cumpleaños", "arreglos"], name: "Cumpleaños Clásico", description: "Bouquet vertical de rosas rojas en empaque negro con gypsophila y globo Feliz Cumpleaños. Diseño tradicional y siempre acertado.", price: 162500, image: "assets/catalog/foto52.webp" },
    { id: 53, code: "053", category: "Rosas Blancas", tags: ["rosas", "arreglos"], name: "Pureza Rosada", description: "Bouquet delicado de rosas blancas con gypsophila y mariposa dorada en empaque rosa. Transmite pureza, paz y sentimientos sinceros.", price: 150000, image: "assets/catalog/foto53.webp" },
    { id: 54, code: "054", category: "Girasoles", tags: ["rosas", "girasoles", "arreglos"], name: "Mini Solar", description: "Bouquet compacto de girasoles frescos en empaque crema con mensaje cariñoso. Detalle económico y radiante para alegrar el día.", price: 93750, image: "assets/catalog/foto54.webp" },
    { id: 55, code: "055", category: "Anchetas con Flores", tags: ["rosas", "girasoles", "cumpleaños", "arreglos"], name: "Cumple Frutal", description: "Arreglo de rosas rojas y girasoles con frutas frescas, dulces y globo Happy Birthday. Ancheta completa para celebraciones festivas.", price: 193750, image: "assets/catalog/foto55.webp" },
    { id: 56, code: "056", category: "Cajas de Rosas", tags: ["rosas", "arreglos"], name: "Caja Sombrero", description: "Caja sombrero negra con rosas rojas y gypsophila, dedicatoria personalizada y mariposa decorativa. Diseño premium y atemporal.", price: 175000, image: "assets/catalog/foto56.webp" },
    { id: 57, code: "057", category: "Anchetas con Flores", tags: ["rosas", "girasoles", "arreglos", "chocolates"], name: "Cascada Pastel", description: "Arreglo cascada de rosas pastel y crema con girasoles, osito, uvas y chocolates. Diseño abundante y romántico con muchos detalles.", price: 300000, image: "assets/catalog/foto57.webp" },
    { id: 58, code: "058", category: "Arreglos Especiales", tags: ["rosas", "girasoles", "arreglos"], name: "Día Mamá Tropical", description: "Arreglo de rosas rojas, ave del paraíso, girasol y frutas con globo Feliz Día Mamá. Regalo especial para honrar a las madres.", price: 231250, image: "assets/catalog/foto58.webp" },
    { id: 59, code: "059", category: "Rosas Rosadas", tags: ["rosas", "arreglos"], name: "Romance Pastel", description: "Bouquet de rosas rosadas y blancas con gypsophila en empaque rosa con borde dorado. Diseño romántico y elegante para enamorar.", price: 175000, image: "assets/catalog/foto59.webp" },
    { id: 60, code: "060", category: "Rosas con Chocolates", tags: ["rosas", "arreglos", "chocolates"], name: "Corazón Rocher", description: "Bouquet circular de rosas rojas con caja Ferrero Rocher en forma de corazón y mariposa. Combinación perfecta de amor y sabor.", price: 275000, image: "assets/catalog/foto60.webp" },
    { id: 61, code: "061", category: "Rosas y Girasoles", tags: ["rosas", "girasoles", "arreglos"], name: "Mixto Festivo", description: "Arreglo de rosas rojas y girasoles con globo Feliz Día y base azul. Diseño alegre para celebraciones llenas de color y energía.", price: 181250, image: "assets/catalog/foto61.webp" },
    { id: 62, code: "062", category: "Anchetas Snacks", tags: ["cumpleaños", "arreglos"], name: "Cumple Saludable", description: "Ancheta con frutas, snacks, jugos, papas y globos de cumpleaños. Opción equilibrada para sorprender con sabor y nutrición.", price: 106250, image: "assets/catalog/foto62.webp" },
    { id: 63, code: "063", category: "Anchetas Combo", tags: ["rosas", "cumpleaños", "arreglos"], name: "Doble Cumpleaños", description: "Ancheta de dulces con globos más bouquet de rosas rojas y rosadas. Combo doble lleno de color y dulzura para celebrar.", price: 175000, image: "assets/catalog/foto63.webp" },
    { id: 64, code: "064", category: "Anchetas Snacks", tags: ["cumpleaños", "arreglos", "chocolates"], name: "Cerveza y Frutas", description: "Ancheta con cervezas Corona, frutas frescas, chocolates y globos de cumpleaños. Ideal para él en su día especial.", price: 175000, image: "assets/catalog/foto64.webp" },
    { id: 65, code: "065", category: "Cajas de Rosas", tags: ["rosas", "arreglos", "chocolates"], name: "Caja Premium Ferrero", description: "Caja negra cilíndrica con rosas rojas, gypsophila y caja Ferrero Rocher dorada. Diseño sofisticado para ocasiones muy especiales.", price: 218750, image: "assets/catalog/foto65.webp" },
    { id: 66, code: "066", category: "Anchetas con Flores", tags: ["rosas", "girasoles", "arreglos"], name: "Pirámide Frutal", description: "Arreglo piramidal de rosas rojas, girasoles, ave del paraíso, uvas y manzanas con moño amarillo. Diseño espectacular y abundante.", price: 231250, image: "assets/catalog/foto66.webp" },
];

// --- VARIABLES GLOBALES ---
let currentLandingFilter = 'priority';
let LANDING_PRIORITY_TAG = '';

// --- FORMATEO DE PRECIO ---
function formatCOP(price) {
    return new Intl.NumberFormat('es-CO', {
        style: 'currency', currency: 'COP', minimumFractionDigits: 0
    }).format(price);
}

// --- ORDENAR PRODUCTOS: primero los de la categoría de la landing, luego el resto.
// Dentro de cada grupo se ordena por precio ASCENDENTE (menor a mayor).
function getSortedProducts(priorityTag) {
    const priority = [];
    const rest = [];
    products.forEach(p => {
        if (p.tags && p.tags.includes(priorityTag)) {
            priority.push(p);
        } else {
            rest.push(p);
        }
    });
    priority.sort((a, b) => a.price - b.price);
    rest.sort((a, b) => a.price - b.price);
    return [...priority, ...rest];
}

// --- FILTRAR PRODUCTOS ---
function getFilteredProducts(filter, priorityTag) {
    if (filter === 'priority' || filter === 'all') {
        return getSortedProducts(priorityTag);
    }
    return products.filter(p =>
        (p.tags && p.tags.includes(filter)) || p.category.toLowerCase().includes(filter)
    ).sort((a, b) => a.price - b.price);
}

// --- CREAR TARJETA DE PRODUCTO ---
function createCard(product) {
    const price = formatCOP(product.price);
    const div = document.createElement('div');
    div.className = 'product-card-landing';
    div.innerHTML = `
        <div class="product-img-wrap" onclick="openLB('../${product.image}', 'COD_${product.code} - ${product.name}', '${price}')">
            <img src="../${product.image}" alt="${product.name} - Flores a domicilio Medellín" loading="lazy">
            <span class="product-code-badge">COD_${product.code}</span>
        </div>
        <div class="product-body">
            <h3>${product.name}</h3>
            <p class="desc">${product.description}</p>
            <div class="product-footer-landing">
                <div class="price-block">
                    <span class="label">Precio</span>
                    <span class="price">${price}</span>
                </div>
                <a href="#" class="btn-order-landing" onclick="orderWA('COD_${product.code}', '${product.name.replace(/'/g, "\\'")}', ${product.price}, '${product.image}'); return false;">
                    🛒 Pedir
                </a>
            </div>
        </div>
    `;
    return div;
}

// --- RENDER CATÁLOGO ---
function renderCatalog(filter) {
    const grid = document.getElementById('landingProductsGrid');
    const counter = document.getElementById('landingResultsCount');
    if (!grid) return;

    grid.innerHTML = '';
    const filtered = getFilteredProducts(filter || currentLandingFilter, LANDING_PRIORITY_TAG);

    if (counter) {
        counter.innerHTML = `Mostrando <strong>${filtered.length}</strong> productos`;
    }

    filtered.forEach(p => grid.appendChild(createCard(p)));
}

// --- FILTRAR ---
function filterLanding(filter, el) {
    currentLandingFilter = filter;
    document.querySelectorAll('.filter-btn-landing').forEach(b => b.classList.remove('active'));
    if (el) el.classList.add('active');
    renderCatalog(filter);
}

// --- WHATSAPP ORDER + GOOGLE ADS CONVERSION ---
// Envía mensaje a WhatsApp con código, nombre, precio y URL absoluta de la foto
function orderWA(code, name, price, image) {
    if (typeof gtag !== 'undefined') {
        gtag('event', 'conversion', {
            'send_to': 'AW-18193290564/6qQPCNLlpLQcEMSqnuND',
            'value': price,
            'currency': 'COP'
        });
    }

    if (typeof gtag !== 'undefined') {
        gtag('event', 'product_order', {
            'event_category': 'Catalog',
            'event_label': code,
            'value': price,
            'product_name': name
        });
    }

    const formattedPrice = formatCOP(price);

    // Construir URL absoluta de la foto (las landings están en /landing-pages/, las imágenes son 'assets/catalog/...')
    let photoLine = '';
    if (image) {
        try {
            const photoUrl = new URL('../' + image, document.baseURI).href;
            photoLine = `\nFoto: ${photoUrl}`;
        } catch (e) {
            photoLine = `\nFoto: ${image}`;
        }
    }

    const message = `Hola, me interesa el ramo *${code} - ${name}* con un precio de ${formattedPrice}. ¿Podrían darme más información?${photoLine}`;
    window.open(`https://wa.me/573148624244?text=${encodeURIComponent(message)}`, '_blank');
}

// --- WHATSAPP GENÉRICO + CONVERSIÓN ---
function contactWA(source, customMsg) {
    if (typeof gtag !== 'undefined') {
        gtag('event', 'conversion', {
            'send_to': 'AW-18193290564/6qQPCNLlpLQcEMSqnuND'
        });
    }

    if (typeof gtag !== 'undefined') {
        gtag('event', 'whatsapp_click', {
            'event_category': 'Contact',
            'event_label': source,
            'value': 1
        });
    }

    const msg = customMsg || `Hola, estoy interesado/a en sus arreglos florales. Me podrían dar más información?`;
    window.open(`https://wa.me/573148624244?text=${encodeURIComponent(msg)}`, '_blank');
}

// --- LIGHTBOX ---
function openLB(img, title, price) {
    const lb = document.getElementById('landingLightbox');
    if (!lb) return;
    document.getElementById('lbImg').src = img;
    document.getElementById('lbTitle').textContent = title;
    document.getElementById('lbPrice').textContent = price;
    lb.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeLB() {
    const lb = document.getElementById('landingLightbox');
    if (!lb) return;
    lb.classList.remove('active');
    document.body.style.overflow = '';
}

document.addEventListener('keydown', e => { if (e.key === 'Escape') closeLB(); });

// --- INIT ---
document.addEventListener('DOMContentLoaded', function() {
    renderCatalog('priority');
});
