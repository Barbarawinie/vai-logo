import { useState, type FormEvent } from 'react';
import { CheckCircle2, X } from 'lucide-react';

interface ConsultantModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ConsultantModal({ isOpen, onClose }: ConsultantModalProps) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [focus, setFocus] = useState('Revisão conjunta das 3 opções (48 vidas)');
  const [notes, setNotes] = useState('');
  const [error, setError] = useState('');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const trimmedName = name.trim();
    const trimmedEmail = email.trim();

    if (!trimmedName) {
      setError('Informe seu nome para continuar.');
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmedEmail)) {
      setError('Informe um e-mail corporativo válido.');
      return;
    }

    setError('');
    setSubmitted(true);
  };

  const handleResetAndClose = () => {
    setSubmitted(false);
    setError('');
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-navy-950/60 p-4 backdrop-blur-xs no-print"
      role="dialog"
      aria-modal="true"
      aria-labelledby="consultant-modal-title"
    >
      <div className="relative w-full max-w-lg rounded-xl border border-slate-200 bg-white p-6 shadow-xl sm:p-8">
        <button
          type="button"
          onClick={handleResetAndClose}
          className="absolute right-4 top-4 inline-flex h-9 w-9 items-center justify-center rounded-lg text-slate-500 hover:bg-slate-100 hover:text-navy-900 cursor-pointer"
          aria-label="Fechar janela"
        >
          <X className="h-5 w-5" />
        </button>

        {!submitted ? (
          <>
            <p className="text-xs font-semibold text-orange-600">
              4K Saúde e Benefícios
            </p>
            <h2
              id="consultant-modal-title"
              className="mt-1 font-display text-xl font-bold text-navy-900"
            >
              Agendar conversa com um consultor
            </h2>
            <p className="mt-1.5 text-xs leading-relaxed text-slate-600">
              Solicite uma reunião de aprofundamento sobre o comparativo de 48 vidas, conferência de rede em Alphaville/Barueri ou validação cadastral de elegibilidade.
            </p>

            <form onSubmit={handleSubmit} className="mt-5 space-y-4" noValidate>
              <div>
                <label htmlFor="consult-name" className="block text-xs font-semibold text-navy-900">
                  Nome completo *
                </label>
                <input
                  id="consult-name"
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Seu nome"
                  className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2.5 text-sm text-navy-900 focus:border-orange-600 focus:outline-none"
                />
              </div>

              <div>
                <label htmlFor="consult-email" className="block text-xs font-semibold text-navy-900">
                  E-mail corporativo *
                </label>
                <input
                  id="consult-email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="nome@empresa.com.br"
                  className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2.5 text-sm text-navy-900 focus:border-orange-600 focus:outline-none"
                />
              </div>

              <div>
                <label htmlFor="consult-company" className="block text-xs font-semibold text-navy-900">
                  Empresa / Cargo (opcional)
                </label>
                <input
                  id="consult-company"
                  type="text"
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                  placeholder="RH, Diretoria ou Financeiro"
                  className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2.5 text-sm text-navy-900 focus:border-orange-600 focus:outline-none"
                />
              </div>

              <div>
                <label htmlFor="consult-focus" className="block text-xs font-semibold text-navy-900">
                  Principal ponto de análise
                </label>
                <select
                  id="consult-focus"
                  value={focus}
                  onChange={(e) => setFocus(e.target.value)}
                  className="mt-1 w-full rounded-lg border border-slate-300 bg-white px-3 py-2.5 text-sm text-navy-900 focus:border-orange-600 focus:outline-none"
                >
                  <option>Revisão conjunta das 3 opções (48 vidas)</option>
                  <option>Aprofundamento na proposta Amil S380 QC</option>
                  <option>Aprofundamento na proposta Porto Saúde P320 E Copar</option>
                  <option>Conferência de prestadores específicos em Barueri/Osasco</option>
                </select>
              </div>

              <div>
                <label htmlFor="consult-notes" className="block text-xs font-semibold text-navy-900">
                  Observações ou prestadores prioritários (opcional)
                </label>
                <textarea
                  id="consult-notes"
                  rows={2}
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="Ex.: validar atendimento de especialidade ou unidade específica..."
                  className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 text-sm text-navy-900 focus:border-orange-600 focus:outline-none"
                />
              </div>

              {error && (
                <p className="text-xs font-medium text-red-700" role="alert">
                  {error}
                </p>
              )}

              <div className="flex items-center justify-end gap-3 pt-2">
                <button
                  type="button"
                  onClick={handleResetAndClose}
                  className="rounded-lg border border-slate-300 px-4 py-2.5 text-xs font-semibold text-slate-700 hover:bg-slate-50 cursor-pointer"
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  className="rounded-lg bg-orange-600 px-5 py-2.5 text-xs font-semibold text-white hover:bg-orange-700 cursor-pointer"
                >
                  Solicitar retorno consultivo
                </button>
              </div>
            </form>
          </>
        ) : (
          <div className="py-4 text-center">
            <CheckCircle2 className="mx-auto h-10 w-10 text-emerald-700" aria-hidden="true" />
            <h2 className="mt-3 font-display text-xl font-bold text-navy-900">
              Solicitação registrada
            </h2>
            <p className="mt-2 text-xs leading-relaxed text-slate-600">
              Obrigado, <strong className="text-navy-900">{name}</strong>. Registramos seu pedido de atendimento sobre{' '}
              <strong className="text-navy-900">{focus}</strong> para retorno no e-mail{' '}
              <strong className="text-navy-900">{email}</strong>.
            </p>
            <button
              type="button"
              onClick={handleResetAndClose}
              className="mt-6 rounded-lg bg-navy-900 px-6 py-2.5 text-xs font-semibold text-white hover:bg-navy-800 cursor-pointer"
            >
              Voltar ao comparativo
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
