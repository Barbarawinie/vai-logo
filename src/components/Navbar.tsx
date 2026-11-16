import { useState } from 'react';
import { Menu, X } from 'lucide-react';

interface NavbarProps {
  onOpenConsultant: () => void;
}

const NAV_LINKS = [
  { href: '#comparativo-financeiro', label: 'Financeiro' },
  { href: '#hospitais-proximos', label: 'Hospitais' },
  { href: '#laboratorios-proximos', label: 'Laboratórios' },
  { href: '#comparativo-beneficios', label: 'Benefícios' },
  { href: '#recomendacao-consultiva', label: 'Decisão' },
];

export function Navbar({ onOpenConsultant }: NavbarProps) {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-slate-200/90 bg-white/95 backdrop-blur-sm no-print">
      <div className="mx-auto flex h-16 max-w-[1200px] items-center justify-between gap-8 px-4 sm:px-6 lg:px-8">
        <a
          href="#topo"
          className="font-display text-lg font-bold tracking-tight text-navy-900 whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-orange-600"
        >
          4K Saúde e Benefícios
        </a>

        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-600" aria-label="Navegação principal">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="whitespace-nowrap shrink-0 py-1 transition-colors hover:text-navy-900 hover:underline hover:underline-offset-4 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-orange-600"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3 shrink-0">
          <button
            type="button"
            onClick={onOpenConsultant}
            className="hidden sm:inline-flex items-center justify-center rounded-lg bg-orange-600 px-4 py-2 text-xs font-semibold text-white transition-colors hover:bg-orange-700 whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600"
          >
            Falar com consultor
          </button>

          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 text-navy-900 md:hidden cursor-pointer focus-visible:outline-2 focus-visible:outline-orange-600"
            aria-expanded={mobileOpen}
            aria-label={mobileOpen ? 'Fechar menu' : 'Abrir menu'}
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="border-t border-slate-200 bg-white px-4 py-4 md:hidden">
          <nav className="flex flex-col gap-3 text-sm font-medium text-slate-700" aria-label="Menu móvel">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="py-2 text-navy-900 hover:text-orange-600"
              >
                {link.label}
              </a>
            ))}
            <button
              type="button"
              onClick={() => {
                setMobileOpen(false);
                onOpenConsultant();
              }}
              className="mt-2 w-full rounded-lg bg-orange-600 px-4 py-2.5 text-sm font-semibold text-white hover:bg-orange-700 cursor-pointer"
            >
              Falar com consultor
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}
