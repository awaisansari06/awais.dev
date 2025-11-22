import React from 'react';
import { SectionContainer } from './SectionContainer';

export const About: React.FC = () => {
  return (
    <SectionContainer id="about">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        <div className="space-y-6">
          <div className="inline-flex items-center gap-2 text-primary-400 font-semibold tracking-wider uppercase text-sm">
            <span className="w-12 h-0.5 bg-primary-400"></span>
            About Me
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            From Logic to <span className="text-primary-400">Pixels</span>.
          </h2>
          <div className="text-slate-400 text-lg leading-relaxed space-y-4">
            <p>
              I am a third-year <strong>Computer Science student</strong> who bridges the gap between functional backend logic and beautiful frontend design.
            </p>
            <p>
              My journey began with a curiosity for how things work on the web. That curiosity quickly turned into a passion for clean code, intuitive UI, and seamless user experiences. When I'm not studying algorithms or debugging code, I'm usually exploring the latest features in React or optimizing web performance.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
           {/* Stats Cards */}
          <div className="p-6 bg-surface border border-white/5 rounded-2xl hover:border-primary-500/30 transition-colors">
            <div className="text-4xl font-bold text-white mb-1">3+</div>
            <div className="text-sm text-slate-400 font-medium uppercase tracking-wide">Years Coding</div>
          </div>
          <div className="p-6 bg-surface border border-white/5 rounded-2xl hover:border-primary-500/30 transition-colors">
             <div className="text-4xl font-bold text-white mb-1">10+</div>
             <div className="text-sm text-slate-400 font-medium uppercase tracking-wide">Projects Built</div>
          </div>
          <div className="p-6 bg-surface border border-white/5 rounded-2xl hover:border-primary-500/30 transition-colors">
             <div className="text-4xl font-bold text-white mb-1">3.8</div>
             <div className="text-sm text-slate-400 font-medium uppercase tracking-wide">GPA</div>
          </div>
           <div className="p-6 bg-gradient-to-br from-primary-900/50 to-surface border border-white/5 rounded-2xl flex items-center justify-center">
             <span className="text-primary-300 font-mono text-sm text-center">
               &lt;Available for <br/> Summer Internships /&gt;
             </span>
          </div>
        </div>

      </div>
    </SectionContainer>
  );
};