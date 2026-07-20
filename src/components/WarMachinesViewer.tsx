import React, { useState } from 'react';
import { 
  Shield, Swords, Crosshair, Heart, Coins, Info, Dices, Sparkles, 
  HelpCircle, AlertCircle, Zap, RefreshCw, Hammer, Bomb, Activity,
  Award, Building, Map
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface WarMachine {
  id: string;
  name: string;
  costBlacksmith: number;
  costFactory: number;
  hp: string;
  timing: string;
  expansion: string;
  baseEffect: string;
  associatedSkill: string;
  skillNormalEffect: string;
  skillExpertEffect: string;
  icon: string;
  bgGradient: string;
  borderColor: string;
}

const WAR_MACHINES: WarMachine[] = [
  {
    id: 'ballista',
    name: 'Balista',
    costBlacksmith: 7,
    costFactory: 10,
    hp: 'Inmune',
    timing: 'Al comienzo de cada ronda de combate',
    expansion: 'Juego Base',
    baseEffect: 'Inflige 1 Herida a la unidad enemiga con menor iniciativa.',
    associatedSkill: 'Artillería',
    skillNormalEffect: 'Instantáneo: Inflige 1 Herida a la unidad enemiga con menor Iniciativa (no necesita tener la carta Balista).',
    skillExpertEffect: 'Instantáneo: Al utilizar la carta Balista, resuelve su efecto 3 veces contra el mismo objetivo (inflige un total de 3 heridas a la unidad enemiga con la menor Iniciativa).',
    icon: '🏹',
    bgGradient: 'from-amber-950/40 to-slate-900/80',
    borderColor: 'border-amber-700/60'
  },
  {
    id: 'catapult',
    name: 'Catapulta',
    costBlacksmith: 8,
    costFactory: 12,
    hp: 'Inmune',
    timing: 'Al comienzo de cada ronda de combate',
    expansion: 'Juego Base',
    baseEffect: 'Puedes pagar 1 Piedra para elegir 2 objetivos adyacentes (cualquier combinación de unidades, muros y la puerta) y aplicar 1 Herida a cada uno.',
    associatedSkill: 'Balística',
    skillNormalEffect: 'Instantáneo: Juega esta carta durante un asedio. Destruye 1 muralla o puerta (no necesita tener la carta Catapulta).',
    skillExpertEffect: 'Instantáneo: Juega esta carta durante un asedio. Destruye la Torre de arqueros (no necesita tener la carta Catapulta).',
    icon: '🧱',
    bgGradient: 'from-orange-950/40 to-slate-900/80',
    borderColor: 'border-orange-800/60'
  },
  {
    id: 'ammo_cart',
    name: 'Carro de Municiones',
    costBlacksmith: 5,
    costFactory: 8,
    hp: 'Inmune',
    timing: 'Al comienzo de cada ronda de combate',
    expansion: 'Juego Base',
    baseEffect: 'Tus unidades a distancia ignoran penalizadores de combate y ganan +2 Iniciativa.',
    associatedSkill: 'Ninguna',
    skillNormalEffect: 'No aplica.',
    skillExpertEffect: 'No aplica.',
    icon: '📦',
    bgGradient: 'from-emerald-950/40 to-slate-900/80',
    borderColor: 'border-emerald-800/60'
  },
  {
    id: 'first_aid',
    name: 'Tienda de primeros auxilios',
    costBlacksmith: 3,
    costFactory: 6,
    hp: 'Inmune',
    timing: 'Una vez por cada ronda de combate',
    expansion: 'Juego Base',
    baseEffect: 'Retira 1 Herida de la unidad que elijas.',
    associatedSkill: 'Primeros auxilios',
    skillNormalEffect: 'Instantáneo: Retira 1 Herida de una de tus unidades (no necesita la carta Tienda de primeros auxilios).',
    skillExpertEffect: 'Instantáneo: Cuando utilices la carta Tienda de primeros auxilios, resuelve su efecto de 3 veces contra el mismo objetivo (retirando un total de 3 heridas de la unidad aliada que elijas).',
    icon: '🩹',
    bgGradient: 'from-rose-950/40 to-slate-900/80',
    borderColor: 'border-rose-800/60'
  },
  {
    id: 'cannon',
    name: 'Cañón',
    costBlacksmith: 10,
    costFactory: 14,
    hp: 'Inmune',
    timing: 'Al comienzo de cada ronda de combate',
    expansion: 'Expansión de Cala (Cove)',
    baseEffect: 'Puedes gastar 1 Corona para aplicar 2 Heridas a 1 unidad enemiga.',
    associatedSkill: 'Ninguna',
    skillNormalEffect: 'No Aplica.',
    skillExpertEffect: 'No Aplica.',
    icon: '💣',
    bgGradient: 'from-cyan-950/40 to-slate-900/80',
    borderColor: 'border-cyan-800/60'
  }
];

export default function WarMachinesViewer() {
  const [searchTerm, setSearchTerm] = useState('');
  const [expansionFilter, setExpansionFilter] = useState<'all' | 'base' | 'cove'>('all');
  const [selectedSkillLevels, setSelectedSkillLevels] = useState<Record<string, 'none' | 'normal' | 'expert'>>({
    ballista: 'none',
    catapult: 'none',
    ammo_cart: 'none',
    first_aid: 'none',
    cannon: 'none'
  });

  // Simulator State
  const [allowMultipleMachines, setAllowMultipleMachines] = useState(false);
  const [isCoveHero, setIsCoveHero] = useState(false);
  const [activeMachines, setActiveMachines] = useState<Record<string, boolean>>({
    ballista: true,
    catapult: false,
    ammo_cart: false,
    first_aid: false,
    cannon: false
  });
  const [isSiegeMode, setIsSiegeMode] = useState(false);
  const [simulationLogs, setSimulationLogs] = useState<string[]>([]);
  const [simulationRunning, setSimulationRunning] = useState(false);

  const filteredMachines = WAR_MACHINES.filter(m => {
    const matchesSearch = m.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          m.associatedSkill.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesExpansion = expansionFilter === 'all' || 
                             (expansionFilter === 'base' && m.expansion.includes('Base')) ||
                             (expansionFilter === 'cove' && m.expansion.includes('Cala'));
    return matchesSearch && matchesExpansion;
  });

  const handleToggleSkill = (machineId: string, level: 'none' | 'normal' | 'expert') => {
    setSelectedSkillLevels(prev => ({
      ...prev,
      [machineId]: level
    }));
  };

  const handleToggleSimulatorMachine = (machineId: string) => {
    if (machineId === 'cannon' && !isCoveHero) {
      setSimulationLogs([
        "⚠️ REGLA DE MESA EXCLUSIVA:",
        "El Cañón es de uso EXCLUSIVO para héroes de la facción Cala (Cove).",
        "Por favor, activa la casilla de 'Héroe de Cala (Cove)' en las opciones superiores si deseas equiparlo en combate."
      ]);
      return;
    }

    setActiveMachines(prev => {
      const currentlyActive = prev[machineId];
      if (currentlyActive) {
        return {
          ...prev,
          [machineId]: false
        };
      } else {
        // Enforcing 1 active war machine at a time if multiple not allowed
        if (!allowMultipleMachines) {
          const newActive = {
            ballista: false,
            catapult: false,
            ammo_cart: false,
            first_aid: false,
            cannon: false
          };
          newActive[machineId] = true;
          return newActive;
        } else {
          return {
            ...prev,
            [machineId]: true
          };
        }
      }
    });
  };

  const runRoundSimulation = () => {
    setSimulationRunning(true);
    setSimulationLogs([]);
    const logs: string[] = [];

    logs.push("⚔️ INICIANDO RONDA DE COMBATE TÁCTICO ⚔️");
    if (isSiegeMode) {
      logs.push("🏰 Entorno de Combate: ¡Asedio de Castillo de Erathia!");
    } else {
      logs.push("🌲 Entorno de Combate: Campo abierto");
    }

    setTimeout(() => {
      // 1. Start of Round Actions
      logs.push("\n⏱️ Fase 1: Inicio de la Ronda de Combate");

      // Ammo Cart
      if (activeMachines.ammo_cart) {
        logs.push("📦 [Carro de Municiones] activo (Permanente): ¡Tus unidades a distancia ignoran penalizadores de combate y ganan +2 de Iniciativa!");
      }

      // Ballista
      const ballistaSkill = selectedSkillLevels.ballista || 'none';
      if (activeMachines.ballista) {
        if (ballistaSkill === 'expert') {
          logs.push("🏹 [Balista + Artillería Experta]: ¡Resuelve el efecto de la Balista 3 veces contra el mismo objetivo! ➔ Inflige un total de 3 Heridas a la unidad enemiga con menor Iniciativa.");
        } else if (ballistaSkill === 'normal') {
          logs.push("🏹 [Balista + Artillería Básica]: Inflige 1 Herida de forma automática a la unidad enemiga con menor iniciativa. Además, tu héroe puede activar un disparo instantáneo para infligir 1 herida adicional.");
        } else {
          logs.push("🏹 [Balista] activo (Automático): Inflige 1 Herida a la unidad enemiga con menor iniciativa.");
        }
      } else if (ballistaSkill !== 'none') {
        logs.push(`🏹 [Habilidad Artillería] (Sin carta Balista): Tu héroe puede jugar una carta instantánea para infligir 1 Herida a la unidad enemiga con menor iniciativa.`);
      }

      // Cannon
      if (activeMachines.cannon) {
        logs.push("💣 [Cañón] se activa (Permanente): Puedes gastar 1 Corona para aplicar directamente 2 Heridas a 1 unidad enemiga en el campo de batalla.");
      }

      // Catapult (Obligatory Siege Attack)
      if (isSiegeMode) {
        const roll = Math.floor(Math.random() * 3) - 1; // -1, 0, or +1
        logs.push("🧱 [Catapulta de Asedio Obligatoria]: ¡El atacante debe usar una catapulta (ficticia o real) al inicio de la ronda de asedio!");
        if (roll === -1) {
          logs.push("   🎲 Dado de Asedio: [-1] ➔ ¡Fallo! El proyectil vuela de largo sin dañar las defensas.");
        } else if (roll === 0) {
          logs.push("   🎲 Dado de Asedio: [0] ➔ ¡Impacto en Muro! Se inflige 1 daño y se destruye una sección de Muralla.");
        } else {
          logs.push("   🎲 Dado de Asedio: [+1] ➔ ¡Impacto en Puerta! Se inflige 1 daño y se destruye la Puerta/Portón de la ciudad.");
        }
      }

      // Catapult Card / Balística Skill Effects
      const catapultSkill = selectedSkillLevels.catapult || 'none';
      if (activeMachines.catapult) {
        if (isSiegeMode) {
          if (catapultSkill === 'normal') {
            logs.push("🧱 [Catapulta + Balística Básica] (Efecto Adicional): Activación instantánea ➔ ¡Destruye directamente 1 muralla o puerta sin necesidad de la carta!");
          } else if (catapultSkill === 'expert') {
            logs.push("🧱 [Catapulta + Balística Experta] (Efecto Adicional): Activación instantánea de asedio ➔ ¡Destruye directamente la Torre de Arqueros enemiga!");
          } else {
            logs.push("🧱 [Catapulta] de asedio (Efecto Adicional): Puedes pagar 1 Piedra para elegir 2 objetivos adyacentes (unidades, muros o la puerta) y aplicar 1 Herida a cada uno.");
          }
        } else {
          logs.push("🧱 [Catapulta] en campo abierto: Puedes pagar 1 Piedra para elegir 2 unidades enemigas adyacentes y aplicar 1 Herida a cada una.");
        }
      } else if (catapultSkill !== 'none' && isSiegeMode) {
        if (catapultSkill === 'normal') {
          logs.push("🧱 [Habilidad Balística Básica] (Sin carta): Puedes jugar un efecto instantáneo para destruir 1 muralla o puerta.");
        } else if (catapultSkill === 'expert') {
          logs.push("🧱 [Habilidad Balística Experta] (Sin carta): Puedes jugar un efecto instantáneo para destruir la Torre de Arqueros enemiga.");
        }
      }

      // 2. Mid Round (Fictional Troops clash)
      logs.push("\n🛡️ Fase 2: Choque de Tropas (Fuerzas principales)");
      logs.push("   ... Las tropas aliadas e intermedias intercambian golpes tácticos en el tablero ...");

      // 3. End of Round Actions
      logs.push("\n⏱️ Fase 3: Fin de la Ronda de Combate");

      // First Aid Tent
      const firstAidSkill = selectedSkillLevels.first_aid || 'none';
      if (activeMachines.first_aid) {
        if (firstAidSkill === 'expert') {
          logs.push("🩹 [Tienda de Auxilio + Primeros Auxilios Experto]: ¡Resuelve su efecto de sanación 3 veces contra la misma unidad! ➔ Retira un total de 3 Heridas de la unidad aliada que elijas.");
        } else if (firstAidSkill === 'normal') {
          logs.push("🩹 [Tienda de Auxilio + Primeros Auxilios Básico]: Retira 1 Herida de la unidad aliada que elijas. Además, puedes usar tu habilidad de forma instantánea para sanar otra unidad.");
        } else {
          logs.push("🩹 [Tienda de primeros auxilios] se activa (Permanente): Retira 1 Herida de la unidad aliada que elijas.");
        }
      } else if (firstAidSkill !== 'none') {
        logs.push("🩹 [Habilidad Primeros Auxilios] (Sin carta): Puedes jugar de forma instantánea para retirar 1 Herida de una de tus unidades.");
      }

      logs.push("\n✨ CONCLUSIÓN DE LA RONDA: Siguiente ronda lista para comenzar.");
      setSimulationLogs(logs);
      setSimulationRunning(false);
    }, 1000);
  };

  return (
    <div className="space-y-6" id="war-machines-view">
      
      {/* Introduction Card */}
      <div className="bg-slate-900/40 border border-slate-800 rounded-3xl p-6 shadow-xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/5 rounded-full blur-3xl pointer-events-none"></div>
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 border-b border-slate-800 pb-4 mb-4">
          <div>
            <span className="text-xs font-mono text-amber-500 uppercase tracking-widest font-semibold flex items-center gap-1.5">
              <Hammer className="w-3.5 h-3.5" />
              Reglas Oficiales de Heroes III: El Juego de Mesa
            </span>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-100 mt-1">
              Máquinas de Guerra
            </h2>
          </div>
          <div className="bg-amber-950/40 border border-amber-900/30 px-4 py-2 rounded-xl text-xs text-amber-200 font-medium max-w-md leading-relaxed">
            Las máquinas de guerra son cartas permanentes de borde rojo y fondo marrón que se colocan junto a tu ficha de héroe.
            ¡No ocupan espacio en tu mano de cartas y su efecto es constante ronda tras ronda!
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
          <div className="bg-slate-950/60 p-4 rounded-2xl border border-slate-900 flex gap-3">
            <Coins className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
            <div>
              <span className="font-bold text-slate-200 block mb-1">Adquisición</span>
              <p className="text-slate-400 leading-relaxed">
                Se compran en la <strong>Herrería (Blacksmith)</strong> de tu ciudad o en la Fábrica de Máquinas de Guerra por <strong>algo más de Oro</strong>. Algunos héroes pueden adquirirla de forma gratuita mediante su especialidad al comienzo de la partida.
              </p>
            </div>
          </div>
          <div className="bg-slate-950/60 p-4 rounded-2xl border border-slate-900 flex gap-3">
            <Zap className="w-5 h-5 text-sky-400 shrink-0 mt-0.5" />
            <div>
              <span className="font-bold text-slate-200 block mb-1">Activación Táctica</span>
              <p className="text-slate-400 leading-relaxed">
                Tienen timings estrictos. La Balista, Catapulta y Cañón actúan <strong>al inicio</strong> de la ronda de combate, mientras que la Tienda de Auxilio actúa <strong>al final</strong>. Son inmunes a daños en combate ordinario.
              </p>
            </div>
          </div>
          <div className="bg-slate-950/60 p-4 rounded-2xl border border-slate-900 flex gap-3">
            <Award className="w-5 h-5 text-purple-400 shrink-0 mt-0.5" />
            <div>
              <span className="font-bold text-slate-200 block mb-1">Sinergia con Habilidades</span>
              <p className="text-slate-400 leading-relaxed">
                Habilidades como <strong>Artillería, Balística</strong> y <strong>Primeros Auxilios</strong> desbloquean efectos instantáneos súper potentes que triplican el rendimiento de la máquina o destruyen defensas de un solo golpe.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Filter and Search controls */}
      <div className="bg-slate-900/30 border border-slate-850/60 p-4 rounded-2xl flex flex-col sm:flex-row gap-3 items-center justify-between">
        <div className="relative w-full sm:w-72">
          <input
            type="text"
            placeholder="Buscar por máquina o habilidad..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full bg-slate-950 border border-slate-800 text-xs text-slate-200 rounded-xl py-2 pl-9 pr-4 focus:outline-none focus:border-amber-600 focus:ring-1 focus:ring-amber-600 transition"
          />
          <svg className="w-4 h-4 text-slate-500 absolute left-3 top-2.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>

        <div className="flex bg-slate-950 p-1 rounded-xl border border-slate-800 w-full sm:w-auto">
          {[
            { id: 'all', label: 'Todas' },
            { id: 'base', label: 'Juego Base' },
            { id: 'cove', label: 'Cove (Cala)' }
          ].map(opt => (
            <button
              key={opt.id}
              onClick={() => setExpansionFilter(opt.id as any)}
              className={`flex-1 sm:flex-none text-[11px] font-medium font-mono px-3.5 py-1.5 rounded-lg transition uppercase cursor-pointer ${
                expansionFilter === opt.id
                  ? 'bg-amber-600 text-white shadow-sm'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              {opt.label}
            </button>
          ))}
        </div>
      </div>

      {/* Rules Notice */}
      <div className="bg-slate-950/45 border border-slate-800/60 p-4 rounded-2xl text-xs text-slate-400 leading-relaxed flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
        <div className="flex gap-2.5">
          <Info className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
          <div className="space-y-1">
            <strong className="text-slate-200">Regla de Limitación de Cartas Permanentes:</strong>
            <p className="text-slate-400">
              Cada héroe puede tener activa <strong>únicamente una máquina de guerra</strong> en su tablero a la vez. La única excepción es que tu héroe posea una <strong>Especialidad de Héroe</strong> que lo autorice de forma excepcional (como la especialidad <em>Balista IV</em> del héroe Tarnum de Castillo).
            </p>
          </div>
        </div>
      </div>

      {/* War Machines Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <AnimatePresence mode="popLayout">
          {filteredMachines.map((machine) => {
            const skillLevel = selectedSkillLevels[machine.id] || 'none';
            return (
              <motion.div
                key={machine.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className={`bg-gradient-to-br ${machine.bgGradient} border ${machine.borderColor} rounded-3xl p-5 flex flex-col justify-between shadow-lg hover:shadow-black/40 transition duration-300 relative group`}
              >
                {/* Expansion tag */}
                <span className="absolute top-4 right-4 text-[9px] font-mono font-semibold bg-slate-950/60 border border-slate-800 text-slate-400 px-2 py-0.5 rounded-full">
                  {machine.expansion}
                </span>

                <div className="space-y-4">
                  {/* Title & Icon Header */}
                  <div className="flex items-center gap-3">
                    <span className="text-4xl filter drop-shadow bg-slate-950/50 w-14 h-14 rounded-2xl flex items-center justify-center border border-slate-800/80">
                      {machine.icon}
                    </span>
                    <div>
                      <h3 className="font-bold text-slate-100 text-lg flex items-center gap-1.5">
                        {machine.name}
                      </h3>
                      <span className="text-[10px] font-mono text-amber-500/80 uppercase tracking-wider font-semibold block">
                        Timing: {machine.timing}
                      </span>
                      {machine.id === 'cannon' && (
                        <span className="inline-block mt-1 text-[9px] font-mono text-cyan-400 uppercase tracking-wider font-bold">
                          ⚓ Exclusivo de Cala (Cove)
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Core stats panel */}
                  <div className="grid grid-cols-2 gap-2 bg-slate-950/70 p-3 rounded-xl border border-slate-900/50 text-[11px] font-mono">
                    <div className="col-span-2 space-y-1.5 pb-1.5 border-b border-slate-800/60">
                      <div className="flex items-center justify-between text-slate-400">
                        <span className="flex items-center gap-1">
                          <Building className="w-3.5 h-3.5 text-amber-500" />
                          Coste Herrería:
                        </span>
                        <strong className="text-amber-400 font-bold">{machine.costBlacksmith} Oros</strong>
                      </div>
                      <div className="flex items-center justify-between text-slate-400">
                        <span className="flex items-center gap-1">
                          <Map className="w-3.5 h-3.5 text-orange-400" />
                          Coste Fábrica:
                        </span>
                        <strong className="text-orange-400 font-bold">{machine.costFactory} Oros</strong>
                      </div>
                    </div>
                    <div className="col-span-2 pt-1.5 flex items-center justify-between text-slate-400">
                      <span className="flex items-center gap-1">
                        <Heart className="w-3.5 h-3.5 text-red-500" />
                        Estructura:
                      </span>
                      <strong className="text-slate-250 font-semibold">{machine.hp}</strong>
                    </div>
                  </div>

                  {/* Base Effect description */}
                  <div className="space-y-1.5">
                    <span className="text-[10px] font-mono text-slate-500 uppercase tracking-wider font-bold block">
                      Efecto Permanente de Combate:
                    </span>
                    <p className="text-xs text-slate-300 leading-relaxed bg-slate-950/30 p-2.5 rounded-xl border border-slate-900/30">
                      {machine.baseEffect}
                    </p>
                  </div>

                  {/* Associated Skill details */}
                  <div className="border-t border-slate-800/40 pt-3.5 space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-mono text-amber-500/80 uppercase tracking-widest font-bold flex items-center gap-1">
                        <Award className="w-3 h-3 text-amber-600" />
                        Habilidad: {machine.associatedSkill}
                      </span>
                    </div>

                    {machine.associatedSkill !== 'Ninguna' ? (
                      <div className="space-y-2.5">
                        {/* Selector de nivel de habilidad en la propia carta */}
                        <div className="grid grid-cols-3 gap-1 bg-slate-950 p-0.5 rounded-lg border border-slate-900">
                          {(['none', 'normal', 'expert'] as const).map((lvl) => (
                            <button
                              key={lvl}
                              onClick={() => handleToggleSkill(machine.id, lvl)}
                              className={`py-1 text-[9px] uppercase font-mono font-bold rounded-md transition cursor-pointer text-center ${
                                skillLevel === lvl
                                  ? 'bg-amber-600 text-white shadow'
                                  : 'text-slate-500 hover:text-slate-350'
                              }`}
                            >
                              {lvl === 'none' ? 'No' : lvl === 'normal' ? 'Básico' : 'Experto'}
                            </button>
                          ))}
                        </div>

                        {/* Contenido dinámico según el nivel seleccionado */}
                        <AnimatePresence mode="wait">
                          {skillLevel === 'none' && (
                            <motion.div
                              initial={{ opacity: 0, y: 3 }}
                              animate={{ opacity: 1, y: 0 }}
                              exit={{ opacity: 0, y: -3 }}
                              className="text-[11px] text-slate-500 leading-normal italic bg-slate-950/20 p-2 rounded-lg border border-transparent"
                            >
                              Sinergias desactivadas. Selecciona "Básico" o "Experto" para ver los letales aumentos de poder tácticos que otorga tu Héroe.
                            </motion.div>
                          )}
                          {skillLevel === 'normal' && (
                            <motion.div
                              initial={{ opacity: 0, y: 3 }}
                              animate={{ opacity: 1, y: 0 }}
                              exit={{ opacity: 0, y: -3 }}
                              className="text-[11px] text-amber-300 bg-amber-950/15 border border-amber-900/30 p-2.5 rounded-lg leading-relaxed flex gap-2"
                            >
                              <Zap className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                              <span>{machine.skillNormalEffect}</span>
                            </motion.div>
                          )}
                          {skillLevel === 'expert' && (
                            <motion.div
                              initial={{ opacity: 0, y: 3 }}
                              animate={{ opacity: 1, y: 0 }}
                              exit={{ opacity: 0, y: -3 }}
                              className="text-[11px] text-amber-200 bg-amber-900/20 border border-amber-500/30 p-2.5 rounded-lg leading-relaxed flex gap-2"
                            >
                              <Sparkles className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                              <span>{machine.skillExpertEffect}</span>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    ) : (
                      <div className="text-[11px] text-slate-400 italic bg-slate-950/30 p-2.5 rounded-lg leading-relaxed border border-slate-900/50">
                        Esta máquina de guerra no requiere una habilidad específica para desatar su potencial. ¡Equípala y utilízala directamente en combate!
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>

      {/* Interactive Combat Simulator with War Machines */}
      <div className="bg-slate-900/40 border border-slate-800 rounded-3xl p-6 shadow-xl relative overflow-hidden">
        <div className="absolute top-0 left-0 w-80 h-80 bg-red-500/5 rounded-full blur-3xl pointer-events-none"></div>
        
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-slate-800 pb-4 mb-4">
          <div className="flex items-center gap-2">
            <span className="text-2xl">🎲</span>
            <div>
              <h3 className="font-bold text-slate-100 text-lg">
                Simulador de Ronda de Combate
              </h3>
              <p className="text-xs text-slate-500">
                Prueba cómo interactúan tus máquinas de guerra y el dado de combate en una ronda de mesa.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3 bg-slate-950 p-2 rounded-xl border border-slate-850">
            <label className="flex items-center gap-2 cursor-pointer text-xs font-mono text-slate-400">
              <input
                type="checkbox"
                checked={isSiegeMode}
                onChange={(e) => setIsSiegeMode(e.target.checked)}
                className="rounded border-slate-800 bg-slate-900 text-amber-500 focus:ring-0 cursor-pointer w-4 h-4"
              />
              <span>Modo Asedio</span>
            </label>
            <div className="h-4 w-px bg-slate-800"></div>
            <label className="flex items-center gap-2 cursor-pointer text-xs font-mono text-slate-400" title="Permite equipar múltiples máquinas de guerra mediante una especialidad excepcional (por ejemplo Tarnum con Balista IV)">
              <input
                type="checkbox"
                checked={allowMultipleMachines}
                onChange={(e) => {
                  setAllowMultipleMachines(e.target.checked);
                  if (!e.target.checked) {
                    // Reset to only one active (e.g., ballista) to obey the rule
                    setActiveMachines({
                      ballista: true,
                      catapult: false,
                      ammo_cart: false,
                      first_aid: false,
                      cannon: false
                    });
                  }
                }}
                className="rounded border-slate-800 bg-slate-900 text-amber-500 focus:ring-0 cursor-pointer w-4 h-4"
              />
              <span>Especialidad (Múltiples)</span>
            </label>
            <div className="h-4 w-px bg-slate-800"></div>
            <label className="flex items-center gap-2 cursor-pointer text-xs font-mono text-slate-400" title="Requisito exclusivo para utilizar el Cañón">
              <input
                type="checkbox"
                checked={isCoveHero}
                onChange={(e) => {
                  setIsCoveHero(e.target.checked);
                  if (!e.target.checked && activeMachines.cannon) {
                    setActiveMachines(prev => ({ ...prev, cannon: false }));
                  }
                }}
                className="rounded border-slate-800 bg-slate-900 text-amber-500 focus:ring-0 cursor-pointer w-4 h-4"
              />
              <span>Héroe de Cala</span>
            </label>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          {/* Simulator Config (Left col-span-5) */}
          <div className="lg:col-span-5 space-y-4">
            <span className="text-[10px] font-mono text-slate-500 uppercase tracking-wider font-bold block mb-1">
              Selecciona tus Máquinas Activas en el Tablero:
            </span>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {WAR_MACHINES.map((machine) => {
                const isActive = activeMachines[machine.id];
                const skillLevel = selectedSkillLevels[machine.id] || 'none';
                return (
                  <button
                    key={machine.id}
                    onClick={() => handleToggleSimulatorMachine(machine.id)}
                    className={`p-3 rounded-xl border text-left transition flex items-center justify-between cursor-pointer ${
                      isActive 
                        ? 'bg-amber-600/10 border-amber-600/60 text-amber-300' 
                        : 'bg-slate-950/40 border-slate-850 text-slate-500 hover:text-slate-350'
                    }`}
                  >
                    <div className="flex items-center gap-2.5">
                      <span className="text-xl bg-slate-950/80 w-8 h-8 rounded-lg flex items-center justify-center">
                        {machine.icon}
                      </span>
                      <div>
                        <span className="text-xs font-bold block">{machine.name}</span>
                        {isActive && machine.associatedSkill !== 'Ninguna' && (
                          <span className="text-[9px] font-mono text-amber-500/80">
                            Skill: {skillLevel === 'none' ? 'Sin Habilidad' : skillLevel === 'normal' ? 'Básica' : 'Experta'}
                          </span>
                        )}
                      </div>
                    </div>
                    <div className={`w-4 h-4 rounded-full border flex items-center justify-center shrink-0 ${
                      isActive ? 'border-amber-500 bg-amber-500/30' : 'border-slate-800'
                    }`}>
                      {isActive && <div className="w-1.5 h-1.5 bg-amber-400 rounded-full"></div>}
                    </div>
                  </button>
                );
              })}
            </div>

            <div className="bg-slate-950/40 p-4 rounded-2xl border border-slate-850 text-xs text-slate-400 space-y-2 leading-relaxed">
              <span className="font-semibold text-slate-300 block mb-1">💡 Consejos de Simulación:</span>
              <p>• En <strong>Modo Asedio</strong>, el atacante ejecuta de forma obligatoria un ataque de Catapulta (real o ficticia) al inicio de la ronda tirando el dado de asedio: -1 (fallo), 0 (daño a muro), +1 (daño a puerta).</p>
              <p>• La Catapulta (carta permanente) y el Cañón tienen efectos potentes que consumen recursos de mesa (Piedra y Corona).</p>
              <p>• Sube el nivel de <strong>Artillería, Balística</strong> o <strong>Primeros Auxilios</strong> en las fichas superiores para experimentar los letales efectos e instantáneos de héroe.</p>
              <p>• La Balista y la Tienda se ejecutan de manera automática, recibiendo mejoras drásticas si tienes niveles avanzados en su habilidad.</p>
            </div>

            <button
              onClick={runRoundSimulation}
              disabled={simulationRunning}
              className="w-full py-3 bg-amber-600 hover:bg-amber-700 disabled:opacity-50 text-white font-bold rounded-xl text-xs sm:text-sm cursor-pointer transition text-center shadow-lg hover:shadow-amber-900/30 flex items-center justify-center gap-2"
            >
              <RefreshCw className={`w-4 h-4 ${simulationRunning ? 'animate-spin' : ''}`} />
              {simulationRunning ? 'Simulando Combate...' : '🎲 SIMULAR RONDA DE COMBATE TÁCTICO'}
            </button>
          </div>

          {/* Simulation Output Logs (Right col-span-7) */}
          <div className="lg:col-span-7 space-y-2">
            <span className="text-[10px] font-mono text-slate-500 uppercase tracking-wider font-bold block mb-1">
              Registro del Combate Táctico (Logs de Mesa):
            </span>

            <div className="bg-slate-950/80 border border-slate-900 rounded-2xl p-4 font-mono text-[11px] sm:text-xs leading-relaxed h-[320px] overflow-y-auto space-y-2 text-slate-300 custom-scrollbar">
              {simulationLogs.length > 0 ? (
                simulationLogs.map((log, idx) => {
                  let colorClass = 'text-slate-400';
                  if (log.startsWith('⚔️')) colorClass = 'text-amber-400 font-bold border-b border-slate-800 pb-1 block';
                  else if (log.startsWith('🏰') || log.startsWith('🌲')) colorClass = 'text-slate-200 block';
                  else if (log.startsWith('⏱️')) colorClass = 'text-amber-500 font-bold mt-3 block';
                  else if (log.includes('Balista')) colorClass = 'text-amber-300';
                  else if (log.includes('Cañón')) colorClass = 'text-cyan-300';
                  else if (log.includes('Catapulta')) colorClass = 'text-orange-300';
                  else if (log.includes('Tienda')) colorClass = 'text-rose-300';
                  else if (log.includes('Carro')) colorClass = 'text-emerald-300';
                  else if (log.includes('CONCLUSIÓN')) colorClass = 'text-slate-100 font-bold border-t border-slate-800 pt-1 mt-3 block';

                  return (
                    <div key={idx} className={`${colorClass} transition duration-150`}>
                      {log}
                    </div>
                  );
                })
              ) : (
                <div className="h-full flex flex-col items-center justify-center text-slate-600 text-center italic">
                  <Activity className="w-10 h-10 mb-2 opacity-30 text-amber-500" />
                  <p>Presiona el botón de simulación para calcular y resolver una ronda completa de combate táctico utilizando tus máquinas de guerra equipadas.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
