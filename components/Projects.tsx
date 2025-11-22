import React from 'react';
import { ExternalLink, Github, ArrowRight } from 'lucide-react';
import { SectionContainer } from './SectionContainer';
import { PROJECTS } from '../constants';
import { Button } from './Button';

export const Projects: React.FC = () => {
  return (
    <SectionContainer id="projects">
      <div className="text-center mb-16">
        <div className="inline-flex items-center gap-2 text-primary-400 font-semibold tracking-wider uppercase text-sm mb-2">
          <span className="w-12 h-0.5 bg-primary-400"></span>
          Portfolio
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Featured Projects</h2>
        <p className="text-slate-400 max-w-2xl mx-auto">
          A selection of things I've built. Hover over the cards to explore.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {PROJECTS.map((project) => (
          <div
            key={project.id}
            className="group relative rounded-3xl overflow-hidden border border-white/10 hover:border-primary-500/40 
                       shadow-lg hover:shadow-[0_20px_40px_-15px_rgba(56,189,248,0.2)] hover:z-10 
                       transition-all duration-700 ease-[cubic-bezier(0.25,0.1,0.25,1)] 
                       flex flex-col hover:scale-[1.02]
                       bg-slate-900/20 backdrop-blur-md hover:backdrop-blur-xl hover:bg-slate-900/40"
          >
            {/* Liquid Gradient Sheen */}
            <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent opacity-50 pointer-events-none group-hover:opacity-80 transition-opacity duration-700"></div>

            {/* Image Container */}
            <div className="relative h-64 overflow-hidden z-10">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-1000 ease-out opacity-90 group-hover:opacity-100"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-slate-900/60 opacity-0 group-hover:opacity-100 transition-all duration-500 backdrop-blur-[2px] flex items-center justify-center gap-4">
                <a
                  href={project.demoUrl}
                  className="transform translate-y-8 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 p-3.5 bg-white/90 backdrop-blur-sm rounded-full text-slate-900 hover:bg-primary-400 hover:text-white transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] delay-100 shadow-xl hover:scale-110"
                  title="View Live Demo"
                >
                  <ExternalLink size={22} />
                </a>
                <a
                  href={project.repoUrl}
                  className="transform translate-y-8 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 p-3.5 bg-white/90 backdrop-blur-sm rounded-full text-slate-900 hover:bg-primary-400 hover:text-white transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] delay-200 shadow-xl hover:scale-110"
                  title="View Source Code"
                >
                  <Github size={22} />
                </a>
              </div>
            </div>

            {/* Content */}
            <div className="p-8 flex-grow flex flex-col relative z-20">
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-primary-400 transition-colors">{project.title}</h3>
              <p className="text-slate-300/80 mb-6 flex-grow text-sm leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mt-auto">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs font-medium px-3 py-1 rounded-full bg-white/5 text-primary-200 border border-white/5 group-hover:bg-white/10 transition-colors"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-16 flex justify-center">
        <Button variant="outline" href="/projects">
          View All Projects <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </SectionContainer>
  );
};