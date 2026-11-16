import { useState } from 'react';
import { ArrowRightLeft, ChevronDown, ChevronUp, Info, TrendingDown } from 'lucide-react';
import {
  formatBRL,
  PLANS_FINANCIAL,
  type PlanId,
} from '../data/comparisonData';

export function FinancialSection() {
  const [period, setPeriod] = useState<'monthly' | 'annual'>('monthly');
  const [showPortoBreakdown, setShowPortoBreakdown] = useState(true);
  const [compareA, setCompareA] = useState<PlanId>('sulamerica');
  const [compareB, setCompareB] = useState<PlanId>('amil');

  const maxChartValue =
    period === 'monthly' ? 19390.08 : 19390.08 * 12;

  const planA = PLANS_FINANCIAL.find((p) => p.id === compareA) ?? PLANS_FINANCIAL[0];
  const planB = PLANS_FINANCIAL.find((p) => p.id === compareB) ?? PLANS_FINANCIAL[1];

  const valueA = period === 'monthly' ? planA.monthlyValue : planA.annualValue;
  const valueB = period === 'monthly' ? planB.monthlyValue : planB.annualValue;
  const diffAB = valueA - valueB;
  const perLifeDiffAB = planA.avgPerLife - planB.avgPerLife;

  return (
    <section id="comparativo-financeiro" className="bg-slate-50 py-14 sm:py-20">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold tracking-wide text-orange-600">
              01. Comparativo Financeiro · 48 vidas analisadas
            </p>
            <h2
              className="mt-2 font-display text-2xl font-bold tracking-tight text-navy-900 sm:text-3xl"
              style={{ textWrap: 'balance' }}
            >
              Investimento mensal, projeção anual e composição real da apólice
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-slate-600 sm:text-base">
              Todos os cenários consideram o conjunto completo de 48 beneficiários. Na SulAmérica, os valores consolidam dois produtos distintos vigentes na mesma apólice.
            </p>
          </div>

          <div
            className="inline-flex self-start rounded-lg border border-slate-200 bg-white p-1 shrink-0"
            role="group"
            aria-label="Alternar período financeiro"
          >
            <button
              type="button"
              onClick={() => setPeriod('monthly')}
              className={`rounded-md px-4 py-2 text-xs font-semibold transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                period === 'monthly'
                  ? 'bg-navy-900 text-white'
                  : 'text-slate-600 hover:text-navy-900'
              }`}
            >
              Valores mensais
            </button>
            <button
              type="button"
              onClick={() => setPeriod('annual')}
              className={`rounded-md px-4 py-2 text-xs font-semibold transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                period === 'annual'
                  ? 'bg-navy-900 text-white'
                  : 'text-slate-600 hover:text-navy-900'
              }`}
            >
              Projeção 12 meses
            </button>
          </div>
        </div>

        {/* 3 Main Financial Cards */}
        <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {PLANS_FINANCIAL.map((plan) => {
            const displayAmount =
              period === 'monthly' ? plan.monthlyValue : plan.annualValue;
            const displaySavings =
              period === 'monthly' ? plan.savingsMonthly : plan.savingsAnnual;

            return (
              <article
                key={plan.id}
                className={`flex flex-col justify-between rounded-xl border bg-white p-6 print-break-inside-avoid ${
                  plan.isCurrent
                    ? 'border-navy-900/25'
                    : 'border-slate-200'
                }`}
              >
                <div>
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <p className="text-xs font-medium text-slate-500">
                        {plan.badgeText}
                      </p>
                      <h3 className="mt-1 font-display text-xl font-bold text-navy-900">
                        {plan.name}
                      </h3>
                    </div>
                  </div>

                  <div className="mt-6 border-y border-slate-100 py-5">
                    <div className="text-xs font-medium text-slate-500">
                      {period === 'monthly'
                        ? plan.isSubtotal
                          ? 'Subtotal mensal (48 vidas)'
                          : 'Valor mensal (48 vidas)'
                        : plan.isSubtotal
                          ? 'Projeção 12 meses sobre subtotal (sem reajuste)'
                          : 'Projeção 12 meses (sem reajuste)'}
                    </div>
                    <div className="mt-1 font-mono text-3xl font-semibold tracking-tight text-navy-900 tabular-nums">
                      {formatBRL(displayAmount)}
                    </div>
                    <div className="mt-2 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-slate-600 tabular-nums">
                      <span>
                        Média mensal por vida:{' '}
                        <strong className="font-mono font-semibold text-navy-900">
                          {formatBRL(plan.avgPerLife)}
                        </strong>
                      </span>
                      <span aria-hidden="true">·</span>
                      <span>{plan.lives} vidas</span>
                    </div>
                  </div>

                  {/* SulAmérica Composition */}
                  {plan.composition && (
                    <div className="mt-5">
                      <div className="text-xs font-semibold text-navy-900">
                        Composição da apólice atual
                      </div>
                      <dl className="mt-2.5 space-y-2 text-xs">
                        {plan.composition.map((item) => (
                          <div
                            key={item.label}
                            className="flex items-center justify-between gap-2 border-b border-slate-100 pb-2 last:border-b-0 last:pb-0"
                          >
                            <dt className="text-slate-700">
                              <span className="font-semibold text-navy-900">
                                {item.label}
                              </span>{' '}
                              <span className="text-slate-500 tabular-nums">
                                ({item.lives} vidas)
                              </span>
                            </dt>
                            <dd className="font-mono font-medium text-navy-900 tabular-nums">
                              {formatBRL(
                                period === 'monthly'
                                  ? item.monthlyValue
                                  : item.monthlyValue * 12
                              )}
                            </dd>
                          </div>
                        ))}
                      </dl>
                      <p className="mt-2.5 text-[11px] leading-relaxed text-slate-500">
                        Importante: os 48 segurados não estão concentrados apenas no Direto Nacional; 5 vidas pertencem ao Especial 100 com rede diferenciada.
                      </p>
                    </div>
                  )}

                  {/* Characteristics for alternatives */}
                  {!plan.composition && (
                    <ul className="mt-5 space-y-2 text-xs text-slate-700">
                      {plan.characteristics.map((feat) => (
                        <li key={feat} className="flex items-start gap-2">
                          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 bg-orange-600" aria-hidden="true" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                  {/* Porto Budget Breakdown */}
                  {plan.budgetBreakdown && (
                    <div className="mt-5 border-t border-slate-100 pt-4">
                      <button
                        type="button"
                        onClick={() => setShowPortoBreakdown((prev) => !prev)}
                        className="flex w-full items-center justify-between text-left text-xs font-semibold text-navy-900 hover:text-orange-600 cursor-pointer"
                        aria-expanded={showPortoBreakdown}
                      >
                        <span>Detalhamento do orçamento Porto</span>
                        {showPortoBreakdown ? (
                          <ChevronUp className="h-4 w-4 shrink-0" />
                        ) : (
                          <ChevronDown className="h-4 w-4 shrink-0" />
                        )}
                      </button>

                      {showPortoBreakdown && (
                        <dl className="mt-3 space-y-1.5 bg-slate-50 p-3 text-xs rounded-lg">
                          <div className="flex justify-between gap-2">
                            <dt className="text-slate-600">Subtotal mensal</dt>
                            <dd className="font-mono font-medium text-navy-900 tabular-nums">
                              {formatBRL(plan.budgetBreakdown.subtotal)}
                            </dd>
                          </div>
                          <div className="flex justify-between gap-2">
                            <dt className="text-slate-600">Taxa de inscrição</dt>
                            <dd className="font-mono font-medium text-navy-900 tabular-nums">
                              {formatBRL(plan.budgetBreakdown.registrationFee)}
                            </dd>
                          </div>
                          <div className="flex justify-between gap-2">
                            <dt className="text-slate-600">IOF</dt>
                            <dd className="font-mono font-medium text-navy-900 tabular-nums">
                              {formatBRL(plan.budgetBreakdown.iof)}
                            </dd>
                          </div>
                          <div className="flex justify-between gap-2 border-t border-slate-200 pt-1.5 font-semibold text-navy-900">
                            <dt>Total indicado na proposta</dt>
                            <dd className="font-mono tabular-nums">
                              {formatBRL(plan.budgetBreakdown.proposalTotal)}
                            </dd>
                          </div>
                        </dl>
                      )}
                    </div>
                  )}
                </div>

                {/* Economy Footer inside Alternative Cards */}
                <div className="mt-6 pt-4 border-t border-slate-100">
                  {displaySavings ? (
                    <div className="rounded-lg bg-emerald-50/80 px-3.5 py-3">
                      <div className="flex items-center gap-1.5 text-xs font-medium text-emerald-900">
                        <TrendingDown className="h-4 w-4 text-emerald-700 shrink-0" aria-hidden="true" />
                        <span>
                          {plan.isSubtotal
                            ? period === 'monthly'
                              ? 'Economia mensal (sobre o subtotal)'
                              : 'Economia em 12 meses (sobre o subtotal)'
                            : period === 'monthly'
                              ? 'Economia mensal estimada'
                              : 'Economia projetada em 12 meses'}
                        </span>
                      </div>
                      <div className="mt-1 font-mono text-lg font-bold text-emerald-800 tabular-nums">
                        {formatBRL(displaySavings)}
                      </div>
                    </div>
                  ) : (
                    <div className="rounded-lg bg-slate-50 px-3.5 py-3 text-xs text-slate-600">
                      Referência base para cálculo comparativo das alternativas (48 vidas).
                    </div>
                  )}
                  <div className="mt-3 text-[11px] text-slate-500">
                    Fonte: {plan.sourceRef}
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* Savings Disclaimer */}
        <div className="mt-5 flex items-start gap-2.5 text-xs text-slate-600">
          <Info className="mt-0.5 h-4 w-4 shrink-0 text-navy-700" aria-hidden="true" />
          <p>
            A economia é ilustrativa e não inclui eventuais diferenças de tributação, taxas (como taxa de inscrição e IOF na proposta Porto), coparticipação ou utilização. Projeções anuais multiplicam exatamente por 12 meses sem considerar reajustes futuros.
          </p>
        </div>

        {/* Horizontal Savings Comparison Chart + 2-Option Comparator */}
        <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-12">
          <div className="rounded-xl border border-slate-200 bg-white p-6 sm:p-8 lg:col-span-7 print-break-inside-avoid">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div>
                <h3 className="font-display text-lg font-bold text-navy-900">
                  Gráfico comparativo de investimento ({period === 'monthly' ? 'Mensal' : '12 meses sem reajuste'})
                </h3>
                <p className="mt-1 text-xs text-slate-500">
                  Comparativo direto para 48 vidas (Porto Saúde representado pelo subtotal antes de IOF e taxa).
                </p>
              </div>
            </div>

            <div className="mt-7 space-y-6">
              {PLANS_FINANCIAL.map((plan) => {
                const value =
                  period === 'monthly' ? plan.monthlyValue : plan.annualValue;
                const widthPct = Math.round((value / maxChartValue) * 100);
                const savings =
                  period === 'monthly' ? plan.savingsMonthly : plan.savingsAnnual;

                return (
                  <div key={plan.id}>
                    <div className="flex flex-wrap items-baseline justify-between gap-2 text-sm">
                      <div className="font-semibold text-navy-900">
                        {plan.shortName}
                        {plan.isSubtotal && (
                          <span className="ml-1.5 text-xs font-normal text-slate-500">
                            (subtotal)
                          </span>
                        )}
                      </div>
                      <div className="flex items-baseline gap-3">
                        {savings && (
                          <span className="text-xs font-medium text-emerald-800 tabular-nums">
                            − {formatBRL(savings)}
                          </span>
                        )}
                        <span className="font-mono font-semibold text-navy-900 tabular-nums">
                          {formatBRL(value)}
                        </span>
                      </div>
                    </div>

                    <div className="mt-2 h-8 w-full overflow-hidden rounded-md bg-slate-100">
                      <div
                        className={`flex h-full items-center justify-end px-3 text-[11px] font-medium text-white transition-all duration-300 ${
                          plan.id === 'sulamerica'
                            ? 'bg-navy-900'
                            : plan.id === 'amil'
                              ? 'bg-orange-600'
                              : 'bg-navy-700'
                        }`}
                        style={{ width: `${widthPct}%` }}
                      >
                        <span className="tabular-nums">{widthPct}%</span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="mt-7 border-t border-slate-100 pt-4">
              <p className="text-sm font-semibold text-navy-900">
                O preço é apenas parte da escolha. A rede credenciada e os benefícios também precisam ser analisados.
              </p>
            </div>
          </div>

          {/* Interactive 2-option Head-to-Head Comparator */}
          <div className="rounded-xl border border-slate-200 bg-white p-6 sm:p-8 lg:col-span-5 print-break-inside-avoid">
            <div className="flex items-center gap-2 text-xs font-semibold text-orange-600">
              <ArrowRightLeft className="h-4 w-4" aria-hidden="true" />
              <span>Comparador direto entre duas opções</span>
            </div>
            <h3 className="mt-2 font-display text-lg font-bold text-navy-900">
              Simule o confronto lado a lado
            </h3>

            <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
              <div>
                <label htmlFor="compare-a" className="block text-xs font-medium text-slate-600">
                  Cenário A
                </label>
                <select
                  id="compare-a"
                  value={compareA}
                  onChange={(e) => setCompareA(e.target.value as PlanId)}
                  className="mt-1 w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-xs font-medium text-navy-900 focus:border-orange-600 focus:outline-none"
                >
                  {PLANS_FINANCIAL.map((p) => (
                    <option key={p.id} value={p.id}>
                      {p.shortName}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label htmlFor="compare-b" className="block text-xs font-medium text-slate-600">
                  Cenário B
                </label>
                <select
                  id="compare-b"
                  value={compareB}
                  onChange={(e) => setCompareB(e.target.value as PlanId)}
                  className="mt-1 w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-xs font-medium text-navy-900 focus:border-orange-600 focus:outline-none"
                >
                  {PLANS_FINANCIAL.map((p) => (
                    <option key={p.id} value={p.id}>
                      {p.shortName}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="mt-6 space-y-4 border-t border-slate-100 pt-5 text-xs">
              <div className="flex items-center justify-between gap-2">
                <span className="text-slate-600">{planA.shortName}</span>
                <span className="font-mono font-semibold text-navy-900 tabular-nums">
                  {formatBRL(valueA)}
                </span>
              </div>
              <div className="flex items-center justify-between gap-2">
                <span className="text-slate-600">{planB.shortName}</span>
                <span className="font-mono font-semibold text-navy-900 tabular-nums">
                  {formatBRL(valueB)}
                </span>
              </div>
              <div className="flex items-center justify-between gap-2 border-t border-slate-100 pt-3">
                <span className="font-semibold text-navy-900">
                  Diferença ({period === 'monthly' ? 'mês' : '12 meses'})
                </span>
                <span
                  className={`font-mono text-sm font-bold tabular-nums ${
                    diffAB > 0
                      ? 'text-emerald-800'
                      : diffAB < 0
                        ? 'text-navy-900'
                        : 'text-slate-500'
                  }`}
                >
                  {diffAB === 0
                    ? 'R$ 0,00'
                    : diffAB > 0
                      ? `${planB.shortName} economiza ${formatBRL(diffAB)}`
                      : `${planA.shortName} economiza ${formatBRL(Math.abs(diffAB))}`}
                </span>
              </div>
              <div className="flex items-center justify-between gap-2">
                <span className="text-slate-600">Diferença média mensal por vida</span>
                <span className="font-mono font-medium text-navy-900 tabular-nums">
                  {formatBRL(Math.abs(perLifeDiffAB))}
                </span>
              </div>
              <div className="rounded-lg bg-slate-50 p-3 text-[11px] leading-relaxed text-slate-600">
                {compareA === compareB
                  ? 'Selecione dois planos diferentes para visualizar o impacto financeiro e assistencial entre as opções.'
                  : `${planB.shortName}: ${planB.characteristics[0]}. Confira abaixo na matriz de rede como cada opção atende Alphaville, Barueri e Osasco.`}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
