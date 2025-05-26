import React from 'react';
import { skillCategories, techIcons } from '@/data/skills/data';
import { Section, Container, SectionHeader, BackgroundEffects } from '@/components/ui/styled-components';
import { SkillCard } from '@/components/ui/skill-card';
import { BackgroundTechIcons } from '@/components/ui/background-tech-icons';

const Skills = () => {
  return (
    <Section id="skills" className="py-24">
      {/* Background with theme system */}
      <BackgroundEffects variant="default" />
      
      {/* Floating Tech Icons without flashing effect */}
      <BackgroundTechIcons techIcons={techIcons} />
      
      <Container maxWidth="max-w-6xl">
        <SectionHeader 
          title="Skills & Technologies" 
          subtitle="Cutting-edge technologies and proven methodologies for exceptional results"
        />
        
        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => (
            <SkillCard 
              key={index}
              category={category}
              index={index}
            />
          ))}
        </div>
      </Container>
    </Section>
  );
};

export default Skills;
