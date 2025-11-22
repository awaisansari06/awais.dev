import React from 'react';

export interface NavLink {
  name: string;
  href: string;
}

export interface SkillCategory {
  title: string;
  skills: string[];
  icon: React.ElementType;
}

export interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  image: string;
  demoUrl: string;
  repoUrl: string;
}

export interface ExperienceItem {
  id: number;
  role: string;
  company: string;
  period: string;
  description: string;
  type: 'Education' | 'Work' | 'Achievement';
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: React.ElementType;
}