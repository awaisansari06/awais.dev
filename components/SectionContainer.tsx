import React from 'react';

interface SectionContainerProps {
  id: string;
  className?: string;
  children: React.ReactNode;
}

export const SectionContainer: React.FC<SectionContainerProps> = ({ id, className = '', children }) => {
  return (
    <section id={id} className={`py-24 px-4 md:px-8 lg:px-16 relative ${className}`}>
      <div className="max-w-7xl mx-auto">
        {children}
      </div>
    </section>
  );
};