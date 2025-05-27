import React from "react";
import { Github, Linkedin, Mail } from "lucide-react";
import {heroData} from "@/data/hero/hero-data";
const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: Github,
      href: heroData.social.github,
      label: "GitHub",
    },
    {
      icon: Linkedin,
      href: heroData.social.linkedin,
      label: "LinkedIn",
    },
    {
      icon: Mail,
      href: heroData.social.email,
      label: "Email",
    },
  ];  return (
    <footer className="relative overflow-hidden py-12 sm:py-14 lg:py-16 px-3 sm:px-4 md:px-6">
      {/* Enhanced Background with Dark Teal Yellow Theme */}
      <div className="absolute inset-0 bg-gradient-to-t from-dark-900 via-dark-700/20 to-dark-800"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(20,184,166,0.15)_0%,transparent_70%)]"></div>
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 sm:gap-8">
          <div className="text-center md:text-left animate-slide-in-left">
            <h3 className="text-2xl sm:text-3xl font-bold text-gradient mb-2 sm:mb-3">
              Abdelrahman Anany
            </h3>
            <p className="text-white/70 text-base sm:text-lg">
              Flutter Developer & Software Engineer
            </p>
            <p className="text-white/50 text-sm mt-1 sm:mt-2">
              Building the future, one app at a time
            </p>
          </div>

          <div className="flex space-x-3 sm:space-x-4 animate-slide-in-right">
            {socialLinks.map((link, index) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 sm:w-12 sm:h-12 glass-card glass-card-hover rounded-full flex items-center justify-center text-white/70 hover:text-ocean-300 hover:border-ocean-400/30 hover:scale-110 transition-all duration-300 min-h-[44px] min-w-[44px] touch-target animate-scale-in"
                style={{animationDelay: `${index * 0.1}s`}}
                aria-label={link.label}
              >
                <link.icon size={18} className="sm:w-5 sm:h-5" />
              </a>
            ))}
          </div>
        </div>

        <div className="mt-8 sm:mt-10 lg:mt-12 pt-6 sm:pt-8 border-t border-white/10 text-center animate-fade-in">
          <p className="text-white/60 text-sm sm:text-base">
            © {currentYear} Abdelrahman Anany. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
