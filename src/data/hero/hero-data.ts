// Hero section data configuration
export interface HeroData {
  profile: {
    name: string;
    title: string;
    subtitle: string;
    description: string;
    image: string;
    imageAlt: string;
  };
  status: {
    available: boolean;
    message: string;
  };
  social: {
    github: string;
    linkedin: string;
    resume: string;
  };
  stats: {
    experience: string;
    projects: string;
    technologies: string;
    satisfaction: string;
  };
  buttons: {
    primary: {
      text: string;
      action: string; // scroll target or URL
    };
    secondary: {
      text: string;
      action: string; // scroll target or URL
    };
  };
}

export const heroData: HeroData = {
  profile: {
    name: "Abdelrahman Anany",
    title: "Creative Flutter Developer",
    subtitle: "Flutter",
    description: "Building next-generation mobile experiences with beautiful design and seamless performance",
    image: "/placeholder.svg",
    imageAlt: "Profile picture of Abdelrahman Anany"
  },
  status: {
    available: true,
    message: "Available for new opportunities"
  },
  social: {
    github: "https://github.com/AbdoAnany",
    linkedin: "https://www.linkedin.com/in/abd-elrahman-anany-8132071b1/",
    resume: "https://drive.google.com/file/d/1BPAUQVC15DQ021R_03zxnddgWXsoRwGf/view?pli=1"
  },
  stats: {
    experience: "3+",
    projects: "10+",
    technologies: "10+",
    satisfaction: "100%"
  },
  buttons: {
    primary: {
      text: "Hire Me",
      action: "#contact"
    },
    secondary: {
      text: "View Work",
      action: "#projects"
    }
  }
};
