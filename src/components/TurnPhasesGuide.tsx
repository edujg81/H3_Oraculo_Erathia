import React from 'react';
import { ClipboardList } from 'lucide-react';

export function TurnPhasesGuide() {
  return (
    <div id="turn-phases-card" className="bg-slate-900/90 border border-slate-800 rounded-3xl p-5 space-y-4 shadow-xl">
      <h3 className="text-sm font-bold text-amber-500 uppercase tracking-widest flex items-center border-b border-slate-800/80 pb-2 font-serif">
        <ClipboardList className="w-4 h-4 mr-2 text-amber-500" />
        Fases del Turno de Mesa
      </h3>
      
      <div className="flex flex-col space-y-2 text-xs">
        <div className="flex items-start py-1 border-b border-slate-800/40">
          <span className="w-5 h-5 rounded-full bg-amber-600/10 text-amber-500 flex items-center justify-center text-[10px] font-mono font-bold mr-2.5 shrink-0 mt-0.5">1</span>
          <div>
            <span className="text-slate-300 font-medium block">Fase de Recursos (Rondas Impares)</span>
            <span className="text-[10px] text-slate-500 block leading-tight mt-0.5">Cobro de ingresos según tu ciudad y minas (R.1 excluido).</span>
          </div>
        </div>
        <div className="flex items-start py-1 border-b border-slate-800/40">
          <span className="w-5 h-5 rounded-full bg-amber-600/10 text-amber-500 flex items-center justify-center text-[10px] font-mono font-bold mr-2.5 shrink-0 mt-0.5">2</span>
          <div>
            <span className="text-slate-300 font-medium block">Inicio y Reposición</span>
            <span className="text-[10px] text-slate-500 block leading-tight mt-0.5">Repone cartas hasta tu límite; restablece tus 3 PM verdes y experto.</span>
          </div>
        </div>
        <div className="flex items-start py-1 border-b border-slate-800/40">
          <span className="w-5 h-5 rounded-full bg-amber-600/10 text-amber-500 flex items-center justify-center text-[10px] font-mono font-bold mr-2.5 shrink-0 mt-0.5">3</span>
          <div>
            <span className="text-slate-300 font-medium block">Movimiento e Interacción</span>
            <span className="text-[10px] text-slate-500 block leading-tight mt-0.5">Gasta tus 3 PM para explorar, moverte, resolver o hacer 1 acción de ciudad.</span>
          </div>
        </div>
        <div className="flex items-start py-1">
          <span className="w-5 h-5 rounded-full bg-amber-600/10 text-amber-500 flex items-center justify-center text-[10px] font-mono font-bold mr-2.5 shrink-0 mt-0.5">4</span>
          <div>
            <span className="text-slate-300 font-medium block">Fase de Combate / Fin</span>
            <span className="text-[10px] text-slate-500 block leading-tight mt-0.5">Resuelve los enfrentamientos tácticos en el tablero de combate táctico.</span>
          </div>
        </div>
      </div>
    </div>
  );
}
