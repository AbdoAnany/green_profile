import React from "react";
import { Github, ExternalLink, Zap, Code, ArrowRight } from "lucide-react";
import {
  getFeaturedProjects,
  getRegularProjects,
  getProjectsByCategory,
  projects,
} from "@/data/projects/data";
import {
  Section,
  Container,
  SectionHeader,
  BackgroundEffects,
} from "@/components/ui/styled-components";
import { ProjectCard, FeaturedProjectCard } from "@/components/ui/project-card";
import {
  FloatingShapes,
  GlowEffect,
  ParticleNetwork,
} from "@/components/ui/section-animations";
import { BackgroundTechIcons } from "@/components/ui/background-tech-icons";
import {
  GeometricShapes,
  CircuitPattern,
  CodeSnippets,
} from "@/components/ui/geometric-shapes";
import { theme } from "@/data/theme/theme";
import { devopsIcons, projectIcons } from "@/data/skills";
import { heroData } from "@/data/hero/hero-data";
const Projects = () => {
  const featuredProjects = getFeaturedProjects();
  const regularProjects = projects.filter((p) => !p.featured);
  return (
    <Section id="projects" className="py-16 sm:py-20 md:py-24">
      {/* Enhanced background effects */}
      <BackgroundEffects variant="intense" />
      <GlowEffect
        position="center"
        color="from-yellow-400/10 to-teal-500/15"
        size="large"
        intensity="medium"
      />
      <FloatingShapes
        count={5}
        shape="mixed"
        size="mixed"
        opacity={0.08}
        blur="light"
      />
      <ParticleNetwork density="low" opacity={0.15} />

      {/* Add tech icons specific to devops and deployment */}
      <BackgroundTechIcons techIcons={projectIcons} density="high" />

      {/* Add circuit pattern for tech-oriented visual */}
      <CircuitPattern
        opacity={0.08}
        color="yellow"
        density="medium"
        className="z-0"
      />

      {/* Add code snippets scattered through background */}
      <CodeSnippets opacity={0.05} count={6} className="z-0" />

      {/* Add creative geometric shapes */}
      <GeometricShapes
        variant="creative"
        density="medium"
        colorScheme="mixed"
        opacity={0.1}
        className="z-0"
      />      <Container maxWidth="max-w-8xl">
        <div className="text-center mb-16 sm:mb-20 md:mb-24">
          {/* Enhanced badge with gradient border and animations */}
          <div className="inline-flex items-center px-4 sm:px-6 py-2 sm:py-3 glass-card rounded-full text-teal-400 text-xs sm:text-sm font-medium mb-6 sm:mb-8 relative overflow-hidden group cursor-default">
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
              <div
                className="absolute inset-0 bg-gradient-to-r from-teal-500/20 to-yellow-400/20 animate-pulse"
                style={{ animationDuration: "3s" }}
              ></div>
            </div>
            <Zap size={14} className="sm:w-4 sm:h-4 mr-2 group-hover:animate-pulse" />
            <span className="relative z-10 bg-gradient-to-r from-white to-white bg-clip-text group-hover:text-transparent group-hover:from-teal-400 group-hover:to-yellow-400 transition-all duration-500">
              Featured Work
            </span>
          </div>

          <SectionHeader
            title="My Projects"
            subtitle="A showcase of my recent work, personal projects and technical explorations"
          />
        </div>        {/* Featured Projects Section */}
        <div className="mb-16 sm:mb-20 md:mb-24 relative">
          {/* Section highlight for featured projects */}
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-teal-500/5 to-transparent -m-6 blur-xl"></div>

          <div className="flex items-center mb-8 sm:mb-10">
            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-r from-teal-500/20 to-yellow-400/20 flex items-center justify-center mr-3 sm:mr-4">
              <Code size={16} className="sm:w-5 sm:h-5 text-teal-400" />
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-white">Featured Projects</h3>
            <div className="h-[1px] flex-grow ml-4 sm:ml-6 bg-gradient-to-r from-teal-500/30 to-transparent"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-10">
            {featuredProjects.map((project, index) => (
              <FeaturedProjectCard
                key={index}
                project={project}
                index={index}
              />
            ))}
          </div>
        </div>        {/* Regular Projects Section with enhanced visibility */}
        <div className="relative mt-12 sm:mt-14 md:mt-16 pt-8 sm:pt-10">
          {/* Section highlight for all projects */}
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-yellow-400/10 to-teal-500/5 -m-6 blur-xl"></div>

          <div className="flex items-center mb-8 sm:mb-10 md:mb-12">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-r from-yellow-400/30 to-teal-500/20 flex items-center justify-center mr-3 sm:mr-4 shadow-md shadow-yellow-400/10">
              <Zap size={18} className="sm:w-5 sm:h-5 md:w-6 md:h-6 text-white" />
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-white">All Projects</h3>
            <div className="h-[1px] flex-grow ml-4 sm:ml-6 bg-gradient-to-r from-yellow-400/50 to-transparent"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10">
            {regularProjects.map((project, index) => (
              <ProjectCard
                key={index}
                project={project}
                index={index + featuredProjects.length}
              />
            ))}
          </div>
        </div>        {/* Enhanced GitHub Link with animation */}
        <div className="flex justify-center mt-16 sm:mt-20 md:mt-24">
          <a
            href={heroData.social.github}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2 sm:gap-3 glass-card px-6 sm:px-8 py-3 sm:py-4 rounded-xl text-white hover:bg-gradient-to-r hover:from-teal-500/10 hover:to-yellow-400/10 transition-all duration-500 border border-transparent hover:border-teal-500/30 relative overflow-hidden"
          >
            {/* Animated background effect */}
            <div className="absolute inset-0 -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-1000">
              <div className="absolute inset-0 bg-gradient-to-r from-teal-500/10 to-yellow-400/10 blur-md"></div>
            </div>

            <Github
              size={18}
              className="sm:w-5 sm:h-5 group-hover:scale-110 transition-transform duration-300"
            />
            <span className="text-sm sm:text-base">View All Projects on GitHub</span>
            <ArrowRight
              size={14}
              className="sm:w-4 sm:h-4 group-hover:translate-x-2 transition-transform duration-500"
            />
          </a>
        </div>
      </Container>
    </Section>
  );
};

export default Projects;
