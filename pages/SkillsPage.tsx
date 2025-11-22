import React, { useEffect } from 'react';
import { SectionContainer } from '../components/SectionContainer';
import { SKILL_CATEGORIES, SOFT_SKILLS } from '../constants';

export const SkillsPage: React.FC = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="pt-20 min-h-screen">
            <SectionContainer className="bg-transparent">
                <div className="text-center mb-16 animate-fade-in-up">
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Technical Expertise</h1>
                    <p className="text-slate-400 max-w-2xl mx-auto text-lg">
                        A comprehensive look at the technologies and tools I use to build digital products.
                    </p>
                </div>

                <div className="space-y-48">
                    {/* Hard Skills */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {SKILL_CATEGORIES.map((category, idx) => (
                            <div
                                key={category.title}
                                className="bg-surface rounded-2xl p-8 border border-white/5 hover:border-primary-500/50 transition-all duration-300 hover:-translate-y-1 group shadow-lg shadow-black/20"
                                style={{ animationDelay: `${idx * 100}ms` }}
                            >
                                <div className="flex items-center gap-4 mb-8">
                                    <div className="p-4 bg-white/5 rounded-xl text-primary-400 group-hover:bg-primary-500 group-hover:text-white transition-colors">
                                        <category.icon size={32} />
                                    </div>
                                    <h3 className="text-2xl font-bold text-white">{category.title}</h3>
                                </div>

                                <div className="flex flex-wrap gap-3">
                                    {category.skills.map((skill) => (
                                        <span
                                            key={skill}
                                            className="px-4 py-2 bg-white/5 text-slate-300 border border-white/5 rounded-lg text-sm font-medium group-hover:bg-white/10 transition-colors cursor-default hover:text-white hover:border-primary-500/30"
                                        >
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Soft Skills Section */}
                    <div className="pt-32">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Professional Skills</h2>
                            <p className="text-slate-400 max-w-2xl mx-auto text-lg">
                                Essential soft skills that enable effective collaboration, leadership, and problem-solving in dynamic environments.
                            </p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {SOFT_SKILLS.map((skill, idx) => (
                                <div
                                    key={skill.title}
                                    className="bg-surfaceHighlight/30 p-6 rounded-xl border border-white/5 flex items-start gap-4 hover:bg-surfaceHighlight/50 transition-colors"
                                >
                                    <div className="p-3 bg-secondary/10 text-secondary rounded-lg mt-1">
                                        <skill.icon size={24} />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-white mb-2">{skill.title}</h3>
                                        <p className="text-slate-400 leading-relaxed">{skill.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </SectionContainer>
        </div>
    );
};
