import React from 'react';
import { Github, ExternalLink, Zap } from 'lucide-react';
import { projects } from '@/data/projects/data';
import { Section, Container, SectionHeader, BackgroundEffects } from '@/components/ui/styled-components';
import { ProjectCard, FeaturedProjectCard } from '@/components/ui/project-card';
import { theme } from '@/data/theme/theme';

const Projects = () => {
  const featuredProjects = projects.filter(p => p.featured);
  const regularProjects = projects.filter(p => !p.featured);

  return (
    <Section id="projects" className="py-24">
      {/* Background effects with the theme system */}
      <BackgroundEffects variant="intense" />
      
      {/* Geometric Accents */}
      <div className="absolute top-32 right-1/4 w-16 h-16 border border-teal-400/20 rounded-xl rotate-45 animate-float" 
           style={{animationDelay: '1s', animationDuration: '7s'}}></div>
      <div className="absolute bottom-40 left-1/4 w-24 h-24 border border-yellow-500/20 rounded-full animate-float" 
           style={{animationDelay: '3s', animationDuration: '12s'}}></div>
      
      <Container maxWidth="max-w-7xl">
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-6 py-3 glass-card rounded-full text-teal-400 text-sm font-medium mb-8">
            <Zap size={16} className="mr-2" />
            Featured Work
          </div>
          
          <SectionHeader title="My Projects" subtitle="A collection of my recent work and personal projects" />
        </div>
        
        {/* Featured Projects Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {featuredProjects.map((project, index) => (
            <FeaturedProjectCard 
              key={index}
              project={project}
              index={index}
            />
          ))}
        </div>
        
        {/* Regular Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {regularProjects.map((project, index) => (
            <ProjectCard 
              key={index}
              project={project}
              index={index + featuredProjects.length}
            />
          ))}
        </div>
        
        {/* GitHub Link */}
        <div className="flex justify-center mt-20">
          <a
            href="https://github.com/abdelrahman-anany"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 glass-card px-8 py-4 rounded-xl text-white hover:bg-white/10 transition-colors duration-300"
          >
            <Github size={20} />
            View All Projects on GitHub
            <ExternalLink size={16} />
          </a>
        </div>
      </Container>
    </Section>
  );
};

export default Projects;
