import React, { useEffect } from 'react';
import { ExternalLink, Github, ArrowRight } from 'lucide-react';
import { SectionContainer } from '../components/SectionContainer';
import { PROJECTS } from '../constants';
import { Button } from '../components/Button';

export const ProjectsPage: React.FC = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="pt-20 min-h-screen">
            <SectionContainer className="bg-transparent">
                <div className="text-center mb-20 animate-fade-in-up">
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Featured Projects</h1>
                    <p className="text-slate-400 max-w-2xl mx-auto text-lg">
                        A curated selection of my work, ranging from web applications to experimental tools.
                    </p>
                </div>

                <div className="space-y-24">
                    {PROJECTS.map((project, index) => {
                        const isEven = index % 2 === 0;
                        return (
                            <div
                                key={project.id}
                                className="bg-surface/30 backdrop-blur-sm rounded-3xl p-6 md:p-10 border border-white/5 hover:border-primary-500/20 transition-all duration-500 group/card hover:bg-surface/50"
                            >
                                <div className={`flex flex-col lg:flex-row gap-12 items-center ${isEven ? '' : 'lg:flex-row-reverse'}`}>
                                    {/* Image Side */}
                                    <div className="w-full lg:w-3/5 perspective">
                                        <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-black/50 border border-white/10 transform transition-transform duration-700 group-hover/card:scale-[1.02]">
                                            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent z-10 opacity-60 group-hover/card:opacity-40 transition-opacity duration-500"></div>
                                            <img
                                                src={project.image}
                                                alt={project.title}
                                                className="w-full h-auto object-cover aspect-video transform transition-transform duration-700 group-hover/card:scale-105"
                                            />

                                            <div className="absolute bottom-0 left-0 right-0 p-6 z-20 translate-y-full group-hover/card:translate-y-0 transition-transform duration-500 flex gap-4 justify-end">
                                                <a
                                                    href={project.demoUrl}
                                                    className="p-3 bg-white text-slate-900 rounded-full hover:bg-primary-400 hover:text-white transition-colors shadow-lg transform hover:scale-110 duration-300"
                                                    title="View Live Demo"
                                                >
                                                    <ExternalLink size={20} />
                                                </a>
                                                <a
                                                    href={project.repoUrl}
                                                    className="p-3 bg-slate-900 text-white rounded-full hover:bg-primary-400 transition-colors shadow-lg border border-white/10 transform hover:scale-110 duration-300"
                                                    title="View Source Code"
                                                >
                                                    <Github size={20} />
                                                </a>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Content Side */}
                                    <div className="w-full lg:w-2/5 space-y-8">
                                        <div className="space-y-4">
                                            <div className="flex items-center gap-4">
                                                <span className="text-primary-400 font-mono text-sm tracking-wider px-3 py-1 bg-primary-500/10 rounded-full border border-primary-500/20">
                                                    0{index + 1}
                                                </span>
                                                <div className="h-px flex-grow bg-white/10"></div>
                                            </div>
                                            <h2 className="text-3xl md:text-4xl font-bold text-white group-hover/card:text-primary-400 transition-colors duration-300">
                                                {project.title}
                                            </h2>
                                        </div>

                                        <p className="text-slate-400 text-lg leading-relaxed">
                                            {project.description}
                                        </p>

                                        <div>
                                            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4 flex items-center gap-2">
                                                <span className="w-1 h-1 bg-primary-500 rounded-full"></span>
                                                Tech Stack
                                            </h4>
                                            <div className="flex flex-wrap gap-2">
                                                {project.tags.map((tag) => (
                                                    <span
                                                        key={tag}
                                                        className="px-3 py-1.5 bg-surfaceHighlight/50 text-slate-300 rounded-lg text-sm font-medium border border-white/5 hover:border-primary-500/30 hover:text-white transition-colors duration-300"
                                                    >
                                                        {tag}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>

                                        <div className="pt-8 flex gap-4 border-t border-white/5">
                                            <Button href={project.demoUrl} variant="primary" className="text-sm px-8 py-3 shadow-lg shadow-primary-500/20">
                                                Live Demo <ExternalLink className="ml-2 h-4 w-4" />
                                            </Button>
                                            <Button href={project.repoUrl} variant="outline" className="text-sm px-8 py-3 hover:bg-white/5">
                                                Source Code <Github className="ml-2 h-4 w-4" />
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </SectionContainer>
        </div>
    );
};
