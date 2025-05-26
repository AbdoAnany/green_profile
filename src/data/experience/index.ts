/**
 * Experience Data Module
 * 
 * This file contains structured data for professional experience items
 * displayed in the portfolio. All experience entries should be managed here
 * to maintain consistency.
 */

// Type definitions for experience items
export interface Experience {
  title: string;
  company: string;
  startDate: string;  // ISO date format YYYY-MM-DD
  endDate: string | null;  // ISO date format YYYY-MM-DD, null for "present"
  description: string;
  technologies: string[];
  color: string;
}

/**
 * Array of professional experiences sorted from newest to oldest
 */
export const experiences: Experience[] = [
  {
    title: "Flutter Developer",
    company: "GLC Paints",
    startDate: "2023-01-15",
    endDate: null, // Present
    description: "Developed and maintained Flutter applications for paint industry solutions, implementing clean architecture and state management.",
    technologies: ["Flutter", "Dart", "Firebase", "Cuibets", "REST APIs",'Web Socket'],
    color: "from-teal-600 to-dark-700"
  },
  {
    title: "Mobile App Developer",
    company: "Miraathcom",
    startDate: "2022-03-01",
    endDate: "2022-12-31",
    description: "Built cross-platform mobile applications for real estate platform, focusing on user experience and performance optimization.",
    technologies: ["Flutter", "REST APIs", "State Management", "UI/UX"],
    color: "from-yellow-500 to-teal-600"
  },
  {
    title: "Software Developer",
    company: "Dolato Ice Cream",
    startDate: "2021-06-15",
    endDate: "2022-02-28",
    description: "Designed and developed inventory management system and customer-facing applications, enhancing operational efficiency.",
    technologies: ["Flutter", "Firebase Notification", "Cuibets", "REST APIs", "State Management"],
    color: "from-dark-600 to-teal-600"
  },

];
