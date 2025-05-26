import React, { useState, useEffect } from 'react';
import { Home, User, Briefcase, FolderOpen, Mail, Code2 } from 'lucide-react';

const FloatingNav = () => {
  const [activeSection, setActiveSection] = useState('hero');
  const [isVisible, setIsVisible] = useState(false);

  const navItems = [
    { id: 'hero', label: 'Home', icon: Home, href: '#hero' },
    { id: 'about', label: 'About', icon: User, href: '#about' },
        { id: 'skills', label: 'Skills', icon: Code2, href: '#skills' },
    { id: 'experience', label: 'Experience', icon: Briefcase, href: '#experience' },

        { id: 'projects', label: 'Projects', icon: FolderOpen, href: '#projects' },


    { id: 'contact', label: 'Contact', icon: Mail, href: '#contact' },
  ];
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      
      // Show floating nav after scrolling 100px
      setIsVisible(scrollPosition > 100);
      
      // Update active section
      const sections = ['hero', 'about', 'skills', 'projects', 'experience', 'contact'];
      const scrollPos = scrollPosition + 150;

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const rect = element.getBoundingClientRect();
          const offsetTop = window.scrollY + rect.top;
          const offsetHeight = rect.height;
          
          if (scrollPos >= offsetTop && scrollPos < offsetTop + offsetHeight) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Call once to set initial state
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      const rect = element.getBoundingClientRect();
      const offsetTop = window.scrollY + rect.top - 80; // Account for header
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  };
  return (
    <nav className={`fixed right-8 top-1/2 transform -translate-y-1/2 z-50 hidden lg:block transition-all duration-500 ${
      isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
    }`}>
      <div className="glass-card-glow rounded-2xl p-4 space-y-4 relative overflow-hidden">        {/* Enhanced Background Effect */}
        <div className="absolute inset-0 bg-gradient-to-b from-dark-600/80 to-dark-700/80 border border-teal-500/20 rounded-2xl"></div>
        
        {navItems.map((item, index) => (
          <button
            key={item.id}
            onClick={() => scrollToSection(item.href)}            className={`group relative w-14 h-14 rounded-xl flex items-center justify-center transition-all duration-300 ${
              activeSection === item.id
                ? 'bg-gradient-to-r from-teal-600 to-teal-500 text-white shadow-lg scale-110 shadow-teal-500/25'
                : 'text-white/70 hover:text-white hover:bg-white/10 hover:scale-105'
            }`}
            title={item.label}
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <item.icon size={20} className="relative z-10" />
              {/* Active Indicator Glow */}
            {activeSection === item.id && (
              <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-teal-600 to-yellow-400/50 opacity-50 animate-pulse"></div>
            )}
            
            {/* Enhanced Tooltip */}
            <div className="absolute right-20 bg-black/90 backdrop-blur-sm text-white px-4 py-2 rounded-lg text-sm opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap border border-white/10 shadow-lg transform translate-x-2 group-hover:translate-x-0">
              {item.label}
              {/* Tooltip Arrow */}
              <div className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-1 w-2 h-2 bg-black/90 rotate-45 border-l border-b border-white/10"></div>
            </div>
          </button>
        ))}
          {/* Navigation Progress Indicator
       {/* <div className="absolute left-2 top-4 bottom-4 w-1 bg-white/10 rounded-full overflow-hidden">
          <div 
            className="w-full bg-gradient-to-b from-teal-500 to-yellow-400 rounded-full transition-all duration-300"
            style={{ 
              height: `${((navItems.findIndex(item => item.id === activeSection) + 1) / navItems.length) * 100}%` 
            }}
          ></div>
        </div> */}
      </div>
    </nav>
  );
};

export default FloatingNav;
