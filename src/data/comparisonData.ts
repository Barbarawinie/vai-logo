export type PlanId = 'sulamerica' | 'amil' | 'porto';

export type CoverageStatus = 'consta' | 'nao_identificado';

export type RegionPriority = 'alphaville_barueri' | 'osasco_proximidades';

export interface PlanFinancial {
  id: PlanId;
  name: string;
  shortName: string;
  badgeText: string;
  lives: number;
  monthlyValue: number;
  annualValue: number;
  avgPerLife: number;
  isCurrent: boolean;
  isSubtotal?: boolean;
  savingsMonthly?: number;
  savingsAnnual?: number;
  composition?: {
    label: string;
    lives: number;
    monthlyValue: number;
  }[];
  budgetBreakdown?: {
    subtotal: number;
    registrationFee: number;
    iof: number;
    proposalTotal: number;
  };
  characteristics: string[];
  sourceRef: string;
  strengths: string[];
  limitations: string[];
}

export interface ProductCellStatus {
  status: CoverageStatus;
  psOnly?: boolean;
  modalityLabel?: string;
  source: string;
  date: string;
}

export interface NetworkTableRow {
  id: string;
  kind: 'hospital' | 'laboratorio';
  name: string;
  city: string;
  region: RegionPriority;
  documentedModality: string;
  verifiedLocation: string;
  mapZone: 'alphaville_rio_negro' | 'barueri_centro' | 'carapicuiba' | 'osasco';
  sulamericaDireto: ProductCellStatus;
  sulamericaEspecial: ProductCellStatus;
  amilS380: ProductCellStatus;
  portoP320: ProductCellStatus;
}

export interface BenefitComparisonRow {
  id: string;
  dimension: string;
  sulamerica: string;
  amil: string;
  porto: string;
}

export const TOTAL_LIVES = 48;

export const PLANS_FINANCIAL: PlanFinancial[] = [
  {
    id: 'sulamerica',
    name: 'SulAmérica — Apólice Atual',
    shortName: 'SulAmérica Atual',
    badgeText: 'Apólice vigente · 48 vidas (43 + 5)',
    lives: 48,
    monthlyValue: 19390.08,
    annualValue: 19390.08 * 12,
    avgPerLife: 403.96,
    isCurrent: true,
    composition: [
      {
        label: 'Direto Nacional',
        lives: 43,
        monthlyValue: 17229.12,
      },
      {
        label: 'Especial 100',
        lives: 5,
        monthlyValue: 2160.96,
      },
    ],
    characteristics: [
      'Composição mista: 43 vidas no Direto Nacional e 5 vidas no Especial 100',
      'Total consolidado da apólice para 48 beneficiários',
      'Rede assistencial distinta entre os dois produtos vigentes',
    ],
    sourceRef: 'Relatório de beneficiários e Rede Referenciada SulAmérica · Julho de 2025',
    strengths: [
      'Mantém a continuidade imediata dos atendimentos já em curso pela equipe.',
      'Os 5 beneficiários do Especial 100 contam com São Luiz Alphaville e A+ Barueri na lâmina consultada.',
      'As 43 vidas do Direto Nacional contam com Hospitalis Barueri, São Luiz Osasco, Delboni e Lavoisier Barueri.',
    ],
    limitations: [
      'Maior custo mensal consolidado entre os cenários analisados (R$ 19.390,08/mês).',
      'Os 43 segurados do Direto Nacional não possuem o mesmo credenciamento do Especial 100 (São Luiz Alphaville e A+ Barueri não constam na coluna D. Nacional ENF).',
      'Não há odontologia, seguro de vida ou saúde ocupacional identificados na conferência desta apólice.',
    ],
  },
  {
    id: 'amil',
    name: 'Amil S380 QC',
    shortName: 'Amil S380 QC',
    badgeText: 'Proposta alternativa · Enfermaria com coparticipação',
    lives: 48,
    monthlyValue: 15492.53,
    annualValue: 15492.53 * 12,
    avgPerLife: 322.76,
    isCurrent: false,
    savingsMonthly: 3897.55,
    savingsAnnual: 3897.55 * 12,
    characteristics: [
      'Cobertura nacional',
      'Acomodação enfermaria',
      'Com coparticipação',
      'Reembolso previsto no produto',
    ],
    sourceRef: 'Cotação Amil S380 QC · Págs. 2, 3 e 10 · Novembro de 2026',
    strengths: [
      'Menor mensalidade entre os cenários comparados (R$ 15.492,53/mês), gerando economia ilustrativa de R$ 3.897,55/mês.',
      'Presença laboratorial documentada em Alphaville (A+ Copacabana e Rio Negro; Lavoisier Rio Negro e Parque Barueri) e Osasco (A+ e Lavoisier).',
      'Pronto-socorro no Hospital Nove de Julho Alphaville e rede hospitalar em Carapicuíba (Alpha Med) e Osasco (Nossa Senhora de Fátima e Projeto Criança).',
    ],
    limitations: [
      'No Hospital Nove de Julho Alphaville, a proposta informa exclusivamente pronto-socorro (PS).',
      'Não consta inclusão de odontologia gratuita, seguro de vida ou saúde ocupacional na proposta analisada.',
      'Exige análise de adesão à coparticipação e adequação da rede hospitalar de internação em Barueri/Osasco.',
    ],
  },
  {
    id: 'porto',
    name: 'Porto Saúde P320 E Copar',
    shortName: 'Porto P320 E',
    badgeText: 'Proposta alternativa · Coparticipação 30%',
    lives: 48,
    monthlyValue: 16242.99,
    annualValue: 16242.99 * 12,
    avgPerLife: 338.4,
    isCurrent: false,
    isSubtotal: true,
    savingsMonthly: 3147.09,
    savingsAnnual: 3147.09 * 12,
    budgetBreakdown: {
      subtotal: 16242.99,
      registrationFee: 240.0,
      iof: 392.3,
      proposalTotal: 16875.29,
    },
    characteristics: [
      'Abrangência nacional',
      'Acomodação enfermaria',
      'Coparticipação de 30%',
      'Reembolso previsto no produto',
    ],
    sourceRef: 'Cotação Porto P320 E Copar e Rede Linha P · Outubro de 2026',
    strengths: [
      'Economia mensal ilustrativa de R$ 3.147,09 sobre o subtotal em relação à apólice atual.',
      'Rede hospitalar confirmada em Barueri e Osasco para P320: Hospitalis Barueri, Pronto-Socorro Barueri, Hospital Cruzeiro do Sul e Hospital São Francisco.',
      'Pacote amplo de benefícios identificados no orçamento: Odontológico Bronze 10, Seguro de vida, Saúde ocupacional, Telemedicina 24h, Time Médico Porto e descontos em farmácias.',
    ],
    limitations: [
      'Total da proposta na primeira parcela inclui Taxa de inscrição (R$ 240,00) e IOF (R$ 392,30), somando R$ 16.875,29.',
      'Hospital 9 de Julho Alphaville não consta na coluna P320 Enfermaria.',
      'Na rede laboratorial apresentada para o P320, o A+ Medicina Diagnóstica está confirmado em Osasco.',
    ],
  },
];

export const HOSPITALS_TABLE: NetworkTableRow[] = [
  // Alphaville e Barueri primeiro
  {
    id: 'hospitalis-barueri',
    kind: 'hospital',
    name: 'Hospitalis',
    city: 'Barueri',
    region: 'alphaville_barueri',
    documentedModality: 'Hospitalização e PS',
    verifiedLocation: 'Barueri — SP',
    mapZone: 'barueri_centro',
    sulamericaDireto: {
      status: 'consta',
      modalityLabel: 'Hospitalização e PS',
      source: 'Rede Referenciada SulAmérica, pág. 3',
      date: 'Julho de 2025',
    },
    sulamericaEspecial: {
      status: 'consta',
      modalityLabel: 'Hospitalização e PS',
      source: 'Rede Referenciada SulAmérica, pág. 3',
      date: 'Julho de 2025',
    },
    amilS380: {
      status: 'nao_identificado',
      source: 'Cotação Amil S380 QC (págs. 2, 3 e 10)',
      date: 'Novembro de 2026',
    },
    portoP320: {
      status: 'consta',
      modalityLabel: 'Hospital e PS',
      source: 'Rede Linha P Porto Saúde (págs. 1, 2, 7, 9 e 11)',
      date: 'Outubro de 2026',
    },
  },
  {
    id: 'sao-luiz-alphaville',
    kind: 'hospital',
    name: 'Hospital São Luiz Alphaville',
    city: 'Barueri (Alphaville)',
    region: 'alphaville_barueri',
    documentedModality: 'Hospital e PS',
    verifiedLocation: 'Alphaville, Barueri — SP',
    mapZone: 'alphaville_rio_negro',
    sulamericaDireto: {
      status: 'nao_identificado',
      source: 'Rede Referenciada SulAmérica, pág. 3',
      date: 'Julho de 2025',
    },
    sulamericaEspecial: {
      status: 'consta',
      modalityLabel: 'Hospital e PS',
      source: 'Rede Referenciada SulAmérica, pág. 3',
      date: 'Julho de 2025',
    },
    amilS380: {
      status: 'nao_identificado',
      source: 'Cotação Amil S380 QC (págs. 2, 3 e 10)',
      date: 'Novembro de 2026',
    },
    portoP320: {
      status: 'nao_identificado',
      source: 'Rede Linha P Porto Saúde (págs. 1, 2, 7, 9 e 11)',
      date: 'Outubro de 2026',
    },
  },
  {
    id: 'nove-de-julho-alphaville',
    kind: 'hospital',
    name: 'Hospital Nove de Julho Alphaville',
    city: 'Barueri (Alphaville)',
    region: 'alphaville_barueri',
    documentedModality: 'PS (somente pronto-socorro)',
    verifiedLocation: 'Alphaville, Barueri — SP',
    mapZone: 'alphaville_rio_negro',
    sulamericaDireto: {
      status: 'nao_identificado',
      source: 'Rede Referenciada SulAmérica, pág. 3',
      date: 'Julho de 2025',
    },
    sulamericaEspecial: {
      status: 'nao_identificado',
      source: 'Rede Referenciada SulAmérica, pág. 3',
      date: 'Julho de 2025',
    },
    amilS380: {
      status: 'consta',
      psOnly: true,
      modalityLabel: 'PS',
      source: 'Cotação Amil S380 QC, págs. 2, 3 e 10',
      date: 'Novembro de 2026',
    },
    portoP320: {
      status: 'nao_identificado',
      source: 'Rede Linha P Porto Saúde (págs. 1, 2, 7, 9 e 11)',
      date: 'Outubro de 2026',
    },
  },
  {
    id: 'ps-barueri',
    kind: 'hospital',
    name: 'Pronto-Socorro Barueri',
    city: 'Barueri',
    region: 'alphaville_barueri',
    documentedModality: 'PS (adulto, pediátrico e ortopédico)',
    verifiedLocation: 'Barueri — SP',
    mapZone: 'barueri_centro',
    sulamericaDireto: {
      status: 'nao_identificado',
      source: 'Rede Referenciada SulAmérica, pág. 3',
      date: 'Julho de 2025',
    },
    sulamericaEspecial: {
      status: 'nao_identificado',
      source: 'Rede Referenciada SulAmérica, pág. 3',
      date: 'Julho de 2025',
    },
    amilS380: {
      status: 'nao_identificado',
      source: 'Cotação Amil S380 QC (págs. 2, 3 e 10)',
      date: 'Novembro de 2026',
    },
    portoP320: {
      status: 'consta',
      psOnly: true,
      modalityLabel: 'PS adulto, pediátrico e ortopédico',
      source: 'Rede Linha P Porto Saúde (págs. 1, 2, 7, 9 e 11)',
      date: 'Outubro de 2026',
    },
  },

  // Osasco e proximidades
  {
    id: 'alpha-med-carapicuiba',
    kind: 'hospital',
    name: 'Hospital Alpha Med',
    city: 'Carapicuíba',
    region: 'osasco_proximidades',
    documentedModality: 'Hospital, maternidade e PS',
    verifiedLocation: 'Carapicuíba — SP',
    mapZone: 'carapicuiba',
    sulamericaDireto: {
      status: 'nao_identificado',
      source: 'Rede Referenciada SulAmérica, pág. 3',
      date: 'Julho de 2025',
    },
    sulamericaEspecial: {
      status: 'nao_identificado',
      source: 'Rede Referenciada SulAmérica, pág. 3',
      date: 'Julho de 2025',
    },
    amilS380: {
      status: 'consta',
      modalityLabel: 'Hospital, maternidade e PS',
      source: 'Cotação Amil S380 QC, págs. 2, 3 e 10',
      date: 'Novembro de 2026',
    },
    portoP320: {
      status: 'nao_identificado',
      source: 'Rede Linha P Porto Saúde (págs. 1, 2, 7, 9 e 11)',
      date: 'Outubro de 2026',
    },
  },
  {
    id: 'sao-luiz-osasco',
    kind: 'hospital',
    name: 'Hospital São Luiz Osasco',
    city: 'Osasco',
    region: 'osasco_proximidades',
    documentedModality: 'Hospital e PS',
    verifiedLocation: 'Osasco — SP',
    mapZone: 'osasco',
    sulamericaDireto: {
      status: 'consta',
      modalityLabel: 'Hospital e PS',
      source: 'Rede Referenciada SulAmérica, pág. 3',
      date: 'Julho de 2025',
    },
    sulamericaEspecial: {
      status: 'consta',
      modalityLabel: 'Hospital e PS',
      source: 'Rede Referenciada SulAmérica, pág. 3',
      date: 'Julho de 2025',
    },
    amilS380: {
      status: 'nao_identificado',
      source: 'Cotação Amil S380 QC (págs. 2, 3 e 10)',
      date: 'Novembro de 2026',
    },
    portoP320: {
      status: 'nao_identificado',
      source: 'Rede Linha P Porto Saúde (págs. 1, 2, 7, 9 e 11)',
      date: 'Outubro de 2026',
    },
  },
  {
    id: 'nossa-senhora-fatima-osasco',
    kind: 'hospital',
    name: 'Hospital Nossa Senhora de Fátima',
    city: 'Osasco',
    region: 'osasco_proximidades',
    documentedModality: 'Atendimento hospitalar',
    verifiedLocation: 'Osasco — SP',
    mapZone: 'osasco',
    sulamericaDireto: {
      status: 'nao_identificado',
      source: 'Rede Referenciada SulAmérica, pág. 3',
      date: 'Julho de 2025',
    },
    sulamericaEspecial: {
      status: 'nao_identificado',
      source: 'Rede Referenciada SulAmérica, pág. 3',
      date: 'Julho de 2025',
    },
    amilS380: {
      status: 'consta',
      modalityLabel: 'Atendimento hospitalar',
      source: 'Cotação Amil S380 QC, págs. 2, 3 e 10',
      date: 'Novembro de 2026',
    },
    portoP320: {
      status: 'nao_identificado',
      source: 'Rede Linha P Porto Saúde (págs. 1, 2, 7, 9 e 11)',
      date: 'Outubro de 2026',
    },
  },
  {
    id: 'projeto-crianca-osasco',
    kind: 'hospital',
    name: 'Projeto Criança Clínica Pediátrica',
    city: 'Osasco',
    region: 'osasco_proximidades',
    documentedModality: 'PS (pronto atendimento pediátrico)',
    verifiedLocation: 'Osasco — SP',
    mapZone: 'osasco',
    sulamericaDireto: {
      status: 'nao_identificado',
      source: 'Rede Referenciada SulAmérica, pág. 3',
      date: 'Julho de 2025',
    },
    sulamericaEspecial: {
      status: 'nao_identificado',
      source: 'Rede Referenciada SulAmérica, pág. 3',
      date: 'Julho de 2025',
    },
    amilS380: {
      status: 'consta',
      psOnly: true,
      modalityLabel: 'PS pediátrico',
      source: 'Cotação Amil S380 QC, págs. 2, 3 e 10',
      date: 'Novembro de 2026',
    },
    portoP320: {
      status: 'nao_identificado',
      source: 'Rede Linha P Porto Saúde (págs. 1, 2, 7, 9 e 11)',
      date: 'Outubro de 2026',
    },
  },
  {
    id: 'cruzeiro-do-sul-osasco',
    kind: 'hospital',
    name: 'Hospital Cruzeiro do Sul',
    city: 'Osasco',
    region: 'osasco_proximidades',
    documentedModality: 'Hospitalização e PS',
    verifiedLocation: 'Osasco — SP',
    mapZone: 'osasco',
    sulamericaDireto: {
      status: 'nao_identificado',
      source: 'Rede Referenciada SulAmérica, pág. 3',
      date: 'Julho de 2025',
    },
    sulamericaEspecial: {
      status: 'nao_identificado',
      source: 'Rede Referenciada SulAmérica, pág. 3',
      date: 'Julho de 2025',
    },
    amilS380: {
      status: 'nao_identificado',
      source: 'Cotação Amil S380 QC (págs. 2, 3 e 10)',
      date: 'Novembro de 2026',
    },
    portoP320: {
      status: 'consta',
      modalityLabel: 'Hospitalização e PS',
      source: 'Rede Linha P Porto Saúde (págs. 1, 2, 7, 9 e 11)',
      date: 'Outubro de 2026',
    },
  },
  {
    id: 'sao-francisco-osasco',
    kind: 'hospital',
    name: 'Hospital São Francisco',
    city: 'Osasco',
    region: 'osasco_proximidades',
    documentedModality: 'Hospital e PS',
    verifiedLocation: 'Osasco — SP',
    mapZone: 'osasco',
    sulamericaDireto: {
      status: 'nao_identificado',
      source: 'Rede Referenciada SulAmérica, pág. 3',
      date: 'Julho de 2025',
    },
    sulamericaEspecial: {
      status: 'nao_identificado',
      source: 'Rede Referenciada SulAmérica, pág. 3',
      date: 'Julho de 2025',
    },
    amilS380: {
      status: 'nao_identificado',
      source: 'Cotação Amil S380 QC (págs. 2, 3 e 10)',
      date: 'Novembro de 2026',
    },
    portoP320: {
      status: 'consta',
      modalityLabel: 'Hospital e PS',
      source: 'Rede Linha P Porto Saúde (págs. 1, 2, 7, 9 e 11)',
      date: 'Outubro de 2026',
    },
  },
];

export const LABS_TABLE: NetworkTableRow[] = [
  // Alphaville e Barueri primeiro
  {
    id: 'delboni-barueri',
    kind: 'laboratorio',
    name: 'Delboni Auriemo — Barueri',
    city: 'Barueri',
    region: 'alphaville_barueri',
    documentedModality: 'Análises clínicas e imagem',
    verifiedLocation: 'Barueri — SP',
    mapZone: 'barueri_centro',
    sulamericaDireto: {
      status: 'consta',
      modalityLabel: 'Análises clínicas e imagem',
      source: 'Rede Referenciada SulAmérica, pág. 3',
      date: 'Julho de 2025',
    },
    sulamericaEspecial: {
      status: 'consta',
      modalityLabel: 'Análises clínicas e imagem',
      source: 'Rede Referenciada SulAmérica, pág. 3',
      date: 'Julho de 2025',
    },
    amilS380: {
      status: 'nao_identificado',
      source: 'Cotação Amil S380 QC (págs. 2, 3 e 10)',
      date: 'Novembro de 2026',
    },
    portoP320: {
      status: 'nao_identificado',
      source: 'Rede Linha P Porto Saúde (págs. 1, 2, 7, 9 e 11)',
      date: 'Outubro de 2026',
    },
  },
  {
    id: 'amais-barueri-sulamerica',
    kind: 'laboratorio',
    name: 'A+ Medicina Diagnóstica — Barueri',
    city: 'Barueri',
    region: 'alphaville_barueri',
    documentedModality: 'Análises clínicas e imagem',
    verifiedLocation: 'Barueri — SP',
    mapZone: 'barueri_centro',
    sulamericaDireto: {
      status: 'nao_identificado',
      source: 'Rede Referenciada SulAmérica, pág. 3',
      date: 'Julho de 2025',
    },
    sulamericaEspecial: {
      status: 'consta',
      modalityLabel: 'Análises clínicas e imagem',
      source: 'Rede Referenciada SulAmérica, pág. 3',
      date: 'Julho de 2025',
    },
    amilS380: {
      status: 'nao_identificado',
      source: 'Cotação Amil S380 QC (unidades especificadas abaixo)',
      date: 'Novembro de 2026',
    },
    portoP320: {
      status: 'nao_identificado',
      source: 'Rede Linha P Porto Saúde',
      date: 'Outubro de 2026',
    },
  },
  {
    id: 'amais-alphaville-copacabana',
    kind: 'laboratorio',
    name: 'A+ Medicina Diagnóstica — Alphaville Copacabana',
    city: 'Barueri (Alphaville)',
    region: 'alphaville_barueri',
    documentedModality: 'Exames diagnósticos',
    verifiedLocation: 'Alphaville Copacabana — Barueri/SP',
    mapZone: 'alphaville_rio_negro',
    sulamericaDireto: {
      status: 'nao_identificado',
      source: 'Rede Referenciada SulAmérica, pág. 3',
      date: 'Julho de 2025',
    },
    sulamericaEspecial: {
      status: 'nao_identificado',
      source: 'Rede Referenciada SulAmérica, pág. 3 (consta apenas Barueri genérico)',
      date: 'Julho de 2025',
    },
    amilS380: {
      status: 'consta',
      modalityLabel: 'Exames diagnósticos',
      source: 'Cotação Amil S380 QC, págs. 2, 3 e 10',
      date: 'Novembro de 2026',
    },
    portoP320: {
      status: 'nao_identificado',
      source: 'Rede Linha P Porto Saúde',
      date: 'Outubro de 2026',
    },
  },
  {
    id: 'amais-alphaville-rio-negro',
    kind: 'laboratorio',
    name: 'A+ Medicina Diagnóstica — Alphaville Rio Negro',
    city: 'Barueri (Alphaville)',
    region: 'alphaville_barueri',
    documentedModality: 'Exames diagnósticos',
    verifiedLocation: 'Alphaville Rio Negro — Barueri/SP',
    mapZone: 'alphaville_rio_negro',
    sulamericaDireto: {
      status: 'nao_identificado',
      source: 'Rede Referenciada SulAmérica, pág. 3',
      date: 'Julho de 2025',
    },
    sulamericaEspecial: {
      status: 'nao_identificado',
      source: 'Rede Referenciada SulAmérica, pág. 3 (consta apenas Barueri genérico)',
      date: 'Julho de 2025',
    },
    amilS380: {
      status: 'consta',
      modalityLabel: 'Exames diagnósticos',
      source: 'Cotação Amil S380 QC, págs. 2, 3 e 10',
      date: 'Novembro de 2026',
    },
    portoP320: {
      status: 'nao_identificado',
      source: 'Rede Linha P Porto Saúde',
      date: 'Outubro de 2026',
    },
  },
  {
    id: 'lavoisier-barueri-sulamerica',
    kind: 'laboratorio',
    name: 'Lavoisier — Barueri',
    city: 'Barueri',
    region: 'alphaville_barueri',
    documentedModality: 'Análises clínicas',
    verifiedLocation: 'Barueri — SP',
    mapZone: 'barueri_centro',
    sulamericaDireto: {
      status: 'consta',
      modalityLabel: 'Análises clínicas',
      source: 'Rede Referenciada SulAmérica, pág. 3',
      date: 'Julho de 2025',
    },
    sulamericaEspecial: {
      status: 'nao_identificado',
      source: 'Rede Referenciada SulAmérica, pág. 3',
      date: 'Julho de 2025',
    },
    amilS380: {
      status: 'nao_identificado',
      source: 'Cotação Amil S380 QC (unidades especificadas abaixo)',
      date: 'Novembro de 2026',
    },
    portoP320: {
      status: 'nao_identificado',
      source: 'Rede Linha P Porto Saúde',
      date: 'Outubro de 2026',
    },
  },
  {
    id: 'lavoisier-alphaville-rio-negro',
    kind: 'laboratorio',
    name: 'Lavoisier — Alphaville Rio Negro',
    city: 'Barueri (Alphaville)',
    region: 'alphaville_barueri',
    documentedModality: 'Exames diagnósticos',
    verifiedLocation: 'Alphaville Rio Negro — Barueri/SP',
    mapZone: 'alphaville_rio_negro',
    sulamericaDireto: {
      status: 'nao_identificado',
      source: 'Rede Referenciada SulAmérica, pág. 3 (consta apenas Barueri genérico)',
      date: 'Julho de 2025',
    },
    sulamericaEspecial: {
      status: 'nao_identificado',
      source: 'Rede Referenciada SulAmérica, pág. 3',
      date: 'Julho de 2025',
    },
    amilS380: {
      status: 'consta',
      modalityLabel: 'Exames diagnósticos',
      source: 'Cotação Amil S380 QC, págs. 2, 3 e 10',
      date: 'Novembro de 2026',
    },
    portoP320: {
      status: 'nao_identificado',
      source: 'Rede Linha P Porto Saúde',
      date: 'Outubro de 2026',
    },
  },
  {
    id: 'lavoisier-parque-barueri',
    kind: 'laboratorio',
    name: 'Lavoisier — Shopping Parque Barueri',
    city: 'Barueri',
    region: 'alphaville_barueri',
    documentedModality: 'Exames diagnósticos',
    verifiedLocation: 'Shopping Parque Barueri — Barueri/SP',
    mapZone: 'barueri_centro',
    sulamericaDireto: {
      status: 'nao_identificado',
      source: 'Rede Referenciada SulAmérica, pág. 3 (consta apenas Barueri genérico)',
      date: 'Julho de 2025',
    },
    sulamericaEspecial: {
      status: 'nao_identificado',
      source: 'Rede Referenciada SulAmérica, pág. 3',
      date: 'Julho de 2025',
    },
    amilS380: {
      status: 'consta',
      modalityLabel: 'Exames diagnósticos',
      source: 'Cotação Amil S380 QC, págs. 2, 3 e 10',
      date: 'Novembro de 2026',
    },
    portoP320: {
      status: 'nao_identificado',
      source: 'Rede Linha P Porto Saúde',
      date: 'Outubro de 2026',
    },
  },

  // Osasco e proximidades
  {
    id: 'amais-osasco',
    kind: 'laboratorio',
    name: 'A+ Medicina Diagnóstica — Osasco',
    city: 'Osasco',
    region: 'osasco_proximidades',
    documentedModality: 'Exames diagnósticos',
    verifiedLocation: 'Unidade Osasco — Osasco/SP',
    mapZone: 'osasco',
    sulamericaDireto: {
      status: 'nao_identificado',
      source: 'Rede Referenciada SulAmérica, pág. 3',
      date: 'Julho de 2025',
    },
    sulamericaEspecial: {
      status: 'nao_identificado',
      source: 'Rede Referenciada SulAmérica, pág. 3',
      date: 'Julho de 2025',
    },
    amilS380: {
      status: 'consta',
      modalityLabel: 'Exames diagnósticos',
      source: 'Cotação Amil S380 QC, págs. 2, 3 e 10',
      date: 'Novembro de 2026',
    },
    portoP320: {
      status: 'consta',
      modalityLabel: 'Exames diagnósticos',
      source: 'Rede Linha P Porto Saúde',
      date: 'Outubro de 2026',
    },
  },
  {
    id: 'lavoisier-osasco',
    kind: 'laboratorio',
    name: 'Lavoisier — Osasco',
    city: 'Osasco',
    region: 'osasco_proximidades',
    documentedModality: 'Exames diagnósticos',
    verifiedLocation: 'Unidade Osasco — Osasco/SP',
    mapZone: 'osasco',
    sulamericaDireto: {
      status: 'nao_identificado',
      source: 'Rede Referenciada SulAmérica, pág. 3',
      date: 'Julho de 2025',
    },
    sulamericaEspecial: {
      status: 'nao_identificado',
      source: 'Rede Referenciada SulAmérica, pág. 3',
      date: 'Julho de 2025',
    },
    amilS380: {
      status: 'consta',
      modalityLabel: 'Exames diagnósticos',
      source: 'Cotação Amil S380 QC, págs. 2, 3 e 10',
      date: 'Novembro de 2026',
    },
    portoP320: {
      status: 'nao_identificado',
      source: 'Rede Linha P Porto Saúde',
      date: 'Outubro de 2026',
    },
  },
];

export const ALL_CONFIRMED_PROVIDERS: NetworkTableRow[] = [
  ...HOSPITALS_TABLE,
  ...LABS_TABLE,
];

export const BENEFITS_COMPARISON: BenefitComparisonRow[] = [
  {
    id: 'abrangencia',
    dimension: 'Abrangência',
    sulamerica: 'Nacional (Direto Nacional e Especial 100)',
    amil: 'Nacional',
    porto: 'Nacional',
  },
  {
    id: 'acomodacao',
    dimension: 'Acomodação',
    sulamerica: 'Enfermaria no Direto Nacional (43 vidas); conforme apólice no Especial 100 (5 vidas)',
    amil: 'Enfermaria (QC)',
    porto: 'Enfermaria (P320 E)',
  },
  {
    id: 'coparticipacao',
    dimension: 'Coparticipação',
    sulamerica: 'Conforme regras da apólice vigente',
    amil: 'Prevista na cotação S380 QC (consultar tabela por procedimento)',
    porto: 'Coparticipação de 30% indicada no orçamento',
  },
  {
    id: 'reembolso',
    dimension: 'Reembolso',
    sulamerica: 'Conforme condições específicas de cada produto da apólice',
    amil: 'Reembolso previsto no produto',
    porto: 'Reembolso previsto no produto',
  },
  {
    id: 'telemedicina',
    dimension: 'Telemedicina',
    sulamerica: 'Não detalhado na documentação consultada da apólice vigente',
    amil: 'Não detalhado nas páginas analisadas da cotação',
    porto: 'Telemedicina 24 horas identificada no orçamento',
  },
  {
    id: 'atendimento_especializado',
    dimension: 'Atendimento especializado',
    sulamerica: 'Conforme rede de cada produto (Direto Nacional x Especial 100)',
    amil: 'Conforme rede credenciada relacionada na proposta (inclui PA pediátrico Osasco)',
    porto: 'Time Médico Porto identificado no orçamento',
  },
  {
    id: 'saude_preventiva',
    dimension: 'Saúde preventiva',
    sulamerica: 'Não detalhado na documentação consultada da apólice vigente',
    amil: 'Não especificado na proposta analisada',
    porto: 'Programas de promoção à saúde identificados no orçamento',
  },
  {
    id: 'rede_hospitalar',
    dimension: 'Rede hospitalar (Barueri / Osasco)',
    sulamerica: 'Hospitalis Barueri e São Luiz Osasco (ambos); São Luiz Alphaville apenas no Especial 100',
    amil: 'Nove de Julho Alphaville (PS), Alpha Med Carapicuíba, N. Sra. de Fátima e Projeto Criança (Osasco)',
    porto: 'Hospitalis Barueri, PS Barueri, Hospital Cruzeiro do Sul e Hospital São Francisco (Osasco)',
  },
  {
    id: 'laboratorios',
    dimension: 'Laboratórios (Barueri / Osasco)',
    sulamerica: 'Delboni Barueri (ambos), Lavoisier Barueri (D. Nacional) e A+ Barueri (Especial 100)',
    amil: 'A+ (Alphaville Copacabana, Rio Negro e Osasco) e Lavoisier (Alphaville Rio Negro, Shopping Parque Barueri e Osasco)',
    porto: 'A+ Medicina Diagnóstica confirmado em Osasco na rede apresentada',
  },
  {
    id: 'odontologia',
    dimension: 'Assistência odontológica',
    sulamerica: 'Não identificado na conferência documental analisada',
    amil: 'Não consta na proposta analisada (não assumir inclusão gratuita)',
    porto: 'Odontológico Bronze 10 identificado no orçamento',
  },
  {
    id: 'seguro_vida',
    dimension: 'Seguro de vida',
    sulamerica: 'Não identificado na conferência documental analisada',
    amil: 'Não consta na proposta analisada',
    porto: 'Seguro de vida identificado no orçamento (conforme condições contratuais)',
  },
  {
    id: 'saude_ocupacional',
    dimension: 'Saúde ocupacional',
    sulamerica: 'Não identificado na conferência documental analisada',
    amil: 'Não consta na proposta analisada',
    porto: 'Saúde ocupacional identificada no orçamento (conforme elegibilidade)',
  },
  {
    id: 'servicos_adicionais',
    dimension: 'Serviços adicionais',
    sulamerica: 'Não inferir adicionais apenas pelo nome comercial do plano',
    amil: 'Sem adicionais extras documentados além da cobertura médico-hospitalar',
    porto: 'Descontos em farmácias e outros serviços conforme elegibilidade e condições contratuais',
  },
];

export const DOCUMENT_REFERENCES = [
  {
    operator: 'SulAmérica',
    document: 'Relatório de beneficiários e rede nacional (colunas D. Nacional ENF e Especial 100)',
    date: 'Julho de 2025',
  },
  {
    operator: 'Amil',
    document: 'Cotação Amil S380 QC (págs. 2, 3 e 10 — acomodação enfermaria)',
    date: 'Novembro de 2026',
  },
  {
    operator: 'Porto Saúde',
    document: 'Cotação P320 E Copar e Rede Linha P (págs. 1, 2, 7, 9 e 11)',
    date: 'Outubro de 2026',
  },
];

export const formatBRL = (value: number): string =>
  value.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
