/**
 * Base de datos organizada de ensayos con sus códigos, nombres y documentos normativos
 */
window.ensayosDB = {
  // Ensayos de Suelos (S)
  Suelos: {
    S001: {
      nombre: "Ensayo para determinar el contenido de humedad de suelos y rocas, con base en la masa",
      normativo1: "NTC 1495:2013",
      normativo2: "INV E 122:2013"
    },
    S002: {
      nombre: "Determinación del límite líquido, del límite plástico y del índice de plasticidad de los suelos cohesivos",
      normativo1: "NTC 4630:1999 (Método A)",
      normativo2: "INV E 125:2013 (Método A) INV E 126:2013"
    },
    S003: {
      nombre: "Límites de Atterberg (no líquido - no plástico)",
      normativo1: "NTC 4630:1999",
      normativo2: ""
    },
    S004: {
      nombre: "Factores de contracción de suelos por medio del método de mercurio",
      normativo1: "NTC 1503:2001",
      normativo2: ""
    },
    S005: {
      nombre: "Determinación de la resistencia a la compresión inconfinada de suelos cohesivos",
      normativo1: "NTC 1527:2000",
      normativo2: "INV E 152:2013"
    },
    S006: {
      nombre: "Compresión cíclica (suelos)",
      normativo1: "NTC 1527:2000",
      normativo2: ""
    },
    S007: {
      nombre: "Determinación del peso unitario de muestras irregulares (método parafinado) y muestras regulares",
      normativo1: "MÉTODO ISRM-2007, Capítulo 4, Pgs. 83, 86 y 87; ASTM D 7263:2021",
      normativo2: ""
    },
    S008: {
      nombre: "Determinación de la gravedad específica de las partículas sólidas de los suelos y del llenante mineral, empleando un picnómetro con agua",
      normativo1: "INV E-128:2013",
      normativo2: ""
    },
    S009: {
      nombre: "Ensayo para determinar la granulometría por tamizado con lavado sobre Tamiz 200 (recebos)",
      normativo1: "NTC 1522:1999",
      normativo2: ""
    },
    S010: {
      nombre: "Ensayo para determinar la granulometría por tamizado sobre tamiz 200 en muestras pequeñas",
      normativo1: "NTC 1522:1999",
      normativo2: ""
    },
    S011: {
      nombre: "Determinación por lavado del material que pasa el tamiz 75 μm (No. 200) en agregados minerales (contenido de finos)",
      normativo1: "NTC 78:2019",
      normativo2: "INV E 214:2013"
    },
    S012: {
      nombre: "Determinación de los tamaños de las partículas de los suelos (hidrometría)",
      normativo1: "INV E-123:2013",
      normativo2: ""
    },
    S013: {
      nombre: "Resistencia con penetrómetro o veleta de laboratorio",
      normativo1: "-",
      normativo2: ""
    },
    S014: {
      nombre: "Determinación de las propiedades de consolidación unidimensional de los suelos (rápida, método B)",
      normativo1: "NTC 1967:2000",
      normativo2: ""
    },
    S015: {
      nombre: "Determinación de las propiedades de consolidación unidimensional de los suelos (rápida con rebote intermedio)",
      normativo1: "NTC 1967:2000",
      normativo2: ""
    },
    S016: {
      nombre: "Determinación de las propiedades de consolidación unidimensional de los suelos (lenta con descarga, método A)",
      normativo1: "NTC 1967:2000",
      normativo2: ""
    },
    S017: {
      nombre: "Determinación de las propiedades de consolidación unidimensional de los suelos (cohesivos con doble ciclo de carga)",
      normativo1: "NTC 1967:2000",
      normativo2: ""
    },
    S018: {
      nombre: "Medida del potencial de colapso de un suelo parcialmente saturado",
      normativo1: "INV E-157:2013",
      normativo2: ""
    },
    S019: {
      nombre: "Determinación del coeficiente de permeabilidad mediante un método de cabeza constante para el flujo laminar de agua a través de suelos granulares",
      normativo1: "INV E-130:2013",
      normativo2: ""
    },
    S019A: {
      nombre: "Determinación de permeabilidad suelo cohesivo (cámara triaxial)",
      normativo1: "ASTM D-5084:2010",
      normativo2: ""
    },
    S020: {
      nombre: "Dispersividad (Pin Hole Test)",
      normativo1: "ASTM D4647/D4647M:2013",
      normativo2: ""
    },
    S021: {
      nombre: "Método para medir el potencial de asentamiento o expansión unidimensional de suelos cohesivos (expansión controlada en consolidómetro, Método C)",
      normativo1: "INV E-173:2007 Método C",
      normativo2: ""
    },
    S022: {
      nombre: "Método para medir el potencial de asentamiento o expansión unidimensional de suelos cohesivos (expansión libre en consolidómetro, Método A)",
      normativo1: "INV E-173:2007 Método A",
      normativo2: ""
    },
    S023: {
      nombre: "Determinación del potencial de cambio volumétrico de un suelo empleando el aparato de Lambe",
      normativo1: "INV E-120:2013",
      normativo2: ""
    },
    S024: {
      nombre: "Expansión libre en probeta",
      normativo1: "INV E-132:2013",
      normativo2: ""
    },
    S025: {
      nombre: "CBR de suelos compactados en el laboratorio y sobre muestra inalterada (sin inmersión)",
      normativo1: "INV E 148:2013",
      normativo2: ""
    },
    S026: {
      nombre: "CBR de suelos compactados en el laboratorio y sobre muestra inalterada (con y sin inmersión)",
      normativo1: "INV E 148:2013",
      normativo2: ""
    },
    S027: {
      nombre: "Toma de muestras para CBR inalterado (mínimo por dos tomas, no incluye apique ni transporte)",
      normativo1: "-",
      normativo2: ""
    },
    S028: {
      nombre: "Método de ensayo para CBR (California Bearing Ratio) de suelos compactados en laboratorio (CBR Método I, incluye Proctor)",
      normativo1: "NTC 2122:2013",
      normativo2: "INV E 148:2013"
    },
    S029: {
      nombre: "Relación de soporte del suelo en laboratorio, suelos cohesivos (CBR Método II, requiere Proctor)",
      normativo1: "NTC 2122:2013",
      normativo2: ""
    },
    S030: {
      nombre: "Determinación del contenido de materia orgánica (calcinación)",
      normativo1: "INV E-121:2013",
      normativo2: ""
    },
    S031: {
      nombre: "Determinación de corte directo de suelos bajo condiciones consolidadas y drenadas en arcillas y/o arenas (tres puntos, tiempo de falla hasta 2 horas, requiere esfuerzos del cliente o autorización)",
      normativo1: "NTC 1917:2000",
      normativo2: ""
    },
    S032: {
      nombre: "Determinación de corte directo de suelos bajo condiciones consolidadas y drenadas en suelo cohesivo (tres puntos, tiempo de falla 3 horas, requiere esfuerzos del cliente o autorización)",
      normativo1: "NTC 1917:2000",
      normativo2: ""
    },
    S033: {
      nombre: "Determinación de corte directo de suelos bajo condiciones consolidadas y drenadas (tres puntos, tiempo de falla 5 horas, requiere esfuerzos del cliente o autorización)",
      normativo1: "NTC 1917:2000",
      normativo2: ""
    },
    S034: {
      nombre: "Determinación de corte directo de suelos bajo condiciones consolidadas y drenadas, corte directo CD pico y residual (tiempo de falla 5 horas, requiere esfuerzos del cliente o autorización)",
      normativo1: "NTC 1917:2000",
      normativo2: ""
    },
    S035: {
      nombre: "Relaciones de humedad - peso unitario seco en los suelos (Proctor modificado + 2 gravedades específicas + gradación + 2 humedades, mín. 80 kg de material representativo, métodos B y C)",
      normativo1: "INV E-142:2013",
      normativo2: ""
    },
    S035A: {
      nombre: "Relaciones de humedad - peso unitario seco en los suelos (Proctor modificado, Método A)",
      normativo1: "INV E-142:2013",
      normativo2: ""
    },
    S036: {
      nombre: "Relaciones de humedad - peso unitario seco en los suelos (Proctor estándar + 2 gravedades específicas + gradación + 2 humedades, mín. 80 kg de material representativo, métodos B y C)",
      normativo1: "INV E-142:2013",
      normativo2: ""
    },
    S036A: {
      nombre: "Relaciones de humedad - peso unitario seco en los suelos (Proctor estándar, Método A)",
      normativo1: "INV E-141:2013",
      normativo2: ""
    },
    S037: {
      nombre: "Compactación Harvard miniatura",
      normativo1: "-",
      normativo2: ""
    },
    S038: {
      nombre: "Determinación de la densidad y el peso unitario en terreno (método del cono de arena, mínimo 5 ensayos por visita a campo, no incluye Proctor ni transporte, valor unitario)",
      normativo1: "NTC 1667:2002",
      normativo2: ""
    },
    S039: {
      nombre: "Preparación de muestras para compresión y/o corte a partir de bloques",
      normativo1: "-",
      normativo2: ""
    },
    S040: {
      nombre: "pH de los suelos",
      normativo1: "INV E-131:2013",
      normativo2: ""
    },
    S041: {
      nombre: "Ensayo de compresión triaxial sobre suelos cohesivos (prueba no consolidada no drenada, UU, valor para 1 probeta)",
      normativo1: "INV E-153:2013",
      normativo2: ""
    },
    S042: {
      nombre: "Ensayo de compresión triaxial sobre suelos cohesivos (prueba consolidada no drenada, CU, valor para 3 probetas con medición de presión de poros)",
      normativo1: "INV E-153:2013",
      normativo2: ""
    },
    S043Sub: {
      nombre: "Compresión triaxial estática, consolidado - drenado - CD (valor para 3 probetas)",
      normativo1: "ASTM D 7181:2011",
      normativo2: ""
    },
    S044Sub: {
      nombre: "Compresión triaxial cíclica - TC (1 probeta, incluye saturación y consolidación, corroborar precio con subcontratista)",
      normativo1: "ASTM D-3999:1991",
      normativo2: ""
    },
    S045: {
      nombre: "Compactación de una probeta de suelo cemento",
      normativo1: "INV E 613:2013",
      normativo2: ""
    },
    S046: {
      nombre: "Resistencia a la compresión de cilindros moldeados de suelo - cemento (valor para 4 probetas)",
      normativo1: "INV E 614:2013",
      normativo2: ""
    },
    S047: {
      nombre: "Diseño de suelo cemento por resistencia (con tres porcentajes de cemento)",
      normativo1: "INV E 613:2013; INV E 614:2013",
      normativo2: ""
    },
    S048: {
      nombre: "Diseño de suelo cemento (por durabilidad)",
      normativo1: "INV E 613:2013; INV E 612:2013",
      normativo2: ""
    },
    S049: {
      nombre: "Compactación de probeta suelo cemento en obra (valor para mínimo 4, no incluye transporte)",
      normativo1: "INV E 613:2013",
      normativo2: ""
    },
    S050: {
      nombre: "Densidad relativa (3 densidades mínimas, 3 densidades máximas)",
      normativo1: "-",
      normativo2: ""
    },
    S051Sub: {
      nombre: "Calidad del suelo, determinación del azufre disponible (corroborar precio con subcontratista)",
      normativo1: "NTC 5402:2006",
      normativo2: ""
    },
    S052Sub: {
      nombre: "Contenido de cloruros solubles en agua que hay en el suelo (corroborar precio con subcontratista)",
      normativo1: "AASHTO T291:2022 o equivalente",
      normativo2: ""
    },
    S053Sub: {
      nombre: "Contenido de sulfatos solubles en agua que hay en un suelo (corroborar precio con subcontratista)",
      normativo1: "UNE 103201:2019 o equivalente",
      normativo2: ""
    },
    S054Sub: {
      nombre: "Contenido de carbonato en los suelos (corroborar precio con subcontratista)",
      normativo1: "UNE 103200:2021 o equivalente",
      normativo2: ""
    },
    S055Sub: {
      nombre: "Contenido de nitratos en suelos (corroborar precio con subcontratista)",
      normativo1: "UNE-ISO/TS 14256-1:2007",
      normativo2: ""
    },
    S056Sub: {
      nombre: "Determinación del nitrógeno amoniacal y nitrógeno nítrico (corroborar precio con subcontratista)",
      normativo1: "NTC 5595:2008",
      normativo2: ""
    },
    S057Sub: {
      nombre: "Determinación del contenido de sales solubles de un suelo (corroborar precio con subcontratista)",
      normativo1: "INV E 158:2013; NLT 114:1999",
      normativo2: ""
    },
    S058: {
      nombre: "Down Hole (según profundidad)",
      normativo1: "-",
      normativo2: ""
    },
    S059: {
      nombre: "Resistividad eléctrica del suelo (en campo)",
      normativo1: "-",
      normativo2: ""
    },
    S059A: {
      nombre: "Resistividad eléctrica del suelo (en laboratorio)",
      normativo1: "-",
      normativo2: ""
    },
    S060Sub: {
      nombre: "Método de ensayo estándar para módulo y amortiguamiento de suelos por el método de columna resonante",
      normativo1: "ASTM D 4015:2021",
      normativo2: ""
    },
    S061Sub: {
      nombre: "Determinación de la velocidad de onda de corte y el módulo de corte inicial en muestras de suelo utilizando elementos de flexión (ensayo Bender Element)",
      normativo1: "ASTM D8295:2019",
      normativo2: ""
    }
  },

  // Ensayos de Agregados (A)
  Agregados: {
    A001: {
      nombre: "Índices de aplanamiento y de alargamiento de los agregados para carreteras (requiere gradación)",
      normativo1: "INV E-230:2013",
      normativo2: ""
    },
    A001A: {
      nombre: "Proporción de partículas planas y alargadas en agregados gruesos (definir relación, generalmente 1:5, requiere gradación)",
      normativo1: "INV E-240:2013",
      normativo2: ""
    },
    A002: {
      nombre: "Equivalente de arena de suelos y agregados finos",
      normativo1: "INV E-133:2013",
      normativo2: ""
    },
    A003: {
      nombre: "Densidad, densidad relativa (gravedad específica) y absorción del agregado fino",
      normativo1: "INV E-222:2013",
      normativo2: ""
    },
    A004: {
      nombre: "Densidad, densidad relativa (gravedad específica) y absorción del agregado grueso",
      normativo1: "INV E-223:2013",
      normativo2: ""
    },
    A005: {
      nombre: "Porcentaje de partículas fracturadas en un agregado grueso (caras fracturadas)",
      normativo1: "INV E-227:2013",
      normativo2: ""
    },
    A006: {
      nombre: "Presencia de impurezas orgánicas en arenas usadas para la preparación de morteros o concretos (colorimetría)",
      normativo1: "INV E 212:2013 (Método vidrios de colores de referencia)",
      normativo2: ""
    },
    A007: {
      nombre: "Determinación de la resistencia al desgaste por abrasión e impacto de agregados gruesos menor de 37,5 mm, utilizando la máquina de Los Ángeles (sin trituración)",
      normativo1: "NTC 93:2012",
      normativo2: "INV E-219:2013"
    },
    A008: {
      nombre: "Determinación de la resistencia al desgaste por abrasión e impacto de agregados gruesos mayores de 19 mm, utilizando la máquina de Los Ángeles (con trituración)",
      normativo1: "NTC 98:2019",
      normativo2: "INV E-218:2013"
    },
    A009: {
      nombre: "Determinación de la densidad volumétrica (masa unitaria) y vacíos en agregados",
      normativo1: "NTC 92:2019",
      normativo2: ""
    },
    A010: {
      nombre: "Solidez de los agregados frente a la acción de soluciones de sulfato de sodio o de magnesio (definir tipo de solución, requiere gradación)",
      normativo1: "INV E 220:2013",
      normativo2: ""
    },
    A011: {
      nombre: "Determinación del valor de azul de metileno",
      normativo1: "UNE-EN 933-9:2010+A1:2013",
      normativo2: ""
    },
    A011A: {
      nombre: "Determinación del valor de azul de metileno",
      normativo1: "INV E 235:2013",
      normativo2: ""
    },
    A012: {
      nombre: "Determinación del valor de 10 % de finos (requiere mínimo 18 kg, pasa tamiz 1/2\", retiene 3/8\")",
      normativo1: "INV E-224:2013",
      normativo2: ""
    },
    A013: {
      nombre: "Determinación de la resistencia del agregado grueso a la degradación por abrasión, utilizando el aparato Micro-Deval",
      normativo1: "INV E-238:2013",
      normativo2: ""
    },
    A014: {
      nombre: "Determinación de terrones de arcilla y partículas deleznables en los agregados (requiere gradación)",
      normativo1: "INV E-211:2013",
      normativo2: ""
    },
    A015: {
      nombre: "Análisis granulométrico de los agregados grueso y fino",
      normativo1: "INV E-213:2013",
      normativo2: "NTC 77:2018"
    },
    A016: {
      nombre: "Determinación del contenido de vacíos en agregados finos no compactados (influenciado por forma de las partículas, textura superficial y granulometría, angularidad de finos, método A o C)",
      normativo1: "INV E 239:2013",
      normativo2: ""
    },
    A016A: {
      nombre: "Determinación del contenido de vacíos en agregados finos no compactados (influenciado por forma de las partículas, textura superficial y granulometría, angularidad de finos, método B)",
      normativo1: "INV E 239:2013",
      normativo2: ""
    },
    A017: {
      nombre: "Determinación de la limpieza superficial de las partículas de agregado grueso",
      normativo1: "INV-237:2013",
      normativo2: ""
    },
    A018: {
      nombre: "Determinación de la resistencia al desgaste por abrasión e impacto de agregados gruesos mayores de 19 mm, utilizando la máquina de Los Ángeles (100, 500 revoluciones en seco y saturado a 500 revoluciones, sin trituración)",
      normativo1: "NTC-93:2013 (INV E 219:2013)",
      normativo2: "NTC-98:2019 (INV E 218:2013)"
    },
    A018A: {
      nombre: "Determinación de la resistencia al desgaste por abrasión e impacto de agregados gruesos menor de 37,5 mm, utilizando la máquina de Los Ángeles (100, 500 revoluciones en seco y saturado a 500 revoluciones, con trituración)",
      normativo1: "NTC-93:2013 (INV E 219:2013)",
      normativo2: "NTC-98:2019 (INV E 218:2013)"
    },
    A019: {
      nombre: "Cantidad de partículas livianas en un agregado pétreo",
      normativo1: "INV E 221:2013",
      normativo2: ""
    },
    A020: {
      nombre: "Cambio volumétrico",
      normativo1: "-",
      normativo2: ""
    },
    A021: {
      nombre: "Acompañamiento técnico para toma de muestras (2 horas)",
      normativo1: "-",
      normativo2: ""
    },
    A022: {
      nombre: "Trituración de muestras (según cantidad)",
      normativo1: "-",
      normativo2: ""
    },
    A023: {
      nombre: "Coeficiente de pulimiento acelerado",
      normativo1: "INV E 232:2013",
      normativo2: ""
    },
    A024: {
      nombre: "Concentración crítica del llenante mineral",
      normativo1: "INV-745:2013",
      normativo2: ""
    },
    A025Sub: {
      nombre: "Determinación de la reactividad potencial álcali-sílice de agregados (método químico)",
      normativo1: "INV E-234:2013",
      normativo2: ""
    },
    A026Sub: {
      nombre: "Determinación del contenido de materia orgánica oxidable de un suelo por el método del permanganato potásico",
      normativo1: "UNE 103204:2019",
      normativo2: ""
    },
    A027Sub: {
      nombre: "Determinación del contenido de azufre en los agregados pétreos",
      normativo1: "INV E-233:2013",
      normativo2: ""
    },
    A028Sub: {
      nombre: "Componente de RCD Composición de AR",
      normativo1: "UNE-EN 933-11",
      normativo2: ""
    },
    A029Sub: {
      nombre: "Determinación del módulo resiliente de suelos y agregados",
      normativo1: "INV E-156:2013",
      normativo2: ""
    }
  },

  // Ensayos de Rocas (R)
  Rocas: {
    R001: {
      nombre: "Compresión simple o uniaxial en núcleo de roca con deformímetros eléctricos (método D, incluye preparación de muestras, con 2 deformímetros eléctricos por ensayo)",
      normativo1: "ASTM D 7012:14 e1",
      normativo2: ""
    },
    R002: {
      nombre: "Determinación de la resistencia a la compresión de rocas (sin medir deformación axial, incluye preparación de muestras)",
      normativo1: "ASTM D 7012:14 e1 Método C",
      normativo2: ""
    },
    R002A: {
      nombre: "Compresión simple o uniaxial en núcleo de roca método C, midiendo deformación axial con LVDT (incluye preparación de muestras)",
      normativo1: "ASTM D 7012:14 e1",
      normativo2: ""
    },
    R003: {
      nombre: "Triaxial con módulos elásticos - celda Hoek (3 puntos, método B, con deformímetros eléctricos, incluye preparación de muestras, con 6 deformímetros eléctricos por ensayo)",
      normativo1: "ASTM D 7012:14 e1",
      normativo2: ""
    },
    R003A: {
      nombre: "Compresión triaxial método A con medición de resistencia residual (1 punto, con 2 deformímetros eléctricos por ensayo)",
      normativo1: "ASTM D 7012:14 e1",
      normativo2: ""
    },
    R004: {
      nombre: "Determinación de la resistencia a la tracción de muestras de núcleo de roca intactas (incluye corte de especímenes)",
      normativo1: "ASTM D 3967",
      normativo2: ""
    },
    R005: {
      nombre: "Determinación de la resistencia a la carga puntual de las rocas",
      normativo1: "Método ISRM:2007, Capítulo 8, Pgs. 164 a 177",
      normativo2: ""
    },
    R006: {
      nombre: "Rotura de granos (tres granos)",
      normativo1: "-",
      normativo2: ""
    },
    R007: {
      nombre: "Gravedad específica y absorción de las rocas",
      normativo1: "Método ISRM:2007, Capítulo 4, Pgs. 91 y 92, Numeral 1.2.2",
      normativo2: ""
    },
    R008: {
      nombre: "Determinación del índice de desleimiento y durabilidad de lulitas y otras rocas débiles",
      normativo1: "INV E 236:2013",
      normativo2: ""
    },
    R009: {
      nombre: "Preparación de muestras para corte directo y/o compresión",
      normativo1: "-",
      normativo2: ""
    },
    R010: {
      nombre: "Determinación del peso unitario de muestras irregulares (método parafinado) y muestras regulares",
      normativo1: "Método ISRM:2007, Capítulo 4, Pgs. 83, 86 y 87; ASTM D 7263:2021",
      normativo2: ""
    },
    R011: {
      nombre: "Bloque deslizante",
      normativo1: "-",
      normativo2: ""
    },
    R012: {
      nombre: "Determinación de velocidades de ultrasonido en rocas",
      normativo1: "ASTM D 2845:2008 (Retirado: 2017)",
      normativo2: ""
    },
    R012A: {
      nombre: "Velocidad de onda de compresión (Vp), velocidad de onda de corte (Vs) y cálculo de relación de Poisson (n)",
      normativo1: "ASTM D 2845:2008 (Retirado: 2017)",
      normativo2: ""
    },
    R013: {
      nombre: "Determinación de la resistencia al corte de las rocas por diaclasa o plano de discontinuidad (incluye preparación de muestras)",
      normativo1: "Método ISRM:2007, Capítulo 14, Parte III, Pgs. 254 a 263",
      normativo2: ""
    },
    R013A: {
      nombre: "Corte directo en roca bajo fuerza normal constante, muestra intacta (incluye preparación de muestras)",
      normativo1: "ASTM D 5607:2008",
      normativo2: ""
    },
    R014: {
      nombre: "Extracción de núcleos de roca Ø 2\" a partir de un bloque",
      normativo1: "-",
      normativo2: ""
    },
    R015: {
      nombre: "Porosidad en rocas",
      normativo1: "Método ISRM:2007",
      normativo2: ""
    },
    R016: {
      nombre: "Ensayo para determinar el contenido de humedad en rocas",
      normativo1: "NTC 1495:2013",
      normativo2: ""
    },
    R017: {
      nombre: "Índice de dureza con martillo Schmidt",
      normativo1: "Método ISRM:2007",
      normativo2: ""
    },
    R018: {
      nombre: "Trituración de muestras (según cantidad)",
      normativo1: "-",
      normativo2: ""
    },
    R019: {
      nombre: "Ensayo de abrasividad 'Cerchar'",
      normativo1: "ASTM D 7625:2010",
      normativo2: ""
    },
    R020: {
      nombre: "Índice de rugosidad JRC",
      normativo1: "-",
      normativo2: ""
    },
    R021: {
      nombre: "Determinación de las características dispersivas en suelos arcillosos mediante la prueba de la miga (crumb test)",
      normativo1: "-",
      normativo2: ""
    }
  },

  // Ensayos de Pavimentos (P)
  Pavimentos: {
    P001: {
      nombre: "Extracción cuantitativa del asfalto en mezclas para pavimentos",
      normativo1: "INV E 732:2013 - Método A",
      normativo2: ""
    },
    P002: {
      nombre: "Análisis granulométrico de los agregados extraídos de mezclas asfálticas (requiere extracción)",
      normativo1: "INV E 782:2013",
      normativo2: ""
    },
    P003: {
      nombre: "Gravedad específica Bulk y densidad de mezclas asfálticas compactadas no absorbentes empleando especímenes saturados y superficialmente secos (valor para núcleos o briquetas)",
      normativo1: "INV E 733:2013",
      normativo2: ""
    },
    P003A: {
      nombre: "Gravedad específica Bulk y densidad de mezclas asfálticas compactadas absorbentes empleando especímenes recubiertos con una película de parafina",
      normativo1: "INV E-734:2013",
      normativo2: ""
    },
    P004: {
      nombre: "Elaboración y compactación de probetas (valor para 4 briquetas) para estabilidad Marshall",
      normativo1: "INV E 748:2013",
      normativo2: ""
    },
    P005: {
      nombre: "Estabilidad y flujo de mezclas asfálticas en caliente empleando el equipo de Marshall (valor para 4 briquetas, incluye gravedad específica Bulk, densidad)",
      normativo1: "INV E 748:2013",
      normativo2: ""
    },
    P006: {
      nombre: "Diseño de estabilidad Marshall (incluye ensayos para dos agregados: un equivalente de arena, un desgaste, tres gradaciones de agregados, 18 compactaciones de probetas, 18 estabilidad y flujo, una gravedad específica de finos y una de gruesos, seis RICE)",
      normativo1: "INV E 748:2013",
      normativo2: ""
    },
    P007: {
      nombre: "Adherencia en bandeja",
      normativo1: "INV E-740:2013",
      normativo2: ""
    },
    P007A: {
      nombre: "Adhesividad de los ligantes bituminosos a los agregados finos (método Riedel-Weber)",
      normativo1: "INV E-774:2013",
      normativo2: ""
    },
    P008: {
      nombre: "Extracción de un núcleo de pavimento asfáltico de diámetro = 4 pulgadas",
      normativo1: "-",
      normativo2: ""
    },
    P009: {
      nombre: "Viga Benkelman doble",
      normativo1: "INV E 795:2013",
      normativo2: ""
    },
    P010: {
      nombre: "Evaluación a la susceptibilidad al agua de las mezclas asfálticas utilizando la prueba de tracción indirecta (6 briquetas, compactación, curado y falla)",
      normativo1: "INV E 725:2013",
      normativo2: ""
    },
    P011: {
      nombre: "Gravedad específica máxima de mezclas asfálticas para pavimentos (RICE)",
      normativo1: "INV E 735:2013",
      normativo2: ""
    },
    P012: {
      nombre: "Extracción de una panela asfáltica, con cortadora de disco",
      normativo1: "-",
      normativo2: ""
    },
    P013: {
      nombre: "Placa con carga estática no repetida (no incluye volqueta)",
      normativo1: "INV E-168:2013",
      normativo2: ""
    },
    P014: {
      nombre: "Efecto del agua sobre la resistencia a la compresión de las mezclas asfálticas compactadas (inmersión y compresión, 6 briquetas, compactación, curado y falla, incluye RICE)",
      normativo1: "INV E-738:2013",
      normativo2: ""
    },
    P015: {
      nombre: "Residuo por destilación",
      normativo1: "INV E 712:2013",
      normativo2: ""
    },
    P016: {
      nombre: "Viscosidad Saybolt Furol",
      normativo1: "INV E 714:2013",
      normativo2: ""
    },
    P017: {
      nombre: "Penetración de asfalto",
      normativo1: "INV E 706:2013",
      normativo2: ""
    },
    P018: {
      nombre: "Resane de pavimento (concreto hidráulico, cada uno)",
      normativo1: "-",
      normativo2: ""
    },
    P019: {
      nombre: "Medición de espesores",
      normativo1: "INV E 744:2013",
      normativo2: ""
    },
    P020: {
      nombre: "Inmersión compresión bases estabilizadas",
      normativo1: "INV E 622:2013",
      normativo2: ""
    },
    P021: {
      nombre: "Medida de la macrotextura superficial de un pavimento empleando la técnica volumétrica (círculo de arena)",
      normativo1: "INV E-791:2013",
      normativo2: ""
    }
  },

  // Ensayos de Materiales de Construcción (M)
  MaterialesConstruccion: {
    M001: {
      nombre: "Diseño de concreto para una resistencia dada (2 agregados, incluye pruebas básicas: gradación, equivalente, humedad, materia orgánica por colorimetría, masa unitaria suelta y apisonada, gravedad específica de finos y gruesos)",
      normativo1: "-",
      normativo2: ""
    },
    M002: {
      nombre: "Resistencia adicional para un diseño de concreto (2 agregados)",
      normativo1: "-",
      normativo2: ""
    },
    M003: {
      nombre: "Resistencia a la compresión de cilindros de concreto",
      normativo1: "INV E-410:2013",
      normativo2: "NTC 673:2010"
    },
    M004: {
      nombre: "Resistencia a la flexión del concreto usando una viga simplemente apoyada y cargada en los tercios de la luz libre",
      normativo1: "INV E-414:2013",
      normativo2: "NTC 2871:2018"
    },
    M005: {
      nombre: "Obtención y ensayo de núcleos de concreto endurecido 2\" de diámetro",
      normativo1: "NTC 3658:1994",
      normativo2: ""
    },
    M006: {
      nombre: "Obtención y ensayo de núcleos de concreto endurecido 3\" de diámetro",
      normativo1: "NTC 3658:1994",
      normativo2: ""
    },
    M007: {
      nombre: "Obtención y ensayo de núcleos de concreto endurecido 4\" de diámetro",
      normativo1: "NTC 3658:1994",
      normativo2: ""
    },
    M008: {
      nombre: "Relleno huecos extracción núcleos",
      normativo1: "-",
      normativo2: ""
    },
    M008A: {
      nombre: "Pruebas detección de hierro",
      normativo1: "-",
      normativo2: ""
    },
    M009: {
      nombre: "Carbonatación en elementos de concreto",
      normativo1: "UNE 112-011:2011",
      normativo2: ""
    },
    M010: {
      nombre: "Corte y preparación de caras para pruebas de compresión de núcleos",
      normativo1: "-",
      normativo2: ""
    },
    M011: {
      nombre: "Determinación del número de rebote (índice esclerométrico) en el concreto endurecido (15 lecturas, ejecución mínima 2 ensayos por salida a campo)",
      normativo1: "INV E 413:2013",
      normativo2: "ASTM C805/805M:2018"
    },
    M012: {
      nombre: "Tracción indirecta de elementos de concreto",
      normativo1: "INV E-411:2013",
      normativo2: ""
    },
    M013: {
      nombre: "Resistencia a la compresión en núcleos de concreto",
      normativo1: "INV E 410:2013",
      normativo2: "NTC 673:2010"
    },
    M014: {
      nombre: "Módulo de elasticidad estático y relación de Poisson del concreto en compresión (con 2 deformímetros eléctricos por ensayo)",
      normativo1: "NTC 4025:2006",
      normativo2: ""
    },
    M015: {
      nombre: "Determinación de la velocidad de pulso ultrasónico a través del concreto",
      normativo1: "ASTM D 2845:2008 (Retirado: 2017)",
      normativo2: ""
    },
    M016: {
      nombre: "Asentamiento del concreto del cemento hidráulico (SLUMP, valor para 5 ensayos, no incluye transporte)",
      normativo1: "NTC 396:1992",
      normativo2: ""
    },
    M017: {
      nombre: "Elaboración y curado de especímenes de concreto en el laboratorio para ensayos de compresión y flexión, fundida de 1 cilindro de concreto (toma, valor para 6 cilindros, no incluye transporte)",
      normativo1: "NTC 550:2000",
      normativo2: ""
    },
    M018: {
      nombre: "Diseño de mortero para una resistencia dada (incluye ensayos de caracterización básica)",
      normativo1: "-",
      normativo2: ""
    },
    M019: {
      nombre: "Compresión en cubos de mortero (elaboración serie de 9)",
      normativo1: "NTC 220:2022",
      normativo2: ""
    },
    M020: {
      nombre: "Resistencia a la compresión de cubos de mortero",
      normativo1: "NTC 220:2022",
      normativo2: ""
    },
    M021: {
      nombre: "Resistencia a la compresión de prismas de concreto",
      normativo1: "NTC 3495:2003",
      normativo2: ""
    },
    M022: {
      nombre: "Resistencia a la compresión en muretes sencillos",
      normativo1: "NTC 3495:2003",
      normativo2: ""
    },
    M023Sub: {
      nombre: "Resistencia a la compresión de muretes dobles",
      normativo1: "NTC 3495:2003",
      normativo2: ""
    },
    M024Sub: {
      nombre: "Resistencia a la compresión de muretes triples",
      normativo1: "NTC 3495:2003",
      normativo2: ""
    },
    M025: {
      nombre: "Determinación de la resistencia a la compresión de prefabricados de concreto (requiere ensayo de absorción, 6 unidades)",
      normativo1: "NTC 4024:2001 Numerales 6 y 8",
      normativo2: ""
    },
    M026: {
      nombre: "Determinación de la absorción de prefabricados de concreto (5 unidades)",
      normativo1: "NTC 4024:2001 Numerales 6 y 8",
      normativo2: ""
    },
    M027: {
      nombre: "Flexotracción en adoquines de concreto para pavimentos (valor para fallar 5 unidades)",
      normativo1: "NTC 2017:2018",
      normativo2: ""
    },
    M028: {
      nombre: "Compresión de adoquines de concreto (valor para fallar 5 unidades)",
      normativo1: "NTC 2017:2018",
      normativo2: ""
    },
    M029: {
      nombre: "Absorción en frío de adoquines y bloques de concreto (valor para fallar 5 unidades)",
      normativo1: "NTC 2017:2018",
      normativo2: ""
    },
    M030: {
      nombre: "Dimensionamiento en bloques (cada unidad)",
      normativo1: "-",
      normativo2: ""
    },
    M031: {
      nombre: "Determinación de la resistencia a la flexión compresión de unidades de mampostería de arcilla (valor para fallar 5 unidades)",
      normativo1: "NTC 4017:2018 Numerales 6 y 7",
      normativo2: ""
    },
    M032: {
      nombre: "Determinación de la resistencia a la compresión - ladrillos de arcilla (valor para fallar 6 unidades)",
      normativo1: "NTC 4017:2018 Numerales 6 y 7",
      normativo2: ""
    },
    M033: {
      nombre: "Determinación de la resistencia a la compresión - adoquines de arcilla (valor para fallar 5 unidades)",
      normativo1: "NTC 4017:2018 Numerales 6 y 7",
      normativo2: ""
    },
    M034: {
      nombre: "Determinación de la resistencia a la flexión - unidades de mampostería de arcilla (valor para fallar 6 unidades)",
      normativo1: "NTC 4017:2018 Numerales 6 y 7",
      normativo2: ""
    },
    M035Sub: {
      nombre: "Eflorescencia en piezas de mampostería de arcilla",
      normativo1: "NTC 4017:2018",
      normativo2: ""
    },
    M036: {
      nombre: "Determinación de la absorción de unidades de mampostería de arcilla (valor para 5 unidades)",
      normativo1: "NTC 4017:2018 Numeral 10",
      normativo2: ""
    },
    M037: {
      nombre: "Impacto en tejas de arcilla",
      normativo1: "NTC 2086:1996",
      normativo2: ""
    },
    M038: {
      nombre: "Absorción en tejas de arcilla",
      normativo1: "NTC 2086:1996",
      normativo2: ""
    },
    M039: {
      nombre: "Flexión en tejas de arcilla",
      normativo1: "NTC 2086:1996",
      normativo2: ""
    },
    M040: {
      nombre: "Compresión en baldosas con elaboración de probeta (por unidad)",
      normativo1: "NTC 2849:1997; NTC 1085:1976",
      normativo2: ""
    },
    M041: {
      nombre: "Flexión en baldosa con elaboración de probeta (por unidad)",
      normativo1: "NTC 2849:1997; NTC 1085:1976",
      normativo2: ""
    },
    M042: {
      nombre: "Absorción de baldosa en agua",
      normativo1: "NTC 2849:1997; NTC 1085:1976",
      normativo2: ""
    },
    M043Sub: {
      nombre: "Resistencia al impacto en baldosas (por unidad)",
      normativo1: "NTC 2849:1997; NTC 1085:1976",
      normativo2: ""
    },
    M044Sub: {
      nombre: "Flexotracción en losetas (por unidad, para losetas con área mayor a 20 cm se realiza subcontratación)",
      normativo1: "NTC 1028:1994; NTC 4992:2004",
      normativo2: ""
    },
    M045: {
      nombre: "Absorción en losetas en agua",
      normativo1: "NTC 1028:1994; NTC 4992:2004",
      normativo2: ""
    },
    M046: {
      nombre: "Medición de perfilería",
      normativo1: "-",
      normativo2: ""
    },
    M047Sub: {
      nombre: "Resistencia a la flexión en sardineles y bordillos de concreto",
      normativo1: "NTC 4109:2008",
      normativo2: ""
    },
    M048Sub: {
      nombre: "Medición de resaltes en barras corrugadas de acero de baja aleación, para refuerzo de concreto (corroborar precio con subcontratista)",
      normativo1: "NTC 2289:2020 Numerales 5, 7, 8",
      normativo2: ""
    },
    M049Sub: {
      nombre: "Ensayo de tracción, resistencia a la afluencia, alargamiento, relación resistencia fluencia calculado, en barras corrugadas de acero de baja aleación, para refuerzo de concreto (corroborar precio con subcontratista)",
      normativo1: "NTC 2289:2020 Numeral 9, 11 y 15.2; NTC 3353:2021 Numerales 6, 8, 13 y 14; NTC 2:2022 Numerales 5.1, 5.2.1, 5.2.2, 6.6, 7.1, 7.3, 7.4, 7.5, 7.6, 7.7, 7.10, 7.11, 7.13, 7.14 y 8",
      normativo2: ""
    },
    M050Sub: {
      nombre: "Ensayo de doblado, barras corrugadas y lisas de acero de baja aleación, para refuerzo de concreto (corroborar precio con subcontratista)",
      normativo1: "NTC 2289:2020 Numeral 10; NTC 3353:2021 Numeral 15; NTC 1:2019 Numerales 3.6, 5.2, 7.11, 8.3, 8.7, 8.9, 9 y 10",
      normativo2: ""
    },
    M051Sub: {
      nombre: "Ensayo para determinar la resistencia a la abrasión de los prefabricados de concreto utilizados en pisos y pavimentos, mediante abrasivo de corindón y disco metálico ancho (corroborar precio con subcontratista)",
      normativo1: "NTC 5147:2024",
      normativo2: ""
    },
    M056Sub: {
      nombre: "Análisis petrográfico (incluye preparación de muestra, corroborar precio con subcontratista)",
      normativo1: "ASTM C856:2020",
      normativo2: ""
    },
    M057Sub: {
      nombre: "Resistencia a la flexotracción (módulo de rotura) para losetas de concreto para pavimentos (corroborar precio con subcontratista)",
      normativo1: "NTC 4992:2022 Numeral 7.4",
      normativo2: ""
    }
  }
};