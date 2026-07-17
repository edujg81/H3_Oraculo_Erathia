import React from 'react';
import { Coins, Hammer, Crown } from 'lucide-react';
import { Player } from '../types';

interface ActivePlayerTreasuryProps {
  activePlayer: Player;
  activePlayerIndex: number;
  round: number;
  roundType: 'Recursos' | 'Astrológica';
  setPlayers: React.Dispatch<React.SetStateAction<Player[]>>;
  updateActivePlayerResource: (resource: 'gold' | 'materials' | 'valuables', amount: number) => void;
  updateActivePlayerGeneration: (resource: 'goldGen' | 'materialsGen' | 'valuablesGen', isIncrement: boolean) => void;
}

export function ActivePlayerTreasury({
  activePlayer,
  activePlayerIndex,
  round,
  roundType,
  setPlayers,
  updateActivePlayerResource,
  updateActivePlayerGeneration,
}: ActivePlayerTreasuryProps) {
  return (
    <div id="active-player-treasury-card" className="bg-[#1b1311] border border-slate-800 rounded-3xl p-6 shadow-xl space-y-6 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/5 rounded-full blur-2xl pointer-events-none" />
      
      <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-slate-800/80 pb-4 gap-3">
        <div>
          <span className="text-[10px] text-amber-500/80 font-mono uppercase tracking-widest block font-bold">
            Tesorería del Jugador Activo
          </span>
          <h3 className="font-serif text-amber-200 text-lg font-bold">
            {activePlayer.name}
          </h3>
        </div>
        <button
          type="button"
          disabled={round === 1 || roundType !== 'Recursos' || activePlayer.incomeCollectedRound === round}
          onClick={() => {
            if (round === 1 || roundType !== 'Recursos' || activePlayer.incomeCollectedRound === round) return;
            // Collect active player's resource generation
            setPlayers(prev => prev.map((p, idx) => {
              if (idx === activePlayerIndex) {
                return {
                  ...p,
                  gold: (p.gold ?? 0) + (p.goldGen ?? 10),
                  materials: (p.materials ?? 0) + (p.materialsGen ?? 2),
                  valuables: (p.valuables ?? 0) + (p.valuablesGen ?? 1),
                  incomeCollectedRound: round
                };
              }
              return p;
            }));
          }}
          className={`self-start sm:self-center text-xs font-bold py-1.5 px-3.5 rounded-xl transition flex items-center space-x-1.5 border shadow-sm ${
            round !== 1 && roundType === 'Recursos' && activePlayer.incomeCollectedRound !== round
              ? 'bg-emerald-950/40 hover:bg-emerald-900/30 border-emerald-800/60 hover:border-emerald-600 text-emerald-400 hover:text-emerald-300 cursor-pointer animate-pulse'
              : 'bg-slate-900/40 border-slate-800 text-slate-500 cursor-not-allowed opacity-50'
          }`}
        >
          <Coins className="w-3.5 h-3.5" />
          <span>
            {round === 1
              ? 'Sin ingresos en Ronda 1'
              : activePlayer.incomeCollectedRound === round 
                ? 'Ingresos Cobrados' 
                : `Cobrar Ingresos (+${activePlayer.goldGen ?? 10}O, +${activePlayer.materialsGen ?? 2}M, +${activePlayer.valuablesGen ?? 1}V)`}
          </span>
        </button>
      </div>

      {/* Resource grid with increment/decrement buttons */}
      <div className="grid grid-cols-3 gap-3">
        {/* Gold */}
        <div className="bg-amber-950/10 border border-amber-900/30 rounded-2xl p-4 flex flex-col items-center relative">
          <Coins className="w-6 h-6 text-amber-500 mb-1" />
          <span className="text-2xl font-bold text-amber-300 font-mono">{activePlayer.gold ?? 15}</span>
          <span className="text-[10px] text-amber-600 uppercase font-mono font-semibold">Oro (O)</span>
          <div className="flex gap-1.5 mt-2.5">
            <button 
              type="button"
              onClick={() => updateActivePlayerResource('gold', -1)} 
              className="w-7 h-7 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-200 text-xs flex items-center justify-center font-bold cursor-pointer transition border border-slate-800"
            >
              -
            </button>
            <button 
              type="button"
              onClick={() => updateActivePlayerResource('gold', 1)} 
              className="w-7 h-7 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-200 text-xs flex items-center justify-center font-bold cursor-pointer transition border border-slate-800"
            >
              +
            </button>
          </div>
        </div>

        {/* Materials */}
        <div className="bg-orange-950/10 border border-orange-900/30 rounded-2xl p-4 flex flex-col items-center relative">
          <Hammer className="w-6 h-6 text-orange-500 mb-1" />
          <span className="text-2xl font-bold text-orange-300 font-mono">{activePlayer.materials ?? 3}</span>
          <span className="text-[10px] text-orange-600 uppercase font-mono font-semibold">Materiales (M)</span>
          <div className="flex gap-1.5 mt-2.5">
            <button 
              type="button"
              onClick={() => updateActivePlayerResource('materials', -1)} 
              className="w-7 h-7 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-200 text-xs flex items-center justify-center font-bold cursor-pointer transition border border-slate-800"
            >
              -
            </button>
            <button 
              type="button"
              onClick={() => updateActivePlayerResource('materials', 1)} 
              className="w-7 h-7 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-200 text-xs flex items-center justify-center font-bold cursor-pointer transition border border-slate-800"
            >
              +
            </button>
          </div>
        </div>

        {/* Valuables */}
        <div className="bg-purple-950/10 border border-purple-900/30 rounded-2xl p-4 flex flex-col items-center relative">
          <Crown className="w-6 h-6 text-purple-500 mb-1" />
          <span className="text-2xl font-bold text-purple-300 font-mono">{activePlayer.valuables ?? 1}</span>
          <span className="text-[10px] text-purple-600 uppercase font-mono font-semibold">Valiosos (V)</span>
          <div className="flex gap-1.5 mt-2.5">
            <button 
              type="button"
              onClick={() => updateActivePlayerResource('valuables', -1)} 
              className="w-7 h-7 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-200 text-xs flex items-center justify-center font-bold cursor-pointer transition border border-slate-800"
            >
              -
            </button>
            <button 
              type="button"
              onClick={() => updateActivePlayerResource('valuables', 1)} 
              className="w-7 h-7 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-200 text-xs flex items-center justify-center font-bold cursor-pointer transition border border-slate-800"
            >
              +
            </button>
          </div>
        </div>
      </div>

      {/* Generación de Recursos (Ronda de Recursos) */}
      <div className="space-y-3 bg-slate-950/25 p-4 rounded-2xl border border-slate-850/80">
        <div className="flex items-center justify-between border-b border-slate-800/50 pb-2">
          <span className="text-[10px] text-slate-400 font-mono uppercase tracking-wider font-semibold">
            Generación de Recursos (Ingresos de Ronda)
          </span>
          <span className="text-[9px] font-mono bg-emerald-950/80 text-emerald-400 px-2 py-0.5 rounded border border-emerald-900/40">
            Siguiente Ronda
          </span>
        </div>

        <div className="grid grid-cols-3 gap-3">
          {/* Gold Gen */}
          <div className="bg-amber-950/5 border border-amber-900/20 rounded-xl p-3 flex flex-col items-center">
            <span className="text-xl font-bold text-amber-400 font-mono">+{activePlayer.goldGen ?? 10}</span>
            <span className="text-[9px] text-amber-500 uppercase font-mono font-medium mt-0.5" title="Intervalos de 5, rango 10-45">Oro (10-45)</span>
            <div className="flex gap-1 mt-2">
              <button 
                type="button"
                onClick={() => updateActivePlayerGeneration('goldGen', false)} 
                className="w-6 h-6 rounded bg-slate-900 hover:bg-slate-800 text-slate-300 text-[10px] flex items-center justify-center font-bold cursor-pointer transition border border-slate-800"
                title="Restar 5"
              >
                -
              </button>
              <button 
                type="button"
                onClick={() => updateActivePlayerGeneration('goldGen', true)} 
                className="w-6 h-6 rounded bg-slate-900 hover:bg-slate-800 text-slate-300 text-[10px] flex items-center justify-center font-bold cursor-pointer transition border border-slate-800"
                title="Sumar 5"
              >
                +
              </button>
            </div>
          </div>

          {/* Materials Gen */}
          <div className="bg-orange-950/5 border border-orange-900/20 rounded-xl p-3 flex flex-col items-center">
            <span className="text-xl font-bold text-orange-400 font-mono">+{activePlayer.materialsGen ?? 2}</span>
            <span className="text-[9px] text-orange-500 uppercase font-mono font-medium mt-0.5" title="Intervalos de 2, rango 0-14">Mat. (0-14)</span>
            <div className="flex gap-1 mt-2">
              <button 
                type="button"
                onClick={() => updateActivePlayerGeneration('materialsGen', false)} 
                className="w-6 h-6 rounded bg-slate-900 hover:bg-slate-800 text-slate-300 text-[10px] flex items-center justify-center font-bold cursor-pointer transition border border-slate-800"
                title="Restar 2"
              >
                -
              </button>
              <button 
                type="button"
                onClick={() => updateActivePlayerGeneration('materialsGen', true)} 
                className="w-6 h-6 rounded bg-slate-900 hover:bg-slate-800 text-slate-300 text-[10px] flex items-center justify-center font-bold cursor-pointer transition border border-slate-800"
                title="Sumar 2"
              >
                +
              </button>
            </div>
          </div>

          {/* Valuables Gen */}
          <div className="bg-purple-950/5 border border-purple-900/20 rounded-xl p-3 flex flex-col items-center">
            <span className="text-xl font-bold text-purple-400 font-mono">+{activePlayer.valuablesGen ?? 1}</span>
            <span className="text-[9px] text-purple-500 uppercase font-mono font-medium mt-0.5" title="Intervalos de 1, rango 0-7">Val. (0-7)</span>
            <div className="flex gap-1 mt-2">
              <button 
                type="button"
                onClick={() => updateActivePlayerGeneration('valuablesGen', false)} 
                className="w-6 h-6 rounded bg-slate-900 hover:bg-slate-800 text-slate-300 text-[10px] flex items-center justify-center font-bold cursor-pointer transition border border-slate-800"
                title="Restar 1"
              >
                -
              </button>
              <button 
                type="button"
                onClick={() => updateActivePlayerGeneration('valuablesGen', true)} 
                className="w-6 h-6 rounded bg-slate-900 hover:bg-slate-800 text-slate-300 text-[10px] flex items-center justify-center font-bold cursor-pointer transition border border-slate-800"
                title="Sumar 1"
              >
                +
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
