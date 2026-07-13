import React, { useState, useMemo } from 'react';
import { 
  Sparkles, BookOpen, Flame, Droplets, Wind, Globe, Search, HelpCircle, 
  Plus, Minus, Wand2, Eye, Zap, Shield, Swords
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { SPELLS_DATA, LocalSpellCard as SpellCard } from '../data/spellsData';

export default function SpellCardsViewer() {
  const [searchTerm, setSearchTerm] = useState('');
  const [schoolFilter, setSchoolFilter] = useState<'Todos' | 'Aire' | 'Agua' | 'Fuego' | 'Tierra'>('Todos');
  const [typeFilter, setTypeFilter] = useState<'Todos' | 'Básica' | 'Avanzada'>('Todos');
  const [selectedSpell, setSelectedSpell] = useState<SpellCard | null>(SPELLS_DATA[0]);

  // Spell Simulator States
  const [powerBoost, setPowerBoost] = useState<number>(0);
  const [simulationLog, setSimulationLog] = useState<string>('Lanza el hechizo para iniciar la simulación mística de mesa.');

  // Schools lookup for icons and colors
  const schoolConfig = {
    Aire: { icon: Wind, color: 'text-white', bg: 'bg-cyan-950/30 border-cyan-500/30 text-cyan-200' },
    Agua: { icon: Droplets, color: 'text-sky-400', bg: 'bg-sky-950/30 border-sky-500/30 text-sky-200' },
    Fuego: { icon: Flame, color: 'text-red-400', bg: 'bg-red-950/30 border-red-500/30 text-red-200' },
    Tierra: { icon: Globe, color: 'text-emerald-400', bg: 'bg-emerald-950/30 border-emerald-500/30 text-emerald-200' },
    Todos: { icon: Sparkles, color: 'text-amber-400', bg: 'bg-amber-950/30 border-amber-500/30 text-amber-200' },
  };

  // Filtered and alphabetically sorted spells
  const filteredSpells = useMemo(() => {
    return SPELLS_DATA.filter(spell => {
      const matchesSearch = spell.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                            spell.effect.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesSchool = schoolFilter === 'Todos' || spell.school === schoolFilter || spell.isAllSchools;
      const matchesType = typeFilter === 'Todos' || spell.type === typeFilter;

      return matchesSearch && matchesSchool && matchesType;
    }).sort((a, b) => a.name.localeCompare(b.name, 'es'));
  }, [searchTerm, schoolFilter, typeFilter]);

  // Calculate dynamic outputs for the simulator based on power boost
  const calculatedStats = useMemo(() => {
    if (!selectedSpell) return { text: '' };

    let formattedText = selectedSpell.valueText;
    if (selectedSpell.isBoostable && selectedSpell.powerLevels) {
      if (selectedSpell.powerLevels[powerBoost] !== undefined) {
        formattedText = selectedSpell.powerLevels[powerBoost];
      } else {
        const keys = Object.keys(selectedSpell.powerLevels).map(Number).sort((a, b) => b - a);
        for (const k of keys) {
          if (k <= powerBoost) {
            formattedText = selectedSpell.powerLevels[k];
            break;
          }
        }
      }
    }

    return {
      text: formattedText
    };
  }, [selectedSpell, powerBoost]);

  // Maximum power level dynamically computed from the spell's available levels
  const maxPowerForSpell = useMemo(() => {
    if (!selectedSpell || !selectedSpell.powerLevels) return 0;
    const keys = Object.keys(selectedSpell.powerLevels).map(Number);
    return keys.length > 0 ? Math.max(...keys) : 0;
  }, [selectedSpell]);

  // Trigger simulation roll
  const runSimulation = () => {
    if (!selectedSpell) return;
    
    let logMsg = '';
    
    if (selectedSpell.isBoostable) {
      const boostText = powerBoost > 0 
        ? ` potenciado con +${powerBoost} de Poder (mediante descarte de cartas de hechizo o Habilidad de Escuela activa)` 
        : ' lanzado en su estado base (sin potenciar)';
      
      logMsg = `🔮 ¡Lanzando Hechizo! Has ejecutado "${selectedSpell.name}"${boostText}.\n` +
               `➡️ EFECTO RESOLUTORIO EN MESA: ${calculatedStats.text}\n\n` +
               `🛡️ Regla oficial: En el juego de mesa, las habilidades de Escuelas de Magia no añaden nuevos niveles de efectos independientes (no hay efecto experto); en su lugar, estas habilidades te facultan para potenciar los hechizos sumando Poder (+1 por nivel), de igual manera que puedes lograrlo descartando otras cartas de hechizo de tu mano.`;
    } else {
      logMsg = `🔮 ¡Lanzando Hechizo! Has ejecutado "${selectedSpell.name}".\n` +
               `➡️ EFECTO RESOLUTORIO EN MESA: ${selectedSpell.valueText}\n\n` +
               `⚠️ Nota mística: Este hechizo es de utilidad o estado puro, por lo que NO es numéricamente potenciable mediante Poder. El incremento de Poder no tiene efecto sobre su resolución física en mesa.`;
    }
    
    setSimulationLog(logMsg);
  };

  const handleSelectSpell = (spell: SpellCard) => {
    setSelectedSpell(spell);
    setPowerBoost(0);
    setSimulationLog('Hechizo seleccionado. Configura el nivel de Poder deseado arriba para iniciar la simulación.');
  };

  return (
    <div className="space-y-6">
      
      {/* 1. Mytic Header & Rules Summary */}
      <div className="bg-slate-900/50 border border-slate-800 rounded-3xl p-6 shadow-xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-10 -left-10 w-96 h-96 bg-red-500/5 rounded-full blur-3xl pointer-events-none" />
        
        <div className="relative flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-2 max-w-2xl">
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono bg-amber-500/10 text-amber-400 border border-amber-500/20 font-bold uppercase tracking-wider">
                Libro de Hechizos de Erathia
              </span>
              <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono bg-violet-500/10 text-violet-400 border border-violet-500/20 font-bold uppercase tracking-wider">
                Reglamento de Mesa Oficial
              </span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-100 tracking-tight flex items-center gap-2">
              <BookOpen className="w-5 sm:w-6 h-5 sm:h-6 text-amber-500 shrink-0" />
              Módulo de Hechizos del Juego de Mesa
            </h2>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
              Consulta rápida y simulador del reglamento oficial para cartas de Hechizo. Recuerda que en esta fiel recreación del juego de mesa, los hechizos <strong>no tienen efectos expertos diferenciados</strong>. Las habilidades de escuelas de magia sirven exclusivamente para potenciar los hechizos del mismo modo que se potencia descartando cartas.
            </p>
          </div>
          
          <div className="p-4 bg-slate-950/60 rounded-2xl border border-slate-800 max-w-xs text-[11px] text-slate-400 space-y-2 shrink-0">
            <span className="text-amber-400 font-bold uppercase tracking-wider block font-mono text-[10px]">📖 Reglas de Potenciación:</span>
            <p className="leading-relaxed">
              <strong>Básicos vs Avanzados:</strong> Las cartas Básicas tienen el símbolo de su escuela en 1 esquina. Las Avanzadas lo tienen en las 4 esquinas.
            </p>
            <p className="leading-relaxed border-t border-slate-800/80 pt-1.5">
              <strong>Mecánica de Poder (+1 Poder):</strong> Sumar poder aumenta numéricamente el efecto del hechizo (si es potenciable). Se logra <strong>descartando cartas de hechizo</strong> de tu mano (+1 por carta) o mediante <strong>habilidades de Escuelas de Magia</strong>.
            </p>
          </div>
        </div>
      </div>

      {/* 2. Interactive Spell Booster Simulator */}
      <div className="bg-slate-900/50 border border-slate-800 rounded-3xl p-6 shadow-xl space-y-6">
        <h3 className="text-sm font-bold text-amber-500 uppercase tracking-widest flex items-center justify-between border-b border-slate-850 pb-3">
          <span className="flex items-center gap-1.5">
            <Wand2 className="w-4 h-4 text-amber-600" />
            Simulador de Lanzamiento de Hechizo
          </span>
          <span className="text-[10px] font-mono bg-amber-950 text-amber-400 px-2 py-0.5 rounded border border-amber-800/30">
            Reglamento Fiel del Juego de Mesa
          </span>
        </h3>

        {selectedSpell ? (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
            
            {/* Control Panel (7 cols) */}
            <div className="lg:col-span-7 space-y-5 flex flex-col justify-between">
              <div className="space-y-4">
                {/* Spell Badge Header */}
                <div className="flex items-center gap-3">
                  {selectedSpell.isAllSchools ? (
                    <div className="flex -space-x-1 shrink-0">
                      {(['Aire', 'Agua', 'Fuego', 'Tierra'] as const).map((schoolName) => {
                        const config = schoolConfig[schoolName];
                        return (
                          <div 
                            key={schoolName}
                            className={`p-1.5 rounded-lg border bg-slate-950/80 border-slate-800 shrink-0 shadow-sm`}
                            title={`Magia de ${schoolName}`}
                          >
                            {React.createElement(config.icon, { className: `w-3.5 h-3.5 ${config.color}` })}
                          </div>
                        );
                      })}
                    </div>
                  ) : (
                    <div className={`p-2.5 rounded-xl border ${schoolConfig[selectedSpell.school].bg} shrink-0`}>
                      {React.createElement(schoolConfig[selectedSpell.school].icon, { className: `w-5 h-5 ${schoolConfig[selectedSpell.school].color}` })}
                    </div>
                  )}
                  <div>
                    <h4 className="text-sm font-extrabold text-slate-100">{selectedSpell.name}</h4>
                    <p className="text-[11px] text-slate-500 uppercase tracking-wider font-mono">
                      {selectedSpell.isAllSchools 
                        ? 'Aire, Agua, Fuego, Tierra' 
                        : `Magia de ${selectedSpell.school}`
                      } &bull; Mazo {selectedSpell.type}
                    </p>
                  </div>
                </div>

                {/* Spell Status and Potenciable Check */}
                <div className="p-3.5 bg-slate-950/40 border border-slate-850/80 rounded-xl space-y-2">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-slate-400 font-medium">Capacidad de Potenciación:</span>
                    {selectedSpell.isBoostable ? (
                      <span className="px-2 py-0.5 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 rounded-full font-mono text-[10px] font-bold">
                        POTENCIABLE
                      </span>
                    ) : (
                      <span className="px-2 py-0.5 bg-slate-800 text-slate-400 border border-slate-700 rounded-full font-mono text-[10px] font-bold">
                        NO POTENCIABLE
                      </span>
                    )}
                  </div>
                  <p className="text-[11px] text-slate-450 leading-relaxed">
                    {selectedSpell.isBoostable 
                      ? 'Este hechizo incrementa su eficacia numérica directamente según el Poder total sumado al lanzarlo.'
                      : 'Este hechizo posee un efecto estático o cualitativo. Añadir Poder no modifica su valor o resolución.'}
                  </p>
                </div>

                {/* Power boost buttons */}
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] text-slate-400 font-mono block tracking-wider uppercase font-bold">Poder acumulado para el Lanzamiento:</span>
                    <span className="text-[10px] font-mono text-slate-500 bg-slate-950 px-2 py-0.5 rounded border border-slate-850">
                      Límite Hechizo: +{maxPowerForSpell} Poder
                    </span>
                  </div>
                  
                  <div className="flex items-center gap-4 bg-slate-950/40 p-3 rounded-xl border border-slate-850">
                    <div className="flex items-center gap-2 shrink-0">
                      <button
                        onClick={() => setPowerBoost(prev => Math.max(0, prev - 1))}
                        disabled={powerBoost === 0 || !selectedSpell.isBoostable}
                        className="w-8 h-8 rounded-lg bg-slate-800 hover:bg-slate-700 disabled:opacity-30 disabled:hover:bg-slate-800 text-slate-300 border border-slate-700 flex items-center justify-center cursor-pointer transition"
                      >
                        <Minus className="w-4 h-4" />
                      </button>
                      <div className="w-10 text-center">
                        <span className={`text-base font-mono font-extrabold ${!selectedSpell.isBoostable ? 'text-slate-600' : 'text-amber-400'}`}>
                          +{powerBoost}
                        </span>
                      </div>
                      <button
                        onClick={() => setPowerBoost(prev => Math.min(maxPowerForSpell, prev + 1))}
                        disabled={powerBoost >= maxPowerForSpell || !selectedSpell.isBoostable}
                        className="w-8 h-8 rounded-lg bg-slate-800 hover:bg-slate-700 disabled:opacity-30 disabled:hover:bg-slate-800 text-slate-300 border border-slate-700 flex items-center justify-center cursor-pointer transition"
                      >
                        <Plus className="w-4 h-4" />
                      </button>
                    </div>

                    <div className="text-[11px] text-slate-400 leading-normal">
                      {!selectedSpell.isBoostable ? (
                        <p className="text-slate-500 italic">Deshabilitado: El hechizo actual no admite potenciadores.</p>
                      ) : powerBoost === 0 ? (
                        <p>Lanzamiento estándar. Puedes potenciarlo descartando cartas o con Habilidad de Magia.</p>
                      ) : (
                        <p>Has sumado <strong className="text-amber-300">+{powerBoost} de Poder</strong>. El hechizo se resolverá con efectos mejorados.</p>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              {/* Simulation Result Button & logs */}
              <div className="space-y-3 pt-3">
                <button
                  onClick={runSimulation}
                  className="w-full py-2.5 bg-amber-600 hover:bg-amber-700 text-white font-bold rounded-xl text-xs cursor-pointer transition text-center shadow-lg hover:shadow-amber-900/20 uppercase tracking-widest flex items-center justify-center gap-2"
                >
                  <Wand2 className="w-4 h-4" />
                  🔮 Resolver Lanzamiento en Mesa 🔮
                </button>

                <div className="p-3.5 bg-slate-950/70 border border-slate-850 rounded-xl text-[11px] text-slate-300 font-mono leading-relaxed whitespace-pre-wrap">
                  {simulationLog}
                </div>
              </div>

            </div>

            {/* Dynamic Card Preview (5 cols) */}
            <div className="lg:col-span-5 flex items-center justify-center bg-slate-950/40 p-4 rounded-3xl border border-slate-850/60 relative">
              <div className="absolute inset-0 bg-radial-gradient(at center, rgba(245,158,11,0.03) 0%, transparent 70%) pointer-events-none" />
              
              <div className="w-full max-w-xs">
                <p className="text-[10px] text-slate-500 font-mono text-center mb-3 uppercase tracking-wider block">Carta Física de Hechizo</p>
                
                {/* Physical Card Representation */}
                <div className={`relative rounded-3xl border-2 p-5 bg-gradient-to-b ${selectedSpell.colorTheme.bg} ${selectedSpell.colorTheme.border} ${selectedSpell.colorTheme.glow} transition-all duration-300`}>
                  
                  {/* Símbolos de la escuela en las esquinas según el nivel (Básica: 1 en esquina inferior izquierda, Avanzada: 4 en todas las esquinas) */}
                  {selectedSpell.isAllSchools ? (
                    <>
                      <div className="absolute top-2.5 left-2.5">
                        <Wind className="w-4 h-4 text-white" />
                      </div>
                      <div className="absolute top-2.5 right-2.5">
                        <Droplets className="w-4 h-4 text-sky-400" />
                      </div>
                      <div className="absolute bottom-2.5 left-2.5">
                        <Flame className="w-4 h-4 text-red-400" />
                      </div>
                      <div className="absolute bottom-2.5 right-2.5">
                        <Globe className="w-4 h-4 text-emerald-400" />
                      </div>
                    </>
                  ) : selectedSpell.type === 'Básica' ? (
                    /* En hechizos básicos, solo aparece en la esquina inferior izquierda */
                    <div className="absolute bottom-2.5 left-2.5">
                      {React.createElement(schoolConfig[selectedSpell.school].icon, { className: `w-4 h-4 ${schoolConfig[selectedSpell.school].color}` })}
                    </div>
                  ) : (
                    /* En hechizos avanzados, aparece en las 4 esquinas */
                    <>
                      <div className="absolute top-2.5 left-2.5">
                        {React.createElement(schoolConfig[selectedSpell.school].icon, { className: `w-4 h-4 ${schoolConfig[selectedSpell.school].color}` })}
                      </div>
                      <div className="absolute top-2.5 right-2.5">
                        {React.createElement(schoolConfig[selectedSpell.school].icon, { className: `w-4 h-4 ${schoolConfig[selectedSpell.school].color}` })}
                      </div>
                      <div className="absolute bottom-2.5 left-2.5">
                        {React.createElement(schoolConfig[selectedSpell.school].icon, { className: `w-4 h-4 ${schoolConfig[selectedSpell.school].color}` })}
                      </div>
                      <div className="absolute bottom-2.5 right-2.5">
                        {React.createElement(schoolConfig[selectedSpell.school].icon, { className: `w-4 h-4 ${schoolConfig[selectedSpell.school].color}` })}
                      </div>
                    </>
                  )}

                  {/* Card Content Layout */}
                  <div className="space-y-4 pt-4 pb-2">
                    {/* Header */}
                    <div className="text-center border-b border-slate-800 pb-3">
                      <span className="text-[9px] font-mono uppercase tracking-[0.2em] text-slate-500">
                        {selectedSpell.isAllSchools ? 'Todas las Escuelas' : `Magia de ${selectedSpell.school}`}
                      </span>
                      <h4 className="text-md font-black text-slate-100 tracking-tight mt-1">
                        {selectedSpell.name}
                      </h4>
                      <span className={`inline-block mt-1.5 px-2 py-0.5 rounded-full text-[9px] font-bold uppercase tracking-wider border ${selectedSpell.colorTheme.accent}`}>
                        Carta {selectedSpell.type}
                      </span>
                    </div>

                    {/* Effects Section */}
                    <div className="space-y-3 text-[11px] leading-relaxed">
                      
                      {/* Effect block */}
                      <div className="p-3 rounded-xl border border-slate-800 bg-slate-900/60">
                        <div className="flex items-center gap-1.5 mb-1.5 text-slate-400 font-bold font-mono text-[9px] uppercase tracking-wider">
                          <Zap className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                          <span>Efecto del Hechizo:</span>
                        </div>
                        <p className="text-slate-300">{selectedSpell.effect}</p>
                        
                        <div className="mt-2.5 pt-2 border-t border-slate-800/80 font-mono text-[10px] text-amber-400">
                          {calculatedStats.text}
                        </div>
                      </div>

                      {/* Booster Effect / Discard rule block */}
                      <div className="p-2.5 rounded-xl bg-slate-950/80 border border-slate-900/60">
                        <div className="flex items-center gap-1.5 mb-1 text-[9px] font-mono text-slate-500 font-bold uppercase tracking-wider">
                          <Plus className="w-3 h-3" />
                          <span>Efecto de Descarte:</span>
                        </div>
                        <p className="text-slate-400 text-[10px] italic leading-tight">{selectedSpell.boosterEffect}</p>
                      </div>

                    </div>

                    {/* Flavor Text Footer */}
                    <p className="text-[9px] text-slate-600 text-center italic leading-tight border-t border-slate-900 pt-2">
                      "{selectedSpell.flavorText}"
                    </p>

                  </div>
                </div>
              </div>

            </div>

          </div>
        ) : (
          <div className="p-8 text-center text-slate-500 text-xs">
            Selecciona un hechizo de la base de datos inferior para iniciar la simulación.
          </div>
        )}
      </div>

      {/* 3. Database Search & Filters */}
      <div className="bg-slate-900/50 border border-slate-800 rounded-3xl p-6 shadow-xl space-y-4">
        
        {/* Controls Row */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-3 items-center">
          
          {/* Search bar (5 cols) */}
          <div className="md:col-span-5 relative">
            <Search className="w-4 h-4 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Buscar por hechizo, efecto, descripción..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-slate-950/60 border border-slate-850 rounded-xl py-2 pl-9 pr-4 text-xs text-slate-200 placeholder-slate-500 focus:outline-none focus:border-amber-500 transition font-mono"
            />
          </div>

          {/* School filter (4 cols) */}
          <div className="md:col-span-4 flex items-center bg-slate-950/40 p-0.5 rounded-xl border border-slate-850 font-mono">
            {['Todos', 'Aire', 'Agua', 'Fuego', 'Tierra'].map((school) => (
              <button
                key={school}
                onClick={() => setSchoolFilter(school as any)}
                className={`flex-1 py-1.5 text-[10px] font-bold rounded-lg transition-all cursor-pointer text-center ${
                  schoolFilter === school
                    ? 'bg-amber-600/25 text-amber-300 font-bold border border-amber-500/20'
                    : 'text-slate-500 hover:text-slate-350 border border-transparent'
                }`}
              >
                {school === 'Todos' ? 'Escuelas' : school}
              </button>
            ))}
          </div>

          {/* Type filter (3 cols) */}
          <div className="md:col-span-3 flex items-center bg-slate-950/40 p-0.5 rounded-xl border border-slate-850 font-mono">
            {['Todos', 'Básica', 'Avanzada'].map((type) => (
              <button
                key={type}
                onClick={() => setTypeFilter(type as any)}
                className={`flex-1 py-1.5 text-[10px] font-bold rounded-lg transition-all cursor-pointer text-center ${
                  typeFilter === type
                    ? 'bg-amber-600/25 text-amber-300 font-bold border border-amber-500/20'
                    : 'text-slate-500 hover:text-slate-350 border border-transparent'
                }`}
              >
                {type}
              </button>
            ))}
          </div>

        </div>

        {/* Results Counter & List */}
        <div className="space-y-3">
          <div className="flex items-center justify-between text-[11px] text-slate-500 font-mono">
            <span>HECHIZOS DEL JUEGO DE MESA: {filteredSpells.length}</span>
            <span>ORDENADO ALFABÉTICAMENTE</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
            <AnimatePresence mode="popLayout">
              {filteredSpells.map((spell) => {
                const isSelected = selectedSpell?.id === spell.id;
                const SchoolIcon = schoolConfig[spell.school].icon;

                return (
                  <motion.div
                    layout
                    key={spell.id}
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className={`p-4 rounded-2xl border-2 transition-all cursor-pointer relative overflow-hidden group ${
                      isSelected 
                        ? `${spell.colorTheme.border} bg-slate-900/90 shadow-md ${spell.colorTheme.glow}` 
                        : 'border-slate-850 bg-slate-950/40 hover:border-slate-800 hover:bg-slate-900/40'
                    }`}
                    onClick={() => handleSelectSpell(spell)}
                  >
                    {/* Símbolos de la escuela en las esquinas según el nivel (Básica: 1 en esquina inferior izquierda, Avanzada: 4 en todas las esquinas) */}
                    {spell.isAllSchools ? (
                      <>
                        <div className="absolute top-2.5 left-2.5">
                          <Wind className="w-3.5 h-3.5 text-white" />
                        </div>
                        <div className="absolute top-2.5 right-2.5">
                          <Droplets className="w-3.5 h-3.5 text-sky-400" />
                        </div>
                        <div className="absolute bottom-2.5 left-2.5">
                          <Flame className="w-3.5 h-3.5 text-red-400" />
                        </div>
                        <div className="absolute bottom-2.5 right-2.5">
                          <Globe className="w-3.5 h-3.5 text-emerald-400" />
                        </div>
                      </>
                    ) : spell.type === 'Básica' ? (
                      /* En hechizos básicos, solo aparece en la esquina inferior izquierda */
                      <div className="absolute bottom-2.5 left-2.5">
                        <SchoolIcon className={`w-3.5 h-3.5 ${schoolConfig[spell.school].color}`} />
                      </div>
                    ) : (
                      /* En hechizos avanzados, aparece en las 4 esquinas */
                      <>
                        <div className="absolute top-2.5 left-2.5">
                          <SchoolIcon className={`w-3.5 h-3.5 ${schoolConfig[spell.school].color}`} />
                        </div>
                        <div className="absolute top-2.5 right-2.5">
                          <SchoolIcon className={`w-3.5 h-3.5 ${schoolConfig[spell.school].color}`} />
                        </div>
                        <div className="absolute bottom-2.5 left-2.5">
                          <SchoolIcon className={`w-3.5 h-3.5 ${schoolConfig[spell.school].color}`} />
                        </div>
                        <div className="absolute bottom-2.5 right-2.5">
                          <SchoolIcon className={`w-3.5 h-3.5 ${schoolConfig[spell.school].color}`} />
                        </div>
                      </>
                    )}

                    <div className="space-y-3 pl-3.5 pr-2 pt-1 pb-1">
                      <div>
                        <div className="flex items-center justify-between gap-2">
                          <h4 className={`text-xs font-bold leading-tight ${isSelected ? 'text-slate-100' : 'text-slate-300 group-hover:text-slate-100'}`}>
                            {spell.name}
                          </h4>
                          <span className={`shrink-0 text-[8px] font-bold uppercase tracking-wider px-1.5 py-0.5 rounded border ${
                            spell.type === 'Avanzada' 
                              ? 'border-amber-600/30 bg-amber-500/10 text-amber-300' 
                              : 'border-slate-800 bg-slate-900/60 text-slate-400'
                          }`}>
                            {spell.type}
                          </span>
                        </div>
                        <span className="text-[9px] text-slate-500 font-mono block mt-0.5 uppercase tracking-widest">
                          {spell.isAllSchools ? 'Todas las Escuelas' : `Magia de ${spell.school}`}
                        </span>
                      </div>

                      <div className="space-y-1.5 text-[11px] text-slate-400">
                        <p className="line-clamp-3">
                          {spell.effect}
                        </p>
                      </div>

                      {/* Call to action trigger */}
                      <div className="flex justify-between items-center border-t border-slate-900/80 pt-2 mt-1">
                        <span className="text-[9px] text-slate-500 font-mono italic">
                          "{spell.flavorText.substring(0, 30)}..."
                        </span>
                        
                        <span className={`text-[10px] font-mono flex items-center gap-1 transition ${
                          isSelected ? 'text-amber-300' : 'text-slate-500 group-hover:text-slate-300'
                        }`}>
                          <Eye className="w-3.5 h-3.5" />
                          <span>Simular</span>
                        </span>
                      </div>

                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>
        </div>

      </div>

    </div>
  );
}
