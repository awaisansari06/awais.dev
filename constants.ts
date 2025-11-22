import { Code2, Database, Globe, Terminal, Github, Linkedin, Mail, Award, Briefcase, GraduationCap, Users, Lightbulb, MessageSquare, Clock } from 'lucide-react';
import { NavLink, Project, SkillCategory, ExperienceItem, SocialLink } from './types';

export const NAV_LINKS: NavLink[] = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Skills', href: '/skills' },
  { name: 'Projects', href: '/projects' },
  { name: 'Experience', href: '/experience' },
  { name: 'Contact', href: '#contact' },
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: 'Frontend',
    icon: Globe,
    skills: ['React', 'TypeScript', 'JavaScript (ES6+)', 'HTML5', 'CSS3', 'Tailwind CSS', 'Redux', 'Next.js', 'Framer Motion', 'Vue.js'],
  },
  {
    title: 'Backend',
    icon: Database,
    skills: ['Node.js', 'Express.js', 'MongoDB', 'REST APIs', 'Firebase', 'PostgreSQL', 'GraphQL', 'Supabase'],
  },
  {
    title: 'Tools & Devops',
    icon: Terminal,
    skills: ['Git', 'GitHub', 'VS Code', 'Figma', 'Vercel', 'Netlify', 'Jest', 'Postman', 'Docker', 'CI/CD'],
  },
];

export const SOFT_SKILLS = [
  { title: 'Communication', icon: MessageSquare, description: 'Clear and effective communication with team members and stakeholders.' },
  { title: 'Problem Solving', icon: Lightbulb, description: 'Analytical approach to troubleshooting and resolving complex technical issues.' },
  { title: 'Teamwork', icon: Users, description: 'Collaborative mindset, experienced in agile environments and pair programming.' },
  { title: 'Time Management', icon: Clock, description: 'Efficient prioritization of tasks to meet project deadlines and milestones.' },
];

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: 'E-Commerce Dashboard',
    description: 'A responsive admin dashboard with data visualization charts, dark mode toggle, and product management capabilities. Features include real-time sales tracking, inventory management, and user analytics.',
    tags: ['React', 'Tailwind', 'Recharts', 'Context API'],
    image: 'https://picsum.photos/seed/project1/800/600',
    demoUrl: '#',
    repoUrl: '#',
  },
  {
    id: 2,
    title: 'Task Management App',
    description: 'A Kanban-style task manager with drag-and-drop functionality and local storage persistence. Users can create boards, lists, and cards to organize their workflow efficiently.',
    tags: ['TypeScript', 'React', 'dnd-kit', 'CSS Modules'],
    image: 'https://picsum.photos/seed/project2/800/600',
    demoUrl: '#',
    repoUrl: '#',
  },
  {
    id: 3,
    title: 'Weather Forecast Site',
    description: 'Fetches real-time weather data using the OpenWeatherMap API. Features location search, 5-day forecast, and dynamic background changes based on weather conditions.',
    tags: ['JavaScript', 'API Integration', 'CSS Grid', 'HTML5'],
    image: 'https://picsum.photos/seed/project3/800/600',
    demoUrl: '#',
    repoUrl: '#',
  },
  {
    id: 4,
    title: 'University Event Portal',
    description: 'A full-stack MERN application for students to view and register for university events. Includes authentication, event creation for admins, and email notifications.',
    tags: ['MongoDB', 'Express', 'React', 'Node.js'],
    image: 'https://picsum.photos/seed/project4/800/600',
    demoUrl: '#',
    repoUrl: '#',
  },
  {
    id: 5,
    title: 'Fitness Tracker',
    description: 'A mobile-first web app to track workouts and nutrition. Visualizes progress over time with charts and provides personalized workout recommendations.',
    tags: ['React', 'PWA', 'Chart.js', 'Firebase'],
    image: 'https://picsum.photos/seed/project5/800/600',
    demoUrl: '#',
    repoUrl: '#',
  },
  {
    id: 6,
    title: 'AI Image Generator',
    description: 'An interface for generating images using OpenAI\'s DALL-E API. Users can enter prompts, view history, and download generated images.',
    tags: ['React', 'OpenAI API', 'Tailwind', 'Vite'],
    image: 'https://picsum.photos/seed/project6/800/600',
    demoUrl: '#',
    repoUrl: '#',
  },
];

export const EXPERIENCE: ExperienceItem[] = [
  {
    id: 1,
    type: 'Education',
    role: 'B.Sc. Computer Science',
    company: 'State University of Technology',
    period: '2021 - Present (Expected 2025)',
    description: 'Currently in 3rd year. Maintaining a 3.8 GPA. Relevant coursework: Data Structures, Algorithms, Web Technologies, Database Systems. Active member of the CS Club.',
  },
  {
    id: 2,
    type: 'Work',
    role: 'Frontend Intern',
    company: 'TechStart Solutions',
    period: 'Summer 2023',
    description: 'Collaborated with a team of 5 to build a React-based customer portal. Improved page load speed by 20% through image optimization. Implemented responsive designs ensuring mobile compatibility.',
  },
  {
    id: 3,
    type: 'Achievement',
    role: 'Hackathon Winner (1st Place)',
    company: 'UniHack 2022',
    period: 'Nov 2022',
    description: 'Built an accessibility tool for visually impaired users using Speech-to-Text APIs in 24 hours. Led the frontend development and pitch presentation.',
  },
  {
    id: 4,
    type: 'Work',
    role: 'Freelance Web Developer',
    company: 'Self-Employed',
    period: 'Jan 2022 - Present',
    description: 'Developing custom landing pages and small business websites for local clients using HTML, CSS, and JavaScript. Managed client requirements and delivered projects on time.',
  },
];

export const SOCIAL_LINKS: SocialLink[] = [
  {
    platform: 'GitHub',
    url: 'https://github.com/awaisansari06',
    icon: Github,
  },
  {
    platform: 'LinkedIn',
    url: 'https://linkedin.com',
    icon: Linkedin,
  },
  {
    platform: 'Email',
    url: 'mailto:muhammadavais14@gmail.com',
    icon: Mail,
  },
];