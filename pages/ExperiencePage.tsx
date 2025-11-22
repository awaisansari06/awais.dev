import React, { useEffect } from 'react';
import { GraduationCap, Briefcase, Award, Calendar, MapPin } from 'lucide-react';
import { SectionContainer } from '../components/SectionContainer';
import { EXPERIENCE } from '../constants';

export const ExperiencePage: React.FC = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const getIcon = (type: string) => {
        switch (type) {
            case 'Education': return <GraduationCap size={24} />;
            case 'Work': return <Briefcase size={24} />;
            case 'Achievement': return <Award size={24} />;
            default: return <Briefcase size={24} />;
        }
    };

    return (
        <div className="pt-20 min-h-screen">
            <SectionContainer className="bg-transparent">
                <div className="text-center mb-20 animate-fade-in-up">
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">My Journey</h1>
                    <p className="text-slate-400 max-w-2xl mx-auto text-lg">
                        A timeline of my professional experience, education, and key milestones.
                    </p>
                </div>

                <div className="max-w-4xl mx-auto relative">
                    {/* Center Line */}
                    <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary-500/50 via-slate-700 to-transparent"></div>

                    <div className="space-y-16">
                        {EXPERIENCE.map((item, index) => {
                            const isEven = index % 2 === 0;
                            return (
                                <div key={item.id} className={`relative flex flex-col md:flex-row gap-8 ${isEven ? 'md:flex-row-reverse' : ''}`}>

                                    {/* Timeline Node */}
                                    <div className="absolute left-8 md:left-1/2 transform -translate-x-1/2 w-16 h-16 rounded-full bg-surface border-4 border-background flex items-center justify-center z-10 shadow-xl shadow-primary-500/20 group-hover:shadow-primary-500/50 transition-shadow duration-300">
                                        <div className="w-12 h-12 rounded-full bg-surfaceHighlight flex items-center justify-center text-primary-400 group-hover:bg-primary-500 group-hover:text-white transition-all duration-300">
                                            {getIcon(item.type)}
                                        </div>
                                    </div>

                                    {/* Content Spacer */}
                                    <div className="hidden md:block w-1/2"></div>

                                    {/* Content Card */}
                                    <div className={`w-full md:w-1/2 pl-24 md:pl-0 ${isEven ? 'md:pr-16 md:text-right' : 'md:pl-16'}`}>
                                        <div className="bg-surface/30 backdrop-blur-sm p-8 rounded-2xl border border-white/5 hover:border-primary-500/30 transition-all duration-300 hover:shadow-lg hover:shadow-primary-500/10 group hover:-translate-y-1">
                                            <div className={`flex flex-col gap-2 mb-4 ${isEven ? 'md:items-end' : ''}`}>
                                                <span className="inline-flex items-center gap-2 text-primary-400 font-semibold text-sm uppercase tracking-wider bg-primary-500/10 px-3 py-1 rounded-full border border-primary-500/20">
                                                    <Calendar size={14} /> {item.period}
                                                </span>
                                                <h3 className="text-2xl font-bold text-white group-hover:text-primary-400 transition-colors mt-2">{item.role}</h3>
                                                <h4 className="text-lg text-slate-300 font-medium flex items-center gap-2">
                                                    {item.company}
                                                </h4>
                                            </div>

                                            <p className="text-slate-400 leading-relaxed">
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
        </div>
    );
};
