import React from 'react';
import { HelpCircle } from 'lucide-react';

interface GamePrepModeProps {
  prepMode: 'enfrentamiento' | 'cooperativo' | 'campaña' | 'alianza';
  setPrepMode: React.Dispatch<React.SetStateAction<'enfrentamiento' | 'cooperativo' | 'campaña' | 'alianza'>>;
}

export function GamePrepMode({ prepMode, setPrepMode }: GamePrepModeProps) {
  return (
    <div id="game-prep-mode-card" className="bg-slate-900/90 border border-slate-800 rounded-3xl p-6 space-y-4 shadow-xl relative overflow-hidden">
      <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/5 rounded-full blur-2xl pointer-events-none" />
      <h3 className="text-sm font-bold text-amber-500 uppercase tracking-widest flex items-center border-b border-slate-800/80 pb-2 font-serif">
        <HelpCircle className="w-4 h-4 mr-2 text-amber-500" />
        Preparación según Modo de Juego
      </h3>

      {/* Mini Mode Selector Pills */}
      <div className="flex flex-wrap gap-1.5 border-b border-slate-800/40 pb-2.5">
        {[
          { id: 'enfrentamiento', label: 'Encuentro' },
          { id: 'cooperativo', label: 'Cooperativo' },
          { id: 'campaña', label: 'Campaña solo' },
          { id: 'alianza', label: 'Alianza (2v2)' }
        ].map(mode => (
          <button
            key={mode.id}
            type="button"
            onClick={() => setPrepMode(mode.id as any)}
            className={`text-[10px] font-mono px-3 py-1.5 rounded-lg border cursor-pointer uppercase transition ${
              prepMode === mode.id 
                ? 'border-amber-500 bg-amber-500/15 text-amber-400 font-bold' 
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
          <div className="bg-slate-950/60 p-2.5 rounded-lg border border-slate-850/80 flex justify-between items-center text-[10px]">
            <span className="font-semibold text-slate-300">Modo Encuentro Estándar (2-3 Jugadores)</span>
            <span className="text-amber-500 font-mono">Competitivo</span>
          </div>
          <ul className="text-[12px] text-slate-400 space-y-1.5 list-disc pl-4.5">
            <li>Recursos iniciales por jugador: <strong>15 de Oro, 3 de Madera, 1 de Gemas (Valiosos)</strong>.</li>
            <li>Mazo inicial de 9 cartas personalizadas según tu héroe principal elegido.</li>
            <li>Por cada 2 puntos de Experiencia (Exp) obtenida, aumentas un nivel de Héroe.</li>
            <li>Victoria: Derrota al héroe rival o captura su ciudad de origen para reclamar Erathia.</li>
          </ul>
        </div>
      )}

      {prepMode === 'cooperativo' && (
        <div className="space-y-2 text-xs">
          <div className="bg-slate-950/60 p-2.5 rounded-lg border border-slate-850/80 flex justify-between items-center text-[10px]">
            <span className="font-semibold text-slate-300">Modo Cooperativo (Misiones Aliadas)</span>
            <span className="text-sky-400 font-mono">Contra el Escenario</span>
          </div>
          <ul className="text-[12px] text-slate-400 space-y-1.5 list-disc pl-4.5">
            <li>Los jugadores aliados nunca pueden atacarse entre sí ni bloquear pasos críticos.</li>
            <li>Puedes donar libremente oro o materiales a tus aliados gastando 1 punto de movimiento en adyacencia.</li>
            <li>Escenario "La Leyenda de Gelea": Coloca fichas especiales en la Utopía del Dragón.</li>
            <li>Resolución de Combates contra IA usando el mazo de comportamiento táctico de la IA.</li>
          </ul>
        </div>
      )}

      {prepMode === 'campaña' && (
        <div className="space-y-2 text-xs">
          <div className="bg-slate-950/60 p-2.5 rounded-lg border border-slate-850/80 flex justify-between items-center text-[10px]">
            <span className="font-semibold text-slate-300">Campaña Individual (Modo Solitario)</span>
            <span className="text-purple-400 font-mono">Vs Mazo de IA</span>
          </div>
          <ul className="text-[12px] text-slate-400 space-y-1.5 list-disc pl-4.5">
            <li>Se activan los mazos de control de IA enemigos para simular las decisiones del oponente.</li>
            <li>La IA mueve e inicia combates automáticamente al final de cada uno de tus turnos.</li>
            <li>No se permite rendirse ni pagar sobornos de oro para escapar de los encuentros con la IA.</li>
            <li>Los héroes Aislinn o Isra custodian las losetas centrales de tesoro; derrótalos para ganar la campaña.</li>
          </ul>
        </div>
      )}

      {prepMode === 'alianza' && (
        <div className="space-y-2 text-xs">
          <div className="bg-slate-950/60 p-2.5 rounded-lg border border-slate-850/80 flex justify-between items-center text-[10px]">
            <span className="font-semibold text-slate-300">Modo Alianza por Equipos (2 vs 2)</span>
            <span className="text-amber-500 font-mono">Equipos Unidos</span>
          </div>
          <ul className="text-[12px] text-slate-400 space-y-1.5 list-disc pl-4.5">
            <li>Envío de recursos de tesorería libre a tu aliado de equipo sin coste adicional de movimiento.</li>
            <li>Permite intercambiar artefactos de tu mochila si ambos héroes finalizan el turno adyacentes.</li>
            <li>Condición de Victoria: El equipo que capture y flaggee primero el Castillo central o la capital enemiga gana.</li>
          </ul>
        </div>
      )}
    </div>
  );
}
