// Enhanced background tech icons component with smoother animations and gradient effects
import React, { useMemo } from 'react';
import { TechIcon } from '@/data/skills/data';

type BackgroundTechIconsProps = {
  techIcons: TechIcon[];
  density?: 'low' | 'medium' | 'high';
};

export const BackgroundTechIcons = ({ 
  techIcons, 
  density = 'medium' 
}: BackgroundTechIconsProps) => {
  // Generate a fixed set of positions to avoid re-renders
  const iconPositions = useMemo(() => {
    const count = density === 'low' ? 8 : density === 'medium' ? 12 : 20;
    return Array.from({ length: count }, () => ({
      top: `${Math.random() * 80 + 10}%`,
      left: `${Math.random() * 80 + 10}%`,
      size: Math.random() * 30 + 25,
      rotation: Math.random() * 180,
      duration: Math.random() * 8 + 15,
      delay: `${Math.random() * 10}s`,
      opacity: Math.random() * 0.08 + 0.05,
    }));
  }, [density]);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {iconPositions.map((position, index) => {
        const TechIconComponent = techIcons[index % techIcons.length].icon;
        
        return (
          <div
            key={index}
            className="absolute animate-float transition-opacity duration-1000 hover:opacity-20"
            style={{
              top: position.top,
              left: position.left,
              animationDelay: position.delay,
              animationDuration: `${position.duration}s`,
              transform: `rotate(${position.rotation}deg)`,
              opacity: position.opacity,
            }}
          >
            <div className="relative">
              <div className="absolute inset-0 blur-md bg-gradient-to-br from-teal-500/20 to-yellow-500/10 rounded-full" style={{ padding: '50%' }}></div>
              <TechIconComponent 
                size={position.size} 
                className="relative z-10 text-white/90" 
              />
            </div>
          </div>
        );
      })}
    </div>
  );
};
