import { SCENARIOS, type Scenario } from '../data/scenariosData';
import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Compass, Calendar, Trophy, BookOpen, AlertCircle, HelpCircle, Star, Search, ShieldCheck, X, MapPin, Users, Clock, Target, ScrollText, ChevronDown } from 'lucide-react';

export default function ScenariosViewer() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDifficulty, setSelectedDifficulty] = useState<string>('todos');
  const [selectedMode, setSelectedMode] = useState<string>('todos');
  const [activeSubTab, setActiveSubTab] = useState<'scenarios' | 'treasure_die'>('scenarios');
  const [openDetail, setOpenDetail] = useState<string | null>(null);
  const [modalVisible, setModalVisible] = useState(false);

  const filteredScenarios = SCENARIOS.filter(s => {
    const matchesSearch = s.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          s.victoryCondition.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          s.specialRules.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          s.expansion.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesDiff = selectedDifficulty === 'todos' || s.difficulty === selectedDifficulty;
    
    let matchesMode = true;
    if (selectedMode !== 'todos') {
      const modeTerm = selectedMode.split('/')[0].trim().toLowerCase();
      matchesMode = s.players.toLowerCase().includes(modeTerm) ||
                    s.name.toLowerCase().includes(modeTerm) ||
                    s.specialRules.toLowerCase().includes(modeTerm) ||
                    s.gameMode.toLowerCase().includes(modeTerm);
    }

    return matchesSearch && matchesDiff && matchesMode;
  });

  return (
    <div className="bg-slate-900/40 border border-slate-800/80 rounded-3xl p-6 space-y-6 shadow-2xl backdrop-blur-md">
      <motion.section
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative overflow-hidden rounded-3xl border border-slate-800 bg-slate-900/60 p-6 shadow-xl sm:p-8"
      >
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
      </motion.section>
      
      <div className="grid grid-cols-2 gap-5 xl:grid-cols-2">
        {activeSubTab === 'scenarios' ? (
          <>
          <div className="lg:col-span-3 space-y-6">
        {/* Filters Bar */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 bg-slate-950/40 p-3 rounded-2xl border border-slate-850/60">
          {/* Search */}
          <div className="relative sm:col-span-2">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-slate-500" />
            <input
              type="text"
              placeholder="Buscar escenario por meta o caja..."
              value={searchTerm}
              onChange={e => setSearchTerm(e.target.value)}
              className="w-full bg-slate-950 pl-9 pr-3 py-2 rounded-lg border border-slate-850 text-xs text-slate-200 placeholder-slate-500 focus:outline-none focus:border-amber-600/50"
            />
          </div>

          {/* Mode Filter */}
          <div className="flex items-center gap-2">
            <span className="text-[10px] uppercase font-mono text-slate-500 tracking-wider">Modo:</span>
            <div className="flex bg-slate-950 rounded-lg p-0.5 border border-slate-850 flex-1 overflow-x-auto">
              {['todos', 'Enfrentamiento', 'Cooperativo', 'Alianza', 'Campaña', 'Torneo'].map(m => (
                <button
                  key={m}
                  onClick={() => setSelectedMode(m)}
                  className={`px-2 text-[10px] py-1.5 rounded-md font-mono font-bold transition cursor-pointer whitespace-nowrap ${
                    selectedMode === m ? 'bg-amber-600/20 text-amber-300' : 'text-slate-500 hover:text-slate-300'
                  }`}
                >
                  {m === 'todos' ? 'TODOS' : m.toUpperCase()}
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
      </div>
            <section className="min-w-0 space-y-4">
            
            {/* Left: Compact Scenario List */}

            {/* Scenario Grid - Compact */}
            {filteredScenarios.length === 0 ? (
              <div className="text-center py-12 px-4 border-2 border-dashed border-slate-850 rounded-2xl">
                <span className="text-3xl">🧭</span>
                <p className="text-slate-400 font-mono text-xs mt-3">No se encontraron escenarios que coincidan con los filtros aplicados.</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-3">
                {filteredScenarios.map(scenario => (
                  <button
                    key={scenario.id}
                    onClick={() => setOpenDetail(scenario.id)}
                    className={`text-left bg-slate-950/40 p-3 rounded-xl border transition-all shadow-sm hover:shadow-md cursor-pointer ${
                      openDetail === scenario.id ? 'border-amber-600/60 bg-amber-950/10' : 'border-slate-850/60 hover:border-amber-900/30'
                    }`}
                  >
                    <div className="flex items-center justify-between gap-2 mb-1.5">
                      <span className={`text-[10px] font-mono uppercase font-bold tracking-widest px-1.5 py-0.5 rounded border ${
                        scenario.difficulty === 'Fácil' ? 'bg-emerald-950/40 border-emerald-900/30 text-emerald-400'
                        : scenario.difficulty === 'Media' ? 'bg-amber-950/40 border-amber-900/30 text-amber-500'
                        : 'bg-red-950/40 border-red-900/30 text-red-400'
                      }`}>
                        {scenario.difficulty}
                      </span>
                      <span className="text-[10px] text-slate-500 font-mono">{scenario.rounds}R</span>
                    </div>
                    <h3 className="font-serif text-slate-100 font-bold text-xs tracking-wide leading-tight mb-1">{scenario.name}</h3>
                    <p className="text-[10px] text-slate-400 font-mono truncate">{scenario.players} | {scenario.gameMode}</p>
                    <p className="text-[10px] text-amber-400/80 font-mono mt-1 truncate">🏆 {scenario.victoryCondition}</p>
                  </button>
                ))}
              </div>
            )}
          </section>
          {/* Right: Fixed Detail Panel */}
          <aside className="lg:col-span-1 h-fit rounded-2xl border border-slate-800 bg-slate-900/60 p-5 lg:sticky lg:top-4 shadow-xl">
            
            {openDetail ? (() => {
              const s = SCENARIOS.find(x => x.id === openDetail);
              if (!s) return <div className="py-10 text-center text-sm text-slate-500">Selecciona un escenario.</div>;
              return (
                <div className="space-y-5">
                  <div className="flex items-start justify-between gap-3 border-b border-slate-800 pb-4">
                    <div>
                      <span className={`inline-block text-[10px] font-mono uppercase font-bold tracking-widest px-2 py-0.5 rounded border mb-2 ${
                        s.difficulty === 'Fácil' ? 'bg-emerald-950/40 border-emerald-900/30 text-emerald-400'
                        : s.difficulty === 'Media' ? 'bg-amber-950/40 border-amber-900/30 text-amber-500'
                        : 'bg-red-950/40 border-red-900/30 text-red-400'
                      }`}>{s.difficulty}</span>
                      <h3 className="text-lg font-serif font-bold text-amber-300 leading-snug">{s.name}</h3>
                      <p className="text-[11px] font-mono text-slate-500 mt-1">{s.id}</p>
                    </div>
                    <button onClick={() => setOpenDetail(null)} className="w-7 h-7 bg-slate-950 hover:bg-slate-800 rounded-full flex items-center justify-center text-slate-400 hover:text-slate-200 transition cursor-pointer" aria-label="Cerrar detalles"><X className="w-3.5 h-3.5" /></button>
                  </div>
                  <div className="grid grid-cols-2 gap-2 text-xs">
                    <div className="rounded-xl border border-slate-800 bg-slate-950/50 p-3"><dt className="text-slate-600 text-[10px] uppercase">Jugadores</dt><dd className="mt-1 font-semibold text-slate-200">{s.players}</dd></div>
                    <div className="rounded-xl border border-slate-800 bg-slate-950/50 p-3"><dt className="text-slate-600 text-[10px] uppercase">Modo</dt><dd className="mt-1 font-semibold text-slate-200">{s.gameMode}</dd></div>
                    <div className="rounded-xl border border-slate-800 bg-slate-950/50 p-3"><dt className="text-slate-600 text-[10px] uppercase">Rondas</dt><dd className="mt-1 font-semibold text-slate-200">{s.rounds}</dd></div>
                    <div className="rounded-xl border border-slate-800 bg-slate-950/50 p-3"><dt className="text-slate-600 text-[10px] uppercase">Expansión</dt><dd className="mt-1 font-semibold text-slate-200">{s.expansion}</dd></div>
                  </div>
                  <div className="space-y-2">
                    <h4 className="text-[10px] font-bold uppercase tracking-widest text-amber-400">Condición de Victoria</h4>
                    <p className="text-sm leading-relaxed text-slate-300">{s.victoryCondition}</p>
                  </div>
                  <div className="space-y-2">
                    <h4 className="text-[10px] font-bold uppercase tracking-widest text-amber-400">Configuración</h4>
                    <p className="text-sm leading-relaxed text-slate-300">{s.setup}</p>
                  </div>
                  <div className="space-y-2">
                    <h4 className="text-[10px] font-bold uppercase tracking-widest text-amber-400">Reglas Especiales</h4>
                    <p className="text-sm leading-relaxed text-slate-300">{s.specialRules}</p>
                  </div>
                  {s.initialResources && (
                    <div className="rounded-xl border border-slate-800 bg-slate-950/50 p-3 space-y-2">
                      <h4 className="text-[10px] font-bold uppercase tracking-widest text-amber-400">Recursos Iniciales</h4>
                      <div className="grid grid-cols-3 gap-2 text-xs">
                        <div><span className="text-slate-600">Oro</span><span className="block font-bold text-amber-300">{s.initialResources.gold}</span></div>
                        <div><span className="text-slate-600">Mat.</span><span className="block font-bold text-amber-300">{s.initialResources.materials}</span></div>
                        <div><span className="text-slate-600">Obj.</span><span className="block font-bold text-amber-300">{s.initialResources.valuables}</span></div>
                      </div>
                    </div>
                  )}
                  {s.startingFaction && (
                    <div className="rounded-xl border border-slate-800 bg-slate-950/50 p-3"><h4 className="text-[10px] font-bold uppercase tracking-widest text-amber-400">Facción / Héroe</h4><p className="text-sm text-slate-300">{s.startingFaction} — {s.startingHero}</p></div>
                  )}
                </div>
              );
            })() : (
              <div className="py-10 text-center text-sm text-slate-500">Selecciona un escenario de la lista para ver todos sus detalles.</div>
            )}
          </aside>
          </>
        ) : (
          /* Treasure Die & Chest Rules Guide */
          <>
            <section className="min-w-0 space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
                
                {/* Left Rules Column (col-span-7) */}
                <div className="md:col-span-12 space-y-4">
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
              </div>
            </section>  
              {/* Right Rewards Table Column (col-span-5) */}
              <aside className="lg:col-span-1 h-fit rounded-2xl border border-slate-800 bg-slate-900/60 p-5 lg:sticky lg:top-4 shadow-xl">
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
              </aside>
          

            {/* Quick rules summary */}
            <div className="md:col-span-2 bg-slate-950/60 rounded-2xl p-4 border border-slate-850 flex gap-4 text-xs text-slate-300 leading-relaxed">
              <ShieldCheck className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
              <div className="space-y-1">
                <strong className="text-slate-200">Resolución en Combates de Campaña:</strong>
                <p>
                  Al derrotar a un ejército de nivel Oro (Gold) que custodia un obelisco o un punto de ruta, puedes reclamar una tirada del dado de tesoro de forma gratuita, además de la experiencia regular. ¡Usa esta guía de referencia para no ralentizar el juego físico!
                </p>
              </div>
            </div>
          </>
        )}

      </div>
    </div>
  );
}
