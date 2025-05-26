// Timeline item component for experience section
import React from 'react';
import { GradientBadge, Card, Tag } from './styled-components';
import { Experience } from '@/data/experience';
import { formatDateRange, calculateDuration } from '@/utils/date-utils';

type TimelineItemProps = {
  experience: Experience;
  index: number;
  isAlternating?: boolean;
};

export const TimelineItem = ({ 
  experience, 
  index,
  isAlternating = true
}: TimelineItemProps) => {
  const position = isAlternating && index % 2 !== 0 ? 'md:flex-row-reverse' : 'md:flex-row';
  const padding = isAlternating ? (index % 2 === 0 ? 'md:pr-8' : 'md:pl-8') : 'md:pr-8';

  return (
    <div 
      className={`relative flex items-center mb-12 animate-slide-up ${position}`} 
      style={{animationDelay: `${index * 0.2}s`}}
    >
      {/* Timeline dot */}
      <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-6 h-6 bg-gradient-to-r from-teal-400 to-teal-600 rounded-full border-4 border-dark-900 z-10"></div>
      
      {/* Content */}      <div className={`ml-12 md:ml-0 md:w-1/2 ${padding}`}>
        <Card className="p-8">
          <GradientBadge gradient={experience.color} className="mb-4">
            {formatDateRange(experience.startDate, experience.endDate)}
            <span className="ml-2 text-xs opacity-70">
              ({calculateDuration(experience.startDate, experience.endDate)})
            </span>
          </GradientBadge>
          
          <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-gradient transition-all duration-300">
            {experience.title}
          </h3>
          
          <h4 className="text-gradient font-semibold mb-4 text-lg">
            {experience.company}
          </h4>
          
          <p className="text-white/70 mb-6 leading-relaxed text-lg">
            {experience.description}
          </p>
          
          <div className="flex flex-wrap gap-3">
            {experience.technologies.map((tech, techIndex) => (
              <Tag key={techIndex}>
                {tech}
              </Tag>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
};
