import React, { useState } from 'react';
import { PRODUCTS } from '../constants';
import TacticalCard from './ui/TacticalCard';
import ProductModal from './ProductModal';
import { Product } from '../types';
import { Search } from 'lucide-react';

const Products: React.FC = () => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [filter, setFilter] = useState('');

  const filteredProducts = PRODUCTS.filter(p => 
    p.name.toLowerCase().includes(filter.toLowerCase()) || 
    p.category.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <section id="products" className="py-20 bg-deep-black relative">
      {/* Background Grid */}
      <div className="absolute inset-0 z-0 opacity-10" 
        style={{ 
          backgroundImage: 'radial-gradient(circle, #333 1px, transparent 1px)',
          backgroundSize: '20px 20px'
        }} 
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div>
            <h2 className="font-heading text-4xl md:text-5xl font-bold mb-2">
              <span className="text-white">ARSENAL</span> <span className="text-stroke-red text-transparent bg-clip-text bg-laser-red">CATALOG</span>
            </h2>
            <div className="h-1 w-24 bg-laser-red skew-x-12"></div>
          </div>

          {/* Search/Filter */}
          <div className="relative w-full md:w-64">
             <input 
               type="text" 
               placeholder="Cari Unit..." 
               value={filter}
               onChange={(e) => setFilter(e.target.value)}
               className="w-full bg-dark-metal/50 border border-white/20 text-white px-4 py-2 pl-10 focus:outline-none focus:border-laser-red font-mono text-sm clip-path-slant"
             />
             <Search className="absolute left-3 top-2.5 text-gray-500 w-4 h-4" />
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <TacticalCard 
              key={product.id} 
              variant="primary" 
              hoverEffect={true}
              onClick={() => setSelectedProduct(product)}
              className="h-full flex flex-col"
            >
              <div className="relative aspect-[4/3] mb-4 overflow-hidden bg-black/50 border border-white/5 group-hover:border-laser-red/30 transition-colors">
                 <img 
                   src={product.image} 
                   alt={product.name} 
                   className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 grayscale group-hover:grayscale-0"
                   loading="lazy"
                 />
                 {/* Status Badge */}
                 <div className={`absolute top-2 right-2 px-2 py-1 text-[10px] font-bold font-mono uppercase tracking-wider
                   ${product.status === 'READY' ? 'bg-green-600/80 text-white' : ''}
                   ${product.status === 'SOLD' ? 'bg-red-600/80 text-white' : ''}
                   ${product.status === 'PRE-ORDER' ? 'bg-hazard-yellow/80 text-black' : ''}
                 `}>
                   {product.status}
                 </div>
              </div>

              <div className="flex justify-between items-start mb-2">
                <div>
                   <span className="text-xs font-mono text-gray-500 uppercase">{product.category}</span>
                   <h3 className="font-heading text-xl font-bold text-white group-hover:text-laser-red transition-colors">{product.name}</h3>
                </div>
              </div>

              <div className="mt-auto pt-4 border-t border-white/10 flex justify-between items-center">
                 <span className="font-mono text-hud-blue text-lg">Rp {product.price.toLocaleString('id-ID')}</span>
                 <span className="text-xs text-gray-500 flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                    DETAIL <span className="text-laser-red">&gt;&gt;</span>
                 </span>
              </div>
            </TacticalCard>
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-20 text-gray-500 font-mono">
            // NO DATA FOUND. ADJUST PARAMETERS.
          </div>
        )}
      </div>

      {selectedProduct && (
        <ProductModal 
          product={selectedProduct} 
          onClose={() => setSelectedProduct(null)} 
        />
      )}
    </section>
  );
};

export default Products;