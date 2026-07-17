import React, { useState, useMemo } from 'react';
import { 
  Search, Swords, Flame, Compass, Coins, Sparkles, 
  Users, Award, ChevronRight, HelpCircle, Layers, BookOpen, Filter, ArrowUpDown,
  TrendingUp, HeartPlus
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { FACTION_HEROES } from '../data/heroesData';
import { ALL_BOARD_GAME_SKILLS, NORMALIZE_SKILL_NAME } from '../data/skillsData';

// Custom interface for enriched skill
interface EnrichedSkill {
  name: string;
  normal: string;
  expert: string;
  category: 'Combate' | 'Magia' | 'Aventura' | 'Economía' | 'Desarrollo' | 'Apoyo';
  description: string;
  heroes: Array<{
    name: string;
    factionId: string;
    factionName: string;
    className: string;
  }>;
}

// Map of Faction ID to Spanish name
const FACTION_NAMES: Record<string, string> = {
  castillo: 'Castillo (Castle)',
  necropolis: 'Necrópolis (Necropolis)',
  mazmorra: 'Mazmorra (Dungeon)',
  murallas: 'Murallas (Rampart)',
  torre: 'Torre (Tower)',
  inferno: 'Inferno (Inferno)',
  bastion: 'Bastión (Stronghold)',
  fortaleza: 'Fortaleza (Fortress)',
  conflujo: 'Conflujo (Conflux)',
  cala: 'Cala (Cove)'
};

// Master Static Database of ALL 32 Board Game Skills with exact official card mechanics

export default function SkillsBrowser() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('Todas');
  const [sortBy, setSortBy] = useState<'name' | 'heroesCount'>('name');

  // Aggregated skills list dynamically parsed with linked heroes
  const skillsList = useMemo(() => {
    // Clone our master static database
    const list: EnrichedSkill[] = ALL_BOARD_GAME_SKILLS.map(skill => ({
      ...skill,
      heroes: []
    }));

    // Scan heroes database to find matches
    Object.entries(FACTION_HEROES).forEach(([factionId, heroes]) => {
      heroes.forEach((hero) => {
        if (hero.initialSkill && hero.initialSkill.name) {
          const rawName = hero.initialSkill.name.trim();
          const normalizedName = NORMALIZE_SKILL_NAME[rawName] || rawName;

          // Find matching skill in the clone list
          const targetSkill = list.find(s => s.name.toLowerCase() === normalizedName.toLowerCase());
          if (targetSkill) {
            const heroLink = {
              name: hero.name,
              factionId,
              factionName: FACTION_NAMES[factionId] || factionId,
              className: hero.className
            };

            // Avoid duplicate hero links
            if (!targetSkill.heroes.some(h => h.name === hero.name)) {
              targetSkill.heroes.push(heroLink);
            }
          }
        }
      });
    });

    // Sort according to selection
    if (sortBy === 'name') {
      return [...list].sort((a, b) => a.name.localeCompare(b.name, 'es'));
    } else {
      return [...list].sort((a, b) => b.heroes.length - a.heroes.length);
    }
  }, [sortBy]);

  // Filter skills based on search and category
  const filteredSkills = useMemo(() => {
    return skillsList.filter(skill => {
      const matchesSearch = 
        skill.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        skill.normal.toLowerCase().includes(searchTerm.toLowerCase()) ||
        skill.expert.toLowerCase().includes(searchTerm.toLowerCase()) ||
        skill.description.toLowerCase().includes(searchTerm.toLowerCase());
      
      const matchesCategory = selectedCategory === 'Todas' || skill.category === selectedCategory;

      return matchesSearch && matchesCategory;
    });
  }, [skillsList, searchTerm, selectedCategory]);

  // Category counts for UI badges
  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = { Todas: skillsList.length };
    skillsList.forEach(skill => {
      counts[skill.category] = (counts[skill.category] || 0) + 1;
    });
    return counts;
  }, [skillsList]);

  // Get style configs for categories
  const getCategoryTheme = (category: string) => {
    switch (category) {
      case 'Combate':
        return {
          bg: 'bg-red-950/40',
          border: 'border-red-900/40',
          text: 'text-red-400',
          badge: 'bg-red-500/10 text-red-400 border-red-500/20',
          icon: Swords
        };
      case 'Magia':
        return {
          bg: 'bg-violet-950/40',
          border: 'border-violet-900/40',
          text: 'text-violet-400',
          badge: 'bg-violet-500/10 text-violet-400 border-violet-500/20',
          icon: Flame
        };
      case 'Aventura':
        return {
          bg: 'bg-emerald-950/40',
          border: 'border-emerald-900/40',
          text: 'text-emerald-400',
          badge: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20',
          icon: Compass
        };
      case 'Economía':
        return {
          bg: 'bg-amber-950/40',
          border: 'border-amber-900/40',
          text: 'text-amber-400',
          badge: 'bg-amber-500/10 text-amber-400 border-amber-500/20',
          icon: Coins
        };
      case 'Desarrollo':
        return {
          bg: 'bg-blue-950/40',
          border: 'border-blue-900/40',
          text: 'text-blue-400',
          badge: 'bg-blue-500/10 text-blue-400 border-blue-500/20',
          icon: TrendingUp
        };
      case 'Apoyo':
        return {
          bg: 'bg-pink-950/40',
          border: 'border-pink-900/40',
          text: 'text-pink-400',
          badge: 'bg-pink-500/10 text-pink-400 border-pink-500/20',
          icon: HeartPlus
        };
      default:
        return {
          bg: 'bg-slate-900/40',
          border: 'border-slate-800',
          text: 'text-slate-400',
          badge: 'bg-slate-500/10 text-slate-400 border-slate-500/20',
          icon: HelpCircle
        };
    }
  };

  return (
    <div className="space-y-6" id="skills-browser-container">
      {/* Intro Block */}
      <div className="bg-slate-900/40 border border-slate-800 rounded-2xl p-5" id="skills-intro-card">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="space-y-1">
            <h2 className="text-xl font-bold text-amber-400 tracking-wide flex items-center gap-2">
              <Award className="w-5 h-5 text-amber-500" />
              Enciclopedia de Habilidades del Juego de Mesa
            </h2>
            <p className="text-xs text-slate-400 leading-relaxed max-w-2xl">
              Navega por la baraja de habilidades del juego de mesa oficial de <strong>Heroes of Might & Magic III</strong>. Consulta los efectos de las cartas en sus modos <strong>Básico</strong> y <strong>Experto</strong> tal y como están descritos en el reglamento de juego en español.
            </p>
          </div>
          <div className="flex items-center gap-2 shrink-0 bg-slate-950/60 border border-slate-800/80 rounded-xl px-3 py-1.5 self-start md:self-auto">
            <span className="text-[10px] font-mono text-slate-500">HABILIDADES OFICIALES:</span>
            <span className="text-xs font-mono font-bold text-amber-500">{skillsList.length}</span>
          </div>
        </div>
      </div>

      {/* Search and Filters Bento Controls */}
      <div className="bg-slate-900/30 border border-slate-850 rounded-2xl p-4 md:p-5 space-y-4 shadow-lg shadow-black/20" id="skills-controls">
        <div className="flex flex-col md:flex-row gap-4 items-stretch">
          
          {/* Search Box */}
          <div className="relative flex-1">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4.5 h-4.5 text-slate-500" />
            <input
              type="text"
              id="skill-search-input"
              placeholder="Buscar por nombre, efecto básico, experto o palabra clave..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-slate-950/80 border border-slate-800 focus:border-amber-500/60 rounded-xl pl-11 pr-4 py-2.5 text-sm text-slate-200 placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-amber-500/20 transition-all duration-150"
            />
            {searchTerm && (
              <button
                onClick={() => setSearchTerm('')}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 text-xs text-slate-500 hover:text-slate-300 font-semibold px-1.5 py-0.5 rounded bg-slate-800 cursor-pointer"
              >
                Limpiar
              </button>
            )}
          </div>

          {/* Sorter Dropdown */}
          <div className="flex items-center gap-3 bg-slate-950/40 border border-slate-800 rounded-xl px-3 py-1.5 self-start md:self-auto">
            <ArrowUpDown className="w-4 h-4 text-slate-500 shrink-0" />
            <span className="text-xs text-slate-400 font-medium">Ordenar por:</span>
            <select
              id="skill-sort-select"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as any)}
              className="bg-transparent text-xs text-amber-400 font-bold focus:outline-none cursor-pointer pr-2 border-none"
            >
              <option value="name">Alfabético (A-Z)</option>
              <option value="heroesCount">Héroes iniciales (Frecuencia)</option>
            </select>
          </div>
        </div>

        {/* Category Tabs */}
        <div className="border-t border-slate-800/40 pt-4 flex flex-wrap gap-2">
          {(['Todas', 'Combate', 'Magia', 'Aventura', 'Economía', 'Desarrollo', 'Apoyo'] as const).map((cat) => {
            const isActive = selectedCategory === cat;
            const count = categoryCounts[cat] || 0;
            
            // Icon
            let CatIcon = HelpCircle;
            if (cat === 'Combate') CatIcon = Swords;
            if (cat === 'Magia') CatIcon = Flame;
            if (cat === 'Aventura') CatIcon = Compass;
            if (cat === 'Economía') CatIcon = Coins;
            if (cat === 'Desarrollo') CatIcon = TrendingUp;
            if (cat === 'Apoyo') CatIcon = HeartPlus;
            if (cat === 'Todas') CatIcon = Filter;

            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-semibold border transition-all duration-200 cursor-pointer ${
                  isActive
                    ? 'bg-amber-600 border-amber-500 text-white shadow-md shadow-amber-950/30 transform scale-[1.02]'
                    : 'bg-slate-950/40 border-slate-850 text-slate-400 hover:bg-slate-800/40 hover:text-slate-200'
                }`}
              >
                <CatIcon className={`w-3.5 h-3.5 ${isActive ? 'text-white' : 'text-slate-500'}`} />
                <span>{cat}</span>
                <span className={`text-[10px] px-1.5 py-0.25 rounded-md font-mono ${isActive ? 'bg-amber-800/80 text-amber-200' : 'bg-slate-900 text-slate-500'}`}>
                  {count}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Active filters status */}
      {(searchTerm || selectedCategory !== 'Todas') && (
        <div className="flex items-center justify-between text-xs text-slate-400 bg-slate-950/20 px-4 py-2.5 rounded-xl border border-slate-900/60">
          <div className="flex items-center gap-1.5">
            <span>Resultados:</span>
            <strong className="text-amber-500 font-mono font-bold">{filteredSkills.length}</strong>
            <span>habilidad(es) encontrada(s)</span>
            {selectedCategory !== 'Todas' && (
              <span className="bg-slate-800 px-2 py-0.5 rounded-md text-[10px] text-slate-300 uppercase font-bold tracking-wider">
                {selectedCategory}
              </span>
            )}
          </div>
          <button
            onClick={() => {
              setSearchTerm('');
              setSelectedCategory('Todas');
            }}
            className="text-amber-400 hover:text-amber-300 font-bold hover:underline transition-all cursor-pointer"
          >
            Restablecer Filtros
          </button>
        </div>
      )}

      {/* Main Grid View */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6" id="skills-grid">
        <AnimatePresence mode="popLayout">
          {filteredSkills.map((skill, index) => {
            const theme = getCategoryTheme(skill.category);
            const IconComponent = theme.icon;

            return (
              <motion.div
                key={skill.name}
                layout
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.2, delay: Math.min(index * 0.03, 0.3) }}
                className="bg-slate-900/30 border border-slate-850/80 rounded-2xl p-5 hover:border-slate-700/80 hover:bg-slate-900/55 transition-all duration-200 shadow-lg shadow-black/10 flex flex-col justify-between"
                style={{ contentVisibility: 'auto' }}
              >
                <div className="space-y-4">
                  
                  {/* Card Header */}
                  <div className="flex items-start justify-between gap-2 border-b border-slate-800/40 pb-3">
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <h3 className="text-base font-bold text-slate-100 tracking-wide">
                          {skill.name}
                        </h3>
                        <span className={`text-[10px] px-2 py-0.5 rounded-full font-bold uppercase tracking-wider border ${theme.badge}`}>
                          {skill.category}
                        </span>
                      </div>
                      <p className="text-xs text-slate-400 leading-relaxed pr-2">
                        {skill.description}
                      </p>
                    </div>
                    
                    <div className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 border border-slate-800 ${theme.bg}`}>
                      <IconComponent className={`w-4.5 h-4.5 ${theme.text}`} />
                    </div>
                  </div>

                  {/* Effects Breakdown */}
                  <div className="space-y-3">
                    {/* Basic effect */}
                    <div className="bg-slate-950/60 border border-slate-850 p-3 rounded-xl space-y-1">
                      <div className="flex items-center gap-1.5 text-[11px] uppercase font-bold text-slate-400 tracking-wider">
                        <span className="w-2 h-2 rounded-full bg-slate-500"></span>
                        Efecto Básico
                      </div>
                      <p className="text-xs text-slate-200 leading-relaxed whitespace-pre-line">
                        {skill.normal}
                      </p>
                    </div>

                    {/* Expert effect */}
                    <div className="bg-amber-950/10 border border-amber-900/30 p-3 rounded-xl space-y-1">
                      <div className="flex items-center gap-1.5 text-[11px] uppercase font-bold text-amber-500 tracking-wider">
                        <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse"></span>
                        Efecto Experto
                      </div>
                      <p className="text-xs text-amber-200 leading-relaxed whitespace-pre-line">
                        {skill.expert}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Heroes starting with this skill */}
                <div className="mt-5 pt-3.5 border-t border-slate-850/60 flex flex-col gap-2">
                  <div className="flex items-center gap-1.5 text-[10px] font-mono text-slate-500 uppercase">
                    <Users className="w-3.5 h-3.5" />
                    <span>Héroes Iniciales ({skill.heroes.length})</span>
                  </div>
                  {skill.heroes.length > 0 ? (
                    <div className="flex flex-wrap gap-1.5 max-h-[120px] overflow-y-auto pr-1">
                      {skill.heroes.map((hero) => (
                        <div
                          key={hero.name}
                          className="bg-slate-950/70 hover:bg-slate-800/50 border border-slate-850 px-2 py-1 rounded-lg text-[10px] text-slate-300 flex items-center gap-1.5 transition-all duration-150"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-amber-500/80"></span>
                          <span className="font-medium text-slate-200">{hero.name}</span>
                          <span className="text-slate-500 border-l border-slate-800 pl-1">{hero.className.split(' (')[0]}</span>
                          <span className="text-[9px] text-amber-500/70 font-bold">({hero.factionName.split(' (')[0]})</span>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="text-[10px] text-slate-500 italic">
                      Adquirible durante la partida (ningún héroe comienza con ella)
                    </div>
                  )}
                </div>

              </motion.div>
            );
          })}
        </AnimatePresence>

        {filteredSkills.length === 0 && (
          <div className="col-span-1 md:col-span-2 py-16 text-center space-y-3" id="skills-empty-state">
            <div className="w-12 h-12 bg-slate-900 border border-slate-800 rounded-2xl flex items-center justify-center mx-auto text-slate-600">
              <Search className="w-6 h-6" />
            </div>
            <div className="space-y-1">
              <p className="text-sm font-bold text-slate-300">No se encontraron habilidades</p>
              <p className="text-xs text-slate-500 max-w-sm mx-auto">
                No hay resultados que coincidan con &quot;{searchTerm}&quot; o con el filtro seleccionado. Intenta buscar otra palabra clave.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
