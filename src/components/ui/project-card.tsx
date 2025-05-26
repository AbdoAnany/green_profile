// Project card component for featured and regular projects
import React from 'react';
import { Card, Tag, GradientBadge } from './styled-components';
import { Project } from '@/data/projects';
import { Star, Users, Download, Github, ExternalLink, ArrowRight, Calendar } from 'lucide-react';
import { formatDate } from '@/utils/date-utils';

type ProjectCardProps = {
  project: Project;
  index: number;
  featured?: boolean;
};

export const ProjectCard = ({ project, index, featured = false }: ProjectCardProps) => {
  const animationDelay = `${index * 0.2}s`;  // Use consistent border radius for all cards
  const cardRadius = "rounded-2xl"; 
  const cardClass = featured ? 
    `${cardRadius} overflow-hidden h-full animate-slide-up` : 
    `${cardRadius} overflow-hidden h-full animate-fade-in`;
  
  return (
    <div 
      className={`group glass-card glass-card-hover ${cardClass} hover:shadow-2xl hover:shadow-teal-500/10 transition-all duration-700`}
      style={{ animationDelay }}
    >
      <div className={`relative overflow-hidden h-80 ${cardRadius}`}>
        {/* Project Image with enhanced hover effect */}
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:filter group-hover:brightness-110"
        />
          {/* Gradient Overlay with enhanced visibility for text elements */}
        <div className={`absolute inset-0 bg-gradient-to-t from-dark-900 via-dark-800/80 to-dark-900/40 opacity-95 group-hover:opacity-100 transition-opacity duration-500`}></div>
        
        {/* Glowing Border Effect on Hover with matched border radius */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
          <div className={`absolute inset-0 ${cardRadius} border border-transparent bg-gradient-to-br from-teal-500/40 to-yellow-400/40 opacity-0 group-hover:opacity-100 transition-opacity duration-700`} style={{maskImage: 'linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0)', maskComposite: 'exclude'}}></div>
        </div>
          {/* Project Info Overlay with improved animations and spacing */}
        <div className="absolute inset-0 flex flex-col justify-end p-6">
          <div className="space-y-3 transform translate-y-0 transition-all duration-500">            {/* Category Badge and Rating with improved visibility */}
            <div className="flex items-center justify-between mb-2">
              <span className="bg-gradient-to-r from-teal-500/30 to-teal-500/20 backdrop-blur-sm px-4 py-1.5 rounded-full text-xs font-semibold text-white border border-teal-500/30 shadow-sm shadow-teal-500/20 transition-all duration-500">
                {project.category}
              </span>
              
              {/* Rating with pulsing effect on hover */}
              {project.stats.rating && (
                <div className="flex items-center gap-1.5 text-yellow-400 text-sm bg-dark-800/80 backdrop-blur-sm px-3 py-1 rounded-full shadow-sm shadow-yellow-500/10 border border-yellow-500/20">
                  <Star size={14} fill="currentColor" className="group-hover:animate-pulse" />
                  <span className="font-medium">{project.stats.rating}</span>
                </div>
              )}
            </div>{/* Title with no gradient effect and always fully visible */}
            <h3 className="text-2xl font-bold text-white mb-2 transition-all duration-300 line-clamp-2">
              {project.title}
            </h3>
              {/* Description with better visibility */}
            <p className="text-white/80 line-clamp-2 transition-colors duration-300">
              {project.description}
            </p>
              {/* Stats Row with improved design */}
            <div className="flex gap-6 text-white/60 text-sm">
              {project.stats.downloads && (
                <div className="flex items-center gap-2 transition-colors duration-500">
                  <Download size={14} />
                  <span className="font-medium">{project.stats.downloads}</span>
                </div>
              )}
              
              {project.stats.users && (
                <div className="flex items-center gap-2 transition-colors duration-500">
                  <Users size={14} />
                  <span className="font-medium">{project.stats.users}</span>
                </div>
              )}
              
              {project.date && (
                <div className="flex items-center gap-2 transition-colors duration-500">
                  <Calendar size={14} />
                  <span className="font-medium">{formatDate(project.date)}</span>
                </div>
              )}
            </div>
              {/* Technology Tags with improved visibility */}
            <div className="flex flex-wrap gap-2 pt-2">
              {project.technologies.slice(0, featured ? 4 : 3).map((tech, techIndex) => (
                <Tag 
                  key={techIndex} 
                  className="px-3 py-1 text-xs bg-dark-700/70 backdrop-blur-sm border border-white/30 text-white shadow-sm transition-all duration-300"
                >
                  {tech}
                </Tag>
              ))}
              {project.technologies.length > (featured ? 4 : 3) && (
                <span className="px-3 py-1 text-xs bg-dark-700/50 backdrop-blur-sm rounded-full text-white/70">+{project.technologies.length - (featured ? 4 : 3)} more</span>
              )}
            </div>
              {/* Action Buttons with improved visibility */}
            <div className="flex gap-3 pt-3 mt-1">
              <a 
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-card p-2 rounded-full transition-all duration-300 border border-white/10"
              >
                <Github size={16} className="text-white/90" />
              </a>
              
              <a 
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 glass-card px-3 py-1 rounded-full transition-all duration-300 border border-white/10"
              >
                <span className="text-xs font-medium text-white/90">View Project</span>
                <ArrowRight size={12} className="text-white/80" />
              </a>
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
