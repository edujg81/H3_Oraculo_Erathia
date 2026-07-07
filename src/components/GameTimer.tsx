import React, { useState } from 'react';
import { Player } from '../types';
import { 
  Play, Pause, RotateCcw, UserPlus, Trash, Hourglass, 
  HelpCircle, Users, Clock, Calendar, ShieldAlert, Plus, ChevronRight
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
        
        {/* Left Column: Official Game Clock (col-span-7) */}
        <div className="lg:col-span-7 space-y-6">
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
              <div className="bg-red-950/20 border border-red-900/30 p-3 rounded-xl flex items-center gap-2 text-red-300 text-[11px] animate-pulse">
                <ShieldAlert className="w-4 h-4 shrink-0 text-red-500" />
                <span>¡Quedan menos de 15 segundos! El turno del jugador está a punto de expirar.</span>
              </div>
            )}
          </div>
        </div>

        {/* Right Column: Player & Faction Management (col-span-5) */}
        <div className="lg:col-span-5 space-y-6">
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

            {/* Scrollable Player List */}
            <div className="space-y-2 max-h-[220px] overflow-y-auto pr-1">
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
                        {isActive && (
                          <span className="text-[10px] text-amber-400 font-mono flex items-center gap-1.5 mt-0.5">
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
            <form onSubmit={handleAddPlayer} className="space-y-2 bg-slate-950/60 p-3 rounded-2xl border border-slate-850">
              <span className="text-[10px] text-slate-400 font-mono block uppercase tracking-wider font-semibold">Añadir Jugador Personalizado:</span>
              <div className="flex gap-2">
                <input
                  type="text"
                  placeholder="Nombre de jugador..."
                  value={newPlayerName}
                  onChange={(e) => setNewPlayerName(e.target.value)}
                  className="flex-1 bg-slate-950 border border-slate-800 rounded-xl px-3 py-1.5 text-xs text-slate-200 placeholder-slate-600 focus:outline-none focus:ring-1 focus:ring-amber-500 focus:border-amber-500"
                />
              </div>
              <div className="flex items-center gap-2">
                <select
                  value={selectedFaction}
                  onChange={(e) => setSelectedFaction(e.target.value)}
                  className="flex-1 bg-slate-950 border border-slate-800 rounded-xl px-2.5 py-1.5 text-xs text-slate-300 focus:outline-none focus:ring-1 focus:ring-amber-500"
                >
                  {FACTIONS.map(f => (
                    <option key={f.id} value={f.id} className="bg-slate-950 text-slate-200">
                      {f.name}
                    </option>
                  ))}
                </select>
                <button
                  type="submit"
                  className="px-4 py-1.5 bg-amber-600/90 hover:bg-amber-600 text-white rounded-xl text-xs font-semibold cursor-pointer transition whitespace-nowrap flex items-center gap-1"
                >
                  <Plus className="w-3.5 h-3.5" /> Añadir
                </button>
              </div>
            </form>
          </div>
        </div>

      </div>

      {/* 3. Bottom Helper Guidelines Box */}
      <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-4 flex gap-3 text-xs text-slate-400 leading-relaxed shadow-md">
        <HelpCircle className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
        <div>
          <p className="font-semibold text-slate-300">Reglas Oficiales de Rondas (Juego de Mesa):</p>
          <p className="text-[11px] mt-0.5">
            Las <strong>rondas de recursos (impares)</strong> activan la generación de oro, madera y mineral en tus minas y tu ciudad (Nota: la primera ronda inicial no genera producción). Las <strong>rondas astrológicas (pares)</strong> alteran temporalmente las condiciones del mapa o del combate a través de una carta de evento astrológico.
          </p>
        </div>
      </div>

    </div>
  );
}
export { GameTimer };
