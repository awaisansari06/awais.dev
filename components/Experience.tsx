import React from 'react';
import { GraduationCap, Briefcase, Award } from 'lucide-react';
import { SectionContainer } from './SectionContainer';
import { EXPERIENCE } from '../constants';

export const Experience: React.FC = () => {
  const getIcon = (type: string) => {
    switch (type) {
      case 'Education': return <GraduationCap size={18} />;
      case 'Work': return <Briefcase size={18} />;
      case 'Achievement': return <Award size={18} />;
      default: return <Briefcase size={18} />;
    }
  };

  return (
    <SectionContainer id="experience" className="bg-surfaceHighlight/20">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Experience & Education</h2>
        <p className="text-slate-400">My academic journey and professional milestones.</p>
      </div>

      <div className="max-w-4xl mx-auto relative px-4">
        {/* Vertical Line */}
        <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 top-0 h-full w-px bg-slate-800/50"></div>

        <div className="space-y-12">
          {EXPERIENCE.map((item, index) => {
            const isEven = index % 2 === 0;
            return (
              <div key={item.id} className={`relative flex flex-col md:flex-row items-start md:items-center ${isEven ? 'md:flex-row-reverse' : ''}`}>
                
                {/* Timeline Dot */}
                <div className="absolute left-0 md:left-1/2 md:-ml-4 w-8 h-8 rounded-full bg-surface border border-primary-500 text-primary-400 flex items-center justify-center shadow-lg shadow-primary-500/20 z-10 mt-1 md:mt-0">
                    {getIcon(item.type)}
                </div>

                {/* Spacer for Desktop */}
                <div className="hidden md:block w-1/2"></div>

                {/* Content Card */}
                <div className={`w-full md:w-1/2 pl-12 md:pl-0 ${isEven ? 'md:pr-12 md:text-right' : 'md:pl-12'}`}>
                  <div className="p-6 bg-surface border border-white/5 rounded-xl hover:border-primary-500/30 transition-colors group">
                    <span className="inline-block px-2 py-1 rounded text-xs font-semibold bg-surfaceHighlight text-primary-300 mb-3 border border-white/5">
                      {item.period}
                    </span>
                    <h3 className="text-lg font-bold text-white group-hover:text-primary-400 transition-colors">{item.role}</h3>
                    <h4 className="text-slate-400 font-medium text-sm mb-3">{item.company}</h4>
                    <p className="text-slate-400 text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>

              </div>
            );
          })}
        </div>
      </div>
    </SectionContainer>
  );
};