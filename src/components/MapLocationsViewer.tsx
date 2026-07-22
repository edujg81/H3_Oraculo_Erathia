import React, { useState, useMemo } from 'react';
import { 
  Search, Map, MapPin, Compass, Info, Waves, RefreshCw, 
  Flag, ShieldAlert, Skull, Crown, BookOpen, Hammer, Coins, 
  UserCheck, Dices, Flame, Sparkles, Anchor, HelpCircle
} from 'lucide-react';

import { MapLocation, LOCATIONS_DATA } from '../data/locationsData';


export default function MapLocationsViewer() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedZone, setSelectedZone] = useState<string>('Todos');
  const [selectedType, setSelectedType] = useState<string>('Todos');
  const [testRollResult, setTestRollResult] = useState<string | null>(null);
  const [activeTestLocation, setActiveTestLocation] = useState<string | null>(null);

  // Filter lists
  const zonesList = ['Todos', 'Superficie', 'Subterráneo', 'Agua'];
  const typesList = ['Todos', 'Visitable', 'Re-visitable', 'Señalizable', 'Obstáculo / Paso', 'Especial'];

  const filteredLocations = useMemo(() => {
    return LOCATIONS_DATA.filter(loc => {
      const matchesSearch = searchQuery === '' || 
        loc.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        loc.effect.toLowerCase().includes(searchQuery.toLowerCase()) ||
        loc.rulesNotes.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesZone = selectedZone === 'Todos' || loc.zones.includes(selectedZone as any);
      const matchesType = selectedType === 'Todos' || loc.type === selectedType;

      return matchesSearch && matchesZone && matchesType;
    }).sort((a, b) => a.name.localeCompare(b.name, 'es'));
  }, [searchQuery, selectedZone, selectedType]);

  const handleTestRoll = (locId: string) => {
    setActiveTestLocation(locId);
    setTestRollResult(null);

    // Simulate 600ms roll effect
    setTimeout(() => {
      if (locId === 'shipwreck_survivor') {
        // Treasure Die simulation
        const outcomes = [
          '¡Resultado Éxito! 💎 Encuentras un Artefacto Menor de los restos y lo añades a tu inventario.',
          '¡Resultado Éxito! 💎 Encuentras un Artefacto Menor de los restos y lo añades a tu inventario.',
          '¡Resultado Fallo! 🪙 No quedan artefactos intactos, pero el marinero agradecido te recompensa con +5 de Oro.',
          '¡Resultado Fallo! 🪙 No quedan artefactos intactos, pero el marinero agradecido te recompensa con +5 de Oro.'
        ];
        const roll = Math.floor(Math.random() * outcomes.length);
        setTestRollResult(outcomes[roll]);
      } else if (locId === 'whirlpool') {
        // Combat Die simulation
        const rollValue = Math.floor(Math.random() * 3) - 1; // -1, 0, or +1
        if (rollValue === -1) {
          setTestRollResult('¡Resultado -1! 💀 El remolino succiona la criatura aliada de nivel más bajo de tu ejército. ¡Naufragio devastador!');
        } else {
          setTestRollResult(`¡Resultado ${rollValue >= 0 ? '+' : ''}${rollValue}! ⛵ Navegación exitosa. El remolino te teletransporta de forma segura a otro vórtice.`);
        }
      } else if (locId === 'witch_hut') {
        const skills = [
          'Habilidad: Logística (Logistics) - Movilidad extra',
          'Habilidad: Liderazgo (Leadership) - Moral positiva',
          'Habilidad: Sabiduría (Wisdom) - Permite aprender hechizos de nivel superior',
          'Habilidad: Tiro con Arco (Archery) - Potencia ataques a distancia',
          'Habilidad: Hechicería (Sorcery) - Potencia el daño de hechizos',
          'Habilidad: Ofensiva (Offense) - Daño cuerpo a cuerpo incrementado'
        ];
        const randomSkill = skills[Math.floor(Math.random() * skills.length)];
        setTestRollResult(`🔮 La Bruja te enseña: "${randomSkill}" tras abonar 5 de Oro.`);
      } else if (locId === 'mystical_garden') {
        const reward = Math.random() > 0.5 ? '🪙 Eliges recibir 2 de Oro de inmediato.' : '🔮 Eliges recibir 1 Objeto de valor (Gema preciosa).';
        setTestRollResult(reward);
      } else {
        setTestRollResult('¡Lugar visitado! Registras la zona y aplicas sus efectos de forma reglamentaria.');
      }
    }, 600);
  };

  const renderLocationIcon = (iconType: string, className: string = 'w-5 h-5') => {
    switch (iconType) {
      case 'stone':
        return <UserCheck className={`${className} text-indigo-400`} />;
      case 'temple':
        return <Crown className={`${className} text-amber-300`} />;
      case 'shrine':
        return <Sparkles className={`${className} text-purple-400`} />;
      case 'resource':
        return <Coins className={`${className} text-amber-500`} />;
      case 'death':
        return <Skull className={`${className} text-rose-500`} />;
      case 'tree':
        return <BookOpen className={`${className} text-emerald-400`} />;
      case 'mill':
        return <Hammer className={`${className} text-amber-600`} />;
      case 'witch':
        return <HelpCircle className={`${className} text-pink-400`} />;
      case 'market':
        return <RefreshCw className={`${className} text-sky-400`} />;
      case 'stables':
        return <Compass className={`${className} text-lime-400`} />;
      case 'academy':
        return <BookOpen className={`${className} text-yellow-500`} />;
      case 'mine':
        return <Flag className={`${className} text-blue-400`} />;
      case 'settlement':
        return <MapPin className={`${className} text-green-400`} />;
      case 'gate':
        return <ShieldAlert className={`${className} text-orange-400`} />;
      case 'shipyard':
        return <Anchor className={`${className} text-cyan-400`} />;
      case 'sea_temple':
        return <Waves className={`${className} text-blue-500`} />;
      case 'survivor':
        return <Dices className={`${className} text-emerald-500`} />;
      case 'buoy':
        return <Compass className={`${className} text-teal-400`} />;
      case 'whirlpool':
        return <Waves className={`${className} text-indigo-500 animate-spin`} style={{ animationDuration: '8s' }} />;
      case 'shipwreck_lots':
        return <Skull className={`${className} text-slate-400`} />;
      case 'portal':
        return <Sparkles className={`${className} text-violet-400`} />;
      case 'rift':
        return <Flame className={`${className} text-red-500`} />;
      case 'altar':
        return <RefreshCw className={`${className} text-pink-500`} />;
      default:
        return <Map className={`${className} text-slate-400`} />;
    }
  };

  const getTypeStyle = (type: string) => {
    switch (type) {
      case 'Visitable':
        return 'bg-amber-950/40 border-amber-800 text-amber-300';
      case 'Re-visitable':
        return 'bg-emerald-950/40 border-emerald-800 text-emerald-300';
      case 'Señalizable':
        return 'bg-blue-950/40 border-blue-800 text-blue-300';
      case 'Obstáculo / Paso':
        return 'bg-orange-950/40 border-orange-800 text-orange-300';
      default:
        return 'bg-purple-950/40 border-purple-800 text-purple-300';
    }
  };

  const getZoneStyle = (zone: string) => {
    switch (zone) {
      case 'Superficie':
        return 'bg-lime-950/30 text-lime-400 border-lime-800/40';
      case 'Subterráneo':
        return 'bg-red-950/30 text-red-400 border-red-900/40';
      case 'Agua':
        return 'bg-cyan-950/30 text-cyan-400 border-cyan-800/40';
      default:
        return 'bg-slate-850 text-slate-300 border-slate-700/50';
    }
  };

  return (
    <div className="space-y-6" id="locations-viewer-section">
      {/* Intro Header */}
      <div className="bg-slate-900/90 border border-amber-950/30 rounded-2xl p-6 shadow-2xl relative overflow-hidden">
        <div className="absolute right-0 top-0 opacity-10 pointer-events-none transform translate-x-8 -translate-y-8">
          <Map className="w-64 h-64 text-amber-500" />
        </div>
        <div className="relative z-10 space-y-2">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-amber-950/50 border border-amber-800/50 flex items-center justify-center">
              <Compass className="w-5 h-5 text-amber-400 animate-pulse" />
            </div>
            <div>
              <h2 className="text-2xl font-serif font-semibold text-amber-200 tracking-tight">
                Atlas de Erathia: Lugares de Campaña y Mapa
              </h2>
              <p className="text-xs text-slate-400 font-mono">
                Reglamento oficial del Juego de Mesa
              </p>
            </div>
          </div>
          <p className="text-sm text-slate-300 leading-relaxed max-w-3xl">
            Explora las distintas tipologías de losetas de terreno, santuarios, recursos y peligros marítimos de la superficie, el subterráneo cavernosos o las embravecidas aguas de Savage Seas. Filtra y consulta efectos, restricciones y realiza simulaciones de dados para agilizar tus turnos en mesa.
          </p>
        </div>
      </div>

      {/* Control Panel: Search & Filters */}
      <div className="bg-slate-900/80 border border-slate-800/80 rounded-2xl p-4 sm:p-6 shadow-xl space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
          {/* Search bar */}
          <div className="md:col-span-12 lg:col-span-4 relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 w-5 h-5" />
            <input
              type="text"
              placeholder="Buscar lugar, efecto o regla..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-11 pr-4 py-2.5 bg-slate-950/80 border border-amber-950/40 rounded-xl text-slate-100 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-amber-500/50 transition-all text-sm"
            />
          </div>

          {/* Zone filter */}
          <div className="md:col-span-6 lg:col-span-4 space-y-1.5">
            <label className="text-[10px] font-mono uppercase tracking-wider text-slate-400 block">Filtrar por Zona:</label>
            <div className="flex flex-wrap gap-1.5">
              {zonesList.map(zone => (
                <button
                  key={zone}
                  onClick={() => setSelectedZone(zone)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-medium border transition-all cursor-pointer ${
                    selectedZone === zone 
                      ? 'bg-amber-600 text-white border-amber-500 shadow-md shadow-amber-950/20' 
                      : 'bg-slate-950/40 border-slate-800 text-slate-400 hover:text-slate-200 hover:bg-slate-850'
                  }`}
                >
                  {zone === 'Superficie' ? '🌲 Superficie' 
                   : zone === 'Subterráneo' ? '🌋 Subterráneo' 
                   : zone === 'Agua' ? '🌊 Agua' 
                   : '🗺️ Todos'}
                </button>
              ))}
            </div>
          </div>

          {/* Type filter */}
          <div className="md:col-span-6 lg:col-span-4 space-y-1.5">
            <label className="text-[10px] font-mono uppercase tracking-wider text-slate-400 block">Filtrar por Tipo de Interacción:</label>
            <div className="flex flex-wrap gap-1.5">
              {typesList.map(type => (
                <button
                  key={type}
                  onClick={() => setSelectedType(type)}
                  className={`px-2.5 py-1.5 rounded-lg text-[11px] font-medium border transition-all cursor-pointer ${
                    selectedType === type 
                      ? 'bg-amber-600 text-white border-amber-500 shadow-md' 
                      : 'bg-slate-950/40 border-slate-800 text-slate-400 hover:text-slate-200 hover:bg-slate-850'
                  }`}
                >
                  {type}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Grid of Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {filteredLocations.map(loc => (
          <div 
            key={loc.id}
            className="group bg-slate-900/90 border border-slate-800/80 hover:border-amber-500/40 rounded-2xl p-5 flex flex-col justify-between shadow-lg transition-all duration-300 hover:shadow-amber-500/5 hover:-translate-y-0.5"
          >
            <div className="space-y-4">
              {/* Header inside card */}
              <div className="flex items-start justify-between gap-2">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-center shrink-0">
                    {renderLocationIcon(loc.iconType, "w-5 h-5")}
                  </div>
                  <div>
                    <h3 className="text-sm font-serif font-semibold text-amber-200 tracking-tight group-hover:text-amber-100 transition-colors">
                      {loc.name}
                    </h3>
                    <div className="flex gap-1.5 mt-1">
                      <span className={`text-[9px] font-mono px-1.5 py-0.5 rounded border ${getTypeStyle(loc.type)}`}>
                        {loc.type}
                      </span>
                      {loc.zones.map(z => (
                        <span key={z} className={`text-[9px] font-mono px-1.5 py-0.5 rounded border ${getZoneStyle(z)}`}>
                          {z === 'Superficie' ? '🌲 Surf.' 
                           : z === 'Subterráneo' ? '🌋 Subt.' 
                           : '🌊 Agua'}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Main Effect Body */}
              <div className="space-y-2">
                <div className="bg-slate-950/60 rounded-xl p-3 border border-slate-850/50">
                  <p className="text-xs text-slate-300 leading-relaxed">
                    <strong className="text-amber-500/80 font-mono text-[10px] block uppercase mb-1">Efecto Inmediato:</strong>
                    {loc.effect}
                  </p>
                </div>

                <div className="bg-slate-950/20 border-l border-slate-700/30 pl-2.5 py-1">
                  <p className="text-[11px] text-slate-400 italic leading-relaxed">
                    <strong className="text-slate-500 font-mono text-[9px] not-italic block uppercase">Puntualización de Reglas:</strong>
                    {loc.rulesNotes}
                  </p>
                </div>
              </div>
            </div>

            {/* Simulated Action Drawer for Visitable Locations */}
            <div className="mt-4 pt-4 border-t border-slate-800/60">
              {['shipwreck_survivor', 'whirlpool', 'witch_hut', 'mystical_garden'].includes(loc.id) ? (
                <div className="space-y-2">
                  <button 
                    onClick={() => handleTestRoll(loc.id)}
                    className="w-full bg-slate-950 hover:bg-slate-800/80 border border-slate-850 hover:border-amber-500/30 py-2 px-3 rounded-xl text-xs font-mono text-amber-400 hover:text-amber-300 transition-all flex items-center justify-center gap-2 cursor-pointer shadow-sm"
                  >
                    <Dices className={`w-3.5 h-3.5 ${activeTestLocation === loc.id && !testRollResult ? 'animate-spin' : ''}`} />
                    <span>
                      {loc.id === 'shipwreck_survivor' ? 'Simular Dado de Tesoro 🎲'
                       : loc.id === 'whirlpool' ? 'Simular Daño de Remolino 🌪️'
                       : loc.id === 'witch_hut' ? 'Aprender Habilidad Aleatoria 🧙‍♀️'
                       : 'Girar Recursos del Jardín 🌿'}
                    </span>
                  </button>

                  {activeTestLocation === loc.id && (
                    <div className="p-2.5 rounded-lg bg-slate-950 border border-amber-950/40 text-[11px] text-amber-200 animate-fadeIn font-mono leading-relaxed text-center shadow-inner">
                      {testRollResult ? (
                        <div className="space-y-1">
                          <span className="text-[10px] text-slate-500 block uppercase tracking-wider">RESULTADO DEL DADO:</span>
                          <span>{testRollResult}</span>
                        </div>
                      ) : (
                        <span className="text-slate-500 animate-pulse">Lanzando dados sobre el tablero...</span>
                      )}
                    </div>
                  )}
                </div>
              ) : (
                <div className="flex items-center gap-1.5 text-[10px] font-mono text-slate-500 bg-slate-950/20 px-2 py-1 rounded-lg">
                  <Info className="w-3 h-3 text-slate-600 shrink-0" />
                  <span>
                    {loc.type === 'Visitable' ? 'Colocar cubo de Visita (Negro)' 
                     : loc.type === 'Señalizable' ? 'Colocar cubo de tu Facción' 
                     : 'Efecto estático o coste de PM reglamentario'}
                  </span>
                </div>
              )}
            </div>
          </div>
        ))}

        {filteredLocations.length === 0 && (
          <div className="col-span-full bg-slate-900/40 border border-dashed border-slate-800 rounded-2xl p-12 text-center space-y-3">
            <Compass className="w-12 h-12 text-slate-600 mx-auto animate-pulse" />
            <p className="text-sm text-slate-400 font-mono">No se encontraron lugares con los filtros actuales.</p>
            <button 
              onClick={() => { setSearchQuery(''); setSelectedZone('Todos'); setSelectedType('Todos'); }}
              className="text-xs text-amber-500 hover:underline font-semibold cursor-pointer"
            >
              Restablecer filtros de búsqueda
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
