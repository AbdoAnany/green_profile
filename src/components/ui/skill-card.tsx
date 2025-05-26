// Skill card component with enhanced UI
import React from 'react';
import { Card } from './styled-components';
import { SkillCategory } from '@/data/skills';
import { SkillCardIcon } from './skill-card-icon';
import { SkillProgress } from './skill-progress';

type SkillCardProps = {
  category: SkillCategory;
  index: number;
};

export const SkillCard = ({ category, index }: SkillCardProps) => {
  // Calculate animation delay based on index
  const animationDelay = `${index * 0.2}s`;
  
  return (    <div 
      className="animate-slide-up w-full" 
      style={{ animationDelay }}
    >
      <Card className="relative h-full w-full group transition-all duration-500 hover:translate-y-[-5px] overflow-hidden px-5">
        {/* Enhanced background effect */}
        <div className="absolute -inset-2 bg-gradient-to-r from-teal-500/5 to-yellow-400/5 rounded-[28px] blur-xl opacity-0 group-hover:opacity-100 transition-all duration-700 -z-10"></div>
        {/* Animated Accent Corner */}
        <div className="absolute -top-1 -right-1 w-16 h-16">
          <div className="absolute top-0 right-0 w-16 h-16 transform rotate-45 translate-x-1/2 -translate-y-1/4 bg-gradient-to-r from-teal-500/10 to-yellow-400/10 group-hover:from-teal-500/30 group-hover:to-yellow-400/30 transition-all duration-700"></div>
        </div>
        
        {/* Glowing border effect on hover */}
        <div className="absolute inset-0 rounded-2xl border border-transparent group-hover:border-white/10 before:absolute before:inset-0 before:rounded-2xl before:p-[1px] before:bg-gradient-to-r before:from-teal-500/40 before:to-yellow-400/40 before:opacity-0 before:blur-sm group-hover:before:opacity-100 before:transition-all before:duration-700 overflow-hidden"></div>
        
        {/* Card Content with improved layout */}        <div className="relative z-10 h-full flex flex-col p-2">
          {/* Card Header with Enhanced Icon */}
          <div className="flex flex-col items-center text-center mb-6">
            <div className="relative mb-6">
              {/* Enhanced icon component with animations */}
              <SkillCardIcon 
                icon={category.icon}
                color={category.color}
                iconColor={category.iconColor}
                className="mb-2"
              />
            </div>
            
            <h3 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-white to-white bg-clip-text group-hover:text-transparent group-hover:from-teal-300 group-hover:to-yellow-300 transition-all duration-500">
              {category.title}
            </h3>
            
            {/* Animated gradient divider */}
            <div className="w-20 h-1 mt-3 bg-gradient-to-r from-teal-400 to-yellow-400 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left"></div>
          </div>
            {/* Skills List with progress indicators */}
          <div className="space-y-3 mt-auto">
            {category.skills.map((skill, skillIndex) => (
              <SkillProgress 
                key={skillIndex}
                skill={skill}
                index={skillIndex}
              />
            ))}
          </div>
        </div>
      </Card>
    </div>
  );
};
