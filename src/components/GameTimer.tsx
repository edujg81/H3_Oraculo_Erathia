import React, { useState } from 'react';
import { Player } from '../types';
import { 
  Play, Pause, RotateCcw, UserPlus, Trash, Hourglass, 
  HelpCircle, Users, Clock, Calendar, ShieldAlert, Plus, ChevronRight,
  Coins, Hammer, Crown, Shield, Zap, Compass, ArrowUp, ArrowRight
} from 'lucide-react';

interface GameTimerProps {
  round: number;
  setRound: React.Dispatch<React.SetStateAction<number>>;
  roundType: 'Recursos' | 'Astrológica';
  players: Player[];
  setPlayers: React.Dispatch<React.SetStateAction<Player[]>>;
  activePlayerIndex: number;
  setActivePlayerIndex: React.Dispatch<React.SetStateAction<number>>;
  totalSeconds: number;
  setTotalSeconds: React.Dispatch<React.SetStateAction<number>>;
  isTotalRunning: boolean;
  setIsTotalRunning: React.Dispatch<React.SetStateAction<boolean>>;
  turnLimit: number;
  setTurnLimit: React.Dispatch<React.SetStateAction<number>>;
  turnSeconds: number;
  setTurnSeconds: React.Dispatch<React.SetStateAction<number>>;
  isTurnRunning: boolean;
  setIsTurnRunning: React.Dispatch<React.SetStateAction<boolean>>;
  handleNextTurn: () => void;
  handleResetTurnTimer: () => void;
  handleSetTurnLimit: (limit: number) => void;
  handleAddPlayer: (e: React.FormEvent) => void;
  handleDeletePlayer: (id: string) => void;
  newPlayerName: string;
  setNewPlayerName: React.Dispatch<React.SetStateAction<string>>;
  selectedFaction: string;
  setSelectedFaction: React.Dispatch<React.SetStateAction<string>>;
  FACTIONS: Array<{ id: string; name: string; color: string }>;
  handleSetPlayerCount: (count: number) => void;
}

export default function GameTimer({
  round,
  setRound,
  roundType,
  players,
  setPlayers,
  activePlayerIndex,
  setActivePlayerIndex,
  totalSeconds,
  setTotalSeconds,
  isTotalRunning,
  setIsTotalRunning,
  turnLimit,
  turnSeconds,
  isTurnRunning,
  setIsTurnRunning,
  handleNextTurn,
  handleResetTurnTimer,
  handleSetTurnLimit,
  handleAddPlayer,
  handleDeletePlayer,
  newPlayerName,
  setNewPlayerName,
  selectedFaction,
  setSelectedFaction,
  FACTIONS,
  handleSetPlayerCount,
}: GameTimerProps) {

  const formatTime = (secs: number) => {
    const mins = Math.floor(secs / 60);
    const s = secs % 60;
    return `${mins.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  const isLowTime = turnSeconds < 15 && turnLimit > 0;

  const activePlayer = players[activePlayerIndex];

  const updateActivePlayerResource = (resource: 'gold' | 'materials' | 'valuables', amount: number) => {
    setPlayers(prev => prev.map((p, idx) => {
      if (idx === activePlayerIndex) {
        const currentVal = p[resource] ?? 0;
        return {
          ...p,
          [resource]: Math.max(0, currentVal + amount)
        };
      }
      return p;
    }));
  };

  const toggleActivePlayerAction = (actionKey: 'actionBuildUsed' | 'actionRecruitUsed' | 'actionMageGuildUsed') => {
    setPlayers(prev => prev.map((p, idx) => {
      if (idx === activePlayerIndex) {
        return {
          ...p,
          [actionKey]: !p[actionKey]
        };
      }
      return p;
    }));
  };

  const updateActivePlayerGeneration = (resource: 'goldGen' | 'materialsGen' | 'valuablesGen', isIncrement: boolean) => {
    setPlayers(prev => prev.map((p, idx) => {
      if (idx === activePlayerIndex) {
        if (resource === 'goldGen') {
          const current = p.goldGen ?? 10;
          const next = isIncrement ? current + 5 : current - 5;
          return {
            ...p,
            goldGen: Math.min(45, Math.max(10, next))
          };
        } else if (resource === 'materialsGen') {
          const current = p.materialsGen ?? 2;
          const next = isIncrement ? current + 2 : current - 2;
          return {
            ...p,
            materialsGen: Math.min(14, Math.max(0, next))
          };
        } else {
          const current = p.valuablesGen ?? 1;
          const next = isIncrement ? current + 1 : current - 1;
          return {
            ...p,
            valuablesGen: Math.min(7, Math.max(0, next))
          };
        }
      }
      return p;
    }));
  };

  const toggleMovementPoint = (hero: 'main' | 'sec', index: number) => {
    setPlayers(prev => prev.map((p, idx) => {
      if (idx === activePlayerIndex) {
        if (hero === 'main') {
          const current = p.mainHeroMove ?? 3;
          const isGreen = index < current;
          const nextVal = isGreen ? index : index + 1;
          return {
            ...p,
            mainHeroMove: nextVal
          };
        } else {
          const current = p.secHeroMove ?? 2;
          const isGreen = index < current;
          const nextVal = isGreen ? index : index + 1;
          return {
            ...p,
            secHeroMove: nextVal
          };
        }
      }
      return p;
    }));
  };

  return (
    <div className="space-y-6">
      
      {/* 1. Sleek Top Dashboard Summary bar */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        
        {/* Round Counter Banner */}
        <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-4 flex items-center justify-between shadow-lg">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center">
              <Calendar className="w-5 h-5 text-amber-500" />
            </div>
            <div>
              <span className="text-[10px] font-mono text-slate-500 uppercase tracking-wider block">Ronda Activa</span>
              <span className="text-xl font-serif font-bold text-amber-200">Ronda {round}</span>
            </div>
          </div>
          
          <div className="flex items-center gap-1.5 bg-slate-950 p-1.5 rounded-xl border border-slate-800">
            <button 
              type="button"
              onClick={() => round > 1 && setRound(round - 1)}
              className="w-8 h-8 flex items-center justify-center bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white rounded-lg cursor-pointer font-mono font-bold transition-all text-sm border border-slate-800"
              title="Ronda anterior"
            >
              -
            </button>
            <button 
              type="button"
              onClick={() => setRound(round + 1)}
              className="w-8 h-8 flex items-center justify-center bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white rounded-lg cursor-pointer font-mono font-bold transition-all text-sm border border-slate-800"
              title="Siguiente ronda"
            >
              +
            </button>
          </div>
        </div>

        {/* Dynamic Round Phase Description */}
        <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-4 flex items-center gap-3 shadow-lg md:col-span-1">
          <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${
            roundType === 'Recursos' ? 'bg-emerald-500/10 border border-emerald-500/20' : 'bg-cyan-500/10 border border-cyan-500/20'
          }`}>
            <span className={`w-2.5 h-2.5 rounded-full ${roundType === 'Recursos' ? 'bg-emerald-500 animate-pulse' : 'bg-cyan-400'}`} />
          </div>
          <div>
            <span className="text-[10px] font-mono text-slate-500 uppercase tracking-wider block">Tipo de Fase</span>
            <span className={`text-sm font-semibold block ${roundType === 'Recursos' ? 'text-emerald-400' : 'text-cyan-400'}`}>
              {roundType === 'Recursos' ? 'Recursos (Cobro de Ingresos)' : 'Astrológica (Evento de Turno)'}
            </span>
            <span className="text-[10px] text-slate-400 block leading-tight mt-0.5 max-w-[200px]">
              {roundType === 'Recursos' 
                ? '¡Cobro de minas y ciudad! (Excepto Ronda 1).' 
                : 'Se roba y anuncia una carta astrológica.'}
            </span>
          </div>
        </div>

        {/* Compact Session Timer */}
        <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-4 flex items-center justify-between shadow-lg">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-center">
              <Clock className={`w-5 h-5 text-slate-400 ${isTotalRunning ? 'animate-pulse text-amber-500' : ''}`} />
            </div>
            <div>
              <span className="text-[10px] font-mono text-slate-500 uppercase tracking-wider block">Tiempo Total</span>
              <span className="text-lg font-mono font-bold text-slate-100">{formatTime(totalSeconds)}</span>
            </div>
          </div>

          <div className="flex gap-1.5">
            <button
              type="button"
              onClick={() => setIsTotalRunning(!isTotalRunning)}
              className={`p-2 rounded-xl text-[10px] font-mono font-bold cursor-pointer transition border ${
                isTotalRunning 
                  ? 'bg-amber-500/10 border-amber-500/30 text-amber-400 hover:bg-amber-500/20' 
                  : 'bg-slate-950 border-slate-800 text-slate-400 hover:text-slate-200'
              }`}
            >
              {isTotalRunning ? 'Pausar' : 'Iniciar'}
            </button>
            <button
              type="button"
              onClick={() => { setTotalSeconds(0); setIsTotalRunning(false); }}
              className="px-2 bg-slate-950 border border-slate-800 rounded-xl text-[10px] font-mono text-slate-500 hover:text-red-400 cursor-pointer transition"
              title="Resetear cronómetro de sesión"
            >
              Rst
            </button>
          </div>
        </div>

      </div>

      {/* 2. Main Double-Column Bento Grid Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* Left Column: Official Game Clock (col-span-6) */}
        <div className="lg:col-span-6 space-y-6">
          <div className="bg-slate-900/90 border border-slate-800 rounded-3xl p-6 shadow-xl space-y-6 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/5 rounded-full blur-2xl pointer-events-none" />
            
            <div className="flex items-center justify-between border-b border-slate-800/80 pb-4">
              <div>
                <h3 className="font-serif text-amber-200 text-lg font-bold">Temporizador del Turno Activo</h3>
                <p className="text-[10px] text-slate-400 font-mono uppercase tracking-wider mt-0.5">Control de Rondas y Penalizaciones</p>
              </div>
              <span className="text-[10px] font-mono bg-slate-950 px-2 py-0.5 rounded border border-slate-800 text-amber-500">
                CRONÓMETRO OFICIAL
              </span>
            </div>

            {/* Giant Active Clock Display */}
            <div className="bg-slate-950/60 border border-slate-850 rounded-2xl p-6 flex flex-col items-center justify-center text-center space-y-4">
              <div className="space-y-1">
                <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest block">Tiempo del Jugador Actual</span>
                <div className={`font-mono text-5xl sm:text-6xl font-extrabold tracking-widest leading-none ${
                  isLowTime ? 'text-red-500 animate-pulse' : 'text-amber-400'
                }`}>
                  {formatTime(turnSeconds)}
                </div>
              </div>

              {/* Active Player Tag */}
              <div className="px-4 py-1.5 rounded-full bg-slate-900 border border-slate-800 flex items-center gap-2">
                <span className={`w-2 h-2 rounded-full ${isTurnRunning ? 'bg-green-500 animate-ping' : 'bg-amber-500'}`} />
                <span className="text-xs text-slate-300 font-mono">
                  Turno de: <strong className="text-white font-serif">{players[activePlayerIndex]?.name || 'Nadie'}</strong>
                </span>
              </div>

              {/* Turn Limit select presets */}
              <div className="w-full space-y-2 pt-2">
                <span className="text-[10px] text-slate-500 font-mono uppercase tracking-wider block">Modificar límite de turno:</span>
                <div className="flex flex-wrap gap-1.5 justify-center select-none">
                  {[30, 60, 120, 180, 300].map((sec) => (
                    <button
                      key={sec}
                      type="button"
                      onClick={() => handleSetTurnLimit(sec)}
                      className={`text-[10px] px-2.5 py-1 rounded-lg border cursor-pointer font-mono transition-all ${
                        turnLimit === sec 
                          ? 'border-amber-500 bg-amber-500/15 text-amber-400 font-bold' 
                          : 'border-slate-800 text-slate-400 hover:bg-slate-800/40 hover:text-slate-300'
                      }`}
                    >
                      {sec < 60 ? `${sec}s` : `${sec / 60}m`}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Clock Control Buttons */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              <button
                type="button"
                onClick={() => setIsTurnRunning(!isTurnRunning)}
                className={`py-3 px-4 rounded-xl text-xs font-bold cursor-pointer transition-all flex items-center justify-center gap-2 shadow-md ${
                  isTurnRunning 
                    ? 'bg-amber-700 hover:bg-amber-800 text-white hover:shadow-amber-950/20' 
                    : 'bg-emerald-600 hover:bg-emerald-700 text-white hover:shadow-emerald-950/20'
                }`}
              >
                {isTurnRunning ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                {isTurnRunning ? 'Pausar Turno' : 'Iniciar Turno'}
              </button>

              <button
                type="button"
                onClick={handleResetTurnTimer}
                className="py-3 px-4 bg-slate-800 hover:bg-slate-705 border border-slate-700/60 text-slate-300 text-xs font-semibold rounded-xl cursor-pointer transition flex items-center justify-center gap-2"
              >
                <RotateCcw className="w-4 h-4" />
                Reiniciar
              </button>

              <button
                type="button"
                onClick={handleNextTurn}
                className="col-span-2 sm:col-span-1 py-3 px-4 bg-amber-600 hover:bg-amber-700 text-white text-xs font-bold rounded-xl cursor-pointer transition-all flex items-center justify-center gap-2 shadow-lg hover:shadow-amber-900/20 font-mono"
              >
                <span>Siguiente Turno</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

            {/* Warning Message for Low Time */}
            {isLowTime && (
              <div className="bg-red-950/20 border border-red-900/30 p-3 rounded-xl flex items-center gap-2 text-red-300 text-[12px] animate-pulse">
                <ShieldAlert className="w-4 h-4 shrink-0 text-red-500" />
                <span>
                  {turnSeconds === 0 
                    ? '¡El tiempo se ha agotado! El turno ha finalizado.' 
                    : '¡Quedan menos de 15 segundos! El turno del jugador está a punto de expirar.'}
                </span>
              </div>
            )}
          </div>


        </div>

        {/* Right Column: Player & Faction Management (col-span-6) */}
        <div className="lg:col-span-6 space-y-6">
          <div className="bg-slate-900/90 border border-slate-800 rounded-3xl p-5 shadow-xl space-y-4">
            
            <div className="flex items-center justify-between border-b border-slate-800/80 pb-3">
              <div>
                <h3 className="font-serif text-amber-200 text-base font-bold flex items-center gap-2">
                  <Users className="w-4 h-4 text-amber-500" /> Lista de Jugadores
                </h3>
              </div>
              <span className="text-[10px] text-amber-500 font-mono uppercase tracking-wider">Mesa de Juego</span>
            </div>

            {/* Quick Presets for Player Count */}
            <div className="space-y-2 bg-slate-950/40 p-3 rounded-xl border border-slate-850">
              <label className="text-[10px] text-slate-400 font-mono block uppercase tracking-wider font-semibold">Configuración Rápida de Jugadores:</label>
              <div className="grid grid-cols-6 gap-1">
                {[1, 2, 3, 4, 5, 6].map(num => (
                  <button
                    key={num}
                    type="button"
                    onClick={() => handleSetPlayerCount(num)}
                    className={`py-1 text-xs font-mono rounded-lg border text-center transition cursor-pointer font-bold ${
                      players.length === num
                        ? 'border-amber-500 bg-amber-950/40 text-amber-300'
                        : 'bg-slate-950 border-slate-850 text-slate-500 hover:text-slate-300'
                    }`}
                  >
                    {num}
                  </button>
                ))}
              </div>
            </div>

            {/* Player List (Height adjusts naturally, no scrollbar) */}
            <div className="space-y-2">
              {players.map((player, idx) => {
                const isActive = activePlayerIndex === idx;
                return (
                  <div
                    key={player.id}
                    onClick={() => setActivePlayerIndex(idx)}
                    className={`flex items-center justify-between p-2.5 rounded-xl border transition-all duration-200 cursor-pointer select-none ${player.color} ${
                      isActive 
                        ? 'ring-1 ring-amber-500/80 shadow-md scale-[1.01] border-amber-500' 
                        : 'border-slate-800/60 opacity-80 hover:opacity-100'
                    }`}
                  >
                    <div className="flex items-center gap-3 truncate">
                      <div className="w-5 h-5 rounded-full bg-slate-950 border border-slate-800 flex items-center justify-center font-mono text-[10px] text-amber-500 font-bold shrink-0">
                        {idx + 1}
                      </div>
                      <div>
                        <p className="text-xs font-semibold">{player.name}</p>
                        <div className="flex flex-wrap items-center gap-1.5 mt-1 select-none">
                          <span className="text-[10px] font-mono bg-slate-950/85 px-2 py-0.5 rounded border border-slate-800/80 text-amber-300 font-bold" title="Tesorería">
                            🟡 {player.gold ?? 15}O • 🪵 {player.materials ?? 3}M • 🔮 {player.valuables ?? 1}V
                          </span>
                          <span className="text-[9px] font-mono bg-emerald-950/30 px-1.5 py-0.5 rounded border border-emerald-900/40 text-emerald-400 font-bold" title="Generación de recursos">
                            +{player.goldGen ?? 10}O • +{player.materialsGen ?? 2}M • +{player.valuablesGen ?? 1}V
                          </span>
                        </div>
                        <div className="flex flex-wrap items-center gap-2 mt-1 select-none">
                          <span className="text-[9px] font-mono text-slate-400 flex items-center gap-1.5">
                            <span>Mov:</span>
                            <span className="text-emerald-500 font-bold" title="Movimiento Héroe Principal">HP: {player.mainHeroMove ?? 3}/3</span>
                            <span className="text-emerald-500 font-bold" title="Movimiento Héroe Secundario">HS: {player.secHeroMove ?? 2}/2</span>
                          </span>
                          <span className="text-[9px] font-mono text-slate-500 flex items-center gap-1">
                            <span>Tokens:</span>
                            <span title="Construir" className="cursor-help">{player.actionBuildUsed ? '🔴' : '🟢'}</span>
                            <span title="Reclutar" className="cursor-help">{player.actionRecruitUsed ? '🔴' : '🟢'}</span>
                            <span title="Cofradía" className="cursor-help">{player.actionMageGuildUsed ? '🔴' : '🟢'}</span>
                          </span>
                        </div>
                        {isActive && (
                          <span className="text-[9px] text-amber-400 font-mono flex items-center gap-1 mt-1 font-bold">
                            <span className="w-1.5 h-1.5 bg-amber-400 rounded-full animate-ping" />
                            Turno Activo
                          </span>
                        )}
                      </div>
                    </div>

                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleDeletePlayer(player.id);
                      }}
                      className="p-1 text-slate-500 hover:text-red-400 rounded-lg hover:bg-slate-800 cursor-pointer transition shrink-0"
                      title="Eliminar participante"
                    >
                      <Trash className="w-3.5 h-3.5" />
                    </button>
                  </div>
                );
              })}
            </div>

            {/* Custom Player Adder */}
            <form onSubmit={handleAddPlayer} className="space-y-3 bg-slate-950/60 p-4 rounded-2xl border border-slate-850">
              <span className="text-[10px] text-slate-400 font-mono block uppercase tracking-wider font-semibold">Añadir Jugador Personalizado:</span>
              <div className="space-y-2.5">
                <input
                  type="text"
                  placeholder="Nombre de jugador..."
                  value={newPlayerName}
                  onChange={(e) => setNewPlayerName(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-1.5 text-xs text-slate-200 placeholder-slate-600 focus:outline-none focus:ring-1 focus:ring-amber-500 focus:border-amber-500"
                />
                <select
                  value={selectedFaction}
                  onChange={(e) => setSelectedFaction(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-2.5 py-1.5 text-xs text-slate-300 focus:outline-none focus:ring-1 focus:ring-amber-500"
                >
                  {FACTIONS.map(f => (
                    <option key={f.id} value={f.id} className="bg-slate-950 text-slate-200">
                      {f.name}
                    </option>
                  ))}
                </select>
                <button
                  type="submit"
                  className="w-full py-2 bg-amber-600 hover:bg-amber-700 text-white rounded-xl text-xs font-bold cursor-pointer transition flex items-center justify-center gap-1.5 shadow-md hover:shadow-amber-950/20"
                >
                  <Plus className="w-4 h-4" /> Añadir Jugador
                </button>
              </div>
            </form>
          </div>
        </div>

      </div>

      {/* 3. Player Treasury and Actions Section - Side by Side, Full Width */}
      {activePlayer && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          
          {/* Box 1: Tesorería del Jugador Activo */}
          <div className="bg-[#1b1311] border border-slate-800 rounded-3xl p-6 shadow-xl space-y-6 relative overflow-hidden">
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

          {/* Box 2: Acciones del Jugador Activo */}
          <div className="bg-[#0d0a09] border border-slate-800 rounded-3xl p-6 shadow-xl space-y-6 relative overflow-hidden">
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
                <div className="bg-slate-950/60 border border-slate-850 rounded-xl p-3 flex flex-col gap-2">
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
                </div>
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

        </div>
      )}


    </div>
  );
}
export { GameTimer };
