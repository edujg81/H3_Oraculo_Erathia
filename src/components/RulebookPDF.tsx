import { Printer, ShoppingBag, ShieldAlert, BookOpen, Download } from 'lucide-react';
// @ts-ignore
import oracleLogo from '../assets/images/sandro_oracle_titled_logo_1783458347417.jpg';

export default function RulebookPDF() {
  const triggerPrint = () => {
    window.print();
  };

  const downloadOfflineHTML = () => {
    const printElement = document.getElementById("print-area");
    if (!printElement) return;

    // Build self-contained HTML document with tailwind CSS and complete styling
    const htmlContent = `<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Manual_Completo_Heroes_III_Es (Consolidado)</title>
  <script src="https://cdn.tailwindcss.com"></script>
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Playfair+Display:ital,wght@0,600;0,700;1,400&family=JetBrains+Mono:wght@400;500;600&display=swap');
    body {
      font-family: 'Inter', system-ui, -apple-system, sans-serif;
      background-color: #fafaf9;
      color: #1c1917;
    }
    .font-serif {
      font-family: 'Playfair Display', Georgia, serif;
    }
    .font-mono {
      font-family: 'JetBrains Mono', monospace;
    }
    @media print {
      .no-print { display: none !important; }
      body { background: white !important; color: black !important; padding: 0 !important; }
      #print-area { padding: 0 !important; margin: 0 !important; }
      .page-break { page-break-before: always; }
    }
  </style>
</head>
<body class="p-6 sm:p-12 max-w-4xl mx-auto">
  <div class="no-print mb-8 bg-amber-50 border border-amber-200 p-4 rounded-xl flex flex-col sm:flex-row sm:items-center justify-between text-sm text-amber-900 gap-4">
    <div>
      <h3 class="font-bold flex items-center gap-1.5 font-serif text-base text-amber-950">
        🛡️ Manual Completo Offline & Preparado para Impresión
      </h3>
      <p class="text-xs text-amber-800/90 mt-0.5">
        Este es un archivo independiente que funciona sin conexión. Pulsa el botón "Guardar como PDF" de la derecha o presiona <kbd class="px-1.5 py-0.5 bg-white border rounded font-mono text-[10px]">Ctrl + P</kbd> para imprimirlo.
      </p>
    </div>
    <button onclick="window.print()" class="bg-amber-600 hover:bg-amber-700 text-white font-bold py-2 px-4 rounded-lg shadow-md text-xs cursor-pointer transition active:scale-95 shrink-0 flex items-center gap-1.5">
      <span>Imprimir / Guardar en PDF</span>
    </button>
  </div>
  <div id="print-area" class="space-y-8">
    ${printElement.innerHTML}
  </div>
</body>
</html>`;

    const blob = new Blob([htmlContent], { type: "text/html;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "Manual_Completo_Heroes_III_Es.html";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="bg-slate-900 border border-amber-900/30 rounded-xl p-6 shadow-xl relative max-w-5xl mx-auto">
      {/* Rules Style Injection for printing */}
      <style>{`
        @media print {
          body * {
            visibility: hidden;
            background: white !important;
            color: black !important;
          }
          #print-area, #print-area * {
            visibility: visible;
          }
          #print-area {
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
            padding: 20px;
            color: black !important;
            background: white !important;
          }
          .no-print {
            display: none !important;
          }
          table {
            border-collapse: collapse !important;
            width: 100% !important;
            color: black !important;
          }
          th, td {
            border: 1px solid #000 !important;
            padding: 8px !important;
            color: black !important;
          }
          h1, h2, h3, h4 {
            color: black !important;
            page-break-after: avoid;
          }
          .page-break {
            page-break-before: always;
          }
        }
      `}</style>

      {/* Export Header Control */}
      <div className="no-print flex flex-col xl:flex-row items-stretch xl:items-center justify-between border-b border-amber-900/20 pb-5 mb-6 gap-4">
        <div className="flex items-center gap-4">
          <div>
            <h3 className="font-serif text-amber-200 text-lg sm:text-xl flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-amber-500" />
              Reglamento Completo del Juego (V3.0 Oficial)
            </h3>
            <p className="text-xs text-slate-400 mt-1 leading-relaxed">
              Versión consolidada en español sin redundancias. Incluye todas las mecánicas de las expansiones (Asedios, Catapulta, Campos Dinámicos, Subterráneo, Astilleros y Barcos).
            </p>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row gap-2.5 w-full xl:w-auto">
          <button
            onClick={triggerPrint}
            title="Imprimir directamente desde esta pestaña"
            className="w-full sm:w-auto flex items-center justify-center gap-2 px-3.5 py-2 bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 rounded-lg text-xs font-semibold transition active:scale-95 cursor-pointer shadow-md duration-150"
          >
            <Printer className="w-3.5 h-3.5" />
            <span>Imprimir Copia Directa</span>
          </button>
          <button
            onClick={downloadOfflineHTML}
            title="Descargar archivo HTML listo para imprimir como PDF"
            className="w-full sm:w-auto flex items-center justify-center gap-2 px-4 py-2 bg-amber-600 hover:bg-amber-700 text-white rounded-lg text-xs font-bold transition active:scale-95 cursor-pointer shadow-md duration-200"
          >
            <Download className="w-4 h-4" />
            <span>Descargar HTML / PDF</span>
          </button>
        </div>
      </div>

      <div className="no-print bg-slate-950/40 border border-amber-900/20 px-4 py-3 rounded-xl mb-4 text-xs text-slate-400 flex items-center gap-2.5">
        <span className="text-amber-500 text-base">⚠️</span>
        <p>
          <strong>Consejo de Visualización:</strong> Debido a que el Oráculo se ejecuta dentro de un marco web autocontenido, el navegador podría bloquear la ventana emergente de impresión estándar. Te recomendamos usar el botón <strong>"Descargar HTML Offline / Imprimir PDF"</strong> para obtener las reglas ordenadas e imprimibles de forma instantánea.
        </p>
      </div>

      <div id="print-area" className="space-y-8 text-slate-300 font-sans leading-relaxed text-sm">
        {/* Printable cover/header */}
        <div className="text-center space-y-5 pb-8 border-b border-amber-900/10 flex flex-col items-center justify-center pt-4">
          <div className="relative group shrink-0 my-2">
            <div className="w-80 h-80 flex items-center justify-center overflow-hidden">
              <img 
                src={oracleLogo} 
                alt="Heroes III: Oráculo de Erathia Cover Art" 
                className="w-full h-full object-contain mix-blend-screen"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
          <div className="space-y-2">
            <h2 className="text-md uppercase font-mono tracking-widest text-amber-500 font-semibold">
              Compendio De Reglas Completo para Heroes of Might & Magic III: El Juego de Mesa
            </h2>
            <p className="text-neutral-500 text-xs font-mono">
              Documento de Referencia en Español
            </p>
          </div>
        </div>

        {/* Dynamic Table of Contents */}
        <div className="bg-slate-950/60 border border-amber-900/20 rounded-xl p-4 sm:p-5 my-4 space-y-3">
          <h4 className="font-serif text-amber-400 font-bold text-sm sm:text-base border-b border-slate-800 pb-2 flex items-center gap-2">
            📋 Índice General del Compromiso Técnico y Reglamento (Consolidado)
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2 text-xs text-slate-300 font-mono">
            <div>
              <span className="text-amber-500 font-bold">I.</span> Glosario, las 10 Facciones, Cartas y Fichas Especiales
            </div>
            <div>
              <span className="text-amber-500 font-bold">II.</span> Tipos de Losetas (Atlas de Erathia)
            </div>
            <div>
              <span className="text-amber-500 font-bold">III.</span> Compendio de Localizaciones del Mapa y Efectos
            </div>
            <div>
              <span className="text-amber-500 font-bold">IV.</span> Preparación De Las Partidas y Listado de Escenarios
            </div>
            <div>
              <span className="text-amber-500 font-bold">V.</span> Modo Campaña Oficial y su Cronología de Misiones
            </div>
            <div>
              <span className="text-amber-500 font-bold">VI.</span> Flujo Detallado de Rondas y Fases (Astrología vs Eventos)
            </div>
            <div>
              <span className="text-amber-500 font-bold">VII.</span> Desarrollo Urbano, Reclutamiento y Economía
            </div>
            <div>
              <span className="text-amber-500 font-bold">VIII.</span> Reglamento De Combate Táctico y Máquinas de Guerra
            </div>
            <div>
              <span className="text-amber-500 font-bold">IX.</span> Hechizos, Arcanos y Libro de Magias
            </div>
            <div className="space-y-1">
              <div><span className="text-amber-500 font-bold">X.</span> Guía de Expansiones y Elementos Avanzados</div>
              <div className="pl-4 text-slate-400 text-[12px]">• El Campo de Batalla Dinámico (Obstáculos)</div>
              <div className="pl-4 text-slate-400 text-[12px]">• Asedio y Sitio de Castillos (Reglas de Catapulta)</div>
              <div className="pl-4 text-slate-400 text-[12px]">• Mapa Subterráneo e Inframundo (Tránsito Dual)</div>
              <div className="pl-4 text-slate-400 text-[12px]">• Logística de Barcos, Astilleros y Navegación</div>
              <div className="pl-4 text-slate-400 text-[12px]">• Monolitos de Tránsito y Teletransporte</div>
            </div>
            <div className="space-y-1">
              <div><span className="text-amber-500 font-bold">XI.</span> Tablas del Reglamento Oficial</div>
              <div className="pl-4 text-slate-400 text-[12px]">• Tabla de Dificultad de las Zonas (Ejércitos)</div>
              <div className="pl-4 text-slate-400 text-[12px]">• Tabla General de Conversión de Recursos</div>
            </div>
            <div>
              <span className="text-amber-500 font-bold">XX.</span> Guía de Habilidades y Talentos del Héroe (Wiki)
            </div>
          </div>
        </div>

        {/* Section 1 */}
        <section className="space-y-3">
          <h3 className="text-xl font-serif text-amber-300 border-b border-slate-800 pb-1">
            I. Glosario, las 10 Facciones, Cartas y Fichas Especiales
          </h3>
          <p>
            Este manual regula y agrupa todas las mecánicas de <em>Heroes of Might and Magic III: El Juego de Mesa</em> y sus expansiones oficiales, eliminando repeticiones y ofreciendo un marco robusto de consulta sobre el mantel.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
            <div className="bg-slate-950/60 p-3 rounded-lg border border-slate-800">
              <strong className="text-amber-400 block h-6 font-mono text-sm border-b border-slate-900 mb-1.5 font-bold">🔑 Los Tres Recursos del Reino</strong>
              <ul className="list-disc pl-4 space-y-1 text-slate-300">
                <li><strong>Oro ():</strong> Utilizado para alistar ejércitos, construir edificios de ciudad y adquirir hechizos.</li>
                <li><strong>Materiales ():</strong> La madera y el mineral de hierro representados en fardos. Son indispensables para expandir los módulos de la metrópolis.</li>
                <li><strong>Objetos de Valor ():</strong> Mercurio, gemas, azufre y cristal agrupados en una sola divisa para habilitar laboratorios, torres de magos de alto nivel y dragones sagrados.</li>
              </ul>
            </div>
            <div className="bg-slate-950/60 p-3 rounded-lg border border-slate-800">
              <strong className="text-amber-400 block h-6 font-mono text-sm border-b border-slate-900 mb-1.5 font-bold">🏰 Las 10 Facciones de Erathia</strong>
              <p className="leading-relaxed text-slate-300 text-[12px] space-y-1">
                <span className="text-slate-200 block">• <strong>Castillo (Castle):</strong> Caballería y campeones pesados. Dominio del orden celestial y la moral.</span>
                <span className="text-slate-200 block">• <strong>Necrópolis (Necropolis):</strong> No-muertos inmunes a la moral entera. Reclutan de las bajas en batalla.</span>
                <span className="text-slate-200 block">• <strong>Mazmorra (Dungeon):</strong> Dragones negros, harpías y hechicería destructiva letal.</span>
                <span className="text-slate-200 block">• <strong>Murallas (Rampart):</strong> Elfos, dragones verdes y enanos. Comunión con la naturaleza y bosques abundantes.</span>
                <span className="text-slate-200 block">• <strong>Torre (Tower):</strong> Golems, magos y titanes. Maestranza en la manipulación y forjado de artefactos arcanos.</span>
                <span className="text-slate-200 block">• <strong>Infierno (Inferno):</strong> Kreegans, diablos surgidos del abismo ardiente y pactos de fuego devastadores.</span>
                <span className="text-slate-200 block">• <strong>Bastión (Stronghold):</strong> Salvajes orcos, ogros y cíclopes. Dependencia absoluta de la fuerza bruta y coraje militar.</span>
                <span className="text-slate-200 block">• <strong>Fortaleza (Fortress):</strong> Lagartos, hidras del caos y basiliscos en ciénagas y pantanos de impenetrable defensa.</span>
                <span className="text-slate-200 block">• <strong>Confluencia (Conflux):</strong> Seres arcanos y elementales de fuego, aire, tierra y agua, coronados por los fénix eternos.</span>
                <span className="text-slate-200 block">• <strong>Bahía (Cove):</strong> Piratas, corsarios y monstruos de la profundidad. Expertos en navegación, contrabando y asaltos anfibios.</span>
              </p>
            </div>
          </div>

          <div className="bg-slate-950/60 p-4 rounded-xl border border-slate-800 space-y-2 mt-2">
            <strong className="text-amber-400 block font-mono text-xs font-bold">🎴 Compendio del Mazo: Tipología y Uso de las Cartas</strong>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs leading-relaxed">
              <div className="border border-slate-900 p-2 rounded bg-slate-950/40">
                <span className="text-amber-300 block font-bold font-mono">1. Cartas de Hechizo (Spell)</span>
                Coleccionables en la Cofradía de Magos o santuarios. Tienen coste de Maná y se dividen en Magias de Combate (daño directo, potenciadores instantáneos) y Hechizos de Mapa (ej. Volar, Caminar sobre el Agua - gastados durante el movimiento en el mapa).
              </div>
              <div className="border border-slate-900 p-2 rounded bg-slate-950/40">
                <span className="text-amber-300 block font-bold font-mono">2. Cartas de Artefacto (Artifact)</span>
                Cartas de tu mazo de Poder y Magia. Al obtenerse (incluso como bonus inicial) van <strong>directamente a tu mano</strong> y no al descarte. Una vez jugadas, se ejecutan y van a la pila de descarte del mazo (salvo si son marcadas como Permanentes).
              </div>
              <div className="border border-slate-900 p-2 rounded bg-slate-950/40">
                <span className="text-amber-300 block font-bold font-mono">3. Cartas de Especialidad (Specialty)</span>
                Naipes asimétricos exclusivos del héroe elegido. Se incorporan de forma directa y gratuita a tu mano de juego al alcanzar los niveles legendarios dorados (Nivel IV y VI del track).
              </div>
              <div className="border border-slate-900 p-2 rounded bg-slate-950/40">
                <span className="text-amber-300 block font-bold font-mono">4. Cartas de Habilidad (Ability)</span>
                Aptitudes de progresión ordinarias que se eligen mediante draft (robar 2 cartas, retener 1 y descartar la otra) cada vez que el héroe sube a un nivel plateado (Niveles II, III, V, VII).
              </div>
              <div className="border border-slate-900 p-2 rounded bg-slate-950/40">
                <span className="text-amber-300 block font-bold font-mono">5. Cartas de Característica (Stat)</span>
                Representan el Poder (fuerza mágica), Conocimiento (lanzamiento de hechizos), Ataque y Defensa física. Integran la base del mazo con cartas potenciadoras.
              </div>
              <div className="border border-slate-900 p-2 rounded bg-slate-950/40">
                <span className="text-amber-300 block font-bold font-mono">6. Cartas de Unidad / Regimiento</span>
                Contienen los valores numéricos de iniciativa, ataque, defensa y salud de tus tropas de bronce, plata, oro u azur. Poseen reverso Élite para ascensos promovidos.
              </div>
              <div className="border border-slate-900 p-2 rounded bg-slate-950/40">
                <span className="text-amber-300 block font-bold font-mono">7. Cartas de Ciudad (Town Cards)</span>
                Acompañan el track de ciudad para reflejar asimétricamente los costes de distritos urbanos, la producción pasiva de recursos e ilustrar reglas asimétricas exclusivas de las viviendas de facción.
              </div>
              <div className="border border-slate-900 p-2 rounded bg-slate-950/40">
                <span className="text-amber-300 block font-bold font-mono">8. Cartas de Caja de Pandora</span>
                Encuentros de alto peligro extremo en el mapa. Al descubrirlas, el héroe libra un asalto sorpresa inmediato contra guardianes aleatorios potenciados para expoliar tesoros míticos legendarios.
              </div>
            </div>
          </div>

          <div className="bg-slate-950/60 p-4 rounded-xl border border-slate-800 space-y-2 mt-2">
            <strong className="text-amber-400 block font-mono text-xs font-bold">🔘 Fichas Especiales de Juego y sus Reglamentos Propios</strong>
            <p className="text-slate-300 text-xs text-[12px] leading-relaxed">
              El juego utiliza varios marcadores físicos clave para limitar acciones, modificar dados o registrar efectos de combate avanzados:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-7 gap-2 text-[12px] leading-relaxed">
              <div className="border border-slate-900 p-2 rounded bg-slate-950/40">
                <span className="text-indigo-300 font-bold font-mono block">⏳ Tiempo (Time)</span>
                Se sitúan sobre la barra de progreso de ronda. Realizan la cuenta atrás del límite de turnos e indican la reposición de mercadillos y neutrales.
              </div>
              <div className="border border-slate-900 p-2 rounded bg-slate-950/40">
                <span className="text-blue-300 font-bold font-mono block">📜 Pergaminos (Scrolls)</span>
                Cartas que representan pergaminos mágicos. Permiten lanzar un hechizo específico sin un Libro de Hechizos ni nivel de magia elemental. Se descartan tras usarse.
              </div>
              <div className="border border-slate-900 p-2 rounded bg-slate-950/40">
                <span className="text-amber-300 font-bold font-mono block">🏜️ Arenas Movedizas</span>
                Creadas por magia de Tierra. Las tropas terrestres que ingresen a esta casilla detienen su movimiento en el acto y pierden el resto de la acción táctica.
              </div>
              <div className="border border-slate-900 p-2 rounded bg-slate-950/40">
                <span className="text-emerald-300 font-bold font-mono block">⚔️ Ataque (Attack)</span>
                Modifica de forma directa las estadísticas de combate de un regimiento (+1 o -1 ataque), sumándose o restándose a la tirada del dado rojo de daño.
              </div>
              <div className="border border-slate-900 p-2 rounded bg-slate-950/40">
                <span className="text-red-300 font-bold font-mono block">🧪 Corrosión (Corrosion)</span>
                Marcadores que menguan la defensa de una tropa combatiente en -1 o -2 puntos por asaltos corrosivos o magias ácidas, hasta concluir la escaramuza táctica.
              </div>
              <div className="border border-slate-900 p-2 rounded bg-slate-950/40">
                <span className="text-cyan-300 font-bold font-mono block">🛡️ Campo de Fuerza</span>
                Token desplegado por el conjuro de Agua. Ocupa 2 casillas. Bloquea el combate terrestre de melé de ambos bandos, pero los Rangers aliados disparan libremente a su través.
              </div>
              <div className="border border-slate-900 p-2 rounded bg-slate-950/40">
                <span className="text-orange-300 font-bold font-mono block">💣 Minas Terrestres</span>
                Creadas por magia de Fuego. Actúan como explosivos tácticos. La primera tropa terrestre que pase por encima detona la mina, detiene su marcha y sufre d3 a d6 heridas de fuego.
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: Explaining Tiles */}
        <section className="space-y-3 page-break">
          <h3 className="text-xl font-serif text-amber-300 border-b border-slate-800 pb-1">
            II. Tipos de Losetas (Atlas de Erathia)
          </h3>
          <p className="text-xs">
            El mapa de escaramuza y campaña se esculpe con losetas hexagonales categorizadas para estructurar la progresión y escalamiento del juego:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
            <div className="bg-slate-950/60 p-3.5 rounded-xl border border-slate-800 space-y-1.5">
              <strong className="text-amber-400 block font-mono font-bold">🗺️ Losetas Terrestres de Progreso (I-VII)</strong>
              <ul className="list-disc pl-4 space-y-1 text-slate-300 text-[12px]">
                <li><strong>Losetas Iniciales (Nivel I):</strong> Alojan las deidades o capitales natales de cada imperio y minas básicas libres y desprotegidas.</li>
                <li><strong>Losetas Lejanas (Niveles II-III):</strong> Forman el primer cordón exterior. Custodiadas por ejércitos de bronce y plata débiles. Esconden molinos y establos básicos.</li>
                <li><strong>Losetas Cercanas (Niveles IV-V):</strong> Componen las zonas de combate secundarias. Conllevan tropas robustas de plata y oro, santuarios y mercadillos arcanos.</li>
                <li><strong>Losetas Centrales (Niveles VI-VII):</strong> Custodiadas por ejércitos de rango oro o azur. Albergan la <em>Utopía del Dragón</em> y tumbas raras de gran recompensa.</li>
              </ul>
            </div>
            <div className="bg-slate-950/60 p-3.5 rounded-xl border border-slate-800 space-y-1.5">
              <strong className="text-amber-400 block font-mono font-bold">🌋 Losetas Especiales de Entorno</strong>
              <ul className="list-disc pl-4 space-y-1 text-slate-300 text-[12px]">
                <li><strong>Losetas Subterráneas (Cavernas):</strong> Identificadas con reverso oscuro de piedra. Representan el inframundo, el cual es accesible solo mediante las losetas con indicativo de <em>Puerta Subterránea</em>. Permite cruzar muros e ignorar asedios superficiales de forma subterránea.</li>
                <li><strong>Losetas de Mar (Navegación):</strong> Indicadas con superficies de agua profunda continua. Solo transitables por héroes montados en una miniatura del Barco reclutada en un astillero, o que viajen mediante el hechizo "Caminar sobre el Agua".</li>
                <li><strong>Fronteras Amarillas Bloqueantes:</strong> Líneas rígidas que no se pueden cruzar por ningún medio físico de movimiento convencional del mapa.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Section 3 */}
        <section className="space-y-3 page-break">
          <h3 className="text-xl font-serif text-amber-300 border-b border-slate-800 pb-1">
            III. Compendio de Localizaciones del Mapa y sus Efectos
          </h3>
          <p className="text-xs">
            Las losetas de mapa contienen edificios e hitos con los que el Héroe puede interactuar durante su Fase de Movimiento. Estas localizaciones se organizan en tres categorías rígidas de usabilidad:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
            <div className="bg-slate-950/60 p-3.5 rounded-xl border border-slate-800 space-y-2">
              <strong className="text-amber-400 block font-mono font-bold border-b border-slate-900 pb-1">🛑 1. Visitables (1 vez por escenario)</strong>
              <p className="text-slate-350 text-[12px] leading-relaxed">
                Colocan un cubo negro de control neutro tras interactuar. Quedan bloqueadas para este héroe a menos que la partida ordene limpiarlas:
              </p>
              <ul className="list-disc pl-4 space-y-1 text-slate-300 text-[12px]">
                <li><strong>Piedra de Aprendizaje (Learning Stone):</strong> El héroe gana inmediatamente 1 punto de Exp.</li>
                <li><strong>Templo (Temple):</strong> Otorga una ficha de moral positiva temporal al héroe.</li>
                <li><strong>Santuario del Gesto Mágico (Magic Shrine):</strong> Permite buscar (2) cartas en el mazo de hechizos pagando su costo correspondiente.</li>
                <li><strong>Jardín Místico (Mystical Garden):</strong> Elige de forma inmediata entre ganar 2 Oro o 1 Objeto de valor.</li>
                <li><strong>Tumba del Guerrero (Warrior's Tomb):</strong> Permite buscar (2) en el mazo de artefactos dos veces, pero asigna al héroe moral negativa de forma inmediata por profanación.</li>
                <li><strong>Árbol del Conocimiento (Tree of Knowledge):</strong> El héroe puede pagar 3 Objetos de valor o 10 de Oro para subir 2 rangos de Exp al instante.</li>
                <li><strong>Molino (Windmill):</strong> Entrega 1 Objeto de valor de forma gratuita de un tipo determinado.</li>
                <li><strong>Molino de Agua (Waterwheel):</strong> Entrega 3 de Oro de forma inmediata al héroe.</li>
              </ul>
            </div>

            <div className="bg-slate-950/60 p-3.5 rounded-xl border border-slate-800 space-y-2">
              <strong className="text-amber-400 block font-mono font-bold border-b border-slate-900 pb-1">🔄 2. Revisitables (Múltiples Usos)</strong>
              <p className="text-slate-350 text-[12px] leading-relaxed">
                Permiten interacciones recurrentes moviéndose sobre ellas o pagando 1 PM si el héroe ya ha comenzado su turno posicionado dentro:
              </p>
              <ul className="list-disc pl-4 space-y-1 text-slate-300 text-[12px]">
                <li><strong>Mercadillo (Trading Post):</strong> Te permite intercambiar u ofrecer recursos según la Tabla de Comercio oficial, o destruir una carta innecesaria de tu de mazo activo (exceptuando cartas iniciales o cartas de flechas mágicas) a cambio de 1 de Oro.</li>
                <li><strong>Santuario (Sanctuary):</strong> Los héroes situados en este hexágono están resguardados y no pueden ser atacados por otros héroes. Un héroe rival puede atravesar este campo solo si no se detiene en él.</li>
                <li><strong>Establos (Stables):</strong> El héroe que entre ahí gana +1 punto de movimiento (PM) adicional que debe consumir exclusivamente durante este turno de aventura.</li>
              </ul>
            </div>

            <div className="bg-slate-950/60 p-3.5 rounded-xl border border-slate-800 space-y-2">
              <strong className="text-amber-400 block font-mono font-bold border-b border-slate-900 pb-1">🚩 3. Señalizables (Captura Fija)</strong>
              <p className="text-slate-350 text-[12px] leading-relaxed">
                Se capturan colocando de inmediato un cubo del color de tu facción al pisarlas. Son disputables por otros jugadores:
              </p>
              <ul className="list-disc pl-4 space-y-1 text-slate-300 text-[12px]">
                <li><strong>Minas (Mine - Oro, Mineral, Madera, Cristal, Alquimista):</strong> Incrementan de forma fija la producción correspondiente en tu tablero de ciudad en cada Ronda de Recursos. La primera captura otorga la producción inmediata de la mina de forma gratuita. Los rivales pueden capturarlas sustituyendo el cubo.</li>
                <li><strong>Asentamiento (Settlement):</strong> Otorga bonificaciones a elegir (ej. expandir ingresos) y entrega un recurso inmediato. Puede habilitar el reclutamiento a distancia a los héroes.</li>
              </ul>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs pt-1">
            <div className="bg-slate-950/60 p-3.5 rounded-xl border border-slate-800 space-y-2">
              <strong className="text-amber-400 block font-mono font-bold border-b border-slate-900 pb-1">🌊 4. Localizaciones de Mar (Expansión Marítima)</strong>
              <p className="text-slate-350 text-[12px] leading-relaxed">
                Localizaciones especiales sobre losetas de mar o costas navegables. El Héroe interactúa usando un Barco:
              </p>
              <ul className="list-disc pl-4 space-y-1 text-slate-300 text-[12px]">
                <li><strong>Templo del Mar (Temple of the Sea):</strong> Combate duro contra Haspides e Hidras de Mar. La victoria otorga +3 Objetos de Valor (Gemas/Cristal) y un Artefacto de nivel Reliquia.</li>
                <li><strong>Náufrago Superviviente (Shipwreck Survivor):</strong> Otorga de forma gratuita un Artefacto al azar del mazo menor, o 5 monedas de Oro por rescatar su cofre.</li>
                <li><strong>Boya (Buoy):</strong> Otorga +1 a la Moral de combate de tus regimientos durante la siguiente batalla naval o terrestre.</li>
                <li><strong>Remolino (Whirlpool):</strong> Teletransporta instantáneamente al héroe navegante a otro Remolino libre del mapa, pero desintegra d3 unidades ordinarias de bronce de su mano como peaje espiritual.</li>
                <li><strong>Restos de Naufragio (Shipwreck):</strong> Cripta marina custodiada por Espíritus del Mar (Fantasmas de Plata). Limpiarla otorga entre d6+2 de Oro y un Hechizo de agua aleatorio.</li>
              </ul>
            </div>

            <div className="bg-slate-950/60 p-3.5 rounded-xl border border-slate-800 space-y-2">
              <strong className="text-amber-400 block font-mono font-bold border-b border-slate-900 pb-1">🌀 5. Losetas de Mapa Elementales (Expansión Confluencia)</strong>
              <p className="text-slate-350 text-[12px] leading-relaxed">
                Fallas o grietas cósmicas conreversos cian que imponen las leyes de los Planos Elementales:
              </p>
              <ul className="list-disc pl-4 space-y-1 text-slate-300 text-[12px]">
                <li><strong>Grieta de Fuego (Fire Rift):</strong> Duplica de forma fija la potencia y daño de los hechizos de fuego lanzados desde ella. Si la facción del héroe es Confluencia o Inferno, se le conceden +2 PM libres.</li>
                <li><strong>Grieta de Agua (Water Rift):</strong> Excluye penalizaciones de fango o nieve de movimiento y permite embarcar de forma directa sin agotar el turno.</li>
                <li><strong>Grieta de Tierra (Earth Rift):</strong> Concede +1 a la Defensa Física de toda criatura aliada que defienda este enclave.</li>
                <li><strong>Grieta de Aire (Air Rift):</strong> Concede +1 a la Iniciativa táctica en combate, permitiendo asestar ataques anticipados.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Section 4 */}
        <section className="space-y-3 page-break col-span-1">
          <h3 className="text-xl font-serif text-amber-300 border-b border-slate-800 pb-1">
            IV. Preparación De Las Partidas y Listado de Escenarios
          </h3>
          <p className="text-xs">
            Antes de desplegar las losetas, determine el tipo de partida a jugar. Las condiciones por defecto aplican un presupuesto inicial de: <strong>15 de Oro, 3 Materiales de construcción, y 1 Objeto de valor</strong> por jugador, con una producción de Ciudad establecida de base en 10 de Oro.
          </p>

          <div className="space-y-3 text-xs">
            <div className="bg-slate-950/60 p-3.5 rounded-xl border border-slate-800 space-y-2">
              <h4 className="font-bold text-amber-400 font-mono">1. Modo Escaramuza / Enfrentamiento (Competitivo)</h4>
              <p className="text-slate-300">
                Los jugadores expanden el mapa individualmente desde su loseta inicial de nivel I. Se sitúan las losetas II-III boca abajo y las losetas centrales de nivel VI-VII en el eje geométrico del tablero. El objetivo consiste en conquistar las capitales enemigas o controlar la mayor puntuación de losetas controladas tras expirar el contador de rondas (generalmente 7, 10 o 14 rondas).
              </p>
            </div>

            <div className="bg-slate-950/60 p-3.5 rounded-xl border border-slate-800 space-y-2">
              <h4 className="font-bold text-amber-400 font-mono">2. Modo Cooperativo (Alianza Aliada contra el Juego)</h4>
              <p className="text-slate-300">
                Los jugadores unen fuerzas para superar amenazas preestablecidas en el libro de misiones:
                <br />
                - <strong>"Los Campeones de Gelea":</strong> Los héroes coordinan movimientos para depositar un cubo de facción en la Utopía del Dragón central antes de la Ronda 11.
                <br />
                - <strong>"Misión Maldita":</strong> Los héroes deben limpiar los focos de corrupción esparcidos por el mapa. Los combates contra ejércitos neutrales en este modo escalan en dificultad con base en el nivel global alcanzado por el jugador de mayor rango.
              </p>
            </div>

            <div className="bg-slate-950/60 p-3.5 rounded-xl border border-slate-800 space-y-2">
              <h4 className="font-bold text-amber-400 font-mono">3. Modo Campaña (Partidas Solitarias)</h4>
              <p className="text-slate-300">
                Las fuerzas enemigas se controlan mediante dos mazos de Inteligencia Artificial (IA): el mazo de IA de Fuerza, Magia o Habilidad, y el mazo de Hechizos. La IA ejecuta movimientos lógicos lineales y ataca prioritariamente a tus unidades de rango homólogo o inferior. Los modificadores de la IA varían dinámicamente según la dificultad elegida (Fácil, Normal, Difícil, Imposible).
              </p>
            </div>

            <div className="bg-slate-950/60 p-3.5 rounded-xl border border-slate-800 space-y-2">
              <h4 className="font-bold text-amber-400 font-mono">4. Modo Alianza (Por Parejas, 2 vs 2)</h4>
              <p className="text-slate-300">
                Se conforman equipos de dos jugadores sentados en posiciones alternas. Los aliados pueden compartir libremente Oro o Materiales durante su fase activa de turno. Además, si sus héroes se encuentran situados en casillas adyacentes del mapa de aventura, pueden intercambiar Artefactos o Hechizos sin coste de puntos de movimiento. Se permite la defensa compartida de ciudades en caso de asedio de un héroe oponente.
              </p>
            </div>

            <div className="bg-slate-950/60 p-3.5 rounded-xl border border-slate-800 space-y-2">
              <h4 className="font-bold text-amber-400 font-mono">5. Modo Torneo (1 contra 1 Balanceado)</h4>
              <p className="text-slate-300">
                Los rivales realizan una fase de <em>draft</em> y veto de losetas de mapa antes del inicio. Se excluyen los eventos de escenario aleatorios para asegurar un escenario matemático idéntico y equilibrado, resolviéndose los combates mediante un tablero táctico sin dados de asedio (los cuales no existen en el juego; los asaltos de catapulta se resuelven mediante el dado de combate estándar).
              </p>
            </div>

            <div className="bg-slate-950/60 p-4 rounded-xl border border-amber-900/15 space-y-2 mt-2">
              <h4 className="font-bold text-amber-400 font-mono flex items-center gap-1.5 text-sm">
                <span>⚔️ Compendio de Escenarios Avanzados y de Alianza</span>
              </h4>
              <p className="text-slate-300 text-xs">
                El manual oficial de Erathia y sus expansiones incluye los siguientes escenarios de juego definitivos totalmente detallados en esta biblioteca técnica:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs leading-relaxed text-[12px] text-slate-300">
                <div className="border border-slate-900 p-2 rounded bg-slate-950/25">
                  <strong>1. "El Fin del Mundo" (The End of the World):</strong> Breve escenario competitivo o cooperativo de 7 rondas. El vencedor es coronado acumulando la mayor riqueza sobre la loseta central VII de Erathia.
                </div>
                <div className="border border-slate-900 p-2 rounded bg-slate-950/25">
                  <strong>2. "Los Campeones de Gelea" (Champions of Gelea):</strong> Co-op de 11 rondas. Los aliados deben custodiar y asegurar la Utopía del Dragón central antes del turno final.
                </div>
                <div className="border border-slate-900 p-2 rounded bg-slate-950/25">
                  <strong>3. "Utopía Esmeralda" (Emerald Utopia):</strong> Retador PvP. Caza de dragones letales en el centro geométrico del mapa. Vence el primer imperio que irrumpa de forma victoriosa y liquide los custodios Azures.
                </div>
                <div className="border border-slate-900 p-2 rounded bg-slate-950/25">
                  <strong>4. "Misión Maldita" (Cursed Quest):</strong> Limpiar meticulosamente todos los focos de plaga no-muerta en combate contra ejércitos neutrales que escalan según la dificultad regulada (Fácil: 8, Normal: 10, Difícil: 12, Imposible: 14 rondas).
                </div>
                <div className="border border-slate-900 p-2 rounded bg-slate-950/25">
                  <strong>5. "La Búsqueda del Grial" (Hunt for the Grial):</strong> Explora e interactúa con obeliscos para descubrir el Grial enterrado, cavando con tu Héroe para repatriarlo triunfalmente a tu capital de inicio.
                </div>
                <div className="border border-slate-900 p-2 rounded bg-slate-950/25">
                  <strong>6. "War of the Mighty" (La Guerra de los Poderosos):</strong> Choque masivo por parejas (2 vs 2). Se permite el trasvase gratuito de Oro y Madera entre aliados. El objetivo es asediar y derruir la ciudad amurallada de cualquier oponente del equipo rival.
                </div>
                <div className="border border-slate-900 p-2 rounded bg-slate-950/25">
                  <strong>7. "Guardián de la Mazmorra" (Dungeon Guardian):</strong> Cooperativa de 12 rondas. Los héroes deben descender de forma coordinada a las losetas subterráneas oscuras, combatir con ejércitos de imps y basiliscos y reclamar las riquezas custodiadas por el Dragón de Azur jefe.
                </div>
                <div className="border border-slate-900 p-2 rounded bg-slate-950/25">
                  <strong>8. "Tierras Salvajes del Pantano" (Fortress Campaign):</strong> Desafío avanzado que introduce el combate anfibio de la Fortaleza y el cruce de ríos mediante astilleros costeros.
                </div>
                <div className="border border-slate-900 p-2 rounded bg-slate-950/25">
                  <strong>9. "El Despertar de la Torre" (Towering Ascent):</strong> El jugador de la facción Torre debe erigir la Cofradía de Magos nivel 2 antes de la Ronda 10 para proclamar la victoria espiritual y lanzar su portal dimensional.
                </div>
                <div className="border border-slate-900 p-2 rounded bg-slate-950/25">
                  <strong>10. "Ascensión" (Ascending Ascent):</strong> Mapa en bento-grid de montaña. Los jugadores avanzan en vertical enfrentando ejércitos neutrales en cada meseta autónoma. Vence quien lance el Portal Dimensional con la Cofradía de Magos al máximo.
                </div>
                <div className="border border-slate-900 p-2 rounded bg-slate-950/25">
                  <strong>11. "Islas Esmeralda" (Emerald Isles):</strong> PvP marítimo de expansión. Requiere astilleros y navíos. Gana quien conecte por puentes y boyas tres archipiélagos aislados.
                </div>
                <div className="border border-slate-900 p-2 rounded bg-slate-950/25">
                  <strong>12. "Realm of Chaos" (El Reino del Caos):</strong> Mapa laberíntico asimétrico cubierto de magma de Inferno. El héroe debe derrotar a un "Señor del Abismo" para reclamar las losetas centrales.
                </div>
                <div className="border border-slate-900 p-2 rounded bg-slate-950/25">
                  <strong>13. "Inocencia Perdida" (Lost Innocence):</strong> Campaña solitario asimétrica. El héroe inicia con moral negativa y corrupción. Debe purificarse en santuarios antes del asedio final.
                </div>
                <div className="border border-slate-900 p-2 rounded bg-slate-950/25">
                  <strong>14. "Crimson and Clover" (Trébol Carmesí):</strong> PvP de 4 jugadores con losetas fluviales y establos. La velocidad y la gestión óptima de los puntos de movimiento determinan el triunfo.
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 5 */}
        <section className="space-y-3 page-break">
          <h3 className="text-xl font-serif text-amber-300 border-b border-slate-800 pb-1">
            V. Compendio de Campañas Oficiales y Libros de Misiones (10 Facciones)
          </h3>
          <p className="text-xs text-slate-400">
            Cada facción de Erathia expande el juego mediante su propio <strong>Libro de Misiones (Mission Book)</strong> oficial. En cumplimiento de las reglas oficiales del juego de mesa, cada libro contiene tanto mapas de escenario único (Clash / Cooperativo / Alianza) como la campaña histórica asimétrica de la facción:
          </p>

          <h4 className="text-sm font-serif text-amber-450 mt-4 border-b border-slate-900 pb-0.5">⚔️ FACCIONES DEL JUEGO BASE (The Restoration of Erathia)</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-[12px] leading-relaxed">
            
            {/* Castle */}
            <div className="bg-slate-950/60 p-3.5 rounded-xl border border-blue-900/40 space-y-2">
              <div className="flex justify-between items-center border-b border-slate-900 pb-1">
                <strong className="text-blue-350 block font-serif text-sm">🛡️ 1. CASTILLO (Castle)</strong>
                <span className="text-[10px] bg-blue-950 text-blue-300 px-1.5 py-0.5 rounded border border-blue-800/40 font-mono">JUEGO BASE</span>
              </div>
              <p className="text-slate-400 text-[10px] leading-relaxed">
                Acompaña a la Reina Catherine Ironfist en su cruzada militar para reconquistar y purificar el imperio de Erathia asolado por la herejía y los no-muertos:
              </p>
              
              <div className="space-y-1">
                <span className="text-[10px] font-bold text-slate-400 block border-b border-slate-900 pb-0.5">🗺️ MAPAS DE ESCENARIO ÚNICO</span>
                <ul className="list-disc list-inside text-[10px] text-slate-300 space-y-0.5">
                  <li><strong className="text-amber-500">"Land Grab" (Reclamación de Tierras):</strong> 2 Jugadores (Enfrentamiento / Clash). Guerra territorial fronteriza rápida por minas.</li>
                  <li><strong className="text-amber-500">"Resource War" (Guerra de Recursos):</strong> 2-3 Jugadores (Enfrentamiento). Choque intenso por aserraderos centrales.</li>
                  <li><strong className="text-amber-500">"The Holy Grail" (El Santo Grial):</strong> 2-3 Jugadores (Enfrentamiento). Carrera táctica para desenterrar el Grial mediante obeliscos.</li>
                  <li><strong className="text-amber-500">"Allied Front" (Frente Aliado):</strong> 3-4 Jugadores (Alianza 2v2 / 2v1). Batalla campal en dos frentes coordinados.</li>
                </ul>
              </div>

              <div className="space-y-1 pt-1">
                <span className="text-[10px] font-bold text-slate-400 block border-b border-slate-900 pb-0.5">👑 CAMPAÑA: ¡Larga Vida a la Reina!</span>
                <ul className="space-y-1.5 text-slate-300">
                  <li>
                    <strong className="text-amber-400">Misión I: "Una Nueva Alianza" (A New Alliance)</strong>
                    <p className="text-[10px] text-slate-400">Recluta y pacta con las colonias de Grifos imperiales en las altas mesetas montañosas del norte de Erathia para asegurar superioridad aérea.</p>
                  </li>
                  <li>
                    <strong className="text-amber-400">Misión II: "Limpiando la Frontera" (Clearing the Border)</strong>
                    <p className="text-[10px] text-slate-400">Pacificando los caminos del este. Libera los enclaves mineros imperiales ocupados por bárbaros insurrectos de Stronghold antes de la Ronda 12.</p>
                  </li>
                  <li>
                    <strong className="text-amber-400">Misión III: "Fiebre del Oro" (Gold Rush)</strong>
                    <p className="text-[10px] text-slate-400">Amasa una inmensa tesorería en los aserraderos reales y valles templados de Erathia para financiar la campaña militar del asedio a Steadwick.</p>
                  </li>
                </ul>
              </div>
            </div>

            {/* Dungeon */}
            <div className="bg-slate-950/60 p-3.5 rounded-xl border border-purple-900/40 space-y-2">
              <div className="flex justify-between items-center border-b border-slate-900 pb-1">
                <strong className="text-purple-355 block font-serif text-sm">👁️ 2. MAZMORRA (Dungeon)</strong>
                <span className="text-[10px] bg-purple-950 text-purple-300 px-1.5 py-0.5 rounded border border-purple-800/40 font-mono">JUEGO BASE</span>
              </div>
              <p className="text-slate-400 text-[10px] leading-relaxed">
                Explora pasajes oscuros y cuevas subterráneas de Nighon para forjar el imperio definitivo de trogloditas, arpías y dragones negros:
              </p>

              <div className="space-y-1">
                <span className="text-[10px] font-bold text-slate-400 block border-b border-slate-900 pb-0.5">🗺️ MAPAS DE ESCENARIO ÚNICO</span>
                <ul className="list-disc list-inside text-[10px] text-slate-300 space-y-0.5">
                  <li><strong className="text-amber-500">"Tomb Raiders" (Saqueadores de Tumbas):</strong> 2 Jugadores (Enfrentamiento / Clash). Saqueo competitivo de catacumbas defendidas por criptas.</li>
                  <li><strong className="text-amber-500">"Clash of Queens" (Duelo de Reinas):</strong> 2 Jugadores (Enfrentamiento). Batalla asimétrica entre el mundo de la superficie y el subterráneo.</li>
                </ul>
              </div>

              <div className="space-y-1 pt-1">
                <span className="text-[10px] font-bold text-slate-400 block border-b border-slate-900 pb-0.5">👑 CAMPAÑA: Los Señores de Nighon</span>
                <ul className="space-y-1.5 text-slate-300">
                  <li>
                    <strong className="text-amber-400">Misión I: "Infiltración Profunda" (Deep Infiltration)</strong>
                    <p className="text-[10px] text-slate-400">Los señores de Nighon se mueven en secreto por el subsuelo, evitando patrullas de superficie, para abrir un portal dimensional secundario.</p>
                  </li>
                  <li>
                    <strong className="text-amber-400">Misión II: "Los Túneles del Oro" (Gold Tunnels)</strong>
                    <p className="text-[10px] text-slate-400">Captura y flaggea las ricas minas de oro subterráneas defendidas por temibles contempladores y trogloditas para financiar el asalto masivo.</p>
                  </li>
                  <li>
                    <strong className="text-amber-400">Misión III: "Guardián de la Mazmorra" (Dungeon Guardian)</strong>
                    <p className="text-[10px] text-slate-400">Despierta al gran Dragón Negro ancestral en el foso volcánico central de Nighon para aniquilar los ejércitos arcanos de la Torre.</p>
                  </li>
                </ul>
              </div>
            </div>

            {/* Necropolis */}
            <div className="bg-slate-950/60 p-3.5 rounded-xl border border-slate-750 space-y-2">
              <div className="flex justify-between items-center border-b border-slate-900 pb-1">
                <strong className="text-slate-300 block font-serif text-sm">💀 3. NECRÓPOLIS (Necropolis)</strong>
                <span className="text-[10px] bg-slate-800 text-slate-300 px-1.5 py-0.5 rounded border border-slate-650 font-mono">JUEGO BASE</span>
              </div>
              <p className="text-slate-400 text-[10px] leading-relaxed">
                El siniestro nigromante Sandro planea en Deyja la mayor conspiración de no-muertos mediante la forja de reliquias corruptas:
              </p>

              <div className="space-y-1">
                <span className="text-[10px] font-bold text-slate-400 block border-b border-slate-900 pb-0.5">🗺️ MAPAS DE ESCENARIO ÚNICO</span>
                <ul className="list-disc list-inside text-[10px] text-slate-300 space-y-0.5">
                  <li><strong className="text-amber-500">"The Hunt" (La Caza):</strong> 1-2 Jugadores (Solo / Cooperativo). Caza y derrota de forma coordinada a un terrible dragón que devasta Deyja.</li>
                  <li><strong className="text-amber-500">"Brave New World" (Un Mundo Feliz):</strong> 2 Jugadores (Cooperativo). Descubrimiento e invasión coordinada de un archipiélago sagrado.</li>
                </ul>
              </div>

              <div className="space-y-1 pt-1">
                <span className="text-[10px] font-bold text-slate-400 block border-b border-slate-900 pb-0.5">👑 CAMPAÑA: La Sombra de Sandro (Sandro's Shadow)</span>
                <ul className="space-y-1.5 text-slate-300">
                  <li>
                    <strong className="text-amber-400">Misión I: "Sandro el Nigromante" (Sandro's Ambition)</strong>
                    <p className="text-[10px] text-slate-400">Busca 4 fragmentos malditos ocultos en tumbas del mapa de aventura y reúnelos en la Colina del Esqueleto para fusionar la Capa del Rey No-Muerto.</p>
                  </li>
                  <li>
                    <strong className="text-amber-400">Misión II: "La Cosecha Nocturna" (Night Harvest)</strong>
                    <p className="text-[10px] text-slate-400">Invade 3 campos y asentamientos agrarios humanos neutrales; cada victoria añade automáticamente regimientos masivos de esqueletos a tus filas.</p>
                  </li>
                  <li>
                    <strong className="text-amber-400">Misión III: "El Trono del Rey Esqueleto"</strong>
                    <p className="text-[10px] text-slate-400">Combate a gran escala contra Caballeros de la Muerte disidentes de Deyja. Vence a su cabecilla insurrecto para asegurar la soberanía de Deyja.</p>
                  </li>
                </ul>
              </div>
            </div>

          </div>

          <h4 className="text-sm font-serif text-amber-450 mt-4 border-b border-slate-900 pb-0.5">🧩 FACCIONES DE EXPANSIONES (Facciones Adicionales)</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-[12px] leading-relaxed">

            {/* Rampart */}
            <div className="bg-slate-950/60 p-3.5 rounded-xl border border-emerald-900/40 space-y-2">
              <div className="flex justify-between items-center border-b border-slate-900 pb-1">
                <strong className="text-emerald-350 block font-serif text-sm">🌿 4. MURALLAS (Rampart)</strong>
                <span className="text-[10px] bg-emerald-950 text-emerald-300 px-1.5 py-0.5 rounded border border-emerald-800/40 font-mono">EXPANSIÓN</span>
              </div>
              <p className="text-slate-400 text-[10px] leading-relaxed">
                Protege el equilibrio natural de los Valles de AvLee aliándote con elfos Rangers, centauros veloces y majestuosos dragones dorados:
              </p>

              <div className="space-y-1">
                <span className="text-[10px] font-bold text-slate-400 block border-b border-slate-900 pb-0.5">🗺️ MAPAS DE ESCENARIO ÚNICO</span>
                <ul className="list-disc list-inside text-[10px] text-slate-300 space-y-0.5">
                  <li><strong className="text-amber-500">"Clear the Woods" (Despejar Bosques):</strong> 2 Jugadores (Enfrentamiento / Clash). Batalla territorial rápida en el Claro del Unicornio.</li>
                  <li><strong className="text-amber-500">"The Dragon's Eye" (El Ojo del Dragón):</strong> 2 Jugadores (Cooperativo). Alianza para extraer gemas mágicas en cuevas de dragones verdes.</li>
                </ul>
              </div>

              <div className="space-y-1 pt-1">
                <span className="text-[10px] font-bold text-slate-400 block border-b border-slate-900 pb-0.5">👑 CAMPAÑA: Valles Élficos (Elven Valleys)</span>
                <ul className="space-y-1.5 text-slate-300">
                  <li>
                    <strong className="text-amber-400">Misión I: "El Despertar" (The Awakening)</strong>
                    <p className="text-[10px] text-slate-400">Defiende los enclaves arcanos del claro sagrado ante patrullas avanzadas de Necrópolis. Erige el Hogar de Elfos antes de la ronda 9.</p>
                  </li>
                  <li>
                    <strong className="text-amber-400">Misión II: "La Cacería de los Unicornios" (Unicorn Hunt)</strong>
                    <p className="text-[10px] text-slate-400">Encuentra y amansa al majestuoso Unicornio Sagrado en el claro del bosque para sanar la plaga maldita que pudre las raíces de AvLee.</p>
                  </li>
                  <li>
                    <strong className="text-amber-400">Misión III: "El Bastión de las Hojas" (Leaf Bastion)</strong>
                    <p className="text-[10px] text-slate-400">Eleva tu metrópolis a su esplendor arquitectónico máximo (Acantilados de Dragón Dorado) y resiste un violento asedio de las hordas de Mazmorra.</p>
                  </li>
                </ul>
              </div>
            </div>

            {/* Fortress */}
            <div className="bg-slate-950/60 p-3.5 rounded-xl border border-teal-900/40 space-y-2">
              <div className="flex justify-between items-center border-b border-slate-900 pb-1">
                <strong className="text-teal-350 block font-serif text-sm">🦎 5. FORTALEZA (Fortress)</strong>
                <span className="text-[10px] bg-teal-950 text-teal-300 px-1.5 py-0.5 rounded border border-teal-800/40 font-mono">EXPANSIÓN</span>
              </div>
              <p className="text-slate-400 text-[10px] leading-relaxed">
                Tazar y los comandantes reptiles de Tatalia luchan en la ciénaga por declarar su independencia ante las exacciones de Castillo:
              </p>

              <div className="space-y-1">
                <span className="text-[10px] font-bold text-slate-400 block border-b border-slate-900 pb-0.5">🗺️ MAPAS DE ESCENARIO ÚNICO</span>
                <ul className="list-disc list-inside text-[10px] text-slate-300 space-y-0.5">
                  <li><strong className="text-amber-500">"Swamp Skirmish" (Escaramuza en la Ciénaga):</strong> 2 Jugadores (Enfrentamiento). Lucha táctica pesada en ciénagas fanganosas.</li>
                  <li><strong className="text-amber-500">"Taming the Beast" (Domando la Bestia):</strong> 2 Jugadores (Cooperativo). Cooperación militar para apaciguar e inmovilizar una Hidra Gigante.</li>
                </ul>
              </div>

              <div className="space-y-1 pt-1">
                <span className="text-[10px] font-bold text-slate-400 block border-b border-slate-900 pb-0.5">👑 CAMPAÑA: Domando la Ciénaga (Taming the Swamp)</span>
                <ul className="space-y-1.5 text-slate-300">
                  <li>
                    <strong className="text-amber-400">Misión I: "La Rebelión de la Ciénaga" (Swamp Revolt)</strong>
                    <p className="text-[10px] text-slate-400">Reúne las tribus de Gnolls y Lizardmen del pantano, destruye 3 alcabalas e interceptores imperiales de Castillo.</p>
                  </li>
                  <li>
                    <strong className="text-amber-400">Misión II: "Entre Dos Fuegos" (Between Two Fires)</strong>
                    <p className="text-[10px] text-slate-400">Misión extrema de defensa urbana. Defiende la metrópolis del pantano contra un asalto combinado de Castillo e Inferno.</p>
                  </li>
                  <li>
                    <strong className="text-amber-400">Misión III: "La Guarida de las Hidras de Caos"</strong>
                    <p className="text-[10px] text-slate-400">Navega el caudal de agua central, elude avispas dragón y entra en el Templo Sagrado para reclamar a la Hidra de Caos como unidad legendaria.</p>
                  </li>
                </ul>
              </div>
            </div>

            {/* Tower */}
            <div className="bg-slate-950/60 p-3.5 rounded-xl border border-cyan-900/40 space-y-2">
              <div className="flex justify-between items-center border-b border-slate-900 pb-1">
                <strong className="text-cyan-350 block font-serif text-sm">⚡ 6. TORRE (Tower)</strong>
                <span className="text-[10px] bg-cyan-950 text-cyan-300 px-1.5 py-0.5 rounded border border-cyan-800/40 font-mono">EXPANSIÓN</span>
              </div>
              <p className="text-slate-400 text-[10px] leading-relaxed">
                Los alquimistas y magos de Bracada ascienden las laderas nevadas para restaurar autómatas golems e ingenios celestes:
              </p>

              <div className="space-y-1">
                <span className="text-[10px] font-bold text-slate-400 block border-b border-slate-900 pb-0.5">🗺️ MAPAS DE ESCENARIO ÚNICO</span>
                <ul className="list-disc list-inside text-[10px] text-slate-300 space-y-0.5">
                  <li><strong className="text-amber-500">"Alchemical Duel" (Duelo Alquímico):</strong> 2 Jugadores (Enfrentamiento). Disputa de laboratorios por Gemas y Mercurio.</li>
                  <li><strong className="text-amber-500">"Arcane Secrets" (Secretos Arcanos):</strong> 2 Jugadores (Cooperativo). Búsqueda de manuscritos arcanos en santuarios helados.</li>
                </ul>
              </div>

              <div className="space-y-1 pt-1">
                <span className="text-[10px] font-bold text-slate-400 block border-b border-slate-900 pb-0.5">👑 CAMPAÑA: El Ascenso Alquímico (The Alchemical Ascent)</span>
                <ul className="space-y-1.5 text-slate-300">
                  <li>
                    <strong className="text-amber-400">Misión I: "La Cofradía de las Nubes" (Mage Clouds)</strong>
                    <p className="text-[10px] text-slate-400">Amasa inmensos recursos de Oro y Gemas para elevar la Cofradía de Magos a Nivel IV e invocar el apoyo místico de los Titanes.</p>
                  </li>
                  <li>
                    <strong className="text-amber-400">Misión II: "El Secreto de los Golems" (The Golem Secret)</strong>
                    <p className="text-[10px] text-slate-400">Rastrea viales de azufre y mercurio en las laderas congeladas para insuflar vida a un regimiento de golems inmunes a conjuros mágicos.</p>
                  </li>
                  <li>
                    <strong className="text-amber-400">Misión III: "El Portal Celestial" (The Cloud Portal)</strong>
                    <p className="text-[10px] text-slate-400">Activa y protege el gran Portal de las Tormentas durante 5 rondas consecutivas de oleadas de elementales salvajes desatados.</p>
                  </li>
                </ul>
              </div>
            </div>

            {/* Inferno */}
            <div className="bg-slate-950/60 p-3.5 rounded-xl border border-red-900/40 space-y-2">
              <div className="flex justify-between items-center border-b border-slate-900 pb-1">
                <strong className="text-red-350 block font-serif text-sm">🔥 7. INFIERNO (Inferno)</strong>
                <span className="text-[10px] bg-red-950 text-red-300 px-1.5 py-0.5 rounded border border-red-800/40 font-mono">EXPANSIÓN</span>
              </div>
              <p className="text-slate-400 text-[10px] leading-relaxed">
                Los Kreegans desatan los fuegos abrasadores del Abismo para subyugar las campiñas humanas de Erathia e imponer su reino de terror:
              </p>

              <div className="space-y-1">
                <span className="text-[10px] font-bold text-slate-400 block border-b border-slate-900 pb-0.5">🗺️ MAPAS DE ESCENARIO ÚNICO</span>
                <ul className="list-disc list-inside text-[10px] text-slate-300 space-y-0.5">
                  <li><strong className="text-amber-500">"Hellish Incursion" (Incursión Infernal):</strong> 2 Jugadores (Enfrentamiento). Combate en arenas volcánicas inflamables.</li>
                  <li><strong className="text-amber-500">"Devilish Pact" (Pacto Diabólico):</strong> 2 Jugadores (Cooperativo). Cooperen para corromper templos sagrados de Castillo.</li>
                </ul>
              </div>

              <div className="space-y-1 pt-1">
                <span className="text-[10px] font-bold text-slate-400 block border-b border-slate-900 pb-0.5">👑 CAMPAÑA: Dominio del Inframundo (Underworld Dominion)</span>
                <ul className="space-y-1.5 text-slate-300">
                  <li>
                    <strong className="text-amber-400">Misión I: "Invasión de Azufre" (Sulfur Incursion)</strong>
                    <p className="text-[10px] text-slate-400">Abre tres Portales del Abismo en territorio fronterizo para invocar hordas de diablillos antes de que expire la ronda 9.</p>
                  </li>
                  <li>
                    <strong className="text-amber-400">Misión II: "Cosecha de Almas" (Soul Harvest)</strong>
                    <p className="text-[10px] text-slate-400">Saquea villas neutrales y sacrifica regimientos humanos cautivos en el altar de azufre para generar energía caótica.</p>
                  </li>
                  <li>
                    <strong className="text-amber-400">Misión III: "El Trono de Fuego Infernal" (Hellfire Throne)</strong>
                    <p className="text-[10px] text-slate-400">Enfréntate al Arcángel Guardián en un terreno devastado por ríos de lava ardiente que aniquilan tropas ordinarias terrestres.</p>
                  </li>
                </ul>
              </div>
            </div>

            {/* Stronghold */}
            <div className="bg-slate-950/60 p-3.5 rounded-xl border border-amber-900/40 space-y-2">
              <div className="flex justify-between items-center border-b border-slate-900 pb-1">
                <strong className="text-amber-500 block font-serif text-sm">👹 8. BASTIÓN (Stronghold)</strong>
                <span className="text-[10px] bg-amber-950 text-amber-300 px-1.5 py-0.5 rounded border border-amber-800/40 font-mono">EXPANSIÓN</span>
              </div>
              <p className="text-slate-400 text-[10px] leading-relaxed">
                El violento clan bárbaro de Kilgor se bate en contiendas brutales para unificar los clanes de Krewlod bajo un único puño:
              </p>

              <div className="space-y-1">
                <span className="text-[10px] font-bold text-slate-400 block border-b border-slate-900 pb-0.5">🗺️ MAPAS DE ESCENARIO ÚNICO</span>
                <ul className="list-disc list-inside text-[10px] text-slate-300 space-y-0.5">
                  <li><strong className="text-amber-500">"Savage Lands" (Tierras Salvajes):</strong> 2 Jugadores (Enfrentamiento). Combates en páramos desérticos que aumentan la fuerza de ataque.</li>
                  <li><strong className="text-amber-500">"Tribal Unity" (Unidad Tribal):</strong> 2 Jugadores (Cooperativo). Derrotar a un chamán orco renegado que divide a los clanes.</li>
                </ul>
              </div>

              <div className="space-y-1 pt-1">
                <span className="text-[10px] font-bold text-slate-400 block border-b border-slate-900 pb-0.5">👑 CAMPAÑA: El Festival de la Vida (Festival of Life)</span>
                <ul className="space-y-1.5 text-slate-300">
                  <li>
                    <strong className="text-amber-400">Misión I: "Rito Salvaje" (Wild Rite)</strong>
                    <p className="text-[10px] text-slate-400">Kilgor debe rastrear y desafiar a un gran monstruo Behemoth neutral élite cuerpo a cuerpo en combate singular en menos de 9 rondas.</p>
                  </li>
                  <li>
                    <strong className="text-amber-400">Misión II: "El Sendero del Cazador" (Hunter's Path)</strong>
                    <p className="text-[10px] text-slate-400">Explora las mesetas y captura las cuevas de Behemoths para alistar estas gigantescas bestias prehistóricas de melé pesada.</p>
                  </li>
                  <li>
                    <strong className="text-amber-400">Misión III: "El Triunfo de Kilgor"</strong>
                    <p className="text-[10px] text-slate-400">Guerra total contra los caudillos bárbaros rebeldes. Reclama el trono absoluto ganando el combate PvP final de Fuerza.</p>
                  </li>
                </ul>
              </div>
            </div>

            {/* Conflux */}
            <div className="bg-slate-950/60 p-3.5 rounded-xl border border-indigo-900/40 space-y-2">
              <div className="flex justify-between items-center border-b border-slate-900 pb-1">
                <strong className="text-indigo-350 block font-serif text-sm">🌀 9. CONFLUENCIA (Conflux)</strong>
                <span className="text-[10px] bg-indigo-950 text-indigo-300 px-1.5 py-0.5 rounded border border-indigo-800/40 font-mono">EXPANSIÓN</span>
              </div>
              <p className="text-slate-400 text-[10px] leading-relaxed">
                Restaura el delicado equilibrio cósmico de los planos elementales de fuego, tierra, agua y aire ante la codicia mortal:
              </p>

              <div className="space-y-1">
                <span className="text-[10px] font-bold text-slate-400 block border-b border-slate-900 pb-0.5">🗺️ MAPAS DE ESCENARIO ÚNICO</span>
                <ul className="list-disc list-inside text-[10px] text-slate-300 space-y-0.5">
                  <li><strong className="text-amber-500">"Elemental Skirmish" (Escaramuza):</strong> 2 Jugadores (Enfrentamiento). Arena mágica de inmunidad elemental cambiante.</li>
                  <li><strong className="text-amber-500">"Astral Convergence" (Convergencia Astral):</strong> 2 Jugadores (Cooperativo). Protejan los pilares elementales del devorador astral.</li>
                </ul>
              </div>

              <div className="space-y-1 pt-1">
                <span className="text-[10px] font-bold text-slate-400 block border-b border-slate-900 pb-0.5">👑 CAMPAÑA: El Balance Elemental (The Elemental Balance)</span>
                <ul className="space-y-1.5 text-slate-300">
                  <li>
                    <strong className="text-amber-400">Misión I: "Sellando las Grietas" (Sealing the Rifts)</strong>
                    <p className="text-[10px] text-slate-400">Cierra los 4 rifts elementales corruptores mediante pergaminos de exorcismo en los límites del mapa antes de la ronda 10.</p>
                  </li>
                  <li>
                    <strong className="text-amber-400">Misión II: "La Forja de los Elementos"</strong>
                    <p className="text-[10px] text-slate-400">Une esencias puras de agua y fuego en la forja rúnica para amalgamar y alistar Elementales de Tormenta de daño a distancia.</p>
                  </li>
                  <li>
                    <strong className="text-amber-400">Misión III: "Armonía Astral"</strong>
                    <p className="text-[10px] text-slate-400">Combate a gran escala en el plano astral contra dragones elementales desbocados. En esta dimensión está vedado el ataque físico básico.</p>
                  </li>
                </ul>
              </div>
            </div>

            {/* Cove */}
            <div className="bg-slate-950/60 p-3.5 rounded-xl border border-sky-900/40 space-y-2">
              <div className="flex justify-between items-center border-b border-slate-900 pb-1">
                <strong className="text-sky-350 block font-serif text-sm">🏴‍☠️ 10. BAHÍA (Cove)</strong>
                <span className="text-[10px] bg-sky-950 text-sky-300 px-1.5 py-0.5 rounded border border-sky-800/40 font-mono">EXPANSIÓN</span>
              </div>
              <p className="text-slate-400 text-[10px] leading-relaxed">
                Navega y domina las embravecidas aguas de Regna, asalta fortines costeros y capitanea piratas, aves de tormenta y temibles serpentinos:
              </p>

              <div className="space-y-1">
                <span className="text-[10px] font-bold text-slate-400 block border-b border-slate-900 pb-0.5">🗺️ MAPAS DE ESCENARIO ÚNICO</span>
                <ul className="list-disc list-inside text-[10px] text-slate-300 space-y-0.5">
                  <li><strong className="text-amber-500">"Isles of Regna" (Islas de Regna):</strong> 2-3 Jugadores (Enfrentamiento). Batalla naval e insular por boyas y tesoros a la deriva.</li>
                  <li><strong className="text-amber-500">"The Lost Fleet" (La Flota Perdida):</strong> 2 Jugadores (Cooperativo). Cooperación marítima para salvar galeones piratas del arrecife esqueleto.</li>
                </ul>
              </div>

              <div className="space-y-1 pt-1">
                <span className="text-[10px] font-bold text-slate-400 block border-b border-slate-900 pb-0.5">👑 CAMPAÑA: Mares Salvajes (Savage Seas)</span>
                <ul className="space-y-1.5 text-slate-300">
                  <li>
                    <strong className="text-amber-400">Misión I: "Herrumbre y Polvo" (Rust and Dust)</strong>
                    <p className="text-[10px] text-slate-400">El Capitán Jeremy debe despejar canales controlados por esqueletos piratas y boyas fantasma en menos de 10 rondas. Requiere barcos y astilleros.</p>
                  </li>
                  <li>
                    <strong className="text-amber-400">Misión II: "Bajo la Bandera Alegre" (Under the Jolly Roger)</strong>
                    <p className="text-[10px] text-slate-400">Une las tripulaciones libres asaltando guarniciones costeras de Castillo y protegiendo a toda costa la casilla del "Náufrago Superviviente".</p>
                  </li>
                  <li>
                    <strong className="text-amber-400">Misión III: "El Cuerno del Abismo" (Horn of the Abyss)</strong>
                    <p className="text-[10px] text-slate-400">El Capitán Bidley navega al remolino volcánico central, desciende al foso del Templo del Mar y derrota a la Serpiente Marina mítica.</p>
                  </li>
                </ul>
              </div>
            </div>

          </div>
        </section>

        {/* Section 6 */}
        <section className="space-y-4 page-break">
          <h3 className="text-xl font-serif text-amber-300 border-b border-slate-800 pb-1">
            VI. Flujo Detallado de Rondas y Fases de Turno (Astrología vs Eventos)
          </h3>
          <p className="text-xs">
            Una partida se desarrolla en una sucesión de rondas integradas por una Fase de Inicio Global y los Turnos Individuales de cada jugador. <strong>Es fundamental entender que las Cartas de Anuncio Astrológico y las de Eventos de Escenario son totalmente independientes y representan dos tipos de mazo distintos:</strong>
          </p>

          <div className="bg-slate-950 p-4 border border-slate-800 rounded-xl space-y-3">
            <h4 className="text-sm font-mono text-amber-400 uppercase tracking-widest font-bold">1. Fase de Inicio Global (Al principio de cada Ronda)</h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs leading-relaxed">
              <div className="border border-slate-800/60 p-2.5 rounded bg-slate-950/40">
                <span className="text-emerald-400 block font-semibold">🔨 Rondas Impares (Ingresos)</span>
                Todos los imperios cobran ingresos según la producción registrada en el track de ciudad más las minas conquistadas en el mapa.
                <br />
                <strong className="text-red-400">Excepción Absoluta: En la Ronda 1 inicial no se cobra producción.</strong>
              </div>
              <div className="border border-slate-800/60 p-2.5 rounded bg-slate-950/40">
                <span className="text-sky-400 block font-semibold">🔮 Rondas Pares (Cartas Astrológicas)</span>
                Se roba una carta del mazo de <strong>Anuncios Astrológicos</strong> (p. ej. Semana de la Gema, Mes de la Plaga) que afecta el clima cósmico o la economía general. Su modificador se mantiene hasta el fin de la ronda actual para todos los imperios.
              </div>
              <div className="border border-slate-800/60 p-2.5 rounded bg-slate-950/40">
                <span className="text-purple-400 block font-semibold">🔄 Eventos de Escenario (Mazo de Eventos)</span>
                Inmediatamente después de la fase de recursos o astrológica, se verifica el libro o se roba del mazo de <strong>Eventos de Escenario</strong>. Son sucesos fijos que colocan ejércitos hostiles invisibles, bloquean sendas o spawnean tesoros físicos adyacentes.
              </div>
            </div>
          </div>

          <div className="space-y-3 text-xs">
            <h4 className="text-sm font-mono text-amber-400 uppercase tracking-widest font-bold">2. El Turno del Héroe Activo (Fases Progresivas)</h4>
            <div className="space-y-2">
              <div className="p-3 bg-slate-950/40 border border-slate-800 rounded-lg">
                <strong className="text-amber-200">A. Fase de Reposición y Suministro:</strong>
                <p className="mt-1 text-slate-300">
                  - El héroe conserva o descarta las cartas de mano excedentes que desee de su mazo de Fuerza y Magia.
                  <br />
                  - A continuación, roba cartas hasta restablecer su límite máximo de mano (determinado por su experiencia: Nivel I = 4 cartas, Nivel II-III = 5 cartas, etc.).
                  <br />
                  - Repone las tres fichas de Puntos de Movimiento (PM) verdes en su tarjeta de héroe y reactiva sus coronas de habilidades expertas para este turno.
                </p>
              </div>

              <div className="p-3 bg-slate-950/40 border border-slate-800 rounded-lg">
                <strong className="text-amber-200">B. Fase de Movimiento y Exploración:</strong>
                <p className="mt-1 text-slate-300">
                  El héroe gasta sus 3 PM disponibles:
                  <br />
                  - <strong>Moverse:</strong> Moverse a un hexágono transitable adyacente consume 1 PM. Cruzar bordes continuos de hielo o rocosos no navegables está estrictamente vedado.
                  <br />
                  - <strong>Explorar:</strong> Voltear e interactuar con una loseta de mapa adyacente consume 1 PM. Debe conectarse por el camino del mapa secundando el patrón de rotaciones válidas.
                  <br />
                  - <strong>Custodios:</strong> Entrar a localizaciones con enemigos neutrales custodiándolas bloquea tu paso y te obliga a iniciar un combate de forma inmediata. Un Héroe secundario tiene un límite de 2 PM fijos.
                </p>
              </div>

              <div className="p-3 bg-slate-950/40 border border-slate-800 rounded-lg">
                <strong className="text-amber-200">C. Acción de Ciudad (Limitada a 1 por turno):</strong>
                <p className="mt-1 text-slate-300">
                  El jugador puede voltear su ficha de acción de metrópolis para realizar una de las siguientes opciones:
                  <br />
                  - <strong>Construir un Edificio:</strong> Edifica una teja de ciudad pagando su coste en Oro y Materiales.
                  <br />
                  - <strong>Reclutar Unidades:</strong> Alista tropas de las viviendas ya construidas gastando Oro. Puede también pagar el costeo correspondiente para mejorar tropas básicas a su categoría de Élite.
                  <br />
                  - <strong>Adquirir Hechizos:</strong> Visita la Cofradía de Magos construida para robar y asimilar nuevos hechizos directamente en su mano de cartas.
                </p>
              </div>
            </div>
          </div>
        </section>

         {/* Section 7 */}
        <section className="space-y-4 page-break">
          <h3 className="text-xl font-serif text-amber-300 border-b border-slate-800 pb-1">
            VII. Desarrollo Urbano, Reclutamiento y Economía
          </h3>
          <p className="text-xs">
            Su ciudad central provee la capacidad logística de alistar mejores tropas y conjurar magias letales. Las tejas de capital se organizan en tres niveles residenciales e industriales bien ordenados.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
            <div className="bg-slate-950/60 p-3 rounded-lg border border-slate-800 space-y-1.5">
              <strong className="text-amber-400 block font-mono font-bold">🏗️ Coste de Edificaciones Principales</strong>
              <p className="text-slate-400">Cada jugador puede erigir un edificio por turno empleando su ficha de metrópolis:</p>
              <ul className="list-disc pl-4 space-y-1 text-slate-300">
                <li><strong>Pozo Municipal (Producción Inicial):</strong> Integrado de forma predeterminada con coste cero.</li>
                <li><strong>Ayuntamiento (Town Hall):</strong> Cuesta 10 Oro y 2 Materiales. Activa +5 de Oro adicionales a tu producción global.</li>
                <li><strong>Vivienda Tier I (Bronce):</strong> Construida por defecto. Permite reclutar ejércitos de nivel básico (ej. Centauros, Esqueletos, Alabarderos).</li>
                <li><strong>Vivienda Tier II (Plata):</strong> Cuesta 10 Oro + 3 Materiales. Habilita ejércitos intermedios de plata.</li>
                <li><strong>Vivienda Tier III (Oro/Fuerte):</strong> Cuesta 15 Oro, 4 Materiales, y 2 de Valor. Despliega campeones legendarios.</li>
                <li><strong>Cofradía de Magos Nivel 1:</strong> Cuesta 5 Oro. Entrega el <strong>Libro de Hechizos</strong> indispensable para lanzar cartas ordinarias de magia.</li>
                <li><strong>Cofradía de Magos Avanzada (Lv. 2):</strong> Cuesta 10 Oro y 1 Objeto de valor. Habilita hechizos de categoría intermedia e inmunes al efecto de contra-hechizo básico de los oponentes.</li>
              </ul>
            </div>

            <div className="bg-slate-950/60 p-3 rounded-lg border border-slate-800 space-y-1.55">
              <strong className="text-amber-400 block font-mono font-bold">⚔️ Logística de Reclutamiento y Ascenso</strong>
              <p className="text-slate-400">Para reclutar fuerzas activas, pague su contravalor de reclutamiento impreso en la carta de unidad:</p>
              <ul className="list-disc pl-4 space-y-1 text-slate-300 text-[12px]">
                <li><strong>Capacidad Máxima de Dwellings:</strong> Solo puede alistar un número de tropas igual o inferior al coeficiente de viviendas activas en su ciudad por turno de reclutamiento.</li>
                <li><strong>Acción de Población / Upgrade:</strong> Voltee la teja de vivienda y abone la diferencia exacta en Oro para promocionar y mejorar un regimiento básico existente a su versión reforzada (ej. Arcángel a Arcángel Supremo, o Esqueleto a Esqueleto Guerrero).</li>
                <li><strong>Mina del Reino:</strong> Al adueñarse de un pozo minero adyacente, coloque un cubo de su color de facción. El primer héroe en reclamarlo cobra la producción indicada de forma inmediata y directa.</li>
                <li><strong>Límite de héroe secundario (Reclutamiento):</strong> Un héroe secundario solo puede portar hasta un máximo de 3 cartas de unidad simultáneas en su mochila personal.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Section 8 */}
        <section className="space-y-4 page-break">
          <h3 className="text-xl font-serif text-amber-300 border-b border-slate-800 pb-1">
            VIII. Reglamento de Combate Táctico, Movimiento y Máquinas de Guerra
          </h3>
          <p className="text-xs">
            Cuando un héroe penetra en un hexágono bloqueado por custodios enemigos, o inicia un asalto sobre un rival de mesa, se detiene la aventura para activar la reja de combate táctico.
          </p>

          <div className="bg-slate-950 p-4 border border-slate-800 rounded-xl space-y-3 font-mono text-xs">
            <div className="border-b border-slate-900 pb-2">
              <strong className="text-amber-400 flex items-center gap-1.5 font-serif text-sm font-bold">⚔️ El Tablero Táctico de Combate (4x5)</strong>
              <p className="font-sans text-xs mt-1 leading-relaxed text-slate-300">
                El grid consta de 4 columnas de ancho por 5 de alto. El bando atacante despliega sus fuerzas en las primeras columnas (Casillas de Vanguardia y Retaguardia de su linde lateral). El defensor se coloca en el linde opuesto. El límite absoluto de unidades que un héroe puede controlar de forma simultánea es de 5 unidades en mesa.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              <div className="bg-slate-950/40 p-2.5 rounded border border-slate-800/80">
                <span className="text-amber-300 block font-semibold font-sans">1. Iniciativa & Activación</span>
                Las unidades actúan con base en su índice estricto de Iniciativa (de mayor a menor). Si coinciden, la tropa del ATACANTE se activa siempre primero. En combates contra neutrales aislados, el jugador a la izquierda asume el mando de las fuerzas neutras para jugar de forma inteligente contra el heroe activo.
              </div>
              <div className="bg-slate-950/40 p-2.5 rounded border border-slate-800/80">
                <span className="text-amber-300 block font-semibold font-sans">2. Mecánica de Daño</span>
                Fuerza de Ataque de la Tropa Activa + Tirada de Dado Rojo de Combate (-1, 0, +1) menos Resistencia de la Tropa Defensora. Se distribuyen fichas de herida sobre la carta. Al igualar los puntos de vida de la tropa, esta se retira de la grilla.
              </div>
              <div className="bg-slate-950/40 p-2.5 rounded border border-slate-800/80">
                <span className="text-amber-300 block font-semibold font-sans">3. La Represalia (Contraataque)</span>
                Toda unidad adyacente que sufra impacto directo de Melé y sobreviva, responderá ipso facto con una represalia gratuita sobre su agresor. Esta defensa está estrictamente limitada a <strong>1 represalia máxima por ronda de combate</strong>. Las represalias no encadenan otros golpes de vuelta.
              </div>
            </div>
          </div>

          <div className="space-y-2 text-xs">
            <h4 className="font-bold text-amber-400 font-mono">Reglas de Movimiento y Tipos de Tropa en el Grid:</h4>
            <ul className="list-disc pl-6 space-y-1.5 text-slate-300">
              <li>
                <strong>Tropas Terrestres:</strong> Avanzan ortogonalmente hasta su límite de casillas de movimiento por ronda. No pueden cruzar por casillas ocupadas por elementos hostiles, aliados u obstáculos impenetrables.
              </li>
              <li>
                <strong>Tropas Voladoras:</strong> Pueden saltar y pasar libremente sobre cualquier columna ocupada u obstáculo pesado de combate para caer de forma directa en su casilla de destino final.
              </li>
              <li>
                <strong>Tropas a Distancia (Rangers/Arqueros):</strong> Disparan a discreción sobre cualquier casilla del grid táctico sin límite de distancia. Experimentan el <strong>Penalizador de Melé</strong> (lanzar dos dados rojos de ataque y seleccionar el peor resultado de daño posible) si un oponente está adyacente a ellos o si atacan de retaguardia a retaguardia contraria.
              </li>
              <li>
                <strong>Acción de Defenderse:</strong> Una tropa puede optar por no atacar ni moverse para ganar una ficha de escudo defensor. Otorga +1 a la defensa en la siguiente confrontación, pero no puede repetirse la acción dos turnos consecutivos. Las unidades salvajes neutrales nunca se defienden de esta forma voluntaria.
              </li>
            </ul>
          </div>

          {/* War Machines sub-section */}
          <div className="bg-slate-950/60 p-4 rounded-xl border border-amber-900/15 space-y-2 mt-3">
            <h4 className="font-bold text-amber-400 font-mono flex items-center gap-1.5 text-sm">
              <span>⚙️ Artillería y Máquinas de Guerra (War Machines)</span>
            </h4>
            <p className="text-slate-300 text-[12px] leading-relaxed">
              Las máquinas de guerra se adquieren en el asentamiento de herrería o mediante especializaciones nativas y no ocupan espacio de la mano de combate de 5 unidades ordinarias; actúan de forma auxiliar o mediante activadores de turno específicos:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-2 text-[12px]">
              <div className="border border-slate-900 p-2 rounded bg-slate-950/30">
                <span className="text-amber-400 font-bold block">1. Catapulta (Catapult)</span>
                Carta permanente obligatoria en Asedios. Se activa automáticamente al inicio de cada ronda de combate. Lanza el dado de combate estándar: <strong>-1</strong> (Fallo), <strong>0</strong> (daña la Puerta central por 1 pt), <strong>+1</strong> (daña un Muro por 1 pt).
              </div>
              <div className="border border-slate-900 p-2 rounded bg-slate-950/30">
                <span className="text-amber-400 font-bold block">2. Balista (Ballista)</span>
                Carta permanente. Al inicio de cada ronda de combate, inflige de forma automática <strong>1 herida</strong> de daño físico a la unidad enemiga con menor iniciativa.
              </div>
              <div className="border border-slate-900 p-2 rounded bg-slate-950/30">
                <span className="text-amber-400 font-bold block">3. Carro de Munición (Ammo Cart)</span>
                Carta permanente. Al inicio de cada ronda de combate, elige una unidad aliada de ataque a distancia. Esta ignora tanto el penalizador de distancia como el penalizador de cuerpo a cuerpo (melee penalty) durante toda la ronda.
              </div>
              <div className="border border-slate-900 p-2 rounded bg-slate-950/30">
                <span className="text-amber-400 font-bold block">4. Tienda de Auxilio (First Aid Tent)</span>
                Carta permanente. Al final de cada ronda de combate, remueve/sana de forma automática <strong>1 herida</strong> de la unidad aliada con menor iniciativa que esté dañada.
              </div>
              <div className="border border-slate-900 p-2 rounded bg-slate-950/30">
                <span className="text-amber-400 font-bold block">5. Cañón (Cannon)</span>
                Carta permanente exclusiva de Bahía (Cove). Al inicio de cada ronda de combate, elige una unidad o estructura enemiga y lanza el dado de combate estándar: <strong>-1</strong> (1 herida), <strong>0</strong> (2 heridas), <strong>+1</strong> (3 heridas). En asedios, actúa dañando estructuras.
              </div>
            </div>
          </div>
        </section>

        {/* Section 9 */}
        <section className="space-y-4 page-break">
          <h3 className="text-xl font-serif text-amber-300 border-b border-slate-800 pb-1">
            IX. Hechizos, Arcanos y Libro de Magias
          </h3>
          <p className="text-xs">
            La magia altera el destino del combate físico. Los conocimientos mágicos están regulados estrictamente para salvaguardar el equilibrio competitivo sobre el mapa:
          </p>

          <div className="space-y-3 text-xs bg-slate-950 p-4 border border-slate-800/80 rounded-xl">
            <div className="space-y-1">
              <h4 className="font-bold text-amber-400 font-mono">1. Requisito de Libro y Escuela Arcana</h4>
              <p className="text-slate-300">
                Para coleccionar, memorizar, o lanzar hechizos de nivel I o superior de su mano de cartas, su Héroe debe poseer de forma obligatoria un <strong>Libro de Hechizos</strong>. Este objeto elemental se consigue tras edificar la Cofradía de Magos Tier 1 en su metrópolis (coste: 5 de Oro). El conjuro de ataque básico "Flecha Mágica" es el único exento de este riguroso mandato. Como regla suplementaria, edificar un gremio de nivel 2 habilita usar magia avanzada inmune al efecto de contra-hechizo básico de los oponentes.
              </p>
            </div>

            <div className="space-y-1.5 pt-2 border-t border-slate-900">
              <h4 className="font-bold text-amber-400 font-mono">2. Leyes de Magia de Combate</h4>
              <ul className="list-disc pl-5 space-y-1 text-slate-300">
                <li><strong>Límite Estricto de Convocatoria:</strong> Cada héroe puede convocar un máximo de 1 sola carta de hechizo de su mano activa por cada fase o ronda de combate completo.</li>
                <li><strong>Penetración Absoluta de Escudo:</strong> Todo el daño desencadenado por magías de combate se transfiere de forma líquida y directa sobre la salud estructural de las unidades receptoras, ignorando cualquier nivel defensivo físico o bonificación de escudo defensivo.</li>
                <li><strong>Gasto de Habilidades Potentes:</strong> Puedes mejorar la fuerza aritmética de un hechizo descartando cartas de tu mazo representativas de Poder o Conocimiento del Reino.</li>
              </ul>
            </div>

            <div className="space-y-1.5 pt-2 border-t border-slate-900">
              <h4 className="font-bold text-amber-400 font-mono">3. Hechizos Estratégicos del Mapa de Aventura</h4>
              <p className="text-slate-300 text-[12px]">
                Los magistas pueden gastar sus puntos de movimiento durante su turno de exploración terrestre para lanzar magias de mapa:
                <br />
                - <strong>Volar (Fly):</strong> Quema todos sus PM útiles para cruzar montañas o ejércitos sin librar combates intermedios.
                <br />
                - <strong>Caminar sobre el Agua (Water Walk):</strong> Permite navegar y cruzar masas fluviales sin necesitar un barco.
                <br />
                - <strong>Portal de Ciudad (Town Portal):</strong> Replega de inmediato a su héroe y sus tropas activas directo a la casilla de su metrópolis de origen para salvaguardarla de invasores.
              </p>
            </div>

            <div className="space-y-1.5 pt-2 border-t border-slate-900">
              <h4 className="font-bold text-amber-400 font-mono">4. Tratado de las Cuatro Escuelas de Magia</h4>
              <p className="text-slate-300 text-[12px] mb-2">
                Cada hechizo pertenece a una escuela elemental. Ser 'Experto' en una de ellas multiplica los daños, rangos y alcances estratégicos:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-1 text-[12px]">
                <div className="border border-red-950/60 bg-red-950/20 p-2.5 rounded-lg">
                  <span className="text-orange-400 font-bold font-mono flex items-center gap-1">🔥 Magia de Fuego (Fire Magic)</span>
                  <p className="text-slate-300 mt-1">
                    <strong>Enfoque:</strong> Daño masivo destructivo directo y trampas estratégicas de combate.
                    <br />
                    • <em>Hechizos Clave:</em> <strong>Bola de Fuego</strong> (daño explosivo circular), <strong>Armagedón</strong> (arrasamiento masivo en todo el tablero), <strong>Mina Terrestre</strong> (despliega trampas tácticas que detonan e interrumpen el movimiento) y <strong>Sed de Sangre</strong> (buf defensivo/ofensivo para melé).
                  </p>
                </div>
                <div className="border border-blue-950/60 bg-blue-950/20 p-2.5 rounded-lg">
                  <span className="text-cyan-400 font-bold font-mono flex items-center gap-1">💧 Magia de Agua (Water Magic)</span>
                  <p className="text-slate-300 mt-1">
                    <strong>Enfoque:</strong> Control territorial estricto, curación quirúrgica y manipulación.
                    <br />
                    • <em>Hechizos Clave:</em> <strong>Campo de Fuerza</strong> (muro invisible de 2 hexágonos de ancho que frena melés pero deja disparar a arqueros), <strong>Teleportar</strong> (desplazamientos instantáneos libres), <strong>Curación</strong> (limpieza de heridas y corrosión) y <strong>Clonar</strong> (réplicas de unidades aliadas).
                  </p>
                </div>
                <div className="border border-amber-950/60 bg-amber-950/20 p-2.5 rounded-lg">
                  <span className="text-amber-500 font-bold font-mono flex items-center gap-1">🪨 Magia de Tierra (Earth Magic)</span>
                  <p className="text-slate-300 mt-1">
                    <strong>Enfoque:</strong> Resistencia física impenetrable, slowing y reanimación de caídos.
                    <br />
                    • <em>Hechizos Clave:</em> <strong>Lentitud</strong> (neutralización total del movimiento táctico hostil), <strong>Reanimar Muertos</strong> (resurrección mágica de bajas terrestres), <strong>Arenas Movedizas</strong> (despliega fichas que inmovilizan de inmediato tropas terrestres) e <strong>Implosión</strong> (daño gravitatorio masivo enfocado).
                  </p>
                </div>
                <div className="border border-indigo-950/60 bg-indigo-950/20 p-2.5 rounded-lg">
                  <span className="text-indigo-400 font-bold font-mono flex items-center gap-1">⚡ Magia de Aire (Air Magic)</span>
                  <p className="text-slate-300 mt-1">
                    <strong>Enfoque:</strong> Puntería y velocidad bélica extrema junto a descargas eléctricas directas.
                    <br />
                    • <em>Hechizos Clave:</em> <strong>Relámpago</strong> (descarga de rayo enfocado que ignora obstáculos de cobertura), <strong>Volar / Puerta Dimensional</strong> (viajes aéreos sobre el atlas de campaña) y <strong>Escudo de Aire</strong> (reducción extrema contra arqueros y balistas lejanas).
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 10 */}
        <section className="space-y-4 page-break">
          <h3 className="text-xl font-serif text-amber-300 border-b border-slate-800 pb-1">
            X. Guía de Expansiones y Elementos Avanzados de Juego
          </h3>
          <p className="text-xs text-slate-400">
            A continuación se compendia toda la logística militar de las expansiones oficiales, asegurando que pueda jugar cualquier escenario avanzado de forma ordenada y autónoma:
          </p>

          <div className="space-y-4 text-xs">
            {/* Battlefield Obstacles */}
            <div className="bg-slate-950/60 p-4 rounded-xl border border-slate-800 space-y-2">
              <h4 className="font-bold text-amber-400 font-mono flex items-center gap-1.5">
                <span>🍀 1. El Campo de Batalla Dinámico (Obstáculos de Combate)</span>
              </h4>
              <p className="text-slate-300">
                Antes de iniciar una contienda convencional, se roba una carta del mazo de Battlefield para disponer obstáculos físicos tridimensionales o bidimensionales en el mapa de combate de 4x5, afectando el avance de tropas según su tipología:
              </p>
              <ul className="list-disc pl-5 space-y-1.5 text-slate-350">
                <li><strong>Arbusto (Bush) / Tronco Caído (Log) [Ligero]:</strong> Cruzar esta casilla consume un recargo de +1 punto de movimiento de tropa para unidades terrestres. No bloquea la línea de visión de las unidades de ataque a distancia.</li>
                <li><strong>Roca (Rock) / Muro de Piedra (Stone Wall) [Pesado]:</strong> Casilla de bloqueo físico absoluto. Las unidades terrestres deben rodearla obligatoriamente. Además, intercepta de forma absoluta la visión lineal, impidiendo que las unidades a distancia disparen a través de ella.</li>
                <li><strong>Charca de Agua (Water Pool):</strong> Casilla totalmente intransitable para unidades de movimiento terrestre convencional. Las unidades voladoras pueden cruzarla sin penalizaciones.</li>
                <li><strong>Tierra Maldita (Cursed Ground):</strong> El misticismo de esta loseta sagrada impide de forma absoluta el lanzamiento de cualquier tipo de hechizo (tanto por atacantes como por defensores) mientras haya unidades enemigas dentro de sus fronteras tácticas.</li>
                <li><strong>Campamento de Tréboles (Clover Field):</strong> Las tropas de melé que finalicen su movimiento táctico en esta casilla reciben de forma inmediata una ficha de moral positiva útil para repetir dados de ataque.</li>
              </ul>
            </div>

            {/* Castle Siege */}
            <div className="bg-slate-950/60 p-4 rounded-xl border border-slate-800 space-y-2">
              <h4 className="font-bold text-amber-400 font-mono flex items-center gap-1.5">
                <span>🏰 2. Asedio de Castillos (Defensa Estructural & Catapulta)</span>
              </h4>
              <p className="text-slate-300">
                Cuando un héroe oponente asalta una ciudad protegida con fortificación construida, se siguen las leyes estrictas de asedio:
              </p>
              <ul className="list-disc pl-5 space-y-1 text-slate-300">
                <li><strong>Los Lindes del Castillo:</strong> El cuadrante defensivo se divide mediante Muros (Wall), una Puerta central (Gate) y un Foso hostil (Moat).</li>
                <li><strong>Muros y Puerta:</strong> Bloquean el tránsito terrestre de los asaltantes. Los defensores situados detrás son inmunes al combate de cuerpo a cuerpo y gozan de +1 de defensa natural contra proyectiles enemigos.</li>
                <li><strong>La Puerta Activa:</strong> Permite el paso libre para contraatacar de los ejércitos defensores. Las tropas atacantes deben destruirla infligiendo 2 puntos de daño físico o mediante asedios para poder flanquearla.</li>
                <li><strong>Uso de la Catapulta (Atacante):</strong> El comandante asaltante dispone de una Catapulta ficticia que se activa automáticamente al inicio de cada ronda de combate. Para resolver el impacto, se lanza el <strong>dado de combate estándar</strong>:
                  <br />- <strong>Resultado de +1:</strong> Impacta en un Muro (Wall) de tu elección, causándole 1 punto de daño.
                  <br />- <strong>Resultado de 0:</strong> Golpea la Puerta (Gate) central, causándole 1 punto de daño.
                  <br />- <strong>Resultado de -1:</strong> Disparo errado / fallo, sin consecuencias para la estructura defensiva.
                </li>
                <li><strong>Foso del Castillo (Moat):</strong> Cualquier unidad que caiga en el foso debe cesar su avance el resto del turno de forma inmediata, experimentando un modificador de -2 temporal a su defensa militar.</li>
              </ul>
            </div>

            {/* Subterranean Layers */}
            <div className="bg-slate-950/60 p-4 rounded-xl border border-slate-800 space-y-2">
              <h4 className="font-bold text-amber-400 font-mono flex items-center gap-1.5">
                <span>🗺️ 3. El Mapa Dual: El Inframundo Subterráneo</span>
              </h4>
              <p className="text-slate-305">
                Los escenarios avanzados de mapa operan con un tablero dual (Capa del Mundo de Superficie y Capa del Inframundo). Ambas dimensiones se gestionan con independencia logística:
                <br />
                - El libre movimiento horizontal directo se encuentra quebrado, obligando a los héroes de mesa a localizar y transitar las <strong>Puertas Subterráneas (Subterranean Gates)</strong> de tránsito vertical.
                <br />
                - Entrar a una Puerta para emerger en la capa opuesta requiere abonar el coste estándar del hexágono receptor de destino MÁS una penalización fija de <strong>1 Punto de Movimiento (PM)</strong> extra en el track de turno.
                <br />
                - La niebla de guerra de aventura y las distancias útiles para lanzar hechizos espaciales se calculan siempre por separado en cada piso del tablero.
              </p>
            </div>

            {/* Navigation Rules */}
            <div className="bg-slate-950/60 p-4 rounded-xl border border-slate-800 space-y-2">
              <h4 className="font-bold text-amber-400 font-mono flex items-center gap-1.5">
                <span>⛵ 4. Logística de Navegación, Barcos y Astilleros</span>
              </h4>
              <p className="text-slate-300">
                Los hexágonos fluviales y lagos dividen mapas de costa. Se aplican las siguientes y estrictas directrices de navegación:
              </p>
              <ul className="list-disc pl-5 space-y-1.5 text-slate-300">
                <li><strong>Construcción:</strong> Puedes edificar un Astillero (Shipyard) en ciudades que muestren un ancla pagando 10 Oro y 2 Materiales. Posteriormente, cualquier héroe adyacente puede comprar un Barco por 10 Oro.</li>
                <li><strong>Embarcar (Embarking):</strong> Subirse a un barco flotante desde una costa transitable cuesta de forma inapelable <strong>la totalidad absoluta</strong> de los Puntos de Movimiento (PM) restantes que le resten al héroe en ese turno. Su movimiento cesa de inmediato.</li>
                <li><strong>Desembarcar (Disembarking):</strong> Igualmente, saltar de vuelta de un hexágono náutico a tierra firme consume <strong>toda la reserva de PM de transacciones</strong> del héroe para ese turno actual de exploración.</li>
                <li><strong>Combates en el Agua:</strong> Durante la navegación náutica, las habilidades y el movimiento se resuelven idénticamente (los caballeros y esbirros luchan a bordo de la cubierta sin penalizadores tácticos de mar).</li>
              </ul>
            </div>

            {/* Portal rules */}
            <div className="bg-slate-950/60 p-4 rounded-xl border border-slate-800 space-y-2">
              <h4 className="font-bold text-amber-400 font-mono flex items-center gap-1.5">
                <span>🔮 5. Tránsito en Monolitos de Teletransporte</span>
              </h4>
              <p className="text-slate-300">
                Permiten acortar distancias del mapa físico asumiendo riesgos tácticos definidos:
                <br />
                - <strong>Monolitos de Un Sentido:</strong> Envían de forma obligatoria al héroe de un portal emisor a un único receptor determinado del mapa, consumiendo 1 PM de movimiento. No se puede retornar por ese mismo portal.
                <br />
                - <strong>Monolitos de Doble Sentido:</strong> Permiten el viaje de ida y vuelta libremente entre portales con el mismo color de gema impresa, consumiendo 1 PM por cada tránsito.
                <br />
                - <strong>Emboscadas en Destino:</strong> Si un héroe oponente está posicionado custodiando o vigilante en la casilla inmediatamente adyacente que cubre la salida del monolito de llegada, se iniciará el combate táctico de forma automática en el instante del salto dimensional.
              </p>
            </div>
          </div>
        </section>

        {/* Section 11 - DATATABLES COHERENTLY RENDERED */}
        <section className="space-y-4 page-break">
          <h3 className="text-xl font-serif text-amber-300 border-b border-slate-800 pb-1">
            XI. Tablas del Reglamento Oficial
          </h3>

          {/* Zones Table */}
          <div className="space-y-2">
            <h4 className="text-sm font-mono text-amber-500 uppercase tracking-widest font-semibold flex items-center gap-2 font-bold">
              <ShieldAlert className="w-4 h-4" /> Tabla de Dificultad de las Zonas (Número de Tropas Neutrales)
            </h4>
            <div className="overflow-x-auto">
              <table className="min-w-full text-xs text-left text-slate-300 border border-slate-850">
                <thead className="bg-slate-950 text-amber-300 text-[10px] tracking-wider font-mono">
                  <tr>
                    <th className="p-2 border border-slate-800">Dificultad de la Loseta</th>
                    <th className="p-2 border border-slate-800">Fácil (Sencilla)</th>
                    <th className="p-2 border border-slate-800">Normal (Predeterminada)</th>
                    <th className="p-2 border border-slate-800">Difícil (Retadora)</th>
                    <th className="p-2 border border-slate-800">Imposible (Pesadilla)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800/50">
                  <tr>
                    <td className="p-2 border border-slate-800 font-mono text-amber-400 bg-slate-950/30">Nivel I</td>
                    <td className="p-2 border border-slate-800 text-slate-300">1 Bronce</td>
                    <td className="p-2 border border-slate-800 text-slate-300">1 Bronce</td>
                    <td className="p-2 border border-slate-800 text-slate-300">2 Bronce</td>
                    <td className="p-2 border border-slate-800 text-slate-300">3 Bronce</td>
                  </tr>
                  <tr>
                    <td className="p-2 border border-slate-800 font-mono text-amber-400 bg-slate-950/30">Nivel II</td>
                    <td className="p-2 border border-slate-800 text-slate-300">2 Bronce</td>
                    <td className="p-2 border border-slate-800 text-slate-300">2 Bronce</td>
                    <td className="p-2 border border-slate-800 text-slate-300">3 Bronce</td>
                    <td className="p-2 border border-slate-800 text-slate-300">2 Bronce, 1 Plata</td>
                  </tr>
                  <tr>
                    <td className="p-2 border border-slate-800 font-mono text-amber-400 bg-slate-950/30">Nivel III</td>
                    <td className="p-2 border border-slate-800 text-slate-300">1 Bronce, 1 Plata</td>
                    <td className="p-2 border border-slate-800 text-slate-300">2 Bronce, 1 Plata</td>
                    <td className="p-2 border border-slate-800 text-slate-300">1 Bronce, 2 Plata</td>
                    <td className="p-2 border border-slate-800 text-slate-300">3 Plata</td>
                  </tr>
                  <tr>
                    <td className="p-2 border border-slate-800 font-mono text-amber-400 bg-slate-950/30">Nivel IV</td>
                    <td className="p-2 border border-slate-800 text-slate-300">2 Bronce, 1 Plata</td>
                    <td className="p-2 border border-slate-800 text-slate-300">1 Bronce, 2 Plata</td>
                    <td className="p-2 border border-slate-800 text-slate-300">3 Plata</td>
                    <td className="p-2 border border-slate-800 text-slate-300">2 Plata, 1 Oro</td>
                  </tr>
                  <tr>
                    <td className="p-2 border border-slate-800 font-mono text-amber-400 bg-slate-950/30">Nivel V</td>
                    <td className="p-2 border border-slate-800 text-slate-300">2 Bronce, 1 Plata, 1 Oro</td>
                    <td className="p-2 border border-slate-800 text-slate-300">1 Bronce, 2 Plata, 1 Oro</td>
                    <td className="p-2 border border-slate-800 text-slate-300">2 Plata, 2 Oro</td>
                    <td className="p-2 border border-slate-800 text-slate-300">1 Plata, 3 Oro</td>
                  </tr>
                  <tr>
                    <td className="p-2 border border-slate-800 font-mono text-amber-400 bg-slate-950/30">Nivel VI</td>
                    <td className="p-2 border border-slate-800 text-slate-300">2 Bronce, 2 Plata, 1 Oro</td>
                    <td className="p-2 border border-slate-800 text-slate-300">1 Bronce, 2 Plata, 2 Oro</td>
                    <td className="p-2 border border-slate-800 text-slate-300">2 Plata, 3 Oro</td>
                    <td className="p-2 border border-slate-800 text-slate-300">1 Plata, 4 Oro</td>
                  </tr>
                  <tr>
                    <td className="p-2 border border-slate-800 font-mono text-amber-400 bg-slate-950/30 font-bold">Nivel VII</td>
                    <td className="p-2 border border-slate-800 text-indigo-300">1 Tropa Azur</td>
                    <td className="p-2 border border-slate-800 text-indigo-300">2 Tropa Azur</td>
                    <td className="p-2 border border-slate-800 text-indigo-300">2 Tropa Azur, 1 Oro</td>
                    <td className="p-2 border border-slate-800 text-indigo-300">2 Tropa Azur, 2 Oro</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-[10px] text-slate-550 text-slate-500 italic">
              Nota del Oráculo: El nivel romano indica el grado jerárquico de la loseta de aventura transitada. Al iniciar hostilidades, se asume el robo de cartas de las respectivas barajas de ejército neutral (comportamiento de IA automática).
            </p>
          </div>

          {/* Trade Table */}
          <div className="space-y-2 pt-4">
            <h4 className="text-sm font-mono text-amber-500 uppercase tracking-widest font-semibold flex items-center gap-2 font-bold">
              <ShoppingBag className="w-4 h-4" /> Tabla de Comercio (Uso de los Mercadillos)
            </h4>
            <div className="overflow-x-auto">
              <table className="min-w-full text-xs text-left text-slate-300 border border-slate-800">
                <thead className="bg-slate-950 text-amber-300 text-[10px] tracking-wider font-mono">
                  <tr>
                    <th className="p-2 border border-slate-800">Quiero comprar:</th>
                    <th className="p-2 border border-slate-800">Oro ()</th>
                    <th className="p-2 border border-slate-800">Construcción () [Madera/Mineral]</th>
                    <th className="p-2 border border-slate-800">Objetos de Valor () [Mercurio/Azufre/etc.]</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800/50">
                  <tr>
                    <td className="p-2 border border-slate-800 font-semibold bg-slate-950/20">Vendo Oro ()</td>
                    <td className="p-2 border border-slate-800 bg-slate-900/60 text-slate-500">—</td>
                    <td className="p-2 border border-slate-800">Pagas 2 de Oro por 1 Material (Relación 2:1)</td>
                    <td className="p-2 border border-slate-800">Pagas 6 de Oro por 1 Objeto de Valor (Relación 6:1)</td>
                  </tr>
                  <tr>
                    <td className="p-2 border border-slate-800 font-semibold bg-slate-950/20">Vendo Construcción ()</td>
                    <td className="p-2 border border-slate-800">Vendes 1 Material por 1 de Oro (Relación 1:1)</td>
                    <td className="p-2 border border-slate-800 bg-slate-900/60 text-slate-500">—</td>
                    <td className="p-2 border border-slate-800">Pagas 3 Materiales por 1 Objeto de Valor (Relación 3:1)</td>
                  </tr>
                  <tr>
                    <td className="p-2 border border-slate-800 font-semibold bg-slate-950/20">Vendo Objetos de Valor ()</td>
                    <td className="p-2 border border-slate-800">Vendes 1 Objeto de Valor por 3 de Oro (Relación 1:3)</td>
                    <td className="p-2 border border-slate-800">Vendes 1 Objeto de Valor por 2 Materiales (Relación 1:2)</td>
                    <td className="p-2 border border-slate-800 bg-slate-900/60 text-slate-500">—</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-[10px] text-slate-500 italic leading-relaxed">
              Ejemplo de operaciones comerciales: Si su metrópolis requiere con apremio un material para erigir un torreón avanzado, pague 2 de Oro para adquirir 1 material (Cambio Comercial 2:1), o bien venda 1 Objeto de valor excedente para recibir de inmediato 3 de Oro o 2 Materiales de construcción directo en su reserva.
            </p>
          </div>
        </section>

        {/* Section XII */}
        <section className="space-y-4 page-break">
          <h3 className="text-xl font-serif text-amber-300 border-b border-slate-800 pb-1">
            XII. Losetas Elementales, Invocaciones y Daño Elemental (Confluencia)
          </h3>
          <p className="text-xs text-slate-400">
            La expansión Confluencia (Conflux) introduce dimensiones místicas de energía pura y leyes físicas adaptativas para la batalla:
          </p>
          <div className="space-y-3 text-xs bg-slate-950 p-4 border border-slate-800/80 rounded-xl">
            <div className="space-y-1">
              <strong className="text-amber-400 block font-mono">1. Losetas de Mapa Elementales (Elemental Planes)</strong>
              <p className="text-slate-350">
                Losetas exclusivas de reverso cian que representan fragmentos colisionados de los Planos Elementales:
                <br />
                • <strong>Plano de Fuego (Fire Rift):</strong> Cruzar o finalizar el movimiento táctico en esta loseta otorga +2 PM de forma gratuita si tu facción activa es Confluencia o Inferno. Duplica además el daño infligido de cualquier hechizo elemental de fuego lanzado desde ella.
                <br />
                • <strong>Plano de Agua (Water Rift):</strong> Caminar por él no genera penalización de fango o nieve, y permite el embarque automático sin perder el resto del turno.
                <br />
                • <strong>Plano de Tierra y Aire (Earth & Air Rift):</strong> Otorga +1 a la Defensa Física o +1 a la Iniciativa de los regimientos de campaña asentados respectivamente.
              </p>
            </div>
            <div className="space-y-1.5 pt-2 border-t border-slate-950">
              <strong className="text-amber-400 block font-mono">2. Tratado de Invocaciones de Combate (Invocations)</strong>
              <p className="text-slate-300">
                Mediante la magia correspondiente (Invocación Elemental), un héroe puede conjurar regimientos de Elementales de Tierra, Aire, Agua o Fuego en hexágonos desocupados de la grilla táctica:
                <br />
                • <strong>Invocaciones Temporales:</strong> Estas criaturas actúan con iniciativa propia y atacan con daño elemental puro. Al finalizar el asalto, estas unidades se desintegran por completo, por lo que no se agregan a la mano activa ni consumen límite de ranura de ejército del héroe.
                <br />
                • <strong>Regla de Disipación:</strong> Los hechizos de Desterrar o Disipar Magia destruyen inmediatamente toda unidad invocada sobre la reja táctica.
              </p>
            </div>
            <div className="space-y-1.5 pt-2 border-t border-slate-950">
              <strong className="text-amber-400 block font-mono">3. Daño Elemental Puro (Elemental Damage)</strong>
              <p className="text-slate-300">
                El daño de descargas arcanas puras (como Rayo de Hielo o Relámpago) ignora de forma absoluta el valor numérico de Defensa física de la criatura defensora, aplicando de forma directa las d3 a d6 heridas al marcador de salud. Solo es reducible mediante inmunidades absolutas especificadas en las cartas de Criatura Élite (por ejemplo, los Dragones Negros son completamente inmunes a toda la magia, los Fénix son inmunes al daño de Fuego, y los Elementales de Tierra ignoran el daño de Implosión o Lentitud).
              </p>
            </div>
          </div>
        </section>

        {/* Section XIII */}
        <section className="space-y-4 page-break">
          <h3 className="text-xl font-serif text-amber-300 border-b border-slate-800 pb-1">
            XIII. Opciones Avanzadas y Ajustes de Competición
          </h3>
          <p className="text-xs text-slate-400">
            Para potenciar la simetría y profundidad competitiva del juego de mesa, se pueden activar las siguientes reglas reglamentarias avanzadas opcionales acordadas en la preparación:
          </p>
          <div className="space-y-3 text-xs bg-slate-950 p-4 border border-slate-800/80 rounded-xl">
            <div className="space-y-1">
              <strong className="text-amber-400 block font-mono">1. Niebla de Guerra Dinámica (Tactical Fog of War)</strong>
              <p className="text-slate-300">
                Para juegos competitivos extremos. Las losetas colindantes a las adyacentes permanecen ocultas boca abajo. Solo al detener al héroe en los lindes de una loseta revelada se puede voltear la siguiente. Las habilidades de Exploración (Pathfinding) o el hechizo Ojo de Águila permiten revelar hasta 2 losetas de distancia de manera anticipada.
              </p>
            </div>
            <div className="space-y-1.5 pt-2 border-t border-slate-950">
              <strong className="text-amber-400 block font-mono">2. Reglas Oficiales de Torneo de Erathia (Tournament Pick & Ban)</strong>
              <p className="text-slate-305 font-sans">
                • <strong>Veto de Facción:</strong> En la fase de inicio de la preparación de la mesa, cada jugador veta 1 facción enemiga de la bolsa común.
                <br />
                • <strong>Draft de Héroes:</strong> Se barajan las cartas de Héroes de las facciones autorizadas, distribuyendo 3 al azar a cada jugador. Estos eligen 1 como Principal, descartan otro y pasan el restante al jugador de su derecha.
                <br />
                • <strong>Compensación Geográfica:</strong> El segundo jugador de la ronda de turno inicial comienza con 1 Carreta de Materiales adicional gratis en su capital para equilibrar el tempo con el primer jugador.
              </p>
            </div>
            <div className="space-y-1.5 pt-2 border-t border-slate-950">
              <strong className="text-amber-400 block font-mono">3. Logística de Relevo y Cadena de Suministro</strong>
              <p className="text-slate-300">
                Un héroe secundario que finalice su PM en un nudo de camino o puente adyacente a un héroe principal de su misma facción puede transferirle de forma gratuita y sin coste de acción cualquier cantidad de monedas de oro, artefactos o regimientos de criaturas de su mano, permitiendo prolongar turnos militares de ataque complejos en las líneas enemigas.
              </p>
            </div>
            <div className="space-y-1.5 pt-2 border-t border-slate-950">
              <strong className="text-amber-400 block font-mono">4. Modo de Tiempo de Turno Reglamentario (Turn Timers)</strong>
              <p className="text-slate-300">
                En torneos con cronómetro táctico, cada jugador dispone de un pool de 3 minutos por turno. El exceso de tiempo consumido penaliza el siguiente turno de aventura restando de forma inmediata 1 Ficha de Movimiento en el atlas.
              </p>
            </div>
          </div>
        </section>

        {/* Section XIV */}
        <section className="space-y-4 page-break">
          <h3 className="text-xl font-serif text-amber-300 border-b border-slate-800 pb-1">
            XIV. Dados del Juego (Dados de Recursos, Combate y Tesoro)
          </h3>
          <p className="text-xs text-slate-400">
            La aleatoriedad controlada y la emoción de las batallas se definen mediante tres dados de seis caras (d6) reglamentarios especiales:
          </p>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 text-xs">
            <div className="bg-slate-950 p-4 border border-slate-800/80 rounded-xl space-y-1.5">
              <strong className="text-amber-400 block font-mono">🎲 1. Dado de Recursos (Resource Die)</strong>
              <p className="text-slate-300">
                Dado de 6 caras utilizado al visitar enclaves arcanos del mapa o durante la Fase de Recursos para conseguir producción adicional de fortuna. Las caras representan:
                <br />• <strong>Cara 1:</strong> +1 de Oro (🟡)
                <br />• <strong>Cara 2:</strong> +2 de Oro (🟡)
                <br />• <strong>Cara 3:</strong> +1 de Madera o Mineral (🪵)
                <br />• <strong>Cara 4:</strong> +2 de Madera o Mineral (🪵)
                <br />• <strong>Cara 5:</strong> +1 Objeto de Valor (Gemas/Cristales/Azufre) (🔮)
                <br />• <strong>Cara 6:</strong> Vacío / Fallo (Sin ganancia) (❌)
              </p>
            </div>
            <div className="bg-slate-950 p-4 border border-slate-800/80 rounded-xl space-y-1.5">
              <strong className="text-amber-400 block font-mono">🔮 2. Dado de Tesoro (Treasure Die)</strong>
              <p className="text-slate-300">
                Dado lanzado de forma opcional al arriesgar con un Cofre de Tesoro o al completar ciertos enclaves del juego físico. Sus caras representan:
                <br />• <strong>Caras 1 y 2:</strong> El Héroe principal gana medio nivel de experiencia (✨ +0.5 Nivel).
                <br />• <strong>Caras 3 y 4:</strong> Buscar(2) en el mazo de cartas de Artefacto (🔍 roba dos cartas, quédate con una y devuelve la otra al mazo).
                <br />• <strong>Cara 5:</strong> Lanzar 1 dado de recursos (🎲).
                <br />• <strong>Cara 6:</strong> Lanzar 2 dados de recursos y elegir uno de los resultados.
              </p>
            </div>
            <div className="bg-slate-950 p-4 border border-slate-800/80 rounded-xl space-y-1.5">
              <strong className="text-amber-400 block font-mono">⚔️ 3. Dado de Combate / Ataque (Combat Die)</strong>
              <p className="text-slate-300">
                Un dado que se lanza de forma obligatoria cuando una unidad realiza un ataque físico en la grilla táctica, o al asestar una represalia. Este dado cuenta únicamente con tres tipos de valores distribuidos de forma equitativa en sus seis caras:
                <br />• <strong>Dos caras con valor de -1:</strong> Reduce en 1 herida el daño total final infligido (con un mínimo absoluto de 0 heridas).
                <br />• <strong>Dos caras con valor de 0:</strong> No aplica modificaciones de combate (se inflige exactamente el daño base de la unidad).
                <br />• <strong>Dos caras con valor de +1:</strong> Otorga +1 herida adicional al objetivo de tu ataque.
                <br />
                <br />
                <em>Nota: No existen los dados de asedio mecánicos específicos en el juego de mesa; todos los asaltos de catapulta y efectos de asedio estructurales se resuelven empleando este dado de combate estándar (obteniendo -1 para fallar, 0 para golpear la puerta o +1 para golpear un muro).</em>
              </p>
            </div>
          </div>
        </section>

        {/* Section XV */}
        <section className="space-y-4 page-break">
          <h3 className="text-xl font-serif text-amber-300 border-b border-slate-800 pb-1">
            XV. Tipos de Artefactos y Reliquias de Erathia
          </h3>
          <p className="text-xs text-slate-400">
            Los artefactos son cartas de Poder y Magia que otorgan potentes efectos tácticos o aumentos de estadísticas al jugarse desde la mano. Se clasifican en 4 niveles de poder:
          </p>
          <div className="space-y-3 text-xs bg-slate-950 p-4 border border-slate-800/80 rounded-xl">
            <div className="space-y-1">
              <strong className="text-sky-400 block font-mono">1. Artefactos Menores (Minor Artifacts - Borde Azul)</strong>
              <p className="text-slate-300">
                Objetos sencillos custodiados por ejércitos de bronce de niveles I-III. Proporcionan aumentos discretos (como +1 de Oro de ingresos o +1 a la Iniciativa de tus arqueros, p. ej. la <em>Capa del Centelleo</em> o el <em>Anillo de la Fuerza Vital</em>).
              </p>
            </div>
            <div className="space-y-1.5 pt-2 border-t border-slate-900">
              <strong className="text-amber-400 block font-mono">2. Artefactos Mayores (Major Artifacts - Borde Dorado)</strong>
              <p className="text-slate-300">
                Objetos de alta relevancia táctica protegidos por guarniciones de plata de niveles IV-V. Ofrecen bonos robustos como otorgar resistencia a hechizos, d3 de Oro extra cada ronda o incrementos fijos a la fuerza física del Héroe (p. ej. la <em>Espada del Juicio</em> o el <em>Escudo del Dragón</em>).
              </p>
            </div>
            <div className="space-y-1.5 pt-2 border-t border-slate-900">
              <strong className="text-purple-400 block font-mono">3. Reliquias Legendarias (Relics - Borde Púrpura)</strong>
              <p className="text-slate-300">
                Tesoros arcanos definitivos custodiados por ejércitos de oro de nivel VI o jefes de mazmorra. Pueden cambiar por completo el curso de una contienda. Permiten resucitar regimientos caídos de forma automática, lanzar hechizos de nivel experto gratis o duplicar la cantidad de cartas en mano de tu Héroe (p. ej. la <em>Armadura del Condenado</em>, la <em>Alianza del Rey Dragón</em> o el <em>Tomo de Magia de Fuego</em>).
              </p>
            </div>
            <div className="space-y-1.5 pt-2 border-t border-slate-900">
              <strong className="text-emerald-400 block font-mono">4. El Grial (The Grail Artifact - Borde Verde Esmeralda)</strong>
              <p className="text-slate-300">
                El artefacto supremo de Erathia. Está enterrado bajo el mapa de aventura. Para localizarlo, los héroes deben visitar los Obeliscos antiguos distribuidos por el mapa, lo que descarta piezas de un mapa de coordenadas exclusivo. Una vez excavado usando 1 PM en el hexágono exacto, debe ser devuelto intacto a la capital del jugador. Erigir la <strong>Estructura del Grial</strong> otorga un incremento permanente de +20 de Oro en cada Fase de Recursos (o de forma inmediata al construirlo) y una habilidad mítica única específica de tu facción.
              </p>
            </div>

            <div className="space-y-2 pt-3 border-t-2 border-slate-850">
              <span className="text-amber-300 block font-serif text-sm">Reglamento de Juego de Mesa y Mecánicas Operativas</span>
              <ul className="list-disc list-inside space-y-1 text-slate-300 pl-1">
                <li><strong>Mazo de Poder y Magia:</strong> Los artefactos son cartas de tu mazo de Poder y Magia ordinario; se sostienen en la mano y se juegan como cualquier otro hechizo, habilidad o estadística. No se equipan ni se colocan de forma permanente en la mesa.</li>
                <li><strong>Regla de Obtención (A la Mano):</strong> Siempre que el Héroe consiga un artefacto (por vencer ejércitos, explorar un túmulo, o como bonificación inicial de dificultad al inicio de la partida), este se añade <strong>directamente a tu mano</strong> en lugar de ir a tu pila de descarte o mazo de robo.</li>
                <li><strong>Regla de Uso y Descarte:</strong> Cuando se juega un artefacto para resolver uno de sus efectos (superior o inferior), se ejecuta su acción y se deposita inmediatamente en la <strong>pila de descarte</strong> de tu mazo de Héroe. Al barajar la pila de descarte cuando el mazo de robo se agote, el artefacto se mezcla con el resto de cartas y se robará de la misma forma que un hechizo en las fases siguientes.</li>
                <li><strong>Cartas de Artefacto Permanentes:</strong> Únicamente las cartas con el símbolo o atributo de "Permanente" quedan boca arriba en la mesa al jugarse, siguiendo el reglamento y límites generales para cartas permanentes (sólo una activa a la vez por defecto).</li>
                <li><strong>Comercio y Transferencia:</strong> Puedes vender artefactos de tu mano/descarte por Oro en el Mercado o Puesto de Comercio, sacrificarlos por Exp en el Altar de la Confluencia, o transferirlos gratis entre héroes aliados adyacentes en el mapa de aventura.</li>
              </ul>
            </div>

            <div className="space-y-2 pt-3 border-t border-slate-900">
              <span className="text-amber-300 block font-serif text-sm">Preguntas Frecuentes (FAQs) sobre Artefactos</span>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pl-1 text-slate-300">
                <div className="bg-slate-900/40 p-2.5 border border-slate-900 rounded-lg">
                  <span className="text-amber-400 font-mono block text-xs">¿Se equipan los artefactos en un tablero o ranura de personaje?</span>
                  <p className="text-slate-400 mt-1">No. En el juego de mesa no existen ranuras de equipamiento en la mesa. Los artefactos son cartas en tu mazo que se juegan desde la mano y se descartan tras su resolución, exactamente igual que un hechizo.</p>
                </div>
                <div className="bg-slate-900/40 p-2.5 border border-slate-900 rounded-lg">
                  <span className="text-amber-400 font-mono block text-xs">¿Qué ocurre con los Pergaminos de Hechizo (Scrolls)?</span>
                  <p className="text-slate-400 mt-1">Se tratan como cartas de un solo uso. Se juegan de tu mano y se descartan de forma permanente del juego tras su uso, no regresando a la pila de descarte del Héroe.</p>
                </div>
                <div className="bg-slate-900/40 p-2.5 border border-slate-900 rounded-lg">
                  <span className="text-amber-400 font-mono block text-xs">¿Cómo funciona el bonus de artefacto de inicio?</span>
                  <p className="text-slate-400 mt-1">Se busca en el mazo de artefactos correspondiente y se añade directamente a tu mano inicial de cartas para la primera ronda, no a tu mazo de robo.</p>
                </div>
                <div className="bg-slate-900/40 p-2.5 border border-slate-900 rounded-lg">
                  <span className="text-amber-400 font-mono block text-xs">¿Se pierden los artefactos si el héroe es derrotado?</span>
                  <p className="text-slate-400 mt-1">No. Tus cartas de artefacto que se encuentren en tu mano, mazo de robo o pila de descartes permanecen en tu poder. El héroe reaparece en la capital con su mazo de Poder y Magia intacto.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section XVI */}
        <section className="space-y-4 page-break">
          <h3 className="text-xl font-serif text-amber-300 border-b border-slate-800 pb-1">
            XVI. Expansión de Campo de Batalla (Battlefield Expansion)
          </h3>
          <p className="text-xs text-slate-400">
            Este módulo introduce un tablero de combate gigante y dos modalidades estratégicas alternativas (1 vs 1) que prescinden del mapa convencional de exploración:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs bg-slate-950 p-4 border border-slate-800/80 rounded-xl">
            <div className="space-y-2">
              <strong className="text-amber-400 block font-mono">1. Modos de Juego Adicionales</strong>
              <p className="text-slate-300">
                • <strong>Modo Aventura:</strong> Comprende una fase previa de Aventura (9, 13 o 16 rondas) guiada por cartas de aventura (Eventos y Combates) antes de disputar una batalla final decisiva.
                <br />• <strong>Modo Escaramuza:</strong> Los jugadores saltan la exploración e inician directamente el combate final equipados con mazos y unidades prediseñadas según el nivel de juego.
              </p>
            </div>
            <div className="space-y-2">
              <strong className="text-amber-400 block font-mono">2. Reglas del Tablero de Campo de Batalla</strong>
              <p className="text-slate-300">
                • <strong>Rango de Movimiento:</strong> Cada miniatura se desplaza un número de hexágonos igual a su valor de Iniciativa.
                <br />• <strong>Arqueros (Ranged):</strong> Pueden moverse o atacar, pero no ambas en el mismo turno. Sufren penalizador si el objetivo está adyacente o a 8+ hexágonos de distancia.
                <br />• <strong>Recuperación de Turno:</strong> Al final de cada ronda, los jugadores recuperan un efecto Experto y roban 2 cartas de su mazo.
              </p>
            </div>
          </div>
        </section>

        {/* Section XVII */}
        <section className="space-y-4 page-break">
          <h3 className="text-xl font-serif text-amber-300 border-b border-slate-800 pb-1">
            XVII. Variantes de Reglas Oficiales y Ajustes de Competición
          </h3>
          <p className="text-xs text-slate-400">
            Reglas sugeridas por los desarrolladores para modular el azar y añadir variabilidad de juego:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs bg-slate-950 p-4 border border-slate-800/80 rounded-xl">
            <div className="space-y-1">
              <strong className="text-amber-400 block font-mono">Variante Caos e Inicio con Draft</strong>
              <p className="text-slate-300">
                • <strong>Caos:</strong> Los descartes se remueven del juego y se reemplazan por la carta superior del mazo.
                <br />• <strong>Draft:</strong> Sustituye el mazo inicial drafteando 12 cartas de habilidades, artefactos y hechizos entre los jugadores.
              </p>
            </div>
            <div className="space-y-1">
              <strong className="text-amber-400 block font-mono">Separación de Mazos y Reserva de Oro</strong>
              <p className="text-slate-300">
                • <strong>Separación:</strong> Divide artefactos (Menor, Mayor, Relic) y hechizos (Básico, Experto). El mazo elegible se asocia al nivel de la loseta de mapa.
                <br />• <strong>Reserva de Oro (Gold Pool):</strong> Al reclutar, el oro va a una reserva. Al morir tropas o venderlas, el oro retorna a tu pool no gastado para paliar bajas tempranas.
              </p>
            </div>
            <div className="space-y-1">
              <strong className="text-amber-400 block font-mono">Ajustes de Dificultad Dinámicos</strong>
              <p className="text-slate-300">
                • <strong>Aumentar:</strong> Prohibido relanzar dados, ciudades capturadas no dan recursos, sin bonus iniciales.
                <br />• <strong>Disminuir:</strong> Iniciar con Héroe Secundario, daño mínimo garantizado de 1 herida, producción duplicada en minas.
              </p>
            </div>
          </div>
        </section>

        {/* Section XVIII */}
        <section className="space-y-4 page-break">
          <h3 className="text-xl font-serif text-amber-300 border-b border-slate-800 pb-1">
            XVIII. Bancos de Criaturas, Palabras Clave y Fichas de Unidad
          </h3>
          <p className="text-xs text-slate-400">
            Reglamento para asaltar enclaves bloqueados y aplicar estados tácticos a las miniaturas:
          </p>
          <div className="space-y-3 text-xs bg-slate-950 p-4 border border-slate-800/80 rounded-xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-1">
                <strong className="text-amber-400 block font-mono">Bancos de Criaturas (Creature Banks)</strong>
                <p className="text-slate-300">
                  Enclaves bloqueados en el mapa (ej. Cripta, Almacén de Cíclopes, Utopía) defendidos por guarniciones con <strong>Fichas de Apilamiento (Stack Tokens)</strong> que confieren bonos fijos (+1 ataque, +1 defensa, +1 vida o +2 iniciativa). Actúan como escudos de vida adicionales antes de eliminar la tropa. Otorgan recompensas fijas de Oro, recursos o reclutas de élite. No dan Exp ni admiten combate rápido.
                </p>
              </div>
              <div className="space-y-1">
                <strong className="text-amber-400 block font-mono">Palabras Clave Operativas (Keywords)</strong>
                <p className="text-slate-300">
                  • <strong>Clon:</strong> Tropa con 0 HP al recibir daño o ser objetivo de ataque.
                  <br />• <strong>Arenas Movedizas / Minas:</strong> Fichas boca abajo que detienen movimiento e infligen daño (minas).
                  <br />• <strong>Invocación Elemental / Demonio:</strong> Los elementales son temporales, los Demonios de Pit Lords se conservan si sobreviven.
                </p>
              </div>
            </div>
            <div className="pt-2 border-t border-slate-900 grid grid-cols-1 md:grid-cols-3 gap-2 text-slate-300">
              <div>
                <strong className="text-red-400 block font-mono">Debilidad (Weakness)</strong>
                <p className="text-[10px] text-slate-400">Ficha circular que reduce el ataque físico en -1 o -2 puntos.</p>
              </div>
              <div>
                <strong className="text-green-400 block font-mono">Ficha de Ataque (Attack Token)</strong>
                <p className="text-[10px] text-slate-400">Suma de forma rúnica +1 o +2 al daño de melé.</p>
              </div>
              <div>
                <strong className="text-orange-400 block font-mono">Corrosión (Corrosion Token)</strong>
                <p className="text-[10px] text-slate-400">Deteriora de forma permanente la defensa en -1 punto (mínimo 0).</p>
              </div>
            </div>
          </div>
        </section>

        {/* Section XIX */}
        <section className="space-y-4 page-break">
          <h3 className="text-xl font-serif text-amber-300 border-b border-slate-800 pb-1">
            XIX. Reglamento y Algoritmos de la Inteligencia Artificial (IA)
          </h3>
          <p className="text-xs text-slate-400">
            La IA enemiga en campañas cooperativas o solitarias ejecuta sus turnos bajo algoritmos predictivos rígidos:
          </p>
          <div className="space-y-3 text-xs bg-slate-950 p-4 border border-slate-800/80 rounded-xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-1">
                <strong className="text-amber-400 block font-mono">1. Combate Táctico de la IA</strong>
                <p className="text-slate-300">
                  • <strong>Movimiento:</strong> Las tropas terrestres e independientes de la IA cargan contra el defensor de su mismo nivel de Tier. Si no es posible, buscan el Tier inferior, y luego el superior.
                  <br />• <strong>Prioridad de Bancos:</strong> Ataca siempre a tropas normales del jugador antes que a criaturas obtenidas en Bancos de Criaturas.
                  <br />• <strong>Asedio IA:</strong> Coloca la puerta frente a su unidad de mayor iniciativa. Su Torreón de defensa dispara siempre a la tropa del jugador con menor vida actual.
                </p>
              </div>
              <div className="space-y-1">
                <strong className="text-amber-400 block font-mono">2. Exploración del Mapa (PM de la IA)</strong>
                <p className="text-slate-300">
                  La IA opera con 3 PM y sigue prioridades fijas:
                  <br />• <strong>Prioridad 1:</strong> Interceptar y atacar a cualquier Héroe del jugador en la misma loseta.
                  <br />• <strong>Prioridad 2:</strong> Capturar o señalizar la mina/asentamiento más cercana.
                  <br />• <strong>Prioridad 3:</strong> Marchar directo hacia la capital del jugador humano. Gana combates contra neutrales automáticamente.
                </p>
              </div>
            </div>
            <div className="pt-2 border-t border-slate-900">
              <strong className="text-amber-400 block font-mono mb-1">3. Algoritmo de Hechizos Complejos de la IA</strong>
              <p className="text-slate-300">
                • <strong>Área (Fireball/Lightning):</strong> Apunta a grupos con mayor cantidad de unidades de Tier alto. Si no hay grupos, ataca objetivos individuales lejanos de sus tropas.
                <br />• <strong>Sanación/Defensa:</strong> Sana a la criatura herida de Tier superior. Coloca escudos físicos sobre la de defensa más alta.
                <br />• <strong>Debilitamientos:</strong> Lanza hechizos como "Weakness" solo sobre tropas del jugador a punto de contraatacar.
              </p>
            </div>
          </div>
        </section>

        {/* Section XX */}
        <section className="space-y-4 page-break">
          <h3 className="text-xl font-serif text-amber-300 border-b border-slate-800 pb-1">
            XX. Guía de Habilidades y Talentos del Héroe (es.homm3bg.wiki)
          </h3>
          <p className="text-xs text-slate-400">
            Las Habilidades representan la progresión del Héroe. Al subir de nivel a un rango de Plata (II, III, V y VII), el Héroe draftea de un mazo común. Poseen un efecto <strong>Básico</strong> (pasivo o gratuito) y un efecto <strong>Experto</strong> (requiere gastar una ficha de Experto).
          </p>
          <div className="overflow-x-auto">
            <table className="min-w-full text-[12px] text-slate-300 bg-slate-950 border border-slate-800 rounded-lg">
              <thead>
                <tr className="bg-slate-900 text-amber-400 font-mono text-left">
                  <th className="px-3 py-2 border border-slate-800 font-bold">Habilidad / Origen</th>
                  <th className="px-3 py-2 border border-slate-800 font-bold">Efecto Rango Básico</th>
                  <th className="px-3 py-2 border border-slate-800 font-bold">Efecto Rango Experto</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800 leading-relaxed">
                <tr>
                  <td className="px-3 py-2 font-semibold text-amber-200 border border-slate-800 font-mono">1. Magia de Aire (Air Magic)</td>
                  <td className="px-3 py-2 border border-slate-800">Permanente: +1 Poder para hechizos de la Escuela de Aire.</td>
                  <td className="px-3 py-2 border border-slate-800">Al lanzar un Hechizo de la Escuela de Aire, puedes descartar esta carta para ganar +3 Poder de forma instantánea.</td>
                </tr>
                <tr>
                  <td className="px-3 py-2 font-semibold text-amber-200 border border-slate-800 font-mono">2. Arquería (Archery)</td>
                  <td className="px-3 py-2 border border-slate-800">En curso: Durante esta ronda de combate, tus unidades a distancia ganan +1 Ataque si el objetivo no es adyacente.</td>
                  <td className="px-3 py-2 border border-slate-800">En curso: Hasta el final de la siguiente ronda, tus unidades a distancia ganan +1 Iniciativa y +1 Ataque si el objetivo no es adyacente.</td>
                </tr>
                <tr>
                  <td className="px-3 py-2 font-semibold text-amber-200 border border-slate-800 font-mono">3. Armadura (Armorer)</td>
                  <td className="px-3 py-2 border border-slate-800">Instantáneo: +1 Defensa en esta ronda, luego roba 1 carta.</td>
                  <td className="px-3 py-2 border border-slate-800">Instantáneo: +2 Defensa en esta ronda, luego roba 1 carta.</td>
                </tr>
                <tr>
                  <td className="px-3 py-2 font-semibold text-amber-200 border border-slate-800 font-mono">4. Artillería (Artillery)</td>
                  <td className="px-3 py-2 border border-slate-800">Instantáneo: Inflige 1 daño a la unidad enemiga con la menor iniciativa.</td>
                  <td className="px-3 py-2 border border-slate-800">Instantáneo: Al usar la Balista, resuelve su efecto contra el mismo objetivo 3 veces.</td>
                </tr>
                <tr>
                  <td className="px-3 py-2 font-semibold text-amber-200 border border-slate-800 font-mono">5. Balística (Ballistics)</td>
                  <td className="px-3 py-2 border border-slate-800">Instantáneo: Juega durante un asedio. Destruye 1 sección de Muro o la Puerta de forma instantánea.</td>
                  <td className="px-3 py-2 border border-slate-800">Instantáneo: Juega durante un asedio. Destruye la Torre de Flechas (Arrow Tower) aliada/enemiga.</td>
                </tr>
                <tr>
                  <td className="px-3 py-2 font-semibold text-amber-200 border border-slate-800 font-mono">6. Magias Básicas Elementales (Basic Air/Earth/Fire/Water Magic)</td>
                  <td className="px-3 py-2 border border-slate-800">Permanente: En lugar de buscar en el mazo de Hechizos, toma el primer Hechizo de la Escuela correspondiente, colócalo en tu mano y baraja.</td>
                  <td className="px-3 py-2 border border-slate-800">Instantáneo: +3 Poder para un Hechizo de la Escuela correspondiente.</td>
                </tr>
                <tr>
                  <td className="px-3 py-2 font-semibold text-amber-200 border border-slate-800 font-mono">7. Diplomacia (Diplomacy)</td>
                  <td className="px-3 py-2 border border-slate-800">Efecto de mapa: Por cada morada (Dwelling) controlada, roba 1 carta de Unidad Neutral correspondiente. Puedes reclutarla por su coste en Oro.</td>
                  <td className="px-3 py-2 border border-slate-800">Instantáneo: Salta el combate con unidades neutrales en un campo cuya dificultad sea menor o igual al nivel de tu Héroe. Reclama el campo y visítalo gratis (sin ganar Experiencia).</td>
                </tr>
                <tr>
                  <td className="px-3 py-2 font-semibold text-amber-200 border border-slate-800 font-mono">8. Ojo de Águila (Eagle Eye)</td>
                  <td className="px-3 py-2 border border-slate-800">Instantáneo: Roba cartas del mazo de Hechizos hasta revelar un Hechizo Básico. Ponlo en tu mano y baraja el resto.</td>
                  <td className="px-3 py-2 border border-slate-800">Instantáneo: Roba cartas del mazo de Hechizos hasta revelar un Hechizo Experto. Ponlo en tu mano y baraja el resto.</td>
                </tr>
                <tr>
                  <td className="px-3 py-2 font-semibold text-amber-200 border border-slate-800 font-mono">9. Magia de Tierra (Earth Magic)</td>
                  <td className="px-3 py-2 border border-slate-800">Permanente: +1 Poder para hechizos de la Escuela de Tierra.</td>
                  <td className="px-3 py-2 border border-slate-800">Al lanzar un Hechizo de la Escuela de Tierra, puedes descartar esta carta para ganar +3 Poder de forma instantánea.</td>
                </tr>
                <tr>
                  <td className="px-3 py-2 font-semibold text-amber-200 border border-slate-800 font-mono">10. Finanzas (Estates)</td>
                  <td className="px-3 py-2 border border-slate-800">Instantáneo: Gana 3 de Oro.</td>
                  <td className="px-3 py-2 border border-slate-800">Instantáneo: Gana 6 de Oro.</td>
                </tr>
                <tr>
                  <td className="px-3 py-2 font-semibold text-amber-200 border border-slate-800 font-mono">11. Magia de Fuego (Fire Magic)</td>
                  <td className="px-3 py-2 border border-slate-800">Permanente: +1 Poder para hechizos de la Escuela de Fuego.</td>
                  <td className="px-3 py-2 border border-slate-800">Al lanzar un Hechizo de la Escuela de Fuego, puedes descartar esta carta para ganar +3 Poder de forma instantánea.</td>
                </tr>
                <tr>
                  <td className="px-3 py-2 font-semibold text-amber-200 border border-slate-800 font-mono">12. Primeros Auxilios (First Aid)</td>
                  <td className="px-3 py-2 border border-slate-800">Instantáneo: Elimina 1 daño/herida de una de tus unidades.</td>
                  <td className="px-3 py-2 border border-slate-800">Instantáneo: Al usar la Tienda de Primeros Auxilios, resuelve su efecto contra el mismo objetivo 3 veces.</td>
                </tr>
                <tr>
                  <td className="px-3 py-2 font-semibold text-amber-200 border border-slate-800 font-mono">13. Inteligencia (Intelligence)</td>
                  <td className="px-3 py-2 border border-slate-800">Instantáneo: Durante el combate, justo antes de que cualquier unidad se active, puedes jugar una carta de Hechizo (aplica el límite de 1 por ronda).</td>
                  <td className="px-3 py-2 border border-slate-800">Instantáneo: Durante el combate, antes de que cualquier unidad se active, juega una carta de Hechizo. Este hechizo no cuenta para tu límite por ronda.</td>
                </tr>
                <tr>
                  <td className="px-3 py-2 font-semibold text-amber-200 border border-slate-800 font-mono">14. Interferencia (Interference)</td>
                  <td className="px-3 py-2 border border-slate-800">Instantáneo: +1 Defensa. Se puede usar para reducir el daño de hechizos enemigos.</td>
                  <td className="px-3 py-2 border border-slate-800">Instantáneo: +2 Defensa. Se puede usar para reducir el daño de hechizos enemigos.</td>
                </tr>
                <tr>
                  <td className="px-3 py-2 font-semibold text-amber-200 border border-slate-800 font-mono">15. Liderazgo (Leadership)</td>
                  <td className="px-3 py-2 border border-slate-800">Instantáneo: Gana una ficha de Moral Positiva (+1).</td>
                  <td className="px-3 py-2 border border-slate-800">Instantáneo: Roba 2 cartas, y gana una ficha de Moral Positiva.</td>
                </tr>
                <tr>
                  <td className="px-3 py-2 font-semibold text-amber-200 border border-slate-800 font-mono">16. Aprendizaje (Learning)</td>
                  <td className="px-3 py-2 border border-slate-800">Instantáneo: Juega al subir de nivel. Avanza su nivel de experiencia en medio nivel (0.5) adicional gratis.</td>
                  <td className="px-3 py-2 border border-slate-800">Instantáneo: Juega al subir de nivel. Avanza la experiencia en 1 nivel completo adicional, luego retira esta carta de la partida.</td>
                </tr>
                <tr>
                  <td className="px-3 py-2 font-semibold text-amber-200 border border-slate-800 font-mono">17. Logística (Logistics)</td>
                  <td className="px-3 py-2 border border-slate-800">En curso: Al final de tu turno, mueve el Héroe a un campo vacío adyacente.</td>
                  <td className="px-3 py-2 border border-slate-800">Instantáneo: Tu Héroe gana +1 Punto de Movimiento (PM) de forma inmediata.</td>
                </tr>
                <tr>
                  <td className="px-3 py-2 font-semibold text-amber-200 border border-slate-800 font-mono">18. Suerte (Luck)</td>
                  <td className="px-3 py-2 border border-slate-800">En curso: Puedes volver a tirar el dado de Tesoro o el dado de Recursos una vez este turno.</td>
                  <td className="px-3 py-2 border border-slate-800">En curso: Puedes volver a tirar cualquier dado una vez este turno.</td>
                </tr>
                <tr>
                  <td className="px-3 py-2 font-semibold text-amber-200 border border-slate-800 font-mono">19. Misticismo (Mysticism)</td>
                  <td className="px-3 py-2 border border-slate-800">Instantáneo: Juega justo después de lanzar un hechizo. En lugar de descartarlo, devuélvelo a tu mano.</td>
                  <td className="px-3 py-2 border border-slate-800">Instantáneo: Juega justo después de lanzar un hechizo. Devuelve la carta de Hechizo y todas las demás cartas jugadas con ella a tu mano.</td>
                </tr>
                <tr>
                  <td className="px-3 py-2 font-semibold text-amber-200 border border-slate-800 font-mono">20. Nigromancia (Necromancy)</td>
                  <td className="px-3 py-2 border border-slate-800">Efecto de mapa: Juega tras ganar un combate. Refuerza una unidad Bronce o Plata por la mitad de su coste en Oro (redondeado hacia abajo).</td>
                  <td className="px-3 py-2 border border-slate-800">Efecto de mapa: Juega tras ganar un combate. Refuerza cualquier unidad de tu elección por la mitad de su coste en Oro.</td>
                </tr>
                <tr>
                  <td className="px-3 py-2 font-semibold text-amber-200 border border-slate-800 font-mono">21. Ofensiva / Ataque (Offense)</td>
                  <td className="px-3 py-2 border border-slate-800">Instantáneo: +1 Ataque a tus unidades en esta ronda, luego roba 1 carta.</td>
                  <td className="px-3 py-2 border border-slate-800">Instantáneo: +2 Ataque a tus unidades en esta ronda, luego roba 1 carta.</td>
                </tr>
                <tr>
                  <td className="px-3 py-2 font-semibold text-amber-200 border border-slate-800 font-mono">22. Buscador de Caminos (Pathfinding)</td>
                  <td className="px-3 py-2 border border-slate-800">Efecto de mapa: Permite mover a través de campos con Unidades Neutrales/Enemigos, pero si finaliza el movimiento en ellos, empieza el combate.</td>
                  <td className="px-3 py-2 border border-slate-800">Efecto de mapa: Permite mover sobre fronteras amarillas y campos bloqueados, pero no puede terminar el movimiento en ellos.</td>
                </tr>
                <tr>
                  <td className="px-3 py-2 font-semibold text-amber-200 border border-slate-800 font-mono">23. Resistencia (Resistance)</td>
                  <td className="px-3 py-2 border border-slate-800">Instantáneo: Juega tras un hechizo enemigo. Si se lanzó con 1 o menos de Poder, ignora su efecto.</td>
                  <td className="px-3 py-2 border border-slate-800">Instantáneo: Juega tras un hechizo enemigo. Ignora por completo el efecto de la carta de Hechizo enemiga.</td>
                </tr>
                <tr>
                  <td className="px-3 py-2 font-semibold text-amber-200 border border-slate-800 font-mono">24. Erudito / Sabio (Scholar)</td>
                  <td className="px-3 py-2 border border-slate-800">Instantáneo: Elige 1 carta de tu pila de descartes y devuélvela a tu mano.</td>
                  <td className="px-3 py-2 border border-slate-800">Efecto de mapa: Elimina hasta 2 cartas de Estadística. Toma hasta 2 cartas de Estadística Potenciadas y ponlas encima de tu pila de descarte, luego retira al Erudito.</td>
                </tr>
                <tr>
                  <td className="px-3 py-2 font-semibold text-amber-200 border border-slate-800 font-mono">25. Exploración (Scouting)</td>
                  <td className="px-3 py-2 border border-slate-800">Instantáneo: Juega antes de una acción de Búsqueda, luego haz Búsqueda(3) en su lugar.</td>
                  <td className="px-3 py-2 border border-slate-800">Instantáneo: Juega antes de una acción de Búsqueda, luego haz Búsqueda(5) en su lugar.</td>
                </tr>
                <tr>
                  <td className="px-3 py-2 font-semibold text-amber-200 border border-slate-800 font-mono">26. Hechicería (Sorcery)</td>
                  <td className="px-3 py-2 border border-slate-800">Instantáneo: +1 Poder para hechizos en esta ronda, luego roba 1 carta.</td>
                  <td className="px-3 py-2 border border-slate-800">Instantáneo: +2 Poder para hechizos en esta ronda, luego roba 1 carta.</td>
                </tr>
                <tr>
                  <td className="px-3 py-2 font-semibold text-amber-200 border border-slate-800 font-mono">27. Tácticas (Tactics)</td>
                  <td className="px-3 py-2 border border-slate-800">Instantáneo: Al inicio del combate, puedes intercambiar la posición de cualesquiera 2 de tus unidades.</td>
                  <td className="px-3 py-2 border border-slate-800">Activación: Durante el combate, puedes intercambiar la posición de cualesquiera 2 de tus unidades en tu turno.</td>
                </tr>
                <tr>
                  <td className="px-3 py-2 font-semibold text-amber-200 border border-slate-800 font-mono">28. Magia de Agua (Water Magic)</td>
                  <td className="px-3 py-2 border border-slate-800">Permanente: +1 Poder para hechizos de la Escuela de Agua.</td>
                  <td className="px-3 py-2 border border-slate-800">Al lanzar un Hechizo de la Escuela de Agua, puedes descartar esta carta para ganar +3 Poder de forma instantánea.</td>
                </tr>
                <tr>
                  <td className="px-3 py-2 font-semibold text-amber-200 border border-slate-800 font-mono">29. Sabiduría (Wisdom)</td>
                  <td className="px-3 py-2 border border-slate-800">El coste de compra de hechizos en esta Ciudad se reduce en 2 de Oro. Al comprar de tu Gremio de Magos, realiza Búsqueda(3) en lugar de Búsqueda(2).</td>
                  <td className="px-3 py-2 border border-slate-800">El coste de compra de hechizos en esta Ciudad se reduce en 2 de Oro. Al comprar de tu Gremio de Magos, realiza Búsqueda(4) en lugar de Búsqueda(2).</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Section XXI */}
        <section className="space-y-4 page-break">
          <div className="border-b-2 border-amber-500/30 pb-2">
            <h2 className="text-lg font-bold font-serif text-amber-500 tracking-wide uppercase flex items-center justify-between">
              <span>XXI. Compendio de Criaturas y Unidades de Combate (es.homm3bg.wiki)</span>
              <span className="text-xs font-mono text-slate-500">Unidades de Erathia</span>
            </h2>
            <p className="text-[10px] uppercase font-mono text-slate-400 mt-1">
              Guía Oficial de Atributos, Rangos (Tiers) y Habilidades Tácticas en el Tablero
            </p>
          </div>

          <div className="space-y-3 text-xs leading-relaxed text-slate-300">
            <p>
              En el juego de tablero de <strong>Heroes of Might and Magic III</strong>, el combate táctico se resuelve en una cuadrícula hexagonal. Las unidades son representadas por cartas de doble cara: la cara <strong>Básica</strong> ("Unas pocas") y la cara de <strong>Élite</strong> ("Manada" o mejorada). Reclutar y saber utilizar las habilidades de estas criaturas determina el éxito de las campañas.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-slate-950 p-4 border border-slate-800/80 rounded-xl">
              <div className="space-y-1">
                <span className="text-amber-400 font-semibold block font-mono">🎯 Atributos Clave de Combate</span>
                <ul className="list-disc pl-4 space-y-1 text-slate-400 text-[12px]">
                  <li><strong>Ataque (⚔️):</strong> Número de dados o daño básico infligido.</li>
                  <li><strong>Defensa (🛡️):</strong> Reduce las heridas directas recibidas por ataques físicos.</li>
                  <li><strong>Iniciativa (⚡):</strong> Orden de actuación en la ronda de batalla. Actúa el más veloz.</li>
                  <li><strong>Puntos de Vida (❤️):</strong> Capacidad de daño tolerable antes de retirar la tropa.</li>
                  <li><strong>Movimiento (👣):</strong> Hexágonos máximos de desplazamiento por activación.</li>
                </ul>
              </div>
              <div className="space-y-1">
                <span className="text-amber-400 font-semibold block font-mono">🏷️ Clasificación de Rangos (Tiers)</span>
                <ul className="list-disc pl-4 space-y-1 text-slate-400 text-[12px]">
                  <li><strong>Bronce (Niveles I - III):</strong> Unidades de infantería básica y tiradores iniciales. Muy numerosas y con costes de reclutamiento bajos en Oro.</li>
                  <li><strong>Plata (Niveles IV - V):</strong> Criaturas profesionales y guerreros de élite. Requieren madera o mineral y estructuras de metrópolis medias.</li>
                  <li><strong>Oro (Niveles VI - VII):</strong> Tropas legendarias o campeones de facción (ej. Ángeles o Dragones). Alto coste en Oro y Objetos de Valor místicos.</li>
                </ul>
              </div>
            </div>

            <h3 className="text-sm font-bold text-amber-400 uppercase tracking-wider font-mono pt-2">
              Tabla Compendio de Criaturas Destacadas por Facción
            </h3>

            <table className="w-full text-[10px] text-left border-collapse border border-slate-800">
              <thead>
                <tr className="bg-slate-950 text-slate-400 uppercase tracking-widest text-[10px] font-mono border-b border-slate-800">
                  <th className="px-2.5 py-2 border border-slate-800">Criatura / Facción</th>
                  <th className="px-2.5 py-2 border border-slate-800">Tier / Lvl</th>
                  <th className="px-2.5 py-2 border border-slate-800">Cara Básica (Stats)</th>
                  <th className="px-2.5 py-2 border border-slate-800">Cara Élite (Stats)</th>
                  <th className="px-2.5 py-2 border border-slate-800">Habilidades Singulares</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-900">
                <tr>
                  <td className="px-2.5 py-2 font-semibold text-blue-300 border border-slate-800">Piqueros / Alabarderos</td>
                  <td className="px-2.5 py-2 border border-slate-800">Bronce / Lvl 1</td>
                  <td className="px-2.5 py-2 border border-slate-800">⚔️1 🛡️1 ⚡3 ❤️1</td>
                  <td className="px-2.5 py-2 border border-slate-800">⚔️2 🛡️1 ⚡4 ❤️1</td>
                  <td className="px-2.5 py-2 border border-slate-800"><strong>Carga:</strong> +1 Atk al mover 2+ hexes. Élite tiene <strong>Sin Represalia</strong>.</td>
                </tr>
                <tr>
                  <td className="px-2.5 py-2 font-semibold text-blue-300 border border-slate-800">Ángeles / Arcángeles</td>
                  <td className="px-2.5 py-2 border border-slate-800">Oro / Lvl 7</td>
                  <td className="px-2.5 py-2 border border-slate-800">⚔️4 🛡️3 ⚡6 ❤️4</td>
                  <td className="px-2.5 py-2 border border-slate-800">⚔️5 🛡️4 ⚡7 ❤️4</td>
                  <td className="px-2.5 py-2 border border-slate-800"><strong>Vuelo.</strong> Élite puede revivir una unidad Bronce o Plata por combate.</td>
                </tr>
                <tr>
                  <td className="px-2.5 py-2 font-semibold text-emerald-300 border border-slate-800">Elfos / Grandes Elfos</td>
                  <td className="px-2.5 py-2 border border-slate-800">Bronce / Lvl 3</td>
                  <td className="px-2.5 py-2 border border-slate-800">⚔️1 🛡️0 ⚡4 ❤️1</td>
                  <td className="px-2.5 py-2 border border-slate-800">⚔️2 🛡️0 ⚡5 ❤️1</td>
                  <td className="px-2.5 py-2 border border-slate-800"><strong>A distancia.</strong> Élite tiene <strong>Doble Disparo</strong> (ataca dos veces).</td>
                </tr>
                <tr>
                  <td className="px-2.5 py-2 font-semibold text-slate-300 border border-slate-800">Vampiros / S. Vampiro</td>
                  <td className="px-2.5 py-2 border border-slate-800">Plata / Lvl 4</td>
                  <td className="px-2.5 py-2 border border-slate-800">⚔️2 🛡️1 ⚡5 ❤️2</td>
                  <td className="px-2.5 py-2 border border-slate-800">⚔️3 🛡️2 ⚡6 ❤️2</td>
                  <td className="px-2.5 py-2 border border-slate-800"><strong>No-muerto. Sin Represalia.</strong> Élite tiene <strong>Drenaje de Vida</strong>.</td>
                </tr>
                <tr>
                  <td className="px-2.5 py-2 font-semibold text-purple-300 border border-slate-800">Dragones R. / Dragón Negro</td>
                  <td className="px-2.5 py-2 border border-slate-800">Oro / Lvl 7</td>
                  <td className="px-2.5 py-2 border border-slate-800">⚔️4 🛡️3 ⚡6 ❤️4</td>
                  <td className="px-2.5 py-2 border border-slate-800">⚔️5 🛡️4 ⚡7 ❤️4</td>
                  <td className="px-2.5 py-2 border border-slate-800"><strong>Vuelo, Aliento Lineal.</strong> Élite es inmune a toda magia del juego.</td>
                </tr>
                <tr>
                  <td className="px-2.5 py-2 font-semibold text-yellow-300 border border-slate-800">Gigantes / Titanes</td>
                  <td className="px-2.5 py-2 border border-slate-800">Oro / Lvl 7</td>
                  <td className="px-2.5 py-2 border border-slate-800">⚔️4 🛡️3 ⚡5 ❤️4</td>
                  <td className="px-2.5 py-2 border border-slate-800">⚔️5 🛡️3 ⚡6 ❤️4</td>
                  <td className="px-2.5 py-2 border border-slate-800"><strong>Inmune a control mental.</strong> Élite ataca <strong>A distancia</strong>.</td>
                </tr>
                <tr>
                  <td className="px-2.5 py-2 font-semibold text-amber-300 border border-slate-800">Behemoth / Ancestral</td>
                  <td className="px-2.5 py-2 border border-slate-800">Oro / Lvl 7</td>
                  <td className="px-2.5 py-2 border border-slate-800">⚔️4 🛡️2 ⚡5 ❤️4</td>
                  <td className="px-2.5 py-2 border border-slate-800">⚔️5 🛡️2 ⚡6 ❤️4</td>
                  <td className="px-2.5 py-2 border border-slate-800"><strong>Garras:</strong> Reduce 50% defensa enemiga. Élite la reduce a 0.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </div>
  );
}
export { RulebookPDF };
