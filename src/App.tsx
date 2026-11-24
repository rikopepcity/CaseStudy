import { useEffect, useState } from 'react';
import { CASE_STUDIES } from './data/caseStudies';
import { ActivePage, Header } from './components/Header';
import { CaseListingPage } from './components/CaseListingPage';
import { CaseDetailPage } from './components/CaseDetailPage';
import { AboutSection } from './components/AboutSection';
import { Footer } from './components/Footer';
import { ContactModal } from './components/ContactModal';
import { LightboxModal } from './components/LightboxModal';

interface RouteState {
  page: ActivePage;
  caseSlug: string | null;
}

function parseHashRoute(): RouteState {
  const raw = window.location.hash.replace(/^#\/?/, '').trim();
  if (!raw || raw === 'cases') {
    return { page: 'cases', caseSlug: null };
  }
  if (raw.startsWith('cases/')) {
    const slug = raw.slice('cases/'.length);
    const exists = CASE_STUDIES.some((c) => c.slug === slug);
    if (exists) {
      return { page: 'cases', caseSlug: slug };
    }
  }
  if (raw === 'about' || raw === 'expertise' || raw === 'process') {
    return { page: raw, caseSlug: null };
  }
  return { page: 'cases', caseSlug: null };
}

export default function App() {
  const [route, setRoute] = useState<RouteState>(() => parseHashRoute());
  const [contactOpen, setContactOpen] = useState(false);
  const [lightboxImage, setLightboxImage] = useState<{
    src: string;
    title: string;
    caption: string;
  } | null>(null);

  useEffect(() => {
    const onHashChange = () => {
      setRoute(parseHashRoute());
      window.scrollTo({ top: 0, behavior: 'auto' });
    };
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  const navigateToPage = (page: ActivePage) => {
    const targetHash = page === 'cases' ? '#/cases' : `#/${page}`;
    if (window.location.hash !== targetHash) {
      window.location.hash = targetHash;
    } else {
      setRoute({ page, caseSlug: null });
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const navigateToCase = (slug: string) => {
    const targetHash = `#/cases/${slug}`;
    if (window.location.hash !== targetHash) {
      window.location.hash = targetHash;
    } else {
      setRoute({ page: 'cases', caseSlug: slug });
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const activeCase = route.caseSlug
    ? CASE_STUDIES.find((c) => c.slug === route.caseSlug) ?? null
    : null;

  return (
    <div className="flex min-h-screen flex-col bg-white text-zinc-950">
      <Header
        activePage={route.page}
        onNavigate={navigateToPage}
        onOpenContact={() => setContactOpen(true)}
      />

      <main className="flex-1">
        {activeCase ? (
          <CaseDetailPage
            key={activeCase.slug}
            study={activeCase}
            onBack={() => navigateToPage('cases')}
            onSelectCase={navigateToCase}
            onOpenLightbox={(src, title, caption) =>
              setLightboxImage({ src, title, caption })
            }
            onOpenContact={() => setContactOpen(true)}
          />
        ) : route.page === 'cases' ? (
          <CaseListingPage
            onSelectCase={navigateToCase}
            onOpenContact={() => setContactOpen(true)}
          />
        ) : (
          <AboutSection
            section={route.page}
            onSelectCase={navigateToCase}
            onBackToCases={() => navigateToPage('cases')}
            onOpenContact={() => setContactOpen(true)}
          />
        )}
      </main>

      <Footer
        onSelectCase={navigateToCase}
        onNavigate={navigateToPage}
        onOpenContact={() => setContactOpen(true)}
      />

      <ContactModal
        isOpen={contactOpen}
        onClose={() => setContactOpen(false)}
      />

      <LightboxModal
        image={lightboxImage}
        onClose={() => setLightboxImage(null)}
      />
    </div>
  );
}
