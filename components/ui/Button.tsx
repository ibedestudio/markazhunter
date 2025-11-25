import React from 'react';
import { ArrowRight, Crosshair } from 'lucide-react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline' | 'hazard';
  icon?: 'arrow' | 'crosshair' | null;
}

const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  icon = null,
  className = '',
  ...props 
}) => {
  const baseStyles = "relative inline-flex items-center justify-center gap-2 px-6 py-3 font-heading font-bold uppercase tracking-wider text-sm transition-all duration-300 clip-path-slant";
  
  const variants = {
    primary: "bg-laser-red text-black hover:bg-white hover:text-black shadow-[0_0_10px_rgba(255,42,42,0.5)]",
    outline: "bg-transparent border border-white/30 text-white hover:border-laser-red hover:text-laser-red",
    hazard: "bg-hazard-yellow text-black hover:bg-yellow-400 shadow-[0_0_10px_rgba(234,179,8,0.5)]"
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${className}`}
      style={{
        clipPath: 'polygon(10px 0, 100% 0, 100% calc(100% - 10px), calc(100% - 10px) 100%, 0 100%, 0 10px)'
      }}
      {...props}
    >
      {icon === 'crosshair' && <Crosshair className="w-4 h-4" />}
      {children}
      {icon === 'arrow' && <ArrowRight className="w-4 h-4" />}
    </button>
  );
};

export default Button;