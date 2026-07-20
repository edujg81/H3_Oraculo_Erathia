import React from 'react';
import { Compass, RotateCcw, ArrowRight } from 'lucide-react';
import { Player } from '../types';

interface ActivePlayerActionsProps {
  activePlayer: Player;
  activePlayerIndex: number;
  setPlayers: React.Dispatch<React.SetStateAction<Player[]>>;
  toggleMovementPoint: (hero: 'main' | 'sec', index: number) => void;
  toggleActivePlayerAction: (actionKey: 'actionBuildUsed' | 'actionRecruitUsed' | 'actionMageGuildUsed') => void;
}

export function ActivePlayerActions({
  activePlayer,
  activePlayerIndex,
  setPlayers,
  toggleMovementPoint,
  toggleActivePlayerAction,
}: ActivePlayerActionsProps) {
  return (
    <div id="active-player-actions-card" className="bg-[#0d0a09] border border-slate-800 rounded-3xl p-6 shadow-xl space-y-6 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/5 rounded-full blur-2xl pointer-events-none" />
      
      <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-slate-800/80 pb-4 gap-3">
        <div>
          <span className="text-[10px] text-amber-500/80 font-mono uppercase tracking-widest block font-bold">
            Acciones del Jugador Activo
          </span>
          <h3 className="font-serif text-amber-200 text-lg font-bold">
            Movimiento y Fichas de Ciudad
          </h3>
        </div>
      </div>

      {/* Puntos de Movimiento de los Héroes */}
      <div className="space-y-3 bg-slate-950/25 p-4 rounded-2xl border border-slate-850/85">
        <div className="flex items-center justify-between border-b border-slate-800/50 pb-2">
          <div className="flex items-center gap-2">
            <Compass className="w-4 h-4 text-emerald-500 animate-pulse" />
            <span className="text-[10px] text-slate-400 font-mono uppercase tracking-wider font-semibold">
              Acciones de Movimiento por Turno
            </span>
          </div>
          <button
            type="button"
            onClick={() => {
              setPlayers(prev => prev.map((p, idx) => {
                if (idx === activePlayerIndex) {
                  return {
                    ...p,
                    mainHeroMove: 3,
                    secHeroMove: 2
                  };
                }
                return p;
              }));
            }}
            className="text-[9px] font-mono bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white px-2 py-0.5 rounded border border-slate-800 flex items-center gap-1 transition-all cursor-pointer"
            title="Restaurar puntos de movimiento"
          >
            <RotateCcw className="w-2.5 h-2.5" />
            <span>Reiniciar</span>
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-1">
          {/* Héroe Principal */}
          <div className="bg-slate-950/60 border border-slate-850 rounded-xl p-3 flex flex-col gap-2">
            <div className="flex justify-between items-center border-b border-slate-900 pb-1">
              <span className="text-xs font-bold text-slate-200 font-serif">Héroe Principal</span>
              <span className="text-[10px] text-slate-400 font-mono">{(activePlayer.mainHeroMove ?? 3)}/3 PM</span>
            </div>
            <div className="flex items-center gap-2.5 justify-center py-1">
              {[0, 1, 2].map((idx) => {
                const isAvailable = idx < (activePlayer.mainHeroMove ?? 3);
                return (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => toggleMovementPoint('main', idx)}
                    className={`w-10 h-10 rounded-lg border flex items-center justify-center transition-all cursor-pointer ${
                      isAvailable
                        ? 'border-emerald-800 bg-emerald-950/20 text-emerald-400 hover:bg-emerald-950/30 hover:border-emerald-600 shadow-md shadow-emerald-950/20'
                        : 'border-[#a0522d]/60 bg-[#a0522d]/5 text-[#a0522d] hover:bg-[#a0522d]/10 hover:border-[#a0522d]/80'
                    }`}
                    title={isAvailable ? "Click para gastar punto de movimiento" : "Click para recuperar punto de movimiento"}
                  >
                    <ArrowRight className="w-5 h-5 stroke-[3.5] transition-transform duration-200" />
                  </button>
                );
              })}
            </div>
          </div>

          {/* Héroe Secundario */}
          {activePlayer.hasSecHero ? (
            <div className="bg-slate-950/60 border border-slate-850 rounded-xl p-3 flex flex-col gap-2 animate-fadeIn">
              <div className="flex justify-between items-center border-b border-slate-900 pb-1">
                <span className="text-xs font-bold text-slate-200 font-serif">Héroe Secundario</span>
                <span className="text-[10px] text-slate-400 font-mono">{(activePlayer.secHeroMove ?? 2)}/2 PM</span>
              </div>
              <div className="flex items-center gap-2.5 justify-center py-1">
                {[0, 1].map((idx) => {
                  const isAvailable = idx < (activePlayer.secHeroMove ?? 2);
                  return (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => toggleMovementPoint('sec', idx)}
                      className={`w-10 h-10 rounded-lg border flex items-center justify-center transition-all cursor-pointer ${
                        isAvailable
                          ? 'border-emerald-800 bg-emerald-950/20 text-emerald-400 hover:bg-emerald-950/30 hover:border-emerald-600 shadow-md shadow-emerald-950/20'
                          : 'border-[#a0522d]/60 bg-[#a0522d]/5 text-[#a0522d] hover:bg-[#a0522d]/10 hover:border-[#a0522d]/80'
                      }`}
                      title={isAvailable ? "Click para gastar punto de movimiento" : "Click para recuperar punto de movimiento"}
                    >
                      <ArrowRight className="w-5 h-5 stroke-[3.5] transition-transform duration-200" />
                    </button>
                  );
                })}
              </div>
              <div className="flex justify-between items-center text-[10px] text-slate-400 font-mono -mt-1 px-0.5">
                <button
                  type="button"
                  onClick={() => {
                    setPlayers(prev => prev.map((p, idx) => {
                      if (idx === activePlayerIndex) {
                        return {
                          ...p,
                          hasSecHero: false,
                          secHeroMove: 2
                        };
                      }
                      return p;
                    }));
                  }}
                  className="text-[9px] font-mono text-red-400 hover:text-red-300 bg-red-950/20 border border-red-950/40 hover:border-red-500/50 px-1.5 py-0.5 rounded cursor-pointer transition-all"
                  title="Marcar como derrotado para eliminarlo del juego (permitirá volver a reclutarlo pagando 10 de Oro)"
                >
                  💀 Derrotado
                </button>
              </div>
            </div>
          ) : (
            <div className="bg-slate-950/60 border border-slate-850/60 rounded-xl p-3 flex flex-col justify-between min-h-[105px] animate-fadeIn">
              <div className="flex justify-between items-center border-b border-slate-900 pb-1">
                <span className="text-xs font-bold text-slate-400 font-serif">Héroe Secundario</span>
                <span className="text-[9px] text-slate-500 font-mono">No Contratado</span>
              </div>
              
              <div className="py-2">
                <button
                  type="button"
                  disabled={activePlayer.actionRecruitUsed}
                  onClick={() => {
                    setPlayers(prev => prev.map((p, idx) => {
                      if (idx === activePlayerIndex) {
                        return {
                          ...p,
                          hasSecHero: true,
                          actionRecruitUsed: true,
                          secHeroMove: 2,
                          gold: Math.max(0, (p.gold ?? 0) - 10)
                        };
                      }
                      return p;
                    }));
                  }}
                  className={`w-full py-1.5 px-2.5 rounded-lg border text-center text-[11px] font-bold transition-all cursor-pointer ${
                    activePlayer.actionRecruitUsed
                      ? 'border-slate-850 bg-slate-900/20 text-slate-500 cursor-not-allowed opacity-60'
                      : 'border-amber-600/30 bg-amber-500/5 text-amber-300 hover:bg-amber-600/10 hover:border-amber-500/60 shadow-sm'
                  }`}
                  title={activePlayer.actionRecruitUsed ? "No disponible (ficha 'Reclutar' ya usada)" : "Paga 10 de Oro y gasta la ficha de Acción 'Reclutar' para contratar el 2º Héroe"}
                >
                  Reclutar 2º Héroe (-10 🪙)
                </button>
              </div>

              <div className="text-[9px] text-center font-mono leading-tight">
                {activePlayer.actionRecruitUsed ? (
                  <span className="text-red-500/80">⚠️ Ficha "Reclutar" ya usada</span>
                ) : (
                  <span className="text-slate-500">Usa ficha "Reclutar" + 10 Oro</span>
                )}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Three independent town action tokens */}
      <div className="space-y-3 bg-slate-950/40 p-4 rounded-2xl border border-slate-850">
        <div className="flex items-center justify-between border-b border-slate-800/50 pb-2">
          <span className="text-[10px] text-slate-400 font-mono uppercase tracking-wider font-semibold">
            Fichas de Acción de Ciudad (Límite por Turno)
          </span>
          <span className="text-[9px] font-mono bg-amber-950/80 text-amber-400 px-2 py-0.5 rounded border border-amber-900/40">
            3 Independientes
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 pt-1">
          {/* Build Token */}
          <button
            type="button"
            onClick={() => toggleActivePlayerAction('actionBuildUsed')}
            className={`p-3 rounded-xl border text-left cursor-pointer transition-all flex items-center gap-3 ${
              activePlayer.actionBuildUsed
                ? 'border-red-950 bg-red-950/10 text-red-400 opacity-60'
                : 'border-amber-600/30 bg-amber-500/5 text-amber-300 hover:border-amber-500/60 shadow-sm'
            }`}
          >
            <div className={`w-6 h-6 rounded-lg flex items-center justify-center ${activePlayer.actionBuildUsed ? 'bg-red-950 text-red-500' : 'bg-amber-600/20 text-amber-400 animate-pulse'}`}>
              🏢
            </div>
            <div className="flex-1 min-w-0">
              <span className="text-[11px] font-bold block leading-none">Construir</span>
              <span className="text-[9px] text-slate-500 block font-mono mt-1">
                {activePlayer.actionBuildUsed ? 'GASTADO' : 'DISPONIBLE'}
              </span>
            </div>
          </button>

          {/* Recruit Token */}
          <button
            type="button"
            onClick={() => toggleActivePlayerAction('actionRecruitUsed')}
            className={`p-3 rounded-xl border text-left cursor-pointer transition-all flex items-center gap-3 ${
              activePlayer.actionRecruitUsed
                ? 'border-red-950 bg-red-950/10 text-red-400 opacity-60'
                : 'border-amber-600/30 bg-amber-500/5 text-amber-300 hover:border-amber-500/60 shadow-sm'
            }`}
          >
            <div className={`w-6 h-6 rounded-lg flex items-center justify-center ${activePlayer.actionRecruitUsed ? 'bg-red-950 text-red-500' : 'bg-amber-600/20 text-amber-400 animate-pulse'}`}>
              ⚔️
            </div>
            <div className="flex-1 min-w-0">
              <span className="text-[11px] font-bold block leading-none font-sans">Reclutar</span>
              <span className="text-[9px] text-slate-500 block font-mono mt-1">
                {activePlayer.actionRecruitUsed ? 'GASTADO' : 'DISPONIBLE'}
              </span>
            </div>
          </button>

          {/* Mage Guild Token */}
          <button
            type="button"
            onClick={() => toggleActivePlayerAction('actionMageGuildUsed')}
            className={`p-3 rounded-xl border text-left cursor-pointer transition-all flex items-center gap-3 ${
              activePlayer.actionMageGuildUsed
                ? 'border-red-950 bg-red-950/10 text-red-400 opacity-60'
                : 'border-amber-600/30 bg-amber-500/5 text-amber-300 hover:border-amber-500/60 shadow-sm'
            }`}
          >
            <div className={`w-6 h-6 rounded-lg flex items-center justify-center ${activePlayer.actionMageGuildUsed ? 'bg-red-950 text-red-500' : 'bg-amber-600/20 text-amber-400 animate-pulse'}`}>
              🔮
            </div>
            <div className="flex-1 min-w-0">
              <span className="text-[11px] font-bold block leading-none">Cofradía</span>
              <span className="text-[9px] text-slate-500 block font-mono mt-1">
                {activePlayer.actionMageGuildUsed ? 'GASTADO' : 'DISPONIBLE'}
              </span>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}
