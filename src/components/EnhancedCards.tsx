// Enhanced Card Effects and Components for Modern Portfolio
// This file contains reusable card components with advanced animations and effects

import React from 'react';
import { ExternalLink } from 'lucide-react';

// Enhanced Project Card with Video Background Effect
export const EnhancedProjectCard = ({ project, index }) => {
  return (
    <div className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20">      {/* Video Background Placeholder */}
      <div className="absolute inset-0 bg-gradient-to-br from-teal-600/20 to-yellow-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      
      {/* Animated Border */}
      <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-transparent via-teal-500/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 animate-pulse"></div>
      
      {/* Content */}
      <div className="relative z-10 p-8">
        <div className="flex items-center justify-between mb-6">          <div className="w-12 h-12 rounded-2xl bg-gradient-to-r from-teal-600 to-dark-700 flex items-center justify-center">
            <project.icon size={20} className="text-white" />
          </div>
          <span className="text-xs text-white/60 px-3 py-1 rounded-full bg-white/10">
            {project.category}
          </span>
        </div>
        
        <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-ocean-300 transition-colors duration-300">
          {project.title}
        </h3>
        
        <p className="text-white/70 mb-6 line-clamp-3">
          {project.description}
        </p>
        
        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.technologies.map((tech, techIndex) => (
            <span
              key={techIndex}
              className="px-3 py-1 text-xs bg-white/10 text-white/80 rounded-full hover:bg-white/20 transition-colors duration-200"
            >
              {tech}
            </span>
          ))}
        </div>
        
        {/* Action Buttons */}
        <div className="flex gap-4">          <button className="flex-1 py-3 px-4 bg-gradient-to-r from-teal-600 to-teal-500 text-white rounded-xl font-medium hover:shadow-lg hover:shadow-teal-500/25 transition-all duration-300 hover:scale-105">
            View Project
          </button>
          <button className="w-12 h-12 rounded-xl bg-white/10 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300 hover:scale-105">
            <ExternalLink size={16} />
          </button>
        </div>
      </div>
      
      {/* Glow Effect */}
      <div className="absolute -inset-0.5 bg-gradient-to-r from-navy-600 to-ocean-500 rounded-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 -z-10 blur"></div>
    </div>
  );
};

// Enhanced Skill Card with Proficiency Animation
export const EnhancedSkillCard = ({ skill, index, proficiency = 85 }) => {
  return (
    <div className="group relative">
      <div className="glass-card-glow p-6 rounded-2xl h-full relative overflow-hidden group-hover:scale-105 transition-all duration-500">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-navy-600/10 to-ocean-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        
        {/* Skill Icon */}
        <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-navy-500/20 to-ocean-400/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
          <skill.icon size={24} className="text-ocean-400" />
        </div>
        
        {/* Skill Name */}
        <h3 className="text-lg font-bold text-white mb-2 group-hover:text-ocean-300 transition-colors duration-300">
          {skill.name}
        </h3>
        
        {/* Proficiency Bar */}
        <div className="relative">
          <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden mb-2">
            <div 
              className="h-full bg-gradient-to-r from-navy-500 to-ocean-400 rounded-full transition-all duration-1000 group-hover:shadow-lg group-hover:shadow-ocean-500/25"
              style={{ 
                width: `${proficiency}%`,
                animationDelay: `${index * 0.1}s`
              }}
            ></div>
          </div>
          <span className="text-xs text-white/60">{proficiency}% Proficiency</span>
        </div>
        
        {/* Hover Glow */}
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-navy-600/0 via-ocean-500/5 to-navy-600/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      </div>
    </div>
  );
};

// Enhanced Experience Card with Timeline
export const EnhancedExperienceCard = ({ experience, index, isLast = false }) => {
  return (
    <div className="relative">
      {/* Timeline Line */}
      {!isLast && (
        <div className="absolute left-8 top-20 w-0.5 h-full bg-gradient-to-b from-ocean-400 to-transparent"></div>
      )}
      
      {/* Timeline Dot */}
      <div className="absolute left-6 top-6 w-4 h-4 rounded-full bg-gradient-to-r from-navy-500 to-ocean-400 border-4 border-slate-900 shadow-lg shadow-ocean-500/25"></div>
      
      {/* Card Content */}
      <div className="ml-16 mb-12">
        <div className="glass-card-glow p-8 rounded-3xl group hover:scale-[1.02] transition-all duration-500">
          {/* Date Badge */}
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-navy-600/20 to-ocean-500/20 rounded-full text-sm text-ocean-300 mb-4">
            {experience.date}
          </div>
          
          {/* Company & Position */}
          <div className="mb-4">
            <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-ocean-300 transition-colors duration-300">
              {experience.position}
            </h3>
            <p className="text-ocean-400 font-medium">{experience.company}</p>
          </div>
          
          {/* Description */}
          <p className="text-white/70 mb-6 leading-relaxed">
            {experience.description}
          </p>
          
          {/* Achievements */}
          <ul className="space-y-2 mb-6">
            {experience.achievements.map((achievement, i) => (
              <li key={i} className="flex items-start gap-3 text-white/80">
                <div className="w-1.5 h-1.5 rounded-full bg-ocean-400 mt-2 flex-shrink-0"></div>
                <span className="text-sm">{achievement}</span>
              </li>
            ))}
          </ul>
          
          {/* Technologies */}
          <div className="flex flex-wrap gap-2">
            {experience.technologies.map((tech, i) => (
              <span
                key={i}
                className="px-3 py-1 text-xs bg-gradient-to-r from-navy-600/30 to-ocean-500/30 text-white/90 rounded-full border border-white/10 hover:border-ocean-400/30 transition-colors duration-200"
              >
                {tech}
              </span>
            ))}
          </div>
          
          {/* Hover Glow Effect */}
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-navy-600/0 via-ocean-500/10 to-navy-600/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
        </div>
      </div>
    </div>
  );
};

// Loading Animation Component
export const LoadingCard = () => {
  return (
    <div className="glass-card p-8 rounded-3xl animate-pulse">
      <div className="space-y-4">
        <div className="w-16 h-16 bg-white/10 rounded-2xl"></div>
        <div className="w-3/4 h-4 bg-white/10 rounded"></div>
        <div className="w-1/2 h-4 bg-white/10 rounded"></div>
        <div className="space-y-2">
          <div className="w-full h-2 bg-white/10 rounded"></div>
          <div className="w-2/3 h-2 bg-white/10 rounded"></div>
        </div>
      </div>
    </div>
  );
};
