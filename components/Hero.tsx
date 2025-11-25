import React, { useEffect, useState } from 'react';
import { Crosshair, ShieldAlert, ChevronDown } from 'lucide-react';
import Button from './ui/Button';

const Hero: React.FC = () => {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => setOffset(window.pageYOffset);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToProducts = () => {
    const element = document.getElementById('products');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Parallax Background */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{
          backgroundImage: 'linear-gradient(rgba(5,5,5,0.7), rgba(5,5,5,0.9)), url("https://images.unsplash.com/photo-1595590424283-b8f17842773f?q=80&w=2070&auto=format&fit=crop")',
          transform: `translateY(${offset * 0.5}px)`
        }}
      />
      
      {/* HUD Grid Overlay */}
      <div className="absolute inset-0 z-10 pointer-events-none opacity-20"
        style={{
          backgroundImage: 'linear-gradient(90deg, rgba(255,42,42,0.1) 1px, transparent 1px), linear-gradient(rgba(255,42,42,0.1) 1px, transparent 1px)',
          backgroundSize: '40px 40px'
        }}
      />

      {/* Main Content */}
      <div className="relative z-20 container mx-auto px-4 text-center md:text-left flex flex-col md:flex-row items-center justify-between h-full pt-20">
        
        {/* Text Column */}
        <div className="max-w-3xl space-y-6">
          <div className="inline-flex items-center gap-2 border border-hazard-yellow/50 bg-hazard-yellow/10 px-3 py-1 text-hazard-yellow font-mono text-xs uppercase tracking-widest animate-pulse">
            <ShieldAlert size={14} />
            <span>System Ready // Stock Limited</span>
          </div>
          
          <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl font-bold leading-none tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-gray-500 drop-shadow-[0_0_10px_rgba(255,255,255,0.2)]">
            MARKAZ <br />
            <span className="text-laser-red drop-shadow-[0_0_15px_rgba(255,42,42,0.8)]">HUNTER</span>
          </h1>
          
          <p className="font-sans text-gray-400 text-lg md:text-xl max-w-xl border-l-2 border-laser-red pl-4">
            Pusat Tactical Air Rifle terpercaya. Akurasi nitik, power gahar, siap kirim ke seluruh pelosok nusantara dengan packing safety standar militer.
          </p>

          <div className="flex flex-col md:flex-row gap-4 pt-4">
            <Button onClick={scrollToProducts} icon="crosshair">
              Lihat Katalog
            </Button>
            <Button variant="outline" onClick={() => window.open(`https://wa.me/6282297800321`, '_blank')}>
              Konsultasi WA
            </Button>
          </div>
        </div>

        {/* Decorative HUD Elements (Right Side) - Visible on Desktop */}
        <div className="hidden md:flex flex-col items-end justify-center h-full opacity-60">
          <div className="flex flex-col gap-2 font-mono text-xs text-right text-hud-blue">
             <div className="border-r-2 border-hud-blue pr-4 py-1">
               COORDINATES: <br/> 06°54'S 107°36'E
             </div>
             <div className="border-r-2 border-hud-blue pr-4 py-1 mt-4">
               WIND SPEED: <br/> 5.2 KNOTS NE
             </div>
             <div className="border-r-2 border-hud-blue pr-4 py-1 mt-4">
               STATUS: <br/> ONLINE
             </div>
          </div>
        </div>
      </div>

      {/* Bottom Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 animate-bounce text-gray-500">
        <ChevronDown size={32} />
      </div>

      {/* Vignette */}
      <div className="absolute inset-0 z-10 pointer-events-none bg-[radial-gradient(circle_at_center,transparent_0%,#050505_120%)]"></div>
    </section>
  );
};

export default Hero;