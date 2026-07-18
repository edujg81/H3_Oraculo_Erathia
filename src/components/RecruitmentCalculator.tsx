import React, { useState, useEffect } from 'react';
import { Shield, Sparkles, HelpCircle, Swords, Heart, Zap, Compass, RefreshCw, Star, Info } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

import { UnitStats, BoardGameUnit, FactionsUnitsData, FACTION_UNITS, BASE_COSTS, UNIT_DETAILS } from '../data/unitsData';

const FACTION_THEMES: {
  [factionId: string]: {
    primary: string;
    border: string;
    text: string;
    glow: string;
    bgGradient: string;
    badge: string;
  };
} = {
  castillo: {
    primary: 'from-sky-950 to-slate-950',
    border: 'border-sky-500/40',
    text: 'text-sky-400',
    glow: 'shadow-sky-500/15',
    bgGradient: 'radial-gradient(circle at top, #0c4a6e 0%, #030712 100%)',
    badge: 'bg-sky-950/80 border-sky-900 text-sky-400'
  },
  necropolis: {
    primary: 'from-zinc-950 to-stone-950',
    border: 'border-zinc-700/50',
    text: 'text-zinc-400',
    glow: 'shadow-zinc-500/10',
    bgGradient: 'radial-gradient(circle at top, #1e1e24 0%, #07070a 100%)',
    badge: 'bg-zinc-900/80 border-zinc-800 text-zinc-400'
  },
  mazmorra: {
    primary: 'from-purple-950 to-stone-950',
    border: 'border-purple-500/40',
    text: 'text-purple-400',
    glow: 'shadow-purple-500/15',
    bgGradient: 'radial-gradient(circle at top, #581c87 0%, #030712 100%)',
    badge: 'bg-purple-950/80 border-purple-900 text-purple-400'
  },
  murallas: {
    primary: 'from-green-950 to-stone-950',
    border: 'border-lime-500/30',
    text: 'text-lime-400',
    glow: 'shadow-lime-500/15',
    bgGradient: 'radial-gradient(circle at top, #22c55e 0%, #15803d 40%, #0c0a09 100%)',
    badge: 'bg-lime-950/80 border-lime-900 text-lime-400'
  },
  torre: {
    primary: 'from-slate-900 to-slate-950',
    border: 'border-cyan-100/35',
    text: 'text-cyan-50',
    glow: 'shadow-cyan-200/20',
    bgGradient: 'radial-gradient(circle at top, #93c5fd 0%, #1e293b 45%, #020617 100%)',
    badge: 'bg-slate-900/80 border-slate-700 text-cyan-50'
  },
  inferno: {
    primary: 'from-red-950 to-stone-950',
    border: 'border-red-500/40',
    text: 'text-red-500',
    glow: 'shadow-red-500/20',
    bgGradient: 'radial-gradient(circle at top, #991b1b 0%, #1c1917 100%)',
    badge: 'bg-red-950/80 border-red-900 text-red-400'
  },
  bastion: {
    primary: 'from-amber-950 to-stone-950',
    border: 'border-amber-600/40',
    text: 'text-amber-500',
    glow: 'shadow-amber-500/15',
    bgGradient: 'radial-gradient(circle at top, #7c2d12 0%, #1c1917 100%)',
    badge: 'bg-amber-950/80 border-amber-900 text-amber-500'
  },
  fortaleza: {
    primary: 'from-[#151c12] to-neutral-950',
    border: 'border-[#415436]/40',
    text: 'text-[#94ad82]',
    glow: 'shadow-[#415436]/15',
    bgGradient: 'radial-gradient(circle at top, #25331e 0%, #070a05 100%)',
    badge: 'bg-[#11160e]/80 border-[#25331e] text-[#94ad82]'
  },
  conflujo: {
    primary: 'from-pink-950 to-slate-950',
    border: 'border-pink-500/40',
    text: 'text-pink-400',
    glow: 'shadow-pink-500/15',
    bgGradient: 'radial-gradient(circle at top, #9d174d 0%, #090d16 100%)',
    badge: 'bg-pink-950/80 border-pink-900 text-pink-400'
  },
  cala: {
    primary: 'from-teal-950 to-slate-950',
    border: 'border-teal-500/40',
    text: 'text-teal-400',
    glow: 'shadow-teal-500/15',
    bgGradient: 'radial-gradient(circle at top, #115e59 0%, #030712 100%)',
    badge: 'bg-teal-950/80 border-teal-900 text-teal-400'
  },
  invocaciones: {
    primary: 'from-violet-950 to-indigo-950',
    border: 'border-violet-500/40',
    text: 'text-violet-400',
    glow: 'shadow-violet-500/15',
    bgGradient: 'radial-gradient(circle at top, #5c33a6 0%, #0c0a09 100%)',
    badge: 'bg-violet-950/80 border-violet-900 text-violet-400'
  },
  neutrales: {
    primary: 'from-yellow-950 to-stone-950',
    border: 'border-yellow-600/40',
    text: 'text-yellow-400',
    glow: 'shadow-yellow-500/15',
    bgGradient: 'radial-gradient(circle at top, #854d0e 0%, #1c1917 100%)',
    badge: 'bg-stone-950/85 border-yellow-900/60 text-yellow-400'
  },
  bancos: {
    primary: 'from-emerald-950 to-stone-950',
    border: 'border-emerald-500/40',
    text: 'text-emerald-400',
    glow: 'shadow-emerald-500/15',
    bgGradient: 'radial-gradient(circle at top, #065f46 0%, #0c0a09 100%)',
    badge: 'bg-stone-900/80 border-emerald-900 text-emerald-400'
  }
};;

const renderFactionWatermark = (factionId: string, className: string = "w-28 h-28"): React.JSX.Element => {
  switch (factionId) {
    case 'castillo':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" className={className} strokeLinecap="round" strokeLinejoin="round">
          {/* Majestic castle crest/shield */}
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          <path d="M8 11h8M12 7v8M9 15v2h6v-2" />
          <path d="M7 8V5l5-2 5 2v3" />
        </svg>
      );
    case 'necropolis':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" className={className} strokeLinecap="round" strokeLinejoin="round">
          {/* Gothic Skull / Reaper motif */}
          <path d="M12 2a6 6 0 0 0-6 6v4a5 5 0 0 0 3 4.5V19a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2v-2.5A5 5 0 0 0 18 12V8a6 6 0 0 0-6-6z" />
          <circle cx="10" cy="10" r="1" fill="currentColor" />
          <circle cx="14" cy="10" r="1" fill="currentColor" />
          <path d="M12 12.5l-0.5 1.5h1z" fill="currentColor" />
          <path d="M11 18v2M13 18v2" />
        </svg>
      );
    case 'mazmorra':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" className={className} strokeLinecap="round" strokeLinejoin="round">
          {/* Dragon Eye / Wing */}
          <path d="M2 12s4-8 10-8 10 8 10 8-4 8-10 8-10-8-10-8z" />
          <circle cx="12" cy="12" r="4.5" />
          <path d="M12 9.5l-1 2.5 1 2.5 1-2.5z" fill="currentColor" />
          <path d="M3 12c2-2 4-2 6 0M15 12c2 2 4 2 6 0" />
        </svg>
      );
    case 'murallas':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" className={className} strokeLinecap="round" strokeLinejoin="round">
          {/* Tree of Life / Forest leaf */}
          <path d="M12 22V12M12 12l4-4M12 14l-4-4" />
          <path d="M12 2C7 2 5 6 5 10c0 4 3 6 7 7 4-1 7-3 7-7 0-4-2-8-7-8z" />
          <path d="M12 5a3 3 0 0 0-3 3c0 2 3 4 3 4s3-2 3-4a3 3 0 0 0-3-3z" />
        </svg>
      );
    case 'torre':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" className={className} strokeLinecap="round" strokeLinejoin="round">
          {/* Alchemical magic star / wizard tower */}
          <circle cx="12" cy="12" r="9" />
          <path d="M12 3l3 6 6 1-4.5 4.5 1 6.5-5.5-3-5.5 3 1-6.5L3 10l6-1z" />
          <circle cx="12" cy="12" r="2.5" />
        </svg>
      );
    case 'inferno':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" className={className} strokeLinecap="round" strokeLinejoin="round">
          {/* Demonic Flame / Horns */}
          <path d="M12 2C8.5 2 6 5 6 9c0 4 3.5 7 6 13 2.5-6 6-9 6-13 0-4-2.5-7-6-7z" />
          <path d="M12 7c-2 0-3 1.5-3 3.5 0 2 1.5 3 3 6.5 1.5-3.5 3-4.5 3-6.5 0-2-1-3.5-3-3.5z" />
          <path d="M4 10c0-4 3-6 3-6M20 10c0-4-3-6-3-6" />
        </svg>
      );
    case 'bastion':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" className={className} strokeLinecap="round" strokeLinejoin="round">
          {/* Brute crossed axes / savage emblem */}
          <path d="M5 19L19 5M19 19L5 5" />
          <path d="M15 5h4v4l-3-1-1-3zM5 15v4h4l-1-3-3-1z" />
          <path d="M19 15v4h-4l1-3 3-1zM5 5h4v4l-3-1-1-3z" />
          <circle cx="12" cy="12" r="2" />
        </svg>
      );
    case 'fortaleza':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" className={className} strokeLinecap="round" strokeLinejoin="round">
          {/* Swamp serpent shield / scales */}
          <path d="M12 2s7 3 7 9c0 5-4.5 8.5-7 10-2.5-1.5-7-5-7-10 0-6 7-9 7-9z" />
          <path d="M12 6c-1.5 0-2.5 1-2.5 2s1 1.5 2.5 2.5c1.5 1 2.5 1.5 2.5 3s-1 2.5-2.5 2.5" />
          <path d="M8 10h8" />
        </svg>
      );
    case 'conflujo':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" className={className} strokeLinecap="round" strokeLinejoin="round">
          {/* Phoenix Rising */}
          <path d="M12 4a2 2 0 0 1 2 2M12 4a2 2 0 0 0-2 2" />
          <path d="M12 10C8 8 4 10 3 14c2-1 5-1 7-2M12 10c4-2 8 0 9 4-2-1-5-1-7-2" />
          <path d="M12 10v9M10 12l2 6 2-6" />
          <path d="M9 19c3 3 3 3 6 0" />
        </svg>
      );
    case 'cala':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" className={className} strokeLinecap="round" strokeLinejoin="round">
          {/* Pirate Anchor & Sea waves */}
          <path d="M12 3v14M8 12H6a6 6 0 0 0 12 0h-2" />
          <circle cx="12" cy="3" r="1.5" />
          <path d="M6 12l-2 2M18 12l2 2M12 19.5v-2" />
          <path d="M3 21c3-1.5 3 1.5 6 0s3-1.5 6 0 3-1.5 6 0" />
        </svg>
      );
    case 'bancos':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" className={className} strokeLinecap="round" strokeLinejoin="round">
          {/* Treasure Vault chest / bag of gold */}
          <rect x="3" y="11" width="18" height="9" rx="2" />
          <path d="M3 11a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4" />
          <path d="M12 11v3" />
          <circle cx="7" cy="15" r="1" />
          <circle cx="17" cy="15" r="1" />
        </svg>
      );
    case 'invocaciones':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" className={className} strokeLinecap="round" strokeLinejoin="round">
          {/* Magic portal or vortex / summoning circle */}
          <circle cx="12" cy="12" r="9" strokeDasharray="4 2" />
          <circle cx="12" cy="12" r="6" />
          <path d="M12 2v4M12 18v4M2 12h4M18 12h4" />
          <path d="M4.9 4.9l2.8 2.8M16.3 16.3l2.8 2.8M4.9 19.1l2.8-2.8M16.3 7.7l2.8-2.8" />
          <circle cx="12" cy="12" r="2" fill="currentColor" />
        </svg>
      );
    case 'neutrales':
    default:
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" className={className} strokeLinecap="round" strokeLinejoin="round">
          {/* Crossed swords for neutrals */}
          <path d="M14.5 17.5L3 6M10 17.5L19.5 8" />
          <path d="M18 6l2 2-2 2-2-2zM6 18l-2 2h2z" />
          <circle cx="12" cy="12" r="2.5" />
        </svg>
      );
  }
};

interface RecruitmentCalculatorProps {
  initialUnitName?: string | null;
  onClearInitialUnit?: () => void;
}

export default function RecruitmentCalculator({ initialUnitName, onClearInitialUnit }: RecruitmentCalculatorProps = {}) {
  const [selectedFaction, setSelectedFaction] = useState('castillo');
  const [selectedTier, setSelectedTier] = useState<'bronce' | 'plata' | 'oro' | 'azul'>('bronce');
  const [selectedUnit, setSelectedUnit] = useState<BoardGameUnit | null>(null);
  const [isUpgraded, setIsUpgraded] = useState(false);

  // Handle linking from other views like TownsViewer
  useEffect(() => {
    if (initialUnitName) {
      let foundFaction: string | null = null;
      let foundUnit: BoardGameUnit | null = null;

      for (const [factionId, units] of Object.entries(FACTION_UNITS)) {
        const u = units.find(unit => 
          unit.nameBasic.toLowerCase() === initialUnitName.toLowerCase() || 
          (unit.nameElite && unit.nameElite.toLowerCase() === initialUnitName.toLowerCase())
        );
        if (u) {
          foundFaction = factionId;
          foundUnit = u;
          break;
        }
      }

      if (foundFaction && foundUnit) {
        setSelectedFaction(foundFaction);
        setSelectedTier(foundUnit.tier);
        setSelectedUnit(foundUnit);
        if (foundUnit.nameElite && foundUnit.nameElite.toLowerCase() === initialUnitName.toLowerCase() && foundUnit.nameElite !== foundUnit.nameBasic) {
          setIsUpgraded(true);
        } else {
          setIsUpgraded(false);
        }
      }

      onClearInitialUnit?.();
    }
  }, [initialUnitName, onClearInitialUnit]);

  const factions = [
    { id: 'castillo', name: 'Castillo (Castle)' },
    { id: 'necropolis', name: 'Necrópolis (Necropolis)' },
    { id: 'mazmorra', name: 'Mazmorra (Dungeon)' },
    { id: 'torre', name: 'Torre (Tower)' },
    { id: 'murallas', name: 'Murallas (Rampart)' },
    { id: 'fortaleza', name: 'Fortaleza (Fortress)' },
    { id: 'inferno', name: 'Inferno (Inferno)' },
    { id: 'bastion', name: 'Bastión (Stronghold)' },
    { id: 'conflujo', name: 'Conflujo (Conflux)' },
    { id: 'cala', name: 'Cala (Cove)' },
    { id: 'neutrales', name: 'Neutrales (Neutrals)' },
    { id: 'invocaciones', name: 'Invocaciones' },
    { id: 'bancos', name: 'Banco de Criaturas' }
  ];

  // Auto-adjust selected tier when faction changes
  useEffect(() => {
    if (initialUnitName) return;
    if (selectedFaction !== 'neutrales' && selectedTier === 'azul') {
      setSelectedTier('bronce');
    }
  }, [selectedFaction, selectedTier, initialUnitName]);

  // If we change faction and the current tier has no units for it,
  // let's auto-switch to first tier that has units.
  useEffect(() => {
    if (initialUnitName) return;
    const unitsInThisTier = (FACTION_UNITS[selectedFaction] || []).filter(u => u.tier === selectedTier);
    if (unitsInThisTier.length === 0) {
      const validTiers: ('bronce' | 'plata' | 'oro' | 'azul')[] = ['bronce', 'plata', 'oro', 'azul'];
      const firstValidTier = validTiers.find(t => (FACTION_UNITS[selectedFaction] || []).some(u => u.tier === t));
      if (firstValidTier) {
        setSelectedTier(firstValidTier);
      }
    }
  }, [selectedFaction, selectedTier, initialUnitName]);

  // Retrieve available units for current faction and tier
  const availableUnits = (FACTION_UNITS[selectedFaction] || []).filter(u => u.tier === selectedTier);

  // Sync selected unit when list or tier changes
  useEffect(() => {
    if (initialUnitName) return;
    if (availableUnits.length > 0) {
      const exists = availableUnits.some(u => u.nameBasic === selectedUnit?.nameBasic);
      if (!exists) {
        setSelectedUnit(availableUnits[0]);
      }
    } else {
      setSelectedUnit(null);
    }
  }, [selectedFaction, selectedTier, availableUnits, selectedUnit, initialUnitName]);

  // Get current stats & cost
  const isSingleSided = selectedFaction === 'neutrales' || selectedFaction === 'bancos';
  const effectiveUpgraded = isSingleSided ? false : isUpgraded;

  const stats: UnitStats | null = selectedUnit
    ? (UNIT_DETAILS[selectedUnit.nameBasic]?.[effectiveUpgraded ? 'elite' : 'basic'] || {
        atk: selectedUnit.level,
        def: 1,
        hp: Math.ceil(selectedUnit.level / 2),
        ini: selectedUnit.level + 2,
        type: 'Melé',
        abilities: ['Habilidades tácticas descritas en el manual de es.homm3bg.wiki.']
      })
    : null;

  const currentCostSpecs = selectedFaction === 'invocaciones'
    ? { gold: 0, materials: 0, valuable: 0 }
    : (stats && stats.customCost)
      ? stats.customCost
      : (BASE_COSTS[selectedTier]?.[effectiveUpgraded ? 'elite' : 'basic'] || { gold: 0, materials: 0, valuable: 0 });

  // Helper to map units to images
  const getUnitImage = (unitName: string, factionId: string, level: number): string | null => {
    let baseName = unitName;
    if (unitName.includes('(')) {
      baseName = unitName.split('(')[0].trim();
    }

    // Map singular Dragón Negro to plural Dragones Negros to match Dungeon Level 7 unit
    if (baseName === 'Dragón Negro') {
      baseName = 'Dragones Negros';
    }

    // Check if the base name belongs to any faction unit
    for (const [fac, units] of Object.entries(FACTION_UNITS)) {
      if (fac === 'neutrales' || fac === 'bancos' || fac === 'invocaciones') continue;
      const found = units.find(u => u.nameBasic === baseName || (u.nameElite && u.nameElite === baseName));
      if (found) {
        return getFactionImageFilename(fac, found.level);
      }
    }

    // Handle pure neutral units
    const pureNeutralsMap: { [key: string]: string } = {
      'Gólems de oro': 'Creature_Gold_Golem_5.png',
      'Gólems de diamante': 'Creature_Diamond_Golem_6.png',
      'Campesinos': 'Creature_Peasant_1.png',
      'Medianos': 'Creature_Halfling_(Factory).png',
      'Saqueadores': 'Creature_Rogue_2.png',
      'Jabalíes': 'Creature_Boar_2.png',
      'Momias': 'Creature_Mummy_3.png',
      'Nómadas': 'Creature_Nomad_3.png',
      'Trolls': 'Creature_Troll_5.png',
      'Hechiceros': 'Creature_Enchanter_6.png',
      'Tiradores': 'Creature_Sharpshooter_4.png',
      'Tiradores certeros': 'Creature_Sharpshooter_4.png',
      'Dragones hada': 'Creature_Faerie_Dragon_7.png',
      'Dragones herrumbrosos': 'Creature_Rust_Dragon_8.png',
      'Dragones de cristal': 'Creature_Crystal_Dragon_8.png',
      'Dragones azures': 'Creature_Azure_Dragon_8.png',
      'Fangarm': 'Creature_Fangarm_5.png',
      'Duende': 'Creature_Leprechaun_2.png',
      'Sátiros': 'Creature_Satyr_4.png',
      'Gólems de acero': 'Creature_Steel_Golem_4.png',
      'Elemental de aire': 'Creature_Air_Elemental_2.png',
      'Elementales de aire': 'Creature_Air_Elemental_2.png',
      'Elemental de agua': 'Creature_Water_Elemental.png',
      'Elementales de agua': 'Creature_Water_Elemental.png',
      'Elementales de fuego': 'Creature_Fire_Elemental_(HotA).png',
      'Elemental de fuego': 'Creature_Fire_Elemental_(HotA).png',
      'Elemental de tierra': 'Creature_Earth_Elemental.png',
      'Elementales de tierra': 'Creature_Earth_Elemental.png',
      'Aves de trueno (Neutral)': 'bastion_5.png',
      'Elementales de la tormenta (Neutral)': 'conflux_2.png'
    };

    if (pureNeutralsMap[unitName]) {
      return pureNeutralsMap[unitName];
    }

    if (factionId === 'neutrales') {
      return 'Creature_Peasant_1.png';
    }

    return getFactionImageFilename(factionId, level);
  };

  const getFactionImageFilename = (factionId: string, level: number): string | null => {
    const mapping: { [key: string]: string } = {
      castillo: 'castillo',
      necropolis: 'necropolis',
      mazmorra: 'dungeon',
      murallas: 'rampart',
      torre: 'tower',
      inferno: 'inferno',
      bastion: 'bastion',
      fortaleza: 'fortaleza',
      conflujo: 'conflux',
      invocaciones: 'conflux',
      cala: 'bahia',
    };

    const prefix = mapping[factionId];
    if (!prefix) return null;
    
    const lvl = Math.min(Math.max(level, 1), 7);
    const ext = 'png';
    return `${prefix}_${lvl}.${ext}`;
  };

  const imageFilename = selectedUnit ? getUnitImage(selectedUnit.nameBasic, selectedFaction, selectedUnit.level) : null;
  const imageUrl = imageFilename 
    ? new URL(`../assets/images/units/${imageFilename}`, import.meta.url).href 
    : null;

  const theme = FACTION_THEMES[selectedFaction] || FACTION_THEMES.neutrales;

  return (
    <div className="bg-slate-900/40 border border-slate-800/80 rounded-3xl p-6 space-y-6 shadow-2xl backdrop-blur-md" id="creature-viewer">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-slate-800/80 pb-4 gap-2">
        <div>
          <h2 className="text-xl font-serif text-amber-400 flex items-center gap-2">
            <Swords className="w-5 h-5 text-amber-500" />
            Visor Digital de Criaturas y Unidades
          </h2>
          <p className="text-xs text-slate-400">
            Explora las estadísticas de combate, costes, habilidades tácticas y caras de las cartas de Erathia (es.homm3bg.wiki).
          </p>
        </div>
        <span className="text-[10px] font-mono bg-slate-950 px-2.5 py-1 rounded-md text-amber-400 border border-amber-900/30 self-start sm:self-center uppercase">
          COMPENDIO DE COMBATE
        </span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Left Column: Configuration Selector (Col Span 5) */}
        <div className="lg:col-span-5 bg-slate-950/40 p-5 rounded-2xl border border-slate-850/60 space-y-4">
          <h3 className="text-sm font-bold text-slate-400 uppercase tracking-widest font-mono flex items-center gap-1.5">
            <Star className="w-4.5 h-4.5 text-amber-500" />
            1. Selección de Criatura
          </h3>

          {/* Faction Grid */}
          <div className="space-y-1.5">
            <label className="text-[10px] uppercase font-mono tracking-wider text-slate-500 block">Facción o Alianza:</label>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-1.5">
              {factions.map(fac => {
                const isSelected = selectedFaction === fac.id;
                return (
                  <button
                    key={fac.id}
                    onClick={() => {
                      setSelectedFaction(fac.id);
                      setIsUpgraded(false); // reset upgraded face on faction change
                    }}
                    className={`px-2 py-2 text-[10px] rounded-lg border flex items-center justify-start gap-1.5 transition cursor-pointer font-medium font-mono truncate ${
                      isSelected
                        ? `${FACTION_THEMES[fac.id]?.border || 'border-amber-500'} bg-slate-900/60 ${FACTION_THEMES[fac.id]?.text || 'text-amber-300'} font-bold shadow-lg shadow-black/80`
                        : 'bg-slate-950 border-slate-900 text-slate-400 hover:text-slate-200 hover:border-slate-800'
                    }`}
                  >
                    <span 
                      className={isSelected ? (FACTION_THEMES[fac.id]?.text || 'text-amber-400') : 'text-slate-500'}
                      style={{ filter: isSelected ? 'drop-shadow(0px 0px 4px currentColor)' : 'none' }}
                    >
                      {renderFactionWatermark(fac.id, "w-3.5 h-3.5 shrink-0")}
                    </span>
                    <span className="truncate">{fac.name.split(' (')[0]}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Tier Selector */}
          <div className="space-y-1.5">
            <label className="text-[10px] uppercase font-mono tracking-wider text-slate-500 block">Rango (Tier):</label>
            <div className="flex gap-1.5">
              {(['bronce', 'plata', 'oro'] as const).map(t => {
                const isSelected = selectedTier === t;
                const starColor = t === 'bronce' ? 'text-[#a0522d] fill-[#a0522d]' : t === 'plata' ? 'text-slate-400 fill-slate-400' : 'text-yellow-500 fill-yellow-500';
                return (
                  <button
                    key={t}
                    onClick={() => setSelectedTier(t)}
                    className={`flex-1 py-1.5 text-[10px] uppercase font-bold tracking-wider rounded-lg border flex items-center justify-center gap-1 cursor-pointer transition ${
                      isSelected
                        ? t === 'bronce' ? 'border-[#a0522d] bg-[#a0522d]/10 text-[#a0522d]'
                        : t === 'plata' ? 'border-slate-400 bg-slate-400/10 text-slate-300'
                        : 'border-yellow-500 bg-yellow-500/10 text-yellow-300'
                        : 'bg-slate-950 border-slate-900 text-slate-500 hover:text-slate-300'
                    }`}
                  >
                    <Star className={`w-3 h-3 ${isSelected ? starColor : 'text-slate-600 fill-slate-700/20'}`} />
                    <span>{t}</span>
                  </button>
                );
              })}
              {selectedFaction === 'neutrales' && (
                <button
                  onClick={() => setSelectedTier('azul')}
                  className={`flex-1 py-1.5 text-[10px] uppercase font-bold tracking-wider rounded-lg border flex items-center justify-center gap-1 cursor-pointer transition ${
                    selectedTier === 'azul'
                      ? 'border-blue-500 bg-blue-500/15 text-blue-300 font-bold shadow-md'
                      : 'bg-slate-950 border-slate-900 text-slate-500 hover:text-slate-300'
                  }`}
                >
                  <Star className={`w-3 h-3 ${selectedTier === 'azul' ? 'text-blue-500 fill-blue-500' : 'text-slate-600 fill-slate-700/20'}`} />
                  <span>azul</span>
                </button>
              )}
            </div>
          </div>

          {/* Unit List */}
          <div className="space-y-1.5">
            <label className="text-[10px] uppercase font-mono tracking-wider text-slate-500 block">Tropa / Nivel de Criatura:</label>
            {availableUnits.length > 0 ? (
              <div className="space-y-1.5">
                {availableUnits.map(unit => {
                  const isSelected = selectedUnit?.nameBasic === unit.nameBasic;
                  return (
                    <button
                      key={unit.nameBasic}
                      onClick={() => setSelectedUnit(unit)}
                      className={`w-full p-2.5 rounded-xl border text-left transition cursor-pointer text-xs font-mono flex items-center justify-between ${
                        isSelected
                          ? 'border-amber-500 bg-amber-500/10 text-amber-300 font-semibold'
                          : 'bg-slate-950 border-slate-900 text-slate-400 hover:text-slate-200 hover:border-slate-800'
                      }`}
                    >
                      <span className="font-medium text-slate-200">{unit.nameBasic}</span>
                      <span className="text-[10px] bg-slate-900/90 border border-slate-800 px-1.5 py-0.5 rounded text-slate-400 font-bold">
                        Niv. {unit.level}
                      </span>
                    </button>
                  );
                })}
              </div>
            ) : (
              <p className="text-[12px] text-red-400 font-mono italic">Selecciona un rango válido.</p>
            )}
          </div>

          {/* Face of the card toggle */}
          <div className="space-y-1.5 pt-1">
            <label className="text-[10px] uppercase font-mono tracking-wider text-slate-500 block">Cara de la Carta (Cantidad):</label>
            <div className={isSingleSided ? "grid grid-cols-1 gap-2" : "grid grid-cols-2 gap-2"}>
              <button
                onClick={() => setIsUpgraded(false)}
                className={`py-2 text-xs rounded-lg border text-center cursor-pointer transition font-medium flex flex-col items-center justify-center gap-0.5 ${
                  !effectiveUpgraded
                    ? 'border-amber-500 bg-slate-900 text-slate-200 font-bold shadow-inner'
                    : 'bg-slate-950 border-slate-900 text-slate-500 hover:text-slate-350'
                }`}
              >
                <span className="text-sm">🛡️ "Unas pocas"</span>
                <span className="text-[10px] opacity-75 font-mono uppercase tracking-wider">
                  {isSingleSided ? 'Lado Único (Básico)' : 'Lado Básico'}
                </span>
              </button>
              {!isSingleSided && (
                <button
                  onClick={() => setIsUpgraded(true)}
                  className={`py-2 text-xs rounded-lg border text-center cursor-pointer transition font-medium flex flex-col items-center justify-center gap-0.5 ${
                    effectiveUpgraded
                      ? 'border-amber-500 bg-amber-500/10 text-amber-300 font-bold shadow-md'
                      : 'bg-slate-950 border-slate-900 text-slate-500 hover:text-slate-350'
                  }`}
                >
                  <span className="text-sm">⚡ "Manada"</span>
                  <span className="text-[10px] opacity-75 font-mono uppercase tracking-wider">Lado Reforzado</span>
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Right Column: Visual Board Game Creature Card Panel (Col Span 7) */}
        <div className="lg:col-span-7 space-y-4">
          <AnimatePresence mode="wait">
            {selectedUnit && stats && (
              <motion.div
                key={`${selectedUnit.nameBasic}-${effectiveUpgraded}`}
                initial={{ opacity: 0, y: 10, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -10, scale: 0.98 }}
                transition={{ duration: 0.2 }}
                className="w-full rounded-2xl p-5 border relative overflow-hidden flex flex-col justify-between min-h-[460px] shadow-2xl"
                style={{
                  background: theme.bgGradient,
                  borderColor: effectiveUpgraded ? '#d97706' : '#475569'
                }}
              >
                {/* Visual Faction Emblem Background watermark */}
                <div className="absolute right-0 bottom-0 text-[180px] opacity-5 pointer-events-none font-bold select-none leading-none">
                  {effectiveUpgraded ? '⚡' : '🛡️'}
                </div>

                {/* Top Card Bar */}
                <div className="flex items-start justify-between border-b border-slate-700/40 pb-3 z-10">
                  <div>
                    <div className="flex items-center gap-2">
                      <span className={`text-[10px] font-mono font-bold uppercase px-2 py-0.5 rounded-md border ${theme.badge}`}>
                        {factions.find(f => f.id === selectedFaction)?.name.split(' (')[0] || selectedFaction}
                      </span>
                      <span className={`text-[10px] font-mono font-bold uppercase px-2 py-0.5 rounded-md border flex items-center gap-1.5 ${
                        effectiveUpgraded 
                          ? 'bg-amber-950/40 text-amber-300 border-amber-500/50' 
                          : 'bg-slate-950/40 text-slate-300 border-slate-700/60'
                      }`}>
                        <Star className={`w-3 h-3 shrink-0 ${
                          selectedTier === 'bronce' ? 'text-[#a0522d] fill-[#a0522d]'
                          : selectedTier === 'plata' ? 'text-slate-400 fill-slate-400'
                          : selectedTier === 'oro' ? 'text-yellow-500 fill-yellow-500'
                          : 'text-blue-500 fill-blue-500'
                        }`} />
                        <span>Nivel {selectedUnit.level}</span>
                      </span>
                    </div>
                    <h3 className="text-2xl font-serif font-extrabold text-white mt-1 tracking-wide uppercase drop-shadow-md">
                      {selectedUnit.nameBasic}
                    </h3>
                  </div>

                  {!isSingleSided && (
                    <button
                      onClick={() => setIsUpgraded(!isUpgraded)}
                      className="p-1.5 bg-slate-950/60 hover:bg-slate-950 border border-slate-800 rounded-lg text-slate-400 hover:text-amber-400 transition cursor-pointer flex items-center gap-1.5 text-[10px] font-mono uppercase"
                      title="Voltear carta"
                    >
                      <RefreshCw className="w-3.5 h-3.5" />
                      Voltear
                    </button>
                  )}
                </div>

                {/* Creature Artwork Image */}
                <div className={`my-3 relative w-full h-44 rounded-xl overflow-hidden border flex items-center justify-center z-10 group/img shadow-inner transition-all duration-300 ${
                  effectiveUpgraded 
                    ? 'bg-slate-950/40 border-amber-500/50 holo-foil-effect shadow-[inset_0_0_20px_rgba(217,119,6,0.25)]' 
                    : 'bg-slate-950/80 border-slate-800/80'
                }`}>
                  {/* Subtle radial gradient background pattern or holo shine */}
                  {effectiveUpgraded ? (
                    <div className="holo-foil-shine" />
                  ) : (
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(30,41,59,0.3)_0%,transparent_70%)]" />
                  )}

                  {/* Faction Emblem in Top-Left Corner */}
                  <div 
                    className={`absolute top-2 left-2 pointer-events-none z-10 select-none ${theme.text} opacity-60 transition-opacity duration-300 group-hover/img:opacity-85`}
                    style={{ filter: 'drop-shadow(0px 1px 3px rgba(0,0,0,0.85)) drop-shadow(0px 0px 4px currentColor)' }}
                  >
                    {renderFactionWatermark(selectedFaction, "w-24 h-24")}
                  </div>

                  {imageUrl ? (
                    <img 
                      src={imageUrl} 
                      alt={selectedUnit.nameBasic} 
                      className={`w-auto h-[90%] object-contain select-none pointer-events-none transition-transform duration-500 group-hover/img:scale-105 filter drop-shadow-[0_4px_12px_rgba(0,0,0,0.5)] z-20 relative ${
                        effectiveUpgraded ? 'contrast-[1.05] brightness-[1.03]' : ''
                      }`}
                      referrerPolicy="no-referrer"
                    />
                  ) : (
                    <div className="flex flex-col items-center justify-center text-slate-500 text-center p-4 z-20 relative">
                      <span className="text-3xl mb-1 filter drop-shadow">⚓</span>
                      <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400">Imagen no disponible</span>
                    </div>
                  )}
                  {/* Subtle face badge indicator on artwork */}
                  <div className={`absolute bottom-2 left-2 z-20 px-2 py-0.5 rounded text-[10px] font-mono uppercase border transition-colors duration-300 ${
                    effectiveUpgraded 
                      ? 'bg-amber-950/90 text-amber-300 border-amber-700/50' 
                      : 'bg-slate-950/85 text-slate-300 border-slate-800'
                  }`}>
                    {effectiveUpgraded ? '# MANADA' : '# UNAS POCAS'}
                  </div>
                </div>

                {/* Central Body: Stats Grid */}
                <div className="grid grid-cols-4 gap-3 my-4 z-10">
                  {/* Atk */}
                  <div className="bg-slate-950/70 border border-slate-800/80 rounded-xl p-2.5 flex flex-col items-center justify-center text-center">
                    <Swords className="w-5 h-5 text-red-400 mb-1" />
                    <span className="text-[10px] text-slate-400 font-mono uppercase leading-none">Ataque</span>
                    <span className="text-xl font-mono font-extrabold text-slate-100 mt-1">{stats.atk}</span>
                  </div>

                  {/* Def */}
                  <div className="bg-slate-950/70 border border-slate-800/80 rounded-xl p-2.5 flex flex-col items-center justify-center text-center">
                    <Shield className="w-5 h-5 text-blue-400 mb-1" />
                    <span className="text-[10px] text-slate-400 font-mono uppercase leading-none">Defensa</span>
                    <span className="text-xl font-mono font-extrabold text-slate-100 mt-1">{stats.def}</span>
                  </div>

                  {/* HP */}
                  <div className="bg-slate-950/70 border border-slate-800/80 rounded-xl p-2.5 flex flex-col items-center justify-center text-center">
                    <Heart className="w-5 h-5 text-rose-500 mb-1" />
                    <span className="text-[10px] text-slate-400 font-mono uppercase leading-none">Vida</span>
                    <span className="text-xl font-mono font-extrabold text-slate-100 mt-1">{stats.hp}</span>
                  </div>

                  {/* Initiative */}
                  <div className="bg-slate-950/70 border border-slate-800/80 rounded-xl p-2.5 flex flex-col items-center justify-center text-center">
                    <Zap className="w-5 h-5 text-amber-400 mb-1" />
                    <span className="text-[10px] text-slate-400 font-mono uppercase leading-none">Iniciativa</span>
                    <span className="text-xl font-mono font-extrabold text-slate-100 mt-1">{stats.ini}</span>
                  </div>
                </div>

                {/* Reach & Combat Mode info */}
                <div className="bg-slate-950/50 p-2.5 rounded-xl border border-slate-800/60 flex items-center text-xs z-10 mb-4">
                  <div className="flex items-center gap-2">
                    <span className="text-lg">
                      {stats.type === 'Voladora' ? '🦅' : stats.type === 'a Distancia' ? '🏹' : '⚔️'}
                    </span>
                    <div>
                      <span className="font-bold text-slate-200 block text-[12px] font-mono leading-tight">
                        Unidad {stats.type}
                      </span>
                      <span className="text-[10px] text-slate-500 leading-none block">
                        {stats.type === 'Voladora' ? 'Vuela e ignora obstáculos en el tablero'
                          : stats.type === 'a Distancia' ? 'Ataca a distancia (Penalizado adyacente)'
                          : 'Ataque cuerpo a cuerpo regular'}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Special Abilities List */}
                <div className="bg-slate-950/80 border border-slate-800/80 rounded-xl p-4 space-y-3 z-10 flex-1">
                  <div className="flex items-center gap-1.5 border-b border-slate-800 pb-1.5">
                    <Sparkles className="w-4 h-4 text-amber-500" />
                    <span className="text-[10px] uppercase font-mono tracking-wider font-bold text-amber-400">
                      Habilidades y Rasgos Especiales
                    </span>
                  </div>

                  {stats.abilities.length > 0 ? (
                    <div className="space-y-2 max-h-[140px] overflow-y-auto scrollbar-thin pr-1 text-xs">
                      {stats.abilities.map((ability, idx) => (
                        <div key={idx} className="flex items-start gap-2 text-slate-300">
                          <span className="text-amber-500 font-bold mt-0.5">•</span>
                          <p className="leading-relaxed text-[12px]">{ability}</p>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <p className="text-[10px] text-slate-500 font-mono italic">
                      Sin habilidades especiales activas en esta cara de la carta.
                    </p>
                  )}
                </div>

                {/* Cost Section & Info Footer */}
                <div className="border-t border-slate-700/40 pt-3 mt-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3 z-10">
                  <div className="space-y-1">
                    <span className="text-[10px] text-slate-400 font-mono block">COSTE DE RECLUTAMIENTO:</span>
                    <div className="flex gap-2 items-center text-xs font-bold font-mono">
                      {currentCostSpecs.gold > 0 && (
                        <span className="bg-amber-950/60 border border-amber-900/40 text-amber-400 px-2.5 py-1 rounded-lg">
                          🟡 {currentCostSpecs.gold} Oro
                        </span>
                      )}
                      {currentCostSpecs.materials > 0 && (
                        <span className="bg-slate-950/80 border border-slate-800 text-slate-300 px-2.5 py-1 rounded-lg">
                          🪵 {currentCostSpecs.materials} Material
                        </span>
                      )}
                      {currentCostSpecs.valuable > 0 && (
                        <span className="bg-purple-950/60 border border-purple-900/40 text-purple-400 px-2.5 py-1 rounded-lg">
                          🔮 {currentCostSpecs.valuable} Objeto de Valor
                        </span>
                      )}
                      {(currentCostSpecs.gold + currentCostSpecs.materials + currentCostSpecs.valuable) < 1 && (
                        <span className="text-[10px] text-slate-400 font-mono block">
                          Sin Coste
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="text-[10px] text-slate-400 leading-relaxed font-mono text-left sm:text-right">
                    <span>
                      {selectedFaction === 'neutrales' ? 'Mercenario / Mapa'
                        : selectedFaction === 'bancos' ? 'Banco de Criaturas'
                        : selectedFaction === 'invocaciones' ? 'Invocación Mágica'
                        : 'Alistado en Ciudad'}
                    </span>
                    <span className="block text-[10px] text-slate-500">
                      {selectedFaction === 'neutrales' ? 'No requiere vivienda de ciudad'
                        : selectedFaction === 'bancos' ? 'Defensores de criptas, utopías o conservatorios'
                        : selectedFaction === 'invocaciones' ? 'Se invoca en combate mediante hechizos (sin edificios)'
                        : `Requiere vivienda de ${selectedTier.toUpperCase()} construida`}
                    </span>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Rules Box */}
      <div className="bg-slate-950/60 rounded-2xl p-4 border border-slate-850 flex gap-4 text-xs text-slate-300 leading-relaxed">
        <HelpCircle className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
        <div className="space-y-1">
          <strong className="text-slate-200">Reglas Oficiales del Tablero de Combate (es.homm3bg.wiki):</strong>
          <p>
            • <strong>Cara de la Carta:</strong> Al jugar la cara "Unas pocas" (basic), la unidad posee menores estadísticas. Puedes mejorarla en cualquier momento a "Manada" (elite) pagando la diferencia de coste en tu ciudad correspondiente.
          </p>
          <p>
            • <strong>Iniciativa y Activación:</strong> Durante la fase de combate, las criaturas se activan en orden descendente de su iniciativa (⚡). En caso de empate, el atacante original tiene prioridad de golpe (alternativamente).
          </p>
          <p>
            • <strong>Contraataque y Represalia:</strong> Cada unidad puede contraatacar de forma automática una vez por ronda al ser golpeada en cuerpo a cuerpo, a menos que el atacante posea el rasgo de <strong>Sin Represalia</strong>.
          </p>
        </div>
      </div>
    </div>
  );
}