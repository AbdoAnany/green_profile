/**
 * Projects Data Module 
 * 
 * This module exports project data and related types for use throughout the application.
 * All project-related data should be managed here to maintain consistency.
 */

import { LucideIcon, Star, Users, Download } from 'lucide-react';
import { Project, projects } from './data';
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

export { Project };
