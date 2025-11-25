import React, { Suspense, lazy, useState, useEffect } from 'react';
import Hero from './components/Hero';
import NoiseOverlay from './components/Layout/NoiseOverlay';
import { MessageCircle } from 'lucide-react';

// Lazy load heavy sections
const Products = lazy(() => import('./components/Products'));
const Testimonials = lazy(() => import('./components/Testimonials'));
const Contact = lazy(() => import('./components/Contact'));

// Loading fallback component
const Loader = () => (
  <div className="py-20 flex justify-center items-center bg-deep-black text-laser-red font-mono animate-pulse">
    [ LOADING TACTICAL DATA... ]
  </div>
);

function App() {
  const [isFooterVisible, setIsFooterVisible] = useState(false);
  const [footerRef, setFooterRef] = useState<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!footerRef) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsFooterVisible(entry.isIntersecting);
      },
      {
        root: null,
        threshold: 0.1, // Trigger when 10% of the footer is visible
      }
    );

    observer.observe(footerRef);

    return () => {
      if (footerRef) {
        observer.unobserve(footerRef);
      }
    };
  }, [footerRef]);

  return (
    <main className="min-h-screen bg-deep-black text-white selection:bg-laser-red selection:text-black relative">
      <NoiseOverlay />
      
      {/* Hero is eager loaded for LCP */}
      <Hero />

      {/* Lazy loaded sections */}
      <Suspense fallback={<Loader />}>
        <Products />
        <Testimonials />
        {/* Wrap Contact in a div to attach ref for intersection observer */}
        <div ref={setFooterRef}>
          <Contact />
        </div>
      </Suspense>

      {/* Sticky Whatsapp Button (Mobile Only) */}
      <a 
        href="https://wa.me/6282297800321" 
        target="_blank"
        rel="noreferrer"
        className={`md:hidden fixed bottom-6 right-6 z-40 bg-laser-red text-black p-4 rounded-full shadow-[0_0_20px_rgba(255,42,42,0.6)] border-2 border-white/30 transition-all duration-500 ease-in-out hover:scale-110 active:scale-95 ${
          isFooterVisible 
            ? 'translate-y-32 opacity-0 pointer-events-none' 
            : 'translate-y-0 opacity-100 animate-bounce'
        }`}
        aria-label="Chat WhatsApp"
      >
        <MessageCircle size={28} />
      </a>
    </main>
  );
}

export default App;