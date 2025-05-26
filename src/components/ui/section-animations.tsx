// Animated elements for section backgrounds to create visual interest
import React, { useMemo } from 'react';
import { theme } from '@/data/theme/theme';

type FloatingShapeProps = {
  count?: number;
  shape?: 'circle' | 'square' | 'mixed';
  colors?: string[];
  size?: 'small' | 'medium' | 'large' | 'mixed';
  opacity?: number;
  blur?: 'none' | 'light' | 'heavy';
  className?: string;
};

export const FloatingShapes = ({
  count = 5,
  shape = 'mixed',
  colors = ['from-teal-500/10 to-yellow-400/5', 'from-yellow-400/10 to-teal-500/5'],
  size = 'mixed',
  opacity = 0.5,
  blur = 'light',
  className = '',
}: FloatingShapeProps) => {
  const shapes = useMemo(() => {
    return Array.from({ length: count }, (_, index) => {
      const isCircle = shape === 'mixed' ? Math.random() > 0.5 : shape === 'circle';
      
      // Determine size based on preference
      const sizeValue = size === 'mixed'
        ? Math.random() * 120 + 40
        : size === 'small' 
          ? Math.random() * 40 + 20 
          : size === 'large'
            ? Math.random() * 200 + 80
            : Math.random() * 80 + 40;
      
      // Assign color gradient from options
      const colorGradient = colors[index % colors.length];
      
      // Set blur amount
      const blurAmount = blur === 'none' 
        ? '' 
        : blur === 'light' 
          ? 'blur-md' 
          : 'blur-xl';
      
      return {
        shape: isCircle ? 'rounded-full' : 'rounded-xl rotate-12',
        size: sizeValue,
        position: {
          top: `${Math.random() * 80 + 10}%`,
          left: `${Math.random() * 80 + 10}%`,
        },
        animation: {
          delay: `${Math.random() * 5}s`,
          duration: `${Math.random() * 10 + 15}s`,
        },
        gradient: colorGradient,
        blur: blurAmount,
      };
    });
  }, [count, shape, colors, size, blur]);

  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      {shapes.map((item, index) => (
        <div
          key={index}
          className={`absolute ${item.shape} ${item.blur} bg-gradient-to-br ${item.gradient} animate-float`}
          style={{
            width: item.size,
            height: item.size,
            top: item.position.top,
            left: item.position.left,
            opacity: opacity,
            animationDelay: item.animation.delay,
            animationDuration: item.animation.duration,
          }}
        />
      ))}
    </div>
  );
};

type ParticleNetworkProps = {
  density?: 'low' | 'medium' | 'high';
  color?: string;
  opacity?: number;
  className?: string;
};

export const ParticleNetwork = ({
  density = 'medium',
  color = 'teal-400',
  opacity = 0.2,
  className = '',
}: ParticleNetworkProps) => {
  // Calculate number of particles based on density
  const particleCount = density === 'low' ? 20 : density === 'medium' ? 40 : 60;
  
  const particles = useMemo(() => {
    return Array.from({ length: particleCount }, () => ({
      position: {
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`,
      },
      size: Math.random() * 3 + 1,
      animation: {
        delay: `${Math.random() * 5}s`,
        duration: `${Math.random() * 20 + 20}s`,
      },
    }));
  }, [particleCount]);

  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      {particles.map((particle, index) => (
        <div
          key={index}
          className={`absolute rounded-full bg-${color}`}
          style={{
            width: particle.size,
            height: particle.size,
            top: particle.position.top,
            left: particle.position.left,
            opacity: opacity,
            animationDelay: particle.animation.delay,
            animationDuration: particle.animation.duration,
            filter: 'blur(0.5px)',
          }}
        />
      ))}
    </div>
  );
};

type GlowEffectProps = {
  position?: 'top' | 'bottom' | 'left' | 'right' | 'center';
  color?: string;
  size?: 'small' | 'medium' | 'large';
  intensity?: 'low' | 'medium' | 'high';
  className?: string;
};

export const GlowEffect = ({
  position = 'center',
  color = 'from-teal-500/20 to-yellow-400/5',
  size = 'medium',
  intensity = 'medium',
  className = '',
}: GlowEffectProps) => {
  // Calculate position
  const positionStyle = {
    top: position === 'top' ? '0%' : position === 'center' ? '50%' : position === 'bottom' ? '100%' : '50%',
    left: position === 'left' ? '0%' : position === 'center' ? '50%' : position === 'right' ? '100%' : '50%',
    transform: position === 'center' ? 'translate(-50%, -50%)' : 
               position === 'top' ? 'translate(-50%, 0)' :
               position === 'bottom' ? 'translate(-50%, -100%)' :
               position === 'left' ? 'translate(0, -50%)' :
               'translate(-100%, -50%)',
  };

  // Calculate size
  const sizeValue = size === 'small' ? '30vw' : size === 'large' ? '80vw' : '50vw';
  
  // Calculate opacity based on intensity
  const opacityValue = intensity === 'low' ? 0.1 : intensity === 'high' ? 0.3 : 0.2;

  return (
    <div 
      className={`absolute rounded-full bg-gradient-to-r ${color} blur-3xl ${className}`}
      style={{
        width: sizeValue,
        height: sizeValue,
        opacity: opacityValue,
        ...positionStyle,
      }}
    />
  );
};
