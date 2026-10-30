import React, { useState, useEffect } from 'react';
import { PageRoute, CaseStudy, JobOpening, ToastMessage } from './types/index.ts';
import { Navbar } from './components/Navbar.tsx';
import { Footer } from './components/Footer.tsx';
import { WhatsAppWidget } from './components/WhatsAppWidget.tsx';
import { ToastContainer } from './components/Toast.tsx';
import { ConsultationModal } from './components/ConsultationModal.tsx';
import { CaseStudyDrawer } from './components/CaseStudyDrawer.tsx';
import { CareerApplyModal } from './components/CareerApplyModal.tsx';
import { HomePage } from './pages/HomePage.tsx';
import { AboutPage } from './pages/AboutPage.tsx';
import { ServicesPage } from './pages/ServicesPage.tsx';
import { PortfolioPage } from './pages/PortfolioPage.tsx';
import { CareersPage } from './pages/CareersPage.tsx';
import { ContactPage } from './pages/ContactPage.tsx';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageRoute>('home');
  const [targetServiceId, setTargetServiceId] = useState<string | undefined>(undefined);
  const [consultationOpen, setConsultationOpen] = useState(false);
  const [consultationServiceId, setConsultationServiceId] = useState<string | undefined>(undefined);
  const [activeCaseStudy, setActiveCaseStudy] = useState<CaseStudy | null>(null);
  const [activeJobApply, setActiveJobApply] = useState<JobOpening | null>(null);
  const [toasts, setToasts] = useState<ToastMessage[]>([]);

  // Synchronize hash routing for smooth multi-page navigation & browser history
  useEffect(() => {
    const handleHashChange = () => {
      const rawHash = window.location.hash.replace('#', '');
      if (rawHash.startsWith('services-')) {
        const srvId = rawHash.replace('services-', '');
        setCurrentPage('services');
        setTargetServiceId(srvId);
        return;
      }

      if (['home', 'about', 'services', 'portfolio', 'careers', 'contact'].includes(rawHash)) {
        setCurrentPage(rawHash as PageRoute);
      }
    };

    if (window.location.hash) {
      handleHashChange();
    }

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigateTo = (page: PageRoute, targetSrvId?: string) => {
    setCurrentPage(page);
    setTargetServiceId(targetSrvId);
    if (page === 'services' && targetSrvId) {
      window.location.hash = `#services-${targetSrvId}`;
    } else {
      window.location.hash = page === 'home' ? '' : `#${page}`;
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const addToast = (title: string, message: string, type: 'success' | 'info' | 'error' = 'success') => {
    const id = Date.now().toString() + Math.random().toString(36).substring(2, 6);
    setToasts((prev) => [...prev, { id, title, message, type }]);
  };

  const dismissToast = (id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  };

  const handleOpenConsultation = (serviceId?: string) => {
    setConsultationServiceId(serviceId);
    setConsultationOpen(true);
  };

  const handleConsultationSuccess = (clientName: string, serviceTitle: string) => {
    addToast(
      'Consultation Scheduled Successfully',
      `Thank you, ${clientName}! Our principal architect will contact you within 4 business hours regarding "${serviceTitle}".`,
      'success'
    );
  };

  const handleJobApplicationSuccess = (candidateName: string, roleTitle: string) => {
    addToast(
      'Application Received',
      `Thank you, ${candidateName}! Your application for "${roleTitle}" and CV have been safely received by our talent team.`,
      'success'
    );
  };

  const handleContactSuccess = (clientName: string, serviceTitle: string) => {
    addToast(
      'Project Estimation Request Received',
      `Thank you, ${clientName}! Our technical team is reviewing your project parameters for "${serviceTitle}" and will follow up with an NDA and estimate.`,
      'success'
    );
  };

  return (
    <div className="min-h-screen bg-[#090d16] text-slate-100 flex flex-col selection:bg-cyan-500/25 selection:text-cyan-200">
      {/* Top Bar Contract Compliant Navigation */}
      <Navbar
        currentPage={currentPage}
        onNavigate={navigateTo}
        onOpenConsultation={handleOpenConsultation}
      />

      {/* Main Dynamic View Area */}
      <main className="flex-1">
        {currentPage === 'home' && (
          <HomePage
            onNavigate={navigateTo}
            onOpenConsultation={handleOpenConsultation}
            onSelectCaseStudy={(study) => setActiveCaseStudy(study)}
          />
        )}

        {currentPage === 'about' && (
          <AboutPage
            onNavigate={navigateTo}
            onOpenConsultation={() => handleOpenConsultation()}
          />
        )}

        {currentPage === 'services' && (
          <ServicesPage
            onNavigate={navigateTo}
            onOpenConsultation={handleOpenConsultation}
            targetServiceId={targetServiceId}
          />
        )}

        {currentPage === 'portfolio' && (
          <PortfolioPage
            onSelectCaseStudy={(study) => setActiveCaseStudy(study)}
            onOpenConsultation={() => handleOpenConsultation()}
          />
        )}

        {currentPage === 'careers' && (
          <CareersPage
            onApplyJob={(job) => setActiveJobApply(job)}
          />
        )}

        {currentPage === 'contact' && (
          <ContactPage
            onSuccess={handleContactSuccess}
          />
        )}
      </main>

      {/* Persistent Global Footer */}
      <Footer
        onNavigate={navigateTo}
        onOpenConsultation={handleOpenConsultation}
      />

      {/* Floating WhatsApp Widget */}
      <WhatsAppWidget />

      {/* Global Consultation / Service Booking Modal */}
      <ConsultationModal
        isOpen={consultationOpen}
        onClose={() => setConsultationOpen(false)}
        initialServiceId={consultationServiceId}
        onSuccess={handleConsultationSuccess}
      />

      {/* Deep-dive Case Study Drawer */}
      <CaseStudyDrawer
        caseStudy={activeCaseStudy}
        isOpen={!!activeCaseStudy}
        onClose={() => setActiveCaseStudy(null)}
        onRequestDiscussion={(title) => {
          handleOpenConsultation();
          addToast('Case Study Architecture Selected', `Discussing "${title}" architecture with our team.`, 'info');
        }}
      />

      {/* Career Application Modal with File Dropzone */}
      <CareerApplyModal
        job={activeJobApply}
        isOpen={!!activeJobApply}
        onClose={() => setActiveJobApply(null)}
        onSuccess={handleJobApplicationSuccess}
      />

      {/* Floating Animated Toast Notifications */}
      <ToastContainer
        toasts={toasts}
        onDismiss={dismissToast}
      />
    </div>
  );
}
