import { Check, Minus } from 'lucide-react';
import type { CoverageStatus } from '../data/comparisonData';

interface StatusIndicatorProps {
  status: CoverageStatus;
  psOnly?: boolean;
}

export function StatusIndicator({ status, psOnly = false }: StatusIndicatorProps) {
  if (status === 'consta') {
    return (
      <span
        className="inline-flex items-center gap-1.5 font-semibold text-emerald-700 whitespace-nowrap text-xs"
        title={
          psOnly
            ? 'Prestador confirmado na rede somente para pronto-socorro (PS)'
            : 'Prestador confirmado na rede do produto'
        }
      >
        <Check className="h-4 w-4 shrink-0 stroke-[2.5] text-emerald-600" aria-hidden="true" />
        <span>{psOnly ? 'PS' : 'Consta'}</span>
      </span>
    );
  }

  return (
    <span
      className="inline-flex items-center justify-center text-slate-400 whitespace-nowrap text-xs"
      title="Prestador não identificado na rede do produto apresentada"
      aria-label="Não identificado na documentação analisada"
    >
      <Minus className="h-4 w-4 shrink-0" aria-hidden="true" />
    </span>
  );
}
