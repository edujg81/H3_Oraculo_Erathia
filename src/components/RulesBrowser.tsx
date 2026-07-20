import React, { useState, useMemo } from 'react';
import { rulesKB } from '../data/rulesKB';
import { RuleSection } from '../types';
import { 
  Search, BookOpen, Layers, Swords, MessageSquareCode, Package, Compass, 
  Map, Home, Sparkles, HelpCircle, Coins, Trees, Hammer, Gem, Flame, Shield, Star,
  Zap, Plus, Droplet,
Heart
} from 'lucide-react';

function highlightKeywords(text: string): React.ReactNode {
  if (!text) return "";

  // Identify if the whole line is an army setup list or similar tier-focused description
  const isArmySetupLine = /^(?:•\s*|-?\s*)(?:Fácil|Normal|Difícil|Imposible):/i.test(text) || 
                          /Tropa\s+(?:Fácil|Normal|Difícil|Imposible)/i.test(text);

  // Split regex containing all key terms as a single outer capturing group with strict Spanish letter boundaries
  const regex = /(?<![a-zA-ZáéíóúüñÁÉÍÓÚÜÑ])(\*\*[^*]+\*\*|\*[^*]+\*|_[^_]+_|Bronce\/Plata\/Oro|Tier\s+III\/Oro\s+y\s+Azur|Bronce\/Plata|Plata\/Oro|Plata\s+y\s+Oro|Bronce,\s+Plata\s+y\s+Oro|(?:rango|tier|nivel|unidades|unidad|tropas|tropa|ejércitos|ejército|barajas|baraja|cartas|carta|viviendas|vivienda|criaturas|criatura|mazos|mazo)\s+(?:de\s+)?(?:oro|bronce|plata|azul|azur)|Tier\s+(?:I\s+\()?Bronce\)?|Tier\s+(?:II\s+\()?Plata\)?|Tier\s+(?:III\s+\()?Oro\)?|Tier\s+(?:IV\s+\()?Azul\)?|Tier\s+(?:IV\s+\()?Azur\)?|Bronce|Plata|Azur|Materiales de construcción|Material de construcción|Materiales|Mineral|Madera|Objetos de Valor|Objeto de Valor|Valiosos|Castillo|Necrópolis|Necropolis|Mazmorra|Torre|Murallas|Fortaleza|Inferno|Infierno|Bastión|Bastion|Conflujo|Confluencia|Cala|Ataque|Defensa|Poder|Conocimiento|Iniciativa|Puntos de Salud|Salud|Vida|Puntos de Movimiento|PM|Movimiento|Monedas de oro|Moneda de oro|Oro|Heridas|Herida)(?![a-zA-ZáéíóúüñÁÉÍÓÚÜÑ])/gui;

  const parts = text.split(regex);

  return parts.map((part, i) => {
    if (!part) return null;

    // If it's an even index, it's unmatched text. Return it directly as raw string.
    if (i % 2 === 0) {
      return part;
    }

    // Check if part matches markdown bold
    if (part.startsWith('**') && part.endsWith('**')) {
      return (
        <strong key={i} className="text-amber-200 font-bold">
          {part.slice(2, -2)}
        </strong>
      );
    }

    // Check if part matches markdown italic
    if ((part.startsWith('*') && part.endsWith('*')) || (part.startsWith('_') && part.endsWith('_'))) {
      return (
        <em key={i} className="text-slate-400 italic font-serif">
          {part.slice(1, -1)}
        </em>
      );
    }

    const lower = part.toLowerCase();

    // 1. Mixed Tier patterns
    if (/Bronce\/Plata\/Oro|Tier\s+III\/Oro\s+y\s+Azur|Bronce\/Plata|Plata\/Oro|Plata\s+y\s+Oro|Bronce,\s+Plata\s+y\s+Oro/i.test(part)) {
      const subParts = part.split(/(bronce|plata|oro|azur|azul)/gi);
      return (
        <span key={i} className="inline-flex items-center gap-1 flex-wrap">
          {subParts.map((sp, idx) => {
            const splow = sp.toLowerCase();
            if (splow === 'bronce') {
              return (
                <span key={idx} className="text-[#cd7f32] font-bold inline-flex items-center gap-1 shrink-0">
                  <Star className="w-3.5 h-3.5 text-[#cd7f32] fill-[#cd7f32] inline" />
                  <span>Bronce</span>
                </span>
              );
            }
            if (splow === 'plata') {
              return (
                <span key={idx} className="text-slate-300 font-bold inline-flex items-center gap-1 shrink-0">
                  <Star className="w-3.5 h-3.5 text-slate-400 fill-slate-400 inline" />
                  <span>Plata</span>
                </span>
              );
            }
            if (splow === 'oro') {
              return (
                <span key={idx} className="text-amber-400 font-bold inline-flex items-center gap-1 shrink-0">
                  <Star className="w-3.5 h-3.5 text-yellow-500 fill-yellow-500 inline" />
                  <span>Oro</span>
                </span>
              );
            }
            if (splow === 'azur' || splow === 'azul') {
              return (
                <span key={idx} className="text-blue-400 font-bold inline-flex items-center gap-1 shrink-0">
                  <Star className="w-3.5 h-3.5 text-blue-500 fill-blue-500 inline" />
                  <span>{sp}</span>
                </span>
              );
            }
            return <span key={idx} className="text-slate-300">{sp}</span>;
          })}
        </span>
      );
    }

    // 2. Specific Tier phrases (e.g. "unidad de oro", "Tier III (Oro)")
    const hasTierIndicator = /tier|rango|nivel|vivienda|unidad|tropa|ejército|baraja|carta|criatura|mazo/i.test(part);
    if (hasTierIndicator || isArmySetupLine) {
      if (lower.endsWith('bronce') || lower.includes('bronce')) {
        return (
          <span key={i} className="text-[#cd7f32] font-bold inline-flex items-center gap-1 shrink-0">
            <Star className="w-3.5 h-3.5 text-[#cd7f32] fill-[#cd7f32] inline" />
            <span>{part}</span>
          </span>
        );
      }
      if (lower.endsWith('plata') || lower.includes('plata')) {
        return (
          <span key={i} className="text-slate-300 font-bold inline-flex items-center gap-1 shrink-0">
            <Star className="w-3.5 h-3.5 text-slate-400 fill-slate-400 inline" />
            <span>{part}</span>
          </span>
        );
      }
      if (lower.endsWith('oro') || lower.includes('oro')) {
        return (
          <span key={i} className="text-amber-400 font-bold inline-flex items-center gap-1 shrink-0">
            <Star className="w-3.5 h-3.5 text-yellow-500 fill-yellow-500 inline" />
            <span>{part}</span>
          </span>
        );
      }
      if (lower.endsWith('azur') || lower.includes('azur') || lower.endsWith('azul') || lower.includes('azul')) {
        return (
          <span key={i} className="text-blue-400 font-bold inline-flex items-center gap-1 shrink-0">
            <Star className="w-3.5 h-3.5 text-blue-500 fill-blue-500 inline" />
            <span>{part}</span>
          </span>
        );
      }
    }

    // 3. Standalone Tiers (always stars, except Oro which defaults to resource unless in tier context)
    if (lower === 'bronce') {
      return (
        <span key={i} className="text-[#cd7f32] font-bold inline-flex items-center gap-1 shrink-0">
          <Star className="w-3.5 h-3.5 text-[#cd7f32] fill-[#cd7f32] inline" />
          <span>{part}</span>
        </span>
      );
    }
    if (lower === 'plata') {
      return (
        <span key={i} className="text-slate-300 font-bold inline-flex items-center gap-1 shrink-0">
          <Star className="w-3.5 h-3.5 text-slate-400 fill-slate-400 inline" />
          <span>{part}</span>
        </span>
      );
    }
    if (lower === 'azur') {
      return (
        <span key={i} className="text-blue-400 font-bold inline-flex items-center gap-1 shrink-0">
          <Star className="w-3.5 h-3.5 text-blue-500 fill-blue-500 inline" />
          <span>{part}</span>
        </span>
      );
    }

    // 4. Resources
    if (['oro', 'moneda de oro', 'monedas de oro'].includes(lower)) {
      return (
        <span key={i} className="text-amber-400 font-bold inline-flex items-center gap-1 shrink-0">
          <Coins className="w-3.5 h-3.5 text-amber-500 inline" />
          <span>{part}</span>
        </span>
      );
    }
    if (['materiales de construcción', 'material de construcción', 'materiales', 'mineral', 'madera'].includes(lower)) {
      return (
        <span key={i} className="text-slate-400 font-bold inline-flex items-center gap-1 shrink-0">
          <Hammer className="w-3.5 h-3.5 text-slate-400 inline" />
          <span>{part}</span>
        </span>
      );
    }
    if (['objetos de valor', 'objeto de valor', 'valiosos'].includes(lower)) {
      return (
        <span key={i} className="text-fuchsia-400 font-bold inline-flex items-center gap-1 shrink-0">
          <Gem className="w-3.5 h-3.5 text-fuchsia-400 inline" />
          <span>{part}</span>
        </span>
      );
    }

    // 5. Factions (text only, colored as defined in their themes)
    if (lower === 'castillo') {
      return (
        <span key={i} className="text-sky-400 font-semibold inline">
          {part}
        </span>
      );
    }
    if (lower === 'necrópolis' || lower === 'necropolis') {
      return (
        <span key={i} className="text-zinc-400 font-semibold inline">
          {part}
        </span>
      );
    }
    if (lower === 'mazmorra') {
      return (
        <span key={i} className="text-purple-400 font-semibold inline">
          {part}
        </span>
      );
    }
    if (lower === 'torre') {
      return (
        <span key={i} className="text-cyan-400 font-semibold inline">
          {part}
        </span>
      );
    }
    if (lower === 'murallas') {
      return (
        <span key={i} className="text-emerald-400 font-semibold inline">
          {part}
        </span>
      );
    }
    if (lower === 'fortaleza') {
      return (
        <span key={i} className="text-teal-400 font-semibold inline">
          {part}
        </span>
      );
    }
    if (lower === 'inferno' || lower === 'infierno') {
      return (
        <span key={i} className="text-red-500 font-semibold inline">
          {part}
        </span>
      );
    }
    if (lower === 'bastión' || lower === 'bastion') {
      return (
        <span key={i} className="text-amber-500 font-semibold inline">
          {part}
        </span>
      );
    }
    if (lower === 'conflujo' || lower === 'confluencia') {
      return (
        <span key={i} className="text-pink-400 font-semibold inline">
          {part}
        </span>
      );
    }
    if (lower === 'cala') {
      return (
        <span key={i} className="text-teal-300 font-semibold inline">
          {part}
        </span>
      );
    }

    // 6. Statistics
    if (lower === 'ataque') {
      return (
        <span key={i} className="text-orange-500 font-bold inline-flex items-center gap-1 shrink-0">
          <Swords className="w-3.5 h-3.5 text-orange-500 inline" />
          <span>{part}</span>
        </span>
      );
    }
    if (lower === 'defensa') {
      return (
        <span key={i} className="text-cyan-400 font-bold inline-flex items-center gap-1 shrink-0">
          <Shield className="w-3.5 h-3.5 text-cyan-400 inline" />
          <span>{part}</span>
        </span>
      );
    }
    if (lower === 'poder') {
      return (
        <span key={i} className="text-blue-400 font-bold inline-flex items-center gap-1 shrink-0">
          <Flame className="w-3.5 h-3.5 text-blue-400 inline" />
          <span>{part}</span>
        </span>
      );
    }
    if (lower === 'conocimiento') {
      return (
        <span key={i} className="text-purple-400 font-bold inline-flex items-center gap-1 shrink-0">
          <BookOpen className="w-3.5 h-3.5 text-purple-400 inline" />
          <span>{part}</span>
        </span>
      );
    }
    if (lower === 'iniciativa') {
      return (
        <span key={i} className="text-yellow-400 font-bold inline-flex items-center gap-1 shrink-0">
          <Zap className="w-3.5 h-3.5 text-yellow-400 fill-yellow-400 inline" />
          <span>{part}</span>
        </span>
      );
    }
    if (lower === 'puntos de salud' || lower === 'salud' ) {
      return (
        <span key={i} className="text-red-500 font-bold inline-flex items-center gap-1 shrink-0">
          <Heart className="w-3.5 h-3.5 text-red-500 stroke-[3] inline" />
          <span>{part}</span>
        </span>
      );
    }
    if (lower === 'pm' || lower === 'puntos de movimiento' || lower === 'movimiento') {
      return (
        <span key={i} className="text-emerald-500 font-bold inline-flex items-center gap-1 shrink-0">
          <Compass className="w-3.5 h-3.5 text-emerald-500 inline" />
          <span>{part}</span>
        </span>
      );
    }

    // 7. Herida / Heridas
    if (lower === 'herida' || lower === 'heridas' || lower === 'daño') {
      return (
        <span key={i} className="text-red-600 dark:text-red-500 font-bold inline-flex items-center gap-1.5 shrink-0">
          <Droplet className="w-3.5 h-3.5 text-red-600 dark:text-red-500 fill-red-600 dark:fill-red-500 inline animate-pulse" />
          <span>{part}</span>
        </span>
      );
    }

    return part;
  });
}

function parseFormattedText(text: string): React.ReactNode {
  const lines = text.split('\n');
  const elements: React.ReactNode[] = [];
  
  let inFaqCard = false;
  let faqQuestion = "";
  let faqAnswerLines: string[] = [];
  
  const flushFaqCard = (key: number) => {
    if (faqQuestion) {
      elements.push(
        <div key={`faq-card-${key}`} className="bg-amber-950/10 border border-amber-900/20 rounded-2xl p-4 my-3.5 space-y-2 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-24 h-24 bg-amber-500/5 rounded-full blur-xl pointer-events-none" />
          <h5 className="font-serif font-bold text-amber-300 text-sm sm:text-base flex items-start gap-2">
            <HelpCircle className="w-4.5 h-4.5 text-amber-500 mt-0.5 shrink-0" />
            <span>{faqQuestion}</span>
          </h5>
          <div className="text-slate-300 text-xs sm:text-sm pl-6.5 leading-relaxed space-y-1.5">
            {faqAnswerLines.map((ansLine, idx) => (
              <p key={idx}>{highlightKeywords(ansLine)}</p>
            ))}
          </div>
        </div>
      );
    }
    faqQuestion = "";
    faqAnswerLines = [];
    inFaqCard = false;
  };

  lines.forEach((line, index) => {
    const trimmed = line.trim();
    
    // Check if we are starting a Q or A
    const isQ = trimmed.startsWith('P:') || trimmed.startsWith('**P:**') || trimmed.startsWith('#### P:');
    const isR = trimmed.startsWith('R:') || trimmed.startsWith('**R:**') || trimmed.startsWith('R: ');
    
    if (isQ) {
      flushFaqCard(index);
      // Clean up headers like #### P: or **P:**
      faqQuestion = trimmed.replace(/^(####\s+P:|P:|\*\*P:\*\*)\s*/, '');
      inFaqCard = true;
    } else if (isR) {
      faqAnswerLines.push(trimmed.replace(/^(R:|\*\*R:\*\*|R:\s+)\s*/, ''));
    } else if (inFaqCard && trimmed !== '' && !trimmed.startsWith('---') && !trimmed.startsWith('##') && !trimmed.startsWith('#')) {
      faqAnswerLines.push(line);
    } else {
      flushFaqCard(index);
      
      if (trimmed === '') {
        elements.push(<div key={index} className="h-1.5" />);
      } else if (trimmed.startsWith('###')) {
        elements.push(
          <h5 key={index} className="text-xs font-bold text-amber-400 font-serif tracking-widest mt-4.5 mb-2.5 flex items-center gap-1.5 uppercase border-l-2 border-amber-600 pl-2">
            {highlightKeywords(trimmed.replace('###', '').trim())}
          </h5>
        );
      } else if (trimmed.startsWith('##')) {
        elements.push(
          <h4 key={index} className="text-sm font-bold text-amber-300 font-serif tracking-widest mt-5.5 mb-3 border-b border-amber-900/20 pb-2 uppercase flex items-center gap-2">
            <span className="text-amber-500">✦</span> {highlightKeywords(trimmed.replace('##', '').trim())}
          </h4>
        );
      } else if (trimmed.startsWith('•') || trimmed.startsWith('*') || trimmed.startsWith('-')) {
        const listContent = trimmed.replace(/^[•*\-]\s*/, '');
        elements.push(
          <div key={index} className="flex items-start gap-2.5 my-2 text-xs sm:text-sm pl-2">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-2 shrink-0 animate-pulse" />
            <span className="text-slate-300 leading-relaxed">{highlightKeywords(listContent)}</span>
          </div>
        );
      } else if (trimmed.startsWith('---')) {
        elements.push(<hr key={index} className="border-slate-800/80 my-4" />);
      } else {
        elements.push(
          <p key={index} className="text-slate-300 text-xs sm:text-sm leading-relaxed my-2">
            {highlightKeywords(line)}
          </p>
        );
      }
    }
  });
  
  flushFaqCard(lines.length);
  return elements;
}

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
    { id: 'heroes', label: 'Héroes', icon: Star },
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
                  <h4 className="text-base sm:text-lg font-serif font-medium text-amber-200 tracking-tight flex items-center gap-2">
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
                
                <div className="space-y-1 font-sans text-sm text-slate-300 leading-relaxed">
                  {parseFormattedText(section.content)}
                </div>
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
