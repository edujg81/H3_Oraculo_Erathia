import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Building2, Coins, Hammer, Swords, Crown, BookOpen, Scroll, HelpCircle, ArrowRight
} from 'lucide-react';
import { townsData } from '../data/townsData';

const FACTION_LIST = [
  { id: 'castillo', name: 'Castillo (Castle)', color: 'border-blue-900 bg-blue-950/20 text-blue-200 hover:bg-blue-900/10' },
  { id: 'necropolis', name: 'Necrópolis (Necropolis)', color: 'border-slate-850 bg-slate-900/20 text-amber-200 hover:bg-slate-800/10' },
  { id: 'mazmorra', name: 'Mazmorra (Dungeon)', color: 'border-purple-900 bg-purple-950/20 text-purple-200 hover:bg-purple-900/10' },
  { id: 'rampart', name: 'Murallas (Rampart)', color: 'border-emerald-900 bg-emerald-950/20 text-emerald-200 hover:bg-emerald-900/10' },
  { id: 'torre', name: 'Torre (Tower)', color: 'border-cyan-900 bg-cyan-950/20 text-cyan-200 hover:bg-cyan-900/10' },
  { id: 'infierno', name: 'Inferno (Inferno)', color: 'border-red-900 bg-red-950/20 text-red-200 hover:bg-red-900/10' },
  { id: 'stronghold', name: 'Bastión (Stronghold)', color: 'border-amber-950 bg-amber-950/20 text-amber-200 hover:bg-amber-900/10' },
  { id: 'fortaleza', name: 'Fortaleza (Fortress)', color: 'border-teal-900 bg-teal-950/20 text-teal-200 hover:bg-teal-900/10' },
  { id: 'confluencia', name: 'Conflujo (Conflux)', color: 'border-indigo-900 bg-indigo-950/20 text-indigo-200 hover:bg-indigo-900/10' },
  { id: 'cove', name: 'Cala (Cove)', color: 'border-sky-900 bg-sky-950/20 text-sky-200 hover:bg-sky-900/10' }
];

export default function TownsViewer() {
  const [selectedFaction, setSelectedFaction] = useState<string>('castillo');

  // Safety fallback
  const currentTown = townsData[selectedFaction] || townsData.castillo;

  return (
    <div className="space-y-8">
      
      {/* SECTION 1: HEADER & FACTION SELECTOR */}
      <div className="bg-[#1b1311] border border-slate-850 rounded-3xl p-6 shadow-xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />
        
        <div className="space-y-4">
          <div>
            <span className="text-[10px] text-amber-500 font-mono uppercase tracking-widest block font-bold mb-1">
              Guía Oficial de Ciudades
            </span>
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-amber-200 tracking-tight">
              Edificios y Criaturas de Erathia
            </h2>
            <p className="text-xs text-slate-400 mt-1 max-w-3xl leading-relaxed">
              Consulta las reglas oficiales de construcción, costes oficiales de recursos y las moradas de criaturas para cada facción de <strong className="text-slate-300">Heroes of Might and Magic III: El Juego de Mesa</strong>.
            </p>
          </div>

          {/* Faction selector list */}
          <div className="flex flex-wrap gap-2 pt-2 border-t border-slate-900">
            {FACTION_LIST.map((fac) => {
              const isSelected = selectedFaction === fac.id;
              return (
                <button
                  key={fac.id}
                  onClick={() => setSelectedFaction(fac.id)}
                  className={`px-3 py-2 rounded-xl text-xs font-semibold cursor-pointer transition-all duration-200 border ${
                    isSelected 
                      ? 'border-amber-500 bg-amber-950/40 text-amber-200 font-bold shadow-lg shadow-amber-950/20 scale-[1.02]' 
                      : fac.color + ' opacity-75 hover:opacity-100'
                  }`}
                >
                  {fac.name.split(' ')[0]}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* SECTION 2: MAIN TWO-COLUMN LAYOUT */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* LEFT COLUMN: Lore, Town Roster & Spell Reference (col-span-5) */}
        <div className="lg:col-span-5 space-y-6">
          
          {/* Faction Lore Card */}
          <div className="bg-[#1b1311] border border-slate-850 rounded-3xl p-6 shadow-xl relative overflow-hidden">
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />
            
            <span className="text-[9px] font-mono text-amber-500 uppercase tracking-widest font-bold">
              Metrópolis Imperial
            </span>
            <h3 className="font-serif text-xl font-bold text-amber-200 mt-1">
              {currentTown.townName}
            </h3>
            <p className="text-xs font-semibold text-slate-400 font-mono mt-0.5 uppercase tracking-wider text-amber-400/80">
              Facción: {currentTown.factionName}
            </p>
            
            <p className="text-xs text-slate-300 mt-3 leading-relaxed italic border-l-2 border-amber-600/30 pl-3">
              "{currentTown.lore}"
            </p>
          </div>

          {/* Criaturas / Moradas Roster Reference */}
          <div className="bg-[#0d0a09] border border-slate-800 rounded-3xl p-6 shadow-xl space-y-4">
            <div className="flex items-center gap-2 border-b border-slate-800 pb-3">
              <Swords className="w-5 h-5 text-amber-500" />
              <h4 className="text-xs font-bold text-slate-200 uppercase tracking-widest font-serif">
                Roster de Criaturas y Reclutamiento
              </h4>
            </div>

            <div className="space-y-4">
              {/* Bronze Tier */}
              <div className="bg-slate-950/40 p-4 rounded-2xl border border-slate-900/60 space-y-3">
                <div className="flex justify-between items-center border-b border-slate-900 pb-1.5">
                  <span className="text-[10px] font-mono text-amber-500 uppercase tracking-wider font-semibold">
                    Categoría de Bronce (Tier 1)
                  </span>
                  <span className="text-[9px] font-mono bg-amber-950/40 text-amber-300 border border-amber-900/40 px-2 py-0.5 rounded">
                    Unas pocas / Manada
                  </span>
                </div>
                
                <div className="space-y-2">
                  <div className="flex justify-between text-xs font-medium">
                    <span className="text-slate-200">🛡️ {currentTown?.units?.bronze?.name || 'Unidad de Bronce'} (Unas pocas)</span>
                    <span className="text-amber-300 font-mono font-bold flex items-center gap-1">
                      <Coins className="w-3 h-3" /> {currentTown?.units?.bronze?.recruitCost?.gold || 4}O
                    </span>
                  </div>
                  <div className="flex justify-between text-xs font-medium">
                    <span className="text-emerald-400">🔥 {currentTown?.units?.bronze?.name || 'Unidad de Bronce'} (Manada)</span>
                    <span className="text-emerald-300 font-mono font-bold flex items-center gap-1">
                      <Coins className="w-3 h-3 text-emerald-500" /> {currentTown?.units?.bronze?.eliteCost?.gold || 4}O
                    </span>
                  </div>
                </div>
              </div>

              {/* Silver Tier */}
              <div className="bg-slate-950/40 p-4 rounded-2xl border border-slate-900/60 space-y-3">
                <div className="flex justify-between items-center border-b border-slate-900 pb-1.5">
                  <span className="text-[10px] font-mono text-amber-500 uppercase tracking-wider font-semibold">
                    Categoría de Plata (Tier 2)
                  </span>
                  <span className="text-[9px] font-mono bg-amber-950/40 text-amber-300 border border-amber-900/40 px-2 py-0.5 rounded">
                    Unas pocas / Manada
                  </span>
                </div>
                
                <div className="space-y-2">
                  <div className="flex justify-between text-xs font-medium">
                    <span className="text-slate-200">🛡️ {currentTown?.units?.silver?.name || 'Unidad de Plata'} (Unas pocas)</span>
                    <span className="text-amber-300 font-mono font-bold flex items-center gap-1">
                      <Coins className="w-3 h-3" /> {currentTown?.units?.silver?.recruitCost?.gold || 8}O
                    </span>
                  </div>
                  <div className="flex justify-between text-xs font-medium">
                    <span className="text-emerald-400">🔥 {currentTown?.units?.silver?.name || 'Unidad de Plata'} (Manada)</span>
                    <span className="text-emerald-300 font-mono font-bold flex items-center gap-1">
                      <Coins className="w-3 h-3 text-emerald-500" /> {currentTown?.units?.silver?.eliteCost?.gold || 8}O
                    </span>
                  </div>
                </div>
              </div>

              {/* Gold Tier */}
              <div className="bg-slate-950/40 p-4 rounded-2xl border border-slate-900/60 space-y-3">
                <div className="flex justify-between items-center border-b border-slate-900 pb-1.5">
                  <span className="text-[10px] font-mono text-amber-500 uppercase tracking-wider font-semibold">
                    Categoría de Oro (Tier 3)
                  </span>
                  <span className="text-[9px] font-mono bg-amber-950/40 text-amber-300 border border-amber-900/40 px-2 py-0.5 rounded">
                    Unas pocas / Manada
                  </span>
                </div>
                
                <div className="space-y-2">
                  <div className="flex justify-between text-xs font-medium">
                    <span className="text-slate-200">🛡️ {currentTown?.units?.gold?.name || 'Unidad de Oro'} (Unas pocas)</span>
                    <span className="text-amber-300 font-mono font-bold flex items-center gap-1">
                      <Coins className="w-3 h-3" /> {currentTown?.units?.gold?.recruitCost?.gold || 12}O
                    </span>
                  </div>
                  <div className="flex justify-between text-xs font-medium">
                    <span className="text-emerald-400">🔥 {currentTown?.units?.gold?.name || 'Unidad de Oro'} (Manada)</span>
                    <span className="text-emerald-300 font-mono font-bold flex items-center gap-1">
                      <Coins className="w-3 h-3 text-emerald-500" /> {currentTown?.units?.gold?.eliteCost?.gold || 12}O
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Spell Drafting Guide Card */}
          <div className="bg-[#0d0a09] border border-slate-800 rounded-3xl p-6 shadow-xl space-y-3">
            <div className="flex items-center gap-2 border-b border-slate-800 pb-2.5">
              <Scroll className="w-5 h-5 text-purple-400" />
              <h4 className="text-xs font-bold text-slate-200 uppercase tracking-widest font-serif">
                Reglas: Cofradía de Magos
              </h4>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              La construcción de la <strong className="text-slate-300">Cofradía de Magos</strong> en tu ciudad te permite gastar una de tus tres fichas de acción de turno para realizar una búsqueda de hechizos.
            </p>
            <div className="text-[11px] font-mono text-slate-500 space-y-1.5 bg-slate-950/30 p-3 rounded-xl border border-slate-900">
              <p>1. Gasta una ficha de acción de Ciudad.</p>
              <p>2. Roba 3 cartas de hechizo de la baraja.</p>
              <p>3. Elige 1 carta para añadir al libro de hechizos de tu héroe activo y devuelve las otras.</p>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN: 7 official buildings reference cards (col-span-7) */}
        <div className="lg:col-span-7 space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="text-xs font-bold text-slate-200 uppercase tracking-widest flex items-center gap-2">
              <Building2 className="w-4 h-4 text-amber-500" />
              Estructuras Oficiales de {currentTown.factionName} (7 Edificios)
            </h3>
            <span className="text-[10px] font-mono text-amber-500 font-bold bg-amber-950/20 border border-amber-900/40 px-2.5 py-0.5 rounded-full">
              7 Edificios
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {currentTown.buildings.map((b) => {
              return (
                <div 
                  key={b.id}
                  className="bg-[#0d0a09] border border-slate-850 hover:border-slate-800 rounded-2xl p-4 flex flex-col justify-between transition-all"
                >
                  <div className="space-y-2">
                    {/* Building Category Label & Name */}
                    <div>
                      <span className="text-[9px] font-mono text-amber-500 uppercase tracking-widest font-bold">
                        {b.id === 'bronce' || b.id === 'plata' || b.id === 'oro' ? 'Morada de Criaturas' : 'Estructura Civil'}
                      </span>
                      <h4 className="text-sm font-bold text-slate-100 mt-0.5">
                        {b.name}
                      </h4>
                    </div>

                    {/* Cost formatting */}
                    <div className="flex items-center gap-1.5 text-[11px] font-mono text-slate-400 bg-slate-950/60 py-1 px-2 rounded border border-slate-900">
                      <span className="text-slate-500 uppercase font-bold text-[9px] mr-1">Coste:</span>
                      <Coins className="w-3 h-3 text-amber-500" /> {b.cost.gold}O
                      {b.cost.materials && (
                        <>
                          <span className="text-slate-700">•</span>
                          <Hammer className="w-3 h-3 text-orange-500" /> {b.cost.materials}M
                        </>
                      )}
                      {b.cost.valuables && (
                        <>
                          <span className="text-slate-700">•</span>
                          <Crown className="w-3 h-3 text-purple-500" /> {b.cost.valuables}V
                        </>
                      )}
                    </div>

                    {/* Effect description */}
                    <div className="text-xs text-slate-300 leading-relaxed pt-1.5">
                      <span className="text-[9px] font-mono text-slate-500 uppercase font-bold block mb-1">
                        Efecto Base:
                      </span>
                      {b.benefit}
                    </div>

                    {/* Upgrade option details */}
                    {b.upgradeName && (
                      <div className="bg-[#1b1311]/50 border border-slate-850 p-2.5 rounded-xl space-y-1.5 mt-3">
                        <div className="flex justify-between items-center">
                          <span className="text-[10px] font-sans font-bold text-emerald-400">
                            ✨ Mejora: {b.upgradeName}
                          </span>
                          {b.upgradeCost && (
                            <span className="text-[9px] font-mono text-slate-400 flex items-center gap-1">
                              <Coins className="w-2.5 h-2.5 text-amber-500" /> {b.upgradeCost.gold}O
                              {b.upgradeCost.materials && (
                                <>
                                  <span className="text-slate-700">•</span>
                                  <Hammer className="w-2.5 h-2.5 text-orange-500" /> {b.upgradeCost.materials}M
                                </>
                              )}
                            </span>
                          )}
                        </div>
                        <p className="text-[11px] text-slate-400 leading-relaxed">
                          {b.upgradeBenefit}
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>

      {/* SECTION 3: OFFICIAL BOARD GAME RULES REFERENCE */}
      <div className="bg-[#0d0a09] border border-slate-800 rounded-3xl p-5 md:p-6 shadow-xl space-y-4">
        <h3 className="text-sm font-bold text-slate-200 uppercase tracking-widest flex items-center gap-2 border-b border-slate-800/40 pb-2 font-serif">
          <BookOpen className="w-4 h-4 text-amber-500" />
          Reglamento Oficial: Turno de Ciudad (Heroes III: El Juego de Mesa)
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-xs leading-relaxed text-slate-400">
          <div className="space-y-1 bg-[#1b1311]/40 p-3 rounded-xl border border-slate-850">
            <span className="font-bold text-slate-200 block">Límite de Obras y Acciones</span>
            <p>En tu turno de la ciudad, puedes gastar hasta **3 Fichas de Acción** en cualquier combinación de las 3 acciones disponibles: construir, reclutar/reforzar, o usar la Cofradía de Magos.</p>
          </div>
          
          <div className="space-y-1 bg-[#1b1311]/40 p-3 rounded-xl border border-slate-850">
            <span className="font-bold text-slate-200 block">Refuerzo de Unidades</span>
            <p>Si posees la **Ciudadela**, desbloqueas la capacidad de gastar 1 ficha de acción para añadir marcadores de escudo (reforzar) a tus tropas por un coste de 2 de Oro y 1 de Material.</p>
          </div>

          <div className="space-y-1 bg-[#1b1311]/40 p-3 rounded-xl border border-slate-850">
            <span className="font-bold text-slate-200 block">Cofradía de Magos</span>
            <p>Construir la Cofradía de Magos habilita la acción de ciudad para robar 3 cartas de hechizo y equipar 1 de ellas en tu héroe, potenciando tu arsenal místico.</p>
          </div>
        </div>
      </div>

    </div>
  );
}
