import React from 'react';

interface TacticalCardProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'primary' | 'secondary' | 'hazard';
  hoverEffect?: boolean;
  onClick?: () => void;
}

const TacticalCard: React.FC<TacticalCardProps> = ({ 
  children, 
  className = '', 
  variant = 'primary',
  hoverEffect = false,
  onClick
}) => {
  const borderColors = {
    primary: 'border-white/20 hover:border-laser-red',
    secondary: 'border-white/20 hover:border-hud-blue',
    hazard: 'border-hazard-yellow/50 hover:border-hazard-yellow',
  };

  const bgColors = {
    primary: 'bg-dark-metal/40',
    secondary: 'bg-dark-metal/40',
    hazard: 'bg-hazard-yellow/5',
  };

  return (
    <div 
      onClick={onClick}
      className={`
        relative group transition-all duration-300 ease-out
        border-l-2 border-r-2 
        ${borderColors[variant]}
        ${bgColors[variant]}
        backdrop-blur-sm
        ${hoverEffect ? 'hover:-translate-y-1 hover:shadow-[0_0_15px_rgba(255,42,42,0.2)]' : ''}
        ${onClick ? 'cursor-pointer' : ''}
        ${className}
      `}
      style={{
        clipPath: 'polygon(0 0, 100% 0, 100% calc(100% - 15px), calc(100% - 15px) 100%, 0 100%)'
      }}
    >
      {/* Corner Accents */}
      <div className={`absolute top-0 left-0 w-2 h-2 border-t border-l ${variant === 'hazard' ? 'border-hazard-yellow' : 'border-white/50'}`}></div>
      <div className={`absolute top-0 right-0 w-2 h-2 border-t border-r ${variant === 'hazard' ? 'border-hazard-yellow' : 'border-white/50'}`}></div>
      <div className={`absolute bottom-0 left-0 w-2 h-2 border-b border-l ${variant === 'hazard' ? 'border-hazard-yellow' : 'border-white/50'}`}></div>
      
      {/* Content */}
      <div className="p-4 md:p-6 relative z-10 h-full">
        {children}
      </div>

      {/* Grid overlay for texture */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(18,18,18,0)_1px,transparent_1px),linear-gradient(90deg,rgba(18,18,18,0)_1px,transparent_1px)] bg-[size:20px_20px] bg-[rgba(255,255,255,0.02)] pointer-events-none"></div>
    </div>
  );
};

export default TacticalCard;