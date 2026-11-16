import { useMemo, useState } from 'react';
import { Check, Info, MapPin, Minus, Search } from 'lucide-react';
import {
  HOSPITALS_TABLE,
  LABS_TABLE,
  type NetworkTableRow,
} from '../data/comparisonData';
import { StatusIndicator } from './StatusIndicator';

type RegionFilter = 'all' | 'alphaville_barueri' | 'osasco_proximidades';
type PlanFilter = 'all' | 'sulamerica_dn' | 'sulamerica_esp' | 'amil' | 'porto';

export function NetworkMatrixSection() {
  const [searchTerm, setSearchTerm] = useState('');
  const [regionFilter, setRegionFilter] = useState<RegionFilter>('all');
  const [planFilter, setPlanFilter] = useState<PlanFilter>('all');

  const filterRows = useMemo(() => {
    const query = searchTerm.trim().toLowerCase();

    return (rows: NetworkTableRow[]) =>
      rows.filter((row) => {
        if (regionFilter !== 'all' && row.region !== regionFilter) {
          return false;
        }
        if (planFilter === 'sulamerica_dn' && row.sulamericaDireto.status !== 'consta') {
          return false;
        }
        if (planFilter === 'sulamerica_esp' && row.sulamericaEspecial.status !== 'consta') {
          return false;
        }
        if (planFilter === 'amil' && row.amilS380.status !== 'consta') {
          return false;
        }
        if (planFilter === 'porto' && row.portoP320.status !== 'consta') {
          return false;
        }
        if (query) {
          const text = `${row.name} ${row.city} ${row.documentedModality}`.toLowerCase();
          if (!text.includes(query)) return false;
        }
        return true;
      });
  }, [searchTerm, regionFilter, planFilter]);

  const hospitals = useMemo(() => filterRows(HOSPITALS_TABLE), [filterRows]);
  const labs = useMemo(() => filterRows(LABS_TABLE), [filterRows]);

  const resetFilters = () => {
    setSearchTerm('');
    setRegionFilter('all');
    setPlanFilter('all');
  };

  return (
    <section id="rede-credenciada" className="border-t border-slate-200 bg-white py-14 sm:py-20">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-xs font-semibold tracking-wide text-orange-600">
            02. Rede Credenciada Confirmada
          </p>
          <h2
            className="mt-2 font-display text-2xl font-bold tracking-tight text-navy-900 sm:text-3xl"
            style={{ textWrap: 'balance' }}
          >
            Hospitais e laboratórios identificados nos documentos de cada produto
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-slate-600 sm:text-base">
            Comparação objetiva com ordenação prioritária a partir de{' '}
            <strong className="font-semibold text-navy-900">
              Alphaville e Barueri (referência Alameda Rio Negro, próximo ao nº 503)
            </strong>
            , seguida por Osasco e proximidades.
          </p>
        </div>

        {/* Visual Legend */}
        <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2.5 rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-xs text-slate-700">
          <div className="inline-flex items-center gap-1.5">
            <Check className="h-4 w-4 shrink-0 stroke-[2.5] text-emerald-600" aria-hidden="true" />
            <span>
              <strong className="text-navy-900">Consta:</strong> prestador confirmado na rede do produto
            </span>
          </div>
          <div className="inline-flex items-center gap-1.5">
            <Check className="h-4 w-4 shrink-0 stroke-[2.5] text-emerald-600" aria-hidden="true" />
            <span>
              <strong className="text-emerald-700">PS:</strong> atendimento confirmado somente em pronto-socorro (não sugere internação)
            </span>
          </div>
          <div className="inline-flex items-center gap-1.5">
            <Minus className="h-4 w-4 shrink-0 text-slate-400" aria-hidden="true" />
            <span>
              <strong className="text-navy-900">Não identificado:</strong> ausente na documentação analisada
            </span>
          </div>
        </div>

        {/* Interactive Search and Filters */}
        <div className="mt-6 rounded-xl border border-slate-200 bg-slate-50/70 p-4 no-print">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-12">
            <div className="md:col-span-5">
              <label htmlFor="network-search" className="block text-xs font-medium text-slate-600">
                Buscar prestador ou cidade
              </label>
              <div className="relative mt-1">
                <Search
                  className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400"
                  aria-hidden="true"
                />
                <input
                  id="network-search"
                  type="text"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="Ex.: Hospitalis, São Luiz, Lavoisier, Barueri..."
                  className="w-full rounded-lg border border-slate-300 bg-white py-2 pl-9 pr-3 text-xs text-navy-900 placeholder:text-slate-400 focus:border-orange-600 focus:outline-none"
                />
              </div>
            </div>

            <div className="md:col-span-4">
              <label htmlFor="network-region" className="block text-xs font-medium text-slate-600">
                Localidade
              </label>
              <select
                id="network-region"
                value={regionFilter}
                onChange={(e) => setRegionFilter(e.target.value as RegionFilter)}
                className="mt-1 w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-xs font-medium text-navy-900 focus:border-orange-600 focus:outline-none"
              >
                <option value="all">Todas (Alphaville, Barueri, Osasco e Carapicuíba)</option>
                <option value="alphaville_barueri">Somente Alphaville e Barueri</option>
                <option value="osasco_proximidades">Somente Osasco e proximidades</option>
              </select>
            </div>

            <div className="md:col-span-3">
              <label htmlFor="network-plan" className="block text-xs font-medium text-slate-600">
                Confirmado no produto
              </label>
              <select
                id="network-plan"
                value={planFilter}
                onChange={(e) => setPlanFilter(e.target.value as PlanFilter)}
                className="mt-1 w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-xs font-medium text-navy-900 focus:border-orange-600 focus:outline-none"
              >
                <option value="all">Todos os produtos</option>
                <option value="sulamerica_dn">SulAmérica D. Nacional</option>
                <option value="sulamerica_esp">SulAmérica Especial 100</option>
                <option value="amil">Amil S380 QC</option>
                <option value="porto">Porto P320 E</option>
              </select>
            </div>
          </div>

          {(searchTerm || regionFilter !== 'all' || planFilter !== 'all') && (
            <div className="mt-3 flex items-center justify-between text-xs text-slate-600">
              <span className="tabular-nums">
                {hospitals.length} hospitais · {labs.length} laboratórios exibidos
              </span>
              <button
                type="button"
                onClick={resetFilters}
                className="font-medium text-orange-600 hover:text-orange-700 underline underline-offset-2 cursor-pointer"
              >
                Limpar filtros
              </button>
            </div>
          )}
        </div>

        {/* Table 1: Hospitais próximos à empresa */}
        <div id="hospitais-proximos" className="mt-10 scroll-mt-20">
          <div className="flex flex-wrap items-baseline justify-between gap-2">
            <h3 className="font-display text-xl font-bold text-navy-900">
              1. Hospitais próximos à empresa
            </h3>
            <span className="text-xs text-slate-500 tabular-nums">
              {hospitals.length} prestadores identificados
            </span>
          </div>

          <ProviderComparisonTable
            rows={hospitals}
            emptyMessage="Nenhum hospital encontrado com os filtros aplicados."
            onReset={resetFilters}
          />
        </div>

        {/* Table 2: Laboratórios próximos à empresa */}
        <div id="laboratorios-proximos" className="mt-14 scroll-mt-20">
          <div className="flex flex-wrap items-baseline justify-between gap-2">
            <h3 className="font-display text-xl font-bold text-navy-900">
              2. Laboratórios próximos à empresa
            </h3>
            <span className="text-xs text-slate-500 tabular-nums">
              {labs.length} unidades/registros identificados
            </span>
          </div>

          <ProviderComparisonTable
            rows={labs}
            emptyMessage="Nenhum laboratório encontrado com os filtros aplicados."
            onReset={resetFilters}
          />
        </div>

        {/* Mandatory footnote */}
        <div className="mt-6 flex items-start gap-2.5 text-xs text-slate-600">
          <Info className="mt-0.5 h-4 w-4 shrink-0 text-navy-800" aria-hidden="true" />
          <p>
            O símbolo <strong>—</strong> indica ausência de confirmação na documentação analisada, não uma declaração definitiva de inexistência de cobertura. Não foram incluídos prestadores de planos superiores ou unidades sem comprovação documental específica para cada produto.
          </p>
        </div>
      </div>
    </section>
  );
}

function ProviderComparisonTable({
  rows,
  emptyMessage,
  onReset,
}: {
  rows: NetworkTableRow[];
  emptyMessage: string;
  onReset: () => void;
}) {
  if (rows.length === 0) {
    return (
      <div className="mt-4 rounded-xl border border-slate-200 bg-slate-50 p-8 text-center">
        <p className="text-xs font-medium text-slate-700">{emptyMessage}</p>
        <button
          type="button"
          onClick={onReset}
          className="mt-3 rounded-lg bg-navy-900 px-3.5 py-1.5 text-xs font-semibold text-white hover:bg-navy-800 cursor-pointer"
        >
          Restaurar filtros
        </button>
      </div>
    );
  }

  return (
    <>
      {/* Desktop Table */}
      <div className="mt-4 hidden overflow-x-auto rounded-xl border border-slate-200 lg:block">
        <table className="w-full border-collapse text-left text-xs">
          <thead>
            <tr className="border-b border-slate-200 bg-navy-900 text-white">
              <th scope="col" className="w-[28%] px-4 py-3.5 font-semibold">
                Prestador
              </th>
              <th scope="col" className="w-[16%] px-4 py-3.5 font-semibold">
                Cidade
              </th>
              <th scope="col" className="w-[14%] px-3 py-3.5 text-center font-semibold">
                SulAmérica Direto Nacional
                <span className="block text-[10px] font-normal text-slate-300">
                  43 vidas
                </span>
              </th>
              <th scope="col" className="w-[14%] px-3 py-3.5 text-center font-semibold">
                SulAmérica Especial 100
                <span className="block text-[10px] font-normal text-slate-300">
                  5 vidas
                </span>
              </th>
              <th scope="col" className="w-[14%] px-3 py-3.5 text-center font-semibold">
                Amil S380 QC
                <span className="block text-[10px] font-normal text-slate-300">
                  Enfermaria
                </span>
              </th>
              <th scope="col" className="w-[14%] px-3 py-3.5 text-center font-semibold">
                Porto P320 E
                <span className="block text-[10px] font-normal text-slate-300">
                  Enfermaria
                </span>
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 bg-white">
            {rows.map((row) => (
              <tr key={row.id} className="transition-colors hover:bg-slate-50/80">
                <td className="px-4 py-3">
                  <div className="font-semibold text-navy-900">{row.name}</div>
                  <div className="mt-0.5 text-[11px] text-slate-500">
                    {row.documentedModality}
                  </div>
                </td>
                <td className="px-4 py-3 text-slate-700 whitespace-nowrap">
                  <span className="inline-flex items-center gap-1">
                    <MapPin className="h-3.5 w-3.5 text-slate-400 shrink-0" aria-hidden="true" />
                    {row.city}
                  </span>
                </td>
                <td className="px-3 py-3 text-center">
                  <StatusIndicator
                    status={row.sulamericaDireto.status}
                    psOnly={row.sulamericaDireto.psOnly}
                  />
                </td>
                <td className="px-3 py-3 text-center">
                  <StatusIndicator
                    status={row.sulamericaEspecial.status}
                    psOnly={row.sulamericaEspecial.psOnly}
                  />
                </td>
                <td className="px-3 py-3 text-center">
                  <StatusIndicator
                    status={row.amilS380.status}
                    psOnly={row.amilS380.psOnly}
                  />
                </td>
                <td className="px-3 py-3 text-center">
                  <StatusIndicator
                    status={row.portoP320.status}
                    psOnly={row.portoP320.psOnly}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile Card List */}
      <div className="mt-4 space-y-3 lg:hidden">
        {rows.map((row) => (
          <article
            key={row.id}
            className="rounded-xl border border-slate-200 bg-white p-4 print-break-inside-avoid"
          >
            <div className="flex items-start justify-between gap-2">
              <div>
                <h4 className="font-display text-sm font-bold text-navy-900">
                  {row.name}
                </h4>
                <p className="mt-0.5 text-[11px] text-slate-500">
                  {row.city} · {row.documentedModality}
                </p>
              </div>
            </div>

            <dl className="mt-3 grid grid-cols-2 gap-2 border-t border-slate-100 pt-3 text-xs">
              <div className="flex items-center justify-between gap-2 rounded-md bg-slate-50 px-2.5 py-1.5">
                <dt className="text-[11px] text-slate-600">SulAmérica D. Nac.</dt>
                <dd>
                  <StatusIndicator
                    status={row.sulamericaDireto.status}
                    psOnly={row.sulamericaDireto.psOnly}
                  />
                </dd>
              </div>
              <div className="flex items-center justify-between gap-2 rounded-md bg-slate-50 px-2.5 py-1.5">
                <dt className="text-[11px] text-slate-600">SulAmérica Esp. 100</dt>
                <dd>
                  <StatusIndicator
                    status={row.sulamericaEspecial.status}
                    psOnly={row.sulamericaEspecial.psOnly}
                  />
                </dd>
              </div>
              <div className="flex items-center justify-between gap-2 rounded-md bg-slate-50 px-2.5 py-1.5">
                <dt className="text-[11px] text-slate-600">Amil S380 QC</dt>
                <dd>
                  <StatusIndicator
                    status={row.amilS380.status}
                    psOnly={row.amilS380.psOnly}
                  />
                </dd>
              </div>
              <div className="flex items-center justify-between gap-2 rounded-md bg-slate-50 px-2.5 py-1.5">
                <dt className="text-[11px] text-slate-600">Porto P320 E</dt>
                <dd>
                  <StatusIndicator
                    status={row.portoP320.status}
                    psOnly={row.portoP320.psOnly}
                  />
                </dd>
              </div>
            </dl>
          </article>
        ))}
      </div>
    </>
  );
}
