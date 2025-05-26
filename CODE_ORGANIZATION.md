# Code Organization and Architecture

This document outlines the code organization and architecture of the portfolio website, with a focus on maintainability and clean separation of concerns.

## Folder Structure

```
src/
├── components/         # UI Components
│   ├── About.tsx       # Main page sections
│   ├── Contact.tsx
│   ├── Experience.tsx
│   ├── Footer.tsx
│   ├── Header.tsx
│   ├── Hero.tsx
│   ├── Projects.tsx
│   ├── Skills.tsx
│   └── ui/             # Reusable UI components
│       ├── background-tech-icons.tsx
│       ├── project-card.tsx
│       ├── skill-card.tsx
│       ├── skill-card-icon.tsx
│       ├── skill-progress.tsx
│       ├── styled-components.tsx
│       ├── timeline-item.tsx
│       └── ...
├── data/               # Data files separate from components
│   ├── experience/
│   │   └── index.ts    # Experience data with proper date handling
│   ├── projects/
│   │   └── data.ts     # Projects data
│   ├── skills/
│   │   └── index.ts    # Consolidated skills data
│   └── theme/
│       └── theme.ts    # Theme configuration
├── utils/              # Utility functions
│   └── date-utils.ts   # Date formatting and manipulation utilities
└── ...
```

## Architecture Improvements

1. **Data-Component Separation**
   - All data moved to dedicated files under `src/data/`
   - Components only handle rendering, not data definition
   - TypeScript interfaces for all data structures
   - Consolidated data files with clear naming (index.ts as main export)

2. **Theme System**
   - Centralized theme configuration in `src/data/theme/theme.ts`
   - Colors, gradients, and component styling defined in one place
   - Easy to change colors throughout the application

3. **Reusable UI Components**
   - Common styled components in `src/components/ui/styled-components.tsx`
   - Component-specific UI elements in dedicated files
   - Specialized components like SkillCardIcon for specific visual elements

4. **Date Handling**
   - Centralized date utilities in `src/utils/date-utils.ts`
   - Consistent formatting across the application
   - Human-readable durations and date ranges
   - ISO date strings in data files for better maintainability

5. **Data Binding Patterns**
   - Consistent import paths using aliases (e.g., `@/data/skills`)
   - Data interfaces exported alongside their implementations
   - Component props typed to match data interfaces
   - Mapper functions used when transformation is needed between data and display
   
6. **Best Practices**
   - **Imports**: Organized by source (React, third-party, local)
   - **Type Safety**: Strong TypeScript typing throughout the codebase
   - **Component Composition**: Breaking down complex UIs into manageable pieces
   - **Documentation**: Key files and components are documented
   - **Code Reuse**: Utility functions for common operations
   - **Naming Conventions**: Consistent naming patterns across the project
   - Props-based customization for flexibility

4. **Performance Optimizations**
   - Removed flashing effects on Skills section
   - Improved animation performance
   - Better code splitting

## Component Updates

### Section Components (About, Experience, etc.)
- Now use the common `Section` component
- Consistent padding, background styling
- Proper semantic HTML structure

### Card Components
- Standardized card styling
- Reusable `Card` component
- Consistent hover effects

### Timeline Component
- Standardized timeline styling
- Reusable `TimelineItem` component
- Easy to update or add new items

## How to Update

### Adding New Experience

1. Edit `src/data/experience/index.ts`:
```typescript
export const experiences = [
  // Add new experience here
  {
    title: "New Position",
    company: "Company Name",
    startDate: "2023-01-15", // Use ISO format YYYY-MM-DD
    endDate: "2024-05-01",   // Use ISO format or null for "Present"
    description: "Description of the role and achievements",
    technologies: ["Tech1", "Tech2"],
    color: "from-teal-600 to-dark-700" // Use theme colors
  },
  // ...existing experiences
];
```

### Adding New Project

1. Edit `src/data/projects/data.ts`:
```typescript
export const projects = [
  // Add new project here
  {
    title: "New Project",
    description: "Project description",
    image: "url-to-image",
    technologies: ["Tech1", "Tech2"],
    githubUrl: "https://github.com/...",
    liveUrl: "https://...",
    featured: false,
    stats: { downloads: "1K+", rating: "4.5", users: "500+" },
    category: "Category"
  },
  // ...existing projects
];
```

### Updating Theme Colors

1. Edit `src/data/theme/theme.ts`:
```typescript
export const theme = {
  colors: {
    dark: {
      // Update dark colors
      500: '#111827',
      // ...
    },
    teal: {
      // Update teal colors
      500: '#14b8a6',
      // ...
    },
    yellow: {
      // Update yellow colors
      400: '#facc15',
      // ...
    },
  },
  // ...
};
```

## Benefits of New Structure

1. **Maintainability**: Easier to update and maintain
2. **Scalability**: Simple to add new components or features
3. **Consistency**: Unified styling and component structure
4. **Performance**: Better code organization for improved rendering
5. **Flexibility**: Theme and data changes can be made in one place
