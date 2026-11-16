import { useState } from 'react';
import { ArrowDownRight, Building2, MapPin, ShieldCheck, Users } from 'lucide-react';

export function HeroSection() {
  const [imgError, setImgError] = useState(false);

  return (
    <section id="topo" className="relative overflow-hidden bg-navy-900 text-white">
      <div className="mx-auto max-w-[1200px] px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
        <div className="grid grid-cols-1 items-stretch gap-10 lg:grid-cols-12 lg:gap-12">
          <div className="flex flex-col justify-between lg:col-span-7">
            <div>
              <p className="text-xs font-medium tracking-wide text-slate-300">
                Consultoria em Saúde Empresarial · Estudo Comparativo de Benefícios
              </p>

              <h1
                className="mt-4 font-display font-bold tracking-tight text-white leading-[1.12]"
                style={{
                  fontSize: 'clamp(2.15rem, 3.6vw, 3.35rem)',
                  textWrap: 'balance',
                }}
              >
                O melhor plano não é apenas o mais barato. É aquele que faz mais sentido para sua empresa.
              </h1>

              <p className="mt-5 max-w-2xl text-base leading-relaxed text-slate-200 sm:text-lg">
                “Uma análise completa de investimento, rede credenciada, qualidade de atendimento e benefícios para uma decisão empresarial mais segura.”
              </p>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-6 pt-2">
              <a
                href="#comparativo-financeiro"
                className="inline-flex min-h-[44px] items-center justify-center gap-2 rounded-lg bg-orange-600 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-orange-500 whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-400"
              >
                <span>Explorar comparativo</span>
                <ArrowDownRight className="h-4 w-4" aria-hidden="true" />
              </a>

              <div className="flex items-center gap-3 border-l border-white/20 pl-5">
                <Users className="h-5 w-5 text-orange-400 shrink-0" aria-hidden="true" />
                <div>
                  <div className="font-display text-lg font-bold text-white tabular-nums">
                    48 vidas analisadas
                  </div>
                  <div className="text-xs text-slate-300">
                    SulAmérica Atual · Amil S380 QC · Porto P320 E
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="relative h-full min-h-[300px] overflow-hidden rounded-xl border border-white/15 bg-navy-950">
              {!imgError ? (
                <img
                  src="/src/assets/images/hero_benefits_advisory_1794850880082.jpg"
                  alt="Arquitetura corporativa contemporânea representando gestão estruturada de saúde e benefícios empresariais"
                  referrerPolicy="no-referrer"
                  onError={() => setImgError(true)}
                  className="h-full w-full object-cover opacity-85"
                />
              ) : (
                <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-navy-800 to-navy-950 p-8">
                  <Building2 className="h-16 w-16 text-slate-400" aria-hidden="true" />
                </div>
              )}

              <div className="absolute inset-0 bg-gradient-to-t from-navy-950/90 via-navy-950/35 to-transparent" />

              {/* Modern analytical benefits vector graphic overlay */}
              <div className="absolute inset-x-0 bottom-0 p-6">
                <svg
                  viewBox="0 0 360 88"
                  className="mb-4 w-full max-w-[340px]"
                  role="img"
                  aria-label="Diagrama de eixos do estudo: Investimento, Rede Local e Benefícios"
                >
                  <line x1="12" y1="68" x2="348" y2="68" stroke="rgba(255,255,255,0.2)" strokeWidth="1" />
                  <rect x="18" y="20" width="96" height="36" rx="4" fill="rgba(15, 39, 71, 0.88)" stroke="rgba(255,255,255,0.22)" />
                  <text x="30" y="36" fill="#CBD5E1" fontSize="9" fontFamily="DM Sans, sans-serif">EIXO 01</text>
                  <text x="30" y="49" fill="#FFFFFF" fontSize="11" fontWeight="600" fontFamily="Plus Jakarta Sans, sans-serif">Investimento</text>

                  <rect x="132" y="12" width="96" height="44" rx="4" fill="rgba(234, 88, 12, 0.92)" />
                  <text x="144" y="30" fill="#FFEDD5" fontSize="9" fontFamily="DM Sans, sans-serif">EIXO 02</text>
                  <text x="144" y="45" fill="#FFFFFF" fontSize="11" fontWeight="700" fontFamily="Plus Jakarta Sans, sans-serif">Rede Local</text>

                  <rect x="246" y="20" width="96" height="36" rx="4" fill="rgba(15, 39, 71, 0.88)" stroke="rgba(255,255,255,0.22)" />
                  <text x="258" y="36" fill="#CBD5E1" fontSize="9" fontFamily="DM Sans, sans-serif">EIXO 03</text>
                  <text x="258" y="49" fill="#FFFFFF" fontSize="11" fontWeight="600" fontFamily="Plus Jakarta Sans, sans-serif">Benefícios</text>

                  <circle cx="66" cy="68" r="3" fill="#94A3B8" />
                  <circle cx="180" cy="68" r="4" fill="#F97316" />
                  <circle cx="294" cy="68" r="3" fill="#94A3B8" />
                </svg>

                <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-slate-200">
                  <span className="inline-flex items-center gap-1.5">
                    <MapPin className="h-3.5 w-3.5 text-orange-400" aria-hidden="true" />
                    <span>Região prioritária: Alphaville e Barueri</span>
                  </span>
                  <span aria-hidden="true">·</span>
                  <span>Alameda Rio Negro (ref. nº 503)</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Clean 3-column executive baseline strip below the hero split */}
        <div className="mt-10 grid grid-cols-1 gap-6 border-t border-white/15 pt-8 sm:grid-cols-3">
          <div>
            <div className="text-xs font-medium text-slate-300">Base de cálculo financeira</div>
            <div className="mt-1 font-display text-xl font-bold text-white tabular-nums">
              48 vidas consolidadas
            </div>
            <p className="mt-1 text-xs text-slate-300">
              Apólice atual composta por 43 vidas no Direto Nacional e 5 vidas no Especial 100.
            </p>
          </div>
          <div>
            <div className="text-xs font-medium text-slate-300">Operadoras avaliadas</div>
            <div className="mt-1 font-display text-xl font-bold text-white">
              SulAmérica · Amil · Porto Saúde
            </div>
            <p className="mt-1 text-xs text-slate-300">
              Confronto direto entre apólice vigente, Amil S380 QC e Porto P320 E Copar.
            </p>
          </div>
          <div>
            <div className="text-xs font-medium text-slate-300">Rigor documental</div>
            <div className="mt-1 inline-flex items-center gap-2 font-display text-xl font-bold text-white">
              <ShieldCheck className="h-5 w-5 text-orange-400 shrink-0" aria-hidden="true" />
              <span>Conferência por produto</span>
            </div>
            <p className="mt-1 text-xs text-slate-300">
              Sem extrapolar redes de planos superiores nem presumir unidades sem confirmação.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
