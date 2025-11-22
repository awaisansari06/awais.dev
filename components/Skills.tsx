import React from 'react';
import { SectionContainer } from './SectionContainer';
import { SKILL_CATEGORIES } from '../constants';

export const Skills: React.FC = () => {
  return (
    <SectionContainer id="skills" className="bg-surfaceHighlight/30">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Technical Arsenal</h2>
        <p className="text-slate-400 max-w-2xl mx-auto">
          The languages, frameworks, and tools I use to bring ideas to life.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {SKILL_CATEGORIES.map((category, idx) => (
          <div 
            key={category.title} 
            className="bg-surface rounded-2xl p-8 border border-white/5 hover:border-primary-500/50 transition-all duration-300 hover:-translate-y-1 group"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-white/5 rounded-xl text-primary-400 group-hover:bg-primary-500 group-hover:text-white transition-colors">
                <category.icon size={24} />
              </div>
              <h3 className="text-xl font-bold text-white">{category.title}</h3>
            </div>
            
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill) => (
                <span 
                  key={skill} 
                  className="px-3 py-1.5 bg-white/5 text-slate-300 border border-white/5 rounded-lg text-sm font-medium group-hover:bg-white/10 transition-colors cursor-default"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </SectionContainer>
  );
};