import { AnimatePresence } from 'framer-motion';
import { CursorProvider } from '~/contexts/CursorContext';
import { RouterProvider, useRouter } from '~/contexts/RouterContext';
import { CustomCursor } from '~/components/CustomCursor';
import { Navbar } from '~/components/Navbar';
import { Footer } from '~/components/Footer';
import { HomePage } from '~/pages/home/HomePage';
import { WorkPage } from '~/pages/WorkPage';
import { AgencyPage } from '~/pages/AgencyPage';
import { ServicesPage } from '~/pages/ServicesPage';
import { PricingPage } from '~/pages/PricingPage';
import { ContactPage } from '~/pages/ContactPage';

function AppContent() {
  const { currentPage } = useRouter();

  return (
    <div className="bg-[#000000] min-h-screen text-[#F8F8F6] font-sans selection:bg-[#5B1D1D] selection:text-white">
      <CustomCursor />
      <Navbar />

      <main>
        <AnimatePresence mode="wait">
          {currentPage === 'home' && <HomePage key="home" />}
          {currentPage === 'work' && <WorkPage key="work" />}
          {currentPage === 'agency' && <AgencyPage key="agency" />}
          {currentPage === 'services' && <ServicesPage key="services" />}
          {currentPage === 'pricing' && <PricingPage key="pricing" />}
          {currentPage === 'contact' && <ContactPage key="contact" />}
        </AnimatePresence>
      </main>

      {currentPage !== 'contact' && <Footer />}
    </div>
  );
}

export default function App() {
  return (
    <CursorProvider>
      <RouterProvider>
        <div className="relative">
          <AppContent />
        </div>
      </RouterProvider>
    </CursorProvider>
  );
}

export const Welcome = App;
