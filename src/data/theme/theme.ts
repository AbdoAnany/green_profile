export const theme = {
  colors: {
    // البرق الذهبي: ألوان ذهبية براقة مع تباين داكن
    dark: {
      400: "#1a1a1a",
      500: "#141414",
      600: "#0e0e0e",
      700: "#0a0a0a",
      800: "#050505",
      900: "#000000",
    },
    gold: {
      300: "#fcd34d",
      400: "#fbbf24",
      500: "#f59e0b",
      600: "#d97706",
      700: "#b45309",
      800: "#92400e",
    },
    electric: {
      300: "#ffe066",
      400: "#ffd43b",
      500: "#fab005",
      600: "#f08c00",
      700: "#e67700",
      800: "#d9480f",
    },
  },

  gradients: {
    // خلفيات داكنة تتخللها ومضات ذهبية
    background: "from-dark-900 via-dark-700 to-dark-800",
    backgroundAlt: "from-dark-800 via-black to-dark-700",

    // تأثيرات البرق
    electricRadial:
      "bg-[radial-gradient(ellipse_at_center,rgba(250,176,5,0.12)_0%,transparent_70%)]",
    sparkLine: "from-gold-500 via-electric-400 to-gold-400",

    // تدرجات نصوص
    textGradient: "from-electric-300 to-gold-300",
    textGradientAlt: "from-gold-300 to-electric-400",

    // تأثيرات إضافية
    flashGlow: "from-electric-500/20 to-transparent",
    cardHover: "from-gold-500/15 to-transparent",
    glassOverlay: "from-white/5 to-white/2",
  },

  components: {
    section: "py-24 px-6 relative overflow-hidden",
    sectionBackground: "bg-gradient-to-br from-black via-dark-800 to-dark-900",
    container: "container mx-auto relative z-10",

    card: "glass-card rounded-xl p-6 backdrop-blur border border-gold-500/10 hover:border-electric-500/30 transition-all duration-500",
    cardHighlight:
      "relative overflow-hidden before:absolute before:inset-0 before:bg-gradient-to-br before:from-gold-500/20 before:to-transparent before:opacity-0 before:hover:opacity-100 before:transition-opacity before:duration-500",

    heading:
      "text-5xl md:text-6xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-electric-300 via-gold-400 to-electric-300 animate-pulse",

    tag: "px-4 py-2 glass-card rounded-full text-sm text-white/90 border border-gold-400/20 hover:border-electric-500/40 transition-all duration-300 hover:scale-105",
    badge:
      "inline-flex items-center px-6 py-3 glass-card rounded-full text-gold-400 text-sm font-medium relative overflow-hidden",
  },

  animations: {
    fadeIn: "animate-fade-in",
    slideUp: "animate-slide-up",
    pulse: "animate-pulse",
    glow: "shadow-[0_0_20px_rgba(250,176,5,0.4)]",
    lightningStrike: "animate-lightning-strike", // تحتاج إلى CSS مخصص

    fast: "duration-300",
    medium: "duration-500",
    slow: "duration-1000",

    hoverScale: "hover:scale-110 transition-transform duration-300",
    hoverTranslateY:
      "hover:translate-y-[-8px] transition-transform duration-300",
    hoverGlow:
      "hover:shadow-[0_0_20px_rgba(250,176,5,0.4)] transition-shadow duration-500",
  },
};

//// Enhanced theme configuration for the portfolio
// export const theme = {
//   colors: {
//     // Main theme colors with expanded options
//     dark: {
//       400: '#1f2937',
//       500: '#111827',
//       600: '#0f172a',
//       700: '#0c1222',
//       800: '#0a0f1c',
//       900: '#080c17',
//     },
//     teal: {
//       300: '#5eead4',
//       400: '#2dd4bf',
//       500: '#14b8a6',
//       600: '#0d9488',
//       700: '#0f766e',
//       800: '#115e59',
//     },
//     yellow: {
//       300: '#fde047',
//       400: '#facc15',
//       500: '#eab308',
//       600: '#ca8a04',
//       700: '#a16207',
//       800: '#854d0e',
//     },
//   },

//   // Enhanced background gradients
//   gradients: {
//     // Base backgrounds
//     background: "from-dark-900 via-dark-700 to-dark-800",
//     backgroundAlt: "from-dark-800 via-dark-900 to-dark-700",

//     // Accent gradients
//     tealRadial: "bg-[radial-gradient(ellipse_at_center,rgba(20,184,166,0.15)_0%,transparent_70%)]",
//     yellowRadial: "bg-[radial-gradient(ellipse_at_center,rgba(250,204,21,0.1)_0%,transparent_70%)]",
//     tealToYellow: "from-teal-400 to-yellow-400",
//     yellowToTeal: "from-yellow-400 to-teal-400",

//     // UI elements
//     timelineLine: "from-teal-500 via-teal-400 to-yellow-400",
//     floatingElement: "from-teal-500/10 to-yellow-400/10",
//     glassOverlay: "from-white/10 to-white/5",
//     cardHover: "from-teal-500/20 to-transparent",

//     // Text gradients
//     textGradient: "from-teal-300 to-yellow-300",
//     textGradientAlt: "from-yellow-300 to-teal-300",
//   },

//   // Enhanced component styles
//   components: {
//     // Section styles
//     section: "py-20 px-6 relative overflow-hidden",
//     sectionBackground: "bg-gradient-to-br from-dark-900 via-dark-700 to-dark-800",
//     container: "container mx-auto relative z-10",

//     // Cards with enhanced styles
//     card: "glass-card glass-card-hover rounded-2xl p-8 group backdrop-blur-sm border border-white/10 hover:border-teal-500/20 transition-all duration-500",
//     cardHighlight: "relative overflow-hidden before:absolute before:inset-0 before:bg-gradient-to-br before:from-teal-500/20 before:to-transparent before:opacity-0 before:hover:opacity-100 before:transition-opacity before:duration-500",

//     // Headings
//     heading: "text-4xl md:text-5xl font-bold text-center mb-16 text-gradient animate-fade-in",

//     // Tags and pills with enhanced styles
//     tag: "px-4 py-2 glass-card rounded-full text-sm text-white/90 border border-white/20 hover:border-teal-500/40 transition-all duration-300 hover:scale-105",
//     badge: "inline-flex items-center px-6 py-3 glass-card rounded-full text-teal-400 text-sm font-medium relative overflow-hidden",
//   },

//   // Enhanced animation classes
//   animations: {
//     // Basic animations
//     fadeIn: "animate-fade-in",
//     slideUp: "animate-slide-up",
//     float: "animate-float",

//     // Enhanced animations
//     pulse: "animate-pulse",
//     bounce: "animate-bounce",
//     spin: "animate-spin",

//     // Duration modifiers
//     fast: "duration-300",
//     medium: "duration-500",
//     slow: "duration-1000",

//     // Hover animations
//     hoverScale: "hover:scale-105 transition-transform duration-300",
//     hoverTranslateY: "hover:translate-y-[-5px] transition-transform duration-300",
//     hoverGlow: "hover:shadow-lg hover:shadow-teal-500/10 transition-shadow duration-500",
//   }
// };
