import React, { useState, useEffect } from 'react';
import RulesBrowser from './components/RulesBrowser';
import ChatAdvisor from './components/ChatAdvisor';
import RulebookPDF from './components/RulebookPDF';
import GameTimer from './components/GameTimer';
import RecruitmentCalculator from './components/RecruitmentCalculator';
import ScenariosDatabase from './components/ScenariosDatabase';
import HeroesViewer from './components/HeroesViewer';
// @ts-ignore
import oracleLogo from './assets/images/sandro_oracle_titled_logo_1783458347417.jpg';
import { RuleSection, Player } from './types';
import { 
  Sparkles, Library, Timer, Printer, Award, BookOpen, 
  HelpCircle, Compass, Gamepad2, Hourglass, Swords, Users, Dices, Coins
} from 'lucide-react';

const FACTIONS = [
  { id: 'castillo', name: 'Castillo (Castle)', color: 'bg-blue-950/60 border-blue-800 text-blue-200' },
  { id: 'necropolis', name: 'Necrópolis (Necropolis)', color: 'bg-slate-800 border-slate-700 text-amber-200' },
  { id: 'mazmorra', name: 'Mazmorra (Dungeon)', color: 'bg-purple-950/60 border-purple-800 text-purple-200' },
  { id: 'rampart', name: 'Murallas (Rampart)', color: 'bg-emerald-950/60 border-emerald-800 text-emerald-200' },
  { id: 'torre', name: 'Torre (Tower)', color: 'bg-cyan-950/60 border-cyan-800 text-cyan-200' },
  { id: 'infierno', name: 'Infierno (Inferno)', color: 'bg-red-950/60 border-red-800 text-red-200' },
  { id: 'stronghold', name: 'Bastión (Stronghold)', color: 'bg-amber-950/60 border-amber-800 text-amber-200' },
  { id: 'fortaleza', name: 'Fortaleza (Fortress)', color: 'bg-teal-950/60 border-teal-800 text-teal-200' },
  { id: 'confluencia', name: 'Confluencia (Conflux)', color: 'bg-indigo-950/60 border-indigo-800 text-indigo-200' },
  { id: 'cove', name: 'Bahía (Cove)', color: 'bg-sky-950/60 border-sky-800 text-sky-200' }
];

export default function App() {
  const [activeTab, setActiveTab] = useState<'chat' | 'rules' | 'pdf' | 'timer_full' | 'calculator' | 'scenarios' | 'heroes'>('chat');
  const [selectedSection, setSelectedSection] = useState<RuleSection | null>(null);

  // Unified Timer and Round State (App-Level for clean sync in Bento Sidebar)
  const [round, setRound] = useState(1);
  const [roundType, setRoundType] = useState<'Recursos' | 'Astrológica'>('Recursos');
  const [players, setPlayers] = useState<Player[]>([
    { id: '1', name: 'Jugador 1 (Necrópolis)', color: 'bg-slate-800 border-slate-700 text-amber-200' },
    { id: '2', name: 'Jugador 2 (Mazmorra)', color: 'bg-purple-950/60 border-purple-800 text-purple-200' }
  ]);
  const [newPlayerName, setNewPlayerName] = useState('');
  const [selectedFaction, setSelectedFaction] = useState('castillo');
  const [activePlayerIndex, setActivePlayerIndex] = useState(0);

  // Overall Match stopwatch state
  const [totalSeconds, setTotalSeconds] = useState(0);
  const [isTotalRunning, setIsTotalRunning] = useState(true); // Default running

  // Turn time state
  const [turnLimit, setTurnLimit] = useState(60); // Default to 60s
  const [turnSeconds, setTurnSeconds] = useState(60);
  const [isTurnRunning, setIsTurnRunning] = useState(false);

  // Preparation Mode Selector State
  const [prepMode, setPrepMode] = useState<'enfrentamiento' | 'cooperativo' | 'campaña' | 'alianza'>('enfrentamiento');

  // Advanced Settings State
  const [fogOfWar, setFogOfWar] = useState(false);
  const [tournamentPick, setTournamentPick] = useState(false);
  const [supplyChain, setSupplyChain] = useState(false);
  const [elementalDamage, setElementalDamage] = useState(false);

  // War Machines state
  const [selectedMachine, setSelectedMachine] = useState<'ballista' | 'catapult' | 'ammo_cart' | 'first_aid' | 'cannon'>('ballista');
  const [machineRollResult, setMachineRollResult] = useState('');

  // Combat Die State
  const [combatDieResult, setCombatDieResult] = useState<number | null>(null);
  const [isRollingCombatDie, setIsRollingCombatDie] = useState(false);

  // Resource Die State
  const [resourceDieResult, setResourceDieResult] = useState<string | null>(null);
  const [isRollingResourceDie, setIsRollingResourceDie] = useState(false);

  // Treasure Die State
  const [treasureDieResult, setTreasureDieResult] = useState<string | null>(null);
  const [isRollingTreasureDie, setIsRollingTreasureDie] = useState(false);

  // Active Dice Tab state
  const [activeDiceTab, setActiveDiceTab] = useState<'combat' | 'resource' | 'treasure'>('combat');

  const handleMachineRoll = () => {
    if (selectedMachine === 'ballista') {
      setMachineRollResult("¡Ataque de Balista! 🏹 Al inicio de la ronda de combate, inflige automáticamente 1 herida física a la unidad enemiga con menor iniciativa.");
    } else if (selectedMachine === 'catapult') {
      const rollValue = Math.floor(Math.random() * 3) - 1; // -1, 0, or +1
      let outcome = "";
      if (rollValue === -1) {
        outcome = "¡Fallo/Errado! ☄️ El disparo de la catapulta pasa de largo sin causar daños.";
      } else if (rollValue === 0) {
        outcome = "Impacto en Puerta (Gate) 🚪 - La catapulta causa 1 punto de daño al portón central.";
      } else {
        outcome = "Impacto en Muro (Wall) 🧱 - La catapulta causa 1 punto de daño a una sección de muralla de tu elección.";
      }
      setMachineRollResult(`Lanzamiento de Dado de Combate: [Resultado ${rollValue >= 0 ? '+' : ''}${rollValue}] ➔ ${outcome}`);
    } else if (selectedMachine === 'ammo_cart') {
      setMachineRollResult("¡Carro de Municiones activo! 📦 Al inicio de la ronda de combate, una unidad aliada de ataque a distancia ignora los penalizadores de distancia y cuerpo a cuerpo (melee penalty) esta ronda.");
    } else if (selectedMachine === 'first_aid') {
      setMachineRollResult("¡Tienda de Auxilio activa! 🩹 Al final de la ronda de combate, remueve/sana automáticamente 1 herida de la unidad aliada con menor iniciativa que esté dañada.");
    } else if (selectedMachine === 'cannon') {
      const rollValue = Math.floor(Math.random() * 3) - 1; // -1, 0, or +1
      const damage = rollValue === -1 ? 1 : rollValue === 0 ? 2 : 3;
      setMachineRollResult(`Lanzamiento de Dado de Combate para Cañón: [Resultado ${rollValue >= 0 ? '+' : ''}${rollValue}] ➔ ¡Cañonazo! 💣 Inflige ${damage} ${damage === 1 ? 'herida' : 'heridas'} a la unidad o estructura enemiga elegida.`);
    }
  };

  const rollCombatDie = () => {
    setIsRollingCombatDie(true);
    setCombatDieResult(null);
    setTimeout(() => {
      const rollValue = Math.floor(Math.random() * 3) - 1; // -1, 0, or +1
      setCombatDieResult(rollValue);
      setIsRollingCombatDie(false);
    }, 600);
  };

  const rollResourceDie = () => {
    setIsRollingResourceDie(true);
    setResourceDieResult(null);
    setTimeout(() => {
      const faces = [
        '🟡 +1 Oro',
        '🟡 +2 Oro',
        '🪵 +1 Madera o Mineral',
        '🪵 +2 Madera o Mineral',
        '🔮 +1 Recurso Valioso',
        '❌ Vacío (Sin ganancia)'
      ];
      const rollIndex = Math.floor(Math.random() * 6);
      setResourceDieResult(faces[rollIndex]);
      setIsRollingResourceDie(false);
    }, 600);
  };

  const rollTreasureDie = () => {
    setIsRollingTreasureDie(true);
    setTreasureDieResult(null);
    setTimeout(() => {
      const faces = [
        '✨ +0.5 Nivel (Héroe principal gana medio nivel de EXP)',
        '✨ +0.5 Nivel (Héroe principal gana medio nivel de EXP)',
        '🔍 Buscar(2) Artefactos (Buscar(2) en mazo de Artefactos)',
        '🔍 Buscar(2) Artefactos (Buscar(2) en mazo de Artefactos)',
        '🎲 1 Dado Rec. (Lanzar 1 dado de recursos)',
        '🎲 2 Dados Rec. (Lanzar 2 dados de recursos y elegir uno)'
      ];
      const rollIndex = Math.floor(Math.random() * 6);
      setTreasureDieResult(faces[rollIndex]);
      setIsRollingTreasureDie(false);
    }, 600);
  };

  // Adjust round type automatically based on round value
  useEffect(() => {
    setRoundType(round % 2 !== 0 ? 'Recursos' : 'Astrológica');
  }, [round]);

  // Overall Match stopwatch timer effect
  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;
    if (isTotalRunning) {
      interval = setInterval(() => {
        setTotalSeconds(prev => prev + 1);
      }, 1000);
    } else {
      if (interval) clearInterval(interval);
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isTotalRunning]);

  // Turn Countdown timer effect
  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;
    if (isTurnRunning) {
      interval = setInterval(() => {
        setTurnSeconds(prev => {
          if (prev <= 1) {
            setIsTurnRunning(false);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    } else {
      if (interval) clearInterval(interval);
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isTurnRunning]);

  // Format second counts neatly
  const formatTime = (secs: number) => {
    const mins = Math.floor(secs / 60);
    const s = secs % 60;
    return `${mins.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  const handleNextTurn = () => {
    if (players.length > 0) {
      const nextIndex = (activePlayerIndex + 1) % players.length;
      setActivePlayerIndex(nextIndex);
      // When the index wraps around to 0, all players have played this round, so advance the round.
      if (nextIndex === 0) {
        setRound(prev => prev + 1);
      }
    }
    setTurnSeconds(turnLimit);
    setIsTurnRunning(true);
  };

  const handleResetTurnTimer = () => {
    setTurnSeconds(turnLimit);
    setIsTurnRunning(false);
  };

  const handleSetTurnLimit = (limit: number) => {
    setTurnLimit(limit);
    setTurnSeconds(limit);
    setIsTurnRunning(false);
  };

  const handleAddPlayer = (e: React.FormEvent) => {
    e.preventDefault();
    const factionObj = FACTIONS.find(f => f.id === selectedFaction) || FACTIONS[0];
    const nameToUse = newPlayerName.trim() || `Jugador ${players.length + 1} (${factionObj.name.split(' ')[0]})`;
    
    setPlayers(prev => [
      ...prev,
      {
        id: Date.now().toString(),
        name: nameToUse,
        color: factionObj.color
      }
    ]);
    setNewPlayerName('');
  };

  const handleSetPlayerCount = (count: number) => {
    const defaultPlayers = FACTIONS.slice(0, count).map((f, idx) => ({
      id: (idx + 1).toString(),
      name: `Jugador ${idx + 1} (${f.name.split(' ')[0]})`,
      color: f.color
    }));
    setPlayers(defaultPlayers);
    setActivePlayerIndex(0);
  };

  const handleDeletePlayer = (id: string) => {
    if (players.length <= 1) {
      console.warn('Debe haber al menos 1 jugador para controlar los turnos.');
      return;
    }
    const nextPlayers = players.filter(p => p.id !== id);
    setPlayers(nextPlayers);
    if (activePlayerIndex >= nextPlayers.length) {
      setActivePlayerIndex(0);
    }
  };

  const handleSelectSectionFromRules = (section: RuleSection) => {
    setSelectedSection(section);
    setActiveTab('chat'); // Switch naturally to chat to consult Sandro
  };

  const tabs = [
    { id: 'chat', label: 'Consulta a Sandro', icon: Sparkles, color: 'text-amber-400' },
    { id: 'rules', label: 'Reglas y FAQs', icon: Library, color: 'text-sky-400' },
    { id: 'scenarios', label: 'Misiones', icon: Compass, color: 'text-rose-400' },
    { id: 'units', label: 'Unidades', icon: Swords, color: 'text-red-400' },
    { id: 'heroes', label: 'Héroes', icon: Users, color: 'text-yellow-400' },
    { id: 'timer_full', label: 'Gestión de Partida', icon: Hourglass, color: 'text-emerald-400' },
    { id: 'pdf', label: 'Manual Completo / PDF', icon: Printer, color: 'text-purple-400' }
  ];

  const isLowTime = turnSeconds < 15 && turnLimit > 0;

  return (
    <div className="min-h-screen text-slate-200 flex flex-col font-sans select-none antialiased" style={{ backgroundImage: 'radial-gradient(circle at center, #1b1311 0%, #0d0a09 100%)', backgroundColor: '#0d0a09' }}>
      
      {/* 1. Header Section */}
      <header className="bg-slate-900/60 border-b border-slate-800/80 py-4 px-6 shrink-0">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex flex-col sm:flex-row items-center gap-1 sm:gap-4 text-center sm:text-left">
            <div className="relative group shrink-0">
              <div className="w-40 h-40 sm:w-48 sm:h-48 flex items-center justify-center overflow-hidden">
                <img 
                  src={oracleLogo} 
                  alt="Heroes III: Oráculo de Erathia Logo" 
                  className="w-full h-full object-contain transform group-hover:scale-105 transition-transform duration-300 mix-blend-screen"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
            <div className="-mt-4 sm:mt-0 flex flex-col justify-center">
              <p className="text-[10px] sm:text-[11px] text-amber-500/70 uppercase tracking-[0.25em] font-mono font-medium max-w-xs sm:max-w-md">
                Asesor de Partidas & Base de Conocimientos Inteligente para el Juego de Mesa
              </p>
            </div>
          </div>
          
          <div className="flex items-center gap-3">
            <div className="bg-slate-800/50 border border-slate-700/80 px-4 py-1.5 rounded-full flex items-center space-x-3 shrink-0">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-[10px] font-mono text-slate-300">MOTOR IA ACTIVO (ESP)</span>
            </div>
            <button 
              onClick={() => setActiveTab('pdf')}
              className="bg-amber-600 hover:bg-amber-700 text-white text-xs font-bold py-1.5 px-4 rounded-md transition-all flex items-center space-x-2 shadow-md hover:shadow-amber-900/40 cursor-pointer"
            >
              <span>Exportar PDF</span>
            </button>
          </div>
        </div>
      </header>

      {/* 2. Navigation Tab System */}
      <nav className="bg-slate-900/30 border-b border-slate-800/60 py-3 px-4 shadow-lg shadow-black/20">
        <div className="max-w-4xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:flex md:flex-wrap md:justify-center gap-2 p-0.5">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`flex items-center justify-center md:justify-start gap-2.5 px-3.5 py-2.5 sm:px-4 sm:py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                  isActive
                    ? 'bg-amber-600 text-white shadow-md shadow-amber-950/30 ring-1 ring-amber-500/40 transform scale-[1.02]'
                    : 'text-slate-400 bg-slate-950/40 hover:bg-slate-800/40 hover:text-slate-200 border border-slate-850/60'
                }`}
              >
                <Icon className={`w-4 h-4 shrink-0 transition-transform duration-200 ${isActive ? 'text-white scale-110' : tab.color}`} />
                <span className="truncate tracking-wide">{tab.label}</span>
              </button>
            );
          })}
        </div>
      </nav>

      {/* 3. Main Content Grid - Bento Dashboard Structure */}
      <main className="flex-1 max-w-7xl mx-auto w-full p-4 sm:p-6 lg:p-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          
          {/* Main Console Viewport (Left col-span-8 or col-span-12 depending on tab) */}
          <div className={`${activeTab === 'timer_full' ? 'lg:col-span-8' : 'lg:col-span-12'} space-y-4`}>
            {activeTab === 'chat' && (
              <div className="space-y-4">
                <div className="bg-amber-950/20 border border-amber-900/30 rounded-2xl p-4 flex gap-3 text-xs sm:text-sm text-amber-200 leading-relaxed">
                  <BookOpen className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                  <div>
                    <p>
                      Pregúntale a <strong className="text-amber-100">Sandro el Sabio</strong> cualquier duda sobre mecánicas tácticas de combate, asedio, colocación de losetas del mapa, o traducciones de las expansiones.
                    </p>
                  </div>
                </div>
                <ChatAdvisor
                  selectedSection={selectedSection}
                  onClearSection={() => setSelectedSection(null)}
                />
              </div>
            )}

            {activeTab === 'rules' && (
              <div className="space-y-4">
                <RulesBrowser 
                  onSelectSection={handleSelectSectionFromRules} 
                  players={players} 
                />
              </div>
            )}

            {activeTab === 'scenarios' && (
              <div className="space-y-4">
                <ScenariosDatabase />
              </div>
            )}

            {activeTab === 'units' && (
              <div className="space-y-4">
                <RecruitmentCalculator />
              </div>
            )}

            {activeTab === 'heroes' && (
              <div className="space-y-4">
                <HeroesViewer />
              </div>
            )}

            {activeTab === 'timer_full' && (
              <div className="space-y-4">
                <GameTimer
                  round={round}
                  setRound={setRound}
                  roundType={roundType}
                  players={players}
                  setPlayers={setPlayers}
                  activePlayerIndex={activePlayerIndex}
                  setActivePlayerIndex={setActivePlayerIndex}
                  totalSeconds={totalSeconds}
                  setTotalSeconds={setTotalSeconds}
                  isTotalRunning={isTotalRunning}
                  setIsTotalRunning={setIsTotalRunning}
                  turnLimit={turnLimit}
                  setTurnLimit={setTurnLimit}
                  turnSeconds={turnSeconds}
                  setTurnSeconds={setTurnSeconds}
                  isTurnRunning={isTurnRunning}
                  setIsTurnRunning={setIsTurnRunning}
                  handleNextTurn={handleNextTurn}
                  handleResetTurnTimer={handleResetTurnTimer}
                  handleSetTurnLimit={handleSetTurnLimit}
                  handleAddPlayer={handleAddPlayer}
                  handleDeletePlayer={handleDeletePlayer}
                  newPlayerName={newPlayerName}
                  setNewPlayerName={setNewPlayerName}
                  selectedFaction={selectedFaction}
                  setSelectedFaction={setSelectedFaction}
                  FACTIONS={FACTIONS}
                  handleSetPlayerCount={handleSetPlayerCount}
                />
              </div>
            )}

            {activeTab === 'pdf' && (
              <div className="space-y-4">
                <RulebookPDF />
              </div>
            )}
          </div>

          {/* Immutable Bento Cards Sidepanel (Right col-span-4) */}
          {activeTab === 'timer_full' && (
            <div className="lg:col-span-4 space-y-6">
            
            {/* Bento 2: Turn Phases Guide (Always Handy) */}
            <div className="bg-slate-900/50 border border-slate-800 rounded-3xl p-5 space-y-4 shadow-xl">
              <h3 className="text-sm font-bold text-amber-500 uppercase tracking-widest flex items-center border-b border-slate-800/80 pb-2">
                <svg className="w-4 h-4 mr-2 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
                Fases del Turno de Mesa
              </h3>
              
              <div className="flex flex-col space-y-2 text-xs">
                <div className="flex items-start py-1 border-b border-slate-800/40">
                  <span className="w-5 h-5 rounded-full bg-amber-600/10 text-amber-500 flex items-center justify-center text-[10px] font-mono font-bold mr-2.5 shrink-0 mt-0.5">1</span>
                  <div>
                    <span className="text-slate-300 font-medium block">Fase de Recursos (Rondas Impares)</span>
                    <span className="text-[10px] text-slate-500 block leading-tight mt-0.5">Cobro de ingresos según tu ciudad y minas ( R.1 excluido).</span>
                  </div>
                </div>
                <div className="flex items-start py-1 border-b border-slate-800/40">
                  <span className="w-5 h-5 rounded-full bg-amber-600/10 text-amber-500 flex items-center justify-center text-[10px] font-mono font-bold mr-2.5 shrink-0 mt-0.5">2</span>
                  <div>
                    <span className="text-slate-300 font-medium block">Inicio y Reposición</span>
                    <span className="text-[10px] text-slate-500 block leading-tight mt-0.5">Repone cartas hasta tu límite; restablece tus 3 PM verdes y experto.</span>
                  </div>
                </div>
                <div className="flex items-start py-1 border-b border-slate-800/40">
                  <span className="w-5 h-5 rounded-full bg-amber-600/10 text-amber-500 flex items-center justify-center text-[10px] font-mono font-bold mr-2.5 shrink-0 mt-0.5">3</span>
                  <div>
                    <span className="text-slate-300 font-medium block">Movimiento e Interacción</span>
                    <span className="text-[10px] text-slate-500 block leading-tight mt-0.5">Gasta tus 3 PM para explorar, moverte, resolver o hacer 1 acción de ciudad.</span>
                  </div>
                </div>
                <div className="flex items-start py-1">
                  <span className="w-5 h-5 rounded-full bg-amber-600/10 text-amber-500 flex items-center justify-center text-[10px] font-mono font-bold mr-2.5 shrink-0 mt-0.5">4</span>
                  <div>
                    <span className="text-slate-300 font-medium block">Fase de Combate / Fin</span>
                    <span className="text-[10px] text-slate-500 block leading-tight mt-0.5">Resuelve los enfrentamientos tácticos en el tablero de combate táctico.</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Bento 3: Game Setup Interactive Summary */}
            <div className="bg-slate-900/50 border border-slate-800 rounded-3xl p-5 space-y-4 shadow-xl">
              <h3 className="text-sm font-bold text-amber-500 uppercase tracking-widest flex items-center border-b border-slate-800/80 pb-2">
                <svg className="w-4 h-4 mr-2 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                </svg>
                Preparación según Modo
              </h3>

              {/* Mini Mode Selector Pills */}
              <div className="flex flex-wrap gap-1 border-b border-slate-800/40 pb-2.5">
                {[
                  { id: 'enfrentamiento', label: 'Encuentro' },
                  { id: 'cooperativo', label: 'Cooperativo' },
                  { id: 'campaña', label: 'Campaña' },
                  { id: 'alianza', label: 'Alianza' }
                ].map(mode => (
                  <button
                    key={mode.id}
                    onClick={() => setPrepMode(mode.id as any)}
                    className={`text-[10px] font-mono px-2 py-1 rounded-md border cursor-pointer uppercase transition ${
                      prepMode === mode.id 
                        ? 'border-amber-600 bg-amber-500/10 text-amber-400' 
                        : 'border-slate-800 text-slate-500 hover:text-slate-300'
                    }`}
                  >
                    {mode.label}
                  </button>
                ))}
              </div>

              {/* Dynamic instruction based on selector */}
              {prepMode === 'enfrentamiento' && (
                <div className="space-y-2 text-xs">
                  <div className="bg-slate-950/60 p-2.5 rounded-lg border border-slate-800/50 flex justify-between items-center text-[10px]">
                    <span className="font-semibold text-slate-300">Modo Enfrentamiento (2-3 J.)</span>
                    <span className="text-slate-500">Normal</span>
                  </div>
                  <ul className="text-[12px] text-slate-400 space-y-1.5 list-disc pl-4.5">
                    <li>Recursos: <strong>15 Oro, 3 de Madera, 1 Gemas</strong></li>
                    <li>Mazo inicial de 9 cartas según tu héroe principal</li>
                    <li>Por cada 2 Exp obtenida aumentas un nivel de Héroe</li>
                    <li>Derrotar el héroe rival para declarar la victoria</li>
                  </ul>
                </div>
              )}

              {prepMode === 'cooperativo' && (
                <div className="space-y-2 text-xs">
                  <div className="bg-slate-950/60 p-2.5 rounded-lg border border-slate-800/50 flex justify-between items-center text-[10px]">
                    <span className="font-semibold text-slate-300">Modo Cooperativo (Aliados)</span>
                    <span className="text-sky-400 font-mono">Vs Escenario</span>
                  </div>
                  <ul className="text-[12px] text-slate-400 space-y-1.5 list-disc pl-4.5">
                    <li>Los jugadores nunca se pueden atacar entre sí</li>
                    <li>Puedes donar recursos a tus aliados en tu turno</li>
                    <li>Escenario "Gelea": Colocar cubo en Utopía del Dragón</li>
                    <li>Escenario "Misión Maldita": Combate contra mazos de la IA</li>
                  </ul>
                </div>
              )}

              {prepMode === 'campaña' && (
                <div className="space-y-2 text-xs">
                  <div className="bg-slate-950/60 p-2.5 rounded-lg border border-slate-800/50 flex justify-between items-center text-[10px]">
                    <span className="font-semibold text-slate-300">Campaña Solo (1 J.)</span>
                    <span className="text-purple-400 font-mono">Vs Mazo IA</span>
                  </div>
                  <ul className="text-[12px] text-slate-400 space-y-1.5 list-disc pl-4.5">
                    <li>Se habilitan los mazos de control de IA del enemigo</li>
                    <li>La IA mueve e inicia combates siempre tras el usuario</li>
                    <li>No se permite rendirse ni ofrecer sobornos a la IA</li>
                    <li>Aislinn o Isra custodian las losetas principales</li>
                  </ul>
                </div>
              )}

              {prepMode === 'alianza' && (
                <div className="space-y-2 text-xs">
                  <div className="bg-slate-950/60 p-2.5 rounded-lg border border-slate-800/50 flex justify-between items-center text-[10px]">
                    <span className="font-semibold text-slate-300">Modo Alianza (2 vs 2)</span>
                    <span className="text-amber-500 font-mono">Equipos</span>
                  </div>
                  <ul className="text-[12px] text-slate-400 space-y-1.5 list-disc pl-4.5">
                    <li>Envío libre de recursos a tu aliado sin costes</li>
                    <li>Intercambio de artefactos si están adyacentes</li>
                    <li>Ganará el equipo que capture y flaggee el Castillo rival</li>
                  </ul>
                </div>
              )}
            </div>

            {/* Bento 5: Opciones Avanzadas & Calculadora de Máquinas de Guerra */}
            <div className="bg-slate-900/50 border border-slate-800 rounded-3xl p-5 space-y-4 shadow-xl">
              <h3 className="text-sm font-bold text-amber-500 uppercase tracking-widest flex items-center justify-between border-b border-slate-800/80 pb-2">
                <span className="flex items-center gap-1.5">
                  <Swords className="w-4 h-4 text-amber-600" />
                  Opciones Avanzadas & Máquinas
                </span>
                <span className="text-[10px] font-mono bg-amber-950 text-amber-400 px-1.5 py-0.5 rounded">
                  Reglas Pro
                </span>
              </h3>

              {/* 1. Toggles section */}
              <div className="space-y-2 text-xs">
                <span className="text-[10px] text-slate-500 font-mono block tracking-wider uppercase font-bold">Activar Reglas Avanzadas</span>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    onClick={() => setFogOfWar(!fogOfWar)}
                    className={`p-2 rounded-xl border text-left cursor-pointer transition flex flex-col justify-between ${
                      fogOfWar ? 'border-amber-600 bg-amber-500/10 text-amber-300 animate-pulse' : 'bg-slate-950/40 border-slate-800/80 text-slate-500 hover:text-slate-350'
                    }`}
                  >
                    <span className="font-bold text-[10px]">🌫️ Niebla Activa</span>
                    <span className="text-[10px] text-slate-500 mt-0.5">{fogOfWar ? 'Mapeo Dinámico' : 'Mapa Revelado'}</span>
                  </button>

                  <button
                    onClick={() => setTournamentPick(!tournamentPick)}
                    className={`p-2 rounded-xl border text-left cursor-pointer transition flex flex-col justify-between ${
                      tournamentPick ? 'border-amber-600 bg-amber-500/10 text-amber-300' : 'bg-slate-950/40 border-slate-800/80 text-slate-500 hover:text-slate-350'
                    }`}
                  >
                    <span className="font-bold text-[10px]">⚔️ Torneo Pick/Ban</span>
                    <span className="text-[10px] text-slate-500 mt-0.5">{tournamentPick ? 'Héroe Draft ON' : 'Libre Selección'}</span>
                  </button>

                  <button
                    onClick={() => setSupplyChain(!supplyChain)}
                    className={`p-2 rounded-xl border text-left cursor-pointer transition flex flex-col justify-between ${
                      supplyChain ? 'border-amber-600 bg-amber-500/10 text-amber-300' : 'bg-slate-950/40 border-slate-800/80 text-slate-500 hover:text-slate-350'
                    }`}
                  >
                    <span className="font-bold text-[10px]">📦 Relevo Suministros</span>
                    <span className="text-[10px] text-slate-500 mt-0.5">{supplyChain ? 'Transferencia Sencilla' : 'No Habilitado'}</span>
                  </button>

                  <button
                    onClick={() => setElementalDamage(!elementalDamage)}
                    className={`p-2 rounded-xl border text-left cursor-pointer transition flex flex-col justify-between ${
                      elementalDamage ? 'border-amber-600 bg-amber-500/10 text-amber-300' : 'bg-slate-950/40 border-slate-800/80 text-slate-500 hover:text-slate-350'
                    }`}
                  >
                    <span className="font-bold text-[10px]">⚡ Daño Elemental</span>
                    <span className="text-[10px] text-slate-500 mt-0.5">{elementalDamage ? 'Ignora Defensa' : 'Normal'}</span>
                  </button>
                </div>
              </div>

              {/* 2. Interactive War Machine Calculator (Including Cove Cannon) */}
              <div className="bg-slate-950/50 p-3 rounded-2xl border border-slate-800/60 space-y-3">
                <span className="text-[10px] text-slate-500 font-mono block tracking-wider uppercase font-bold">Calculadora de Máquinas de Guerra</span>
                
                <div className="grid grid-cols-5 gap-1">
                  {[
                    { id: 'ballista', label: 'Balista', icon: '🏹' },
                    { id: 'catapult', label: 'Catap.', icon: '🧱' },
                    { id: 'ammo_cart', label: 'Mun.', icon: '📦' },
                    { id: 'first_aid', label: 'Tienda', icon: '🩹' },
                    { id: 'cannon', label: 'Cañón', icon: '💣' }
                  ].map(mach => (
                    <button
                      key={mach.id}
                      onClick={() => { setSelectedMachine(mach.id as any); setMachineRollResult(''); }}
                      className={`py-1 rounded border text-center cursor-pointer transition text-[12px] font-medium flex flex-col items-center justify-center ${
                        selectedMachine === mach.id
                          ? 'border-amber-500 bg-amber-500/10 text-amber-400 font-bold'
                          : 'bg-slate-950 border-slate-850 text-slate-400 hover:text-slate-200'
                      }`}
                      title={mach.label}
                    >
                      <span className="text-sm">{mach.icon}</span>
                      <span className="text-[10px] mt-0.5">{mach.label}</span>
                    </button>
                  ))}
                </div>

                {/* Machine Description */}
                <div className="bg-slate-950/80 p-2.5 rounded-lg border border-slate-850 text-[12px] leading-relaxed text-slate-300">
                  {selectedMachine === 'ballista' && (
                    <p><strong>🏹 Balista (Ballista):</strong> Carta permanente. Al inicio de cada ronda de combate, inflige automáticamente <strong>1 herida</strong> de daño físico a la unidad enemiga con menor iniciativa.</p>
                  )}
                  {selectedMachine === 'catapult' && (
                    <p><strong>🧱 Catapulta (Catapult):</strong> Carta permanente obligatoria en Asedios. Al inicio de cada ronda de combate, se lanza el dado de combate estándar para dañar la Puerta (0), un Muro (+1) o fallar (-1).</p>
                  )}
                  {selectedMachine === 'ammo_cart' && (
                    <p><strong>📦 Carro de Municiones (Ammo Cart):</strong> Carta permanente. Al inicio de cada ronda de combate, elige una unidad aliada a distancia para que ignore el penalizador de distancia y el penalizador cuerpo a cuerpo (melee penalty).</p>
                  )}
                  {selectedMachine === 'first_aid' && (
                    <p><strong>🩹 Tienda de Auxilio (First Aid Tent):</strong> Carta permanente. Al final de cada ronda de combate, remueve/sana automáticamente <strong>1 herida</strong> de la unidad aliada con menor iniciativa que esté dañada.</p>
                  )}
                  {selectedMachine === 'cannon' && (
                    <p><strong className="text-cyan-400">💣 Cañón (Cove Cannon):</strong> Carta permanente de Bahía. Al inicio de cada ronda de combate, se lanza el dado de combate estándar para infligir 1 (-1), 2 (0) o 3 (+1) heridas directas a una unidad o estructura.</p>
                  )}
                </div>

                {/* Roll Action Button */}
                <button
                  onClick={handleMachineRoll}
                  className="w-full py-1.5 bg-amber-600 hover:bg-amber-700 text-white font-bold rounded-lg text-xs cursor-pointer transition text-center shadow shadow-amber-950/20"
                >
                  {selectedMachine === 'cannon' ? '💥 ¡FUEGO CON EL CAÑÓN! 💣' : `🎲 Lanzar Acción (${selectedMachine === 'ammo_cart' ? 'Activar' : 'Tirar Dado'})`}
                </button>

                {/* Roll Result feedback */}
                {machineRollResult && (
                  <div className="p-2 bg-amber-950/25 border border-amber-900/40 rounded-lg text-[10px] text-amber-200 font-mono text-center animate-pulse">
                    {machineRollResult}
                  </div>
                )}
              </div>

              {/* 3. Interactive Multi-Dice Simulator */}
              <div className="bg-slate-950/50 p-3 rounded-2xl border border-slate-800/60 space-y-3">
                
                {/* Dice Type Sub-tabs */}
                <div className="flex bg-slate-900/80 p-0.5 rounded-lg border border-slate-800/60">
                  <button
                    onClick={() => setActiveDiceTab('combat')}
                    className={`flex-1 py-1.5 text-[10px] font-bold uppercase rounded-md transition cursor-pointer text-center ${
                      activeDiceTab === 'combat'
                        ? 'bg-amber-600/20 text-amber-300 font-bold'
                        : 'text-slate-500 hover:text-slate-300'
                    }`}
                  >
                    ⚔️ Combate
                  </button>
                  <button
                    onClick={() => setActiveDiceTab('resource')}
                    className={`flex-1 py-1.5 text-[10px] font-bold uppercase rounded-md transition cursor-pointer text-center ${
                      activeDiceTab === 'resource'
                        ? 'bg-amber-600/20 text-amber-300 font-bold'
                        : 'text-slate-500 hover:text-slate-300'
                    }`}
                  >
                    🪵 Recursos
                  </button>
                  <button
                    onClick={() => setActiveDiceTab('treasure')}
                    className={`flex-1 py-1.5 text-[10px] font-bold uppercase rounded-md transition cursor-pointer text-center ${
                      activeDiceTab === 'treasure'
                        ? 'bg-amber-600/20 text-amber-300 font-bold'
                        : 'text-slate-500 hover:text-slate-300'
                    }`}
                  >
                    🔮 Tesoro
                  </button>
                </div>

                {/* COMBAT DICE VIEW */}
                {activeDiceTab === 'combat' && (
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] text-slate-500 font-mono block tracking-wider uppercase font-bold flex items-center gap-1">
                        <Dices className="w-3 h-3 text-amber-500" />
                        Dado de Combate Táctico
                      </span>
                      <span className="text-[10px] font-mono text-slate-500 bg-slate-900 px-1.5 py-0.5 rounded border border-slate-850">
                        Rango [-1, 0, +1]
                      </span>
                    </div>

                    <div className="flex items-center gap-4 bg-slate-950/40 p-2.5 rounded-xl border border-slate-900">
                      {/* Visual Die Face */}
                      <div className="shrink-0 flex items-center justify-center">
                        <button
                          onClick={rollCombatDie}
                          disabled={isRollingCombatDie}
                          className={`w-16 h-16 rounded-xl flex flex-col items-center justify-center border-2 transition-all duration-300 relative select-none cursor-pointer group/die ${
                            isRollingCombatDie
                              ? 'bg-amber-600/20 border-amber-500/70 shadow-[0_0_15px_rgba(245,158,11,0.3)] scale-95 duration-75 rotate-45'
                              : combatDieResult === 1
                              ? 'bg-emerald-950/50 border-emerald-500 text-emerald-400 shadow-[0_0_12px_rgba(16,185,129,0.2)]'
                              : combatDieResult === -1
                              ? 'bg-red-950/50 border-red-500 text-red-400 shadow-[0_0_12px_rgba(239,68,68,0.2)]'
                              : combatDieResult === 0
                              ? 'bg-slate-900 border-slate-600 text-slate-300'
                              : 'bg-slate-950 border-slate-800 hover:border-amber-600/50 text-slate-500'
                          }`}
                        >
                          <div className="absolute inset-0.5 border border-dashed border-slate-800/30 rounded-lg pointer-events-none" />

                          {isRollingCombatDie ? (
                            <div className="text-xl font-bold animate-spin text-amber-500">
                              🎲
                            </div>
                          ) : combatDieResult !== null ? (
                            <div className="flex flex-col items-center">
                              <span className="text-2xl font-mono font-extrabold tracking-tighter leading-none">
                                {combatDieResult >= 0 ? `+${combatDieResult}` : combatDieResult}
                              </span>
                              <span className="text-[10px] uppercase tracking-widest font-mono opacity-80 mt-0.5 scale-90">
                                {combatDieResult === 1 ? 'Crítico' : combatDieResult === -1 ? 'Fallo' : 'Normal'}
                              </span>
                            </div>
                          ) : (
                            <div className="flex flex-col items-center opacity-70 group-hover/die:opacity-100 transition-opacity">
                              <span className="text-xl">⚔️</span>
                              <span className="text-[10px] uppercase tracking-wider font-mono mt-0.5">Tirar</span>
                            </div>
                          )}
                        </button>
                      </div>

                      {/* Text Description */}
                      <div className="flex-1 text-[12px] text-slate-400 space-y-1">
                        <p className="text-[10px] leading-relaxed">
                          Resuelve ataques físicos, contraataques y catapulta de asedios.
                        </p>
                        {combatDieResult !== null && !isRollingCombatDie && (
                          <div className={`text-[12px] font-medium leading-normal flex items-center gap-1.5 ${
                            combatDieResult === 1 ? 'text-emerald-300' : combatDieResult === -1 ? 'text-red-300' : 'text-slate-200'
                          }`}>
                            <span>{combatDieResult === 1 ? '⚡' : combatDieResult === -1 ? '❌' : '🛡️'}</span>
                            <span>
                              {combatDieResult === 1 
                                ? '¡Bonificación de +1 al ataque!' 
                                : combatDieResult === -1 
                                ? 'Penalizador de -1 al ataque o fallo.' 
                                : 'Resultado estándar normal.'}
                            </span>
                          </div>
                        )}
                      </div>
                    </div>

                    <button
                      onClick={rollCombatDie}
                      disabled={isRollingCombatDie}
                      className="w-full py-1.5 bg-slate-800 hover:bg-slate-700 disabled:opacity-50 text-amber-300 hover:text-amber-100 font-semibold rounded-lg text-xs cursor-pointer transition text-center shadow-md flex items-center justify-center gap-1.5 font-mono"
                    >
                      {isRollingCombatDie ? 'Agitando cubilete...' : 'Lanzar Dado Combate'}
                    </button>
                  </div>
                )}

                {/* RESOURCE DICE VIEW */}
                {activeDiceTab === 'resource' && (
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] text-slate-500 font-mono block tracking-wider uppercase font-bold flex items-center gap-1">
                        <Dices className="w-3 h-3 text-amber-500" />
                        Dado de Recursos
                      </span>
                      <span className="text-[10px] font-mono text-slate-500 bg-slate-900 px-1.5 py-0.5 rounded border border-slate-850">
                        Producción d6
                      </span>
                    </div>

                    <div className="flex items-center gap-4 bg-slate-950/40 p-2.5 rounded-xl border border-slate-900">
                      {/* Visual Die Face */}
                      <div className="shrink-0 flex items-center justify-center">
                        <button
                          onClick={rollResourceDie}
                          disabled={isRollingResourceDie}
                          className={`w-16 h-16 rounded-xl flex flex-col items-center justify-center border-2 transition-all duration-300 relative select-none cursor-pointer group/die ${
                            isRollingResourceDie
                              ? 'bg-amber-600/20 border-amber-500/70 shadow-[0_0_15px_rgba(245,158,11,0.3)] scale-95 duration-75 rotate-45'
                              : resourceDieResult
                              ? 'bg-amber-950/50 border-amber-500 text-amber-400 shadow-[0_0_12px_rgba(245,158,11,0.2)]'
                              : 'bg-slate-950 border-slate-800 hover:border-amber-600/50 text-slate-500'
                          }`}
                        >
                          <div className="absolute inset-0.5 border border-dashed border-slate-800/30 rounded-lg pointer-events-none" />

                          {isRollingResourceDie ? (
                            <div className="text-xl font-bold animate-spin text-amber-500">
                              🎲
                            </div>
                          ) : resourceDieResult ? (
                            <div className="flex flex-col items-center text-center">
                              <span className="text-2xl font-mono font-extrabold leading-none mb-0.5">
                                {resourceDieResult.split(' ')[0]}
                              </span>
                              <span className="text-[10px] uppercase tracking-wider font-mono opacity-80 leading-none">
                                {resourceDieResult.split(' ').slice(1).join(' ')}
                              </span>
                            </div>
                          ) : (
                            <div className="flex flex-col items-center opacity-70 group-hover/die:opacity-100 transition-opacity">
                              <span className="text-xl">🪵</span>
                              <span className="text-[10px] uppercase tracking-wider font-mono mt-0.5">Tirar</span>
                            </div>
                          )}
                        </button>
                      </div>

                      {/* Text Description */}
                      <div className="flex-1 text-[12px] text-slate-400 space-y-1">
                        <p className="text-[10px] leading-relaxed">
                          Tira al explorar el mapa o durante rondas de producción para obtener suministros extra.
                        </p>
                        {resourceDieResult && !isRollingResourceDie && (
                          <div className="text-[12px] font-medium leading-normal text-amber-300 flex items-center gap-1.5">
                            <span>📦</span>
                            <span>¡Has recolectado {resourceDieResult}!</span>
                          </div>
                        )}
                      </div>
                    </div>

                    <button
                      onClick={rollResourceDie}
                      disabled={isRollingResourceDie}
                      className="w-full py-1.5 bg-slate-800 hover:bg-slate-700 disabled:opacity-50 text-amber-300 hover:text-amber-100 font-semibold rounded-lg text-xs cursor-pointer transition text-center shadow-md flex items-center justify-center gap-1.5 font-mono"
                    >
                      {isRollingResourceDie ? 'Agitando cubilete...' : 'Lanzar Dado de Recursos'}
                    </button>
                  </div>
                )}

                {/* TREASURE DICE VIEW */}
                {activeDiceTab === 'treasure' && (
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] text-slate-500 font-mono block tracking-wider uppercase font-bold flex items-center gap-1">
                        <Dices className="w-3 h-3 text-amber-500" />
                        Dado de Tesoro
                      </span>
                      <span className="text-[10px] font-mono text-slate-500 bg-slate-900 px-1.5 py-0.5 rounded border border-slate-850">
                        Cofres d6
                      </span>
                    </div>

                    <div className="flex items-center gap-4 bg-slate-950/40 p-2.5 rounded-xl border border-slate-900">
                      {/* Visual Die Face */}
                      <div className="shrink-0 flex items-center justify-center">
                        <button
                          onClick={rollTreasureDie}
                          disabled={isRollingTreasureDie}
                          className={`w-16 h-16 rounded-xl flex flex-col items-center justify-center border-2 transition-all duration-300 relative select-none cursor-pointer group/die ${
                            isRollingTreasureDie
                              ? 'bg-amber-600/20 border-amber-500/70 shadow-[0_0_15px_rgba(245,158,11,0.3)] scale-95 duration-75 rotate-45'
                              : treasureDieResult
                              ? 'bg-purple-950/50 border-purple-500 text-purple-400 shadow-[0_0_12px_rgba(168,85,247,0.2)]'
                              : 'bg-slate-950 border-slate-800 hover:border-amber-600/50 text-slate-500'
                          }`}
                        >
                          <div className="absolute inset-0.5 border border-dashed border-slate-800/30 rounded-lg pointer-events-none" />

                          {isRollingTreasureDie ? (
                            <div className="text-xl font-bold animate-spin text-amber-500">
                              🎲
                            </div>
                          ) : treasureDieResult ? (
                            <div className="flex flex-col items-center text-center">
                              <span className="text-2xl font-mono font-extrabold leading-none mb-0.5">
                                {treasureDieResult.split(' ')[0]}
                              </span>
                              <span className="text-[10px] uppercase tracking-wider font-mono opacity-80 leading-none px-1">
                                {treasureDieResult.split(' ').slice(1, 4).join(' ')}
                              </span>
                            </div>
                          ) : (
                            <div className="flex flex-col items-center opacity-70 group-hover/die:opacity-100 transition-opacity">
                              <span className="text-xl">🔮</span>
                              <span className="text-[10px] uppercase tracking-wider font-mono mt-0.5">Tirar</span>
                            </div>
                          )}
                        </button>
                      </div>

                      {/* Text Description */}
                      <div className="flex-1 text-[12px] text-slate-400 space-y-1">
                        <p className="text-[10px] leading-relaxed">
                          Lánzalo para abrir cofres abandonados, ruinas o saquear asentamientos derrotados.
                        </p>
                        {treasureDieResult && !isRollingTreasureDie && (
                          <div className="text-[12px] font-medium leading-normal text-purple-300 flex items-center gap-1.5">
                            <span>✨</span>
                            <span>¡Recompensa: {treasureDieResult}!</span>
                          </div>
                        )}
                      </div>
                    </div>

                    <button
                      onClick={rollTreasureDie}
                      disabled={isRollingTreasureDie}
                      className="w-full py-1.5 bg-slate-800 hover:bg-slate-700 disabled:opacity-50 text-amber-300 hover:text-amber-100 font-semibold rounded-lg text-xs cursor-pointer transition text-center shadow-md flex items-center justify-center gap-1.5 font-mono"
                    >
                      {isRollingTreasureDie ? 'Agitando cubilete...' : 'Lanzar Dado de Tesoro'}
                    </button>
                  </div>
                )}

              </div>
            </div>

          </div>
          )}
        </div>
      </main>

      {/* 4. Atmospheric Footer */}
      <footer className="mt-8 shrink-0 bg-slate-900/40 border-t border-slate-800 text-[12px] text-slate-500 py-4 px-6">
        <div className="max-w-7xl mx-auto w-full flex flex-col sm:flex-row items-center justify-between">
          <div className="flex items-center space-x-6">
            <div className="flex items-center">
              <span className="w-2 h-2 bg-amber-500 rounded-full mr-2"></span> 
              8 MANUALES OFICIALES INDEXADOS
            </div>
            <div className="flex items-center">
              <span className="w-2 h-2 bg-slate-700 rounded-full mr-2"></span> 
              REGLAS COMPLETA EN ESPAÑOL
            </div>
          </div>
          <div className="text-slate-600 font-mono mt-2 sm:mt-0">
            SISTEMA EXPERTO v2.1 // ERATHIA TÁCTIVO OS
          </div>
        </div>
      </footer>
    </div>
  );
}
