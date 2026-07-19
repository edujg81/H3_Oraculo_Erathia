import React, { useState } from 'react';
import { 
  ClipboardList, RotateCcw, Coins, Compass, Home, Heart, Sparkles, HelpCircle, AlertCircle
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

type TabId = 'rondas' | 'turno' | 'movimiento' | 'ciudad' | 'moral';

export function TurnPhasesGuide() {
  const [activeTab, setActiveTab] = useState<TabId>('rondas');

  const tabs = [
    { id: 'rondas' as TabId, label: 'Inicio de Ronda', icon: RotateCcw },
    { id: 'turno' as TabId, label: 'Tu Turno (Mano)', icon: ClipboardList },
    { id: 'movimiento' as TabId, label: 'Movimiento (PM)', icon: Compass },
    { id: 'ciudad' as TabId, label: 'Acciones de Ciudad', icon: Home },
    { id: 'moral' as TabId, label: 'Moral & Necrópolis', icon: Heart },
  ];

  return (
    <div id="turn-phases-card" className="bg-slate-950/80 border border-slate-800 rounded-3xl p-5 space-y-4 shadow-xl">
      <div className="flex justify-between items-center border-b border-slate-800/80 pb-2">
        <h3 className="text-sm font-bold text-amber-500 uppercase tracking-widest flex items-center font-serif">
          <ClipboardList className="w-4 h-4 mr-2 text-amber-500" />
          Oráculo de Fases y Acciones
        </h3>
        <span className="text-[10px] text-amber-500/80 font-mono uppercase tracking-wider bg-amber-500/10 px-2 py-0.5 rounded-full">Manual de Erathia</span>
      </div>

      {/* Tabs list */}
      <div className="flex flex-wrap gap-1 bg-slate-900/60 p-1 rounded-xl border border-slate-850">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-1.5 px-3 py-1.5 text-[11px] font-medium rounded-lg transition cursor-pointer shrink-0 ${
                isActive
                  ? 'bg-amber-500/15 border border-amber-500/30 text-amber-300'
                  : 'text-slate-400 hover:text-slate-200 border border-transparent hover:bg-slate-800/50'
              }`}
            >
              <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-amber-400' : 'text-slate-400'}`} />
              {tab.label}
            </button>
          );
        })}
      </div>

      {/* Content wrapper with motion */}
      <div className="min-h-[220px] bg-slate-950/40 p-4 rounded-2xl border border-slate-900 flex flex-col justify-between">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
            transition={{ duration: 0.15 }}
            className="space-y-3.5 text-xs text-slate-300 leading-relaxed"
          >
            {activeTab === 'rondas' && (
              <div className="space-y-3">
                <div className="space-y-1">
                  <span className="text-xs font-semibold text-amber-400 flex items-center gap-1.5 uppercase font-mono tracking-wide">
                    <RotateCcw className="w-3.5 h-3.5 text-amber-400" /> Pasos al Inicio de Ronda (Excepto R1):
                  </span>
                  <ul className="list-disc pl-4 space-y-1 text-[11px] text-slate-400">
                    <li><strong className="text-slate-300">Renovar Fichas:</strong> Voltea las fichas de <span className="text-amber-500">Construcción</span>, <span className="text-amber-500">Población</span> y <span className="text-amber-500">Libro de Hechizos</span> a su lado activo.</li>
                    <li><strong className="text-slate-300">Reiniciar PM:</strong> Devuelve las fichas de Puntos de Movimiento (PM) a su lado verde activo.</li>
                    <li><strong className="text-slate-300">Recuperar Coronas:</strong> Restablece los usos de tus Efectos Experto de habilidades.</li>
                  </ul>
                </div>

                <div className="space-y-1 border-t border-slate-900 pt-2">
                  <span className="text-xs font-semibold text-amber-400 flex items-center gap-1.5 uppercase font-mono tracking-wide">
                    <Coins className="w-3.5 h-3.5 text-amber-400" /> Dependiendo del Número de Ronda:
                  </span>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-[11px] text-slate-400 mt-1">
                    <div className="bg-slate-900/50 p-2 rounded-xl border border-slate-850/40">
                      <p className="font-bold text-amber-300/90 font-serif">Rondas Impares (Recursos)</p>
                      <p className="text-[10px] text-slate-400 mt-0.5 leading-normal">Se obtienen ingresos de Ciudad, Asentamientos y Minas. <em className="text-slate-500 font-serif">¡Excluido en Ronda 1!</em></p>
                    </div>
                    <div className="bg-slate-900/50 p-2 rounded-xl border border-slate-850/40">
                      <p className="font-bold text-amber-300/90 font-serif">Rondas Pares (Astrólogos)</p>
                      <p className="text-[10px] text-slate-400 mt-0.5 leading-normal">Roba una Carta de <span className="text-amber-500/90 font-medium">Proclamación de Astrólogos</span> y resuelve sus efectos en la mesa.</p>
                    </div>
                  </div>
                </div>

                <p className="text-[10px] text-slate-500 leading-normal border-t border-slate-900 pt-2 italic">
                  En partidas de &gt;2 jugadores, tras recibir recursos en ronda impar, un jugador (rotativo) roba una carta de Evento. Al terminar la ronda, el Cubo Negro avanza 1 espacio.
                </p>
              </div>
            )}

            {activeTab === 'turno' && (
              <div className="space-y-3">
                <span className="text-xs font-semibold text-amber-400 flex items-center gap-1.5 uppercase font-mono tracking-wide">
                  <ClipboardList className="w-3.5 h-3.5 text-amber-400" /> Flujo al Inicio del Turno (Mano de Cartas):
                </span>
                <p className="text-[11px] text-slate-400 leading-relaxed">
                  Antes de realizar cualquier acción, actualiza tu mano de Cartas siguiendo estos tres pasos rígidos:
                </p>
                <div className="space-y-2 text-[11px]">
                  <div className="flex items-start gap-2 bg-slate-900/40 p-2 rounded-xl border border-slate-900">
                    <span className="w-4 h-4 rounded bg-amber-500/10 text-amber-400 flex items-center justify-center font-mono text-[10px] font-bold shrink-0 mt-0.5">1</span>
                    <p className="text-slate-300 leading-normal">
                      <strong className="text-amber-200">Descartar:</strong> Descarta cualquier número de cartas. Si tu mano excede tu <span className="text-amber-500 font-semibold">Límite de Mano</span>, debes descartar obligatoriamente hasta ajustarte a él.
                    </p>
                  </div>
                  <div className="flex items-start gap-2 bg-slate-900/40 p-2 rounded-xl border border-slate-900">
                    <span className="w-4 h-4 rounded bg-amber-500/10 text-amber-400 flex items-center justify-center font-mono text-[10px] font-bold shrink-0 mt-0.5">2</span>
                    <p className="text-slate-300 leading-normal">
                      <strong className="text-amber-200">Robar:</strong> Puedes robar cartas del mazo de Poder y Magia hasta rellenar tu mano según tu <span className="text-amber-500 font-semibold">Límite de Mano</span>.
                    </p>
                  </div>
                  <div className="flex items-start gap-2 bg-slate-900/40 p-2 rounded-xl border border-slate-900">
                    <span className="w-4 h-4 rounded bg-amber-500/10 text-amber-400 flex items-center justify-center font-mono text-[10px] font-bold shrink-0 mt-0.5">3</span>
                    <p className="text-slate-300 leading-normal">
                      <strong className="text-amber-200">Habilidades:</strong> Resuelve todas las habilidades pasivas o activas indicadas 'al inicio de tu turno'.
                    </p>
                  </div>
                </div>

                <div className="bg-amber-500/5 border border-amber-500/10 p-2.5 rounded-xl flex items-start gap-2 text-[10px] text-amber-300 mt-1 leading-normal">
                  <AlertCircle className="w-3.5 h-3.5 shrink-0 text-amber-500 mt-0.5" />
                  <span>
                    <strong>Verificación de Límite:</strong> El Límite de tu Mano depende directamente del <strong>Nivel de tu Héroe</strong>. El comienzo del Turno es el único momento de la ronda en el que se comprueba este límite.
                  </span>
                </div>
              </div>
            )}

            {activeTab === 'movimiento' && (
              <div className="space-y-3">
                <span className="text-xs font-semibold text-amber-400 flex items-center gap-1.5 uppercase font-mono tracking-wide">
                  <Compass className="w-3.5 h-3.5 text-amber-400" /> Acciones de Movimiento (Gasto de PM):
                </span>
                <p className="text-[11px] text-slate-400 leading-relaxed">
                  Gastando tus Puntos de Movimiento (PM) puedes realizar las siguientes acciones durante tu turno (volteando las fichas PM a su lado inactivo):
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-1.5 text-[11px] text-slate-300 font-mono">
                  <div className="bg-slate-900/40 px-2.5 py-1.5 rounded-lg border border-slate-900 flex items-center gap-2">
                    <span className="text-amber-500 font-bold">1 PM</span>
                    <span className="text-[11px] text-slate-400">Mover un Héroe 1 casilla</span>
                  </div>
                  <div className="bg-slate-900/40 px-2.5 py-1.5 rounded-lg border border-slate-900 flex items-center gap-2">
                    <span className="text-amber-500 font-bold">1 PM</span>
                    <span className="text-[11px] text-slate-400">Revisitar tu Zona actual</span>
                  </div>
                  <div className="bg-slate-900/40 px-2.5 py-1.5 rounded-lg border border-slate-900 flex items-center gap-2">
                    <span className="text-amber-500 font-bold">1 PM</span>
                    <span className="text-[11px] text-slate-400">Descubrir loseta adyacente</span>
                  </div>
                  <div className="bg-slate-900/40 px-2.5 py-1.5 rounded-lg border border-slate-900 flex items-center gap-2">
                    <span className="text-amber-500 font-bold">1 PM</span>
                    <span className="text-[11px] text-slate-400">Colocar Loseta II-III</span>
                  </div>
                  <div className="bg-slate-900/40 px-2.5 py-1.5 rounded-lg border border-slate-900 col-span-1 md:col-span-2 flex items-center gap-2">
                    <span className="text-amber-500 font-bold">+1 PM</span>
                    <span className="text-[11px] text-slate-400">Continuar un combate contra Neutrales</span>
                  </div>
                </div>

                <div className="space-y-1.5 border-t border-slate-900 pt-2 text-[10px] text-slate-400 leading-normal">
                  <p>• <strong className="text-slate-300">Héroe Secundario:</strong> Cuenta con <strong>2 PM</strong> independientes. Su movimiento se calcula por separado de tu Héroe Principal.</p>
                  <p>• <strong className="text-slate-300">Héroes Aliados:</strong> Pueden cruzarse libremente, pero no detenerse en el mismo hexágono. Pasar a través no detona encuentros. Si fuesen forzados a coincidir, debes gastar tu siguiente PM para mover a uno fuera.</p>
                  <p>• <strong className="text-slate-300">PM Extra Ganados:</strong> Cualquier PM extra ganado por cartas, establos o efectos, expira al final de ese turno actual.</p>
                </div>
              </div>
            )}

            {activeTab === 'ciudad' && (
              <div className="space-y-3">
                <span className="text-xs font-semibold text-amber-400 flex items-center gap-1.5 uppercase font-mono tracking-wide">
                  <Home className="w-3.5 h-3.5 text-amber-400" /> Acciones de Ciudad (Fichas del Tablero):
                </span>
                <p className="text-[11px] text-slate-400 leading-relaxed">
                  Puedes realizar cada una de las 3 acciones de ciudad <span className="text-amber-400 font-semibold">una vez por ronda</span>. Al usarse, se voltea su respectiva ficha sobre el tablero de ciudad y no podrá volver a usarse hasta la siguiente fase de inicio global.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-2 text-[11px] mt-1">
                  <div className="bg-slate-900/40 p-2 rounded-xl border border-slate-900 space-y-1">
                    <p className="font-bold text-amber-300/90 font-serif">1. Construcción</p>
                    <p className="text-[10px] text-slate-400 leading-tight">Construye o amplía distritos de tu capital (Ayuntamiento, viviendas, murallas, etc.).</p>
                  </div>
                  <div className="bg-slate-900/40 p-2 rounded-xl border border-slate-900 space-y-1">
                    <p className="font-bold text-amber-300/90 font-serif">2. Población</p>
                    <p className="text-[10px] text-slate-400 leading-tight">Recluta o refuerza unidades en tus viviendas erigidas, o contrata un Héroe Secundario.</p>
                  </div>
                  <div className="bg-slate-900/40 p-2 rounded-xl border border-slate-900 space-y-1">
                    <p className="font-bold text-amber-300/90 font-serif">3. Libro de Hechizos</p>
                    <p className="text-[10px] text-slate-400 leading-tight">Compra hechizos del compendio. <em className="text-slate-500 leading-none">Requiere Cofradía de Magos.</em></p>
                  </div>
                </div>

                <div className="bg-amber-500/5 border border-amber-500/10 p-2.5 rounded-xl flex items-start gap-2 text-[10px] text-amber-300 mt-1 leading-normal">
                  <AlertCircle className="w-3.5 h-3.5 shrink-0 text-amber-500 mt-0.5" />
                  <span>
                    <strong>Reacción antes de Combate:</strong> Las acciones de ciudad pueden jugarse en cualquier momento (incluso en turnos ajenos), excepto durante combate. Puedes usarlas de forma reactiva tras anunciarse un combate antes de iniciar la preparación del mismo.
                  </span>
                </div>
              </div>
            )}

            {activeTab === 'moral' && (
              <div className="space-y-3">
                <span className="text-xs font-semibold text-amber-400 flex items-center gap-1.5 uppercase font-mono tracking-wide">
                  <Heart className="w-3.5 h-3.5 text-amber-400" /> Moral del Ejército & Excepción de Facción:
                </span>
                <p className="text-[11px] text-slate-400 leading-relaxed">
                  La moral refleja la cohesión de tus tropas. Se gana o pierde mediante eventos, templos, tumbas u obstáculos en combate.
                </p>

                <div className="space-y-2 text-[11px]">
                  <div className="bg-slate-900/40 p-2.5 rounded-xl border border-slate-900 space-y-1">
                    <p className="font-bold text-amber-400 flex items-center gap-1 font-serif">Ficha de Moral Positiva (Máx: 1)</p>
                    <p className="text-[10px] text-slate-400 leading-normal">Se puede gastar en cualquier momento para activar uno de los siguientes efectos:</p>
                    <ul className="list-disc pl-4 text-[10px] text-slate-400 space-y-0.5 mt-1">
                      <li>Robar 1 carta de tu mazo de inmediato.</li>
                      <li>Descartar cualquier número de cartas de tu mano, y luego robar ese mismo número.</li>
                      <li>Relanzar cualquier dado que acabes de lanzar.</li>
                    </ul>
                  </div>

                  <div className="bg-slate-900/40 p-2.5 rounded-xl border border-slate-900 space-y-1">
                    <p className="font-bold text-red-400 flex items-center gap-1 font-serif">Pérdida & Moral Negativa</p>
                    <p className="text-[10px] text-slate-400 leading-normal">
                      Si pierdes moral, descarta tu ficha positiva. Si no tienes, ganas una ficha de Moral Negativa (anulable si ganas moral positiva).
                    </p>
                    <p className="text-[10px] text-red-300 font-mono leading-normal mt-1 bg-red-500/5 border border-red-500/10 p-1.5 rounded-lg">
                      ⚠️ <strong>Segunda Ficha Negativa:</strong> Si vas a ganar una segunda Moral Negativa, en su lugar deberás descartar por completo toda tu mano la próxima vez que finalice tu turno.
                    </p>
                  </div>

                  <div className="bg-slate-950/80 border border-slate-850 p-2.5 rounded-xl flex items-center gap-2.5 text-[11px] text-amber-300 font-serif">
                    <Sparkles className="w-4 h-4 shrink-0 text-amber-400" />
                    <div>
                      <p className="font-bold uppercase tracking-wider text-[10px] text-amber-400 font-sans">Exclusión de Necrópolis:</p>
                      <p className="text-[10px] text-slate-400 leading-normal font-sans">La facción <strong>Necrópolis</strong> ignora por completo las reglas de moral. Las fuerzas no-muertas son inmunes y no pueden ganar ni perder moral por ningún motivo.</p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
