// Experience data
export type Experience = {
  title: string;
  company: string;
  period: string;
  description: string;
  technologies: string[];
  color: string;
};

export const experiences: Experience[] = [
  {
    title: "Flutter Developer",
    company: "GLC Paints",
    period: "2023 - Present",
    description: "Developed and maintained Flutter applications for paint industry solutions, implementing clean architecture and state management.",
    technologies: ["Flutter", "Dart", "Firebase", "BLoC"],
    color: "from-teal-600 to-dark-700"
  },
  {
    title: "Mobile App Developer",
    company: "Miraathcom",
    period: "2022 - 2023",
    description: "Built cross-platform mobile applications for real estate platform, focusing on user experience and performance optimization.",
    technologies: ["Flutter", "REST APIs", "State Management", "UI/UX"],
    color: "from-yellow-500 to-teal-600"
  },
  {
    title: "Software Developer",
    company: "Dolato Ice Cream",
    period: "2021 - 2022",
    description: "Created mobile solutions for food industry, implementing features for inventory management and customer engagement.",
    technologies: ["Flutter", "Firebase", "Cloud Functions", "Analytics"],
    color: "from-dark-600 to-teal-500"
  },
  {
    title: "Junior Developer",
    company: "Souqel Goomla",
    period: "2020 - 2021",
    description: "Contributed to e-commerce platform development, learning industry best practices and agile development methodologies.",
    technologies: ["Flutter", "Dart", "Version Control", "Testing"],
    color: "from-teal-500 to-yellow-400"
  }
];
