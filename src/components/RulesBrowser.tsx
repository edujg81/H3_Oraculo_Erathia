import { useState, useMemo } from 'react';
import { rulesKB } from '../data/rulesKB';
import { RuleSection } from '../types';
import { Search, BookOpen, Layers, Swords, MessageSquareCode, Package, Compass, Map, Home, Sparkles } from 'lucide-react';

export default function RulesBrowser({ 
  onSelectSection
}: { 
  onSelectSection?: (section: RuleSection) => void;
}) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

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

  const filteredSections = useMemo(() => {
    return rulesKB.filter(section => {
      // 1. Matches Category
      const matchesCategory = selectedCategory === 'all' || section.category === selectedCategory;
      
      // 2. Matches Search Query
      const matchesSearch = searchQuery === '' || 
        section.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        section.content.toLowerCase().includes(searchQuery.toLowerCase());

      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 p-1">
      {/* Sidebar: Categories */}
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
      </div>

      {/* Rules Content area */}
      <div className="lg:col-span-3 space-y-4">
        {/* Search Header */}
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
                
                <p className="text-sm text-slate-300 leading-relaxed whitespace-pre-wrap font-sans">
                  {section.content}
                </p>
              </div>
            ))
          ) : (
            <div className="text-center py-12 bg-slate-900/50 rounded-xl border border-slate-800">
              <Search className="w-12 h-12 text-slate-700 mx-auto mb-3" />
              <p className="text-slate-400 text-sm">No se encontraron manuales que coincidan con la búsqueda.</p>
              <button 
                onClick={() => { setSearchQuery(''); setSelectedCategory('all'); }}
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
