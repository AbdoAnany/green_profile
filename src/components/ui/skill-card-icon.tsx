import React from 'react';
import { LucideIcon } from 'lucide-react';

type SkillCardIconProps = {
  icon: LucideIcon;
  color: string;
  iconColor: string;
  size?: number;
  className?: string;
};

export const SkillCardIcon = ({ 
  icon: Icon, 
  color, 
  iconColor,
  size = 32,
  className = ''
}: SkillCardIconProps) => {
  return (
    <div className={`relative ${className}`}>
      {/* Decorative floating mini icons */}
      <div className="absolute -right-2 -top-2 w-5 h-5 rounded-full bg-gradient-to-r from-teal-500/30 to-teal-500/10 backdrop-blur-sm animate-float" 
           style={{ animationDuration: '6s', animationDelay: '0.5s' }}/>
      <div className="absolute -left-2 -bottom-2 w-4 h-4 rounded-full bg-gradient-to-r from-yellow-400/30 to-yellow-400/10 backdrop-blur-sm animate-float" 
           style={{ animationDuration: '7s', animationDelay: '1s' }}/>
      
      {/* Icon background with glow */}
      <div className="absolute inset-0 bg-gradient-to-r from-teal-500/30 to-yellow-400/30 rounded-2xl blur-md opacity-60 group-hover:opacity-100 group-hover:blur-lg transition-all duration-700 -z-10 group-hover:scale-125"></div>
      
      {/* Interactive particles */}
      <div className="absolute w-full h-full overflow-hidden rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700">
        {Array.from({ length: 6 }).map((_, i) => (
          <div 
            key={i}
            className="absolute w-1.5 h-1.5 rounded-full bg-white/30"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animation: `float ${3 + Math.random() * 3}s ease-in-out ${Math.random() * 2}s infinite alternate`,
              opacity: 0.5 + Math.random() * 0.5
            }}
          />
        ))}
      </div>
      
      {/* Main icon container */}
      <div className={`relative z-10 w-[70px] h-[70px] rounded-2xl bg-gradient-to-r ${color} flex items-center justify-center shadow-2xl group-hover:shadow-teal-500/20 transition-all duration-500 group-hover:scale-110 group-hover:rotate-3`}>
        <Icon size={size} className={`${iconColor} transition-transform duration-500 group-hover:scale-110`} />
        
        {/* Corner accents */}
        <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-white/20 rounded-tr-lg group-hover:border-white/40 transition-colors duration-500"></div>
        <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-white/20 rounded-bl-lg group-hover:border-white/40 transition-colors duration-500"></div>
      </div>
    </div>
  );
};
