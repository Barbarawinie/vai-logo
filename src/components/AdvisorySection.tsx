import { ArrowUpRight, Compass, Download, HeartHandshake, Layers, TrendingDown } from 'lucide-react';
import { DOCUMENT_REFERENCES, PLANS_FINANCIAL } from '../data/comparisonData';

interface AdvisorySectionProps {
  onOpenConsultant: () => void;
  onExportPdf: () => void;
}

export function AdvisorySection({
  onOpenConsultant,
  onExportPdf,
}: AdvisorySectionProps) {
  return (
    <>
      {/* Section 13: Área de Recomendação Consultiva */}
      <section
        id="recomendacao-consultiva"
        className="border-t border-slate-200 bg-slate-50 py-14 sm:py-20"
      >
        <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold tracking-wide text-orange-600">
              05. Recomendação Consultiva
            </p>
            <h2
              className="mt-2 font-display text-2xl font-bold tracking-tight text-navy-900 sm:text-3xl"
              style={{ textWrap: 'balance' }}
            >
              A melhor escolha depende de como sua equipe utiliza o plano.
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-slate-600 sm:text-base">
              Uma migração eficiente equilibra orçamento, continuidade assistencial dos colaboradores e serviços que realmente fazem diferença na rotina da empresa — não apenas o menor valor nominal da mensalidade.
            </p>
          </div>

          {/* 3 Decision Axes */}
          <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">
            <div className="rounded-xl border border-slate-200 bg-white p-6 print-break-inside-avoid">
              <TrendingDown className="h-5 w-5 text-orange-600" aria-hidden="true" />
              <h3 className="mt-3 font-display text-lg font-bold text-navy-900">
                Redução de custos
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-slate-600">
                Comparar mensalidades, projeções em 12 meses e encargos iniciais (como IOF e taxa de inscrição), avaliando também o efeito da coparticipação conforme o histórico de sinistro e uso da empresa.
              </p>
            </div>

            <div className="rounded-xl border border-slate-200 bg-white p-6 print-break-inside-avoid">
              <HeartHandshake className="h-5 w-5 text-orange-600" aria-hidden="true" />
              <h3 className="mt-3 font-display text-lg font-bold text-navy-900">
                Continuidade de atendimento
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-slate-600">
                Mapear quais hospitais, pronto-socorros e laboratórios em Alphaville, Barueri e Osasco são efetivamente utilizados pelos 48 beneficiários — especialmente no caso das 5 vidas hoje no Especial 100.
              </p>
            </div>

            <div className="rounded-xl border border-slate-200 bg-white p-6 print-break-inside-avoid">
              <Layers className="h-5 w-5 text-orange-600" aria-hidden="true" />
              <h3 className="mt-3 font-display text-lg font-bold text-navy-900">
                Valor agregado
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-slate-600">
                Analisar os benefícios empresariais documentados em cada proposta — como odontológico, seguro de vida, saúde ocupacional e telemedicina — verificando o que substitui custos que a empresa já paga à parte.
              </p>
            </div>
          </div>

          {/* Objective Strengths and Limitations per Option */}
          <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-3">
            {PLANS_FINANCIAL.map((plan) => (
              <article
                key={plan.id}
                className="rounded-xl border border-slate-200 bg-white p-6 print-break-inside-avoid"
              >
                <div className="flex items-center justify-between gap-2">
                  <h3 className="font-display text-lg font-bold text-navy-900">
                    {plan.shortName}
                  </h3>
                  <Compass className="h-4 w-4 text-slate-400 shrink-0" aria-hidden="true" />
                </div>

                <div className="mt-4">
                  <div className="text-xs font-semibold text-emerald-800">
                    Pontos fortes identificados
                  </div>
                  <ul className="mt-2 space-y-2 text-xs leading-relaxed text-slate-700">
                    {plan.strengths.map((s) => (
                      <li key={s} className="flex items-start gap-2">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 bg-emerald-700" aria-hidden="true" />
                        <span>{s}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-5 border-t border-slate-100 pt-4">
                  <div className="text-xs font-semibold text-slate-700">
                    Pontos de atenção e limitações
                  </div>
                  <ul className="mt-2 space-y-2 text-xs leading-relaxed text-slate-600">
                    {plan.limitations.map((l) => (
                      <li key={l} className="flex items-start gap-2">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 bg-slate-400" aria-hidden="true" />
                        <span>{l}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Section 15: Encerramento Comercial */}
      <section className="bg-navy-900 py-14 text-white sm:py-20">
        <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
            <div className="max-w-2xl">
              <p className="text-xs font-semibold tracking-wide text-orange-400">
                4K Saúde e Benefícios
              </p>
              <h2
                className="mt-2 font-display text-3xl font-bold tracking-tight text-white sm:text-4xl"
                style={{ textWrap: 'balance' }}
              >
                Cuidado inteligente. Escolhas seguras.
              </h2>
              <p className="mt-3 text-base leading-relaxed text-slate-200">
                “Na 4K Saúde e Benefícios, transformamos informações complexas em decisões mais claras para sua empresa.”
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-4 no-print">
              <button
                type="button"
                onClick={onOpenConsultant}
                className="inline-flex min-h-[44px] items-center justify-center gap-2 rounded-lg bg-orange-600 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-orange-500 whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-400"
              >
                <span>Falar com um consultor</span>
                <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </button>

              <button
                type="button"
                onClick={onExportPdf}
                className="inline-flex min-h-[44px] items-center justify-center gap-2 rounded-lg border border-white/25 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/15 whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                <Download className="h-4 w-4" aria-hidden="true" />
                <span>Exportar comparativo</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Section 14: Rodapé e Condições */}
      <footer className="border-t border-slate-200 bg-white py-10 text-xs text-slate-600">
        <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-12">
            <div className="md:col-span-6 space-y-2.5">
              <div className="font-display text-sm font-bold text-navy-900">
                4K Saúde e Benefícios
              </div>
              <p className="leading-relaxed">
                Estudo comparativo elaborado pela 4K Saúde e Benefícios com base nas informações das propostas comerciais e das lâminas de rede credenciada disponíveis.
              </p>
              <p className="leading-relaxed">
                Redes e serviços sujeitos a atualização, disponibilidade e condições específicas de cada operadora.
              </p>
              <p className="font-medium text-navy-900">
                Os credenciamentos apresentados são uma conferência documental, não uma garantia de disponibilidade em tempo real.
              </p>
            </div>

            <div className="md:col-span-6">
              <div className="font-semibold text-navy-900">Referências documentais</div>
              <dl className="mt-3 space-y-2">
                {DOCUMENT_REFERENCES.map((ref) => (
                  <div key={ref.operator} className="border-b border-slate-100 pb-2 last:border-b-0">
                    <dt className="font-semibold text-navy-900">
                      {ref.operator} · {ref.date}
                    </dt>
                    <dd className="text-slate-600">{ref.document}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
