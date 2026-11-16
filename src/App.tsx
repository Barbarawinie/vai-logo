import { useState } from 'react';
import { AdvisorySection } from './components/AdvisorySection';
import { BenefitsSection } from './components/BenefitsSection';
import { ConsultantModal } from './components/ConsultantModal';
import { FinancialSection } from './components/FinancialSection';
import { HeroSection } from './components/HeroSection';
import { Navbar } from './components/Navbar';
import { NetworkMatrixSection } from './components/NetworkMatrixSection';
import { RegionalExplorerSection } from './components/RegionalExplorerSection';

export default function App() {
  const [consultantOpen, setConsultantOpen] = useState(false);

  const handleExportPdf = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <Navbar onOpenConsultant={() => setConsultantOpen(true)} />

      <main>
        <HeroSection />
        <FinancialSection />
        <NetworkMatrixSection />
        <RegionalExplorerSection />
        <BenefitsSection />
        <AdvisorySection
          onOpenConsultant={() => setConsultantOpen(true)}
          onExportPdf={handleExportPdf}
        />
      </main>

      <ConsultantModal
        isOpen={consultantOpen}
        onClose={() => setConsultantOpen(false)}
      />
    </div>
  );
}
