import React, { useState } from 'react';
import { 
  HelpCircle, Swords, Users, ShieldAlert, Sparkles, Trophy, Coins, Scroll, AlertCircle, ArrowRight, RefreshCw, Layers, Shield
} from 'lucide-react';

interface GamePrepModeProps {
  prepMode: 'enfrentamiento' | 'cooperativo' | 'campaña' | 'alianza' | 'torneo' | 'campodebatalla';
  setPrepMode: React.Dispatch<React.SetStateAction<'enfrentamiento' | 'cooperativo' | 'campaña' | 'alianza' | 'torneo' | 'campodebatalla'>>;
  isSidebar?: boolean;
}

export function GamePrepMode({ prepMode, setPrepMode, isSidebar = false }: GamePrepModeProps) {
  const [showEliminationRules, setShowEliminationRules] = useState(false);
  const [tournamentSubTab, setTournamentSubTab] = useState<'resumen' | 'mapa' | 'puntuacion' | 'reglas'>('resumen');
  const [battlefieldVariant, setBattlefieldVariant] = useState<'aventura' | 'escaramuza'>('aventura');

  const activeModeStyle = isSidebar 
    ? 'border-amber-600 bg-amber-500/10 text-amber-400 font-bold' 
    : 'border-amber-500 bg-amber-500/15 text-amber-400 font-bold shadow-sm shadow-amber-500/10 scale-102';

  const inactiveModeStyle = 'border-slate-800 text-slate-500 hover:text-slate-300 hover:bg-slate-800/30';

  return (
    <div 
      id="game-prep-mode-card" 
      className={`bg-slate-900/95 border border-slate-800 rounded-3xl shadow-2xl relative overflow-hidden transition-all duration-300 ${
        isSidebar ? 'p-5 space-y-4' : 'p-6 space-y-5'
      }`}
    >
      {/* Decorative background glow */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/5 rounded-full blur-2xl pointer-events-none" />
      
      {/* Header section */}
      <div className="flex items-center justify-between border-b border-slate-800/80 pb-3">
        <h3 className="text-sm font-bold text-amber-500 uppercase tracking-widest flex items-center font-serif">
          <HelpCircle className="w-4.5 h-4.5 mr-2 text-amber-500 shrink-0" />
          Preparación según Modo de Juego
        </h3>
        {!isSidebar && (
          <span className="text-[10px] font-mono text-slate-500 bg-slate-950 px-2 py-0.5 rounded-md border border-slate-800/50">
            Reglas Oficiales V2
          </span>
        )}
      </div>

      {/* Mini Mode Selector Pills */}
      <div className="flex flex-wrap gap-2 border-b border-slate-800/40 pb-3">
        {[
          { id: 'enfrentamiento', label: 'Enfrentamiento', icon: Swords },
          { id: 'torneo', label: 'Torneo', icon: Trophy },
          { id: 'cooperativo', label: 'Cooperativo', icon: Users },
          { id: 'campaña', label: 'Campaña', icon: Sparkles },
          { id: 'alianza', label: 'Alianza', icon: Layers },
          { id: 'campodebatalla', label: 'Campo de Batalla', icon: Shield }
        ].map(mode => {
          const Icon = mode.icon;
          return (
            <button
              key={mode.id}
              type="button"
              onClick={() => setPrepMode(mode.id as any)}
              className={`text-[10px] font-mono px-3 py-2 rounded-xl border cursor-pointer uppercase transition-all duration-250 flex items-center gap-1.5 ${
                prepMode === mode.id ? activeModeStyle : inactiveModeStyle
              }`}
            >
              <Icon className="w-3.5 h-3.5" />
              {mode.label}
            </button>
          );
        })}
      </div>

      {/* Dynamic instruction based on selector */}
      <div className="space-y-4">
        {prepMode === 'enfrentamiento' && (
          <div className="space-y-3">
            <div className="bg-slate-950/60 p-3 rounded-xl border border-slate-800/80 flex justify-between items-center">
              <div className="flex items-center gap-2">
                <Swords className="w-4 h-4 text-amber-500" />
                <span className="font-semibold text-slate-300 text-xs">Modo Enfrentamiento Estándar (2-3 Jugadores)</span>
              </div>
              <span className="text-amber-500 font-mono text-[10px] bg-amber-950/40 px-2 py-0.5 rounded border border-amber-900/30 uppercase">Competitivo</span>
            </div>
            
            <ul className="text-slate-400 space-y-2 list-none pl-1">
              <li className="flex items-start gap-2.5 text-xs">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-1.5 shrink-0" />
                <span><strong>Recursos iniciales por jugador:</strong> 15 de Oro, 3 de Madera, 1 de Gemas (Valiosos).</span>
              </li>
              <li className="flex items-start gap-2.5 text-xs">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-1.5 shrink-0" />
                <span><strong>Mazo de inicio:</strong> 9 cartas personalizadas compuestas por tus cartas de Característica básicas y el nivel 1 de tu Carta de Especialidad.</span>
              </li>
              <li className="flex items-start gap-2.5 text-xs">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-1.5 shrink-0" />
                <span><strong>Subir de Nivel:</strong> Cada vez que obtengas 2 puntos de Experiencia (Exp), aumentas tu nivel de Héroe para incorporar cartas de Poder/Magia de tu mazo a tu mano.</span>
              </li>
              <li className="flex items-start gap-2.5 text-xs">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-1.5 shrink-0" />
                <span><strong>Victoria Absoluta:</strong> El primer jugador que derrote con éxito al héroe principal enemigo o capture su ciudad de origen para reclamar Erathia es coronado ganador de inmediato.</span>
              </li>
            </ul>
          </div>
        )}

        {prepMode === 'torneo' && (
          <div className="space-y-4 animate-fadeIn">
            {/* Header */}
            <div className="bg-slate-950/60 p-3 rounded-xl border border-slate-800/80 flex justify-between items-center">
              <div className="flex items-center gap-2">
                <Trophy className="w-4 h-4 text-amber-500" />
                <span className="font-semibold text-slate-300 text-xs">Modo Torneo 1v1 Balanceado (Reglamento Oficial 35b)</span>
              </div>
              <span className="text-amber-500 font-mono text-[10px] bg-amber-950/40 px-2 py-0.5 rounded border border-amber-900/30 uppercase">E-Sports</span>
            </div>

            {/* Tournament Sub-tabs */}
            <div className="flex bg-slate-950 p-1 rounded-xl border border-slate-850">
              {[
                { id: 'resumen', label: 'Resumen' },
                { id: 'mapa', label: '1. Mapa' },
                { id: 'puntuacion', label: '2. Puntos' },
                { id: 'reglas', label: '3. Reglas Pro' }
              ].map(tab => (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setTournamentSubTab(tab.id as any)}
                  className={`flex-1 py-1.5 text-[10px] font-bold uppercase rounded-lg transition-all cursor-pointer text-center ${
                    tournamentSubTab === tab.id
                      ? 'bg-amber-600/20 text-amber-400 font-bold border border-amber-900/30'
                      : 'text-slate-500 hover:text-slate-300'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* SUBTAB CONTENT: RESUMEN */}
            {tournamentSubTab === 'resumen' && (
              <ul className="text-slate-400 space-y-2.5 list-none pl-1">
                <li className="flex items-start gap-2.5 text-xs">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-1.5 shrink-0" />
                  <span><strong>Fórmula Simétrica:</strong> Diseñado estrictamente para 2 jugadores con un límite de <strong>9 rondas completas</strong> de juego.</span>
                </li>
                <li className="flex items-start gap-2.5 text-xs">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-1.5 shrink-0" />
                  <span><strong>Cronómetro Táctico:</strong> Pool de 3 minutos por turno. El exceso de tiempo consumido penaliza restando de forma inmediata 1 Ficha de Movimiento en la siguiente fase de aventura.</span>
                </li>
                <li className="flex items-start gap-2.5 text-xs">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-1.5 shrink-0" />
                  <span><strong>Draft de Elección y Veto (Pick & Ban):</strong> Los jugadores eligen y prohíben facciones, héroes y cartas antes de preparar el atlas de manera balanceada.</span>
                </li>
                <li className="flex items-start gap-2.5 text-xs">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-1.5 shrink-0" />
                  <span><strong>Mazo de División (Split Decks):</strong> Los artefactos se dividen en 3 mazos físicos (Menores, Mayores y Reliquias), y los Hechizos en 2 mazos (Básicos y Expertos) para escalabilidad justa según la posición en el mapa.</span>
                </li>
                <li className="flex items-start gap-2.5 text-xs">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-1.5 shrink-0" />
                  <span><strong>Condición de Victoria:</strong> Derrotar al héroe principal enemigo, capturar su Metrópolis, o acumular mayor cantidad de puntos de victoria oficiales tras expirar las 9 rondas.</span>
                </li>
              </ul>
            )}

            {/* SUBTAB CONTENT: MAPA */}
            {tournamentSubTab === 'mapa' && (
              <div className="space-y-2 text-xs">
                <span className="text-[10px] text-slate-500 font-mono block tracking-wider uppercase font-bold">Construcción oficial del mapa de escenario (1v1)</span>
                <div className="bg-slate-950/40 p-3 rounded-xl border border-slate-850/60 space-y-2 text-slate-350">
                  <p><strong>1. Orden de Turno:</strong> Ambos lanzan 2 dados de recursos. El ganador elige quién empieza. El segundo jugador obtiene una ficha de moral al comenzar.</p>
                  <p><strong>2. Loselas Centrales:</strong> Se colocan las losetas centrales/especiales indicadas por la ilustración del escenario de torneo.</p>
                  <p><strong>3. Rotación Inicial:</strong> El jugador inicial descubre las losetas centrales y las rota como prefiera.</p>
                  <p><strong>4. Loselas Cercanas (IV-V):</strong> Empezando por el SEGUNDO jugador, se turnan para añadir sus losetas cercanas: junto a una loseta central, y al menos 2 deben incluir un obelisco.</p>
                  <p><strong>5. Losela Inicial (I):</strong> El jugador inicial coloca su loseta inicial (I) adyacente a una cercana. El otro jugador la coloca en el lado opuesto (la posición más alejada).</p>
                  <p><strong>6. Loselas Lejanas (II-III):</strong> Por turnos (empezando el jugador inicial), colocan sus losetas lejanas. La primera de cada uno debe ser adyacente a su loseta inicial.</p>
                  <p className="text-[10px] text-amber-500/70 italic mt-1 font-mono">Nota: Todas las losetas se rotan libremente y se colocan boca arriba.</p>
                </div>
              </div>
            )}

            {/* SUBTAB CONTENT: PUNTUACION */}
            {tournamentSubTab === 'puntuacion' && (
              <div className="space-y-2 text-xs">
                <span className="text-[10px] text-slate-500 font-mono block tracking-wider uppercase font-bold">Distribución Oficial de Puntos de Victoria (PV)</span>
                <div className="grid grid-cols-2 gap-2 text-slate-350">
                  <div className="p-2.5 bg-slate-950/50 rounded-xl border border-slate-850/60">
                    <span className="text-amber-400 font-bold block text-sm">4 PV</span>
                    <p className="text-[11px] leading-tight text-slate-400 mt-1">Por derrotar al héroe PRINCIPAL del enemigo (una vez, no acumulable).</p>
                  </div>
                  <div className="p-2.5 bg-slate-950/50 rounded-xl border border-slate-850/60">
                    <span className="text-amber-400 font-bold block text-sm">2 PV</span>
                    <p className="text-[11px] leading-tight text-slate-400 mt-1">Por derrotar al héroe SECUNDARIO del enemigo.</p>
                  </div>
                  <div className="p-2.5 bg-slate-950/50 rounded-xl border border-slate-850/60">
                    <span className="text-amber-400 font-bold block text-sm">1 PV c/u</span>
                    <p className="text-[11px] leading-tight text-slate-400 mt-1">Por cada mina o asentamiento bajo tu control final.</p>
                  </div>
                  <div className="p-2.5 bg-slate-950/50 rounded-xl border border-slate-850/60">
                    <span className="text-amber-400 font-bold block text-sm">1 PV c/u</span>
                    <p className="text-[11px] leading-tight text-slate-400 mt-1">Por cada edificio construido en tu ciudad (sin distinción).</p>
                  </div>
                  <div className="p-2.5 bg-slate-950/50 rounded-xl border border-slate-850/60">
                    <span className="text-amber-400 font-bold block text-sm">1 PV por 2</span>
                    <p className="text-[11px] leading-tight text-slate-400 mt-1">Por cada 2 artefactos en tu mazo (incluye los retirados, red. abajo).</p>
                  </div>
                  <div className="p-2.5 bg-slate-950/50 rounded-xl border border-slate-850/60">
                    <span className="text-amber-400 font-bold block text-sm">1 PV x Nivel</span>
                    <p className="text-[11px] leading-tight text-slate-400 mt-1">Por cada nivel de experiencia alcanzado por tu héroe principal.</p>
                  </div>
                </div>
                <div className="bg-amber-950/15 border border-amber-900/20 p-2 rounded-lg text-[10px] text-amber-300 leading-tight">
                  ⭐ Gana el jugador con más Puntos de Victoria totales. El reglamento de torneo no define criterios de desempate secundarios adicionales.
                </div>
              </div>
            )}

            {/* SUBTAB CONTENT: REGLAS PRO */}
            {tournamentSubTab === 'reglas' && (
              <div className="space-y-2 text-[11px] text-slate-350 max-h-[220px] overflow-y-auto pr-1">
                <span className="text-[10px] text-slate-500 font-mono block tracking-wider uppercase font-bold">Reglas de Equilibrio de Competición</span>
                <div className="space-y-2 pl-1">
                  <p>🚫 <strong>Habilidad Prohibida:</strong> Se retira la habilidad de <em>Diplomacia</em> de la partida (no se puede reclutar tropas neutrales azur con ella).</p>
                  <p>🚫 <strong>Artefacto Prohibido:</strong> Se retira el artefacto <em>Reloj de la Hora Aciaga</em>.</p>
                  <p>🔄 <strong>Mulligan Único:</strong> Al inicio de la ronda 1, puedes barajar tu mano inicial y robar 10 cartas nuevas.</p>
                  <p>🔮 <strong>Uso de Moral en Búsquedas:</strong> Puedes descartar todo lo robado en un <em>Buscar (X)</em> y volver a buscar. Aplica a artefactos, hechizos, habilidades y mazo.</p>
                  <p>🎒 <strong>Puntos por Descartes:</strong> Cualquier carta de artefacto retirada del juego se coloca a un lado y SÍ cuenta para los PV finales.</p>
                  <p>🔭 <strong>Observatorio de Caoba:</strong> Nuevo lugar visitable exclusivo que permite rotar una loseta adyacente libre de héroes.</p>
                  <p>📦 <strong>Mazos de Tipo (Opcional):</strong> Se separan Artefactos (3 mazos: Menor, Mayor, Reliquia) y Hechizos (2 mazos: Básico, Avanzado) para darlos según la distancia al centro.</p>
                </div>
              </div>
            )}
          </div>
        )}

        {prepMode === 'cooperativo' && (
          <div className="space-y-3">
            <div className="bg-slate-950/60 p-3 rounded-xl border border-slate-800/80 flex justify-between items-center">
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4 text-sky-400" />
                <span className="font-semibold text-slate-300 text-xs">Modo Cooperativo (Misiones Aliadas)</span>
              </div>
              <span className="text-sky-400 font-mono text-[10px] bg-sky-950/40 px-2 py-0.5 rounded border border-sky-900/30 uppercase">Colaborativo</span>
            </div>
            
            <ul className="text-slate-400 space-y-2 list-none pl-1">
              <li className="flex items-start gap-2.5 text-xs">
                <span className="w-1.5 h-1.5 rounded-full bg-sky-400 mt-1.5 shrink-0" />
                <span><strong>Unidad de Alianza:</strong> Todos los jugadores son aliados natos. Jamás se pueden atacar entre sí ni bloquear de forma deliberada el paso de sus compañeros.</span>
              </li>
              <li className="flex items-start gap-2.5 text-xs">
                <span className="w-1.5 h-1.5 rounded-full bg-sky-400 mt-1.5 shrink-0" />
                <span><strong>Combates con Neutrales:</strong> Cuando se entablen batallas contra unidades neutrales del mapa que custodian enclaves, se resuelven utilizando las reglas oficiales de Combate de la IA en Solitario.</span>
              </li>
              <li className="flex items-start gap-2.5 text-xs">
                <span className="w-1.5 h-1.5 rounded-full bg-sky-400 mt-1.5 shrink-0" />
                <span><strong>Regla del Mercadillo (Trading Post):</strong> Al visitar un mercadillo, puedes usar la acción mercantil para transferir directamente cualquier cantidad de recursos de tu reserva personal a cualquier aliado sin restricción de distancia ni costes.</span>
              </li>
              <li className="flex items-start gap-2.5 text-xs">
                <span className="w-1.5 h-1.5 rounded-full bg-sky-400 mt-1.5 shrink-0" />
                <span><strong>Condición de Victoria Compartida:</strong> El escenario define las condiciones de victoria del equipo (vencer custodios, tomar templos, etc.). Si algún aliado la cumple, todos ganan de inmediato.</span>
              </li>
            </ul>
          </div>
        )}

        {prepMode === 'campaña' && (
          <div className="space-y-3">
            <div className="bg-slate-950/60 p-3 rounded-xl border border-slate-800/80 flex justify-between items-center">
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-purple-400" />
                <span className="font-semibold text-slate-300 text-xs">Campaña Individual (Modo Solitario)</span>
              </div>
              <span className="text-purple-400 font-mono text-[10px] bg-purple-950/40 px-2 py-0.5 rounded border border-purple-900/30 uppercase">Vs Mazo IA</span>
            </div>
            
            <ul className="text-slate-400 space-y-2 list-none pl-1">
              <li className="flex items-start gap-2.5 text-xs">
                <span className="w-1.5 h-1.5 rounded-full bg-purple-400 mt-1.5 shrink-0" />
                <span><strong>Mazo de Control de la IA:</strong> El enemigo opera de forma automatizada mediante un mazo de comportamiento táctico de la IA que dicta su movimiento y ataques al final de tu turno.</span>
              </li>
              <li className="flex items-start gap-2.5 text-xs">
                <span className="w-1.5 h-1.5 rounded-full bg-purple-400 mt-1.5 shrink-0" />
                <span><span><strong>Sin Rendición ni Sobornos:</strong> En batallas contra la IA no se permite el uso de la regla de rendición voluntaria ni el pago de sobornos de oro para escapar del mapa de combate.</span></span>
              </li>
              <li className="flex items-start gap-2.5 text-xs">
                <span className="w-1.5 h-1.5 rounded-full bg-purple-400 mt-1.5 shrink-0" />
                <span><strong>Transición de Escenarios de Campaña:</strong> Al completar un escenario, el nivel de tu héroe se restablece a 1. Tu nuevo mazo inicial estará compuesto por: cartas de Característica, nivel 1 de tu Especialidad, y <strong>5 cartas no especiales elegidas</strong> de tu mazo final anterior.</span>
              </li>
              <li className="flex items-start gap-2.5 text-xs">
                <span className="w-1.5 h-1.5 rounded-full bg-purple-400 mt-1.5 shrink-0" />
                <span><strong>Preparación Acelerada:</strong> Sáltate todos los pasos normales de Configuración del Mazo al iniciar la siguiente misión de tu campaña.</span>
              </li>
            </ul>
          </div>
        )}

        {prepMode === 'alianza' && (
          <div className="space-y-3">
            <div className="bg-slate-950/60 p-3 rounded-xl border border-slate-800/80 flex justify-between items-center">
              <div className="flex items-center gap-2">
                <Layers className="w-4 h-4 text-emerald-400" />
                <span className="font-semibold text-slate-300 text-xs">Modo Alianza por Equipos (2 vs 2)</span>
              </div>
              <span className="text-emerald-400 font-mono text-[10px] bg-emerald-950/40 px-2 py-0.5 rounded border border-emerald-900/30 uppercase">Equipos Unidos</span>
            </div>
            
            <ul className="text-slate-400 space-y-2 list-none pl-1">
              <li className="flex items-start gap-2.5 text-xs">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-1.5 shrink-0" />
                <span><strong>Unión de Alianza:</strong> Dos equipos de 2 se determinan al principio y se asocian de forma fija durante toda la partida. Comparten plenamente condiciones de victoria y derrota.</span>
              </li>
              <li className="flex items-start gap-2.5 text-xs">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-1.5 shrink-0" />
                <span><strong>Intercambio Libre de Recursos:</strong> Los aliados de equipo pueden intercambiar recursos libremente durante el turno de cualquiera de ellos sin restricciones de distancia ni adyacencia.</span>
              </li>
              <li className="flex items-start gap-2.5 text-xs">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-1.5 shrink-0" />
                <span><strong>Intercambio de Artefactos de Mochila:</strong> Tus héroes pueden intercambiar libremente cartas de artefacto solo si ambos finalizan su turno en **zonas físicamente adyacentes** del mapa de aventura.</span>
              </li>
              <li className="flex items-start gap-2.5 text-xs">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-1.5 shrink-0" />
                <span><strong>Bloqueo de Señalización (Flaggear):</strong> Queda estrictamente prohibido que un jugador coloque un cubo de facción en una mina, enclave o estructura que ya posea el cubo de su aliado.</span>
              </li>
            </ul>
          </div>
        )}

        {prepMode === 'campodebatalla' && (
          <div className="space-y-4 animate-fadeIn">
            {/* Header */}
            <div className="bg-slate-950/60 p-3 rounded-xl border border-slate-800/80 flex justify-between items-center">
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-amber-500 animate-pulse" />
                <span className="font-semibold text-slate-300 text-xs font-serif">Expansión: Campo de Batalla (1v1)</span>
              </div>
              <span className="text-amber-500 font-mono text-[10px] bg-amber-950/40 px-2 py-0.5 rounded border border-amber-900/30 uppercase">Táctico</span>
            </div>

            {/* Battlefield Sub-tabs */}
            <div className="flex bg-slate-950 p-1 rounded-xl border border-slate-850">
              {[
                { id: 'aventura', label: 'Modo Aventura' },
                { id: 'escaramuza', label: 'Modo Escaramuza' }
              ].map(tab => (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setBattlefieldVariant(tab.id as any)}
                  className={`flex-1 py-1.5 text-[10px] font-bold uppercase rounded-lg transition-all cursor-pointer text-center ${
                    battlefieldVariant === tab.id
                      ? 'bg-amber-600/20 text-amber-400 font-bold border border-amber-900/30'
                      : 'text-slate-500 hover:text-slate-300'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {battlefieldVariant === 'aventura' ? (
              <div className="space-y-3">
                <p className="text-xs text-slate-400 italic">
                  Combina la exploración tradicional del mapa de Erathia con combates tácticos expandidos utilizando losetas de obstáculos tridimensionales y terrenos especiales.
                </p>
                <ul className="text-slate-400 space-y-2 list-none pl-1">
                  <li className="flex items-start gap-2.5 text-xs">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-1.5 shrink-0" />
                    <span><strong>Tablero de Combate Expandido:</strong> Se usa el tablero grande de combate de la expansión "Battlefield", colocando obstáculos y elementos tácticos al inicio de cada encuentro.</span>
                  </li>
                  <li className="flex items-start gap-2.5 text-xs">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-1.5 shrink-0" />
                    <span><strong>Modificadores de Terreno:</strong> Los elementos de terreno (charcos, muros, colinas, árboles) otorgan bonificaciones de cobertura a distancia o penalizaciones de movimiento a las tropas.</span>
                  </li>
                  <li className="flex items-start gap-2.5 text-xs">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-1.5 shrink-0" />
                    <span><strong>Reclutamiento de Campaña:</strong> Las tropas muertas en el campo de batalla regresan al cementerio o taberna según las reglas normales de aventura (compras en Metrópolis).</span>
                  </li>
                  <li className="flex items-start gap-2.5 text-xs">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-1.5 shrink-0" />
                    <span><strong>Condición de Victoria:</strong> Completar la misión del escenario de aventura o erradicar por completo la facción enemiga del mapa táctico.</span>
                  </li>
                </ul>
              </div>
            ) : (
              <div className="space-y-3">
                <p className="text-xs text-slate-400 italic">
                  Ideal para partidas rápidas sin fase de mapa de aventura. Los jugadores diseñan ejércitos personalizados con un presupuesto fijo de puntos de oro y se enfrentan directamente en el tablero de combate.
                </p>
                <ul className="text-slate-400 space-y-2 list-none pl-1">
                  <li className="flex items-start gap-2.5 text-xs">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-1.5 shrink-0" />
                    <span><strong>Presupuesto de Reclutamiento:</strong> Cada jugador dispone de <strong>30 de Oro</strong> (u otra cantidad acordada) para comprar héroes, cartas de hechizo, habilidades y tropas iniciales directamente de su facción.</span>
                  </li>
                  <li className="flex items-start gap-2.5 text-xs">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-1.5 shrink-0" />
                    <span><strong>Despliegue Táctico:</strong> Colocación alterna de tropas en las 2 filas traseras de sus respectivas zonas de inicio.</span>
                  </li>
                  <li className="flex items-start gap-2.5 text-xs">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-1.5 shrink-0" />
                    <span><strong>Combate Inmediato:</strong> Sin fase de recursos ni fase astrológica. La partida consiste exclusivamente en el combate táctico de eliminación.</span>
                  </li>
                  <li className="flex items-start gap-2.5 text-xs">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-1.5 shrink-0" />
                    <span><strong>Condición de Victoria:</strong> Eliminar todas las unidades del oponente en el tablero de combate o forzar su rendición incondicional.</span>
                  </li>
                </ul>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Accordion / Collapsible section for "Fin de Escenario & Reglas de Eliminación" */}
      <div className="border-t border-slate-800/60 pt-4">
        <button
          type="button"
          onClick={() => setShowEliminationRules(!showEliminationRules)}
          className="w-full flex items-center justify-between text-xs font-mono font-bold text-slate-300 hover:text-amber-400 cursor-pointer transition-all duration-200"
        >
          <span className="flex items-center gap-2">
            <ShieldAlert className="w-4 h-4 text-red-500 animate-pulse" />
            Fin de Escenario y Reglas de Eliminación
          </span>
          <span className="text-[10px] px-2 py-0.5 rounded bg-slate-950 border border-slate-800 text-slate-500 font-bold uppercase tracking-wider">
            {showEliminationRules ? 'Ocultar' : 'Mostrar'}
          </span>
        </button>

        {showEliminationRules && (
          <div className="mt-3.5 bg-red-950/10 border border-red-900/30 rounded-2xl p-4 space-y-3 animate-fadeIn">
            <div>
              <span className="text-[10px] font-mono font-bold text-red-400 uppercase tracking-wider block mb-1">¿Cómo ser Eliminado del Escenario?</span>
              <ul className="text-[11px] text-slate-400 space-y-1.5 list-disc pl-4">
                <li><strong>Sin Ciudad ni Asentamiento:</strong> Pasar 3 rondas consecutivas completas sin tener bajo tu control ninguna ciudad o asentamiento.</li>
                <li><strong>Derrota sin Base:</strong> Perder un combate con tu Héroe Principal cuando no poseas ninguna ciudad o asentamiento en el mapa de juego.</li>
              </ul>
            </div>

            <div className="border-t border-slate-800/40 pt-2.5">
              <span className="text-[10px] font-mono font-bold text-red-400 uppercase tracking-wider block mb-1">Consecuencias de la Eliminación</span>
              <ul className="text-[11px] text-slate-400 space-y-1.5 list-disc pl-4">
                <li>Se retiran tus Cubos de Facción y figura de Héroe de forma definitiva.</li>
                <li>Las cartas de tu mazo quedan **Retiradas del juego** para el resto de la partida.</li>
                <li><strong>Control de Neutrales:</strong> ¡No quedas inactivo! El jugador eliminado asume el control activo de las unidades neutrales de la IA en los combates de los supervivientes.</li>
              </ul>
            </div>

            <div className="border-t border-slate-800/40 pt-2.5">
              <span className="text-[10px] font-mono font-bold text-amber-500 uppercase tracking-wider block mb-1">Victoria por Eliminación</span>
              <p className="text-[11px] text-slate-400 leading-relaxed">
                Derrotar y eliminar a todas las facciones contrarias te otorga la victoria. En escenarios de 3 o más jugadores, reclamar un **Cubo de Facción** de cada oponente tras su derrota te declara ganador de inmediato.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
