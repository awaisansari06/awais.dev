import React, { useState, useEffect } from 'react';
import { Menu, X, Code2 } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { NAV_LINKS } from '../constants';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const handleNavigation = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    closeMenu();

    // Handle internal links to pages
    if (href.startsWith('/')) {
      navigate(href);
      return;
    }

    // Handle hash links (like #contact)
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const element = document.querySelector(href);
        if (element) element.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      const element = document.querySelector(href);
      if (element) element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out flex justify-center ${isScrolled ? 'pt-4' : 'pt-6'
          }`}
      >
        <div
          className={`
            flex items-center justify-between px-6 py-3
            transition-all duration-500
            ${isScrolled
              ? 'w-[90%] md:w-[80%] lg:w-[60%] glass-card rounded-full shadow-lg shadow-black/10'
              : 'w-full max-w-7xl bg-transparent'
            }
          `}
        >
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center cursor-pointer group" onClick={() => {
            if (location.pathname !== '/') navigate('/');
            window.scrollTo(0, 0);
          }}>
            <div className="bg-gradient-to-br from-primary-500 to-secondary p-1.5 rounded-lg mr-2 group-hover:shadow-lg group-hover:shadow-primary-500/50 transition-all duration-300">
              <Code2 className="h-5 w-5 text-white" />
            </div>
            <span className="font-bold text-lg tracking-tight text-slate-100 group-hover:text-white transition-colors">
              Awais<span className="text-primary-400">.dev</span>
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-1">
            {NAV_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavigation(e, link.href)}
                className={`relative px-4 py-2 text-sm font-medium transition-colors rounded-full hover:bg-white/5 group ${(location.pathname === link.href) ? 'text-white bg-white/10' : 'text-slate-300 hover:text-white'
                  }`}
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contact"
              onClick={(e) => handleNavigation(e, '#contact')}
              className="ml-4 px-5 py-2 text-sm font-medium text-white bg-surfaceHighlight hover:bg-slate-700 border border-slate-700 rounded-full transition-all shadow-lg shadow-black/20"
            >
              Hire Me
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="text-slate-300 hover:text-white focus:outline-none p-1"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-40 bg-black/95 backdrop-blur-xl md:hidden flex flex-col items-center justify-center space-y-8 animate-fade-in-up">
          <button
            onClick={closeMenu}
            className="absolute top-8 right-8 text-slate-400 hover:text-white"
          >
            <X className="h-8 w-8" />
          </button>

          {NAV_LINKS.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleNavigation(e, link.href)}
              className={`text-2xl font-medium transition-colors ${(location.pathname === link.href) ? 'text-primary-400' : 'text-slate-300 hover:text-primary-400'
                }`}
            >
              {link.name}
            </a>
          ))}

          <a
            href="#contact"
            onClick={(e) => handleNavigation(e, '#contact')}
            className="px-8 py-3 text-lg font-medium text-white bg-primary-600 rounded-full mt-4"
          >
            Let's Talk
          </a>
        </div>
      )}
    </>
  );
};