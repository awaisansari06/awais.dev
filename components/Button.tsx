import React from 'react';
import { Link } from 'react-router-dom';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  href?: string;
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({ variant = 'primary', href, children, className = '', ...props }) => {
  const baseStyles = "inline-flex items-center justify-center px-6 py-3 rounded-lg font-medium transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-background focus:ring-primary-500 disabled:opacity-50 disabled:cursor-not-allowed";

  const variants = {
    primary: "bg-gradient-to-r from-primary-600 to-secondary text-white shadow-lg shadow-primary-500/25 hover:shadow-primary-500/40 border border-transparent",
    secondary: "bg-surfaceHighlight text-white hover:bg-slate-700 shadow-lg shadow-black/20 border border-slate-700",
    outline: "bg-transparent border border-slate-600 text-slate-300 hover:border-primary-400 hover:text-primary-400",
    ghost: "bg-transparent text-slate-400 hover:text-white hover:bg-white/5",
  };

  const combinedClassName = `${baseStyles} ${variants[variant]} ${className}`;

  if (href) {
    // Use React Router Link for internal routes (starting with /)
    if (href.startsWith('/')) {
      return (
        <Link to={href} className={combinedClassName}>
          {children}
        </Link>
      );
    }
    // Use regular anchor for external links and hash links
    return (
      <a href={href} className={combinedClassName}>
        {children}
      </a>
    );
  }

  return (
    <button className={combinedClassName} {...props}>
      {children}
    </button>
  );
};