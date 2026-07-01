import React, { useState, useEffect } from 'react';
import { Coins, Plus, Trash2, Shield, Sparkles, HelpCircle, Swords } from 'lucide-react';

interface BoardGameUnit {
  level: number;
  nameBasic: string;
  nameElite: string;
  tier: 'bronce' | 'plata' | 'oro' | 'azul';
}

interface FactionsUnitsData {
  [factionId: string]: BoardGameUnit[];
}

const FACTION_UNITS: FactionsUnitsData = {
  castillo: [
    { level: 1, nameBasic: 'Piqueros', nameElite: 'Alabarderos', tier: 'bronce' },
    { level: 2, nameBasic: 'Arqueros', nameElite: 'Tiradores', tier: 'bronce' },
    { level: 3, nameBasic: 'Grifos', nameElite: 'Grifos Reales', tier: 'bronce' },
    { level: 4, nameBasic: 'Espadachines', nameElite: 'Cruzados', tier: 'plata' },
    { level: 5, nameBasic: 'Monjes', nameElite: 'Fanáticos', tier: 'plata' },
    { level: 6, nameBasic: 'Caballeros', nameElite: 'Campeones', tier: 'oro' },
    { level: 7, nameBasic: 'Ángeles', nameElite: 'Arcángeles', tier: 'oro' }
  ],
  necropolis: [
    { level: 1, nameBasic: 'Esqueletos', nameElite: 'Esqueletos con Escudo', tier: 'bronce' },
    { level: 2, nameBasic: 'Zombis', nameElite: 'Zombis Voraces', tier: 'bronce' },
    { level: 3, nameBasic: 'Fantasmas', nameElite: 'Espectros', tier: 'bronce' },
    { level: 4, nameBasic: 'Vampiros', nameElite: 'Señores del Vampiro', tier: 'plata' },
    { level: 5, nameBasic: 'Liches', nameElite: 'Liches de Poder', tier: 'plata' },
    { level: 6, nameBasic: 'Caballeros del Terror', nameElite: 'Caballeros de la Muerte', tier: 'oro' },
    { level: 7, nameBasic: 'Dragones de Hueso', nameElite: 'Dragones de Fantasma', tier: 'oro' }
  ],
  mazmorra: [
    { level: 1, nameBasic: 'Trogloditas', nameElite: 'Trogloditas Infernales', tier: 'bronce' },
    { level: 2, nameBasic: 'Arpías', nameElite: 'Arpías Brujas', tier: 'bronce' },
    { level: 3, nameBasic: 'Contempladores', nameElite: 'Ojos Maléficos', tier: 'bronce' },
    { level: 4, nameBasic: 'Medusas', nameElite: 'Reinas Medusa', tier: 'plata' },
    { level: 5, nameBasic: 'Minotauros', nameElite: 'Reyes Minotauro', tier: 'plata' },
    { level: 6, nameBasic: 'Mantícoras', nameElite: 'Quimeras', tier: 'oro' },
    { level: 7, nameBasic: 'Dragones Rojos', nameElite: 'Dragones Negros', tier: 'oro' }
  ],
  rampart: [
    { level: 1, nameBasic: 'Centauros', nameElite: 'Centauros Líderes', tier: 'bronce' },
    { level: 2, nameBasic: 'Enanos', nameElite: 'Enanos de Batalla', tier: 'bronce' },
    { level: 3, nameBasic: 'Elfos', nameElite: 'Grandes Elfos', tier: 'bronce' },
    { level: 4, nameBasic: 'Pegasos', nameElite: 'Pegasos Plateados', tier: 'plata' },
    { level: 5, nameBasic: 'Dendroides', nameElite: 'Dendroides Guardianes', tier: 'plata' },
    { level: 6, nameBasic: 'Unicornios', nameElite: 'Unicornios de Guerra', tier: 'oro' },
    { level: 7, nameBasic: 'Dragones Verdes', nameElite: 'Dragones Dorados', tier: 'oro' }
  ],
  torre: [
    { level: 1, nameBasic: 'Gremlins', nameElite: 'Gremlins Maestros', tier: 'bronce' },
    { level: 2, nameBasic: 'Gárgolas de Piedra', nameElite: 'Gárgolas de Obsidiana', tier: 'bronce' },
    { level: 3, nameBasic: 'Golems de Hierro', nameElite: 'Golems de Acero', tier: 'bronce' },
    { level: 4, nameBasic: 'Magos', nameElite: 'Archimagos', tier: 'plata' },
    { level: 5, nameBasic: 'Genios', nameElite: 'Genios Amos', tier: 'plata' },
    { level: 6, nameBasic: 'Nagas', nameElite: 'Nagas Reina', tier: 'oro' },
    { level: 7, nameBasic: 'Gigantes', nameElite: 'Titanes', tier: 'oro' }
  ],
  infierno: [
    { level: 1, nameBasic: 'Diablillos', nameElite: 'Duendecillos', tier: 'bronce' },
    { level: 2, nameBasic: 'Gogs', nameElite: 'Magogs', tier: 'bronce' },
    { level: 3, nameBasic: 'Sabuesos', nameElite: 'Cerberos', tier: 'bronce' },
    { level: 4, nameBasic: 'Demonios', nameElite: 'Demonios del Averno', tier: 'plata' },
    { level: 5, nameBasic: 'Demonios del Abismo', nameElite: 'Señores del Abismo', tier: 'plata' },
    { level: 6, nameBasic: 'Efreet', nameElite: 'Efreet Sultanes', tier: 'oro' },
    { level: 7, nameBasic: 'Diablos', nameElite: 'Archidiablos', tier: 'oro' }
  ],
  stronghold: [
    { level: 1, nameBasic: 'Goblins', nameElite: 'Hobgoblins', tier: 'bronce' },
    { level: 2, nameBasic: 'Jinetes de Lobo', nameElite: 'Jinetes de Élite', tier: 'bronce' },
    { level: 3, nameBasic: 'Orcos', nameElite: 'Jefes Orco', tier: 'bronce' },
    { level: 4, nameBasic: 'Ogros', nameElite: 'Ogros Magos', tier: 'plata' },
    { level: 5, nameBasic: 'Rocs', nameElite: 'Rocs de Fuego', tier: 'plata' },
    { level: 6, nameBasic: 'Cíclopes', nameElite: 'Cíclopes Reyes', tier: 'oro' },
    { level: 7, nameBasic: 'Behemoths', nameElite: 'Behemoths Ancestrales', tier: 'oro' }
  ],
  fortaleza: [
    { level: 1, nameBasic: 'Gnolls', nameElite: 'Merodeadores Gnoll', tier: 'bronce' },
    { level: 2, nameBasic: 'Hombres Lagarto', nameElite: 'Lagartos de Élite', tier: 'bronce' },
    { level: 3, nameBasic: 'Serpientes Aladas', nameElite: 'Libélulas', tier: 'bronce' },
    { level: 4, nameBasic: 'Basiliscos', nameElite: 'Basiliscos Mayores', tier: 'plata' },
    { level: 5, nameBasic: 'Gorgonas', nameElite: 'Gorgonas Verdes', tier: 'plata' },
    { level: 6, nameBasic: 'Wyverns', nameElite: 'Wyverns Monarcas', tier: 'oro' },
    { level: 7, nameBasic: 'Hidras', nameElite: 'Hidras del Caos', tier: 'oro' }
  ],
  confluencia: [
    { level: 1, nameBasic: 'Duendes', nameElite: 'Duendes Armados', tier: 'bronce' },
    { level: 2, nameBasic: 'Elementales de Aire', nameElite: 'Elementales de Tormenta', tier: 'bronce' },
    { level: 3, nameBasic: 'Elementales de Agua', nameElite: 'Elementales de Hielo', tier: 'bronce' },
    { level: 4, nameBasic: 'Elementales de Fuego', nameElite: 'Elementales de Energía', tier: 'plata' },
    { level: 5, nameBasic: 'Elementales de Tierra', nameElite: 'Elementales de Magma', tier: 'plata' },
    { level: 6, nameBasic: 'Elementales Mentales', nameElite: 'Elementales de Magia', tier: 'oro' },
    { level: 7, nameBasic: 'Fénix', nameElite: 'Fénix Sagrados', tier: 'oro' }
  ],
  cove: [
    { level: 1, nameBasic: 'Ninfas', nameElite: 'Nereidas', tier: 'bronce' },
    { level: 2, nameBasic: 'Marineros', nameElite: 'Corsarios', tier: 'bronce' },
    { level: 3, nameBasic: 'Piratas', nameElite: 'Bucaneros', tier: 'bronce' },
    { level: 4, nameBasic: 'Regentes del Mar', nameElite: 'Regentes del Abismo', tier: 'plata' },
    { level: 5, nameBasic: 'Aves de Tormenta', nameElite: 'Aves del Abismo', tier: 'plata' },
    { level: 6, nameBasic: 'Serpientes Marinas', nameElite: 'Haspid', tier: 'oro' },
    { level: 7, nameBasic: 'Leviatanes', nameElite: 'Leviatanes Antiguos', tier: 'oro' }
  ],
  neutrales: [
    { level: 1, nameBasic: 'Pícaros', nameElite: 'Pícaros Emboscadores', tier: 'bronce' },
    { level: 2, nameBasic: 'Nómadas', nameElite: 'Nómadas del Desierto', tier: 'bronce' },
    { level: 3, nameBasic: 'Jabalíes', nameElite: 'Colmillos de Hierro', tier: 'bronce' },
    { level: 4, nameBasic: 'Golems de Oro', nameElite: 'Golems de Diamante', tier: 'plata' },
    { level: 5, nameBasic: 'Licántropos', nameElite: 'Licántropos Alfas', tier: 'plata' },
    { level: 6, nameBasic: 'Enanos', nameElite: 'Enanos de Hierro', tier: 'oro' },
    { level: 7, nameBasic: 'Dragón de Hada', nameElite: 'Dragón de Hada Antiguo', tier: 'azul' },
    { level: 8, nameBasic: 'Dragón de Óxido', nameElite: 'Dragón de Óxido Voraz', tier: 'azul' },
    { level: 9, nameBasic: 'Dragón de Cristal', nameElite: 'Dragón de Cristal Puro', tier: 'azul' },
    { level: 10, nameBasic: 'Dragón de Azur', nameElite: 'Dragón de Azur Legendario', tier: 'azul' }
  ]
};

const BASE_COSTS = {
  bronce: {
    basic: { gold: 2, materials: 0, valuable: 0 },
    elite: { gold: 3, materials: 0, valuable: 0 }
  },
  plata: {
    basic: { gold: 4, materials: 0, valuable: 0 },
    elite: { gold: 5, materials: 1, valuable: 0 } // Requiere 1 Madera o Mineral
  },
  oro: {
    basic: { gold: 7, materials: 0, valuable: 1 }, // Requiere 1 Valioso
    elite: { gold: 9, materials: 0, valuable: 2 }  // Requiere 2 Valiosos
  },
  azul: {
    basic: { gold: 12, materials: 0, valuable: 2 }, // Requiere 2 Valiosos
    elite: { gold: 15, materials: 0, valuable: 3 }  // Requiere 3 Valiosos
  }
};

interface CartItem {
  id: string;
  factionId: string;
  factionName: string;
  unitName: string;
  tier: 'bronce' | 'plata' | 'oro' | 'azul';
  upgraded: boolean;
  quantity: number;
  costGold: number;
  costMaterials: number;
  costValuable: number;
}

export default function RecruitmentCalculator() {
  const [selectedFaction, setSelectedFaction] = useState('castillo');
  const [selectedTier, setSelectedTier] = useState<'bronce' | 'plata' | 'oro' | 'azul'>('bronce');
  const [selectedUnit, setSelectedUnit] = useState<BoardGameUnit | null>(null);
  const [isUpgraded, setIsUpgraded] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const [cart, setCart] = useState<CartItem[]>([]);

  const factions = [
    { id: 'castillo', name: 'Castillo (Castle)', color: 'border-blue-900/50 text-blue-300 bg-blue-950/40 hover:bg-blue-900/30' },
    { id: 'necropolis', name: 'Necrópolis (Necropolis)', color: 'border-slate-750 text-slate-300 bg-slate-900/50 hover:bg-slate-800/50' },
    { id: 'mazmorra', name: 'Mazmorra (Dungeon)', color: 'border-purple-900/50 text-purple-300 bg-purple-950/40 hover:bg-purple-900/30' },
    { id: 'rampart', name: 'Murallas (Rampart)', color: 'border-emerald-900/50 text-emerald-300 bg-emerald-950/40 hover:bg-emerald-900/30' },
    { id: 'torre', name: 'Torre (Tower)', color: 'border-cyan-900/50 text-cyan-300 bg-cyan-950/40 hover:bg-cyan-900/30' },
    { id: 'infierno', name: 'Infierno (Inferno)', color: 'border-red-900/50 text-red-300 bg-red-950/40 hover:bg-red-900/30' },
    { id: 'stronghold', name: 'Bastión (Stronghold)', color: 'border-amber-900/50 text-amber-300 bg-amber-950/40 hover:bg-amber-900/30' },
    { id: 'fortaleza', name: 'Fortaleza (Fortress)', color: 'border-teal-900/50 text-teal-300 bg-teal-950/40 hover:bg-teal-900/30' },
    { id: 'confluencia', name: 'Confluencia (Conflux)', color: 'border-indigo-900/50 text-indigo-300 bg-indigo-950/40 hover:bg-indigo-900/30' },
    { id: 'cove', name: 'Bahía (Cove)', color: 'border-sky-900/50 text-sky-300 bg-sky-950/40 hover:bg-sky-900/30' },
    { id: 'neutrales', name: 'Neutrales (Neutrals)', color: 'border-gray-500 text-gray-300 bg-gray-950/40 hover:bg-gray-900/30' }
  ];

  // Auto-adjust selected tier and unit when faction changes
  useEffect(() => {
    if (selectedFaction !== 'neutrales' && selectedTier === 'azul') {
      setSelectedTier('bronce');
    }
  }, [selectedFaction]);

  // Retrieve available units for current faction and tier
  const availableUnits = (FACTION_UNITS[selectedFaction] || []).filter(u => u.tier === selectedTier);

  // Sync selected unit when list or tier changes
  useEffect(() => {
    if (availableUnits.length > 0) {
      // Find matching or fallback to first
      const exists = availableUnits.some(u => u.nameBasic === selectedUnit?.nameBasic);
      if (!exists) {
        setSelectedUnit(availableUnits[0]);
      }
    } else {
      setSelectedUnit(null);
    }
  }, [selectedFaction, selectedTier, availableUnits]);

  // Current Unit Name and Costs
  const unitName = selectedUnit
    ? (isUpgraded ? selectedUnit.nameElite : selectedUnit.nameBasic)
    : 'No seleccionada';

  const currentCostSpecs = BASE_COSTS[selectedTier][isUpgraded ? 'elite' : 'basic'];

  const addToCart = () => {
    if (!selectedUnit) return;
    const costSpec = BASE_COSTS[selectedTier][isUpgraded ? 'elite' : 'basic'];
    const factionName = factions.find(f => f.id === selectedFaction)?.name.split(' (')[0] || 'Desconocido';

    const newItem: CartItem = {
      id: `${selectedFaction}-${selectedTier}-${selectedUnit.level}-${isUpgraded ? 'elite' : 'basic'}-${Date.now()}`,
      factionId: selectedFaction,
      factionName,
      unitName,
      tier: selectedTier,
      upgraded: isUpgraded,
      quantity,
      costGold: costSpec.gold * quantity,
      costMaterials: costSpec.materials * quantity,
      costValuable: costSpec.valuable * quantity
    };

    setCart([...cart, newItem]);
    setQuantity(1);
  };

  const removeFromCart = (id: string) => {
    setCart(cart.filter(item => item.id !== id));
  };

  const clearCart = () => {
    setCart([]);
  };

  const totalGold = cart.reduce((sum, item) => sum + item.costGold, 0);
  const totalMaterials = cart.reduce((sum, item) => sum + item.costMaterials, 0);
  const totalValuable = cart.reduce((sum, item) => sum + item.costValuable, 0);

  return (
    <div className="bg-slate-900/40 border border-slate-800/80 rounded-3xl p-6 space-y-6 shadow-2xl backdrop-blur-md" id="recruitment-calculator">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-slate-800/80 pb-4 gap-2">
        <div>
          <h2 className="text-xl font-serif text-amber-400 flex items-center gap-2">
            <Coins className="w-5 h-5 text-amber-500" />
            Calculadora de Reclutamiento de Erathia
          </h2>
          <p className="text-xs text-slate-400">
            Calcula instantáneamente los costes de reclutamiento táctico y militar para las 10 facciones oficiales y criaturas neutrales.
          </p>
        </div>
        <span className="text-[10px] font-mono bg-slate-950 px-2.5 py-1 rounded-md text-amber-400 border border-amber-900/30 self-start sm:self-center">
          REGLAS DEL JUEGO DE TABLERO
        </span>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-12 gap-6 items-start">
        {/* Form Selector (Left Panel) */}
        <div className="xl:col-span-7 bg-slate-950/40 p-5 rounded-2xl border border-slate-850/60 space-y-4">
          <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest font-mono">1. Configurar Tropa</h3>
          
          {/* Faction Grid */}
          <div className="space-y-1.5">
            <label className="text-[10px] uppercase font-mono tracking-wider text-slate-400 block">Facción o Procedencia:</label>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-1.5">
              {factions.map(fac => (
                <button
                  key={fac.id}
                  onClick={() => setSelectedFaction(fac.id)}
                  className={`px-1.5 py-1.5 text-[10px] rounded-lg border text-center transition cursor-pointer font-medium font-mono truncate ${
                    selectedFaction === fac.id
                      ? 'border-amber-500 bg-amber-500/10 text-amber-300 font-bold shadow-sm shadow-amber-900/10'
                      : 'bg-slate-950/80 border-slate-900 text-slate-400 hover:text-slate-200 hover:border-slate-800'
                  }`}
                  title={fac.name}
                >
                  {fac.name.split(' (')[0]}
                </button>
              ))}
            </div>
          </div>

          {/* Tier Selector */}
          <div className="space-y-1.5">
            <label className="text-[10px] uppercase font-mono tracking-wider text-slate-400 block">Rango de la Unidad (Tier):</label>
            <div className="flex gap-1.5">
              {(['bronce', 'plata', 'oro'] as const).map(t => (
                <button
                  key={t}
                  onClick={() => setSelectedTier(t)}
                  className={`flex-1 py-2 text-[10px] uppercase font-bold tracking-wider rounded-lg border text-center cursor-pointer transition ${
                    selectedTier === t
                      ? t === 'bronce' ? 'border-amber-700 bg-amber-900/10 text-amber-500 font-bold'
                      : t === 'plata' ? 'border-slate-400 bg-slate-400/10 text-slate-300 font-bold'
                      : 'border-yellow-500 bg-yellow-500/10 text-yellow-300 font-bold'
                      : 'bg-slate-950 border-slate-900 text-slate-500 hover:text-slate-300'
                  }`}
                >
                  {t}
                </button>
              ))}
              {selectedFaction === 'neutrales' && (
                <button
                  onClick={() => setSelectedTier('azul')}
                  className={`flex-1 py-2 text-[10px] uppercase font-bold tracking-wider rounded-lg border text-center cursor-pointer transition ${
                    selectedTier === 'azul'
                      ? 'border-cyan-500 bg-cyan-500/10 text-cyan-300 font-bold shadow-md shadow-cyan-900/10'
                      : 'bg-slate-950 border-slate-900 text-slate-500 hover:text-slate-300'
                  }`}
                >
                  azul
                </button>
              )}
            </div>
          </div>

          {/* Unit Selector */}
          <div className="space-y-1.5">
            <label className="text-[10px] uppercase font-mono tracking-wider text-slate-400 block">Criatura / Unidad Específica:</label>
            {availableUnits.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {availableUnits.map(unit => (
                  <button
                    key={unit.nameBasic}
                    onClick={() => setSelectedUnit(unit)}
                    className={`p-2 rounded-xl border text-left transition cursor-pointer text-xs font-mono flex items-center justify-between ${
                      selectedUnit?.nameBasic === unit.nameBasic
                        ? 'border-amber-500 bg-amber-500/10 text-amber-300 font-semibold'
                        : 'bg-slate-950 border-slate-900 text-slate-400 hover:text-slate-200 hover:border-slate-800'
                    }`}
                  >
                    <span>{unit.nameBasic} / {unit.nameElite}</span>
                    <span className="text-[9px] text-slate-500 opacity-80">Niv. {unit.level}</span>
                  </button>
                ))}
              </div>
            ) : (
              <p className="text-[11px] text-red-400 font-mono italic">Selecciona un rango válido.</p>
            )}
          </div>

          {/* Grade Selector ("Unas pocas" vs "Manada") */}
          <div className="space-y-1.5 pt-1">
            <label className="text-[10px] uppercase font-mono tracking-wider text-slate-400 block">Cantidad Reclutada (Anverso/Reverso de la Carta):</label>
            <div className="grid grid-cols-2 gap-2">
              <button
                onClick={() => setIsUpgraded(false)}
                className={`py-2 text-xs rounded-lg border text-center cursor-pointer transition font-medium flex flex-col items-center justify-center gap-0.5 ${
                  !isUpgraded
                    ? 'border-amber-500 bg-slate-900 text-slate-200 font-bold shadow-inner'
                    : 'bg-slate-950 border-slate-900 text-slate-500 hover:text-slate-300'
                }`}
              >
                <span className="text-sm">🛡️ "Unas pocas"</span>
                <span className="text-[9px] opacity-75 font-mono">Básico / Recluta</span>
              </button>
              <button
                onClick={() => setIsUpgraded(true)}
                className={`py-2 text-xs rounded-lg border text-center cursor-pointer transition font-medium flex flex-col items-center justify-center gap-0.5 ${
                  isUpgraded
                    ? 'border-amber-500 bg-amber-500/10 text-amber-300 font-bold shadow-md'
                    : 'bg-slate-950 border-slate-900 text-slate-500 hover:text-slate-300'
                }`}
              >
                <span className="text-sm">⚡ "Manada"</span>
                <span className="text-[9px] opacity-75 font-mono">Élite / Mejorado</span>
              </button>
            </div>
          </div>

          {/* Unit Resulting Card */}
          {selectedUnit && (
            <div className="bg-slate-900/50 p-4 rounded-xl border border-slate-800/60 flex items-center justify-between mt-3">
              <div>
                <span className={`text-[9px] uppercase font-mono tracking-widest px-2 py-0.5 rounded-full border ${
                  selectedTier === 'bronce' ? 'bg-amber-950/40 text-amber-500 border-amber-900/30'
                  : selectedTier === 'plata' ? 'bg-slate-800 text-slate-300 border-slate-700'
                  : selectedTier === 'oro' ? 'bg-yellow-950/40 text-yellow-500 border-yellow-900/30'
                  : 'bg-cyan-950/40 text-cyan-400 border-cyan-900/30'
                }`}>
                  Tier {selectedTier} • {isUpgraded ? '"Manada"' : '"Unas pocas"'} (Nivel {selectedUnit.level})
                </span>
                <h4 className="text-base font-serif font-bold text-slate-100 mt-2 flex items-center gap-1.5">
                  <Swords className="w-4 h-4 text-amber-500 shrink-0" />
                  {unitName}
                </h4>
                <p className="text-[10px] text-slate-400 font-mono uppercase mt-0.5 tracking-wider">
                  Unidad de {selectedFaction.toUpperCase()}
                </p>
              </div>

              <div className="text-right space-y-1">
                <span className="text-[9px] text-slate-500 font-mono block">COSTE DE RECLUTAMIENTO:</span>
                <div className="flex gap-2 justify-end items-center text-xs font-bold font-mono">
                  {currentCostSpecs.gold > 0 && (
                    <span className="bg-amber-950/40 border border-amber-900/30 text-amber-400 px-2 py-0.5 rounded">
                      🟡 {currentCostSpecs.gold} Oro
                    </span>
                  )}
                  {currentCostSpecs.materials > 0 && (
                    <span className="bg-slate-950/40 border border-slate-800/80 text-slate-300 px-2 py-0.5 rounded">
                      🪵 {currentCostSpecs.materials} Mat.
                    </span>
                  )}
                  {currentCostSpecs.valuable > 0 && (
                    <span className="bg-purple-950/40 border border-purple-900/30 text-purple-400 px-2 py-0.5 rounded">
                      🔮 {currentCostSpecs.valuable} Val.
                    </span>
                  )}
                </div>
              </div>
            </div>
          )}

          {/* Quantity and Add button */}
          <div className="flex items-center gap-4 pt-2">
            <div className="w-1/3 space-y-1">
              <label className="text-[10px] uppercase font-mono tracking-wider text-slate-400 block">Cantidad:</label>
              <div className="flex items-center bg-slate-900 border border-slate-800 rounded-lg overflow-hidden">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="px-3 py-1.5 bg-slate-800 hover:bg-slate-700 text-slate-200 font-bold transition cursor-pointer text-xs"
                >
                  -
                </button>
                <input
                  type="number"
                  min="1"
                  value={quantity}
                  onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                  className="w-full text-center bg-slate-950 border-none text-slate-200 text-xs font-bold font-mono focus:outline-none focus:ring-0 py-1"
                />
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="px-3 py-1.5 bg-slate-800 hover:bg-slate-700 text-slate-200 font-bold transition cursor-pointer text-xs"
                >
                  +
                </button>
              </div>
            </div>

            <div className="flex-1 pt-4">
              <button
                onClick={addToCart}
                disabled={!selectedUnit}
                className="w-full py-2.5 bg-amber-600 hover:bg-amber-700 disabled:opacity-50 text-white font-bold rounded-xl text-xs flex items-center justify-center gap-2 transition cursor-pointer shadow-lg shadow-amber-950/20 hover:shadow-amber-900/40"
              >
                <Plus className="w-4 h-4" />
                Añadir al Plan del Ejército
              </button>
            </div>
          </div>
        </div>

        {/* Recruitment List / Army Cart (Right Panel) */}
        <div className="xl:col-span-5 bg-slate-950/40 p-5 rounded-2xl border border-slate-850/60 flex flex-col min-h-[380px] justify-between">
          <div className="space-y-4">
            <div className="flex items-center justify-between border-b border-slate-800/50 pb-2">
              <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest font-mono">2. Plan de Reclutamiento</h3>
              {cart.length > 0 && (
                <button
                  onClick={clearCart}
                  className="text-[10px] text-red-400 hover:text-red-300 font-mono flex items-center gap-1 cursor-pointer transition"
                >
                  <Trash2 className="w-3 h-3" /> Vaciar
                </button>
              )}
            </div>

            {cart.length === 0 ? (
              <div className="flex flex-col items-center justify-center text-center py-12 px-4 border-2 border-dashed border-slate-900 rounded-xl space-y-3">
                <span className="text-3xl">🛡️</span>
                <p className="text-xs text-slate-500 leading-relaxed font-mono">
                  No hay unidades asignadas al plan de reclutamiento táctico. Añade tropas en el panel izquierdo.
                </p>
              </div>
            ) : (
              <div className="max-h-[220px] overflow-y-auto space-y-2 pr-1 scrollbar-thin">
                {cart.map(item => (
                  <div
                    key={item.id}
                    className="p-2.5 bg-slate-900/60 rounded-xl border border-slate-850 flex items-center justify-between gap-2 group hover:border-amber-900/30 transition-all"
                  >
                    <div>
                      <div className="flex items-center gap-1.5">
                        <span className="text-[10px] font-bold text-amber-500 font-mono">x{item.quantity}</span>
                        <h5 className="text-xs font-semibold text-slate-200 font-serif leading-none">{item.unitName}</h5>
                      </div>
                      <span className="text-[8px] text-slate-500 font-mono mt-1 block">
                        {item.factionName} • Tier {item.tier.toUpperCase()} {item.upgraded ? '"Manada"' : '"Unas pocas"'}
                      </span>
                    </div>

                    <div className="flex items-center gap-3">
                      <div className="text-[10px] font-mono text-slate-400 flex flex-col items-end">
                        {item.costGold > 0 && <span>🟡 {item.costGold}</span>}
                        {item.costMaterials > 0 && <span>🪵 {item.costMaterials}</span>}
                        {item.costValuable > 0 && <span>🔮 {item.costValuable}</span>}
                      </div>
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="text-slate-500 hover:text-red-400 p-1 rounded transition cursor-pointer"
                        title="Remover tropa"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Aggregated Totals Panel */}
          {cart.length > 0 && (
            <div className="bg-slate-900 border border-slate-800/80 rounded-xl p-4 mt-4 space-y-3 shadow-md">
              <span className="text-[9px] uppercase font-mono tracking-widest text-slate-500 block">TOTALES ESTIMADOS DEL EJÉRCITO:</span>
              
              <div className="grid grid-cols-3 gap-2">
                <div className="bg-slate-950 p-2 rounded-lg border border-amber-900/20 text-center">
                  <span className="text-[9px] text-amber-500/70 uppercase font-mono font-bold block">Oro</span>
                  <span className="text-sm font-mono font-extrabold text-amber-400">🟡 {totalGold}</span>
                </div>
                <div className="bg-slate-950 p-2 rounded-lg border border-slate-800 text-center">
                  <span className="text-[9px] text-slate-400/80 uppercase font-mono font-bold block">Materiales</span>
                  <span className="text-sm font-mono font-extrabold text-slate-200">🪵 {totalMaterials}</span>
                </div>
                <div className="bg-slate-950 p-2 rounded-lg border border-purple-900/20 text-center">
                  <span className="text-[9px] text-purple-400/70 uppercase font-mono font-bold block">Valiosos</span>
                  <span className="text-sm font-mono font-extrabold text-purple-400">🔮 {totalValuable}</span>
                </div>
              </div>

              <div className="bg-amber-950/20 border border-amber-900/20 p-2 rounded-lg text-[9px] text-amber-300/80 leading-relaxed font-mono">
                💡 <strong>Regla de oro:</strong> Solo puedes reclutar tropas en ciudades que tengan construido su respectivo criadero (Dwelling) de ese rango de unidad. En las ciudades no hay tier Azul, el cual pertenece en exclusiva a las unidades neutrales.
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Quick recruitment rules summary */}
      <div className="bg-slate-950/60 rounded-2xl p-4 border border-slate-850 flex gap-4 text-xs text-slate-300 leading-relaxed">
        <HelpCircle className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
        <div className="space-y-1">
          <strong className="text-slate-200">Reglas Oficiales de Reclutamiento & Tiers:</strong>
          <p>
            • <strong>Tiers de Ciudades:</strong> El tier <strong>Bronce</strong> abarca las criaturas de nivel 1 a 3. El tier <strong>Plata</strong> abarca las de nivel 4 y 5. El tier <strong>Oro</strong> abarca los niveles superiores de nivel 6 y 7. No existe tier Azul en las ciudades.
          </p>
          <p>
            • <strong>Reverso de Carta ("Unas pocas" vs "Manada"):</strong> Al reclutar, decides el anverso o reverso de la carta. La versión "Unas pocas" representa la cantidad básica, mientras que "Manada" representa la versión mejorada (élite), con costes de recursos adicionales.
          </p>
          <p>
            • <strong>Mejorar Unidades:</strong> Puedes mejorar una unidad de tu ejército básico a su versión de élite en cualquier momento pagando la <strong>diferencia exacta</strong> de recursos del coste en tu ciudad (por ejemplo, mejorar un bronce básico a élite cuesta 1 Oro adicional).
          </p>
        </div>
      </div>
    </div>
  );
}
