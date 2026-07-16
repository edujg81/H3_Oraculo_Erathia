import { useState } from 'react';

type MachineId = 'ballista' | 'catapult' | 'ammo_cart' | 'first_aid' | 'cannon';

/**
 * Encapsula la lógica de los tres dados del juego (combate, recursos,
 * tesoro) y del simulador de tiradas de máquinas de guerra.
 * Extraído de App.tsx para reducir el tamaño del componente principal.
 */
export function useDiceRoller() {
  // Máquinas de guerra
  const [selectedMachine, setSelectedMachine] = useState<MachineId>('ballista');
  const [machineRollResult, setMachineRollResult] = useState('');

  // Dado de Combate Táctico
  const [combatDieResult, setCombatDieResult] = useState<number | null>(null);
  const [isRollingCombatDie, setIsRollingCombatDie] = useState(false);

  // Dado de Recursos
  const [resourceDieResult, setResourceDieResult] = useState<string | null>(null);
  const [isRollingResourceDie, setIsRollingResourceDie] = useState(false);

  // Dado de Tesoros
  const [treasureDieResult, setTreasureDieResult] = useState<string | null>(null);
  const [isRollingTreasureDie, setIsRollingTreasureDie] = useState(false);

  // Pestaña activa dentro del panel de dados
  const [activeDiceTab, setActiveDiceTab] = useState<'combat' | 'resource' | 'treasure'>('combat');

  const handleMachineRoll = () => {
    if (selectedMachine === 'ballista') {
      setMachineRollResult("¡Ataque de Balista! 🏹 Al inicio de la ronda de combate, inflige automáticamente 1 herida física a la unidad enemiga con menor iniciativa.");
    } else if (selectedMachine === 'catapult') {
      const rollValue = Math.floor(Math.random() * 3) - 1; // -1, 0, o +1
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
      const rollValue = Math.floor(Math.random() * 3) - 1; // -1, 0, o +1
      const damage = rollValue === -1 ? 1 : rollValue === 0 ? 2 : 3;
      setMachineRollResult(`Lanzamiento de Dado de Combate para Cañón: [Resultado ${rollValue >= 0 ? '+' : ''}${rollValue}] ➔ ¡Cañonazo! 💣 Inflige ${damage} ${damage === 1 ? 'herida' : 'heridas'} a la unidad o estructura enemiga elegida.`);
    }
  };

  const rollCombatDie = () => {
    setIsRollingCombatDie(true);
    setCombatDieResult(null);
    setTimeout(() => {
      const rollValue = Math.floor(Math.random() * 3) - 1; // -1, 0, o +1
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

  return {
    selectedMachine, setSelectedMachine,
    machineRollResult, setMachineRollResult, handleMachineRoll,
    combatDieResult, isRollingCombatDie, rollCombatDie,
    resourceDieResult, isRollingResourceDie, rollResourceDie,
    treasureDieResult, isRollingTreasureDie, rollTreasureDie,
    activeDiceTab, setActiveDiceTab,
  };
}
