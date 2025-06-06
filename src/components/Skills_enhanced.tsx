import React, { useState } from 'react';
import { skillCategories, techIcons, frontendIcons, backendIcons, devopsIcons } from '@/data/skills/data-enhanced';
import { Section, Container, SectionHeader, BackgroundEffects } from '@/components/ui/styled-components';
import { SkillCard } from '@/components/ui/skill-card';
import { BackgroundTechIcons } from '@/components/ui/background-tech-icons';
import { FloatingShapes, GlowEffect, ParticleNetwork } from '@/components/ui/section-animations';
import { GeometricShapes, CodeSnippets } from '@/components/ui/geometric-shapes';
import { Zap, ChevronRight } from 'lucide-react';

const Skills = () => {
  const [activeTab, setActiveTab] = useState('all');
  // Filter categories based on active tab
  const filteredCategories = activeTab === 'all' 
    ? skillCategories 
    : skillCategories.filter(cat => 
        cat.title.toLowerCase().includes(activeTab) || 
        cat.skills.some(skill => skill.toLowerCase().includes(activeTab))
      );

  return (
    <Section id="skills" className="py-24">
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
      
      <Container maxWidth="max-w-6xl">
        <div className="text-center mb-20">
          {/* Enhanced badge with improved hover effect and animation */}
          <div className="inline-flex items-center px-6 py-3 glass-card rounded-full text-teal-400 text-sm font-medium mb-10 relative overflow-hidden group cursor-default animate-fade-in">
            {/* Enhanced glowing background effect */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-1000 pointer-events-none">
              <div className="absolute inset-0 bg-gradient-to-r from-teal-500/20 to-yellow-400/20 animate-pulse-slow"></div>
            </div>
            
            {/* Animated icon */}
            <div className="relative mr-2 group-hover:rotate-12 transition-transform duration-700">
              <div className="absolute inset-0 bg-teal-400/30 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-700 scale-0 group-hover:scale-150"></div>
              <Zap size={16} className="relative z-10 group-hover:animate-pulse" />
            </div>
            
            {/* Gradient text on hover */}
            <span className="relative z-10 bg-gradient-to-r from-white to-white bg-clip-text group-hover:text-transparent group-hover:from-teal-400 group-hover:to-yellow-400 transition-all duration-700 font-medium">Technical Expertise</span>
          </div>
          
          {/* Enhanced section header */}
          <div className="relative">
            {/* Subtle glow behind the title */}
            <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/4 w-[180px] h-[15px] bg-teal-500/10 rounded-full blur-xl"></div>
            
            <SectionHeader 
              title="Skills & Technologies" 
              subtitle="Cutting-edge technologies and proven methodologies for exceptional results"
            />
          </div>
          
          {/* Animated accent line */}
          <div className="w-24 h-1 bg-gradient-to-r from-teal-500 to-yellow-400 rounded-full mx-auto mt-8 animate-pulse-slow"></div>
        </div>
        
        {/* Filter tabs */}
        <div className="flex justify-center mb-12 gap-3 flex-wrap">
          {['all', 'frontend', 'backend', 'devops', 'architecture'].map(tab => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-1
                         ${activeTab === tab 
                           ? 'bg-gradient-to-r from-teal-500 to-teal-600 text-white shadow-lg shadow-teal-500/20' 
                           : 'text-white/70 hover:text-white glass-card'}`}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
              {activeTab === tab && <ChevronRight size={14} className="ml-1 animate-pulse" />}
            </button>
          ))}
        </div>
        
        {/* Skills Grid with enhanced layout and visual effects */}
        <div className="relative">
          {/* Improved background effect for the grid */}
          <div className="absolute inset-0 bg-gradient-to-br from-teal-500/10 to-yellow-400/10 rounded-3xl -m-8 blur-2xl"></div>
          
          {/* Enhanced glowing accent points */}
          <div className="absolute top-1/4 -left-10 w-20 h-20 bg-teal-500/10 rounded-full blur-xl"></div>
          <div className="absolute bottom-1/4 -right-10 w-24 h-24 bg-yellow-400/10 rounded-full blur-xl"></div>
          
          {/* Empty state handling */}
          {filteredCategories.length === 0 ? (
            <div className="text-center py-20 glass-card">
              <div className="text-2xl font-semibold text-white mb-2">No matching skills</div>
              <p className="text-white/70">Try selecting a different filter</p>
            </div>          ) : (
            /* Skill cards in a staggered grid for visual interest - no perspective effect */
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 px-4 relative py-8">
              {filteredCategories.map((category, index) => (
                <div 
                  key={index} 
                  className={`${index % 2 === 0 ? 'md:translate-y-4' : ''} 
                              transition-all duration-700 hover:z-10 animate-fade-in`}
                  style={{ 
                    animationDelay: `${index * 0.2}s`
                  }}
                >
                  <div className="transition-all duration-500 transform hover:shadow-xl hover:shadow-teal-500/10 w-full">
                    <SkillCard 
                      category={category}
                      index={index}
                    />
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </Container>
    </Section>
  );
};

export default Skills;
