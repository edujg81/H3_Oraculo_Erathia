import React, { useState, useEffect } from 'react';
import { 
  Swords, Shield, Zap, Brain, Award, Star, BookOpen, 
  Sparkles, User, Flame, HandFist, Compass, Quote, Info,
  Lock, CheckCircle2, Layers, Settings2
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { FACTION_HEROES, FACTION_THEMES, HeroDetails } from '../data/heroesData';

// Helper to retrieve base filename for a hero
function getHeroBaseFilename(heroName: string, factionId?: string): string {
  let filename = heroName.replace(/\s+/g, '_');
  
  // Apply lore-accurate overrides for Tarnum depending on his class/faction representation
  if (filename === 'Tarnum' && factionId) {
    if (factionId === 'castillo') {
      filename = 'caballero_tarnum';
    } else if (factionId === 'mazmorra') {
      filename = 'adalid_tarnum';
    } else if (factionId === 'conflujo') {
      filename = 'elementalista_tarnum';
    } else if (factionId === 'bastion') {
      filename = 'barbaro_tarnum';
    } else if (factionId === 'murallas') {
      filename = 'guardabosques_tarnum';
    } else if (factionId === 'torre') {
      filename = 'hechicero_tarnum';
    } else if (factionId === 'fortaleza') {
      filename = 'amaestrador_tarnum';
    }
  }

  // Live vs Undead Lord Haart portraits
  if (filename === 'Lord_Haart' && factionId === 'necropolis') {
    filename = 'caballero_muerte_lord_haart';
  }

  return filename;
}

// Helper to match a hero's detail against actual globbed local assets (e.g. clerigo_adela.jpg, iona.jpg, caballero_catherine.jpg)
function getHeroPortrait(
  heroPortraits: Record<string, string>,
  heroName: string,
  className: string,
  factionId: string
): string | undefined {
  if (!heroPortraits) return undefined;

  // Normalize inputs
  const cleanHeroName = heroName
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/\s+/g, '_');

  const cleanClassName = className
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/\s+/g, '_');

  // Map some Spanish class synonyms to match the filenames in thumbs
  let spanishClass = cleanClassName;
  if (spanishClass === 'caballero_de_la_muerte') {
    spanishClass = 'caballero_muerte';
  } else if (spanishClass === 'caminante_de_planos') {
    spanishClass = 'caminante_planos';
  }

  // Get base name from overrides (e.g. caballero_tarnum, etc.)
  const baseName = getHeroBaseFilename(heroName, factionId).toLowerCase();

  // We want to find a file in heroPortraits that match our candidates.
  // Let's build candidates for the filename without extension:
  const candidates = new Set<string>();

  // If it is Tarnum, we have specific base names like "caballero_tarnum", etc.
  candidates.add(baseName);

  // Add spanishClass + "_" + baseName
  candidates.add(`${spanishClass}_${baseName}`);

  // Add spanishClass + "_" + cleanHeroName
  candidates.add(`${spanishClass}_${cleanHeroName}`);

  // Add just cleanHeroName
  candidates.add(cleanHeroName);

  // Add other common combinations
  candidates.add(baseName.replace('lord_', ''));
  candidates.add(cleanHeroName.replace('lord_', ''));

  // Also extract English class name if present in parentheses
  const match = className.match(/\(([^)]+)\)/);
  if (match) {
    const englishClass = match[1].toLowerCase().replace(/\s+/g, '_');
    candidates.add(`${englishClass}_${baseName}`);
    candidates.add(`${englishClass}_${cleanHeroName}`);
  }

  // Search through heroPortraits keys.
  // We extract the filename (with or without extension) from each key and compare.
  const portraitKeys = Object.keys(heroPortraits);

  for (const candidate of candidates) {
    const targetJpg = `${candidate}.jpg`;
    const targetPng = `${candidate}.png`;
    const targetJpeg = `${candidate}.jpeg`;

    const foundKey = portraitKeys.find(key => {
      const filePart = key.substring(key.lastIndexOf('/') + 1).toLowerCase();
      return filePart === targetJpg || filePart === targetPng || filePart === targetJpeg;
    });

    if (foundKey) {
      return heroPortraits[foundKey];
    }
  }

  // Fallback: search if the key contains the cleanHeroName at all
  const fallbackKey = portraitKeys.find(key => {
    const filePart = key.substring(key.lastIndexOf('/') + 1).toLowerCase();
    return filePart.includes(cleanHeroName);
  });

  if (fallbackKey) {
    return heroPortraits[fallbackKey];
  }

  return undefined;
}

const renderFactionEmblem = (factionId: string, className: string = "w-6 h-6"): React.JSX.Element => {
  switch (factionId) {
    case 'castillo':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" className={className} strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          <path d="M8 11h8M12 7v8M9 15v2h6v-2" />
          <path d="M7 8V5l5-2 5 2v3" />
        </svg>
      );
    case 'necropolis':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" className={className} strokeLinecap="round" strokeLinejoin="round">
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
          <path d="M2 12s4-8 10-8 10 8 10 8-4 8-10 8-10-8-10-8z" />
          <circle cx="12" cy="12" r="4.5" />
          <path d="M12 9.5l-1 2.5 1 2.5 1-2.5z" fill="currentColor" />
          <path d="M3 12c2-2 4-2 6 0M15 12c2 2 4 2 6 0" />
        </svg>
      );
    case 'murallas':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" className={className} strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22V12M12 12l4-4M12 14l-4-4" />
          <path d="M12 2C7 2 5 6 5 10c0 4 3 6 7 7 4-1 7-3 7-7 0-4-2-8-7-8z" />
          <path d="M12 5a3 3 0 0 0-3 3c0 2 3 4 3 4s3-2 3-4a3 3 0 0 0-3-3z" />
        </svg>
      );
    case 'torre':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" className={className} strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="9" />
          <path d="M12 3l3 6 6 1-4.5 4.5 1 6.5-5.5-3-5.5 3 1-6.5L3 10l6-1z" />
          <circle cx="12" cy="12" r="2.5" />
        </svg>
      );
    case 'inferno':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" className={className} strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2C8.5 2 6 5 6 9c0 4 3.5 7 6 13 2.5-6 6-9 6-13 0-4-2.5-7-6-7z" />
          <path d="M12 7c-2 0-3 1.5-3 3.5 0 2 1.5 3 3 6.5 1.5-3.5 3-4.5 3-6.5 0-2-1-3.5-3-3.5z" />
          <path d="M4 10c0-4 3-6 3-6M20 10c0-4-3-6-3-6" />
        </svg>
      );
    case 'bastion':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" className={className} strokeLinecap="round" strokeLinejoin="round">
          <path d="M5 19L19 5M19 19L5 5" />
          <path d="M15 5h4v4l-3-1-1-3zM5 15v4h4l-1-3-3-1z" />
          <path d="M19 15v4h-4l1-3 3-1zM5 5h4v4l-3-1-1-3z" />
          <circle cx="12" cy="12" r="2" />
        </svg>
      );
    case 'fortaleza':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" className={className} strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2s7 3 7 9c0 5-4.5 8.5-7 10-2.5-1.5-7-5-7-10 0-6 7-9 7-9z" />
          <path d="M12 6c-1.5 0-2.5 1-2.5 2s1 1.5 2.5 2.5c1.5 1 2.5 1.5 2.5 3s-1 2.5-2.5 2.5" />
          <path d="M8 10h8" />
        </svg>
      );
    case 'conflujo':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" className={className} strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 4a2 2 0 0 1 2 2M12 4a2 2 0 0 0-2 2" />
          <path d="M12 10C8 8 4 10 3 14c2-1 5-1 7-2M12 10c4-2 8 0 9 4-2-1-5-1-7-2" />
          <path d="M12 10v9M10 12l2 6 2-6" />
          <path d="M9 19c3 3 3 3 6 0" />
        </svg>
      );
    case 'cala':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" className={className} strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 3v14M8 12H6a6 6 0 0 0 12 0h-2" />
          <circle cx="12" cy="3" r="1.5" />
          <path d="M6 12l-2 2M18 12l2 2M12 19.5v-2" />
          <path d="M3 21c3-1.5 3 1.5 6 0s3-1.5 6 0 3-1.5 6 0" />
        </svg>
      );
    default:
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" className={className} strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <path d="M12 8v8M8 12h8" />
        </svg>
      );
  }
};

export default function HeroesViewer() {
  const [selectedFaction, setSelectedFaction] = useState('castillo');
  const [typeFilter, setTypeFilter] = useState<'Todos' | 'Poder' | 'Magia'>('Todos');
  const [selectedHero, setSelectedHero] = useState<HeroDetails | null>(null);
  const [heroLevel, setHeroLevel] = useState<number>(1);

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
    { id: 'cala', name: 'Cala (Cove)' }
  ];

  // Retrieve available heroes for current faction and filter
  const allFactionHeroes = FACTION_HEROES[selectedFaction] || [];
  const availableHeroes = allFactionHeroes.filter(h => 
    typeFilter === 'Todos' ? true : h.type === typeFilter
  );

  // Sync selected hero when faction or filter changes
  useEffect(() => {
    if (availableHeroes.length > 0) {
      // Check if current selected hero is still in the filtered list
      const exists = availableHeroes.some(h => h.name === selectedHero?.name);
      if (!exists) {
        setSelectedHero(availableHeroes[0]);
      }
    } else {
      setSelectedHero(null);
    }
  }, [selectedFaction, typeFilter, availableHeroes, selectedHero]);

  // Reset level to 1 when selected hero changes
  useEffect(() => {
    setHeroLevel(1);
  }, [selectedHero]);

  const theme = FACTION_THEMES[selectedFaction] || FACTION_THEMES.castillo;

  // Level stats calculation
  const getHandLimit = (level: number) => {
    if (level >= 7) return 7;
    if (level >= 5) return 6;
    if (level >= 3) return 5;
    return 4;
  };

  const getCrowns = (level: number) => {
    if (level >= 6) return 3;
    if (level >= 4) return 2;
    if (level >= 2) return 1;
    return 0;
  };

  const heroPortraits = import.meta.glob(
    "../assets/images/thumbs/*",
    {
        eager: true,
        import: "default",
    }
  ) as Record<string, string>;

  console.log(heroPortraits);

  const selectedHeroImage = selectedHero
    ? getHeroPortrait(heroPortraits, selectedHero.name, selectedHero.className, selectedFaction)
    : undefined;

  return (
    <div className="space-y-6">
      {/* Introduction Card */}
      <div className="bg-slate-900/60 border border-slate-800 rounded-3xl p-5 shadow-xl flex flex-col md:flex-row gap-4 items-center justify-between">
        <div className="space-y-1 text-center md:text-left">
          <h2 className="text-xl font-bold text-amber-500 font-serif flex items-center justify-center md:justify-start gap-2.5">
            <User className="w-5 h-5 text-amber-500" />
            VISOR DE HÉROES DE ERATHIA
          </h2>
          <p className="text-xs text-slate-400 leading-relaxed max-w-xl">
            Consulta los héroes de cada facción, sus mazos de preparación inicial, habilidades en formato de cartas de doble efecto, y las tres cartas de especialidad progresivas por nivel oficiales del juego de mesa.
          </p>
        </div>
        
        {/* Type Filter Selector */}
        <div className="flex bg-slate-950/80 p-1 rounded-xl border border-slate-850/80 self-center md:self-auto shrink-0 font-mono text-[10px] uppercase">
          {(['Todos', 'Poder', 'Magia'] as const).map((type) => (
            <button
              key={type}
              onClick={() => setTypeFilter(type)}
              className={`px-3.5 py-1.5 rounded-lg font-bold transition cursor-pointer flex items-center gap-1 ${
                typeFilter === type
                  ? 'bg-amber-600 text-white shadow'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              {type === 'Poder' && <Flame className="w-3.5 h-3.5 text-red-400" />}
              {type === 'Magia' && <Sparkles className="w-3.5 h-3.5 text-sky-400" />}
              {type}
            </button>
          ))}
        </div>
      </div>

      {/* Main interactive split block */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        
        {/* Left Faction & Heroes Selection Sidebar (col-span-5) */}
        <div className="lg:col-span-5 space-y-4">
          
          {/* Factions Grid Selection */}
          <div className="bg-slate-900/40 border border-slate-800/80 p-4 rounded-3xl space-y-2.5">
            <span className="text-[10px] uppercase font-mono tracking-wider text-slate-500 block">Facciones</span>
            <div className="grid grid-cols-2 sm:grid-cols-5 lg:grid-cols-2 gap-2">
              {factions.map((f) => {
                const isSelected = selectedFaction === f.id;
                const factionTheme = FACTION_THEMES[f.id] || FACTION_THEMES.castillo;
                return (
                  <button
                    key={f.id}
                    onClick={() => setSelectedFaction(f.id)}
                    className={`px-3 py-2.5 rounded-xl text-xs font-semibold border text-left cursor-pointer transition flex items-center gap-2.5 group ${
                      isSelected
                        ? `border-amber-500 ${factionTheme.primary} text-amber-200 shadow-md ${factionTheme.glow}`
                        : 'bg-slate-950/50 border-slate-900/60 text-slate-400 hover:text-slate-200 hover:border-slate-800'
                    }`}
                  >
                    {renderFactionEmblem(f.id, `w-4.5 h-4.5 shrink-0 transition-all duration-300 ${
                      isSelected 
                        ? `${factionTheme.text} scale-110 drop-shadow-[0_0_3px_currentColor]` 
                        : `text-slate-600 group-hover:${factionTheme.text} group-hover:scale-105`
                    }`)}
                    <span className="truncate">{f.name.split(' ')[0]}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Heroes List under current Faction & Filter */}
          <div className="bg-slate-900/40 border border-slate-800/80 p-4 rounded-3xl space-y-3">
            <div className="flex items-center justify-between border-b border-slate-800/60 pb-2">
              <span className="text-[10px] uppercase font-mono tracking-wider text-slate-500 block">Héroes Disponibles ({availableHeroes.length})</span>
              <span className="text-[10px] uppercase font-mono bg-slate-950 px-2 py-0.5 rounded text-amber-400 border border-slate-850">
                {factions.find(f => f.id === selectedFaction)?.name.split(' ')[0]}
              </span>
            </div>
            
            {availableHeroes.length > 0 ? (
              <div className="space-y-2">
                {availableHeroes.map((hero) => {
                  const isHeroSelected = selectedHero?.name === hero.name;
                  const heroImage = getHeroPortrait(heroPortraits, hero.name, hero.className, selectedFaction);
                  return (
                    <button
                      key={hero.name}
                      onClick={() => setSelectedHero(hero)}
                      className={`w-full p-3 rounded-2xl text-left border cursor-pointer transition flex items-center justify-between gap-3 ${
                        isHeroSelected
                          ? 'border-amber-500 bg-slate-950 text-slate-200 font-bold shadow-inner'
                          : 'bg-slate-950/40 border-slate-900 text-slate-500 hover:text-slate-300 hover:border-slate-800'
                      }`}
                    >
                      <div className="flex items-center gap-2.5 min-w-0">
                        <div className={`w-9 h-9 rounded-xl overflow-hidden shrink-0 border flex items-center justify-center relative bg-slate-950 shadow-sm ${
                          isHeroSelected 
                            ? hero.type === 'Poder' ? 'border-red-600/55' : 'border-sky-600/55'
                            : 'border-slate-800/80'
                        }`}>
                          <img 
                            src={heroImage}
                            alt={hero.name}
                            className={`w-full h-full object-cover select-none pointer-events-none ${
                              hero.name === 'Tarnum' && selectedFaction === 'conflujo'
                                ? 'scale-[1.35] origin-top'
                                : ''
                            }`}
                            referrerPolicy="no-referrer"
                            onError={(e) => {
                              const img = e.target as HTMLImageElement;
                              img.src = `https://api.dicebear.com/7.x/initials/svg?seed=${encodeURIComponent(hero.name)}&backgroundColor=0f172a,1e293b,334155&fontSize=38&bold=true`;
                            }}
                          />
                          <div className="absolute inset-0 flex items-center justify-center z-[-1]">
                            {hero.type === 'Poder' ? (
                              <Flame className={`w-4 h-4 ${isHeroSelected ? 'text-red-400' : 'text-slate-500'}`} />
                            ) : (
                              <Sparkles className={`w-4 h-4 ${isHeroSelected ? 'text-sky-400' : 'text-slate-500'}`} />
                            )}
                          </div>
                        </div>
                        <div className="min-w-0">
                          <span className={`block text-xs truncate ${isHeroSelected ? 'text-amber-400' : 'text-slate-350'}`}>
                            {hero.name}
                          </span>
                          <span className="block text-[10px] text-slate-500 font-mono leading-tight">
                            {hero.className}
                          </span>
                        </div>
                      </div>

                      {/* Pill Badge of type */}
                      <span className={`text-[10px] font-mono font-bold uppercase px-2 py-0.5 rounded-md border shrink-0 ${
                        hero.type === 'Poder'
                          ? 'bg-red-950/40 text-red-400 border-red-900/30'
                          : 'bg-sky-950/40 text-sky-400 border-sky-900/30'
                      }`}>
                        {hero.type}
                      </span>
                    </button>
                  );
                })}
              </div>
            ) : (
              <div className="py-8 text-center bg-slate-950/20 rounded-2xl border border-dashed border-slate-850">
                <p className="text-xs text-slate-500">No hay héroes que coincidan con el tipo filtrado.</p>
                <button 
                  onClick={() => setTypeFilter('Todos')}
                  className="mt-2 text-[10px] font-mono font-bold text-amber-500 hover:text-amber-400 underline"
                >
                  Restaurar filtros
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Right Hero Inspector Screen (col-span-7) */}
        <div className="lg:col-span-7">
          <AnimatePresence mode="wait">
            {selectedHero ? (
              <motion.div
                key={`${selectedFaction}-${selectedHero.name}`}
                initial={{ opacity: 0, y: 15, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -15, scale: 0.98 }}
                transition={{ duration: 0.25 }}
                className={`w-full rounded-3xl p-6 border relative overflow-hidden flex flex-col justify-between min-h-[580px] shadow-2xl transition-all duration-500 ${theme.border}`}
                style={{
                  background: theme.bgGradient
                }}
              >
                {/* Visual Faction Emblem watermark on back */}
                <div className="absolute right-[-40px] bottom-[-40px] opacity-[0.08] select-none pointer-events-none transform -rotate-12 transition-all duration-700 ease-out">
                  {renderFactionEmblem(selectedFaction, `w-[360px] h-[360px] ${theme.text}`)}
                </div>

                <div className="space-y-6">
                  {/* Hero Header Area */}
                  <div className="flex flex-col sm:flex-row items-start justify-between gap-4 border-b border-slate-800/80 pb-4">
                    <div className="flex items-start gap-4">
                      {/* Interactive Elegant Portrait */}
                      <div className="relative shrink-0">
                        <div className={`w-[86px] h-[86px] sm:w-[108px] sm:h-[108px] rounded-2xl overflow-hidden border-2 bg-slate-950 flex items-center justify-center shadow-xl transition-all duration-300 group ${
                          selectedHero.type === 'Poder' 
                            ? 'border-red-600/50 hover:border-red-500 shadow-red-950/20' 
                            : 'border-sky-600/50 hover:border-sky-500 shadow-sky-950/20'
                        }`}>
                          <img 
                            src={selectedHeroImage}
                            alt={selectedHero.name}
                            className={`w-full h-full object-cover select-none pointer-events-none transition-transform duration-500 ${
                              selectedHero.name === 'Tarnum' && selectedFaction === 'conflujo'
                                ? 'scale-[1.35] origin-top group-hover:scale-[1.45]'
                                : 'group-hover:scale-110'
                            }`}
                            referrerPolicy="no-referrer"
                            onError={(e) => {
                              (e.target as HTMLImageElement).src = `https://api.dicebear.com/7.x/initials/svg?seed=${encodeURIComponent(selectedHero.name)}&backgroundColor=0f172a,1e293b,334155&fontSize=38&bold=true`;
                            }}
                          />
                        </div>
                        <div className={`absolute -bottom-1 -right-1 w-6 h-6 rounded-lg border flex items-center justify-center bg-slate-950 shadow-md ${
                          selectedHero.type === 'Poder' ? 'border-red-900/60 text-red-400' : 'border-sky-900/60 text-sky-400'
                        }`}>
                          {selectedHero.type === 'Poder' ? <Flame className="w-3.5 h-3.5" /> : <Sparkles className="w-3.5 h-3.5" />}
                        </div>
                      </div>

                      <div className="space-y-1">
                        <div className="flex flex-wrap items-center gap-2">
                          <span className={`text-[10px] font-mono font-bold uppercase px-2 py-0.5 rounded-md border ${theme.badge}`}>
                            {factions.find(f => f.id === selectedFaction)?.name.split(' ')[0] || selectedFaction.toUpperCase()}
                          </span>
                          <span className={`text-[10px] font-mono font-bold uppercase px-2 py-0.5 rounded-md border flex items-center gap-1 ${
                            selectedHero.type === 'Poder' 
                              ? 'bg-red-950/50 text-red-400 border-red-900/30' 
                              : 'bg-sky-950/50 text-sky-400 border-sky-900/30'
                          }`}>
                            Héroe de {selectedHero.type}
                          </span>
                        </div>
                        <h3 className="text-xl sm:text-2xl font-serif font-extrabold text-white mt-1 tracking-wide uppercase drop-shadow">
                          {selectedHero.name}
                        </h3>
                        <div className="text-xs text-slate-400 font-mono">
                          Clase: <strong className="text-amber-400">{selectedHero.className}</strong>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 self-end sm:self-start shrink-0">
                      {/* Faction Emblem small badge */}
                      <div className={`w-10 h-10 rounded-2xl border border-slate-800/80 bg-slate-950/80 flex items-center justify-center ${theme.text} shadow-md`}>
                        {renderFactionEmblem(selectedFaction, "w-5 h-5")}
                      </div>
                      <div className={`w-10 h-10 rounded-2xl border flex items-center justify-center bg-slate-950/80 ${
                        selectedHero.type === 'Poder' ? 'border-red-900/50 text-red-400' : 'border-sky-900/50 text-sky-400'
                      }`}>
                        {selectedHero.type === 'Poder' ? <HandFist className="w-5 h-5" /> : <BookOpen className="w-5 h-5" />}
                      </div>
                    </div>
                  </div>

                  {/* Level Slider and Live Statistics Dashboard */}
                  <div className="bg-slate-950/60 rounded-2xl p-4.5 border border-slate-850/80 space-y-4">
                    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 border-b border-slate-900 pb-3">
                      <div>
                        <span className="text-[10px] uppercase font-mono tracking-wider text-slate-400 block font-semibold">
                          Progreso del Héroe
                        </span>
                        <h4 className="text-sm font-bold text-slate-100 flex items-center gap-1.5 mt-0.5">
                          <span>Nivel de Personaje:</span>
                          <span className="text-amber-400 font-mono text-base bg-amber-950/60 border border-amber-900/40 px-2 py-0.5 rounded">
                            {heroLevel}
                          </span>
                        </h4>
                      </div>

                      {/* Level Controls */}
                      <div className="flex items-center gap-1">
                        {[1, 2, 3, 4, 5, 6, 7].map((lvl) => (
                          <button
                            key={lvl}
                            onClick={() => setHeroLevel(lvl)}
                            className={`w-8 h-8 rounded-lg font-mono text-xs font-bold transition flex items-center justify-center cursor-pointer border ${
                              heroLevel === lvl
                                ? 'bg-amber-500 border-amber-400 text-slate-950 shadow-md font-extrabold'
                                : 'bg-slate-900 border-slate-800 text-slate-400 hover:text-slate-200'
                            }`}
                          >
                            {lvl}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Level Perks Indicators */}
                    <div className="grid grid-cols-2 gap-3 pt-1">
                      {/* Hand Limit Perk */}
                      <div className="bg-slate-950/50 border border-slate-900 rounded-2xl p-3 flex flex-col items-center justify-center text-center">
                        <div className="w-9 h-9 rounded-xl bg-indigo-950/40 border border-indigo-900/30 flex items-center justify-center text-indigo-400 mb-2">
                          <Layers className="w-4 h-4" />
                        </div>
                        <div>
                          <span className="text-[10px] uppercase font-mono text-slate-500 block">Límite de cartas en mano</span>
                          <span className="text-sm font-bold text-slate-200 font-mono block mt-0.5">
                            {getHandLimit(heroLevel)} cartas
                          </span>
                          <span className="text-[10px] text-slate-400 block leading-tight mt-1">
                            Al inicio de cada ronda
                          </span>
                        </div>
                      </div>

                      {/* Crowns Token perk */}
                      <div className="bg-slate-950/50 border border-slate-900 rounded-2xl p-3 flex flex-col items-center justify-center text-center">
                        <div className="w-9 h-9 rounded-xl bg-amber-950/40 border border-amber-900/30 flex items-center justify-center text-amber-400 mb-2 text-lg">
                          👑
                        </div>
                        <div>
                          <span className="text-[10px] uppercase font-mono text-slate-500 block">Coronas disponibles</span>
                          <span className="text-sm font-bold text-slate-200 font-mono block mt-0.5">
                            {getCrowns(heroLevel)} {getCrowns(heroLevel) === 1 ? 'Corona' : 'Coronas'}
                          </span>
                          <span className="text-[10px] text-slate-400 block leading-tight mt-1">
                            Activan Efecto Experto de Habilidades
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Attributes Grid (Las Características del Héroe) */}
                  <div className="space-y-4">
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <Layers className="w-4 h-4 text-amber-500 shrink-0" />
                        <span className="text-[12px] uppercase font-mono tracking-wider text-slate-200 font-bold">
                          Mazo Inicial (9 Cartas)
                        </span>
                      </div>
                      <p className="text-[10px] text-slate-400 leading-relaxed font-sans">
                        El mazo inicial del héroe es de <strong className="text-slate-200">9 cartas</strong> {selectedHero.type === 'Magia' ? (
                          <span>(<strong>5</strong> de Características, <strong>1</strong> de Habilidad inicial, <strong>1</strong> de Especialidad I y <strong>2</strong> de Hechizo 'Flecha Mágica').</span>
                        ) : (
                          <span>(<strong>6</strong> de Características, <strong>1</strong> de Habilidad inicial, <strong>1</strong> de Especialidad I y <strong>1</strong> de Hechizo 'Flecha Mágica').</span>
                        )}
                      </p>
                    </div>

                    <div className="space-y-2">
                      <div className="flex items-center gap-2 border-b border-slate-800/60 pb-1.5">
                        <Settings2 className="w-4 h-4 text-amber-500 shrink-0" />
                        <span className="text-[10px] uppercase font-mono tracking-wider text-slate-350 font-bold">Cartas de Características</span>
                      </div>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                      
                      {/* Attack */}
                      <div className="bg-slate-950/70 rounded-2xl p-3 border border-slate-900 text-center flex flex-col items-center justify-center group relative cursor-help">
                        <div className="w-8 h-8 rounded-xl bg-red-950/40 border border-red-900/30 flex items-center justify-center mb-1.5">
                          <Swords className="w-4 h-4 text-red-400" />
                        </div>
                        <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider block">Ataque</span>
                        <span className="text-lg font-mono font-bold text-red-400 mt-0.5">{selectedHero.stats.atk}</span>
                        <div className="mt-1 text-[10px] text-slate-400 leading-tight">
                          Daño Físico: <strong className="text-red-300">+1</strong> (+2 Mejorado)
                        </div>
                      </div>

                      {/* Defense */}
                      <div className="bg-slate-950/70 rounded-2xl p-3 border border-slate-900 text-center flex flex-col items-center justify-center group relative cursor-help">
                        <div className="w-8 h-8 rounded-xl bg-emerald-950/40 border border-emerald-900/30 flex items-center justify-center mb-1.5">
                          <Shield className="w-4 h-4 text-emerald-400" />
                        </div>
                        <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider block">Defensa</span>
                        <span className="text-lg font-mono font-bold text-emerald-400 mt-0.5">{selectedHero.stats.def}</span>
                        <div className="mt-1 text-[10px] text-slate-400 leading-tight">
                          Mitigación: <strong className="text-emerald-300">-1</strong> (-2 Mejorado)
                        </div>
                      </div>

                      {/* Spell Power */}
                      <div className="bg-slate-950/70 rounded-2xl p-3 border border-slate-900 text-center flex flex-col items-center justify-center group relative cursor-help">
                        <div className="w-8 h-8 rounded-xl bg-cyan-950/40 border border-cyan-900/30 flex items-center justify-center mb-1.5">
                          <Zap className="w-4 h-4 text-cyan-400" />
                        </div>
                        <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider block">Poder</span>
                        <span className="text-lg font-mono font-bold text-cyan-400 mt-0.5">{selectedHero.stats.power}</span>
                        <div className="mt-1 text-[10px] text-slate-400 leading-tight">
                          Potencia Magia: <strong className="text-cyan-300">+1</strong> (+2 Mejorado)
                        </div>
                      </div>

                      {/* Knowledge */}
                      <div className="bg-slate-950/70 rounded-2xl p-3 border border-slate-900 text-center flex flex-col items-center justify-center group relative cursor-help">
                        <div className="w-8 h-8 rounded-xl bg-purple-950/40 border border-purple-900/30 flex items-center justify-center mb-1.5">
                          <Brain className="w-4 h-4 text-purple-400" />
                        </div>
                        <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider block">Conocimiento</span>
                        <span className="text-lg font-mono font-bold text-purple-400 mt-0.5">{selectedHero.stats.knowledge}</span>
                        <div className="mt-1 text-[10px] text-slate-400 leading-tight">
                          Recuperar Hechizo (+1 Límite)
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                  {/* Skills & Specialties Split Section */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    
                    {/* Initial Skill Card Box */}
                    <div className="bg-slate-950/60 rounded-2xl p-4.5 border border-slate-850 space-y-3 flex flex-col justify-between">
                      <div className="space-y-2">
                        <div className="flex items-center gap-2 border-b border-slate-800/60 pb-1.5">
                          <Award className="w-4 h-4 text-amber-500 shrink-0" />
                          <span className="text-[10px] uppercase font-mono tracking-wider text-slate-350 font-bold">Carta de Habilidad Inicial</span>
                        </div>
                        <div>
                          <h4 className="text-sm font-semibold text-slate-100">{selectedHero.initialSkill.name}</h4>
                        </div>
                        
                        {/* Normal effect */}
                        <div className="bg-slate-950/80 border border-slate-900 p-2.5 rounded-xl space-y-1">
                          <div className="flex items-center justify-between">
                            <span className="text-[10px] font-mono uppercase bg-slate-900 text-slate-350 px-1.5 py-0.5 rounded border border-slate-800 font-bold">
                              Efecto Básico
                            </span>
                            <span className="text-[10px] font-mono text-slate-500">Uso normal</span>
                          </div>
                          <p className="text-[12px] text-slate-350 leading-relaxed font-sans">{selectedHero.initialSkill.normal}</p>
                        </div>

                        {/* Expert effect using crowns */}
                        <div className="bg-amber-950/20 border border-amber-900/20 p-2.5 rounded-xl space-y-1">
                          <div className="flex items-center justify-between">
                            <span className="text-[10px] font-mono uppercase bg-amber-950/60 text-amber-400 px-1.5 py-0.5 rounded border border-amber-900/40 font-bold flex items-center gap-1">
                              👑 Efecto Mejorado
                            </span>
                            <span className={`text-[10px] font-mono font-semibold ${getCrowns(heroLevel) > 0 ? 'text-amber-400' : 'text-slate-500'}`}>
                              Requiere 1 Corona {getCrowns(heroLevel) > 0 ? '(✓ Disponible)' : '(✗ Bloqueado)'}
                            </span>
                          </div>
                          <p className="text-[12px] text-amber-300 leading-relaxed font-sans">{selectedHero.initialSkill.expert}</p>
                        </div>
                      </div>
                    </div>

                    {/* Specialty Deck Card Box */}
                    <div className="bg-slate-950/60 rounded-2xl p-4.5 border border-slate-850 space-y-3 flex flex-col justify-between">
                      <div className="space-y-2">
                        <div className="flex items-center gap-2 border-b border-slate-800/60 pb-1.5">
                          <Star className="w-4 h-4 text-amber-500 shrink-0" />
                          <span className="text-[10px] uppercase font-mono tracking-wider text-slate-350 font-bold">Cartas de Especialidad (3 Niveles)</span>
                        </div>
                        <h4 className="text-sm font-semibold text-amber-400">{selectedHero.specialty.name}</h4>
                        
                        {/* Specialty cards listed progressive */}
                        <div className="space-y-2 max-h-[220px] overflow-y-auto pr-1">
                          {selectedHero.specialty.cards.map((card) => {
                            const isUnlocked = heroLevel >= card.level;
                            return (
                              <div 
                                key={card.level} 
                                className={`p-2 rounded-xl border transition ${
                                  isUnlocked 
                                    ? 'bg-amber-950/15 border-amber-900/40' 
                                    : 'bg-slate-950/40 border-slate-900 opacity-60'
                                }`}
                              >
                                <div className="flex items-center justify-between mb-1">
                                  <span className={`text-[10px] font-mono font-bold uppercase px-1.5 py-0.5 rounded ${
                                    isUnlocked 
                                      ? 'bg-amber-900/30 text-amber-300 border border-amber-800/30' 
                                      : 'bg-slate-900 text-slate-500'
                                  }`}>
                                    Nivel {card.level}
                                  </span>
                                  {isUnlocked ? (
                                    <span className="text-[10px] font-mono text-amber-400 flex items-center gap-1">
                                      <CheckCircle2 className="w-2.5 h-2.5" /> Activo
                                    </span>
                                  ) : (
                                    <span className="text-[10px] font-mono text-slate-500 flex items-center gap-1">
                                      <Lock className="w-2.5 h-2.5" /> Bloqueado (Nvl {card.level})
                                    </span>
                                  )}
                                </div>
                                <h5 className={`text-[10px] font-bold ${isUnlocked ? 'text-slate-100' : 'text-slate-500'}`}>
                                  {card.name}
                                </h5>
                                <p className={`whitespace-pre-line text-[10px] mt-0.5 leading-normal ${isUnlocked ? 'text-slate-350' : 'text-slate-500'}`}>
                                  {card.effect}
                                </p>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    </div>

                  </div>                                  

                  {/* Hechizo Flecha Mágica */}
                  <div className="bg-slate-950/60 rounded-2xl p-4.5 border border-slate-850 space-y-3 flex flex-col justify-between">
                    <div className="flex items-center gap-2 border-b border-slate-800/60 pb-1.5">
                      <Sparkles className="w-4 h-4 text-cyan-500 shrink-0" />
                      <span className="text-slate-350 block text-[10px] uppercase  font-mono tracking-wider font-bold">Cartas de Hechizo</span>
                    </div>
                    
                    <span className="text-sm font-semibold text-white-400 mt-1 flex items-center gap-1">
                      {selectedHero.type === 'Magia' ? '2 x ' : '1 x '}<strong className="text-cyan-400">Flecha Mágica</strong>
                    </span>
                    <span className="text-[10px] text-slate-400 leading-tight mt-1">
                      {selectedHero.type === 'Magia' 
                        ? 'Tipo Magia añade 2 cartas de Hechizo' 
                        : 'Tipo Poder añade 1 carta de Hechizo'}
                    </span>
                  </div>

                  {/* Lore Quote & Narrative Box */}
                  <div className="bg-slate-950/30 rounded-2xl p-4 border border-slate-900/40 space-y-2.5">
                    {selectedHero.quote && (
                      <div className="flex gap-2">
                        <Quote className="w-4 h-4 text-slate-600 shrink-0 mt-0.5" />
                        <p className="text-[12px] text-slate-350 italic leading-relaxed">
                          "{selectedHero.quote}"
                        </p>
                      </div>
                    )}
                    <div className="border-t border-slate-900/30 pt-2 flex gap-2">
                      <Info className="w-3.5 h-3.5 text-slate-500 shrink-0 mt-0.5" />
                      <p className="text-[10px] text-slate-400 leading-relaxed font-sans">
                        {selectedHero.lore}
                      </p>
                    </div>
                  </div>

                </div>

                {/* Footer block of the card */}
                <div className="border-t border-slate-800/60 pt-4 mt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-[10px] text-slate-400 leading-relaxed font-mono">
                  <div className="flex items-center gap-1.5">
                    <Compass className="w-4 h-4 text-amber-500 shrink-0" />
                    <span>Límite de Nivel de Héroe: <strong>Nivel 7</strong></span>
                  </div>
                  <div className="text-right text-slate-500">
                    <span>Héroes Oficiales del Juego de Mesa</span>
                  </div>
                </div>

              </motion.div>
            ) : (
              <div className="flex flex-col items-center justify-center text-center py-20 bg-slate-900/20 border border-slate-800/80 rounded-3xl min-h-[580px] p-8 space-y-4">
                <User className="w-16 h-16 text-slate-700 animate-pulse" />
                <div className="space-y-1">
                  <h3 className="text-lg font-bold text-slate-400 font-serif">Sandro no encuentra héroes</h3>
                  <p className="text-xs text-slate-500 max-w-sm">
                    Selecciona una facción de la barra lateral y un héroe disponible para visualizar sus características y habilidades tácticas completas.
                  </p>
                </div>
              </div>
            )}
          </AnimatePresence>
        </div>

      </div>
    </div>
  );
}
