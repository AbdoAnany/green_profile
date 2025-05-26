
import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    {
      icon: Github,
      href: "https://github.com/abdelrahman-anany",
      label: "GitHub"
    },
    {
      icon: Linkedin,
      href: "https://linkedin.com/in/abdelrahman-anany",
      label: "LinkedIn"
    },
    {
      icon: Mail,
      href: "mailto:eng.abdelrahman.anany@gmail.com",
      label: "Email"
    }
  ];  return (
    <footer className="relative overflow-hidden py-16 px-6">      {/* Enhanced Background with Dark Teal Yellow Theme */}
      <div className="absolute inset-0 bg-gradient-to-t from-dark-900 via-dark-700/20 to-dark-800"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(20,184,166,0.15)_0%,transparent_70%)]"></div>
      
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-8 md:mb-0 text-center md:text-left">
            <h3 className="text-3xl font-bold text-gradient mb-3">
              Abdelrahman Anany
            </h3>
            <p className="text-white/70 text-lg">
              Flutter Developer & Software Engineer
            </p>
            <p className="text-white/50 text-sm mt-2">
              Building the future, one app at a time
            </p>
          </div>
          
          <div className="flex space-x-4">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 glass-card glass-card-hover rounded-full flex items-center justify-center text-white/70 hover:text-ocean-300 hover:border-ocean-400/30 hover:scale-110 transition-all duration-300"
                aria-label={link.label}
              >
                <link.icon size={20} />
              </a>
            ))}
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-white/10 text-center">
          <p className="text-white/60">
            © {currentYear} Abdelrahman Anany. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
