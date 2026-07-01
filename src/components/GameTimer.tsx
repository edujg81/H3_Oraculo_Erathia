import React from 'react';
import { Player } from '../types';
import { Play, Pause, RotateCcw, UserPlus, Trash, Hourglass, HelpCircle, Users } from 'lucide-react';

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
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-1">
      {/* 1. Timers Left Box */}
      <div className="md:col-span-2 space-y-6">
        <div className="bg-slate-900 border border-amber-900/30 rounded-xl p-5 shadow-xl space-y-6">
          <div className="flex items-center justify-between border-b border-slate-800 pb-3">
            <h3 className="font-serif text-amber-200 text-lg flex items-center gap-2">
              <Hourglass className="w-5 h-5 text-amber-500" /> Panel de Cronómetros Oficial
            </h3>
            <span className="text-[10px] font-mono bg-slate-950 px-2 py-0.5 rounded text-amber-500 border border-amber-900/30">
              Mesa de Control
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Turn Countdown Timer */}
            <div className="bg-slate-950 p-5 rounded-xl border border-slate-800/80 flex flex-col justify-between items-center text-center space-y-3">
              <div>
                <p className="text-[11px] font-mono text-slate-500 uppercase tracking-widest flex items-center justify-center gap-1.5">
                  <Hourglass className={`w-3.5 h-3.5 text-amber-500 ${isTurnRunning ? 'animate-spin' : ''}`} />
                  Temporizador de Turno
                </p>
                <div className={`mt-2 font-mono text-4xl font-bold tracking-wider ${isLowTime ? 'text-red-500 animate-pulse' : 'text-amber-400'}`}>
                  {formatTime(turnSeconds)}
                </div>
                <p className="text-xs text-slate-400 mt-1">
                  Turno de: <span className="font-semibold text-white">{players[activePlayerIndex]?.name || 'Nadie'}</span>
                </p>
              </div>

              {/* Turn Limit select presets */}
              <div className="flex flex-wrap gap-1.5 justify-center my-1 select-none">
                {[30, 60, 120, 180, 300].map((sec) => (
                  <button
                    key={sec}
                    type="button"
                    onClick={() => handleSetTurnLimit(sec)}
                    className={`text-[10px] px-2 py-1 rounded border cursor-pointer font-mono ${
                      turnLimit === sec 
                        ? 'border-amber-500 bg-amber-500/10 text-amber-400 font-bold' 
                        : 'border-slate-800 text-slate-400 hover:bg-slate-800/50'
                    }`}
                  >
                    {sec < 60 ? `${sec}s` : `${sec / 60}m`}
                  </button>
                ))}
              </div>

              {/* Controls */}
              <div className="flex gap-2 w-full">
                <button
                  type="button"
                  onClick={() => setIsTurnRunning(!isTurnRunning)}
                  className={`flex-1 py-1.5 rounded text-xs font-semibold cursor-pointer transition ${
                    isTurnRunning ? 'bg-amber-700 text-white hover:bg-amber-800' : 'bg-emerald-700 text-white hover:bg-emerald-800'
                  }`}
                >
                  {isTurnRunning ? 'Pausar' : 'Iniciar'}
                </button>
                <button
                  type="button"
                  onClick={handleResetTurnTimer}
                  className="flex-1 py-1.5 bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs rounded cursor-pointer transition"
                >
                  Reiniciar
                </button>
                <button
                  type="button"
                  onClick={handleNextTurn}
                  className="flex-1 py-1.5 bg-amber-950/60 hover:bg-amber-900 border border-amber-800/80 text-amber-200 text-xs rounded cursor-pointer transition font-medium"
                >
                  Turno ➔
                </button>
              </div>
            </div>

            {/* Total Stopwatch Timer */}
            <div className="bg-slate-950 p-5 rounded-xl border border-slate-800/80 flex flex-col justify-between items-center text-center space-y-4">
              <div>
                <p className="text-[11px] font-mono text-slate-500 uppercase tracking-widest">
                  ⏱ Tiempo Total de Partida
                </p>
                <div className="mt-2 font-mono text-4xl font-bold tracking-wider text-slate-200">
                  {formatTime(totalSeconds)}
                </div>
                <p className="text-xs text-slate-500 mt-1">Duración acumulada de la sesión</p>
              </div>

              <div className="flex gap-2 w-full">
                <button
                  type="button"
                  onClick={() => setIsTotalRunning(!isTotalRunning)}
                  className={`flex-1 py-2 rounded text-xs font-semibold cursor-pointer transition ${
                    isTotalRunning ? 'bg-amber-700 text-white hover:bg-amber-800' : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                  }`}
                >
                  {isTotalRunning ? 'Pausar Reloj' : 'Iniciar Reloj'}
                </button>
                <button
                  type="button"
                  onClick={() => { setTotalSeconds(0); setIsTotalRunning(false); }}
                  className="px-3 bg-slate-900 hover:bg-slate-800 text-slate-400 border border-slate-800 rounded text-xs cursor-pointer transition"
                >
                  Rst
                </button>
              </div>
            </div>
          </div>

          {/* Round and Phase Management */}
          <div className="bg-slate-950 border border-slate-800 rounded-xl p-4">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <p className="text-xs text-slate-500 font-mono">Contador de Rondas:</p>
                <div className="flex items-center gap-3 mt-1">
                  <button 
                    type="button"
                    onClick={() => round > 1 && setRound(round - 1)}
                    className="w-8 h-8 flex items-center justify-center bg-slate-850 hover:bg-slate-800 text-slate-400 rounded-lg cursor-pointer font-mono transition"
                  >
                    -
                  </button>
                  <span className="font-serif text-xl sm:text-2xl font-bold text-amber-200 w-24 text-center">
                    Ronda {round}
                  </span>
                  <button 
                    type="button"
                    onClick={() => setRound(round + 1)}
                    className="w-8 h-8 flex items-center justify-center bg-slate-850 hover:bg-slate-800 text-slate-400 rounded-lg cursor-pointer font-mono transition"
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Status and instructions depending on type */}
              <div className="bg-slate-900 border border-amber-955/20 rounded-lg p-3 flex-1 w-full sm:max-w-xs">
                <div className="flex items-center gap-2">
                  <span className={`w-2.5 h-2.5 rounded-full ${roundType === 'Recursos' ? 'bg-emerald-500 animate-pulse' : 'bg-sky-500'}`}></span>
                  <strong className="text-xs text-amber-100">{roundType === 'Recursos' ? 'Ronda de Recursos (Impares)' : 'Ronda Astrológica (Pares)'}</strong>
                </div>
                <p className="text-[11px] text-slate-400 mt-1.5 leading-relaxed">
                  {roundType === 'Recursos'
                    ? '¡Gana recursos según tu producción! (Excepción: en la ronda 1 inicial no se cobra).'
                    : 'Roba y lee el anuncio de una carta Astrológica del mazo (p. ej. Semana de la Riqueza, Mes de la Peste).'}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 2. Turn Management & Player List */}
      <div className="space-y-6">
        <div className="bg-slate-900 border border-amber-900/30 rounded-xl p-4 shadow-xl space-y-4">
          <h3 className="font-serif text-amber-200 text-base mb-3 border-b border-slate-800 pb-2 flex justify-between items-center">
            <span className="flex items-center gap-2"><Users className="w-4 h-4 text-amber-500" /> Especificar Participantes</span>
            <span className="text-[10px] text-amber-500 font-mono">Partida Oficial</span>
          </h3>

          {/* Quick Presets for Player Count */}
          <div className="space-y-1.5">
            <label className="text-[10px] text-slate-400 font-mono block uppercase tracking-wider font-semibold">Configuración rápida de jugadores:</label>
            <div className="grid grid-cols-6 gap-1">
              {[1, 2, 3, 4, 5, 6].map(num => (
                <button
                  key={num}
                  type="button"
                  onClick={() => handleSetPlayerCount(num)}
                  className={`py-1 text-xs font-mono rounded-md border text-center transition cursor-pointer font-bold ${
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

          <div className="space-y-2 max-h-[220px] overflow-y-auto pr-1">
            <label className="text-[10px] text-slate-400 font-mono block uppercase tracking-wider font-semibold">Orden de Juego Actual:</label>
            {players.map((player, idx) => {
              const isActive = activePlayerIndex === idx;
              return (
                <div
                  key={player.id}
                  onClick={() => setActivePlayerIndex(idx)}
                  className={`flex items-center justify-between p-2.5 rounded-lg border transition duration-200 cursor-pointer select-none ${player.color} ${
                    isActive 
                      ? 'ring-1 ring-amber-500/80 shadow-md scale-[1.01]' 
                      : 'border-slate-850 opacity-80 hover:opacity-100'
                  }`}
                >
                  <div className="flex items-center gap-2.5 truncate">
                    <div className="w-5 h-5 rounded-full bg-slate-950 border border-slate-800 flex items-center justify-center font-mono text-[9px] text-amber-500 font-bold">
                      {idx + 1}
                    </div>
                    <div>
                      <p className="text-xs font-semibold">{player.name}</p>
                      {isActive && (
                        <span className="text-[9px] text-amber-400/90 font-mono flex items-center gap-1">
                          ● Turno Activo
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
                    className="p-1 text-slate-500 hover:text-red-400 rounded hover:bg-slate-850 cursor-pointer transition"
                    title="Eliminar participante"
                  >
                    <Trash className="w-3.5 h-3.5" />
                  </button>
                </div>
              );
            })}
          </div>

          {/* New player form */}
          <form onSubmit={handleAddPlayer} className="space-y-2 bg-slate-950/40 p-3 rounded-xl border border-slate-800/60">
            <span className="text-[10px] text-slate-400 font-mono block uppercase tracking-wider font-semibold">Agregar Jugador Personalizado:</span>
            <div className="flex gap-1">
              <input
                type="text"
                placeholder="Nombre (ej. Sandro o Jugador 3)"
                value={newPlayerName}
                onChange={(e) => setNewPlayerName(e.target.value)}
                className="flex-1 bg-slate-950 border border-slate-850 rounded-lg px-2.5 py-1.5 text-xs text-slate-200 placeholder-slate-600 focus:outline-none focus:ring-1 focus:ring-amber-500 focus:border-amber-500"
              />
            </div>
            <div className="flex items-center gap-1.5">
              <select
                value={selectedFaction}
                onChange={(e) => setSelectedFaction(e.target.value)}
                className="flex-1 bg-slate-950 border border-slate-850 rounded-lg px-2 py-1.5 text-xs text-slate-300 focus:outline-none focus:ring-1 focus:ring-amber-500"
              >
                {FACTIONS.map(f => (
                  <option key={f.id} value={f.id} className="bg-slate-950 text-slate-200">
                    {f.name}
                  </option>
                ))}
              </select>
              <button
                type="submit"
                className="px-3 py-1.5 bg-amber-600/90 hover:bg-amber-600 text-white rounded-lg text-xs font-semibold cursor-pointer transition whitespace-nowrap"
              >
                + Añadir
              </button>
            </div>
          </form>
        </div>

        {/* Quick Rule Grounding Box */}
        <div className="bg-slate-900/60 border border-slate-800 p-4 rounded-xl space-y-2 leading-relaxed">
          <h4 className="text-xs uppercase font-mono text-slate-400 tracking-wider flex items-center gap-1.5">
            <HelpCircle className="w-4 h-4 text-amber-500" /> Ayuda Rápida de Rondas
          </h4>
          <p className="text-[11px] text-slate-400">
            Recuerda que en <strong>Heroes III de Mesa</strong>, la primera ronda no da producción. Los recursos se cobran al inicio de las rondas de recursos (impares, p. ej. Ronda 3, 5, etc.). Las rondas astrológicas traen un anuncio astrológico que afecta a todos.
          </p>
        </div>
      </div>
    </div>
  );
}
export { GameTimer };
