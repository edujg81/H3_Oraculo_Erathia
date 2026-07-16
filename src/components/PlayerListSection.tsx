import React from 'react';
import { Users, Trash, Plus } from 'lucide-react';
import { Player } from '../types';

interface PlayerListSectionProps {
  players: Player[];
  activePlayerIndex: number;
  setActivePlayerIndex: React.Dispatch<React.SetStateAction<number>>;
  handleSetPlayerCount: (count: number) => void;
  handleDeletePlayer: (id: string) => void;
  handleAddPlayer: (e: React.FormEvent) => void;
  newPlayerName: string;
  setNewPlayerName: React.Dispatch<React.SetStateAction<string>>;
  selectedFaction: string;
  setSelectedFaction: React.Dispatch<React.SetStateAction<string>>;
  FACTIONS: Array<{ id: string; name: string; color: string }>;
}

export function PlayerListSection({
  players,
  activePlayerIndex,
  setActivePlayerIndex,
  handleSetPlayerCount,
  handleDeletePlayer,
  handleAddPlayer,
  newPlayerName,
  setNewPlayerName,
  selectedFaction,
  setSelectedFaction,
  FACTIONS,
}: PlayerListSectionProps) {
  return (
    <div id="player-list-section" className="bg-slate-900/90 border border-slate-800 rounded-3xl p-5 shadow-xl space-y-4">
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
                  ? 'border-amber-500 bg-amber-500/15 text-amber-300'
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
              id={`player-row-${player.id}`}
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
  );
}
