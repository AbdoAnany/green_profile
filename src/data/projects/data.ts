// Projects data
import { LucideIcon, Star, Users, Download } from 'lucide-react';

// Project statistics type
export type ProjectStats = {
  downloads?: string;
  rating?: string;
  users?: string;
};

// Project data type
export type Project = {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  githubUrl: string;
  liveUrl: string;
  featured: boolean;
  stats: ProjectStats;
  category: string;
};

export const projects: Project[] = [
  {
    title: "E-Commerce Mobile App",
    description: "A comprehensive e-commerce solution built with Flutter, featuring real-time inventory management, secure payment processing, and advanced user analytics. Includes offline capabilities and multi-platform support.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
    technologies: ["Flutter", "Firebase", "Stripe API", "BLoC", "REST API"],
    githubUrl: "https://github.com/abdelrahman-anany/ecommerce-app",
    liveUrl: "https://play.google.com/store",
    featured: true,
    stats: { downloads: "10K+", rating: "4.8", users: "5K+" },
    category: "Mobile App"
  },
  {
    title: "Task Management Platform",
    description: "A powerful productivity application with offline-first architecture, real-time collaboration features, and advanced project management tools. Built with clean architecture principles.",
    image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop",
    technologies: ["Flutter", "SQLite", "Provider", "REST API", "WebSocket"],
    githubUrl: "https://github.com/abdelrahman-anany/task-manager",
    liveUrl: "https://taskmanager-demo.web.app",
    featured: true,
    stats: { users: "3K+", rating: "4.6", downloads: "8K+" },
    category: "Productivity"
  },
  {
    title: "Weather Forecast App",
    description: "Beautiful weather application with location-based forecasts, interactive weather maps, severe weather alerts, and detailed meteorological data visualization.",
    image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=600&h=400&fit=crop",
    technologies: ["Flutter", "OpenWeather API", "Geolocator", "Charts"],
    githubUrl: "https://github.com/abdelrahman-anany/weather-app",
    liveUrl: "https://weather-flutter-demo.web.app",
    featured: false,
    stats: { downloads: "6K+", rating: "4.4", users: "2K+" },
    category: "Utility"
  },
  {
    title: "Fitness Tracking App",
    description: "Comprehensive health and fitness tracker with personalized workout plans, progress monitoring, social sharing features, and integration with wearable devices.",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop",
    technologies: ["Flutter", "HealthKit", "Firebase", "ML Kit"],
    githubUrl: "https://github.com/abdelrahman-anany/fitness-tracker",
    liveUrl: "https://fitness-app-demo.web.app",
    featured: false,
    stats: { users: "4K+", rating: "4.5", downloads: "7K+" },
    category: "Health"
  },
  {
    title: "Social Networking Platform",
    description: "Feature-rich social platform with real-time messaging, content sharing, and community engagement tools. Built with a focus on privacy and performance.",
    image: "https://images.unsplash.com/photo-1522989734594-0728e1b4f2ed?w=600&h=400&fit=crop",
    technologies: ["Flutter", "Firebase", "WebRTC", "Redux", "Cloud Storage"],
    githubUrl: "https://github.com/abdelrahman-anany/social-network",
    liveUrl: "https://social-app-demo.web.app",
    featured: false,
    stats: { users: "8K+", rating: "4.9", downloads: "15K+" },
    category: "Social"
  },
  {
    title: "Delivery Management System",
    description: "End-to-end logistics solution for tracking deliveries, managing routes, and optimizing driver schedules in real-time with detailed analytics.",
    image: "https://images.unsplash.com/photo-1580674285054-bed31e145f59?w=600&h=400&fit=crop",
    technologies: ["Flutter", "Google Maps API", "Firebase", "BLoC"],
    githubUrl: "https://github.com/abdelrahman-anany/delivery-system",
    liveUrl: "https://delivery-app-demo.web.app",
    featured: false,
    stats: { users: "2K+", rating: "4.7", downloads: "5K+" },
    category: "E-commerce"
  }
];
