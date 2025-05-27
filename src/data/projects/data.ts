// Projects data
import { LucideIcon, Star, Users, Download } from "lucide-react";

// Project statistics type
export type ProjectStats = {
  downloads?: string;
  rating?: string;
  users?: string;
  // stars?: string;
  // forks?: string;
};

// Project data type
export type Project = {
  date: string | number | Date;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  githubUrl?: string | null;
  liveUrl: string;
  featured: boolean;
  stats: ProjectStats;
  category: string;
};
// Project statistics type
export type ProjectStats = {
  downloads?: string;
  rating?: string;
  users?: string;
};

// Project data type
export type Project = {
  date?: string | number | Date;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  githubUrl?: string | null;
  liveUrl: string;
  featured: boolean;
  stats: ProjectStats;
  category: string;
};

export const projects: Project[] = [
  {
    title: "GLC EXPRESS Mobile App",
    date: "2023-01-15",
    description:
      "GLC Paints views painters not merely as clients but as essential partners in their success. To show appreciation, GLC Paints has introduced the GLC Express app, which tracks points earned by painters with each purchase.",
    image: "/img/placeholder-image-6.webp",
    technologies: ["Flutter", "Firebase", "Google Maps", "OCR", "REST API"],
    githubUrl: null,
    liveUrl: "https://apps.apple.com/eg/app/glc-express/id1543854449",
    featured: true,
    stats: { downloads: "100K+", rating: "3.8", users: "50K+" },
    category: "Mobile App",
  },
  {
    title: "GLC Quick",
    date: "2023-06-15",
    description:
      "It ensures instant client-agent communication with a Real-time Chat and boosts efficiency with Quick Answers and an Advanced Database Search for streamlined operations after working hours, delivering pre-recorded responses.",
    image: "/img/aaaaaa.webp",
    technologies: ["Flutter", "Firebase", "Real-time Chat", "Database Search"],
    githubUrl: null,
    liveUrl:
      "https://play.google.com/store/apps/details?id=com.glcpaints.glcpaintshrweb&pcampaignid=web_share",
    featured: true,
    stats: { downloads: "50K+", rating: "4.2", users: "25K+" },
    category: "Communication",
  },
  {
    title: "سوق الجملة (Wholesale Market)",
    date: "2023-08-20",
    description:
      "This displays popular products on the home page, allows users to save favorite products, view detailed product information, manage cart with total prices, and place orders. The billing screen summarizes the order history.",
    image: "/img/placeholder-image-1.webp",
    technologies: ["Flutter", "Firebase", "E-commerce API", "Payment Gateway"],
    githubUrl: null,
    liveUrl:
      "https://play.google.com/store/apps/details?id=com.anany.souq1&pcampaignid=web_share",
    featured: true,
    stats: { downloads: "30K+", rating: "4.1", users: "15K+" },
    category: "E-commerce",
  },
  {
    title: "Agent Panel",
    date: "2023-05-10",
    description:
      "The system features a dynamic Dashboard View for a quick overview. It ensures instant client-agent communication with a Real-time Chat and boosts efficiency with Quick Answers and an Advanced Database Search for streamlined operations after working hours, delivering pre-recorded responses.",
    image: "/img/placeholder-image-2.webp",
    technologies: [
      "React",
      "Node.js",
      "Real-time Chat",
      "Dashboard",
      "Database",
    ],
    githubUrl: null,
    liveUrl: "https://glcex.glcpaints.com:9009/#/",
    featured: false,
    stats: { users: "5K+", rating: "4.5", downloads: "N/A" },
    category: "Business Tools",
  },
  {
    title: "Dolato Ice Cream App",
    date: "2023-09-15",
    description:
      "Developed a visually appealing interface for showcasing Ice Cream Mini Sticks and Ice Cakes. Implemented easy order placement, address selection, and pick-up/delivery options. Integrated a branch locator and loyalty points system. Also includes point of sale functionality for enhanced customer experience.",
    image: "/img/dd.webp",
    technologies: [
      "Flutter",
      "Google Maps",
      "Payment Integration",
      "POS System",
    ],
    githubUrl: null,
    liveUrl: "https://youtu.be/1E5zrQcyINE",
    featured: false,
    stats: { downloads: "20K+", rating: "4.3", users: "12K+" },
    category: "Food & Beverage",
  },
  {
    title: "Muslim Life - Islamic App",
    date: "2023-07-05",
    description:
      "This Islamic app serves as a comprehensive tool for users to stay informed about prayer times, Qibla direction, and engage in the worship and praise of God. It facilitates a convenient and spiritual experience by providing accurate prayer timings and helping users find the Qibla direction.",
    image: "/img/placeholder-image.webp",
    technologies: ["Flutter", "Location Services", "Prayer API", "Compass"],
    githubUrl: null,
    liveUrl: "https://play.google.com/store/apps/details?id=com.anany.azkar",
    featured: false,
    stats: { downloads: "40K+", rating: "4.6", users: "20K+" },
    category: "Lifestyle",
  },
  {
    title: "Task Management Platform",
    date: "2024-01-15",
    description:
      "A powerful productivity application with offline-first architecture, real-time collaboration features, and advanced project management tools. Built with clean architecture principles.",
    image:
      "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop",
    technologies: ["Flutter", "SQLite", "Provider", "REST API", "WebSocket"],
    githubUrl: "https://github.com/AbdoAnany/task-manager",
    liveUrl: "https://taskmanager-demo.web.app",
    featured: true,
    stats: { users: "3K+", rating: "4.6", downloads: "8K+" },
    category: "Productivity",
  },
  {
    title: "Weather Forecast App",
    date: "2023-03-20",
    description:
      "Beautiful weather application with location-based forecasts, interactive weather maps, severe weather alerts, and detailed meteorological data visualization.",
    image:
      "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=600&h=400&fit=crop",
    technologies: ["Flutter", "OpenWeather API", "Geolocator", "Charts"],
    githubUrl: "https://github.com/AbdoAnany/weather-app",
    liveUrl: "https://weather-flutter-demo.web.app",
    featured: false,
    stats: { downloads: "6K+", rating: "4.4", users: "2K+" },
    category: "Utility",
  },
  {
    title: "Fitness Tracking App",
    date: "2023-04-10",
    description:
      "Comprehensive health and fitness tracker with personalized workout plans, progress monitoring, social sharing features, and integration with wearable devices.",
    image:
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop",
    technologies: ["Flutter", "HealthKit", "Firebase", "ML Kit"],
    githubUrl: "https://github.com/AbdoAnany/fitness-tracker",
    liveUrl: "https://fitness-app-demo.web.app",
    featured: false,
    stats: { users: "4K+", rating: "4.5", downloads: "7K+" },
    category: "Health",
  },
  {
    title: "Social Networking Platform",
    date: "2023-11-25",
    description:
      "Feature-rich social platform with real-time messaging, content sharing, and community engagement tools. Built with a focus on privacy and performance.",
    image:
      "https://images.unsplash.com/photo-1522989734594-0728e1b4f2ed?w=600&h=400&fit=crop",
    technologies: ["Flutter", "Firebase", "WebRTC", "Redux", "Cloud Storage"],
    githubUrl: "https://github.com/AbdoAnany/social-network",
    liveUrl: "https://social-app-demo.web.app",
    featured: false,
    stats: { users: "8K+", rating: "4.9", downloads: "15K+" },
    category: "Social",
  },
  {
    title: "Delivery Management System",
    date: "2023-12-08",
    description:
      "End-to-end logistics solution for tracking deliveries, managing routes, and optimizing driver schedules in real-time with detailed analytics.",
    image:
      "https://images.unsplash.com/photo-1580674285054-bed31e145f59?w=600&h=400&fit=crop",
    technologies: ["Flutter", "Google Maps API", "Firebase", "BLoC"],
    githubUrl: "https://github.com/AbdoAnany/delivery-system",
    liveUrl: "https://delivery-app-demo.web.app",
    featured: false,
    stats: { users: "2K+", rating: "4.7", downloads: "5K+" },
    category: "E-commerce",
  },
];

// Helper function to get featured projects
export const getFeaturedProjects = () => {
  return projects.filter((project) => project.featured);
};

// Helper function to get regular projects
export const getRegularProjects = () => {
  return projects.filter((project) => !project.featured);
};

// Helper function to get projects by category
export const getProjectsByCategory = (category: string) => {
  return projects.filter((project) => project.category === category);
};

// Skills data (from the second document)
export const skills = [
  {
    id: "1",
    src: "/img/product-chain-1.png",
    title: "Front-End",
    description:
      "Crafting engaging and user-friendly interfaces using cutting-edge technologies to enhance the overall user experience.",
  },
  {
    id: "2",
    src: "/img/tag-1.png",
    title: "Back-End",
    description:
      "Building robust and scalable server-side applications, ensuring seamless functionality and optimal performance.",
  },
  {
    id: "3",
    src: "/img/feather-pen-2.png",
    title: "UI & UX Design",
    description:
      "Creating visually stunning and intuitive designs, focusing on user experience to elevate digital interactions.",
  },
  {
    id: "4",
    src: "/img/feather-pen-1.png",
    title: "Webflow Development",
    description:
      "Utilizing Webflow to bring designs to life, combining creativity with technical expertise for responsive and dynamic web solutions.",
  },
];
