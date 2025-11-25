import React from 'react';
import { CONTACT_INFO } from '../constants';
import Button from './ui/Button';
import { Facebook, Instagram, Phone, MapPin } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <footer id="contact" className="bg-black relative pt-20 pb-10 overflow-hidden">
      {/* Hazard Stripe Top Border */}
      <div className="absolute top-0 left-0 w-full h-4 bg-hazard-stripe"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
          
          {/* CTA Box */}
          <div className="bg-hazard-yellow text-black p-8 clip-path-slant relative group overflow-hidden">
             <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity"></div>
             <h3 className="font-heading text-3xl font-bold mb-4 uppercase">Siap Order Unit?</h3>
             <p className="font-sans font-medium mb-6 max-w-md">
               Konsultasikan kebutuhan hunting anda sekarang. Admin fast response, ramah, dan paham teknis.
             </p>
             <Button 
               variant="primary" 
               className="bg-black text-white hover:bg-white hover:text-black shadow-none border border-transparent"
               onClick={() => window.open(`https://wa.me/${CONTACT_INFO.whatsapp}`, '_blank')}
             >
               Chat WhatsApp Admin
             </Button>
          </div>

          {/* Info */}
          <div className="space-y-6 text-gray-400 font-mono text-sm">
             <div className="flex items-center gap-4">
               <div className="p-3 bg-dark-metal border border-white/10 text-laser-red">
                 <Phone size={20} />
               </div>
               <div>
                 <span className="block text-xs text-gray-500">HOTLINE / WA</span>
                 <span className="text-white text-lg tracking-wider">{CONTACT_INFO.whatsapp}</span>
               </div>
             </div>
             
             <div className="flex items-center gap-4">
               <div className="p-3 bg-dark-metal border border-white/10 text-laser-red">
                 <MapPin size={20} />
               </div>
               <div>
                 <span className="block text-xs text-gray-500">BASE CAMP</span>
                 <span className="text-white text-lg tracking-wider">{CONTACT_INFO.location}</span>
               </div>
             </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-gray-600 font-mono">
            © {new Date().getFullYear()} MARKAZ HUNTER. TACTICAL SUPPLY. ALL RIGHTS RESERVED.
          </p>
          <div className="flex gap-4">
            <a href="#" className="text-gray-500 hover:text-white transition-colors"><Instagram size={18} /></a>
            <a href="#" className="text-gray-500 hover:text-white transition-colors"><Facebook size={18} /></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Contact;