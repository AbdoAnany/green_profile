/**
 * Projects Data Module 
 * 
 * This module exports project data and related types for use throughout the application.
 * All project-related data should be managed here to maintain consistency.
 */

import { LucideIcon, Star, Users, Download } from 'lucide-react';

/**
 * Project statistics interface
 * Optional metrics that can be displayed with projects
 */
export interface ProjectStats {
  downloads?: string;
  rating?: string;
  users?: string;
  stars?: string;
  forks?: string;
}

/**
 * Project category type
 * Used for filtering and categorization
 */
export type ProjectCategory = 
  | 'mobile'
  | 'web'
  | 'backend'
  | 'design'
  | 'full-stack'
  | 'other';

/**
 * Project interface
 * Defines the structure of project data
 */
export interface Project {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  githubUrl: string;
  liveUrl?: string; // Optional live URL
  featured: boolean;
  stats: ProjectStats;
  category: ProjectCategory;
  date?: string; // ISO format date (when the project was completed)
  inProgress?: boolean; // Whether project is still in development
  spotlight?: boolean; // For extra-special projects that should be highlighted
}

/**
 * Array of projects
 * Sorted by featured status, then by date (newest first)
 */
export const projects: Project[] = [
  {
    title: "GLC Paints Mobile App",
    description: "A comprehensive mobile application for a paint manufacturing company with inventory management, color matching, and customer management features.",
    image: "/images/projects/glc-paints.webp",
    technologies: ["Flutter", "Firebase", "BLoC", "REST APIs"],
    githubUrl: "https://github.com/yourusername/glc-paints",
    liveUrl: "https://play.google.com/store/apps/details?id=com.glcpaints",
    featured: true,
    stats: {
      downloads: "10K+",
      rating: "4.8",
      users: "5K+"
    },
    category: "mobile",
    date: "2023-11-15"
  },
  {
    title: "Real Estate Marketplace",
    description: "Cross-platform application for real estate listings, property management, and client interactions.",
    image: "/images/projects/real-estate.webp",
    technologies: ["Flutter", "Firebase", "Google Maps API", "RESTful APIs"],
    githubUrl: "https://github.com/yourusername/real-estate",
    liveUrl: "https://real-estate-marketplace.com",
    featured: true,
    stats: {
      users: "3K+",
      rating: "4.6"
    },
    category: "mobile",
    date: "2022-09-20"
  },
  {
    title: "Inventory Management System",
    description: "Comprehensive system for tracking inventory, orders, and sales with analytics dashboard.",
    image: "/images/projects/inventory.webp",
    technologies: ["React", "Node.js", "MongoDB", "Express", "Chart.js"],
    githubUrl: "https://github.com/yourusername/inventory-system",
    liveUrl: "https://inventory-demo.com",
    featured: false,
    stats: {
      users: "500+",
    },
    category: "web",
    date: "2022-05-12"
  },
  {
    title: "Portfolio Website",
    description: "Modern, responsive portfolio website with animations and interactive elements.",
    image: "/images/projects/portfolio.webp",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Vite"],
    githubUrl: "https://github.com/yourusername/portfolio",
    liveUrl: "https://yourportfolio.com",
    featured: false,
    stats: {
      stars: "45+"
    },
    category: "web",
    date: "2024-01-30"
  },
  {
    title: "E-commerce Dashboard",
    description: "Admin dashboard for managing products, orders, customers, and analytics for an e-commerce platform.",
    image: "/images/projects/ecommerce.webp",
    technologies: ["React", "Redux", "Node.js", "MongoDB", "Express"],
    githubUrl: "https://github.com/yourusername/ecommerce-dashboard",
    featured: false,
    stats: {},
    category: "web",
    date: "2021-11-05"
  }
];

/**
 * Get featured projects
 * @returns Array of featured projects
 */
export function getFeaturedProjects(): Project[] {
  return projects.filter(p => p.featured);
}

/**
 * Get projects by category
 * @param category - Category to filter by
 * @returns Array of projects in the specified category
 */
export function getProjectsByCategory(category: ProjectCategory): Project[] {
  return projects.filter(p => p.category === category);
}

/**
 * Get projects by technology
 * @param tech - Technology name to filter by
 * @returns Array of projects using the specified technology
 */
export function getProjectsByTechnology(tech: string): Project[] {
  return projects.filter(p => 
    p.technologies.some(t => t.toLowerCase() === tech.toLowerCase())
  );
}

/**
 * Sort projects by date (newest first)
 * @param projectsToSort - Array of projects to sort
 * @returns Sorted array of projects
 */
export function sortProjectsByDate(projectsToSort: Project[]): Project[] {
  return [...projectsToSort].filter(p => p.date).sort((a, b) => 
    new Date(b.date!).getTime() - new Date(a.date!).getTime()
  );
}