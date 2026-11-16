import { useMemo, useState } from 'react';
import { Building2, FlaskConical, MapPin, ShieldAlert } from 'lucide-react';
import {
  ALL_CONFIRMED_PROVIDERS,
  type NetworkTableRow,
} from '../data/comparisonData';
import { StatusIndicator } from './StatusIndicator';

type MapOperatorFilter = 'all' | 'sulamerica_dn' | 'sulamerica_esp' | 'amil' | 'porto';
type MapKindFilter = 'all' | 'hospital' | 'laboratorio';

const ZONES = [
  {
    id: 'alphaville_rio_negro',
    title: 'Eixo Alphaville / Al. Rio Negro (ref. nº 503)',
    subtitle: 'Barueri · Área prioritária',
  },
  {
    id: 'barueri_centro',
    title: 'Barueri (Demais localidades)',
    subtitle: 'Barueri · Área prioritária',
  },
  {
    id: 'carapicuiba',
    title: 'Carapicuíba',
    subtitle: 'Cidade vizinha',
  },
  {
    id: 'osasco',
    title: 'Osasco',
    subtitle: 'Polo regional vizinho',
  },
] as const;

export function RegionalExplorerSection() {
  const [operatorFilter, setOperatorFilter] = useState<MapOperatorFilter>('all');
  const [kindFilter, setKindFilter] = useState<MapKindFilter>('all');
  const [selectedId, setSelectedId] = useState<string>(
    ALL_CONFIRMED_PROVIDERS[0]?.id ?? ''
  );

  const visibleProviders = useMemo(() => {
    return ALL_CONFIRMED_PROVIDERS.filter((p) => {
      if (operatorFilter === 'sulamerica_dn' && p.sulamericaDireto.status !== 'consta') {
        return false;
      }
      if (operatorFilter === 'sulamerica_esp' && p.sulamericaEspecial.status !== 'consta') {
        return false;
      }
      if (operatorFilter === 'amil' && p.amilS380.status !== 'consta') {
        return false;
      }
      if (operatorFilter === 'porto' && p.portoP320.status !== 'consta') {
        return false;
      }

      if (kindFilter !== 'all' && p.kind !== kindFilter) {
        return false;
      }

      return true;
    });
  }, [operatorFilter, kindFilter]);

  const selectedProvider: NetworkTableRow | undefined =
    visibleProviders.find((p) => p.id === selectedId) ?? visibleProviders[0];

  return (
    <section id="mapa-regional" className="border-t border-slate-200 bg-slate-50 py-14 sm:py-20">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-xs font-semibold tracking-wide text-orange-600">
            03. Explorador Geográfico Regional
          </p>
          <h2
            className="mt-2 font-display text-2xl font-bold tracking-tight text-navy-900 sm:text-3xl"
            style={{ textWrap: 'balance' }}
          >
            Distribuição regional dos prestadores confirmados
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-slate-600 sm:text-base">
            Selecione um estabelecimento para abrir a ficha documental completa. Referência regional: <strong className="font-semibold text-navy-900">Alameda Rio Negro, próximo ao nº 503 (Alphaville, Barueri)</strong>.
          </p>
        </div>

        {/* Filters */}
        <div className="mt-7 flex flex-col gap-4 rounded-xl border border-slate-200 bg-white p-4 sm:flex-row sm:items-center sm:justify-between no-print">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs font-semibold text-navy-900 mr-1">Produto:</span>
            {(
              [
                { id: 'all', label: 'Todos' },
                { id: 'sulamerica_dn', label: 'SulAmérica D. Nacional' },
                { id: 'sulamerica_esp', label: 'SulAmérica Esp. 100' },
                { id: 'amil', label: 'Amil S380 QC' },
                { id: 'porto', label: 'Porto P320 E' },
              ] as const
            ).map((opt) => (
              <button
                key={opt.id}
                type="button"
                onClick={() => setOperatorFilter(opt.id)}
                className={`rounded-md px-3 py-1.5 text-xs font-medium transition-colors whitespace-nowrap cursor-pointer ${
                  operatorFilter === opt.id
                    ? 'bg-navy-900 text-white'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                {opt.label}
              </button>
            ))}
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs font-semibold text-navy-900 mr-1">Tipo:</span>
            {(
              [
                { id: 'all', label: 'Todos' },
                { id: 'hospital', label: 'Hospitais / PS' },
                { id: 'laboratorio', label: 'Laboratórios' },
              ] as const
            ).map((opt) => (
              <button
                key={opt.id}
                type="button"
                onClick={() => setKindFilter(opt.id)}
                className={`rounded-md px-3 py-1.5 text-xs font-medium transition-colors whitespace-nowrap cursor-pointer ${
                  kindFilter === opt.id
                    ? 'bg-orange-600 text-white'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                {opt.label}
              </button>
            ))}
          </div>
        </div>

        {/* Regional Zone Map + Ficha */}
        <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-12">
          <div className="rounded-xl border border-slate-200 bg-white p-5 lg:col-span-7">
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-3">
              <div className="flex items-center gap-2 text-xs font-semibold text-navy-900">
                <MapPin className="h-4 w-4 text-orange-600" aria-hidden="true" />
                <span>Organização por zona (sem coordenadas ou distâncias estimadas)</span>
              </div>
              <div className="flex items-center gap-4 text-[11px] text-slate-500">
                <span className="inline-flex items-center gap-1">
                  <Building2 className="h-3.5 w-3.5 text-navy-800" aria-hidden="true" />
                  Hospital / PS
                </span>
                <span className="inline-flex items-center gap-1">
                  <FlaskConical className="h-3.5 w-3.5 text-orange-600" aria-hidden="true" />
                  Laboratório
                </span>
              </div>
            </div>

            {visibleProviders.length === 0 ? (
              <div className="py-12 text-center text-xs text-slate-600">
                Nenhum prestador identificado para esta combinação de filtros.
              </div>
            ) : (
              <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
                {ZONES.map((zone) => {
                  const zoneProviders = visibleProviders.filter((p) => p.mapZone === zone.id);
                  if (zoneProviders.length === 0) return null;

                  return (
                    <div
                      key={zone.id}
                      className={`rounded-lg border p-3.5 ${
                        zone.id === 'alphaville_rio_negro'
                          ? 'border-orange-200 bg-orange-50/40'
                          : 'border-slate-200 bg-slate-50/60'
                      }`}
                    >
                      <div className="text-xs font-bold text-navy-900">{zone.title}</div>
                      <div className="text-[11px] text-slate-500">{zone.subtitle}</div>

                      <div className="mt-3 space-y-1.5">
                        {zoneProviders.map((provider) => {
                          const isSelected = selectedProvider?.id === provider.id;
                          const isLab = provider.kind === 'laboratorio';
                          return (
                            <button
                              key={provider.id}
                              type="button"
                              onClick={() => setSelectedId(provider.id)}
                              className={`flex w-full items-center justify-between gap-2 rounded-md border px-3 py-2 text-left text-xs transition-colors cursor-pointer ${
                                isSelected
                                  ? 'border-navy-900 bg-navy-900 text-white'
                                  : 'border-slate-200 bg-white text-navy-900 hover:border-orange-400'
                              }`}
                            >
                              <span className="flex items-center gap-2 min-w-0">
                                {isLab ? (
                                  <FlaskConical
                                    className={`h-3.5 w-3.5 shrink-0 ${
                                      isSelected ? 'text-orange-300' : 'text-orange-600'
                                    }`}
                                    aria-hidden="true"
                                  />
                                ) : (
                                  <Building2
                                    className={`h-3.5 w-3.5 shrink-0 ${
                                      isSelected ? 'text-orange-300' : 'text-navy-800'
                                    }`}
                                    aria-hidden="true"
                                  />
                                )}
                                <span className="truncate font-medium">{provider.name}</span>
                              </span>
                              <span
                                className={`text-[10px] shrink-0 ${
                                  isSelected ? 'text-slate-200' : 'text-slate-500'
                                }`}
                              >
                                Ficha
                              </span>
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  );
                })}
              </div>
            )}

            <div className="mt-4 flex items-start gap-2 text-[11px] text-slate-500">
              <ShieldAlert className="mt-0.5 h-3.5 w-3.5 shrink-0 text-slate-400" aria-hidden="true" />
              <span>
                Sem quilometragem ou tempo de deslocamento estimados. Os estabelecimentos estão ordenados por prioridade geográfica a partir de Alphaville, Barueri.
              </span>
            </div>
          </div>

          <div className="rounded-xl border border-slate-200 bg-white p-6 lg:col-span-5 print-break-inside-avoid">
            {selectedProvider ? (
              <div>
                <div className="text-xs font-semibold text-orange-600">
                  Ficha documental do prestador
                </div>
                <h3 className="mt-1 font-display text-xl font-bold text-navy-900">
                  {selectedProvider.name}
                </h3>

                <dl className="mt-4 space-y-3 border-t border-slate-100 pt-4 text-xs">
                  <div>
                    <dt className="font-semibold text-navy-900">Localidade</dt>
                    <dd className="mt-0.5 text-slate-600">{selectedProvider.verifiedLocation}</dd>
                  </div>
                  <div>
                    <dt className="font-semibold text-navy-900">Modalidade documentada</dt>
                    <dd className="mt-0.5 text-slate-600">{selectedProvider.documentedModality}</dd>
                  </div>
                </dl>

                <div className="mt-5 border-t border-slate-100 pt-4">
                  <div className="text-xs font-semibold text-navy-900">
                    Produtos analisados e fontes documentais
                  </div>
                  <div className="mt-3 space-y-2.5">
                    {(
                      [
                        { title: 'SulAmérica Direto Nacional (43 vidas)', d: selectedProvider.sulamericaDireto },
                        { title: 'SulAmérica Especial 100 (5 vidas)', d: selectedProvider.sulamericaEspecial },
                        { title: 'Amil S380 QC (Enfermaria)', d: selectedProvider.amilS380 },
                        { title: 'Porto P320 E (Enfermaria)', d: selectedProvider.portoP320 },
                      ] as const
                    ).map(({ title, d }) => (
                      <div key={title} className="rounded-lg bg-slate-50 p-3 text-xs">
                        <div className="flex items-center justify-between gap-2">
                          <span className="font-semibold text-navy-900">{title}</span>
                          <StatusIndicator status={d.status} psOnly={d.psOnly} />
                        </div>
                        {d.modalityLabel && (
                          <p className="mt-1 text-[11px] text-slate-700">
                            Atendimento: {d.modalityLabel}
                          </p>
                        )}
                        <p className="mt-1 text-[10px] text-slate-400">
                          {d.source} · {d.date}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <p className="text-xs text-slate-600">
                Selecione um prestador para visualizar sua ficha documental.
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
