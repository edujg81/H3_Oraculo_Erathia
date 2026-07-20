import React, { useState } from 'react';
import { Compass, Calendar, Trophy, BookOpen, AlertCircle, HelpCircle, Star, Search, ShieldCheck } from 'lucide-react';

interface Scenario {
  id: string;
  name: string;
  players: string;
  rounds: number;
  difficulty: 'Fácil' | 'Media' | 'Difícil';
  victoryCondition: string;
  setup: string;
  specialRules: string;
  expansion: string;
}

const SCENARIOS: Scenario[] = [
  {
    id: 'steadwick',
    name: 'La Liberación de Steadwick (Liberation of Steadwick)',
    players: '1-4 Jugadores',
    rounds: 12,
    difficulty: 'Media',
    victoryCondition: 'Capturar el Castillo fortificado de Steadwick, controlado por un Héroe neutral de nivel superior, antes de que concluya la última ronda.',
    setup: 'Baldosa de inicio de cada jugador conectada a un anillo de baldosas centrales. Steadwick se coloca en el centro absoluto rodeada por guarniciones defensivas de nivel Oro.',
    specialRules: 'Todas las minas de Steadwick producen el doble de recursos. Los héroes que mueren en la región central no pueden ser resucitados; se pierden para siempre.',
    expansion: 'Juego Base (Core Box)'
  },
  {
    id: 'grail',
    name: 'La Búsqueda del Grial (Quest for the Grail)',
    players: '1-3 Jugadores',
    rounds: 14,
    difficulty: 'Difícil',
    victoryCondition: 'Visitar al menos 3 obeliscos diferentes del mapa para decodificar el mapa, excavar el Grial en la ubicación correcta y construir la estructura del Grial en la ciudad.',
    setup: 'Se barajan los obeliscos del mazo y se asignan a tres losetas de mapa marcadas. El grial se esconde enterrado bajo una casilla de tierra neutral central.',
    specialRules: 'Cualquier héroe que tenga el Grial en su poder ve reducida su iniciativa de viaje en -1. Si es derrotado, el Grial es reclamado inmediatamente por el vencedor.',
    expansion: 'Juego Base (Core Box)'
  },
  {
    id: 'scourge_dead',
    name: 'El Azote de los Muertos (Scourge of the Dead)',
    players: '1-2 Jugadores',
    rounds: 10,
    difficulty: 'Media',
    victoryCondition: 'Adentrarse en las tierras marchitas y vencer al Señor de la Guerra nigromante Sandro en su fortaleza central antes del fin de la ronda 10.',
    setup: 'Se requiere una zona de Necrópolis central rodeada por losetas de tipo desértico o pantanoso con abundancia de criaturas de nivel Plata custodiando los accesos.',
    specialRules: 'Los hechizos de escuela de Tierra cuestan 1 punto de Maná adicional. Cada vez que una unidad aliada cae en batalla, cura 1 punto de salud a las tropas esqueléticas enemigas.',
    expansion: 'Juego Base (Core Box)'
  },
  {
    id: 'festival_life',
    name: 'El Festival de la Vida (Festival of Life)',
    players: '1-2 Jugadores (Cooperativo)',
    rounds: 10,
    difficulty: 'Fácil',
    victoryCondition: 'Exterminar a los 4 líderes de Behemoth salvajes que custodian las cuevas del sector subterráneo de la región este.',
    setup: 'Incluye obligatoriamente la expansión Subterráneo (Underworld). 2 portales subterráneos colocados cerca de las bases iniciales de los jugadores.',
    specialRules: 'No se permite construir el Capitolio (City Hall de nivel máximo). Al final de cada ronda astrológica par, un terremoto causa 1 punto de daño directo a una estructura defensiva aleatoria.',
    expansion: 'Expansión del Subterráneo (Underworld)'
  },
  {
    id: 'minotaur_labyrinth',
    name: 'El Laberinto del Minotauro (Minotaur\'s Labyrinth)',
    players: '1-3 Jugadores',
    rounds: 12,
    difficulty: 'Media',
    victoryCondition: 'Explorar las profundidades del laberinto, capturar el asentamiento central de la Mazmorra (Dungeon) custodiado por el Rey Minotauro y saquear su tesorería secreta.',
    setup: 'Se colocan losetas con un patrón serpenteante que imita un laberinto de piedra. El centro contiene un asentamiento de Mazmorra con tropas de nivel Oro.',
    specialRules: 'Toda criatura de tipo Minotauro de la IA gana +1 a la iniciativa táctica. Los jugadores pierden 1 de Oro al final de cada ronda en la que no hayan descubierto al menos una loseta.',
    expansion: 'Expansión del Subterráneo (Underworld)'
  },
  {
    id: 'sand_dunes',
    name: 'Las Dunas de Arena de Bracada (Bracada Sand Dunes)',
    players: '1-2 Jugadores',
    rounds: 8,
    difficulty: 'Fácil',
    victoryCondition: 'Acumular un total neto de 25,000 monedas de Oro en el cofre del jugador o controlar simultáneamente 5 Minas de Oro de la periferia.',
    setup: 'Mapa desértico lineal. Alta abundancia de cofres de tesoro dispersos y asaltantes nómadas protegiendo los senderos principales.',
    specialRules: 'La tasa del mercado para transacciones se duplica (se requiere la mitad de recursos para cambiar). Se permite comprar mercenarios de facciones neutrales.',
    expansion: 'Expansión de la Torre (Tower)'
  },
  {
    id: 'alchemy_harvest',
    name: 'La Cosecha de la Alquimia (Alchemy\'s Harvest)',
    players: '1-3 Jugadores',
    rounds: 12,
    difficulty: 'Difícil',
    victoryCondition: 'Desarrollar la Cofradía de Magos al máximo nivel absoluto en tu ciudad de Torre y sintetizar el legendario artefacto "Espejo de Alquimia" gastando gemas y oro.',
    setup: 'Se configuran minas de recursos valiosos en las mesetas nevadas. Los caminos están bloqueados por Golems de Acero y de Oro hostiles.',
    specialRules: 'La producción de recursos valiosos en tus minas se incrementa en +1. El coste de aprender nuevos hechizos en la Cofradía de Magos se reduce en -1 de Oro.',
    expansion: 'Expansión de la Torre (Tower)'
  },
  {
    id: 'infested_waters',
    name: 'Aguas Infestadas (Infested Waters)',
    players: '1-2 Jugadores',
    rounds: 10,
    difficulty: 'Media',
    victoryCondition: 'Eliminar a las criaturas marinas colosales (Leviatanes y Serpientes Marinas) que custodian el Faro de la Cala y asegurar el control de las minas costeras.',
    setup: 'Mapa predominantemente costero o fluvial, con losetas de agua y muelles de la Cala (Cove). Se colocan tres enclaves de monstruos marinos en los islotes.',
    specialRules: 'Los héroes se mueven un hexágono adicional de forma gratuita por cada muelle controlado. El coste de reclutamiento de unidades de tipo Pirata se reduce en -1 de Oro.',
    expansion: 'Expansión de la Cala (Cove)'
  },
  {
    id: 'dragon_cliffs',
    name: 'Asalto a los Acantilados del Dragón (Dragon Cliffs)',
    players: '1-3 Jugadores',
    rounds: 12,
    difficulty: 'Difícil',
    victoryCondition: 'Limpiar todos los nidos y asentamientos de dragones (Azul / Dragones Legendarios) en las losetas exteriores del mapa y recolectar al menos un artefacto Reliquia.',
    setup: 'Las losetas lejanas del mapa deben contener al menos 3 nidos de dragones marcados en el setup inicial con enemigos de tier Legendario.',
    specialRules: 'La moral de todos los regimientos que no sean dragones disminuye en -1 en la ronda táctica contra dragones debido a la presencia imponente de estos seres.',
    expansion: 'Caja del Tesoro (Stretch Goals)'
  }
];

export default function ScenariosDatabase() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDifficulty, setSelectedDifficulty] = useState<string>('todos');
  const [selectedPlayers, setSelectedPlayers] = useState<string>('todos');
  const [activeSubTab, setActiveSubTab] = useState<'scenarios' | 'treasure_die'>('scenarios');

  const filteredScenarios = SCENARIOS.filter(s => {
    const matchesSearch = s.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          s.victoryCondition.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          s.expansion.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesDiff = selectedDifficulty === 'todos' || s.difficulty === selectedDifficulty;
    
    let matchesPlayers = true;
    if (selectedPlayers !== 'todos') {
      matchesPlayers = s.players.includes(selectedPlayers);
    }

    return matchesSearch && matchesDiff && matchesPlayers;
  });

  return (
    <div className="bg-slate-900/40 border border-slate-800/80 rounded-3xl p-6 space-y-6 shadow-2xl backdrop-blur-md">
      {/* Tab Header Controls */}
      <div className="flex flex-col md:flex-row md:items-center justify-between border-b border-slate-800/80 pb-4 gap-4">
        <div>
          <h2 className="text-xl font-serif text-amber-400 flex items-center gap-2">
            <Compass className="w-5 h-5 text-amber-500" />
            Escenarios Rápidos & Reglas del Dado de Tesoro
          </h2>
          <p className="text-xs text-slate-400">
            Consulta esquemas de juego oficiales y resuelve tus dudas de tesoros, cofres y dados.
          </p>
        </div>

        {/* Local sub-tabs to switch views */}
        <div className="flex bg-slate-950 p-1 rounded-xl border border-slate-850 self-start md:self-center">
          <button
            onClick={() => setActiveSubTab('scenarios')}
            className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition cursor-pointer ${
              activeSubTab === 'scenarios'
                ? 'bg-amber-600 text-white shadow-md'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            🗺️ Base de Escenarios
          </button>
          <button
            onClick={() => setActiveSubTab('treasure_die')}
            className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition cursor-pointer ${
              activeSubTab === 'treasure_die'
                ? 'bg-amber-600 text-white shadow-md'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            🔮 Reglas del Dado de Tesoro
          </button>
        </div>
      </div>

      {activeSubTab === 'scenarios' ? (
        <div className="space-y-6">
          {/* Filters Bar */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 bg-slate-950/40 p-3 rounded-2xl border border-slate-850/60">
            {/* Search */}
            <div className="relative">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-slate-500" />
              <input
                type="text"
                placeholder="Buscar escenario por meta o caja..."
                value={searchTerm}
                onChange={e => setSearchTerm(e.target.value)}
                className="w-full bg-slate-950 pl-9 pr-3 py-2 rounded-lg border border-slate-850 text-xs text-slate-200 placeholder-slate-500 focus:outline-none focus:border-amber-600/50"
              />
            </div>

            {/* Players Filter */}
            <div className="flex items-center gap-2">
              <span className="text-[10px] uppercase font-mono text-slate-500 tracking-wider">Jugadores:</span>
              <div className="flex bg-slate-950 rounded-lg p-0.5 border border-slate-850 flex-1">
                {['todos', '1-2', '1-3', '1-4'].map(p => (
                  <button
                    key={p}
                    onClick={() => setSelectedPlayers(p)}
                    className={`flex-1 text-[10px] py-1.5 rounded-md font-mono font-bold transition cursor-pointer ${
                      selectedPlayers === p ? 'bg-amber-600/20 text-amber-300' : 'text-slate-500 hover:text-slate-300'
                    }`}
                  >
                    {p === 'todos' ? 'TODOS' : p}
                  </button>
                ))}
              </div>
            </div>

            {/* Difficulty Filter */}
            <div className="flex items-center gap-2">
              <span className="text-[10px] uppercase font-mono text-slate-500 tracking-wider">Dificultad:</span>
              <div className="flex bg-slate-950 rounded-lg p-0.5 border border-slate-850 flex-1">
                {['todos', 'Fácil', 'Media', 'Difícil'].map(d => (
                  <button
                    key={d}
                    onClick={() => setSelectedDifficulty(d)}
                    className={`flex-1 text-[10px] py-1.5 rounded-md font-bold transition cursor-pointer ${
                      selectedDifficulty === d ? 'bg-amber-600/20 text-amber-300' : 'text-slate-500 hover:text-slate-300'
                    }`}
                  >
                    {d === 'todos' ? 'TODOS' : d.toUpperCase()}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Scenario Grid */}
          {filteredScenarios.length === 0 ? (
            <div className="text-center py-12 px-4 border-2 border-dashed border-slate-850 rounded-2xl">
              <span className="text-3xl">🧭</span>
              <p className="text-slate-400 font-mono text-xs mt-3">No se encontraron escenarios que coincidan con los filtros aplicados.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {filteredScenarios.map(scenario => (
                <div
                  key={scenario.id}
                  className="bg-slate-950/40 p-5 rounded-2xl border border-slate-850/60 hover:border-amber-900/30 transition-all flex flex-col justify-between space-y-4 shadow-sm"
                >
                  <div className="space-y-2">
                    <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-900 pb-2">
                      <span className={`text-[10px] font-mono uppercase font-bold tracking-widest px-2 py-0.5 rounded border ${
                        scenario.difficulty === 'Fácil' ? 'bg-emerald-950/40 border-emerald-900/30 text-emerald-400'
                        : scenario.difficulty === 'Media' ? 'bg-amber-950/40 border-amber-900/30 text-amber-500'
                        : 'bg-red-950/40 border-red-900/30 text-red-400'
                      }`}>
                        Dificultad: {scenario.difficulty}
                      </span>

                      <span className="text-[10px] font-mono uppercase font-bold tracking-widest px-2 py-0.5 rounded border bg-slate-900 border-slate-850 text-slate-300">
                        📦 {scenario.expansion}
                      </span>

                      <div className="flex items-center gap-1.5 text-[10px] text-slate-500 font-mono">
                        <Calendar className="w-3 h-3 text-amber-500/80" />
                        <span>{scenario.rounds} Rondas</span>
                      </div>
                    </div>

                    <h3 className="font-serif text-slate-100 font-bold text-sm tracking-wide mt-1.5">
                      {scenario.name}
                    </h3>
                    <p className="text-[10px] text-slate-400 font-mono">
                      Capacidad: 🛡️ {scenario.players}
                    </p>

                    <div className="bg-slate-900/40 p-2.5 rounded-lg border border-slate-850 text-xs text-slate-300">
                      <span className="text-[10px] uppercase font-mono tracking-wider text-amber-500 font-bold block mb-1">
                        🏆 Condición de Victoria:
                      </span>
                      <p className="leading-relaxed text-[12px]">{scenario.victoryCondition}</p>
                    </div>
                  </div>

                  <div className="space-y-1 text-[12px] text-slate-400 pt-2 border-t border-slate-900/80">
                    <p><strong>🗺️ Distribución:</strong> {scenario.setup}</p>
                    <p className="mt-1 text-slate-500"><strong>⚠️ Reglas Especiales:</strong> {scenario.specialRules}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      ) : (
        /* Treasure Die & Chest Rules Guide */
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
            
            {/* Left Rules Column (col-span-7) */}
            <div className="md:col-span-7 space-y-4">
              <h3 className="text-sm font-serif font-bold text-amber-300 border-b border-slate-800 pb-2">
                📘 Funcionamiento Oficial del Dado de Tesoro (Treasure Die)
              </h3>
              
              <div className="space-y-3 text-xs text-slate-300 leading-relaxed">
                <p>
                  El <strong>Dado de Tesoro (d6)</strong> es un elemento clave de aleatoriedad táctica y progresión en *Heroes III*. Se lanza principalmente al interactuar con <strong>Cofres de Tesoro (Treasure Chests)</strong> abandonados, al saquear asentamientos neutrales de alto rango, o al derrotar criaturas de nivel de dificultad Oro/Azul en el mapa.
                </p>

                <div className="bg-slate-950/60 p-4 rounded-xl border border-slate-850 space-y-2">
                  <h4 className="text-sm font-mono font-bold text-slate-200 uppercase tracking-wide flex items-center gap-1.5">
                    <Star className="w-3.5 h-3.5 text-amber-500" />
                    Elección Fundamental de un Cofre:
                  </h4>
                  <p className="text-[12px]">
                    Cuando un Héroe detiene su movimiento sobre una loseta que contiene el símbolo de un cofre, el jugador activo debe realizar una elección inmediata e irreversible:
                  </p>
                  <ul className="list-disc pl-5 text-[12px] space-y-1 text-slate-400 mt-1">
                    <li>
                      <strong className="text-emerald-400">Garantizar Experiencia:</strong> Gana automáticamente <strong>1 punto de Experiencia (XP)</strong> y descarta el cofre.
                    </li>
                    <li>
                      <strong className="text-amber-400">Arriesgar con el Dado:</strong> Lanza el <strong>Dado de Tesoro</strong> para determinar una recompensa (como ganar medio nivel de EXP, buscar cartas de Artefacto o lanzar dados de recursos).
                    </li>
                  </ul>
                </div>

                <div className="bg-amber-950/10 border border-amber-900/30 p-3 rounded-xl flex gap-3 text-amber-200">
                  <AlertCircle className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                  <p className="text-[12px]">
                    <strong>Consejo Táctico de Sandro:</strong> ¡La experiencia extra y la búsqueda selectiva de Artefactos te otorgarán una ventaja colosal! No subestimes una tirada que te permita elegir de entre dos dados de recursos para levantar tus estructuras clave.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Rewards Table Column (col-span-5) */}
            <div className="md:col-span-5 bg-slate-950/60 p-4 rounded-xl border border-slate-850 space-y-4">
              <h3 className="text-sm font-mono font-bold text-slate-400 uppercase tracking-widest border-b border-slate-900 pb-2">
                🎲 Recompensas de las 6 Caras
              </h3>

              <div className="space-y-2 font-mono">
                {/* Face 1 */}
                <div className="p-2 bg-slate-900/60 rounded-lg border border-amber-900/10 flex items-center justify-between text-xs">
                  <span className="font-bold text-amber-500 flex items-center gap-2">
                    <span className="w-5 h-5 rounded bg-slate-950 border border-slate-850 flex items-center justify-center text-[10px]">1</span>
                    ✨ +0.5 Nivel EXP
                  </span>
                  <span className="text-slate-300 text-[10px] text-right">Héroe principal gana medio nivel</span>
                </div>

                {/* Face 2 */}
                <div className="p-2 bg-slate-900/60 rounded-lg border border-amber-900/10 flex items-center justify-between text-xs">
                  <span className="font-bold text-amber-500 flex items-center gap-2">
                    <span className="w-5 h-5 rounded bg-slate-950 border border-slate-850 flex items-center justify-center text-[10px]">2</span>
                    ✨ +0.5 Nivel EXP
                  </span>
                  <span className="text-slate-300 text-[10px] text-right">Héroe principal gana medio nivel</span>
                </div>

                {/* Face 3 */}
                <div className="p-2 bg-slate-900/60 rounded-lg border border-purple-900/20 flex items-center justify-between text-xs">
                  <span className="font-bold text-purple-400 flex items-center gap-2">
                    <span className="w-5 h-5 rounded bg-slate-950 border border-slate-850 flex items-center justify-center text-[10px]">3</span>
                    🔍 Buscar(2) Art.
                  </span>
                  <span className="text-slate-300 text-[10px] text-right">Buscar en mazo de Artefactos</span>
                </div>

                {/* Face 4 */}
                <div className="p-2 bg-slate-900/60 rounded-lg border border-purple-900/20 flex items-center justify-between text-xs">
                  <span className="font-bold text-purple-400 flex items-center gap-2">
                    <span className="w-5 h-5 rounded bg-slate-950 border border-slate-850 flex items-center justify-center text-[10px]">4</span>
                    🔍 Buscar(2) Art.
                  </span>
                  <span className="text-slate-300 text-[10px] text-right">Buscar en mazo de Artefactos</span>
                </div>

                {/* Face 5 */}
                <div className="p-2 bg-slate-900/60 rounded-lg border border-blue-900/20 flex items-center justify-between text-xs">
                  <span className="font-bold text-blue-400 flex items-center gap-2">
                    <span className="w-5 h-5 rounded bg-slate-950 border border-slate-850 flex items-center justify-center text-[10px]">5</span>
                    🎲 1 Dado Recursos
                  </span>
                  <span className="text-slate-300 text-[10px] text-right">Lanzar 1 dado de recursos</span>
                </div>

                {/* Face 6 */}
                <div className="p-2 bg-slate-900/60 rounded-lg border border-emerald-900/20 flex items-center justify-between text-xs">
                  <span className="font-bold text-emerald-400 flex items-center gap-2">
                    <span className="w-5 h-5 rounded bg-slate-950 border border-slate-850 flex items-center justify-center text-[10px]">6</span>
                    🎲 2 Dados Rec.
                  </span>
                  <span className="text-slate-300 text-[10px] text-right">Lanzar 2 y elegir uno</span>
                </div>
              </div>
            </div>

          </div>

          {/* Quick rules summary */}
          <div className="bg-slate-950/60 rounded-2xl p-4 border border-slate-850 flex gap-4 text-xs text-slate-300 leading-relaxed">
            <ShieldCheck className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
            <div className="space-y-1">
              <strong className="text-slate-200">Resolución en Combates de Campaña:</strong>
              <p>
                Al derrotar a un ejército de nivel Oro (Gold) que custodia un obelisco o un punto de ruta, puedes reclamar una tirada del dado de tesoro de forma gratuita, además de la experiencia regular. ¡Usa esta guía de referencia para no ralentizar el juego físico!
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
