import React from 'react';
import { experiences } from '@/data/experience';
import { Section, Container, SectionHeader, BackgroundEffects } from '@/components/ui/styled-components';
import { TimelineItem } from '@/components/ui/timeline-item';
import { theme } from '@/data/theme/theme';
import { BackgroundTechIcons } from '@/components/ui/background-tech-icons';
import { GeometricShapes, CircuitPattern } from '@/components/ui/geometric-shapes';
import { ParticleNetwork } from '@/components/ui/section-animations';
import { backendIcons } from '@/data/skills';

const Experience = () => {
  return (
    <Section id="experience">
      {/* Background effects with the theme system */}
      <BackgroundEffects variant="default" />
      
      {/* Add tech icons as background elements */}
      <BackgroundTechIcons 
        techIcons={backendIcons} 
        density="medium"
      />
      
      {/* Add circuit pattern for tech-oriented visual */}
      <CircuitPattern
        opacity={0.1}
        color="teal"
        density="low"
        className="z-0"
      />
      
      {/* Add geometric shapes */}
      <GeometricShapes
        variant="grid"
        density="low"
        colorScheme="teal"
        opacity={0.2}
        className="z-0"
      />
      
      {/* Add subtle particle network */}
      <ParticleNetwork
        density="low" 
        color="yellow-400"
        opacity={0.1}
        className="z-0"
      />
      
      <Container maxWidth="max-w-4xl">
        <SectionHeader title="Professional Experience" />
        
        <div className="relative">
          {/* Timeline line using theme colors */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-px top-0 bottom-0 w-px bg-gradient-to-b from-teal-500 via-teal-400 to-yellow-400"></div>
          
          {/* Map through experiences from data file */}
          {experiences.map((experience, index) => (
            <TimelineItem 
              key={index}
              experience={experience}
              index={index}
              isAlternating={true}
            />
          ))}
        </div>
      </Container>
    </Section>
  );
};

export default Experience;
