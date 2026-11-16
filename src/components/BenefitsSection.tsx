import { BriefcaseMedical, Building2, Wallet } from 'lucide-react';
import { BENEFITS_COMPARISON } from '../data/comparisonData';

export function BenefitsSection() {
  return (
    <section id="comparativo-beneficios" className="border-t border-slate-200 bg-white py-14 sm:py-20">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-xs font-semibold tracking-wide text-orange-600">
            04. Comparativo de Benefícios & Transição
          </p>
          <h2
            className="mt-2 font-display text-2xl font-bold tracking-tight text-navy-900 sm:text-3xl"
            style={{ textWrap: 'balance' }}
          >
            Coberturas, coparticipação e benefícios empresariais documentados
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-slate-600 sm:text-base">
            Comparação consolidada dos itens previstos nas propostas e nas condições analisadas, sem atribuir serviços gerais da operadora como garantias automáticas de um produto específico.
          </p>
        </div>

        {/* 3 Summary Cards by Operator */}
        <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-3">
          <article className="rounded-xl border border-slate-200 bg-slate-50/60 p-6 print-break-inside-avoid">
            <div className="text-xs font-medium text-slate-500">Apólice vigente (43 + 5 vidas)</div>
            <h3 className="mt-1 font-display text-lg font-bold text-navy-900">
              SulAmérica — Apólice Atual
            </h3>
            <ul className="mt-4 space-y-2 text-xs leading-relaxed text-slate-700">
              <li>• Composta por Direto Nacional (43 vidas) e Especial 100 (5 vidas).</li>
              <li>• Rede assistencial distinta entre os dois produtos vigentes.</li>
              <li>• Não inferir benefícios adicionais apenas pelo nome comercial — validar sempre nas condições gerais da apólice vigente.</li>
            </ul>
          </article>

          <article className="rounded-xl border border-slate-200 bg-white p-6 print-break-inside-avoid">
            <div className="text-xs font-medium text-slate-500">Proposta alternativa · Nov/2026</div>
            <h3 className="mt-1 font-display text-lg font-bold text-navy-900">
              Amil S380 QC
            </h3>
            <ul className="mt-4 space-y-2 text-xs leading-relaxed text-slate-700">
              <li>• Abrangência nacional e acomodação enfermaria.</li>
              <li>• Coparticipação e reembolso previstos no produto.</li>
              <li>• Rede hospitalar e laboratorial relacionada na proposta (Alphaville, Barueri, Carapicuíba e Osasco).</li>
              <li>• Sem odontologia gratuita, seguro de vida ou saúde ocupacional indicados na proposta analisada.</li>
            </ul>
          </article>

          <article className="rounded-xl border border-slate-200 bg-white p-6 print-break-inside-avoid">
            <div className="text-xs font-medium text-slate-500">Proposta alternativa · Out/2026</div>
            <h3 className="mt-1 font-display text-lg font-bold text-navy-900">
              Porto Saúde P320 E Copar
            </h3>
            <ul className="mt-4 space-y-2 text-xs leading-relaxed text-slate-700">
              <li>• Abrangência nacional, enfermaria, coparticipação de 30% e reembolso.</li>
              <li>• Itens identificados no orçamento: Odontológico Bronze 10, Seguro de vida e Saúde ocupacional.</li>
              <li>• Telemedicina 24 horas, Time Médico Porto, programas de promoção à saúde e descontos em farmácias conforme condições e elegibilidade contratual.</li>
            </ul>
          </article>
        </div>

        {/* Consolidated 13-Row Table */}
        <div className="mt-8 overflow-x-auto rounded-xl border border-slate-200">
          <table className="w-full min-w-[760px] border-collapse text-left text-xs">
            <thead>
              <tr className="border-b border-slate-200 bg-navy-900 text-white">
                <th scope="col" className="w-[22%] px-4 py-3.5 font-semibold">
                  Dimensão avaliada
                </th>
                <th scope="col" className="w-[26%] px-4 py-3.5 font-semibold">
                  SulAmérica (Apólice Atual)
                </th>
                <th scope="col" className="w-[26%] px-4 py-3.5 font-semibold">
                  Amil S380 QC
                </th>
                <th scope="col" className="w-[26%] px-4 py-3.5 font-semibold">
                  Porto P320 E Copar
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 bg-white">
              {BENEFITS_COMPARISON.map((row) => (
                <tr key={row.id} className="hover:bg-slate-50/70">
                  <th scope="row" className="px-4 py-3 font-semibold text-navy-900 align-top">
                    {row.dimension}
                  </th>
                  <td className="px-4 py-3 text-slate-700 align-top leading-relaxed">
                    {row.sulamerica}
                  </td>
                  <td className="px-4 py-3 text-slate-700 align-top leading-relaxed">
                    {row.amil}
                  </td>
                  <td className="px-4 py-3 text-slate-700 align-top leading-relaxed">
                    {row.porto}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Section 11: O que muda quando sua empresa troca de plano? */}
        <div className="mt-14 border-t border-slate-200 pt-12">
          <div className="max-w-2xl">
            <h3 className="font-display text-2xl font-bold tracking-tight text-navy-900">
              O que muda quando sua empresa troca de plano?
            </h3>
            <p className="mt-2 text-sm text-slate-600">
              A avaliação de transição considera três critérios objetivos, sem estabelecer um vencedor único sem conhecer o perfil de utilização da equipe.
            </p>
          </div>

          <div className="mt-7 grid grid-cols-1 gap-6 md:grid-cols-3">
            <div className="rounded-xl border border-slate-200 bg-slate-50 p-6 print-break-inside-avoid">
              <Wallet className="h-5 w-5 text-orange-600" aria-hidden="true" />
              <h4 className="mt-3 font-display text-lg font-bold text-navy-900">
                Investimento
              </h4>
              <p className="mt-2 text-xs leading-relaxed text-slate-700">
                Hoje a empresa investe <strong className="font-mono text-navy-900">R$ 19.390,08/mês</strong> (48 vidas). A troca para Amil S380 QC representa redução ilustrativa de <strong className="font-mono text-emerald-800">R$ 3.897,55/mês</strong>; na Porto P320 E, a redução sobre o subtotal é de <strong className="font-mono text-emerald-800">R$ 3.147,09/mês</strong> (observando que a proposta soma IOF e taxa de inscrição no total inicial de R$ 16.875,29).
              </p>
            </div>

            <div className="rounded-xl border border-slate-200 bg-slate-50 p-6 print-break-inside-avoid">
              <Building2 className="h-5 w-5 text-orange-600" aria-hidden="true" />
              <h4 className="mt-3 font-display text-lg font-bold text-navy-900">
                Atendimento local
              </h4>
              <p className="mt-2 text-xs leading-relaxed text-slate-700">
                Em Barueri/Alphaville e Osasco, cada produto prioriza prestadores diferentes: SulAmérica mantém São Luiz Osasco e Delboni (com São Luiz Alphaville e A+ apenas nas 5 vidas do Especial 100); Amil S380 QC oferece PS 9 de Julho Alphaville, Alpha Med, hospitais em Osasco e ampla rede A+/Lavoisier; Porto P320 E confirma Hospitalis, PS Barueri, Cruzeiro do Sul e São Francisco.
              </p>
            </div>

            <div className="rounded-xl border border-slate-200 bg-slate-50 p-6 print-break-inside-avoid">
              <BriefcaseMedical className="h-5 w-5 text-orange-600" aria-hidden="true" />
              <h4 className="mt-3 font-display text-lg font-bold text-navy-900">
                Benefícios empresariais
              </h4>
              <p className="mt-2 text-xs leading-relaxed text-slate-700">
                Na documentação analisada, a proposta Porto Saúde P320 E Copar destaca pacote adicional com Odontológico Bronze 10, Seguro de vida, Saúde ocupacional, Telemedicina 24h, Time Médico Porto e descontos em farmácias (conforme elegibilidade). Na Amil S380 QC, a proposta concentra-se na cobertura médico-hospitalar e reembolso.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
