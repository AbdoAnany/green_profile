import React from 'react';
import { skillCategories, techIcons, frontendIcons, backendIcons, devopsIcons } from '@/data/skills';
import { Section, Container, SectionHeader, BackgroundEffects } from '@/components/ui/styled-components';
import { SkillCard } from '@/components/ui/skill-card';
import { BackgroundTechIcons } from '@/components/ui/background-tech-icons';
import { FloatingShapes, GlowEffect, ParticleNetwork } from '@/components/ui/section-animations';
import { GeometricShapes, CodeSnippets } from '@/components/ui/geometric-shapes';
import { Zap } from 'lucide-react';

const Skills = () => {  return (
    <Section id="skills" className="py-16 sm:py-20 lg:py-24">
      {/* Enhanced background effects */}
      <BackgroundEffects variant="default" />
      <GlowEffect 
        position="top" 
        color="from-teal-500/15 to-transparent"
        size="large"
        intensity="medium"
      />
      <FloatingShapes 
        count={3} 
        shape="circle" 
        size="large" 
        opacity={0.07}
        blur="heavy"
      />
      
      {/* Improved floating tech icons with more density */}
      <BackgroundTechIcons 
        techIcons={[...frontendIcons, ...backendIcons, ...devopsIcons]} 
        density="high" 
      />
      
      {/* Add code snippets for tech-oriented visuals */}
      <CodeSnippets
        opacity={0.06}
        count={8}
        className="z-0"
      />
      
      {/* Add geometric shapes */}
      <GeometricShapes
        variant="tech"
        density="medium"
        colorScheme="mixed"
        opacity={0.15}
        className="z-0"
      />
      
      {/* Add particle network for more tech feel */}
      <ParticleNetwork
        density="medium"
        color="teal-400"
        opacity={0.2}
        className="z-0"
      />
        <Container maxWidth="max-w-7xl">        
        <div className="text-center mb-16 sm:mb-20 lg:mb-24">
          {/* Enhanced badge with improved hover effect and animation */}
          <div className="inline-flex items-center px-4 sm:px-6 py-2 sm:py-3 glass-card rounded-full text-teal-400 text-xs sm:text-sm font-medium mb-8 sm:mb-10 relative overflow-hidden group cursor-default animate-fade-in">
            {/* Enhanced glowing background effect */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-1000 pointer-events-none">
              <div className="absolute inset-0 bg-gradient-to-r from-teal-500/20 to-yellow-400/20 animate-pulse-slow"></div>
            </div>
            
            {/* Animated icon */}
            <div className="relative mr-2 group-hover:rotate-12 transition-transform duration-700">
              <div className="absolute inset-0 bg-teal-400/30 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-700 scale-0 group-hover:scale-150"></div>
              <Zap size={14} className="sm:w-4 sm:h-4 relative z-10 group-hover:animate-pulse" />
            </div>
            
            {/* Gradient text on hover */}
            <span className="relative z-10 bg-gradient-to-r from-white to-white bg-clip-text group-hover:text-transparent group-hover:from-teal-400 group-hover:to-yellow-400 transition-all duration-700 font-medium">Technical Expertise</span>
          </div>
          
          {/* Enhanced section header */}
          <div className="relative">
            {/* Subtle glow behind the title */}
            <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/4 w-[120px] sm:w-[180px] h-[10px] sm:h-[15px] bg-teal-500/10 rounded-full blur-xl"></div>
            
            <SectionHeader 
              title="Skills & Technologies" 
              subtitle="Cutting-edge technologies and proven methodologies for exceptional results"
            />
          </div>
          
          {/* Animated accent line */}
          <div className="w-16 sm:w-24 h-1 bg-gradient-to-r from-teal-500 to-yellow-400 rounded-full mx-auto mt-6 sm:mt-8 animate-pulse-slow"></div>
        </div>          {/* Skills Grid with enhanced layout and visual effects */}
        <div className="relative">
          {/* Improved background effect for the grid */}
          <div className="absolute inset-0 bg-gradient-to-br from-teal-500/10 to-yellow-400/10 rounded-2xl sm:rounded-3xl -m-4 sm:-m-8 blur-2xl"></div>
          
          {/* Enhanced glowing accent points */}
          <div className="absolute top-1/4 -left-6 sm:-left-10 w-12 h-12 sm:w-20 sm:h-20 bg-teal-500/10 rounded-full blur-xl"></div>
          <div className="absolute bottom-1/4 -right-6 sm:-right-10 w-16 h-16 sm:w-24 sm:h-24 bg-yellow-400/10 rounded-full blur-xl"></div>            
          
          {/* Skill cards in a responsive grid with staggered animations */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 px-2 sm:px-4 relative py-6 sm:py-8">
            {skillCategories.map((category, index) => (
              <div 
                key={index} 
                className={`${index % 2 === 0 ? 'sm:translate-y-0' : ''} 
                            transition-all duration-700 hover:z-10 animate-slide-in-up`}
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <SkillCard 
                  category={category}
                  index={index}
                />
              </div>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default Skills;
