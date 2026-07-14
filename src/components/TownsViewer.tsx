import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Building2, Coins, Hammer, Sparkles, Shield, Wand2, Swords, Crown, 
  BookOpen, Check, AlertTriangle, RefreshCw, Layers, ArrowRight, HelpCircle
} from 'lucide-react';
import { townsData, TownData, Building, ResourceCost } from '../data/townsData';

const FACTION_LIST = [
  { id: 'castillo', name: 'Castillo (Castle)', color: 'border-blue-900 bg-blue-950/20 text-blue-200 hover:bg-blue-900/10' },
  { id: 'necropolis', name: 'Necrópolis (Necropolis)', color: 'border-slate-800 bg-slate-900/20 text-amber-200 hover:bg-slate-800/10' },
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
  const [activeSubTab, setActiveSubTab] = useState<'production' | 'defense' | 'dwellings' | 'special'>('production');

  // Track constructed buildings
  // We identify constructed buildings by IDs like:
  // 'cityHall', 'capitol', 'marketplace', 'resourceSilo', 'citadel', 'castle',
  // 'mage1', 'mage2', 'mage3', 'mage4', 'mage5',
  // 'dwellBronzeUp', 'dwellSilver', 'dwellSilverUp', 'dwellGold', 'dwellGoldUp',
  // 'unique', 'grail'
  const [built, setBuilt] = useState<Record<string, boolean>>({
    cityHall: false,
    capitol: false,
    marketplace: false,
    resourceSilo: false,
    citadel: false,
    castle: false,
    mage1: false,
    mage2: false,
    mage3: false,
    mage4: false,
    mage5: false,
    dwellBronzeUp: false,
    dwellSilver: false,
    dwellSilverUp: false,
    dwellGold: false,
    dwellGoldUp: false,
    unique: false,
    grail: false
  });

  const [warnings, setWarnings] = useState<string[]>([]);

  const currentTown: TownData = townsData[selectedFaction] || townsData.castillo;

  // Reset simulator on faction change
  useEffect(() => {
    handleReset();
  }, [selectedFaction]);

  // Validation logic
  useEffect(() => {
    const list: string[] = [];

    // Dependencies
    if (built.capitol && !built.cityHall) {
      list.push('Para construir el Capitolio, primero debes tener construido el Cabildo.');
    }
    if (built.resourceSilo && !built.marketplace) {
      list.push('El Silo de Recursos requiere que el Mercado esté construido primero.');
    }
    if (built.castle && !built.citadel) {
      list.push('Para alzar el Castillo, primero debes erigir la Ciudadela.');
    }
    if (built.mage2 && !built.mage1) {
      list.push('La Cofradía de Magos Nivel 2 requiere el Nivel 1.');
    }
    if (built.mage3 && !built.mage2) {
      list.push('La Cofradía de Magos Nivel 3 requiere el Nivel 2.');
    }
    if (built.mage4 && !built.mage3) {
      list.push('La Cofradía de Magos Nivel 4 requiere el Nivel 3.');
    }
    if (built.mage5 && !built.mage4) {
      list.push('La Cofradía de Magos Nivel 5 requiere el Nivel 4.');
    }
    if (built.dwellSilver && !built.citadel) {
      list.push('La Morada de Plata requiere la Ciudadela construida.');
    }
    if (built.dwellSilverUp && !built.dwellSilver) {
      list.push('No puedes mejorar la Morada de Plata sin construir su versión base primero.');
    }
    if (built.dwellGold && !built.castle) {
      list.push('La Morada de Oro requiere el Castillo construido.');
    }
    if (built.dwellGoldUp && !built.dwellGold) {
      list.push('No puedes mejorar la Morada de Oro sin construir su versión base primero.');
    }

    setWarnings(list);
  }, [built]);

  const handleToggle = (key: string) => {
    setBuilt(prev => {
      const next = { ...prev, [key]: !prev[key] };
      
      // Auto-fixing dependencies on activation (convenience)
      if (key === 'capitol' && next.capitol) {
        next.cityHall = true;
      }
      if (key === 'resourceSilo' && next.resourceSilo) {
        next.marketplace = true;
      }
      if (key === 'castle' && next.castle) {
        next.citadel = true;
      }
      if (key === 'mage5' && next.mage5) {
        next.mage4 = true;
        next.mage3 = true;
        next.mage2 = true;
        next.mage1 = true;
      }
      if (key === 'mage4' && next.mage4) {
        next.mage3 = true;
        next.mage2 = true;
        next.mage1 = true;
      }
      if (key === 'mage3' && next.mage3) {
        next.mage2 = true;
        next.mage1 = true;
      }
      if (key === 'mage2' && next.mage2) {
        next.mage1 = true;
      }
      if (key === 'dwellSilverUp' && next.dwellSilverUp) {
        next.dwellSilver = true;
        next.citadel = true;
      }
      if (key === 'dwellSilver' && next.dwellSilver) {
        next.citadel = true;
      }
      if (key === 'dwellGoldUp' && next.dwellGoldUp) {
        next.dwellGold = true;
        next.castle = true;
        next.citadel = true;
      }
      if (key === 'dwellGold' && next.dwellGold) {
        next.castle = true;
        next.citadel = true;
      }

      // Auto-removal on deactivation
      if (key === 'cityHall' && !next.cityHall) {
        next.capitol = false;
      }
      if (key === 'marketplace' && !next.marketplace) {
        next.resourceSilo = false;
      }
      if (key === 'citadel' && !next.citadel) {
        next.castle = false;
        next.dwellSilver = false;
        next.dwellSilverUp = false;
        next.dwellGold = false;
        next.dwellGoldUp = false;
      }
      if (key === 'castle' && !next.castle) {
        next.dwellGold = false;
        next.dwellGoldUp = false;
      }
      if (key === 'mage1' && !next.mage1) {
        next.mage2 = false;
        next.mage3 = false;
        next.mage4 = false;
        next.mage5 = false;
      }
      if (key === 'mage2' && !next.mage2) {
        next.mage3 = false;
        next.mage4 = false;
        next.mage5 = false;
      }
      if (key === 'mage3' && !next.mage3) {
        next.mage4 = false;
        next.mage5 = false;
      }
      if (key === 'mage4' && !next.mage4) {
        next.mage5 = false;
      }
      if (key === 'dwellSilver' && !next.dwellSilver) {
        next.dwellSilverUp = false;
      }
      if (key === 'dwellGold' && !next.dwellGold) {
        next.dwellGoldUp = false;
      }

      return next;
    });
  };

  const handleReset = () => {
    setBuilt({
      cityHall: false,
      capitol: false,
      marketplace: false,
      resourceSilo: false,
      citadel: false,
      castle: false,
      mage1: false,
      mage2: false,
      mage3: false,
      mage4: false,
      mage5: false,
      dwellBronzeUp: false,
      dwellSilver: false,
      dwellSilverUp: false,
      dwellGold: false,
      dwellGoldUp: false,
      unique: false,
      grail: false
    });
  };

  // Calculate accumulated costs
  const calculateCosts = (): ResourceCost => {
    let gold = 0;
    let materials = 0;
    let valuables = 0;

    const addCost = (cost: ResourceCost) => {
      gold += cost.gold || 0;
      materials += cost.materials || 0;
      valuables += cost.valuables || 0;
    };

    if (built.cityHall) addCost(currentTown.commonBuildings.cityHall.cost);
    if (built.capitol) addCost(currentTown.commonBuildings.capitol.cost);
    if (built.marketplace) addCost(currentTown.commonBuildings.marketplace.cost);
    if (built.resourceSilo) addCost(currentTown.commonBuildings.resourceSilo.cost);
    if (built.citadel) addCost(currentTown.commonBuildings.citadel.cost);
    if (built.castle) addCost(currentTown.commonBuildings.castle.cost);

    // Mage guilds
    if (built.mage1) addCost(currentTown.commonBuildings.mageGuilds[0].cost);
    if (built.mage2) addCost(currentTown.commonBuildings.mageGuilds[1].cost);
    if (built.mage3) addCost(currentTown.commonBuildings.mageGuilds[2].cost);
    if (built.mage4) addCost(currentTown.commonBuildings.mageGuilds[3].cost);
    if (built.mage5 && currentTown.commonBuildings.mageGuilds[4]) {
      addCost(currentTown.commonBuildings.mageGuilds[4].cost);
    }

    // Dwellings
    if (built.dwellBronzeUp) addCost(currentTown.dwellings.bronze.cost);
    if (built.dwellSilver) addCost(currentTown.dwellings.silver.baseCost);
    if (built.dwellSilverUp) addCost(currentTown.dwellings.silver.upgradeCost);
    if (built.dwellGold) addCost(currentTown.dwellings.gold.baseCost);
    if (built.dwellGoldUp) addCost(currentTown.dwellings.gold.upgradeCost);

    // Special
    if (built.unique) addCost(currentTown.uniqueBuilding.cost);
    if (built.grail) addCost(currentTown.grailBuilding.cost);

    return { gold, materials, valuables };
  };

  const costs = calculateCosts();

  // Passive incomes
  const getGoldIncome = () => {
    if (built.grail) return 40; // Grial gives +20, plus whatever town hall / capitol gives
    if (built.capitol) return 20;
    if (built.cityHall) return 15;
    return 10; // Base Ayuntamiento
  };

  const getSiloProduction = () => {
    if (!built.resourceSilo) return 'Ninguna';
    if (selectedFaction === 'castillo' || selectedFaction === 'fortaleza') {
      return '+1 Material (Madera o Mineral)';
    }
    if (selectedFaction === 'necropolis') {
      return '+1 Valioso (Gemas/Azufre/Mercury/Cristal)';
    }
    if (selectedFaction === 'mazmorra' || selectedFaction === 'infierno') {
      return '+1 Valioso (Azufre)';
    }
    if (selectedFaction === 'rampart' || selectedFaction === 'torre') {
      return '+1 Valioso (Gemas)';
    }
    if (selectedFaction === 'stronghold') {
      return '+1 Material (Madera)';
    }
    if (selectedFaction === 'confluencia') {
      return '+1 Valioso (Azufre/Gema)';
    }
    if (selectedFaction === 'cove') {
      return '+1 Valioso (Azufre/Mercury)';
    }
    return 'Ninguna';
  };

  const activeFactionObj = FACTION_LIST.find(f => f.id === selectedFaction) || FACTION_LIST[0];

  return (
    <div className="space-y-6" id="towns-viewer-root">
      
      {/* 1. Header and Selector Grid */}
      <div className="bg-slate-900/40 border border-slate-800/80 rounded-3xl p-5 shadow-xl">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="space-y-1">
            <h2 className="text-xl font-bold text-amber-500 uppercase tracking-widest flex items-center gap-2">
              <Building2 className="w-5 h-5 text-amber-600" />
              Ciudades de cada Facción
            </h2>
            <p className="text-xs text-slate-400">
              Explora los planos de construcción oficiales del juego de mesa y planifica tu estrategia de desarrollo.
            </p>
          </div>
          <div className="flex items-center gap-2 text-xs font-mono text-slate-500">
            <Layers className="w-4 h-4 text-slate-600" />
            <span>1 CONSTRUCCIÓN POR RONDA DE JUEGO</span>
          </div>
        </div>

        {/* Faction Pills Slider/Grid */}
        <div className="mt-4 grid grid-cols-2 sm:grid-cols-5 md:grid-cols-10 gap-2">
          {FACTION_LIST.map((fac) => {
            const isActive = selectedFaction === fac.id;
            return (
              <button
                key={fac.id}
                onClick={() => setSelectedFaction(fac.id)}
                className={`py-2 px-1 text-center rounded-xl text-xs font-bold border transition-all truncate cursor-pointer ${
                  isActive 
                    ? 'bg-amber-600 text-white border-amber-500 shadow-md shadow-amber-950/40 transform scale-[1.03]'
                    : fac.color
                }`}
              >
                {fac.name.split(' ')[0]}
              </button>
            );
          })}
        </div>
      </div>

      {/* 2. Main Content Bento Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* LEFT COLUMN: Lore, Summary & Resources (col-span-4) */}
        <div className="lg:col-span-4 space-y-6">
          
          {/* Faction Lore Card */}
          <div className="bg-slate-900/50 border border-slate-800 rounded-3xl p-5 space-y-4 shadow-xl relative overflow-hidden">
            <div className="absolute right-3 top-3 opacity-10">
              <Crown className="w-24 h-24 text-amber-500" />
            </div>
            
            <div className="space-y-1">
              <span className="text-[10px] font-mono text-amber-500 uppercase tracking-widest">
                Metrópolis de {activeFactionObj.name.split(' ')[0]}
              </span>
              <h3 className="text-lg font-bold text-slate-100 tracking-tight flex items-center gap-2">
                {currentTown.townName}
              </h3>
            </div>
            
            <p className="text-xs text-slate-400 leading-relaxed italic">
              "{currentTown.lore}"
            </p>
          </div>

          {/* Construction Simulator / Planner Summary */}
          <div className="bg-slate-900/50 border border-slate-800 rounded-3xl p-5 space-y-5 shadow-xl">
            <div className="flex items-center justify-between border-b border-slate-800/80 pb-2">
              <h4 className="text-xs font-bold text-amber-500 uppercase tracking-widest flex items-center gap-1.5">
                <Hammer className="w-4 h-4 text-amber-600" />
                Planificador de Ciudad
              </h4>
              <button 
                onClick={handleReset}
                className="text-[10px] font-mono font-bold text-slate-500 hover:text-amber-500 flex items-center gap-1 transition-colors cursor-pointer"
              >
                <RefreshCw className="w-3 h-3" />
                REINICIAR
              </button>
            </div>

            {/* Simulated Accumulative Costs */}
            <div className="space-y-3">
              <span className="text-[10px] text-slate-500 font-mono block uppercase">
                Costo Total Planificado:
              </span>
              <div className="grid grid-cols-3 gap-3">
                <div className="bg-amber-950/20 border border-amber-900/30 rounded-2xl p-3 text-center">
                  <Coins className="w-5 h-5 text-amber-500 mx-auto mb-1" />
                  <span className="text-lg font-bold text-amber-300 block font-mono">
                    {costs.gold}
                  </span>
                  <span className="text-[9px] text-amber-600 uppercase font-mono font-semibold">Oro (O)</span>
                </div>
                
                <div className="bg-orange-950/20 border border-orange-900/30 rounded-2xl p-3 text-center">
                  <Hammer className="w-5 h-5 text-orange-500 mx-auto mb-1" />
                  <span className="text-lg font-bold text-orange-300 block font-mono">
                    {costs.materials}
                  </span>
                  <span className="text-[9px] text-orange-600 uppercase font-mono font-semibold">Mat. (P)</span>
                </div>

                <div className="bg-purple-950/20 border border-purple-900/30 rounded-2xl p-3 text-center">
                  <Crown className="w-5 h-5 text-purple-500 mx-auto mb-1" />
                  <span className="text-lg font-bold text-purple-300 block font-mono">
                    {costs.valuables}
                  </span>
                  <span className="text-[9px] text-purple-600 uppercase font-mono font-semibold">Val. (I)</span>
                </div>
              </div>
            </div>

            {/* Passive Incomes */}
            <div className="bg-slate-950/60 border border-slate-800 p-4 rounded-2xl space-y-3">
              <span className="text-[10px] text-slate-500 font-mono block uppercase">
                Ingresos Pasivos en Fase de Recursos:
              </span>
              
              <div className="flex items-center justify-between text-xs border-b border-slate-800/40 pb-2">
                <span className="text-slate-400 flex items-center gap-1.5">
                  <Coins className="w-3.5 h-3.5 text-amber-500" />
                  Ingreso de Oro:
                </span>
                <span className="font-bold text-amber-400 font-mono text-sm">
                  +{getGoldIncome()} Oro / ronda
                </span>
              </div>

              <div className="flex items-center justify-between text-xs">
                <span className="text-slate-400 flex items-center gap-1.5">
                  <Layers className="w-3.5 h-3.5 text-orange-500" />
                  Silo de Recursos:
                </span>
                <span className="font-semibold text-slate-300 text-[11px] font-mono text-right">
                  {getSiloProduction()}
                </span>
              </div>
            </div>

            {/* Rule Warnings */}
            <AnimatePresence>
              {warnings.length > 0 && (
                <motion.div 
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 5 }}
                  className="bg-red-950/30 border border-red-900/40 p-4 rounded-2xl space-y-1.5"
                >
                  <div className="flex items-center gap-1.5 text-red-400 text-xs font-bold uppercase tracking-wider">
                    <AlertTriangle className="w-4 h-4 shrink-0" />
                    Conflictos de Requisitos:
                  </div>
                  <ul className="text-[10px] text-red-300/90 list-disc list-inside space-y-1 leading-normal">
                    {warnings.map((warn, i) => (
                      <li key={i}>{warn}</li>
                    ))}
                  </ul>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

        </div>

        {/* RIGHT COLUMN: Interactive Town Board (col-span-8) */}
        <div className="lg:col-span-8 space-y-6">
          
          {/* Sub Navigation Bar */}
          <div className="bg-slate-900/30 border border-slate-800 p-1 rounded-2xl flex flex-wrap gap-1">
            <button
              onClick={() => setActiveSubTab('production')}
              className={`flex-1 min-w-[120px] py-2 px-3 text-xs font-semibold rounded-xl transition-all cursor-pointer ${
                activeSubTab === 'production' 
                  ? 'bg-amber-600 text-white shadow' 
                  : 'text-slate-400 hover:text-slate-200 hover:bg-slate-850/40'
              }`}
            >
              Producción e Ingresos
            </button>
            <button
              onClick={() => setActiveSubTab('defense')}
              className={`flex-1 min-w-[120px] py-2 px-3 text-xs font-semibold rounded-xl transition-all cursor-pointer ${
                activeSubTab === 'defense' 
                  ? 'bg-amber-600 text-white shadow' 
                  : 'text-slate-400 hover:text-slate-200 hover:bg-slate-850/40'
              }`}
            >
              Defensa y Cofradías
            </button>
            <button
              onClick={() => setActiveSubTab('dwellings')}
              className={`flex-1 min-w-[120px] py-2 px-3 text-xs font-semibold rounded-xl transition-all cursor-pointer ${
                activeSubTab === 'dwellings' 
                  ? 'bg-amber-600 text-white shadow' 
                  : 'text-slate-400 hover:text-slate-200 hover:bg-slate-850/40'
              }`}
            >
              Moradas de Tropas
            </button>
            <button
              onClick={() => setActiveSubTab('special')}
              className={`flex-1 min-w-[120px] py-2 px-3 text-xs font-semibold rounded-xl transition-all cursor-pointer ${
                activeSubTab === 'special' 
                  ? 'bg-amber-600 text-white shadow' 
                  : 'text-slate-400 hover:text-slate-200 hover:bg-slate-850/40'
              }`}
            >
              Especiales y Grial
            </button>
          </div>

          {/* Tab Viewport */}
          <div className="min-h-[400px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeSubTab}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="grid grid-cols-1 md:grid-cols-2 gap-4"
              >
                {/* SUB TAB: Production & Town Hall */}
                {activeSubTab === 'production' && (
                  <>
                    {/* Built-in Base Ayuntamiento */}
                    <div className="bg-slate-900/40 border border-amber-950/40 rounded-2xl p-4 flex flex-col justify-between opacity-80 border-l-4 border-l-amber-600">
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <span className="text-[10px] font-mono text-amber-500 font-semibold uppercase tracking-wider">Ayuntamiento</span>
                          <span className="px-2 py-0.5 bg-emerald-950/60 text-emerald-400 border border-emerald-900 rounded-full text-[9px] font-mono font-bold uppercase">Inicial</span>
                        </div>
                        <h4 className="text-sm font-bold text-slate-100">{currentTown.startingBuildings[0].name}</h4>
                        <p className="text-xs text-slate-400 leading-normal">{currentTown.startingBuildings[0].benefit}</p>
                      </div>
                      <div className="pt-3 border-t border-slate-800/40 flex items-center justify-between text-[11px] font-mono">
                        <span className="text-slate-500">Costo: Gratuito</span>
                        <span className="text-amber-500 font-bold">+10 Oro / ronda</span>
                      </div>
                    </div>

                    {/* Cabildo (City Hall) */}
                    <div 
                      onClick={() => handleToggle('cityHall')}
                      className={`border rounded-2xl p-4 flex flex-col justify-between cursor-pointer transition-all ${
                        built.cityHall 
                          ? 'bg-amber-950/15 border-amber-500/60 shadow-lg shadow-amber-950/20' 
                          : 'bg-slate-900/30 border-slate-800 hover:border-slate-700'
                      }`}
                    >
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <span className="text-[10px] font-mono text-amber-500 font-semibold uppercase tracking-wider">Cabildo</span>
                          <div className={`w-4 h-4 rounded-full border flex items-center justify-center ${built.cityHall ? 'bg-amber-600 border-amber-500 text-white' : 'border-slate-700'}`}>
                            {built.cityHall && <Check className="w-2.5 h-2.5" />}
                          </div>
                        </div>
                        <h4 className="text-sm font-bold text-slate-100">{currentTown.commonBuildings.cityHall.name}</h4>
                        <p className="text-xs text-slate-400 leading-normal">{currentTown.commonBuildings.cityHall.benefit}</p>
                      </div>
                      <div className="pt-3 border-t border-slate-800/40 flex items-center justify-between text-[11px] font-mono">
                        <span className="text-slate-500 flex items-center gap-1">
                          Costo: <Coins className="w-3 h-3 text-amber-500 inline" /> 10 <Hammer className="w-3 h-3 text-orange-500 inline" /> 1
                        </span>
                        <span className="text-amber-500 font-bold">Aumenta a +15 Oro</span>
                      </div>
                    </div>

                    {/* Capitolio (Capitol) */}
                    <div 
                      onClick={() => handleToggle('capitol')}
                      className={`border rounded-2xl p-4 flex flex-col justify-between cursor-pointer transition-all ${
                        built.capitol 
                          ? 'bg-amber-950/15 border-amber-500/60 shadow-lg shadow-amber-950/20' 
                          : 'bg-slate-900/30 border-slate-800 hover:border-slate-700'
                      }`}
                    >
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <span className="text-[10px] font-mono text-amber-500 font-semibold uppercase tracking-wider">Capitolio</span>
                          <div className={`w-4 h-4 rounded-full border flex items-center justify-center ${built.capitol ? 'bg-amber-600 border-amber-500 text-white' : 'border-slate-700'}`}>
                            {built.capitol && <Check className="w-2.5 h-2.5" />}
                          </div>
                        </div>
                        <h4 className="text-sm font-bold text-slate-100">{currentTown.commonBuildings.capitol.name}</h4>
                        <p className="text-xs text-slate-400 leading-normal">{currentTown.commonBuildings.capitol.benefit}</p>
                      </div>
                      <div className="pt-3 border-t border-slate-800/40 flex items-center justify-between text-[11px] font-mono">
                        <span className="text-slate-500 flex items-center gap-1">
                          Costo: <Coins className="w-3 h-3 text-amber-500 inline" /> 15 <Hammer className="w-3 h-3 text-orange-500 inline" /> 2 <Crown className="w-3 h-3 text-purple-500 inline" /> 1
                        </span>
                        <span className="text-amber-500 font-bold">Aumenta a +20 Oro</span>
                      </div>
                    </div>

                    {/* Mercado (Marketplace) */}
                    <div 
                      onClick={() => handleToggle('marketplace')}
                      className={`border rounded-2xl p-4 flex flex-col justify-between cursor-pointer transition-all ${
                        built.marketplace 
                          ? 'bg-amber-950/15 border-amber-500/60 shadow-lg shadow-amber-950/20' 
                          : 'bg-slate-900/30 border-slate-800 hover:border-slate-700'
                      }`}
                    >
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <span className="text-[10px] font-mono text-amber-500 font-semibold uppercase tracking-wider">Mercado</span>
                          <div className={`w-4 h-4 rounded-full border flex items-center justify-center ${built.marketplace ? 'bg-amber-600 border-amber-500 text-white' : 'border-slate-700'}`}>
                            {built.marketplace && <Check className="w-2.5 h-2.5" />}
                          </div>
                        </div>
                        <h4 className="text-sm font-bold text-slate-100">{currentTown.commonBuildings.marketplace.name}</h4>
                        <p className="text-xs text-slate-400 leading-normal">{currentTown.commonBuildings.marketplace.benefit}</p>
                      </div>
                      <div className="pt-3 border-t border-slate-800/40 flex items-center justify-between text-[11px] font-mono">
                        <span className="text-slate-500 flex items-center gap-1">
                          Costo: <Coins className="w-3 h-3 text-amber-500 inline" /> 5
                        </span>
                        <span className="text-slate-400">Habilita Comercio</span>
                      </div>
                    </div>

                    {/* Silo de Recursos */}
                    <div 
                      onClick={() => handleToggle('resourceSilo')}
                      className={`border rounded-2xl p-4 flex flex-col justify-between cursor-pointer transition-all ${
                        built.resourceSilo 
                          ? 'bg-amber-950/15 border-amber-500/60 shadow-lg shadow-amber-950/20' 
                          : 'bg-slate-900/30 border-slate-800 hover:border-slate-700'
                      }`}
                    >
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <span className="text-[10px] font-mono text-amber-500 font-semibold uppercase tracking-wider">Silo</span>
                          <div className={`w-4 h-4 rounded-full border flex items-center justify-center ${built.resourceSilo ? 'bg-amber-600 border-amber-500 text-white' : 'border-slate-700'}`}>
                            {built.resourceSilo && <Check className="w-2.5 h-2.5" />}
                          </div>
                        </div>
                        <h4 className="text-sm font-bold text-slate-100">{currentTown.commonBuildings.resourceSilo.name}</h4>
                        <p className="text-xs text-slate-400 leading-normal">{currentTown.commonBuildings.resourceSilo.benefit}</p>
                      </div>
                      <div className="pt-3 border-t border-slate-800/40 flex items-center justify-between text-[11px] font-mono">
                        <span className="text-slate-500 flex items-center gap-1">
                          Costo: <Coins className="w-3 h-3 text-amber-500 inline" /> 5
                        </span>
                        <span className="text-orange-500 font-semibold">{getSiloProduction().split(' ')[0]} {getSiloProduction().split(' ')[1] || ''}</span>
                      </div>
                    </div>
                  </>
                )}

                {/* SUB TAB: Defense & Magic Guilds */}
                {activeSubTab === 'defense' && (
                  <>
                    {/* Fuerte (Fort) - Built-in */}
                    <div className="bg-slate-900/40 border border-amber-950/40 rounded-2xl p-4 flex flex-col justify-between opacity-80 border-l-4 border-l-amber-600">
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <span className="text-[10px] font-mono text-amber-500 font-semibold uppercase tracking-wider">Defensa</span>
                          <span className="px-2 py-0.5 bg-emerald-950/60 text-emerald-400 border border-emerald-900 rounded-full text-[9px] font-mono font-bold uppercase">Inicial</span>
                        </div>
                        <h4 className="text-sm font-bold text-slate-100">{currentTown.startingBuildings[1].name}</h4>
                        <p className="text-xs text-slate-400 leading-normal">{currentTown.startingBuildings[1].benefit}</p>
                      </div>
                      <div className="pt-3 border-t border-slate-800/40 flex items-center justify-between text-[11px] font-mono">
                        <span className="text-slate-500">Costo: Gratuito</span>
                        <span className="text-slate-300">Defensa Base</span>
                      </div>
                    </div>

                    {/* Ciudadela (Citadel) */}
                    <div 
                      onClick={() => handleToggle('citadel')}
                      className={`border rounded-2xl p-4 flex flex-col justify-between cursor-pointer transition-all ${
                        built.citadel 
                          ? 'bg-amber-950/15 border-amber-500/60 shadow-lg shadow-amber-950/20' 
                          : 'bg-slate-900/30 border-slate-800 hover:border-slate-700'
                      }`}
                    >
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <span className="text-[10px] font-mono text-amber-500 font-semibold uppercase tracking-wider">Fortificación</span>
                          <div className={`w-4 h-4 rounded-full border flex items-center justify-center ${built.citadel ? 'bg-amber-600 border-amber-500 text-white' : 'border-slate-700'}`}>
                            {built.citadel && <Check className="w-2.5 h-2.5" />}
                          </div>
                        </div>
                        <h4 className="text-sm font-bold text-slate-100">{currentTown.commonBuildings.citadel.name}</h4>
                        <p className="text-xs text-slate-400 leading-normal">{currentTown.commonBuildings.citadel.benefit}</p>
                      </div>
                      <div className="pt-3 border-t border-slate-800/40 flex items-center justify-between text-[11px] font-mono">
                        <span className="text-slate-500 flex items-center gap-1">
                          Costo: <Coins className="w-3 h-3 text-amber-500 inline" /> 5 <Hammer className="w-3 h-3 text-orange-500 inline" /> 2
                        </span>
                        <span className="text-slate-300">Habilita Plata</span>
                      </div>
                    </div>

                    {/* Castillo (Castle) */}
                    <div 
                      onClick={() => handleToggle('castle')}
                      className={`border rounded-2xl p-4 flex flex-col justify-between cursor-pointer transition-all ${
                        built.castle 
                          ? 'bg-amber-950/15 border-amber-500/60 shadow-lg shadow-amber-950/20' 
                          : 'bg-slate-900/30 border-slate-800 hover:border-slate-700'
                      }`}
                    >
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <span className="text-[10px] font-mono text-amber-500 font-semibold uppercase tracking-wider">Fortificación</span>
                          <div className={`w-4 h-4 rounded-full border flex items-center justify-center ${built.castle ? 'bg-amber-600 border-amber-500 text-white' : 'border-slate-700'}`}>
                            {built.castle && <Check className="w-2.5 h-2.5" />}
                          </div>
                        </div>
                        <h4 className="text-sm font-bold text-slate-100">{currentTown.commonBuildings.castle.name}</h4>
                        <p className="text-xs text-slate-400 leading-normal">{currentTown.commonBuildings.castle.benefit}</p>
                      </div>
                      <div className="pt-3 border-t border-slate-800/40 flex items-center justify-between text-[11px] font-mono">
                        <span className="text-slate-500 flex items-center gap-1">
                          Costo: <Coins className="w-3 h-3 text-amber-500 inline" /> 10 <Hammer className="w-3 h-3 text-orange-500 inline" /> 3 <Crown className="w-3 h-3 text-purple-500 inline" /> 1
                        </span>
                        <span className="text-slate-300">Habilita Oro</span>
                      </div>
                    </div>

                    {/* Mage Guilds Tracker Container */}
                    <div className="bg-slate-950/40 border border-slate-850 p-4 rounded-2xl space-y-3 md:col-span-2">
                      <h4 className="text-xs font-bold text-slate-300 uppercase tracking-wider flex items-center gap-1.5 border-b border-slate-800/60 pb-1.5">
                        <Wand2 className="w-4 h-4 text-violet-500" />
                        Niveles de la Cofradía de Magos
                      </h4>

                      <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 gap-2">
                        {currentTown.commonBuildings.mageGuilds.map((guild, idx) => {
                          const key = `mage${idx + 1}`;
                          const isConstructed = built[key];
                          return (
                            <button
                              key={key}
                              onClick={() => handleToggle(key)}
                              className={`py-2 px-1 text-center rounded-xl text-xs font-semibold border flex flex-col items-center justify-between h-24 transition-all cursor-pointer ${
                                isConstructed 
                                  ? 'bg-violet-950/20 border-violet-500/60 text-violet-200 shadow shadow-violet-950/50'
                                  : 'bg-slate-900/30 border-slate-800 text-slate-400 hover:text-slate-200'
                              }`}
                            >
                              <span className="text-[10px] uppercase font-mono font-bold tracking-tight">Nivel {idx + 1}</span>
                              <Wand2 className={`w-5 h-5 my-1.5 ${isConstructed ? 'text-violet-400 animate-pulse' : 'text-slate-600'}`} />
                              <span className="text-[9px] font-mono leading-none">
                                Costo: {guild.cost.gold}O {guild.cost.materials ? `+${guild.cost.materials}P` : ''} {guild.cost.valuables ? `+${guild.cost.valuables}I` : ''}
                              </span>
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  </>
                )}

                {/* SUB TAB: Creature Dwellings */}
                {activeSubTab === 'dwellings' && (
                  <>
                    {/* Tier 1 Bronze Dwelling */}
                    <div className="bg-slate-900/50 border border-slate-850 p-4 rounded-2xl flex flex-col justify-between space-y-3 relative overflow-hidden">
                      <div className="space-y-1">
                        <span className="px-2 py-0.5 bg-amber-900/20 text-amber-500 border border-amber-900/30 rounded-full text-[8px] font-mono font-bold uppercase tracking-wider">
                          Morada de Bronce (Tier 1)
                        </span>
                        <h4 className="text-sm font-bold text-slate-100">{currentTown.dwellings.bronze.name}</h4>
                        <div className="text-[11px] text-slate-300 leading-relaxed font-mono space-y-1">
                          <p>• Básico: <span className="text-slate-100 font-semibold">{currentTown.dwellings.bronze.unit}</span> (Inicial)</p>
                          <p>• Élite: <span className="text-amber-400 font-semibold">{currentTown.dwellings.bronze.upgradedUnit}</span></p>
                        </div>
                      </div>

                      <div className="pt-3 border-t border-slate-800/40 flex items-center justify-between">
                        <span className="text-[10px] text-slate-500 font-mono">
                          Mejora: <Coins className="w-3 h-3 text-amber-500 inline" /> {currentTown.dwellings.bronze.cost.gold} <Hammer className="w-3 h-3 text-orange-500 inline" /> {currentTown.dwellings.bronze.cost.materials}
                        </span>
                        <button
                          onClick={() => handleToggle('dwellBronzeUp')}
                          className={`py-1 px-3 rounded-lg text-xs font-semibold cursor-pointer transition-colors ${
                            built.dwellBronzeUp 
                              ? 'bg-amber-600 text-white' 
                              : 'bg-slate-800 hover:bg-slate-700 text-slate-300'
                          }`}
                        >
                          {built.dwellBronzeUp ? '✓ Mejorado' : 'Mejorar'}
                        </button>
                      </div>
                    </div>

                    {/* Tier 2 Silver Dwelling */}
                    <div className="bg-slate-900/50 border border-slate-850 p-4 rounded-2xl flex flex-col justify-between space-y-3 relative overflow-hidden">
                      <div className="space-y-1">
                        <span className="px-2 py-0.5 bg-slate-800 text-slate-300 border border-slate-700 rounded-full text-[8px] font-mono font-bold uppercase tracking-wider">
                          Morada de Plata (Tier 2)
                        </span>
                        <h4 className="text-sm font-bold text-slate-100">{currentTown.dwellings.silver.name}</h4>
                        <div className="text-[11px] text-slate-300 leading-relaxed font-mono space-y-1">
                          <p>• Básico: <span className="text-slate-100 font-semibold">{currentTown.dwellings.silver.unit}</span></p>
                          <p>• Élite: <span className="text-amber-400 font-semibold">{currentTown.dwellings.silver.upgradedUnit}</span></p>
                        </div>
                      </div>

                      <div className="pt-3 border-t border-slate-800/40 flex flex-col space-y-2">
                        <div className="flex items-center justify-between text-[10px] text-slate-500 font-mono">
                          <span>Base: {currentTown.dwellings.silver.baseCost.gold}O + {currentTown.dwellings.silver.baseCost.materials}P</span>
                          <span>Mejora: {currentTown.dwellings.silver.upgradeCost.gold}O + {currentTown.dwellings.silver.upgradeCost.materials}P</span>
                        </div>
                        <div className="flex gap-2">
                          <button
                            onClick={() => handleToggle('dwellSilver')}
                            className={`flex-1 py-1 px-2 rounded-lg text-xs font-semibold cursor-pointer transition-colors ${
                              built.dwellSilver 
                                ? 'bg-amber-600 text-white' 
                                : 'bg-slate-800 hover:bg-slate-700 text-slate-300'
                            }`}
                          >
                            {built.dwellSilver ? '✓ Base built' : 'Alzar Base'}
                          </button>
                          <button
                            onClick={() => handleToggle('dwellSilverUp')}
                            className={`flex-1 py-1 px-2 rounded-lg text-xs font-semibold cursor-pointer transition-colors ${
                              built.dwellSilverUp 
                                ? 'bg-emerald-600 text-white' 
                                : 'bg-slate-800 hover:bg-slate-700 text-slate-300'
                            }`}
                          >
                            {built.dwellSilverUp ? '✓ Mejorada' : 'Mejorar'}
                          </button>
                        </div>
                      </div>
                    </div>

                    {/* Tier 3 Gold Dwelling */}
                    <div className="bg-slate-900/50 border border-slate-850 p-4 rounded-2xl flex flex-col justify-between space-y-3 relative overflow-hidden md:col-span-2">
                      <div className="space-y-1">
                        <span className="px-2 py-0.5 bg-yellow-950/20 text-yellow-500 border border-yellow-900/30 rounded-full text-[8px] font-mono font-bold uppercase tracking-wider">
                          Morada de Oro / Legendaria (Tier 3)
                        </span>
                        <h4 className="text-sm font-bold text-slate-100">{currentTown.dwellings.gold.name}</h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-[11px] text-slate-300 leading-relaxed font-mono pt-1">
                          <p>• Básico: <span className="text-slate-100 font-semibold">{currentTown.dwellings.gold.unit}</span></p>
                          <p>• Élite: <span className="text-amber-400 font-semibold">{currentTown.dwellings.gold.upgradedUnit}</span></p>
                        </div>
                      </div>

                      <div className="pt-3 border-t border-slate-800/40 flex flex-col space-y-2">
                        <div className="flex items-center justify-between text-[10px] text-slate-500 font-mono">
                          <span>Base: {currentTown.dwellings.gold.baseCost.gold}O + {currentTown.dwellings.gold.baseCost.materials}P + {currentTown.dwellings.gold.baseCost.valuables}I</span>
                          <span>Mejora: {currentTown.dwellings.gold.upgradeCost.gold}O + {currentTown.dwellings.gold.upgradeCost.materials}P + {currentTown.dwellings.gold.upgradeCost.valuables}I</span>
                        </div>
                        <div className="flex gap-2">
                          <button
                            onClick={() => handleToggle('dwellGold')}
                            className={`flex-1 py-1.5 px-3 rounded-lg text-xs font-semibold cursor-pointer transition-colors ${
                              built.dwellGold 
                                ? 'bg-amber-600 text-white' 
                                : 'bg-slate-800 hover:bg-slate-700 text-slate-300'
                            }`}
                          >
                            {built.dwellGold ? '✓ Base built' : 'Construir Morada Dorada'}
                          </button>
                          <button
                            onClick={() => handleToggle('dwellGoldUp')}
                            className={`flex-1 py-1.5 px-3 rounded-lg text-xs font-semibold cursor-pointer transition-colors ${
                              built.dwellGoldUp 
                                ? 'bg-emerald-600 text-white' 
                                : 'bg-slate-800 hover:bg-slate-700 text-slate-300'
                            }`}
                          >
                            {built.dwellGoldUp ? '✓ Mejorada' : 'Mejorar a Élite'}
                          </button>
                        </div>
                      </div>
                    </div>
                  </>
                )}

                {/* SUB TAB: Special & Grail */}
                {activeSubTab === 'special' && (
                  <>
                    {/* Unique Faction Special Building */}
                    <div 
                      onClick={() => handleToggle('unique')}
                      className={`border rounded-2xl p-5 flex flex-col justify-between cursor-pointer transition-all ${
                        built.unique 
                          ? 'bg-amber-950/15 border-amber-500/60 shadow-lg shadow-amber-950/20' 
                          : 'bg-slate-900/30 border-slate-800 hover:border-slate-700'
                      }`}
                    >
                      <div className="space-y-3">
                        <div className="flex items-center justify-between">
                          <span className="px-2.5 py-0.5 bg-amber-600/10 text-amber-500 border border-amber-500/20 rounded-full text-[9px] font-mono font-bold uppercase tracking-widest">
                            Edificio Único de Facción
                          </span>
                          <div className={`w-4 h-4 rounded-full border flex items-center justify-center ${built.unique ? 'bg-amber-600 border-amber-500 text-white' : 'border-slate-700'}`}>
                            {built.unique && <Check className="w-2.5 h-2.5" />}
                          </div>
                        </div>
                        <h4 className="text-base font-bold text-slate-100 flex items-center gap-2">
                          <Crown className="w-4 h-4 text-amber-500" />
                          {currentTown.uniqueBuilding.name}
                        </h4>
                        <p className="text-xs text-slate-400 leading-relaxed">
                          {currentTown.uniqueBuilding.benefit}
                        </p>
                      </div>
                      
                      <div className="pt-4 border-t border-slate-800/40 flex items-center justify-between text-[11px] font-mono mt-4">
                        <span className="text-slate-500">Costo: <Coins className="w-3 h-3 text-amber-500 inline" /> {currentTown.uniqueBuilding.cost.gold}</span>
                        <span className="text-amber-500 font-bold">Ventaja Exclusiva</span>
                      </div>
                    </div>

                    {/* Legendary Grail Structure */}
                    <div 
                      onClick={() => handleToggle('grail')}
                      className={`border rounded-2xl p-5 flex flex-col justify-between cursor-pointer transition-all ${
                        built.grail 
                          ? 'bg-emerald-950/10 border-emerald-500/60 shadow-lg shadow-emerald-950/20' 
                          : 'bg-slate-900/30 border-slate-800 hover:border-slate-700'
                      }`}
                    >
                      <div className="space-y-3">
                        <div className="flex items-center justify-between">
                          <span className="px-2.5 py-0.5 bg-emerald-600/10 text-emerald-400 border border-emerald-500/20 rounded-full text-[9px] font-mono font-bold uppercase tracking-widest">
                            Monumento del Grial
                          </span>
                          <div className={`w-4 h-4 rounded-full border flex items-center justify-center ${built.grail ? 'bg-emerald-600 border-emerald-500 text-white' : 'border-slate-700'}`}>
                            {built.grail && <Check className="w-2.5 h-2.5" />}
                          </div>
                        </div>
                        <h4 className="text-base font-bold text-slate-100 flex items-center gap-2">
                          <Sparkles className="w-4 h-4 text-emerald-400" />
                          {currentTown.grailBuilding.name}
                        </h4>
                        <p className="text-xs text-slate-400 leading-relaxed">
                          {currentTown.grailBuilding.benefit}
                        </p>
                      </div>
                      
                      <div className="pt-4 border-t border-slate-800/40 flex items-center justify-between text-[11px] font-mono mt-4">
                        <span className="text-slate-500">Costo: Llevar Grial a Ciudad</span>
                        <span className="text-emerald-400 font-bold">+20 Oro y Poder Sagrado</span>
                      </div>
                    </div>
                  </>
                )}
              </motion.div>
            </AnimatePresence>
          </div>

        </div>

      </div>

      {/* 3. Global Town Board Construction Rules Section */}
      <div className="bg-slate-900/30 border border-slate-800 rounded-3xl p-5 md:p-6 shadow-xl space-y-4">
        <h3 className="text-sm font-bold text-slate-200 uppercase tracking-widest flex items-center gap-2 border-b border-slate-800/60 pb-2">
          <BookOpen className="w-4 h-4 text-amber-500" />
          Reglamento Oficial: Expansión de la Ciudad (Juego de Mesa)
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-xs leading-relaxed text-slate-400">
          <div className="space-y-1 bg-slate-950/20 p-3 rounded-xl border border-slate-850">
            <span className="font-bold text-slate-200 block">Límite de Obras por Ronda</span>
            <p>Cada jugador puede erigir un máximo de **un único edificio** por ronda de juego de mesa en su respectivo tablero de ciudad natal, pagando sus costos.</p>
          </div>
          
          <div className="space-y-1 bg-slate-950/20 p-3 rounded-xl border border-slate-850">
            <span className="font-bold text-slate-200 block">Silo de Recursos y Minas</span>
            <p>El Silo provee recursos cada vez que ocurre la **Fase de Recursos** (rondas impares, excepto ronda 1), sumándose a tus ingresos fijos del Ayuntamiento.</p>
          </div>

          <div className="space-y-1 bg-slate-950/20 p-3 rounded-xl border border-slate-850">
            <span className="font-bold text-slate-200 block">Requisitos de las Moradas</span>
            <p>La Morada de Bronce es inicial. La Morada de Plata requiere tener construida la **Ciudadela**, y la Morada de Oro requiere construir el **Castillo**.</p>
          </div>
        </div>
      </div>

    </div>
  );
}
