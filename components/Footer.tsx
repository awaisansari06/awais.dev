import React from 'react';
import { Heart } from 'lucide-react';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background py-8 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="flex items-center justify-center gap-2 mb-2 text-sm font-medium text-slate-300">
          <span>Designed & developed with</span>
          <Heart className="h-4 w-4 text-red-500 fill-red-500 animate-pulse" />
          <span>by Awais Ansari</span>
        </div>
        <p className="text-xs text-slate-600">
          Built using React, TypeScript & Tailwind CSS. © {currentYear} All rights reserved.
        </p>
      </div>
    </footer>
  );
};