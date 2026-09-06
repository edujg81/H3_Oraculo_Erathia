import React, { useMemo, useState } from 'react';
import { Gem, Search, Shield, Sparkles, X } from 'lucide-react';
import { motion } from 'motion/react';
import { ARTIFACTS_DATA, type Artifact } from '../data/artifactsData';

type RarityFilter = 'Todos' | Artifact['rarity'];

const RARITY_CONFIG: Record<Artifact['rarity'], { label: string; color: string; border: string; panel: string }> = {
  Minor: {
    label: 'Menores',
    color: 'text-sky-300',
    border: 'border-sky-500/30',
    panel: 'bg-sky-950/20'
  },
  Major: {
    label: 'Mayores',
    color: 'text-red-300',
    border: 'border-red-500/30',
    panel: 'bg-red-950/20'
  },
  Relic: {
    label: 'Reliquias',
    color: 'text-violet-300',
    border: 'border-violet-500/30',
    panel: 'bg-violet-950/20'
  }
};

const DURATION_LABELS: Record<Artifact['duration'], string> = {
  instant: 'Instantáneo',
  ongoing: 'Continuo',
  activation: 'Activación',
  permanent: 'Permanente',
  map_effect: 'Efecto de mapa'
};

function ArtifactBadge({ rarity }: { rarity: Artifact['rarity'] }) {
  const config = RARITY_CONFIG[rarity];
  return (
    <span className={`inline-flex items-center gap-1 rounded border px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider ${config.color} ${config.border} ${config.panel}`}>
      <Gem className="h-3 w-3" />
      {config.label}
    </span>
  );
}

export default function ArtifactsViewer() {
  const [searchTerm, setSearchTerm] = useState('');
  const [rarityFilter, setRarityFilter] = useState<RarityFilter>('Todos');
  const [selectedArtifact, setSelectedArtifact] = useState<Artifact | null>(ARTIFACTS_DATA[0] ?? null);

  const artifactCounts = useMemo(() => ({
    Minor: ARTIFACTS_DATA.filter(artifact => artifact.rarity === 'Minor').length,
    Major: ARTIFACTS_DATA.filter(artifact => artifact.rarity === 'Major').length,
    Relic: ARTIFACTS_DATA.filter(artifact => artifact.rarity === 'Relic').length
  }), []);

  const filteredArtifacts = useMemo(() => {
    const normalizedSearch = searchTerm.trim().toLocaleLowerCase('es');
    return ARTIFACTS_DATA
      .filter(artifact => {
        const searchableText = `${artifact.name} ${artifact.nameES} ${artifact.effectES} ${artifact.source}`.toLocaleLowerCase('es');
        return (rarityFilter === 'Todos' || artifact.rarity === rarityFilter) && searchableText.includes(normalizedSearch);
      })
      .sort((first, second) => first.nameES.localeCompare(second.nameES, 'es'));
  }, [rarityFilter, searchTerm]);

  const selectRarity = (rarity: RarityFilter) => {
    setRarityFilter(rarity);
    if (rarity !== 'Todos' && selectedArtifact?.rarity !== rarity) {
      setSelectedArtifact(ARTIFACTS_DATA.find(artifact => artifact.rarity === rarity) ?? null);
    }
  };

  return (
    <div className="space-y-6">
      <motion.section
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative overflow-hidden rounded-3xl border border-slate-800 bg-slate-900/60 p-6 shadow-xl sm:p-8"
      >
        <div className="pointer-events-none absolute -right-20 -top-24 h-72 w-72 rounded-full bg-violet-500/10 blur-3xl" />
        <div className="relative flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl space-y-2">
            <span className="text-[10px] font-mono font-bold uppercase tracking-[0.2em] text-violet-300">Mazo de Artefactos</span>
            <h2 className="flex items-center gap-2 text-2xl font-bold tracking-tight text-slate-100">
              <Gem className="h-6 w-6 text-violet-300" />
              Reliquias de Erathia
            </h2>
            <p className="text-sm leading-relaxed text-slate-400">
              Consulta los {ARTIFACTS_DATA.length} artefactos documentados, sus efectos, duración y expansión de origen.
            </p>
          </div>
          <div className="grid grid-cols-3 gap-2 text-center">
            {(Object.keys(RARITY_CONFIG) as Artifact['rarity'][]).map(rarity => (
              <button
                key={rarity}
                type="button"
                onClick={() => selectRarity(rarity)}
                className={`min-w-20 rounded-xl border px-3 py-2 transition ${RARITY_CONFIG[rarity].border} ${RARITY_CONFIG[rarity].panel} hover:brightness-125`}
              >
                <span className={`block text-lg font-bold ${RARITY_CONFIG[rarity].color}`}>{artifactCounts[rarity]}</span>
                <span className="text-[9px] font-mono uppercase tracking-wider text-slate-500">{RARITY_CONFIG[rarity].label}</span>
              </button>
            ))}
          </div>
        </div>
      </motion.section>

      <div className="grid grid-cols-1 gap-5 xl:grid-cols-[minmax(0,1fr)_360px]">
        <section className="min-w-0 space-y-4">
          <div className="flex flex-col gap-3 rounded-2xl border border-slate-800 bg-slate-900/45 p-4 sm:flex-row">
            <label className="relative min-w-0 flex-1">
              <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-500" />
              <input
                value={searchTerm}
                onChange={event => setSearchTerm(event.target.value)}
                placeholder="Buscar por nombre, efecto o expansión..."
                className="w-full rounded-xl border border-slate-800 bg-slate-950/70 py-2.5 pl-10 pr-9 text-sm text-slate-200 outline-none transition placeholder:text-slate-600 focus:border-violet-500/60 focus:ring-2 focus:ring-violet-500/20"
              />
              {searchTerm && (
                <button type="button" onClick={() => setSearchTerm('')} aria-label="Borrar búsqueda" className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-500 hover:text-slate-200">
                  <X className="h-4 w-4" />
                </button>
              )}
            </label>
            <div className="flex gap-2 overflow-x-auto">
              {(['Todos', 'Minor', 'Major', 'Relic'] as RarityFilter[]).map(rarity => (
                <button
                  key={rarity}
                  type="button"
                  onClick={() => selectRarity(rarity)}
                  className={`shrink-0 rounded-xl border px-3 py-2 text-[11px] font-semibold transition ${rarityFilter === rarity ? 'border-violet-400/60 bg-violet-500/15 text-violet-200' : 'border-slate-800 bg-slate-950/50 text-slate-500 hover:text-slate-200'}`}
                >
                  {rarity === 'Todos' ? 'Todos' : RARITY_CONFIG[rarity].label}
                </button>
              ))}
            </div>
          </div>

          <div className="flex items-center justify-between px-1 text-[10px] font-mono uppercase tracking-wider text-slate-500">
            <span>{filteredArtifacts.length} artefactos encontrados</span>
            <span>Selecciona una ficha para ver sus detalles</span>
          </div>

          <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
            {filteredArtifacts.map((artifact, index) => {
              const config = RARITY_CONFIG[artifact.rarity];
              const isSelected = selectedArtifact?.id === artifact.id;
              return (
                <motion.button
                  key={artifact.id}
                  type="button"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: Math.min(index * 0.015, 0.3) }}
                  onClick={() => setSelectedArtifact(artifact)}
                  className={`rounded-2xl border p-4 text-left transition ${isSelected ? `${config.border} ${config.panel} ring-1 ring-violet-400/30` : 'border-slate-800/80 bg-slate-900/45 hover:border-slate-600 hover:bg-slate-800/50'}`}
                >
                  <div className="mb-2 flex items-start justify-between gap-3">
                    <h3 className="text-sm font-bold text-slate-100">{artifact.nameES}</h3>
                    <ArtifactBadge rarity={artifact.rarity} />
                  </div>
                  <p className="line-clamp-2 text-[11px] leading-relaxed text-slate-500">{artifact.effectES}</p>
                  <p className="mt-3 text-[10px] font-mono text-slate-600">{artifact.name}</p>
                </motion.button>
              );
            })}
          </div>
          {filteredArtifacts.length === 0 && (
            <div className="rounded-2xl border border-dashed border-slate-800 p-10 text-center text-sm text-slate-500">No hay artefactos que coincidan con la búsqueda.</div>
          )}
        </section>

        <aside className="h-fit rounded-2xl border border-slate-800 bg-slate-900/60 p-5 xl:sticky xl:top-4">
          {selectedArtifact ? (
            <div className="space-y-5">
              <div className="flex items-start justify-between gap-3 border-b border-slate-800 pb-4">
                <div>
                  <ArtifactBadge rarity={selectedArtifact.rarity} />
                  <h3 className="mt-3 text-xl font-bold text-slate-100">{selectedArtifact.nameES}</h3>
                  <p className="mt-1 text-[11px] font-mono text-slate-500">{selectedArtifact.name}</p>
                </div>
                <Shield className="h-7 w-7 shrink-0 text-slate-700" />
              </div>
              <div className="space-y-2">
                <h4 className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-amber-400"><Sparkles className="h-3.5 w-3.5" />Efecto</h4>
                <p className="whitespace-pre-line text-sm leading-relaxed text-slate-300">{selectedArtifact.effectES}</p>
              </div>
              <dl className="grid grid-cols-2 gap-2 text-xs">
                <div className="rounded-xl border border-slate-800 bg-slate-950/50 p-3"><dt className="text-slate-600">Duración</dt><dd className="mt-1 font-semibold text-slate-300">{DURATION_LABELS[selectedArtifact.duration]}</dd></div>
                <div className="rounded-xl border border-slate-800 bg-slate-950/50 p-3"><dt className="text-slate-600">Después de usar</dt><dd className="mt-1 font-semibold text-slate-300">{selectedArtifact.discard ? 'Se descarta' : 'Permanece'}</dd></div>
              </dl>
              <div className="border-t border-slate-800 pt-4 text-[11px] text-slate-500">
                <p><span className="text-slate-600">Expansión:</span> {selectedArtifact.source}</p>
                {selectedArtifact.notes && <p className="mt-2 leading-relaxed"><span className="text-slate-600">Fuente:</span> {selectedArtifact.notes}</p>}
              </div>
            </div>
          ) : (
            <div className="py-10 text-center text-sm text-slate-500">Selecciona un artefacto.</div>
          )}
        </aside>
      </div>
    </div>
  );
}