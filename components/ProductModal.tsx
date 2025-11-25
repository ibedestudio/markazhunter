import React from 'react';
import { X, CheckCircle2, MessageSquare } from 'lucide-react';
import { Product } from '../types';
import { CONTACT_INFO } from '../constants';
import Button from './ui/Button';

interface ProductModalProps {
  product: Product;
  onClose: () => void;
}

const ProductModal: React.FC<ProductModalProps> = ({ product, onClose }) => {
  const handleBuy = () => {
    const message = `Halo Markaz Hunter, saya tertarik dengan unit ${product.name}. Apakah stok masih ready?`;
    const url = `https://wa.me/${CONTACT_INFO.whatsapp}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/80 backdrop-blur-md"
        onClick={onClose}
      />

      {/* Modal Content */}
      <div className="relative w-full max-w-4xl bg-deep-black border border-white/10 shadow-[0_0_50px_rgba(0,0,0,0.8)] flex flex-col md:flex-row overflow-hidden max-h-[90vh] md:max-h-none animate-in fade-in zoom-in duration-300">
        
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 z-20 text-white hover:text-laser-red transition-colors bg-black/50 p-1"
        >
          <X size={24} />
        </button>

        {/* Image Section */}
        <div className="w-full md:w-1/2 relative bg-dark-metal">
           <div className="absolute inset-0 bg-cover bg-center opacity-80" style={{ backgroundImage: `url(${product.image})` }} />
           <div className="absolute inset-0 bg-gradient-to-t from-deep-black via-transparent to-transparent" />
           <div className="absolute bottom-4 left-4">
             <span className="bg-laser-red text-black px-2 py-1 font-bold text-xs font-mono uppercase">
               {product.category}
             </span>
           </div>
        </div>

        {/* Details Section */}
        <div className="w-full md:w-1/2 p-6 md:p-8 flex flex-col overflow-y-auto">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-2 text-white">
            {product.name}
          </h2>
          <div className="text-2xl font-mono text-hud-blue mb-6">
            Rp {product.price.toLocaleString('id-ID')}
          </div>

          <div className="space-y-6 flex-grow">
            <div className="border-l-2 border-white/20 pl-4">
              <p className="text-gray-300 font-sans leading-relaxed">
                {product.description}
              </p>
            </div>

            <div className="bg-white/5 p-4 border border-white/10">
              <h3 className="text-sm font-mono text-gray-400 mb-3 uppercase tracking-wider border-b border-white/10 pb-1">
                Technical Specifications
              </h3>
              <ul className="space-y-2">
                {product.specs.map((spec, index) => (
                  <li key={index} className="flex items-center gap-2 text-sm text-gray-200">
                    <CheckCircle2 size={14} className="text-laser-red" />
                    <span>{spec}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-white/10 flex gap-4">
             <Button onClick={handleBuy} className="flex-1" icon="crosshair">
               Beli via WhatsApp
             </Button>
          </div>
        </div>
        
        {/* Decorative Corner */}
        <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-hazard-yellow pointer-events-none" />
      </div>
    </div>
  );
};

export default ProductModal;