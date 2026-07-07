import { useState, useMemo } from 'react';
import { rulesKB } from '../data/rulesKB';
import { RuleSection, Player } from '../types';
import { Search, BookOpen, Layers, Swords, MessageSquareCode, Package, Compass, Map, Home, Sparkles, Filter } from 'lucide-react';

const FACTION_LIST = [
  { id: 'castillo', name: 'Castillo (Castle)', color: 'border-blue-900/50 text-blue-300 bg-blue-950/40 hover:bg-blue-900/30', dotColor: 'bg-blue-500' },
  { id: 'necropolis', name: 'Necrópolis (Necropolis)', color: 'border-slate-700 text-slate-300 bg-slate-900/50 hover:bg-slate-800/50', dotColor: 'bg-slate-400' },
  { id: 'mazmorra', name: 'Mazmorra (Dungeon)', color: 'border-purple-900/50 text-purple-300 bg-purple-950/40 hover:bg-purple-900/30', dotColor: 'bg-purple-500' },
  { id: 'rampart', name: 'Murallas (Rampart)', color: 'border-emerald-900/50 text-emerald-300 bg-emerald-950/40 hover:bg-emerald-900/30', dotColor: 'bg-emerald-500' },
  { id: 'torre', name: 'Torre (Tower)', color: 'border-cyan-900/50 text-cyan-300 bg-cyan-950/40 hover:bg-cyan-900/30', dotColor: 'bg-cyan-500' },
  { id: 'infierno', name: 'Infierno (Inferno)', color: 'border-red-900/50 text-red-300 bg-red-950/40 hover:bg-red-900/30', dotColor: 'bg-red-500' },
  { id: 'stronghold', name: 'Bastión (Stronghold)', color: 'border-amber-900/50 text-amber-300 bg-amber-950/40 hover:bg-amber-900/30', dotColor: 'bg-amber-500' },
  { id: 'fortaleza', name: 'Fortaleza (Fortress)', color: 'border-teal-900/50 text-teal-300 bg-teal-950/40 hover:bg-teal-900/30', dotColor: 'bg-teal-500' },
  { id: 'confluencia', name: 'Confluencia (Conflux)', color: 'border-indigo-900/50 text-indigo-300 bg-indigo-950/40 hover:bg-indigo-900/30', dotColor: 'bg-indigo-500' },
  { id: 'cove', name: 'Bahía (Cove)', color: 'border-sky-900/50 text-sky-300 bg-sky-950/40 hover:bg-sky-900/30', dotColor: 'bg-sky-400' }
];

const FACTION_KEYWORDS: Record<string, string[]> = {
  castillo: ['castillo', 'castle', 'catherine', 'christian', 'valeska', 'adelaide', 'lord haart', 'rion', 'ingham', 'tarnum', 'espadachines', 'cruzados', 'establo', 'piqueros', 'ángeles', 'grial'],
  necropolis: ['necrópolis', 'necropolis', 'sandro', 'thant', 'clavius', 'charna', 'tamika', 'moandor', 'lord haart', 'vidomina', 'septienna', 'esqueletos', 'animar muertos', 'fantasmas', 'no-muertos', 'amplificador de nigromancia'],
  mazmorra: ['mazmorra', 'dungeon', 'mutare', 'gunnar', 'alamar', 'malekith', 'lorelei', 'jeddite', 'deemer', 'sephinroth', 'tarnum', 'dragón', 'dragones', 'vórtice de maná', 'arcanas', 'subterráneo'],
  rampart: ['murallas', 'rampart', 'gelu', 'kyrre', 'gem', 'elleshar', 'mephala', 'clancy', 'ivor', 'melodia', 'tarnum', 'elfo', 'elfos', 'tiradores', 'tesoro elfo', 'guardabosques'],
  torre: ['torre', 'tower', 'neela', 'torosar', 'solmyr', 'astral', 'josephine', 'iona', 'dracon', 'cyra', 'rayo en cadena', 'biblioteca', 'titanes', 'gigantes', 'golem', 'golems', 'hipnosis'],
  infierno: ['infierno', 'inferno', 'xeron', 'nymus', 'ayden', 'fiona', 'rashka', 'octavia', 'zydar', 'xyron', 'ash', 'diablos', 'sabuesos', 'cerberos', 'cerberi', 'efreet', 'gog', 'gogs', 'portales de fuego'],
  stronghold: ['bastión', 'bastion', 'stronghold', 'crag hack', 'shiva', 'gundula', 'terek', 'yog', 'dessa', 'tarnum', 'rocs', 'ogros', 'behemoth', 'behemoths', 'mercado de esclavos', 'orcos', 'goblins', 'fichas de apilamiento', 'stack tokens'],
  fortaleza: ['fortaleza', 'fortress', 'tazar', 'bron', 'andra', 'voy', 'gerwulf', 'wystan', 'adrienne', 'merist', 'tarnum', 'basiliscos', 'wyverns', 'jaulas de wyverns', 'hidras', 'gnolls', 'hombres lagarto'],
  confluencia: ['confluencia', 'conflux', 'lacus', 'ignissa', 'ciele', 'grindan', 'monere', 'erdamon', 'pasis', 'luna', 'tarnum', 'elemental', 'elementales', 'altar de los elementos', 'duendes', 'fénix', 'pergamino', 'pergaminos', 'scroll', 'scrolls'],
  cove: ['bahía', 'cove', 'jeremy', 'bidley', 'andria', 'anabel', 'cassiopeia', 'miriam', 'casmetra', 'zilare', 'astra', 'cañón', 'cannon', 'piratas', 'gremio de contrabandistas', 'corsarios', 'marítimas', 'savage seas']
};

const getPlayerFactionId = (player: any) => {
  if (!player || !player.name) return null;
  const lowerName = player.name.toLowerCase();
  if (lowerName.includes('castillo') || lowerName.includes('castle')) return 'castillo';
  if (lowerName.includes('necrópolis') || lowerName.includes('necropolis')) return 'necropolis';
  if (lowerName.includes('mazmorra') || lowerName.includes('dungeon')) return 'mazmorra';
  if (lowerName.includes('murallas') || lowerName.includes('rampart') || lowerName.includes('muralla')) return 'rampart';
  if (lowerName.includes('torre') || lowerName.includes('tower')) return 'torre';
  if (lowerName.includes('infierno') || lowerName.includes('inferno')) return 'infierno';
  if (lowerName.includes('bastión') || lowerName.includes('bastion') || lowerName.includes('stronghold')) return 'stronghold';
  if (lowerName.includes('fortaleza') || lowerName.includes('fortress')) return 'fortaleza';
  if (lowerName.includes('confluencia') || lowerName.includes('conflux')) return 'confluencia';
  if (lowerName.includes('bahía') || lowerName.includes('cove')) return 'cove';

  // Fallback to color matching if user customized name entirely
  if (player.color) {
    const c = player.color.toLowerCase();
    if (c.includes('blue')) return 'castillo';
    if (c.includes('slate') || c.includes('zinc') || c.includes('gray')) return 'necropolis';
    if (c.includes('purple')) return 'mazmorra';
    if (c.includes('emerald') || c.includes('green')) return 'rampart';
    if (c.includes('cyan')) return 'torre';
    if (c.includes('red') || c.includes('rose')) return 'infierno';
    if (c.includes('amber') || c.includes('orange')) return 'stronghold';
    if (c.includes('teal')) return 'fortaleza';
    if (c.includes('indigo')) return 'confluencia';
    if (c.includes('sky')) return 'cove';
  }
  return null;
};

export default function RulesBrowser({ 
  onSelectSection,
  players = []
}: { 
  onSelectSection?: (section: RuleSection) => void;
  players?: Player[];
}) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedFaction, setSelectedFaction] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'Todos', icon: Compass },
    { id: 'general', label: 'Mecánicas', icon: BookOpen },
    { id: 'components', label: 'Componentes', icon: Package },
    { id: 'setup', label: 'Preparación', icon: Layers },
    { id: 'map', label: 'Exploración y Mapa', icon: Map },
    { id: 'town', label: 'Ciudad y Recursos', icon: Home },
    { id: 'combat', label: 'Combate y Unidades', icon: Swords },
    { id: 'magic', label: 'Hechizos y Magia', icon: Sparkles },
    { id: 'modes', label: 'Modos y Campañas', icon: Compass },
    { id: 'faq', label: 'FAQs / Dudas', icon: MessageSquareCode },
  ];

  // Map active players to their recognized factions
  const activePlayersFactions = useMemo(() => {
    return players.map(p => {
      const factionId = getPlayerFactionId(p);
      return {
        player: p,
        factionId,
        factionInfo: factionId ? FACTION_LIST.find(f => f.id === factionId) : null
      };
    }).filter(item => item.factionId !== null);
  }, [players]);

  const filteredSections = useMemo(() => {
    return rulesKB.filter(section => {
      // 1. Matches Category
      const matchesCategory = selectedCategory === 'all' || section.category === selectedCategory;
      
      // 2. Matches Faction
      let matchesFaction = true;
      if (selectedFaction !== 'all') {
        const keywords = FACTION_KEYWORDS[selectedFaction] || [];
        const titleMatch = keywords.some(kw => section.title.toLowerCase().includes(kw));
        const contentMatch = keywords.some(kw => section.content.toLowerCase().includes(kw));
        matchesFaction = titleMatch || contentMatch;
      }

      // 3. Matches Search Query
      const matchesSearch = searchQuery === '' || 
        section.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        section.content.toLowerCase().includes(searchQuery.toLowerCase());

      return matchesCategory && matchesFaction && matchesSearch;
    });
  }, [selectedCategory, selectedFaction, searchQuery]);

  // Highlighting and Dimming Formatter
  const renderHighlightedContent = (content: string, factionId: string) => {
    if (factionId === 'all') {
      return (
        <p className="text-sm text-slate-300 leading-relaxed whitespace-pre-wrap font-sans">
          {content}
        </p>
      );
    }

    const keywords = FACTION_KEYWORDS[factionId] || [];
    const lines = content.split('\n');
    const otherFactions = Object.keys(FACTION_KEYWORDS).filter(id => id !== factionId);

    return (
      <div className="space-y-1.5 font-sans text-sm text-slate-300 leading-relaxed">
        {lines.map((line, idx) => {
          const lowerLine = line.toLowerCase();
          
          // Check if this line is specifically mentioning our faction or its keywords
          const isSelfMatch = keywords.some(kw => lowerLine.includes(kw));
          
          // Check if this line belongs explicitly to another faction
          const belongsToOtherFaction = otherFactions.some(otherId => {
            const otherKeywords = FACTION_KEYWORDS[otherId] || [];
            const firstWordOrBullet = lowerLine.trim();
            // Bullet or list headers
            if (firstWordOrBullet.startsWith('•') || firstWordOrBullet.startsWith('-') || /^\d+\./.test(firstWordOrBullet)) {
              const otherMainName = otherKeywords[0]; // e.g., 'castillo'
              const otherMainNameEn = otherKeywords[1]; // e.g., 'castle'
              return lowerLine.includes(`• ${otherMainName}`) || 
                     lowerLine.includes(`• ${otherMainNameEn}`) || 
                     lowerLine.includes(`${otherMainName.toUpperCase()}`) || 
                     lowerLine.includes(` ${otherMainName} `);
            }
            return false;
          });

          if (belongsToOtherFaction && !isSelfMatch) {
            return (
              <div 
                key={idx} 
                className="opacity-25 hover:opacity-80 transition-opacity duration-150 text-xs text-slate-500 pl-3 border-l border-slate-800/80 my-0.5"
                title="Haga clic o sitúe el cursor para ver la información de otra facción"
              >
                {line}
              </div>
            );
          }

          if (isSelfMatch) {
            return (
              <div 
                key={idx} 
                className="bg-amber-500/10 border-l-2 border-amber-500 pl-3 py-1 rounded-r text-slate-100 font-medium my-1 shadow-sm ring-1 ring-amber-500/5"
              >
                {line}
              </div>
            );
          }

          return (
            <div key={idx} className="pl-3 py-0.5">
              {line}
            </div>
          );
        })}
      </div>
    );
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 p-1">
      {/* Sidebar: Categories & Active Factions */}
      <div className="lg:col-span-1 space-y-4">
        {/* Categories Panel */}
        <div className="bg-slate-900 border border-amber-900/30 rounded-xl p-4 shadow-xl">
          <h3 className="text-amber-500 font-mono text-sm uppercase tracking-widest mb-3 border-b border-amber-900/20 pb-2">
            Categorías
          </h3>
          <div className="space-y-1">
            {categories.map((cat) => {
              const Icon = cat.icon;
              const isSelected = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 cursor-pointer ${
                    isSelected
                      ? 'bg-amber-950/40 text-amber-300 border-l-4 border-amber-500 pl-2'
                      : 'text-slate-400 hover:bg-slate-800/40 hover:text-slate-200'
                  }`}
                >
                  <Icon className={`w-4 h-4 ${isSelected ? 'text-amber-400' : 'text-slate-500'}`} />
                  <span>{cat.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Informative advice */}
        <div className="bg-slate-900/80 border border-slate-800 rounded-xl p-4 text-xs text-slate-500 space-y-2 leading-relaxed">
          <p className="font-semibold text-slate-400 flex items-center gap-1.5">
            <span>🔮</span> Consejo de Sandro:
          </p>
          <p>
            Al seleccionar un filtro de facción, las mecánicas irrelevantes de las otras ciudades se atenuarán de forma inteligente para que puedas focalizarte en tus propias cartas, héroes y construcciones.
          </p>
        </div>
      </div>

      {/* Rules Content area */}
      <div className="lg:col-span-3 space-y-4">
        {/* Search Header and Faction Filter Bar */}
        <div className="space-y-3">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 w-5 h-5" />
            <input
              type="text"
              placeholder="Buscar regla, carta, unidad, dificultad..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 bg-slate-900 border border-amber-950/40 rounded-xl text-slate-100 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-all font-sans text-sm"
            />
          </div>

          {/* Faction Quick Filters bar */}
          <div className="bg-slate-900 border border-amber-950/30 rounded-xl p-4 space-y-3">
            {/* Active Players shortcuts */}
            {activePlayersFactions.length > 0 && (
              <div className="space-y-2">
                <span className="text-[10px] font-mono uppercase tracking-wider text-amber-500/70 block font-semibold">
                  👑 Ciudades Seleccionadas en Partida:
                </span>
                <div className="flex flex-wrap items-center gap-2">
                  {activePlayersFactions.map(({ player, factionId, factionInfo }) => {
                    if (!factionInfo) return null;
                    const isSelected = selectedFaction === factionId;
                    return (
                      <button
                        key={player.id}
                        onClick={() => setSelectedFaction(isSelected ? 'all' : (factionId || 'all'))}
                        className={`px-3 py-1.5 rounded-lg border text-xs font-medium transition-all duration-200 flex items-center gap-2 cursor-pointer ${
                          isSelected
                            ? 'bg-amber-500/20 border-amber-500 text-amber-200 ring-2 ring-amber-500/30 shadow-[0_0_12px_rgba(245,158,11,0.2)]'
                            : 'bg-slate-950/60 border-slate-800 hover:border-slate-700 text-slate-300'
                        }`}
                      >
                        <span className={`w-2 h-2 rounded-full ${factionInfo.dotColor} animate-pulse`} />
                        <span className="opacity-80 text-[10px] font-mono">{player.name.split(' (')[0]}:</span>
                        <span className="font-semibold">{factionInfo.name.split(' (')[0]}</span>
                      </button>
                    );
                  })}
                </div>
              </div>
            )}

            {/* All Factions Row Grid */}
            <div className={`space-y-2 ${activePlayersFactions.length > 0 ? 'border-t border-slate-800/60 pt-2.5' : ''}`}>
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-mono uppercase tracking-wider text-slate-500 font-semibold flex items-center gap-1">
                  <Filter className="w-3 h-3 text-amber-500" />
                  Filtrar por cualquiera de las 10 Facciones:
                </span>
                {selectedFaction !== 'all' && (
                  <button 
                    onClick={() => setSelectedFaction('all')}
                    className="text-[10px] text-amber-500 hover:underline font-mono"
                  >
                    [Borrar Filtro]
                  </button>
                )}
              </div>
              
              <div className="grid grid-cols-2 sm:grid-cols-5 gap-1.5 pt-1">
                <button
                  onClick={() => setSelectedFaction('all')}
                  className={`px-2 py-1.5 rounded-lg text-xs font-medium transition-all cursor-pointer border text-center ${
                    selectedFaction === 'all'
                      ? 'bg-amber-500 border-amber-500 text-slate-950 font-semibold shadow-md'
                      : 'bg-slate-950/60 border-slate-800 text-slate-400 hover:text-slate-200 hover:border-slate-750'
                  }`}
                >
                  Todas las Ciudades
                </button>
                {FACTION_LIST.map((faction) => {
                  const isSelected = selectedFaction === faction.id;
                  return (
                    <button
                      key={faction.id}
                      onClick={() => setSelectedFaction(faction.id)}
                      className={`px-2 py-1.5 rounded-lg text-xs font-medium transition-all cursor-pointer border text-center truncate ${
                        isSelected
                          ? 'bg-amber-950 border-amber-500 text-amber-200 shadow-md font-semibold ring-1 ring-amber-500/20'
                          : 'bg-slate-950/30 border-slate-850/60 text-slate-400 hover:text-slate-200 hover:border-slate-800'
                      }`}
                      title={faction.name}
                    >
                      {faction.name.split(' (')[0]}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* List of rules */}
        <div className="space-y-4 max-h-[70vh] overflow-y-auto pr-1">
          {filteredSections.length > 0 ? (
            filteredSections.map((section) => (
              <div 
                key={section.id} 
                className="bg-slate-900/90 border border-amber-950/20 hover:border-amber-800/40 rounded-xl p-5 shadow-lg space-y-3 transition-colors duration-200"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-800/50 pb-2">
                  <h4 className="text-lg font-serif font-medium text-amber-200 tracking-tight flex items-center gap-2">
                    <span>📚</span> {section.title}
                  </h4>
                  <div className="flex items-center gap-2">
                    <span className="px-2 py-0.5 rounded text-[10px] font-mono uppercase bg-slate-800 text-amber-400 border border-amber-900/30">
                      {section.category}
                    </span>
                    {onSelectSection && (
                      <button
                        onClick={() => onSelectSection(section)}
                        className="px-2.5 py-1 bg-amber-950/60 hover:bg-amber-900/80 text-amber-400 hover:text-amber-100 rounded text-xs transition duration-200 cursor-pointer font-medium"
                      >
                        Preguntar a Sandro 🔮
                      </button>
                    )}
                  </div>
                </div>
                
                {/* Dynamically highlight based on selected faction */}
                {renderHighlightedContent(section.content, selectedFaction)}
              </div>
            ))
          ) : (
            <div className="text-center py-12 bg-slate-900/50 rounded-xl border border-slate-800">
              <Search className="w-12 h-12 text-slate-700 mx-auto mb-3" />
              <p className="text-slate-400 text-sm">No se encontraron manuales que coincidan con la búsqueda o el filtro de facción seleccionado.</p>
              <button 
                onClick={() => { setSearchQuery(''); setSelectedCategory('all'); setSelectedFaction('all'); }}
                className="mt-2 text-amber-500 text-xs font-semibold hover:underline cursor-pointer"
              >
                Restablecer todos los filtros
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
