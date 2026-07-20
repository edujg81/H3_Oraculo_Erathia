import React from 'react';
import { Users, Trash, Plus, Minus, Skull, AlertCircle, Edit2, Check, X } from 'lucide-react';
import { Player, getPlayerLimit } from '../types';

interface PlayerListSectionProps {
  players: Player[];
  setPlayers: React.Dispatch<React.SetStateAction<Player[]>>;
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
  prepMode: 'enfrentamiento' | 'cooperativo' | 'campaña' | 'alianza' | 'torneo';
  hasGameStarted: boolean;
}

export function PlayerListSection({
  players,
  setPlayers,
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
  prepMode,
  hasGameStarted,
}: PlayerListSectionProps) {
  const limit = getPlayerLimit(prepMode);
  const isAtLimit = players.length >= limit;

  const [editingPlayerId, setEditingPlayerId] = React.useState<string | null>(null);
  const [editNameValue, setEditNameValue] = React.useState<string>('');
  const [editFactionValue, setEditFactionValue] = React.useState<string>('');

  React.useEffect(() => {
    if (hasGameStarted) {
      setEditingPlayerId(null);
    }
  }, [hasGameStarted]);

  const handleSavePlayer = (id: string) => {
    const trimmed = editNameValue.trim();
    const selectedFactionObj = FACTIONS.find(f => f.id === editFactionValue);
    if (trimmed && selectedFactionObj) {
      setPlayers(prev => prev.map(p => p.id === id ? { 
        ...p, 
        name: trimmed,
        factionId: selectedFactionObj.id,
        color: selectedFactionObj.color
      } : p));
    }
    setEditingPlayerId(null);
  };

  const handleUpdateMoral = (playerId: string, direction: 'increase' | 'decrease') => {
    setPlayers(prev => prev.map(p => {
      if (p.id !== playerId) return p;
      if (p.factionId === 'necropolis') return p; // Necrópolis ignora los efectos de Moral

      const currentMoral = p.moral || 'neutral';
      let nextMoral: 'positive' | 'neutral' | 'negative' | 'double_negative' = currentMoral;

      if (direction === 'increase') {
        if (currentMoral === 'double_negative') {
          nextMoral = 'negative';
        } else if (currentMoral === 'negative') {
          nextMoral = 'neutral';
        } else if (currentMoral === 'neutral') {
          nextMoral = 'positive';
        }
      } else {
        if (currentMoral === 'positive') {
          nextMoral = 'neutral';
        } else if (currentMoral === 'neutral') {
          nextMoral = 'negative';
        } else if (currentMoral === 'negative' || currentMoral === 'double_negative') {
          nextMoral = 'double_negative';
        }
      }

      return {
        ...p,
        moral: nextMoral
      };
    }));
  };

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

      {/* Notice Banner when Game has Started */}
      {hasGameStarted && (
        <div className="bg-amber-500/10 border border-amber-500/25 p-3 rounded-xl flex items-start gap-2.5 text-xs text-amber-300 animate-fadeIn">
          <AlertCircle className="w-4 h-4 shrink-0 text-amber-500 mt-0.5" />
          <div className="space-y-1">
            <p className="font-semibold">Partida Iniciada (Edición bloqueada)</p>
            <p className="text-[11px] text-slate-400 leading-normal">
              La partida está en curso. Para poder editar los participantes o sus facciones, debes pausar y hacer <strong>reset de la partida</strong> en el cronómetro de sesión superior.
            </p>
          </div>
        </div>
      )}

      {/* Quick Presets for Player Count */}
      {!hasGameStarted && (
        <div className="space-y-2 bg-slate-950/40 p-3 rounded-xl border border-slate-850">
          <div className="flex justify-between items-center">
            <label className="text-[10px] text-slate-400 font-mono block uppercase tracking-wider font-semibold">Configuración Rápida de Jugadores:</label>
            <span className="text-[9px] font-mono text-amber-500 uppercase font-bold">Máx: {limit}</span>
          </div>
          <div className="grid grid-cols-4 gap-1">
            {[1, 2, 3, 4].map(num => {
              const isDisabled = num > limit;
              return (
                <button
                  key={num}
                  type="button"
                  disabled={isDisabled}
                  onClick={() => !isDisabled && handleSetPlayerCount(num)}
                  className={`py-1 text-xs font-mono rounded-lg border text-center transition font-bold ${
                    isDisabled
                      ? 'bg-slate-950/20 border-slate-900/50 text-slate-700 cursor-not-allowed opacity-30'
                      : players.length === num
                        ? 'border-amber-500 bg-amber-500/15 text-amber-300 cursor-pointer'
                        : 'bg-slate-950 border-slate-850 text-slate-500 hover:text-slate-300 cursor-pointer'
                  }`}
                  title={isDisabled ? `Limitado por modo ${prepMode} (Máx: ${limit})` : `Configurar ${num} jugadores`}
                >
                  {num}
                </button>
              );
            })}
          </div>
        </div>
      )}

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
                <div className="min-w-0 flex-1">
                  {editingPlayerId === player.id ? (
                    <div className="space-y-1.5 p-1.5 bg-slate-950/60 rounded-xl border border-slate-800/40 max-w-[200px]" onClick={(e) => e.stopPropagation()}>
                      <div className="flex items-center gap-1">
                        <span className="text-[8px] font-mono text-slate-500 uppercase w-7 shrink-0">Nom:</span>
                        <input
                          type="text"
                          value={editNameValue}
                          onChange={(e) => setEditNameValue(e.target.value)}
                          onKeyDown={(e) => {
                            if (e.key === 'Enter') {
                              handleSavePlayer(player.id);
                            } else if (e.key === 'Escape') {
                              setEditingPlayerId(null);
                            }
                          }}
                          className="bg-slate-950 border border-slate-750 rounded px-1.5 py-0.5 text-[11px] text-slate-200 focus:outline-none focus:ring-1 focus:ring-amber-500 w-full font-medium"
                          autoFocus
                        />
                      </div>
                      <div className="flex items-center gap-1">
                        <span className="text-[8px] font-mono text-slate-500 uppercase w-7 shrink-0">Fac:</span>
                        <select
                          value={editFactionValue}
                          onChange={(e) => setEditFactionValue(e.target.value)}
                          className="bg-slate-950 border border-slate-750 rounded px-1 py-0.5 text-[11px] text-slate-200 focus:outline-none focus:ring-1 focus:ring-amber-500 w-full"
                        >
                          {FACTIONS.map(f => (
                            <option key={f.id} value={f.id} className="bg-slate-950 text-slate-200">
                              {f.name.split(' (')[0]}
                            </option>
                          ))}
                        </select>
                      </div>
                      <div className="flex justify-end gap-1 pt-0.5">
                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            handleSavePlayer(player.id);
                          }}
                          className="px-1.5 py-0.5 text-[9px] font-bold text-emerald-400 hover:text-emerald-300 hover:bg-slate-950 rounded cursor-pointer border border-emerald-500/10 flex items-center gap-0.5 transition shrink-0"
                          title="Guardar cambios"
                        >
                          <Check className="w-2.5 h-2.5" /> Guardar
                        </button>
                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            setEditingPlayerId(null);
                          }}
                          className="px-1.5 py-0.5 text-[9px] font-bold text-rose-400 hover:text-rose-300 hover:bg-slate-950 rounded cursor-pointer border border-rose-500/10 flex items-center gap-0.5 transition shrink-0"
                          title="Cancelar"
                        >
                          <X className="w-2.5 h-2.5" /> Cancelar
                        </button>
                      </div>
                    </div>
                  ) : (
                    <div className="flex items-center gap-1.5 group/name">
                      <p className="text-xs font-semibold text-slate-200 truncate max-w-[140px]">{player.name}</p>
                      {!hasGameStarted && (
                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            setEditingPlayerId(player.id);
                            setEditNameValue(player.name);
                            setEditFactionValue(player.factionId || '');
                          }}
                          className="p-0.5 text-slate-400 hover:text-amber-400 rounded hover:bg-slate-950 cursor-pointer transition shrink-0 opacity-40 group-hover/name:opacity-100"
                          title="Cambiar nombre/facción de jugador"
                        >
                          <Edit2 className="w-3 h-3" />
                        </button>
                      )}
                    </div>
                  )}
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
                      {player.hasSecHero ? (
                        <span className="text-emerald-500 font-bold" title="Movimiento Héroe Secundario">HS: {player.secHeroMove ?? 2}/2</span>
                      ) : (
                        <span className="text-slate-600 font-medium" title="Héroe Secundario no contratado">HS: No</span>
                      )}
                    </span>
                    <span className="text-[9px] font-mono text-slate-500 flex items-center gap-1">
                      <span>Tokens:</span>
                      <span title="Construir" className="cursor-help">{player.actionBuildUsed ? '🔴' : '🟢'}</span>
                      <span title="Reclutar" className="cursor-help">{player.actionRecruitUsed ? '🔴' : '🟢'}</span>
                      <span 
                        title={player.hasMageGuild ? "Libro de Hechizos" : "Cofradía de Magos no comprada (Bloqueado)"} 
                        className="cursor-help font-sans"
                      >
                        {player.hasMageGuild ? (player.actionMageGuildUsed ? '🔴' : '🟢') : '🔒'}
                      </span>
                    </span>
                  </div>
                  <div className="flex flex-wrap items-center gap-2 mt-1 select-none">
                    <span className="text-[9px] font-mono text-slate-400 flex items-center gap-1">
                      <span>Moral:</span>
                      {player.factionId === 'necropolis' ? (
                        <span className="text-[8px] font-sans font-bold bg-slate-950/80 border border-slate-800/50 text-slate-500 px-1.5 py-0.5 rounded flex items-center gap-0.5" title="La facción Necrópolis ignora los efectos de Moral por reglamento">
                          💀 Ignora Moral
                        </span>
                      ) : (
                        <span className={`text-[8px] font-sans font-bold px-1.5 py-0.5 rounded border flex items-center gap-0.5 ${
                          (player.moral || 'neutral') === 'positive' 
                            ? 'bg-emerald-950/40 border-emerald-500/30 text-emerald-400' 
                            : (player.moral || 'neutral') === 'negative'
                              ? 'bg-rose-950/40 border-rose-500/30 text-rose-400'
                              : (player.moral || 'neutral') === 'double_negative'
                                ? 'bg-red-950/60 border-red-500/50 text-red-400 animate-pulse'
                                : 'bg-slate-950 border-slate-850 text-slate-500'
                        }`}>
                          {(player.moral || 'neutral') === 'positive' && '🟢 Positiva (+1)'}
                          {(player.moral || 'neutral') === 'neutral' && '⚪ Neutra (0)'}
                          {(player.moral || 'neutral') === 'negative' && '🔴 Negativa (-1)'}
                          {(player.moral || 'neutral') === 'double_negative' && '💀 Doble Negativa (-2)'}
                        </span>
                      )}
                    </span>
                    {player.factionId !== 'necropolis' && (
                      <div className="flex items-center gap-1" onClick={(e) => e.stopPropagation()}>
                        <button
                          type="button"
                          onClick={() => handleUpdateMoral(player.id, 'decrease')}
                          className="w-4 h-4 rounded bg-slate-950 hover:bg-slate-900 text-slate-400 hover:text-rose-400 border border-slate-800 flex items-center justify-center transition cursor-pointer"
                          title="Perder Moral (-)"
                        >
                          <Minus className="w-2.5 h-2.5" />
                        </button>
                        <button
                          type="button"
                          onClick={() => handleUpdateMoral(player.id, 'increase')}
                          className="w-4 h-4 rounded bg-slate-950 hover:bg-slate-900 text-slate-400 hover:text-emerald-400 border border-slate-800 flex items-center justify-center transition cursor-pointer"
                          title="Ganar Moral (+)"
                        >
                          <Plus className="w-2.5 h-2.5" />
                        </button>
                      </div>
                    )}
                  </div>
                  {isActive && (
                    <span className="text-[9px] text-amber-400 font-mono flex items-center gap-1 mt-1 font-bold">
                      <span className="w-1.5 h-1.5 bg-amber-400 rounded-full animate-ping" />
                      Turno Activo
                    </span>
                  )}
                </div>
              </div>

              {!hasGameStarted && (
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
              )}
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
            placeholder={hasGameStarted ? "Partida iniciada..." : isAtLimit ? "Límite alcanzado..." : "Nombre de jugador..."}
            value={newPlayerName}
            disabled={isAtLimit || hasGameStarted}
            onChange={(e) => setNewPlayerName(e.target.value)}
            className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-1.5 text-xs text-slate-200 placeholder-slate-600 focus:outline-none focus:ring-1 focus:ring-amber-500 focus:border-amber-500 disabled:opacity-50 disabled:cursor-not-allowed"
          />
          <select
            value={selectedFaction}
            disabled={isAtLimit || hasGameStarted}
            onChange={(e) => setSelectedFaction(e.target.value)}
            className="w-full bg-slate-950 border border-slate-800 rounded-xl px-2.5 py-1.5 text-xs text-slate-300 focus:outline-none focus:ring-1 focus:ring-amber-500 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {FACTIONS.map(f => (
              <option key={f.id} value={f.id} className="bg-slate-950 text-slate-200">
                {f.name}
              </option>
            ))}
          </select>
          {isAtLimit && !hasGameStarted && (
            <div className="bg-amber-500/5 border border-amber-500/10 p-2.5 rounded-xl flex items-start gap-2 text-[11px] text-amber-400 animate-fadeIn">
              <AlertCircle className="w-3.5 h-3.5 shrink-0 text-amber-500 mt-0.5" />
              <span>
                El modo <strong>{prepMode === 'enfrentamiento' ? 'Enfrentamiento' : prepMode === 'campaña' ? 'Campaña' : prepMode === 'cooperativo' ? 'Cooperativo' : prepMode === 'alianza' ? 'Alianza' : 'Torneo'}</strong> permite un máximo de {limit} {limit === 1 ? 'jugador' : 'jugadores'}.
              </span>
            </div>
          )}
          <button
            type="submit"
            disabled={isAtLimit || hasGameStarted}
            className={`w-full py-2 rounded-xl text-xs font-bold transition flex items-center justify-center gap-1.5 shadow-md ${
              (isAtLimit || hasGameStarted)
                ? 'bg-slate-800 border border-slate-850 text-slate-500 cursor-not-allowed opacity-50'
                : 'bg-amber-600 hover:bg-amber-700 text-white cursor-pointer hover:shadow-amber-950/20'
            }`}
          >
            {hasGameStarted ? (
              <>Partida en Curso</>
            ) : isAtLimit ? (
              <>Límite Alcanzado ({limit} Máx)</>
            ) : (
              <><Plus className="w-4 h-4" /> Añadir Jugador</>
            )}
          </button>
        </div>
      </form>
    </div>
  );
}
