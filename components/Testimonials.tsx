import React from 'react';
import { TESTIMONIALS } from '../constants';
import TacticalCard from './ui/TacticalCard';
import { Star, Quote } from 'lucide-react';

const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-20 bg-[#080808] border-t border-white/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-block border border-hud-blue/30 px-4 py-1 mb-4 bg-hud-blue/5">
            <span className="font-mono text-hud-blue text-xs tracking-widest">FIELD REPORT</span>
          </div>
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-white">
            TESTIMONI <span className="text-gray-600">HUNTER</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((testi) => (
            <TacticalCard key={testi.id} variant="secondary" className="bg-[#0c0c0c]">
              <Quote className="text-white/20 mb-4 w-8 h-8" />
              <p className="font-sans text-gray-300 mb-6 italic min-h-[80px]">"{testi.text}"</p>
              
              <div className="flex items-center justify-between border-t border-white/10 pt-4">
                <div>
                  <h4 className="font-heading font-bold text-white">{testi.name}</h4>
                  <span className="text-xs font-mono text-gray-500">{testi.location}</span>
                </div>
                <div className="flex text-hazard-yellow">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      size={14} 
                      fill={i < testi.rating ? "currentColor" : "none"} 
                      className={i < testi.rating ? "text-hazard-yellow" : "text-gray-700"}
                    />
                  ))}
                </div>
              </div>
            </TacticalCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;