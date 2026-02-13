// ===================================
// LANDING PAGE JS - Imperial Love Medellín
// Catálogo con prioridad por categoría + Conversiones Google Ads
// ===================================

// --- DATOS DEL CATÁLOGO COMPLETO ---
const products = [
    // Arreglos pequeños en rosas
    { id: 1, code: "001", category: "Arreglos pequeños en rosas", tags: ["rosas"], name: "Primer Latido", description: "Delicado detalle con 3 rosas frescas que expresan cariño sincero. Perfecto para gestos espontáneos.", price: 31250, image: "assets/catalog/cod_001.webp" },
    { id: 2, code: "002", category: "Arreglos pequeños en rosas", tags: ["rosas"], name: "Gesto Espontáneo", description: "Ramo encantador con 8 rosas envueltas con elegancia. Ideal para sorpresas inesperadas.", price: 50000, image: "assets/catalog/cod_002.webp" },
    { id: 3, code: "003", category: "Arreglos pequeños en rosas", tags: ["rosas"], name: "Dulce Inicio", description: "Bouquet tierno de 8 rosas cuidadosamente seleccionadas. Transmite amor en su forma más pura.", price: 56250, image: "assets/catalog/cod_003.webp" },
    { id: 4, code: "004", category: "Arreglos pequeños en rosas", tags: ["rosas"], name: "Ternura Sincera", description: "Arreglo armonioso con 10 rosas que hablan sin palabras. Perfecto para momentos especiales.", price: 75000, image: "assets/catalog/cod_004.webp" },
    { id: 5, code: "005", category: "Arreglos pequeños en rosas", tags: ["rosas"], name: "Conexión Natural", description: "Hermoso ramo de 10 rosas con presentación sofisticada. Sentimientos profundos con elegancia.", price: 93750, image: "assets/catalog/cod_005.webp" },
    { id: 6, code: "006", category: "Arreglos pequeños en rosas", tags: ["rosas"], name: "Encanto Clásico", description: "Bouquet tradicional con 12 rosas que nunca pasan de moda. Símbolo eterno de amor.", price: 112500, image: "assets/catalog/cod_006.webp" },

    // Combinación de Rosas
    { id: 7, code: "007", category: "Combinación de Rosas", tags: ["rosas"], name: "Fusión Armoniosa", description: "Ramo vibrante de 20 rosas en combinación perfecta de colores. Alegría, amor y buenos deseos.", price: 137500, image: "assets/catalog/cod_007.webp" },
    { id: 8, code: "008", category: "Combinación de Rosas", tags: ["rosas"], name: "Elegancia Mixta", description: "Arreglo sofisticado con 24 rosas en tonos complementarios. Estilo y distinción única.", price: 150000, image: "assets/catalog/cod_008.webp" },
    { id: 9, code: "009", category: "Combinación de Rosas", tags: ["rosas"], name: "Contraste Perfecto", description: "Bouquet equilibrado de 24 rosas con colores contrastantes. Ideal para personalidades únicas.", price: 150000, image: "assets/catalog/cod_009.webp" },
    { id: 10, code: "010", category: "Combinación de Rosas", tags: ["rosas"], name: "Dualidad Romántica", description: "Hermoso conjunto de 24 rosas que combina pasión y delicadeza. Sentimientos profundos.", price: 150000, image: "assets/catalog/cod_010.webp" },
    { id: 11, code: "011", category: "Combinación de Rosas", tags: ["rosas"], name: "Sinfonía de Colores", description: "Arreglo premium con 24 rosas en mezcla cuidadosamente seleccionada. Historia de amor.", price: 162500, image: "assets/catalog/cod_011.webp" },
    { id: 12, code: "012", category: "Combinación de Rosas", tags: ["rosas"], name: "Impacto Dual", description: "Ramo imponente de 48 rosas en combinación espectacular. Huella imborrable en el corazón.", price: 212500, image: "assets/catalog/cod_012.webp" },
    { id: 13, code: "013", category: "Combinación de Rosas", tags: ["rosas"], name: "Abundancia Mixta", description: "Bouquet abundante con 48 rosas en fusión armoniosa de tonos. Sorprender en grande.", price: 225000, image: "assets/catalog/cod_013.webp" },
    { id: 14, code: "014", category: "Combinación de Rosas", tags: ["rosas"], name: "Explosión de Amor", description: "Arreglo espectacular de 48 rosas que desbordan emoción. Declaraciones importantes.", price: 212500, image: "assets/catalog/cod_014.webp" },
    { id: 15, code: "015", category: "Combinación de Rosas", tags: ["rosas"], name: "Grandeza Combinada", description: "Ramo majestuoso con 48 rosas en presentación premium. Amor sin límites.", price: 212500, image: "assets/catalog/cod_015.webp" },

    // Unicolor Rosas
    { id: 17, code: "017", category: "Unicolor Rosas", tags: ["rosas"], name: "Pureza Monocromática", description: "Elegante bouquet de 24 rosas en un solo tono. La simplicidad que habla más fuerte.", price: 125000, image: "assets/catalog/cod_017.webp" },
    { id: 18, code: "018_a", category: "Unicolor Rosas", tags: ["rosas"], name: "Esencia Única", description: "Arreglo sofisticado con 24 rosas del mismo color. Mensaje claro y profundo.", price: 137500, image: "assets/catalog/cod_018_a.webp" },
    { id: 18.1, code: "018_b", category: "Unicolor Rosas", tags: ["rosas"], name: "Monocromo Elegante", description: "Ramo armonioso de 24 rosas unicolor con presentación impecable. Elegancia pura.", price: 137500, image: "assets/catalog/cod_018_b.webp" },
    { id: 19, code: "019", category: "Unicolor Rosas", tags: ["rosas"], name: "Intensidad Unicolor", description: "Bouquet imponente con 48 rosas en tono único. Impacto visual y emocional.", price: 212500, image: "assets/catalog/cod_019.webp" },

    // Rosas Rojas
    { id: 20, code: "020", category: "Rosas Rojas", tags: ["rosas", "rosas rojas"], name: "Pasión Clásica", description: "Ramo tradicional de 24 rosas rojas que simbolizan amor verdadero. Nunca falla.", price: 112500, image: "assets/catalog/cod_020.webp" },
    { id: 21, code: "021", category: "Rosas Rojas", tags: ["rosas", "rosas rojas"], name: "Fuego del Alma", description: "Arreglo intenso con 48 rosas rojas que arden de pasión. Aniversarios memorables.", price: 200000, image: "assets/catalog/cod_021.webp" },
    { id: 22, code: "022", category: "Rosas Rojas", tags: ["rosas", "rosas rojas"], name: "Declaración Intensa", description: "Bouquet poderoso de 60 rosas rojas que no necesitan palabras. Amor sin límites.", price: 262500, image: "assets/catalog/cod_022.webp" },
    { id: 23, code: "023", category: "Rosas Rojas", tags: ["rosas", "rosas rojas"], name: "Amor Desbordante", description: "Ramo espectacular con 72 rosas rojas en presentación premium. Aman en grande.", price: 300000, image: "assets/catalog/cod_023.webp" },
    { id: 24, code: "024", category: "Rosas Rojas", tags: ["rosas", "rosas rojas"], name: "Centenario de Pasión", description: "Arreglo majestuoso de 100 rosas rojas que roban el aliento. Momentos eternos.", price: 431250, image: "assets/catalog/cod_024.webp" },
    { id: 25, code: "025", category: "Rosas Rojas", tags: ["rosas", "rosas rojas"], name: "Océano Rojo", description: "Bouquet monumental con 200 rosas rojas que inundan de amor. Extraordinario.", price: 825000, image: "assets/catalog/cod_025.webp" },
    { id: 26, code: "026", category: "Rosas Rojas", tags: ["rosas", "rosas rojas"], name: "Universo Carmesí", description: "Ramo colosal de 400 rosas rojas. Impactar como nunca antes en la vida.", price: 1500000, image: "assets/catalog/cod_026.webp" },

    // Rosas y Accesorios
    { id: 27, code: "027", category: "ROSAS Y ACCESORIOS", tags: ["rosas", "cumpleaños"], name: "Corona de Ternura", description: "Ramo elegante con 24 rosas y corona decorativa. Detalle que hace sentir especial.", price: 137500, image: "assets/catalog/cod_027.webp" },
    { id: 28, code: "028", category: "ROSAS Y ACCESORIOS", tags: ["rosas"], name: "Mensaje Personalizado", description: "Arreglo romántico de 24 rosas con listón y tu mensaje único.", price: 175000, image: "assets/catalog/cod_028.webp" },
    { id: 29, code: "029", category: "ROSAS Y ACCESORIOS", tags: ["rosas"], name: "Declaración Grande", description: "Bouquet imponente de 48 rosas con listón personalizado premium.", price: 237500, image: "assets/catalog/cod_029.webp" },
    { id: 30, code: "030", category: "ROSAS Y ACCESORIOS", tags: ["rosas", "cumpleaños"], name: "Vuelo de Amor", description: "Ramo con 24 rosas, corona y mariposa decorativa. Amor y transformación.", price: 150000, image: "assets/catalog/cod_030.webp" },
    { id: 31, code: "031", category: "ROSAS Y ACCESORIOS", tags: ["rosas"], name: "Guardián Tierno", description: "Arreglo dulce de 24 rosas con vela decorativa en forma de oso.", price: 162500, image: "assets/catalog/cod_031.webp" },
    { id: 32, code: "032", category: "ROSAS Y ACCESORIOS", tags: ["rosas", "cumpleaños"], name: "Transformación Doble", description: "Bouquet con 24 rosas, corona grande y mariposas delicadas.", price: 150000, image: "assets/catalog/cod_032.webp" },
    { id: 32.1, code: "032_a", category: "ROSAS Y ACCESORIOS", tags: ["rosas", "cumpleaños"], name: "Logro Coronado", description: "Ramo de 24 rosas con corona y birrete decorativo. Éxitos académicos.", price: 150000, image: "assets/catalog/cod_032_a.webp" },
    { id: 33, code: "033", category: "ROSAS Y ACCESORIOS", tags: ["rosas"], name: "Lazo del Corazón", description: "Arreglo con 24 rosas, corona y listón elegante. Amor cuidadosamente expresado.", price: 156250, image: "assets/catalog/cod_033.webp" },
    { id: 34, code: "034", category: "ROSAS Y ACCESORIOS", tags: ["rosas"], name: "Guardián del Amor", description: "Bouquet de 24 rosas con corona, vela de oso y listón personalizado.", price: 212500, image: "assets/catalog/cod_034.webp" },
    { id: 35, code: "035", category: "ROSAS Y ACCESORIOS", tags: ["rosas"], name: "Abrazo Gigante", description: "Ramo abundante de 48 rosas con vela decorativa grande de oso.", price: 237500, image: "assets/catalog/cod_035.webp" },
    { id: 36, code: "036", category: "ROSAS Y ACCESORIOS", tags: ["rosas"], name: "Vuelo Personalizado", description: "Arreglo premium con 48 rosas, corona, mariposas y listón personalizado.", price: 275000, image: "assets/catalog/cod_036.webp" },
    { id: 37, code: "037", category: "ROSAS Y ACCESORIOS", tags: ["rosas"], name: "Dulzura Completa", description: "Bouquet de 48 rosas con deliciosos dulces selectos. Romance y sabor.", price: 287500, image: "assets/catalog/cod_037.webp" },
    { id: 38, code: "038", category: "ROSAS Y ACCESORIOS", tags: ["rosas"], name: "Dulce Transformación", description: "Ramo con 48 rosas, mariposas decorativas y dulces gourmet.", price: 312500, image: "assets/catalog/cod_038.webp" },

    // Lirios y Rosas
    { id: 39, code: "039", category: "Lirios y Rosas", tags: ["lirios", "rosas"], name: "Dúo Delicado", description: "Arreglo con 10 rosas y 3 lirios elegantes. Romance con pureza.", price: 118750, image: "assets/catalog/cod_039.webp" },
    { id: 40, code: "040", category: "Lirios y Rosas", tags: ["lirios", "rosas"], name: "Armonía Dual", description: "Bouquet de 18 rosas y 2 lirios frescos. Amor sereno y profundo.", price: 150000, image: "assets/catalog/cod_040.webp" },
    { id: 41, code: "041", category: "Lirios y Rosas", tags: ["lirios", "rosas"], name: "Equilibrio Natural", description: "Ramo con 20 rosas y 4 lirios majestuosos. Belleza en perfecta proporción.", price: 168750, image: "assets/catalog/cod_041.webp" },
    { id: 42, code: "042", category: "Lirios y Rosas", tags: ["lirios", "rosas"], name: "Fusión Elegante", description: "Arreglo de 24 rosas y 5 lirios aromáticos. Clase y distinción.", price: 200000, image: "assets/catalog/cod_042.webp" },
    { id: 43, code: "043", category: "Lirios y Rosas", tags: ["lirios", "rosas"], name: "Serenidad Abundante", description: "Bouquet con 30 rosas y 3 lirios que transmiten paz.", price: 225000, image: "assets/catalog/cod_043.webp" },
    { id: 44, code: "044", category: "Lirios y Rosas", tags: ["lirios", "rosas"], name: "Explosión Floral", description: "Ramo de 24 rosas y 10 lirios en presentación premium.", price: 237500, image: "assets/catalog/cod_044.webp" },
    { id: 45, code: "045", category: "Lirios y Rosas", tags: ["lirios", "rosas"], name: "Jardín Romántico", description: "Arreglo con 30 rosas y 5 lirios frescos seleccionados.", price: 237500, image: "assets/catalog/cod_045.webp" },
    { id: 46, code: "046", category: "Lirios y Rosas", tags: ["lirios", "rosas"], name: "Jardín Encantado", description: "Bouquet de 30 rosas, 5 lirios y mariposa decorativa.", price: 243750, image: "assets/catalog/cod_046.webp" },

    // Rosas y Girasoles
    { id: 48, code: "048", category: "Rosas y girasoles", tags: ["girasoles", "rosas"], name: "Sol y Pasión", description: "Ramo con 24 rosas y 2 girasoles radiantes. Intensidad y alegría.", price: 175000, image: "assets/catalog/cod_048.webp" },
    { id: 49, code: "049", category: "Rosas y girasoles", tags: ["girasoles", "rosas"], name: "Brillo Múltiple", description: "Arreglo de 24 rosas y 5 girasoles. Amor iluminado por felicidad.", price: 187500, image: "assets/catalog/cod_049.webp" },
    { id: 50, code: "050", category: "Rosas y girasoles", tags: ["girasoles", "rosas"], name: "Estrella Central", description: "Bouquet con 48 rosas y 1 girasol protagonista.", price: 218750, image: "assets/catalog/cod_050.webp" },
    { id: 51, code: "051", category: "Rosas y girasoles", tags: ["girasoles", "rosas"], name: "Sol Imperial", description: "Ramo de 72 rosas y 1 girasol central. Intensidad y luz.", price: 325000, image: "assets/catalog/cod_051.webp" },
    { id: 52, code: "052", category: "Rosas y girasoles", tags: ["girasoles", "rosas"], name: "Centenario Solar", description: "Arreglo con 100 rosas y 1 girasol. Amor grande y alegría eterna.", price: 437500, image: "assets/catalog/cod_052.webp" },
    { id: 53, code: "053", category: "Rosas y girasoles", tags: ["girasoles", "rosas"], name: "Constelación Dorada", description: "Bouquet de 100 rosas y 4 girasoles. Amor sin límites y luz.", price: 450000, image: "assets/catalog/cod_053.webp" },

    // Girasoles
    { id: 54, code: "054", category: "Girasoles", tags: ["girasoles"], name: "Trío de Luz", description: "Arreglo con 3 girasoles frescos y radiantes. Alegría natural.", price: 43750, image: "assets/catalog/cod_054.webp" },
    { id: 55, code: "055", category: "Girasoles", tags: ["girasoles"], name: "Cuarteto Solar", description: "Bouquet de 4 girasoles que transmiten energía positiva.", price: 56250, image: "assets/catalog/cod_055.webp" },
    { id: 56, code: "056", category: "Girasoles", tags: ["girasoles"], name: "Siete Soles", description: "Ramo con 7 girasoles en presentación elegante. Felicidad luminosa.", price: 100000, image: "assets/catalog/cod_056.webp" },
    { id: 57, code: "057", category: "Girasoles", tags: ["girasoles"], name: "Círculo Luminoso", description: "Arreglo de 10 girasoles que irradian alegría desbordante.", price: 125000, image: "assets/catalog/cod_057.webp" },
    { id: 58, code: "058", category: "Girasoles", tags: ["girasoles"], name: "Docena Radiante", description: "Bouquet con 12 girasoles en presentación premium.", price: 143750, image: "assets/catalog/cod_058.webp" },
    { id: 59, code: "059", category: "Girasoles", tags: ["girasoles"], name: "Veinte Rayos", description: "Ramo de 20 girasoles que roban miradas.", price: 237500, image: "assets/catalog/cod_059.webp" },
    { id: 60, code: "060", category: "Girasoles", tags: ["girasoles", "rosas"], name: "Fusión Solar", description: "Arreglo con 5 girasoles y 15 rosas frescas. Alegría y romance.", price: 162500, image: "assets/catalog/cod_060.webp" },
    { id: 61, code: "061", category: "Girasoles", tags: ["girasoles", "rosas"], name: "Mini Explosión", description: "Bouquet de 15 girasoles mini y 5 rosas (temporada). Ternura luminosa.", price: 200000, image: "assets/catalog/cod_061.webp" },
    { id: 62, code: "062", category: "Girasoles", tags: ["girasoles", "rosas"], name: "Mensaje Solar", description: "Ramo con 12 girasoles, 8 rosas y listón personalizado.", price: 212500, image: "assets/catalog/cod_062.webp" },

    // Solitarios
    { id: 63, code: "063", category: "Solitarios", tags: ["rosas"], name: "Único Sentimiento", description: "Una rosa solitaria. Gesto simple pero cargado de significado.", price: 18750, image: "assets/catalog/cod_063.webp" },
    { id: 64, code: "064", category: "Solitarios", tags: ["rosas"], name: "Dulce Gesto", description: "Una rosa con dulce selecto. Romance y sabor en un detalle.", price: 43750, image: "assets/catalog/cod_064.webp" },
    { id: 66, code: "066", category: "Solitarios", tags: ["girasoles"], name: "Sol y Dulzura", description: "Un girasol radiante con 2 dulces gourmet. Alegría y sabor.", price: 56250, image: "assets/catalog/cod_066.webp" },
    { id: 67, code: "067", category: "Solitarios", tags: ["girasoles"], name: "Dúo Luminoso", description: "Dos girasoles con 2 dulces selectos. Luz y dulzura.", price: 62500, image: "assets/catalog/cod_067.webp" },
    { id: 68, code: "068", category: "Solitarios", tags: ["girasoles"], name: "Doble Alegría", description: "Par de girasoles con 2 dulces. Luz y buenos deseos.", price: 68750, image: "assets/catalog/cod_068.webp" },

    // Mezcla de Flores
    { id: 69, code: "069", category: "Mezcla de Flores", tags: ["arreglos"], name: "Jardín Primaveral", description: "Arreglo con hortensias, rosas y margaritas. Frescura natural.", price: 118750, image: "assets/catalog/cod_069.webp" },
    { id: 70, code: "070", category: "Mezcla de Flores", tags: ["girasoles", "arreglos"], name: "Contraste Natural", description: "Bouquet de girasoles, cartuchos y follaje selecto.", price: 112500, image: "assets/catalog/cod_070.webp" },
    { id: 71, code: "071", category: "Mezcla de Flores", tags: ["arreglos"], name: "Frescura Mixta", description: "Ramo con hortensias, rosas y margaritas en armonía.", price: 125000, image: "assets/catalog/cod_071.webp" },
    { id: 72, code: "072", category: "Mezcla de Flores", tags: ["girasoles", "arreglos"], name: "Alegría Variada", description: "Arreglo de margaritas y girasoles radiantes. Felicidad pura.", price: 143750, image: "assets/catalog/cod_072.webp" },
    { id: 73, code: "073", category: "Mezcla de Flores", tags: ["arreglos"], name: "Estrellas del Campo", description: "Bouquet de claveles y estrellas de Belén.", price: 137500, image: "assets/catalog/cod_073.webp" },
    { id: 75, code: "075", category: "Mezcla de Flores", tags: ["rosas", "arreglos"], name: "Fusión Suave", description: "Ramo con rosas y astromelias delicadas. Romance y sutileza.", price: 100000, image: "assets/catalog/cod_075.webp" },
    { id: 75.1, code: "075_a", category: "Mezcla de Flores", tags: ["arreglos"], name: "Ternura Rosada", description: "Arreglo de margaritas rosadas frescas. Amor tierno y puro.", price: 100000, image: "assets/catalog/cod_075_a.webp" },
    { id: 76, code: "076", category: "Mezcla de Flores", tags: ["girasoles", "arreglos"], name: "Campo de Luz", description: "Bouquet de margaritas y girasol. Alegría natural y espontánea.", price: 112500, image: "assets/catalog/cod_076.webp" },
    { id: 76.1, code: "076_a", category: "Mezcla de Flores", tags: ["arreglos"], name: "Cielo Florido", description: "Ramo de margaritas azules únicas. Amor sereno como el cielo.", price: 112500, image: "assets/catalog/cod_076_a.webp" },
    { id: 77, code: "077", category: "Mezcla de Flores", tags: ["girasoles", "rosas", "arreglos"], name: "Trío Vibrante", description: "Arreglo con rosas, gerberas y girasoles. Pasión, alegría y luz.", price: 150000, image: "assets/catalog/cod_077.webp" },

    // Lirios
    { id: 78, code: "078", category: "Lirios", tags: ["lirios"], name: "Siete Elegantes", description: "Bouquet con 7 lirios frescos aromáticos. Pureza y admiración.", price: 125000, image: "assets/catalog/cod_078.webp" },
    { id: 79, code: "079", category: "Lirios", tags: ["lirios"], name: "Pureza Abundante", description: "Ramo de 10 lirios en presentación premium. Elegancia natural.", price: 162500, image: "assets/catalog/cod_079.webp" },
    { id: 80, code: "080", category: "Lirios", tags: ["lirios"], name: "Diez Majestuosos", description: "Arreglo con 10 lirios seleccionados. Máxima distinción floral.", price: 175000, image: "assets/catalog/cod_080.webp" },

    // Bouquets en cascada
    { id: 81, code: "081", category: "Bouquets en cascada", tags: ["rosas", "arreglos"], name: "Cascada Romántica", description: "Bouquet en cascada con 12 rosas. Diseño único que fluye con gracia.", price: 112500, image: "assets/catalog/cod_081.webp" },
    { id: 82, code: "082", category: "Bouquets en cascada", tags: ["rosas", "arreglos"], name: "Fluir del Amor", description: "Arreglo en cascada de 24 rosas. Amor que fluye libre y eterno.", price: 175000, image: "assets/catalog/cod_082.webp" },

    // Base
    { id: 84, code: "084", category: "Base", tags: ["arreglos", "rosas"], name: "Base Clásica", description: "Arreglo de rosas en base elegante. Estilo atemporal.", price: 125000, image: "assets/catalog/cod_084.webp" },
    { id: 85, code: "085", category: "Base", tags: ["arreglos", "rosas"], name: "Elegancia en Base", description: "Diseño sofisticado de rosas en base decorativa premium.", price: 175000, image: "assets/catalog/cod_085.webp" },
    { id: 86, code: "086", category: "Base", tags: ["arreglos", "rosas"], name: "Dulce Sofisticación", description: "Arreglo con rosas y chocolates JP Chanet selectos.", price: 225000, image: "assets/catalog/cod_086.webp" },
    { id: 87, code: "087", category: "Base", tags: ["arreglos", "rosas"], name: "Oro en Base", description: "Diseño de rosas amarillas en base elegante. Amistad y gratitud.", price: 137500, image: "assets/catalog/cod_087.webp" },
    { id: 88, code: "088", category: "Base", tags: ["arreglos", "rosas"], name: "Guardián Dorado", description: "Arreglo de rosas amarillas con vela decorativa de oso.", price: 162500, image: "assets/catalog/cod_088.webp" },
    { id: 89, code: "089", category: "Base", tags: ["arreglos", "rosas"], name: "Dulzura Dorada", description: "Diseño con rosas amarillas y chocolates selectos.", price: 175000, image: "assets/catalog/cod_089.webp" },
    { id: 90, code: "090", category: "Base", tags: ["arreglos"], name: "Esplendor Floral", description: "Arreglo abundante en base premium con flores selectas.", price: 312500, image: "assets/catalog/cod_090.webp" },
    { id: 91, code: "091", category: "Base", tags: ["arreglos"], name: "Grandeza Natural", description: "Diseño majestuoso en base de alto impacto.", price: 375000, image: "assets/catalog/cod_091.webp" },
    { id: 92, code: "092", category: "Base", tags: ["arreglos"], name: "Magnificencia Total", description: "Arreglo espectacular en base elegante con flores premium.", price: 425000, image: "assets/catalog/cod_092.webp" },
    { id: 93, code: "093", category: "Base", tags: ["arreglos"], name: "Jardín Premium", description: "Diseño sofisticado en base con variedad de flores selectas.", price: 287500, image: "assets/catalog/cod_093.webp" },
    { id: 94, code: "094", category: "Base", tags: ["arreglos"], name: "Abundancia Suprema", description: "Arreglo generoso en base decorativa de lujo.", price: 362500, image: "assets/catalog/cod_094.webp" },
    { id: 95, code: "095", category: "Base", tags: ["arreglos"], name: "Opulencia Floral", description: "Diseño lujoso en base premium con flores excepcionales.", price: 387500, image: "assets/catalog/cod_095.webp" },
    { id: 95.1, code: "095_a", category: "Base", tags: ["arreglos"], name: "Lujo Absoluto", description: "Arreglo exclusivo en base de alta gama con flores únicas.", price: 437500, image: "assets/catalog/cod_095_a.webp" },
    { id: 96, code: "096", category: "Base", tags: ["arreglos"], name: "Majestuosidad Pura", description: "Diseño imponente en base espectacular con flores premium.", price: 562500, image: "assets/catalog/cod_096.webp" },
    { id: 97, code: "097", category: "Base", tags: ["arreglos"], name: "Imperio Floral", description: "Arreglo monumental en base lujosa. Impactar y conquistar.", price: 575000, image: "assets/catalog/cod_097.webp" },
    { id: 98, code: "098", category: "Base", tags: ["arreglos"], name: "Elegancia Superior", description: "Diseño sofisticado en base con flores de calidad.", price: 262500, image: "assets/catalog/cod_098.webp" },
    { id: 99, code: "099", category: "Base", tags: ["arreglos"], name: "Sofisticación Media", description: "Arreglo equilibrado en base con flores frescas selectas.", price: 225000, image: "assets/catalog/cod_099.webp" },
    { id: 100, code: "100", category: "Base", tags: ["arreglos"], name: "Distinción Equilibrada", description: "Diseño armonioso en base con flores seleccionadas.", price: 225000, image: "assets/catalog/cod_100.webp" },
    { id: 110, code: "110", category: "Base", tags: ["arreglos"], name: "Base Encantadora", description: "Arreglo delicado en base decorativa con flores frescas.", price: 143750, image: "assets/catalog/cod_110.webp" },
    { id: 111, code: "111", category: "Base", tags: ["arreglos"], name: "Base Elegante", description: "Diseño sofisticado en base con flores de calidad premium.", price: 162500, image: "assets/catalog/cod_111.webp" },
    { id: 112, code: "112", category: "Base", tags: ["arreglos"], name: "Base Distinguida", description: "Arreglo refinado en base decorativa con flores elegidas.", price: 175000, image: "assets/catalog/cod_112.webp" },
    { id: 113, code: "113", category: "Base", tags: ["arreglos"], name: "Base Armoniosa", description: "Diseño equilibrado en base con combinación perfecta.", price: 175000, image: "assets/catalog/cod_113.webp" },
    { id: 114, code: "114", category: "Base", tags: ["arreglos"], name: "Base Premium", description: "Arreglo superior en base elegante con flores selectas.", price: 200000, image: "assets/catalog/cod_114.webp" },
    { id: 115, code: "115", category: "Base", tags: ["arreglos"], name: "Base Sofisticada", description: "Diseño refinado en base decorativa con flores premium.", price: 200000, image: "assets/catalog/cod_115.webp" },
    { id: 116, code: "116", category: "Base", tags: ["arreglos"], name: "Base Superior", description: "Arreglo excepcional en base de lujo con flores selectas.", price: 225000, image: "assets/catalog/cod_116.webp" },
    { id: 117, code: "117", category: "Base", tags: ["arreglos"], name: "Base Abundante", description: "Diseño generoso en base con flores frescas abundantes.", price: 237500, image: "assets/catalog/cod_117.webp" },
    { id: 118, code: "118", category: "Base", tags: ["arreglos"], name: "Base Espectacular", description: "Arreglo imponente en base con flores premium excepcionales.", price: 250000, image: "assets/catalog/cod_118.webp" },
    { id: 119, code: "119", category: "Base", tags: ["arreglos"], name: "Base Magnífica", description: "Diseño majestuoso en base de lujo con flores únicas.", price: 250000, image: "assets/catalog/cod_119.webp" },
    { id: 120, code: "120", category: "Base", tags: ["arreglos"], name: "Base Imponente", description: "Arreglo poderoso en base elegante con flores premium.", price: 237500, image: "assets/catalog/cod_120.webp" },
    { id: 121, code: "121", category: "Base", tags: ["arreglos"], name: "Base Majestuosa", description: "Diseño espectacular en base lujosa con flores excepcionales.", price: 325000, image: "assets/catalog/cod_121.webp" },
    { id: 122, code: "122", category: "Base", tags: ["arreglos"], name: "Base Imperial", description: "Arreglo monumental en base premium con flores únicas.", price: 512500, image: "assets/catalog/cod_122.webp" },

    // Base de Corazones
    { id: 101, code: "101", category: "Base de Corazones", tags: ["arreglos", "rosas", "cumpleaños"], name: "Corazón Delicado", description: "Arreglo romántico en base corazón con flores frescas.", price: 200000, image: "assets/catalog/cod_101.webp" },
    { id: 102, code: "102", category: "Base de Corazones", tags: ["arreglos", "rosas", "cumpleaños"], name: "Amor en Base", description: "Diseño en corazón decorativo con flores selectas.", price: 225000, image: "assets/catalog/cod_102.webp" },
    { id: 103, code: "103", category: "Base de Corazones", tags: ["arreglos", "rosas"], name: "Corazón Clásico", description: "Arreglo tradicional en base corazón con flores elegantes.", price: 200000, image: "assets/catalog/cod_103.webp" },
    { id: 104, code: "104", category: "Base de Corazones", tags: ["arreglos", "rosas"], name: "Corazón Grande", description: "Diseño abundante en base corazón con flores premium.", price: 325000, image: "assets/catalog/cod_104.webp" },
    { id: 105, code: "105", category: "Base de Corazones", tags: ["arreglos", "rosas"], name: "Corazón Supremo", description: "Arreglo espectacular en corazón lujoso con flores excepcionales.", price: 343750, image: "assets/catalog/cod_105.webp" },
    { id: 106, code: "106", category: "Base de Corazones", tags: ["arreglos", "rosas"], name: "Corazón Majestuoso", description: "Diseño imponente en base corazón con variedad premium.", price: 350000, image: "assets/catalog/cod_106.webp" },
    { id: 107, code: "107", category: "Base de Corazones", tags: ["arreglos", "rosas"], name: "Corazón Imperial", description: "Arreglo monumental en corazón elegante con flores únicas.", price: 437500, image: "assets/catalog/cod_107.webp" },
    { id: 108, code: "108", category: "Base de Corazones", tags: ["arreglos", "rosas"], name: "Corazón Eterno", description: "Diseño inolvidable en base corazón con flores premium.", price: 450000, image: "assets/catalog/cod_108.webp" },

    // Anchetas
    { id: 123, code: "123", category: "ANCHETAS", tags: ["arreglos", "cumpleaños"], name: "Ancheta Inicial", description: "Canasta regalo con flores y detalles especiales.", price: 150000, image: "assets/catalog/cod_123.webp" },
    { id: 124, code: "124", category: "ANCHETAS", tags: ["arreglos", "cumpleaños"], name: "Ancheta Encantadora", description: "Cesta decorativa con flores frescas y obsequios selectos.", price: 187500, image: "assets/catalog/cod_124.webp" },
    { id: 125, code: "125", category: "ANCHETAS", tags: ["arreglos", "cumpleaños"], name: "Ancheta Especial", description: "Canasta premium con flores y detalles seleccionados.", price: 200000, image: "assets/catalog/cod_125.webp" },
    { id: 126, code: "126", category: "ANCHETAS", tags: ["arreglos", "cumpleaños"], name: "Ancheta Premium", description: "Cesta elegante con flores y regalos de calidad superior.", price: 225000, image: "assets/catalog/cod_126.webp" },
    { id: 127, code: "127", category: "ANCHETAS", tags: ["arreglos", "cumpleaños"], name: "Ancheta Elegante", description: "Canasta sofisticada con flores premium y obsequios.", price: 225000, image: "assets/catalog/cod_127.webp" },
    { id: 128, code: "128", category: "ANCHETAS", tags: ["arreglos", "cumpleaños"], name: "Ancheta Sofisticada", description: "Cesta de lujo con flores excepcionales y detalles exclusivos.", price: 237500, image: "assets/catalog/cod_128.webp" },
    { id: 129, code: "129", category: "ANCHETAS", tags: ["arreglos", "cumpleaños"], name: "Ancheta Superior", description: "Canasta de alta gama con flores selectas y regalos premium.", price: 250000, image: "assets/catalog/cod_129.webp" },
    { id: 130, code: "130", category: "ANCHETAS", tags: ["arreglos", "cumpleaños"], name: "Ancheta Distinguida", description: "Cesta elegante con flores y obsequios de distinción.", price: 250000, image: "assets/catalog/cod_130.webp" },
    { id: 131, code: "131", category: "ANCHETAS", tags: ["arreglos", "cumpleaños"], name: "Ancheta Exclusiva", description: "Canasta única con flores excepcionales y detalles exclusivos.", price: 250000, image: "assets/catalog/cod_131.webp" },
    { id: 132, code: "132", category: "ANCHETAS", tags: ["arreglos", "cumpleaños"], name: "Ancheta Majestuosa", description: "Cesta espectacular con flores premium y regalos de lujo.", price: 350000, image: "assets/catalog/cod_132.webp" },
    { id: 133, code: "133", category: "ANCHETAS", tags: ["arreglos", "cumpleaños"], name: "Ancheta Imperial", description: "Canasta monumental con flores únicas y obsequios excepcionales.", price: 375000, image: "assets/catalog/cod_133.webp" }
];

// --- VARIABLES GLOBALES ---
let currentLandingFilter = 'priority'; // 'priority' = orden por defecto de la landing
let LANDING_PRIORITY_TAG = ''; // Se establece por cada landing

// --- FORMATEO DE PRECIO ---
function formatCOP(price) {
    return new Intl.NumberFormat('es-CO', {
        style: 'currency', currency: 'COP', minimumFractionDigits: 0
    }).format(price);
}

// --- ORDENAR PRODUCTOS: primero los de la categoría de la landing ---
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
    // Dentro de cada grupo, ordenar por precio ascendente
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
        p.tags && p.tags.includes(filter) || p.category.toLowerCase().includes(filter)
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
                <a href="#" class="btn-order-landing" onclick="orderWA('COD_${product.code}', '${product.name.replace(/'/g, "\\'")}', ${product.price}); return false;">
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
function orderWA(code, name, price) {
    // Google Ads conversion tracking
    if (typeof gtag !== 'undefined') {
        gtag('event', 'conversion', {
            'send_to': 'AW-17951767999/DlVjCIeAg_gbEL_7iPBC',
            'value': price,
            'currency': 'COP'
        });
    }

    // GA4 event
    if (typeof gtag !== 'undefined') {
        gtag('event', 'product_order', {
            'event_category': 'Catalog',
            'event_label': code,
            'value': price,
            'product_name': name
        });
    }

    const formattedPrice = formatCOP(price);
    const message = `Hola, me interesa el ramo *${code} - ${name}* con un precio de ${formattedPrice}. ¿Podrían darme más información?`;
    window.open(`https://wa.me/573243705155?text=${encodeURIComponent(message)}`, '_blank');
}

// --- WHATSAPP GENÉRICO + CONVERSIÓN ---
function contactWA(source, customMsg) {
    // Google Ads conversion
    if (typeof gtag !== 'undefined') {
        gtag('event', 'conversion', {
            'send_to': 'AW-17951767999/DlVjCIeAg_gbEL_7iPBC'
        });
    }

    // GA4 event
    if (typeof gtag !== 'undefined') {
        gtag('event', 'whatsapp_click', {
            'event_category': 'Contact',
            'event_label': source,
            'value': 1
        });
    }

    const msg = customMsg || `Hola, estoy interesado/a en sus arreglos florales. Me podrían dar más información?`;
    window.open(`https://wa.me/573243705155?text=${encodeURIComponent(msg)}`, '_blank');
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
