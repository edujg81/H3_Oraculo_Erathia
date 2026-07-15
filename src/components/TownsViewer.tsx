import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Building2, Coins, Hammer, Swords, Crown, BookOpen, Scroll, HelpCircle, ArrowRight, Target, Feather, Star
} from 'lucide-react';
import { townsData } from '../data/townsData';
import { FACTION_THEMES } from '../data/heroesData';

const themeMapping: Record<string, string> = {
  castillo: 'castillo',
  necropolis: 'necropolis',
  mazmorra: 'mazmorra',
  rampart: 'murallas',
  torre: 'torre',
  infierno: 'inferno',
  stronghold: 'bastion',
  fortaleza: 'fortaleza',
  confluencia: 'conflujo',
  cove: 'cala'
};

const FACTION_LIST = [
  { id: 'castillo', name: 'Castillo (Castle)' },
  { id: 'necropolis', name: 'Necrópolis (Necropolis)' },
  { id: 'mazmorra', name: 'Mazmorra (Dungeon)' },
  { id: 'rampart', name: 'Murallas (Rampart)' },
  { id: 'torre', name: 'Torre (Tower)' },
  { id: 'infierno', name: 'Inferno (Inferno)' },
  { id: 'stronghold', name: 'Bastión (Stronghold)' },
  { id: 'fortaleza', name: 'Fortaleza (Fortress)' },
  { id: 'confluencia', name: 'Conflujo (Conflux)' },
  { id: 'cove', name: 'Cala (Cove)' }
];

const specialStructureHighlight: Record<string, { border: string; glow: string; text: string; bg: string }> = {
  castillo: {
    border: 'border-sky-400',
    glow: 'shadow-[0_0_22px_rgba(56,189,248,0.55)]',
    text: 'text-sky-400',
    bg: 'bg-sky-950/25'
  },
  necropolis: {
    border: 'border-zinc-400',
    glow: 'shadow-[0_0_22px_rgba(228,228,231,0.4)]',
    text: 'text-zinc-350',
    bg: 'bg-zinc-900/25'
  },
  mazmorra: {
    border: 'border-purple-400',
    glow: 'shadow-[0_0_22px_rgba(192,132,252,0.55)]',
    text: 'text-purple-400',
    bg: 'bg-purple-950/25'
  },
  rampart: {
    border: 'border-lime-400',
    glow: 'shadow-[0_0_22px_rgba(163,230,53,0.55)]',
    text: 'text-lime-400',
    bg: 'bg-lime-950/25'
  },
  torre: {
    border: 'border-cyan-300',
    glow: 'shadow-[0_0_22px_rgba(103,232,249,0.6)]',
    text: 'text-cyan-200',
    bg: 'bg-slate-900/35'
  },
  infierno: {
    border: 'border-red-500',
    glow: 'shadow-[0_0_22px_rgba(239,68,68,0.6)]',
    text: 'text-red-400',
    bg: 'bg-red-950/25'
  },
  stronghold: {
    border: 'border-amber-500',
    glow: 'shadow-[0_0_22px_rgba(245,158,11,0.55)]',
    text: 'text-amber-400',
    bg: 'bg-amber-950/25'
  },
  fortaleza: {
    border: 'border-emerald-500',
    glow: 'shadow-[0_0_22px_rgba(16,185,129,0.55)]',
    text: 'text-emerald-400',
    bg: 'bg-emerald-950/30'
  },
  confluencia: {
    border: 'border-pink-500',
    glow: 'shadow-[0_0_22px_rgba(236,72,153,0.55)]',
    text: 'text-pink-400',
    bg: 'bg-pink-950/25'
  },
  cove: {
    border: 'border-teal-400',
    glow: 'shadow-[0_0_22px_rgba(45,212,191,0.55)]',
    text: 'text-teal-400',
    bg: 'bg-teal-950/25'
  }
};

export default function TownsViewer() {
  const [selectedFaction, setSelectedFaction] = useState<string>('castillo');

  // Safety fallback
  const currentTown = townsData[selectedFaction] || townsData.castillo;

  // Flattened units helper to make rendering easier and cohesive
  const unitsList = currentTown?.units ? [
    { level: 'Nivel 1', tier: 'Bronce', ...currentTown.units.bronze.nivel1 },
    { level: 'Nivel 2', tier: 'Bronce', ...currentTown.units.bronze.nivel2 },
    { level: 'Nivel 3', tier: 'Bronce', ...currentTown.units.bronze.nivel3 },
    { level: 'Nivel 4', tier: 'Plata', ...currentTown.units.silver.nivel4 },
    { level: 'Nivel 5', tier: 'Plata', ...currentTown.units.silver.nivel5 },
    { level: 'Nivel 6', tier: 'Oro', ...currentTown.units.gold.nivel6 },
    { level: 'Nivel 7', tier: 'Oro', ...currentTown.units.gold.nivel7 },
  ] : [];

  const getUnitTypeIcon = (type: 'melee' | 'ranged' | 'flying') => {
    switch (type) {
      case 'melee':
        return <Swords className="w-4 h-4 text-rose-450" />;
      case 'ranged':
        return <Target className="w-4 h-4 text-emerald-450" />;
      case 'flying':
        return <Feather className="w-4 h-4 text-sky-450" />;
    }
  };

  const getUnitTypeLabel = (type: 'melee' | 'ranged' | 'flying') => {
    switch (type) {
      case 'melee': return 'Melé';
      case 'ranged': return 'A distancia';
      case 'flying': return 'Voladora';
    }
  };

  const renderCost = (cost: any) => {
    return (
      <div className="flex items-center gap-1.5 text-xs font-mono text-slate-300">
        <Coins className="w-3.5 h-3.5 text-amber-500" /> {cost.gold}o
        {cost.materials && (
          <>
            <span className="text-slate-755">•</span>
            <Hammer className="w-3.5 h-3.5 text-orange-500" /> {cost.materials}m
          </>
        )}
        {cost.valuables && (
          <>
            <span className="text-slate-755">•</span>
            <Crown className="w-3.5 h-3.5 text-purple-500" /> {cost.valuables}v
          </>
        )}
      </div>
    );
  };

  const renderStars = (tier: string) => {
    if (tier === 'bronce') {
      return (
        <span className="inline-flex gap-0.5" title="Morada de Bronce">
          <Star className="w-3.5 h-3.5 fill-[#8c5233] stroke-[#5c3016]" />
        </span>
      );
    } else if (tier === 'plata') {
      return (
        <span className="inline-flex gap-0.5" title="Morada de Plata">
          <Star className="w-3.5 h-3.5 fill-slate-400 stroke-slate-500" />
        </span>
      );
    } else if (tier === 'oro') {
      return (
        <span className="inline-flex gap-0.5" title="Morada de Oro">
          <Star className="w-3.5 h-3.5 fill-yellow-500 stroke-yellow-600" />
        </span>
      );
    }
    return null;
  };

  const themeKey = themeMapping[selectedFaction] || 'castillo';
  const currentTheme = FACTION_THEMES[themeKey] || FACTION_THEMES.castillo;

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
              const facThemeKey = themeMapping[fac.id] || 'castillo';
              const facTheme = FACTION_THEMES[facThemeKey] || FACTION_THEMES.castillo;
              
              // Brighter border for selected state
              const activeBorder = facTheme.border
                .replace('/40', '/90')
                .replace('/30', '/90')
                .replace('/35', '/95')
                .replace('/50', '/90');
                
              // Brighter glow for shadow
              const glowShadow = facTheme.glow
                .replace('/15', '/25')
                .replace('/20', '/35')
                .replace('/10', '/20');

              return (
                <button
                  key={fac.id}
                  id={`faction-btn-${fac.id}`}
                  onClick={() => setSelectedFaction(fac.id)}
                  className={`px-3.5 py-2.5 rounded-xl text-xs font-bold cursor-pointer transition-all duration-200 border bg-gradient-to-br ${
                    isSelected 
                      ? `${facTheme.primary} ${activeBorder} ${facTheme.text} shadow-md ${glowShadow} scale-[1.05] border-2` 
                      : `bg-slate-950/50 border-slate-900/60 text-slate-400 hover:text-slate-100 hover:${facTheme.text} hover:${facTheme.border.replace('/40', '/70').replace('/30', '/70').replace('/35', '/75').replace('/50', '/70')} hover:scale-[1.02]`
                  }`}
                >
                  {fac.name.split(' ')[0]}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* SECTION 2: FIRST ROW - FACTION RECUADRO (2 COLS) & COFRADIA DE MAGOS RECUADRO (1 COL) */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">
        {/* Faction Lore Card (Occupying 2 columns on large screens) */}
        <div className="lg:col-span-2">
          <div 
            className={`bg-[#1b1311] border ${currentTheme.border} rounded-3xl p-6 shadow-xl relative overflow-hidden h-full flex flex-col justify-center transition-all duration-300`} 
            id="lore-card"
            style={{ background: currentTheme.bgGradient }}
          >
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />
            
            <span className="text-[9px] font-mono text-amber-500 uppercase tracking-widest font-bold">
              Metrópolis Imperial
            </span>
            <h3 className="font-serif text-2xl font-bold text-amber-200 mt-1">
              {currentTown.townName}
            </h3>
            <p className="text-xs font-semibold text-slate-400 font-mono mt-0.5 uppercase tracking-wider text-amber-400/80">
              Facción: {currentTown.factionName}
            </p>
            
            <p className="text-xs text-slate-300 mt-3.5 leading-relaxed italic border-l-2 border-amber-600/30 pl-3">
              "{currentTown.lore}"
            </p>
          </div>
        </div>

        {/* Spell Drafting Guide Card (Occupying 1 column) */}
        <div className="lg:col-span-1">
          <div className="bg-[#0d0a09] border border-slate-800 rounded-3xl p-6 shadow-xl space-y-3 h-full flex flex-col justify-between" id="spell-guide-card">
            <div>
              <div className="flex items-center gap-2 border-b border-slate-800 pb-2.5">
                <Scroll className="w-5 h-5 text-purple-450" />
                <h4 className="text-xs font-bold text-slate-200 uppercase tracking-widest font-serif">
                  Reglas: Cofradía de Magos
                </h4>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed mt-2">
                La construcción de la <strong className="text-slate-300">Cofradía de Magos</strong> en tu ciudad te permite gastar una de tus tres fichas de acción de turno para realizar una búsqueda de hechizos.
              </p>
            </div>
            <div className="text-[11px] font-mono text-slate-500 space-y-1.5 bg-slate-950/30 p-3 rounded-xl border border-slate-900 mt-1">
              <p>1. Gasta una ficha de acción de Ciudad.</p>
              <p>2. Roba 3 cartas de hechizo de la baraja.</p>
              <p>3. Elige 1 carta para añadir al libro de hechizos de tu héroe activo y devuelve las otras.</p>
            </div>
          </div>
        </div>
      </div>

      {/* SECTION 3: BUILDINGS SECTION */}
      <div className="space-y-6">
        <div className="flex items-center justify-between border-b border-slate-900 pb-2">
          <h3 className="text-xs font-bold text-slate-200 uppercase tracking-widest flex items-center gap-2" id="buildings-title">
            <Building2 className="w-4 h-4 text-amber-500" />
            Estructuras Oficiales de {currentTown.factionName}
          </h3>
          <span className="text-[10px] font-mono text-amber-500 font-bold bg-amber-950/20 border border-amber-900/40 px-2.5 py-0.5 rounded-full">
            7 Edificios
          </span>
        </div>

        {/* First building row: Alcaldía, Ciudadela, Cofradía de Magos */}
        <div className="space-y-2">
          <span className="text-[10px] font-mono text-slate-500 uppercase tracking-wider font-bold">
            Estructuras Administrativas y Civiles
          </span>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {currentTown.buildings
              .filter(b => ['alcaldia', 'ciudadela', 'cofradia'].includes(b.id))
              .map((b) => {
                const isAlcaldia = b.id === 'alcaldia';
                return (
                  <div 
                    key={b.id}
                    id={`building-${b.id}`}
                    className={`bg-[#0d0a09] border ${
                      isAlcaldia 
                        ? 'border-amber-500/90 shadow-[0_0_15px_rgba(245,158,11,0.15)]' 
                        : 'border-slate-850 hover:border-slate-800'
                    } rounded-2xl p-4 flex flex-col justify-between transition-all`}
                  >
                    <div className="space-y-2">
                      {/* Building Category Label & Name */}
                      <div>
                        <span className="text-[9px] font-mono text-amber-500 uppercase tracking-widest font-bold flex items-center gap-1">
                          Estructura Civil
                          {isAlcaldia && <span className="text-[8px] bg-amber-950 border border-amber-500/30 text-amber-400 px-1.5 rounded-full ml-1 font-sans">Principal</span>}
                        </span>
                        <h4 className="text-sm font-bold text-slate-100 mt-0.5">
                          {b.name}
                        </h4>
                      </div>

                      {/* Cost formatting */}
                      <div className="flex items-center gap-1.5 text-[11px] font-mono text-slate-400 bg-slate-950/60 py-1 px-2 rounded border border-slate-900">
                        <span className="text-slate-500 uppercase font-bold text-[9px] mr-1">Coste:</span>
                        <Coins className="w-3 h-3 text-amber-500" /> {b.cost.gold}o
                        {b.cost.materials !== undefined && b.cost.materials > 0 && (
                          <>
                            <span className="text-slate-700">•</span>
                            <Hammer className="w-3 h-3 text-orange-500" /> {b.cost.materials}m
                          </>
                        )}
                        {b.cost.valuables !== undefined && b.cost.valuables > 0 && (
                          <>
                            <span className="text-slate-700">•</span>
                            <Crown className="w-3 h-3 text-purple-500" /> {b.cost.valuables}v
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
                                <Coins className="w-2.5 h-2.5 text-amber-500" /> {b.upgradeCost.gold}o
                                {b.upgradeCost.materials !== undefined && b.upgradeCost.materials > 0 && (
                                  <>
                                    <span className="text-slate-700">•</span>
                                    <Hammer className="w-2.5 h-2.5 text-orange-500" /> {b.upgradeCost.materials}m
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

        {/* Second building row: Remaining buildings (dwellings and special structure) taking the full width */}
        <div className="space-y-2">
          <span className="text-[10px] font-mono text-slate-500 uppercase tracking-wider font-bold">
            Moradas de Reclutamiento e Infraestructuras Especiales
          </span>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {currentTown.buildings
              .filter(b => !['alcaldia', 'ciudadela', 'cofradia'].includes(b.id))
              .map((b) => {
                const isSpecial = b.id === 'especial';
                const isDwelling = b.id === 'bronce' || b.id === 'plata' || b.id === 'oro';
                
                // Clean-up "Bronce", "Plata", "Oro" from title if it's a dwelling
                const cleanName = isDwelling 
                  ? b.name.replace(/\s*\(Morada de (Bronce|Plata|Oro)\)\s*/gi, '').trim()
                  : b.name;

                const hl = specialStructureHighlight[selectedFaction] || specialStructureHighlight.castillo;

                return (
                  <div 
                    key={b.id}
                    id={`building-${b.id}`}
                    className={`border transition-all duration-300 rounded-2xl p-4 flex flex-col justify-between ${
                      isSpecial 
                        ? `border-2 ${hl.border} ${hl.glow} ${hl.bg} ring-1 ring-amber-500/10 scale-[1.01]` 
                        : 'bg-[#0d0a09] border-slate-850 hover:border-slate-800'
                    }`}
                  >
                    <div className="space-y-2">
                      {/* Building Category Label & Name */}
                      <div>
                        <span className="text-[9px] font-mono text-amber-500 uppercase tracking-widest font-bold">
                          {b.id === 'bronce' || b.id === 'plata' || b.id === 'oro' ? 'Morada de Criaturas' : 'Estructura Especial'}
                        </span>
                        <div className="flex items-start justify-between gap-1.5 mt-0.5">
                          <h4 className="text-sm font-bold text-slate-100 leading-snug">
                            {cleanName}
                          </h4>
                          {isDwelling && renderStars(b.id)}
                        </div>
                      </div>

                      {/* Cost formatting */}
                      <div className="flex items-center gap-1.5 text-[11px] font-mono text-slate-400 bg-slate-950/60 py-1 px-2 rounded border border-slate-900">
                        <span className="text-slate-500 uppercase font-bold text-[9px] mr-1">Coste:</span>
                        <Coins className="w-3 h-3 text-amber-500" /> {b.cost.gold}o
                        {b.cost.materials !== undefined && b.cost.materials > 0 && (
                          <>
                            <span className="text-slate-700">•</span>
                            <Hammer className="w-3 h-3 text-orange-500" /> {b.cost.materials}m
                          </>
                        )}
                        {b.cost.valuables !== undefined && b.cost.valuables > 0 && (
                          <>
                            <span className="text-slate-700">•</span>
                            <Crown className="w-3 h-3 text-purple-500" /> {b.cost.valuables}v
                          </>
                        )}
                      </div>

                      {/* Effect description */}
                      <div className="text-xs text-slate-300 leading-relaxed pt-1.5">
                        <span className="text-[9px] font-mono text-slate-550 uppercase font-bold block mb-1">
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
                                <Coins className="w-2.5 h-2.5 text-amber-500" /> {b.upgradeCost.gold}o
                                {b.upgradeCost.materials !== undefined && b.upgradeCost.materials > 0 && (
                                  <>
                                    <span className="text-slate-700">•</span>
                                    <Hammer className="w-2.5 h-2.5 text-orange-500" /> {b.upgradeCost.materials}m
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

      {/* SECTION 4: UNITS/CREATURES RECRUITMENT BOX (Skins/tiers span full width) */}
      <div className="bg-[#0d0a09] border border-slate-800 rounded-3xl p-6 shadow-xl space-y-4" id="creatures-panel">
        <div className="flex items-center gap-2 border-b border-slate-800 pb-3">
          <Swords className="w-5 h-5 text-amber-500" />
          <h4 className="text-xs font-bold text-slate-200 uppercase tracking-widest font-serif">
            Criaturas y Reclutamiento Oficial
          </h4>
        </div>

        <div className="space-y-3">
          {unitsList.map((unit, idx) => (
            <div 
              key={idx} 
              id={`unit-row-${idx}`}
              className="flex flex-col sm:flex-row items-start sm:items-center justify-between p-3.5 bg-slate-950/40 rounded-2xl border border-slate-900/60 hover:border-slate-850/80 transition-all gap-4"
            >
              {/* Left part: Unit name, tier, level and type icon */}
              <div className="flex items-center gap-3">
                <div className={`p-2 rounded-xl bg-slate-900 border ${
                  unit.tier === 'Bronce' ? 'border-[#8c5233]/40 text-[#a25a38]' :
                  unit.tier === 'Plata' ? 'border-slate-700/30 text-slate-300' :
                  'border-amber-500/20 text-amber-400'
                }`}>
                  {getUnitTypeIcon(unit.type as any)}
                </div>
                <div>
                  <div className="flex items-center gap-1.5">
                    <span className="text-[9px] font-mono font-bold text-slate-550 uppercase">
                      {unit.level} • {unit.tier}
                    </span>
                    <span className="text-[8px] font-mono font-bold px-1.5 py-0.2 bg-slate-900 border border-slate-800 rounded text-slate-400">
                      {getUnitTypeLabel(unit.type as any)}
                    </span>
                  </div>
                  <h5 className="text-xs md:text-sm font-bold text-slate-200 mt-0.5">
                    {unit.name}
                  </h5>
                </div>
              </div>

              {/* Right part: Side-by-side recruitment ("unas pocas") and reinforcement ("manada") costs */}
              <div className="flex flex-wrap items-center gap-4 sm:gap-6 w-full sm:w-auto border-t sm:border-t-0 border-slate-900 pt-2 sm:pt-0 justify-between sm:justify-start">
                <div className="space-y-0.5">
                  <span className="text-[9px] font-mono text-slate-500 uppercase block font-bold">
                    Reclutamiento ("Unas Pocas")
                  </span>
                  {renderCost(unit.recruitCost)}
                </div>
                
                <div className="text-slate-700 hidden sm:block">
                  <ArrowRight className="w-4 h-4" />
                </div>

                <div className="space-y-0.5">
                  <span className="text-[9px] font-mono text-emerald-500/80 uppercase block font-bold">
                    Refuerzo / Élite ("Manada")
                  </span>
                  {renderCost(unit.eliteCost)}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* SECTION 5: OFFICIAL BOARD GAME RULES REFERENCE */}
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
