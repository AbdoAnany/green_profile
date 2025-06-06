// Project card component for featured and regular projects
import React from 'react';
import { Card, Tag, GradientBadge } from './styled-components';
import { Project } from '@/data/projects/data';
import { Star, Users, Download, Github, ExternalLink, ArrowRight, Calendar } from 'lucide-react';
import { formatDate } from '@/utils/date-utils';

type ProjectCardProps = {
  project: Project;
  index: number;
  featured?: boolean;
};

export const ProjectCard = ({ project, index, featured = false }: ProjectCardProps) => {
  const animationDelay = `${index * 0.2}s`;  
  // Use consistent border radius for all cards
  const cardRadius = "rounded-xl sm:rounded-2xl"; 
  const cardClass = featured ? 
    `${cardRadius} overflow-hidden h-full animate-slide-up` : 
    `${cardRadius} overflow-hidden h-full animate-fade-in`;
  
  return (    
    <div 
      className={`group glass-card glass-card-hover ${cardClass} hover:shadow-2xl hover:shadow-teal-500/10 transition-all duration-700`}
      style={{ animationDelay }}
    >
      <div className={`relative overflow-hidden ${featured ? 'h-64 sm:h-72 md:h-80' : 'h-56 sm:h-64 md:h-[360px]'} ${cardRadius}`}>
        {/* Project Image with enhanced hover effect */}
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:filter group-hover:brightness-110"
        />
          
        {/* Gradient Overlay with enhanced visibility for text elements */}
        <div className={`absolute inset-0 bg-gradient-to-b from-dark-900/70 via-dark-800/50 to-dark-900/95 opacity-95 group-hover:opacity-100 transition-opacity duration-500`}></div>
        
        {/* Glowing Border Effect on Hover with matched border radius */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
          <div className={`absolute inset-0 ${cardRadius} border border-transparent bg-gradient-to-br from-teal-500/40 to-yellow-400/40 opacity-0 group-hover:opacity-100 transition-opacity duration-700`} style={{maskImage: 'linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0)', maskComposite: 'exclude'}}></div>
        </div>
          
        {/* Project Info Overlay with improved mobile layout */}
        <div className="absolute inset-0 flex flex-col justify-between p-3 sm:p-4 md:p-6">
          <div className="space-y-2 sm:space-y-3 transform translate-y-0 transition-all duration-500">            
            {/* Category Badge and Rating with mobile optimization */}
            <div className="flex items-center justify-between mb-1 sm:mb-2">
              <span className="bg-gradient-to-r from-teal-500/30 to-teal-500/20 backdrop-blur-sm px-2 sm:px-3 md:px-4 py-1 sm:py-1.5 rounded-full text-xs font-semibold text-white border border-teal-500/30 shadow-sm shadow-teal-500/20 transition-all duration-500">
                {project.category}
              </span>
              
              {/* Rating with mobile-friendly sizing */}
              {project.stats.rating && (
                <div className="flex items-center gap-1 sm:gap-1.5 text-yellow-400 text-xs sm:text-sm bg-dark-800/80 backdrop-blur-sm px-2 sm:px-3 py-1 rounded-full shadow-sm shadow-yellow-500/10 border border-yellow-500/20">
                  <Star size={12} fill="currentColor" className="sm:w-3.5 sm:h-3.5 group-hover:animate-pulse" />
                  <span className="font-medium">{project.stats.rating}</span>
                </div>
              )}
            </div>

            {/* Title with mobile-responsive sizing */}
            <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-1 sm:mb-2 transition-all duration-300 line-clamp-2">
              {project.title}
            </h3>
              
            {/* Description with mobile optimization */}
            <p className="text-white/80 line-clamp-2 text-sm sm:text-base transition-colors duration-300">
              {project.description}
            </p>
              
            {/* Stats Row with mobile-friendly layout */}
            <div className="flex gap-3 sm:gap-4 md:gap-6 text-white/60 text-xs sm:text-sm">
              {project.stats.downloads && (
                <div className="flex items-center gap-1 sm:gap-2 transition-colors duration-500">
                  <Download size={12} className="sm:w-3.5 sm:h-3.5" />
                  <span className="font-medium">{project.stats.downloads}</span>
                </div>
              )}
              
              {project.stats.users && (
                <div className="flex items-center gap-1 sm:gap-2 transition-colors duration-500">
                  <Users size={12} className="sm:w-3.5 sm:h-3.5" />
                  <span className="font-medium">{project.stats.users}</span>
                </div>
              )}
                
              {project.date && (
                <div className="flex items-center gap-1 sm:gap-2 transition-colors duration-500">
                  <Calendar size={12} className="sm:w-3.5 sm:h-3.5" />
                  <span className="font-medium">
                    {typeof project.date === 'number' ? project.date : formatDate(project.date)}
                  </span>
                </div>
              )}
            </div>
              
            {/* Technology Tags with mobile optimization */}
            <div className="flex flex-wrap gap-1 sm:gap-2 pt-1 sm:pt-2">
              {project.technologies.slice(0, featured ? 3 : 2).map((tech, techIndex) => (
                <Tag 
                  key={techIndex} 
                  className="px-2 sm:px-3 py-0.5 sm:py-1 text-xs bg-dark-700/70 backdrop-blur-sm border border-white/30 text-white shadow-sm transition-all duration-300"
                >
                  {tech}
                </Tag>
              ))}
              {project.technologies.length > (featured ? 3 : 2) && (
                <span className="px-2 sm:px-3 py-0.5 sm:py-1 text-xs bg-dark-700/50 backdrop-blur-sm rounded-full text-white/70">
                  +{project.technologies.length - (featured ? 3 : 2)}
                </span>
              )}
            </div>
         
            {/* Action buttons with mobile optimization */}
            <div className="flex gap-2 sm:gap-3 pt-2 sm:pt-3 mt-1">
              {project.githubUrl && (
                <a 
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass-card p-1.5 sm:p-2 rounded-full transition-all duration-300 border border-white/10 min-h-[40px] min-w-[40px] flex items-center justify-center touch-target"
                  aria-label="View GitHub Repository"
                >
                  <Github size={14} className="sm:w-4 sm:h-4 text-white/90" />
                </a>
              )}
              {project.liveUrl && (
                <a 
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 sm:gap-2 glass-card px-2 sm:px-3 py-1.5 sm:py-1 rounded-full transition-all duration-300 border border-white/10 min-h-[40px] touch-target"
                  aria-label="View Live Project"
                >
                  <span className="text-xs font-medium text-white/90 hidden sm:inline">View Project</span>
                  <span className="text-xs font-medium text-white/90 sm:hidden">View</span>
                  <ArrowRight size={10} className="sm:w-3 sm:h-3 text-white/80" />
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Featured version specifically for larger project cards
export const FeaturedProjectCard = (props: Omit<ProjectCardProps, 'featured'>) => {
  return <ProjectCard {...props} featured={true} />;
};
