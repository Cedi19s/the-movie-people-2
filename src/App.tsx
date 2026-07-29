import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Toaster } from '@/components/ui/toaster';
import { TooltipProvider } from '@/components/ui/tooltip';
import { useLocation, Router as WouterRouter } from 'wouter';
import { AnimatePresence, motion } from 'framer-motion';
import { Navbar } from '@/components/Navbar';
import { Home } from '@/pages/Home';
import { About } from '@/pages/About';
import { Gallery } from '@/pages/Gallery';
import { Contact } from '@/pages/Contact';

const queryClient = new QueryClient();

function PageTransition({ children, route }: { children: React.ReactNode; route: string }) {
  return (
    <motion.div
      key={route}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className="w-full min-h-[100dvh]"
    >
      {children}
    </motion.div>
  );
}

function MainContent() {
  const [location] = useLocation();

  return (
    <div className="relative w-full min-h-[100dvh] bg-black text-white selection:bg-primary selection:text-white">
      <Navbar />
      <main className="relative w-full min-h-[100dvh]">
        <AnimatePresence mode="wait">
          {location === '/' && <PageTransition route="/"><Home /></PageTransition>}
          {location === '/about' && <PageTransition route="/about"><About /></PageTransition>}
          {location === '/gallery' && <PageTransition route="/gallery"><Gallery /></PageTransition>}
          {location === '/contact' && <PageTransition route="/contact"><Contact /></PageTransition>}
        </AnimatePresence>
      </main>
    </div>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, '')}>
          <MainContent />
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
