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
      className={`relative flex items-center mb-8 sm:mb-10 md:mb-12 animate-slide-up ${position}`} 
      style={{animationDelay: `${index * 0.2}s`}}
    >
      {/* Timeline dot with mobile optimization */}
      <div className="absolute left-3 sm:left-4 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 bg-gradient-to-r from-teal-400 to-teal-600 rounded-full border-2 sm:border-3 md:border-4 border-dark-900 z-10"></div>
      
      {/* Content with mobile-responsive layout */}      
      <div className={`ml-8 sm:ml-10 md:ml-0 md:w-1/2 ${padding}`}>
        <Card className="p-4 sm:p-6 md:p-8">
          {/* Date badge with mobile optimization */}
          <GradientBadge gradient={experience.color} className="mb-3 sm:mb-4 text-xs sm:text-sm">
            <span className="block sm:inline">{formatDateRange(experience.startDate, experience.endDate)}</span>
            <span className="block sm:inline sm:ml-2 text-xs opacity-70 mt-1 sm:mt-0">
              ({calculateDuration(experience.startDate, experience.endDate)})
            </span>
          </GradientBadge>
          
          {/* Title with responsive sizing */}
          <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-2 group-hover:text-gradient transition-all duration-300 line-clamp-2">
            {experience.title}
          </h3>
          
          {/* Company with responsive sizing */}
          <h4 className="text-gradient font-semibold mb-3 sm:mb-4 text-base sm:text-lg">
            {experience.company}
          </h4>
          
          {/* Description with mobile optimization */}
          <p className="text-white/70 mb-4 sm:mb-5 md:mb-6 leading-relaxed text-sm sm:text-base md:text-lg line-clamp-3 sm:line-clamp-none">
            {experience.description}
          </p>
          
          {/* Technology tags with mobile-friendly layout */}
          <div className="flex flex-wrap gap-2 sm:gap-3">
            {experience.technologies.slice(0, 6).map((tech, techIndex) => (
              <Tag 
                key={techIndex}
                className="text-xs sm:text-sm px-2 sm:px-3 py-1 sm:py-1.5"
              >
                {tech}
              </Tag>
            ))}
            {experience.technologies.length > 6 && (
              <span className="text-xs sm:text-sm px-2 sm:px-3 py-1 sm:py-1.5 bg-dark-700/50 backdrop-blur-sm rounded-full text-white/70 border border-white/20">
                +{experience.technologies.length - 6} more
              </span>
            )}
          </div>
        </Card>
      </div>
    </div>
  );
};
