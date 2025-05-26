# Anany Portfolio Showcase

A modern, vibrant portfolio website built with React, TypeScript, and Tailwind CSS, featuring glassmorphism design, smooth animations, and responsive layout.

## ✨ Features

### Design & UI
- 🎨 **Modern Glassmorphism Design** - Translucent cards with backdrop blur effects
- 🌈 **Vibrant Gradient Color Scheme** - Purple, pink, and blue gradients throughout
- 📱 **Fully Responsive Layout** - Optimized for all device sizes
- ⚡ **Smooth Animations** - Fade-in, slide-up, and floating animations
- 🎯 **Professional Typography** - Poppins font family with excellent readability

### Components
- 🏠 **Full-Screen Hero Section** - Professional photo, floating tech icons, gradient text
- 📋 **Large Project Cards** - Hoverable cards with glassmorphism effects and project stats
- 🧭 **Floating Navigation** - Sticky sidebar navigation with smooth scroll
- 📊 **Skills Showcase** - Modern card layout with technology icons
- 💼 **Experience Timeline** - Animated timeline with company details
- 📧 **Contact Form** - Glassmorphism styled form with validation
- 🎭 **Interactive Elements** - Hover effects, scale animations, and glow effects

### Performance
- ⚡ **Fast Loading** - Optimized build with code splitting
- 🔄 **Smooth Scroll Behavior** - Enhanced scroll experience
- 📱 **Mobile Optimized** - Touch-friendly interactions
- ♿ **Accessibility Features** - Reduced motion support and proper contrast

## 🚀 Live Demo

**URL**: https://lovable.dev/projects/569a7b4a-dc83-48ac-85ea-1900f8f8b34b

## 🛠️ Technologies Used

- **Frontend**: React 18, TypeScript
- **Styling**: Tailwind CSS, shadcn/ui components
- **Icons**: Lucide React
- **Build Tool**: Vite
- **Font**: Poppins (Google Fonts)
- **Animations**: CSS3 Transforms, Intersection Observer API

## 📂 Project Structure

The codebase follows a clear and well-organized structure:

```
src/
├── components/         # UI Components
│   ├── ui/             # Reusable UI components 
│   └── ...             # Page sections (Hero, Skills, etc.)
├── data/               # Data modules by domain
│   ├── experience/     # Experience data
│   ├── projects/       # Project data
│   ├── skills/         # Skills data
│   └── theme/          # Theme configuration
├── utils/              # Utility functions
│   └── date-utils.ts   # Date formatting utilities
└── pages/              # Page components
```

## 📝 Adding New Content

### Adding a New Project

Edit `src/data/projects/index.ts`:

```typescript
export const projects = [
  // Add your new project
  {
    title: "New Project Name",
    description: "Project description goes here",
    image: "/images/projects/your-image.webp",
    technologies: ["Tech1", "Tech2", "Tech3"],
    githubUrl: "https://github.com/yourusername/project",
    liveUrl: "https://projecturl.com", // Optional
    featured: false, // Set to true for featured projects
    stats: {
      downloads: "1K+", // Optional statistics
      rating: "4.5",    // Optional statistics
      users: "500+"     // Optional statistics
    },
    category: "web", // mobile, web, backend, design, full-stack, other
    date: "2025-05-01" // ISO format date
  },
  // ...existing projects
];
```

### Adding a New Experience

Edit `src/data/experience/index.ts`:

```typescript
export const experiences = [
  // Add your new experience
  {
    title: "Your Job Title",
    company: "Company Name",
    startDate: "2024-01-15", // ISO format YYYY-MM-DD
    endDate: "2025-04-30",   // ISO format or null for current position
    description: "Description of your role and achievements",
    technologies: ["Tech1", "Tech2", "Tech3"],
    color: "from-teal-600 to-dark-700" // Use theme colors
  },  // ...existing experiences
];
```

### Adding a New Skill Category

Edit `src/data/skills/index.ts`:

```typescript
export const skillCategories = [
  // Add your new skill category
  {
    title: "New Category",
    icon: YourIcon, // Import from lucide-react
    skills: ["Skill1", "Skill2", "Skill3", "Skill4", "Skill5"],
    color: "from-teal-600 to-yellow-500", // Use theme gradient colors
    iconColor: "text-teal-400" // Use theme text colors
  },
  // ...existing categories
];
```

## 🎨 Customizing the Theme

Edit `src/data/theme/theme.ts` to change the color scheme:

```typescript
export const theme = {
  colors: {
    dark: {
      900: '#050505', // Darkest background
      // ...more dark shades
    },
    teal: {
      500: '#14b8a6', // Primary accent color
      // ...more teal shades
    },
    yellow: {
      500: '#eab308', // Secondary accent color
      // ...more yellow shades
    }
  }
};
```

## 📄 Documentation Files

- `CODE_ORGANIZATION.md` - Details about code organization and architecture
- `ENHANCEMENT_ROADMAP.md` - Future enhancement plans and roadmap
- `UI_ENHANCEMENT_SUMMARY.md` - Summary of UI improvements
- `SKILLS_UI_ENHANCEMENT.md` - Details about skills section enhancements
- `PROGRESS_BAR_REMOVAL.md` - Notes on progress bar removal from skill cards

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ or Bun
- Git

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/anany-portfolio-showcase.git
```

2. Install dependencies:
```bash
npm install
# or
bun install
```

3. Start the development server:
```bash
npm run dev
# or
bun dev
```

4. Open http://localhost:5173 in your browser

### Building for Production

```bash
npm run build
# or
bun build
```

## 📁 Project Structure

```
src/
├── components/          # React components
│   ├── Header.tsx      # Navigation header
│   ├── Hero.tsx        # Full-screen hero section
│   ├── About.tsx       # About section with stats
│   ├── Skills.tsx      # Skills showcase
│   ├── Experience.tsx  # Experience timeline
│   ├── Projects.tsx    # Project gallery
│   ├── Contact.tsx     # Contact form
│   ├── Footer.tsx      # Footer section
│   └── FloatingNav.tsx # Floating navigation
├── hooks/              # Custom React hooks
│   └── use-scroll-animation.ts
├── lib/                # Utility functions
│   └── scroll-animations.ts
└── pages/              # Page components
    └── Index.tsx       # Main portfolio page
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn package manager

### Installation

1. **Clone the repository**
```bash
git clone <YOUR_GIT_URL>
cd anany-portfolio-showcase
```

2. **Install dependencies**
```bash
npm install
```

3. **Start development server**
```bash
npm run dev
```

4. **Open your browser**
Navigate to `http://localhost:8080` to view the portfolio.

### Build for Production

```bash
npm run build
npm run preview  # Preview production build
```

## 🎨 Customization

### Colors
The color scheme uses CSS custom properties and Tailwind classes. Key colors:
- Primary gradients: `from-purple-400 via-pink-400 to-blue-400`
- Background: `from-slate-900 via-purple-900 to-slate-900`
- Glassmorphism: `backdrop-blur-md bg-white/10`

### Fonts
Currently using Poppins. To change:
1. Update `tailwind.config.ts` fontFamily
2. Import new font in `src/index.css`
3. Update `font-poppins` class usage

### Animations
Scroll animations can be controlled via:
- CSS classes in `src/index.css`
- JavaScript utilities in `src/lib/scroll-animations.ts`
- React hooks in `src/hooks/use-scroll-animation.ts`

## 📱 Responsive Breakpoints

- Mobile: `< 768px`
- Tablet: `768px - 1024px`
- Desktop: `> 1024px`

## How can I edit this code?

**Use Lovable**

Simply visit the [Lovable Project](https://lovable.dev/projects/569a7b4a-dc83-48ac-85ea-1900f8f8b34b) and start prompting.

Changes made via Lovable will be committed automatically to this repo.

**Use your preferred IDE**

If you want to work locally using your own IDE, you can clone this repo and push changes. Pushed changes will also be reflected in Lovable.

The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Follow these steps:

```sh
# Step 1: Clone the repository using the project's Git URL.
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory.
cd <YOUR_PROJECT_NAME>

# Step 3: Install the necessary dependencies.
npm i

# Step 4: Start the development server with auto-reloading and an instant preview.
npm run dev
```

**Edit a file directly in GitHub**

- Navigate to the desired file(s).
- Click the "Edit" button (pencil icon) at the top right of the file view.
- Make your changes and commit the changes.

**Use GitHub Codespaces**

- Navigate to the main page of your repository.
- Click on the "Code" button (green button) near the top right.
- Select the "Codespaces" tab.
- Click on "New codespace" to launch a new Codespace environment.
- Edit files directly within the Codespace and commit and push your changes once you're done.

## What technologies are used for this project?

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## How can I deploy this project?

Simply open [Lovable](https://lovable.dev/projects/569a7b4a-dc83-48ac-85ea-1900f8f8b34b) and click on Share -> Publish.

## Can I connect a custom domain to my Lovable project?

Yes, you can!

To connect a domain, navigate to Project > Settings > Domains and click Connect Domain.

Read more here: [Setting up a custom domain](https://docs.lovable.dev/tips-tricks/custom-domain#step-by-step-guide)
#   g r e e n _ p r o f i l e  
 #   g r e e n _ p r o f i l e  
 