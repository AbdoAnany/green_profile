import React from 'react';

interface SkillProgressProps {
  skill: string;
  index: number;
}

export const SkillProgress = ({ skill, index }: SkillProgressProps) => {
  return (
    <div 
      className="group/skill transition-all duration-300 hover:translate-x-2 p-1.5 rounded-lg hover:bg-white/5"
      style={{ transitionDelay: `${index * 0.05}s` }}
    >
      <div className="flex items-center">
        <div className="flex-none w-3 h-3 rounded-full bg-gradient-to-r from-teal-400 to-yellow-400 shadow-md shadow-teal-500/20 group-hover/skill:shadow-teal-400/40 group-hover/skill:scale-125 transition-all duration-300"></div>
        <span className="ml-3 text-white/80 group-hover/skill:text-white group-hover/skill:font-medium transition-all duration-300">{skill}</span>
      </div>
    </div>
  );
};
