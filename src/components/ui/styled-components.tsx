// Common styled components that can be reused across the portfolio
import React, { ReactNode } from 'react';
import { theme } from '@/data/theme/theme';

// Props for the section component
type SectionProps = {
  id: string;
  children: ReactNode;
  className?: string;
};

// Section component with consistent styling
export const Section = ({ id, children, className = '' }: SectionProps) => {
  return (
    <section
      id={id}
      className={`${theme.components.section} ${theme.components.sectionBackground} ${className}`}
    >
      {children}
    </section>
  );
};

// Container component for consistent content sizing
type ContainerProps = {
  children: ReactNode;
  className?: string;
  maxWidth?: string;
};

export const Container = ({ 
  children, 
  className = '', 
  maxWidth = 'max-w-7xl' 
}: ContainerProps) => {
  return (
    <div className={`${theme.components.container} ${maxWidth} ${className}`}>
      {children}
    </div>
  );
};

// Section header with consistent styling
type SectionHeaderProps = {
  title: string;
  subtitle?: string;
};

export const SectionHeader = ({ title, subtitle }: SectionHeaderProps) => {
  return (
    <div className="text-center mb-16">
      <h2 className={theme.components.heading}>
        {title}
      </h2>
      {subtitle && (
        <p className="text-xl text-white/70 max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  );
};

// Background effects component for consistent section backgrounds
type BackgroundEffectsProps = {
  variant?: 'default' | 'subtle' | 'intense';
  className?: string;
};

export const BackgroundEffects = ({ variant = 'default', className = '' }: BackgroundEffectsProps) => {
  return (
    <>
      {/* Radial gradient */}
      <div className={`absolute inset-0 ${theme.gradients.tealRadial} ${className}`}></div>
      
      {/* Floating elements based on variant */}
      {variant !== 'subtle' && (
        <>
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-gradient-to-r rounded-full blur-3xl animate-float"
               style={{ 
                 backgroundImage: `linear-gradient(to right, rgba(20,184,166,0.1), rgba(250,204,21,0.1))` 
               }}></div>
          
          {variant === 'intense' && (
            <div className="absolute bottom-1/4 left-1/4 w-72 h-72 bg-gradient-to-r rounded-full blur-3xl animate-float"
                 style={{ 
                   backgroundImage: `linear-gradient(to right, rgba(250,204,21,0.1), rgba(20,184,166,0.1))`,
                   animationDelay: '2s' 
                 }}></div>
          )}
        </>
      )}
    </>
  );
};

// Card component with consistent styling
type CardProps = {
  children: ReactNode;
  className?: string;
  hover?: boolean;
};

export const Card = ({ children, className = '', hover = true }: CardProps) => {
  const hoverClass = hover ? 'glass-card-hover' : '';
  
  return (
    <div className={`glass-card ${hoverClass} rounded-2xl p-8 backdrop-blur-sm border border-white/10 hover:border-teal-500/20 transition-all duration-500 ${className}`}>
      {children}
    </div>
  );
};

// Tag component for technology tags, categories, etc.
type TagProps = {
  children: ReactNode;
  className?: string;
};

export const Tag = ({ children, className = '' }: TagProps) => {
  return (
    <span className={`${theme.components.tag} ${className}`}>
      {children}
    </span>
  );
};

// Gradient badge component
type GradientBadgeProps = {
  children: ReactNode;
  gradient: string;
  className?: string;
};

export const GradientBadge = ({ children, gradient, className = '' }: GradientBadgeProps) => {
  return (
    <div className={`inline-block px-4 py-2 rounded-full text-sm font-semibold bg-gradient-to-r ${gradient} text-white shadow-lg ${className}`}>
      {children}
    </div>
  );
};
