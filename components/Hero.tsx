import React, { useState, useEffect } from 'react';
import { ArrowRight, Terminal, Github, Linkedin } from 'lucide-react';
import { SectionContainer } from './SectionContainer';
import { Button } from './Button';

export const Hero: React.FC = () => {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  const toRotate = ["Web of Future", "Modern Interfaces", "Digital Experiences"];

  useEffect(() => {
    const handleTyping = () => {
      const i = loopNum % toRotate.length;
      const fullText = toRotate[i];

      setText(isDeleting
        ? fullText.substring(0, text.length - 1)
        : fullText.substring(0, text.length + 1)
      );

      setTypingSpeed(isDeleting ? 30 : 150);

      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && text === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, typingSpeed]);

  return (
    <SectionContainer id="home" className="pt-32 pb-20 md:pt-48 md:pb-32 flex items-center min-h-screen">
      <div className="flex flex-col md:flex-row items-center justify-between gap-12 md:gap-20">

        {/* Text Content */}
        <div className="flex-1 text-center md:text-left animate-fade-in-up space-y-8">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary-900/30 border border-primary-700/50 text-primary-300 text-sm font-medium mb-4 backdrop-blur-sm">
            <span className="flex h-2 w-2 rounded-full bg-primary-400 mr-2 animate-pulse"></span>
            Available for Internship
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-[1.1] min-h-[3.3em] md:min-h-[2.2em]">
            Building the <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 via-primary-300 to-secondary">
              {text}
            </span>
            <span className="animate-pulse text-primary-400">|</span>
          </h1>

          <p className="text-lg text-slate-400 max-w-xl mx-auto md:mx-0 leading-relaxed">
            Hi, I'm <strong className="text-white">Awais Ansari</strong>. A CS Student & Frontend Engineer crafting pixel-perfect, accessible, and performant digital experiences.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start pt-2">
            <Button href="#projects">
              View Projects <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button variant="secondary" href="#contact">
              Contact Me
            </Button>
          </div>

          <div className="flex items-center justify-center md:justify-start gap-6 pt-4 text-slate-400">
            <a href="https://github.com" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">
              <Github className="h-6 w-6" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">
              <Linkedin className="h-6 w-6" />
            </a>
            <div className="h-px w-12 bg-slate-700"></div>
            <span className="text-sm font-mono">Based in USA</span>
          </div>
        </div>

        {/* Visual/Image */}
        <div className="flex-1 flex justify-center md:justify-end relative w-full max-w-md md:max-w-full z-10">
          <div className="relative w-72 h-72 md:w-96 md:h-96 group">
            {/* Background Glow */}
            <div className="absolute -inset-0.5 bg-gradient-to-r from-primary-500 to-secondary rounded-[2rem] blur opacity-30 group-hover:opacity-60 transition duration-1000"></div>

            <div className="relative w-full h-full bg-surfaceHighlight rounded-[2rem] border border-slate-700 overflow-hidden flex items-center justify-center shadow-2xl">
              <img
                src="https://picsum.photos/seed/avatar_tech/600/600"
                alt="Awais Ansari"
                className="w-full h-full object-cover opacity-90 hover:opacity-100 transition-opacity duration-500 hover:scale-105 transform"
              />

              {/* Code Overlay */}
              <div className="absolute bottom-0 left-0 right-0 bg-black/60 backdrop-blur-md p-4 border-t border-white/10">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <div className="font-mono text-xs text-primary-300">
                  <span className="text-secondary">const</span> <span className="text-white">developer</span> = <span className="text-yellow-300">'{'{'}</span><br />
                  &nbsp;&nbsp;name: <span className="text-green-300">'Awais'</span>,<br />
                  &nbsp;&nbsp;role: <span className="text-green-300">'Frontend'</span><br />
                  <span className="text-yellow-300">{'}'}</span>;
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-6 -right-6 glass-card p-4 rounded-2xl animate-bounce-slow">
              <Terminal className="text-primary-400 h-8 w-8" />
            </div>
          </div>
        </div>

      </div>
    </SectionContainer>
  );
};