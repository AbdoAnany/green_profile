import React from "react";
import { useScrollAnimation } from "../hooks/use-scroll-animation";
import { BackgroundTechIcons } from "@/components/ui/background-tech-icons";
import {
  GeometricShapes,
  CodeSnippets,
} from "@/components/ui/geometric-shapes";
import { ParticleNetwork } from "@/components/ui/section-animations";
import { techIcons, aboutIcons } from "@/data/skills/data-enhanced";
import { heroData } from "@/data/hero/hero-data";

const About = () => {
  const titleRef = useScrollAnimation();
  const contentRef = useScrollAnimation();
  const statsRef = useScrollAnimation();
  return (
    <section id="about" className="py-16 sm:py-20 lg:py-24 px-3 sm:px-4 md:px-6 relative overflow-hidden">
      {/* Enhanced Background with Dark Teal Yellow Theme */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark-900 via-dark-700 to-dark-800"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(20,184,166,0.15)_0%,transparent_70%)]"></div>

      {/* Add tech icons as background elements */}
      <BackgroundTechIcons techIcons={aboutIcons} density="medium" />

      {/* Add floating code snippets for technical theme */}
      <CodeSnippets opacity={0.07} count={5} className="z-0" />

      {/* Add subtle geometric shapes */}
      <GeometricShapes
        variant="minimal"
        density="medium"
        colorScheme="mixed"
        opacity={0.15}
        className="z-0"
      />

      {/* Add particle network for a tech feel */}
      <ParticleNetwork density="low" opacity={0.2} className="z-0" />

      <div className="container mx-auto max-w-6xl relative z-10">
        <div ref={titleRef} className="text-center mb-12 sm:mb-14 lg:mb-16 scroll-fade-in">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">
            <span className="text-white">About </span>
            <span className="text-gradient">Me</span>
          </h2>
          <p className="text-lg sm:text-xl text-white/70 max-w-2xl mx-auto px-2">
            {heroData.story.title}
          </p>
        </div>        <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 items-center">
          <div ref={contentRef} className="space-y-6 sm:space-y-8 scroll-slide-left">
            <div className="glass-card p-6 sm:p-8 rounded-2xl sm:rounded-3xl animate-scale-in">
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">My Story</h3>
              <p className="text-base sm:text-lg text-white/80 leading-relaxed mb-4 sm:mb-6">
                {heroData.story.content[0]}
              </p>

              <p className="text-base sm:text-lg text-white/80 leading-relaxed">
                {heroData.story.content[1]}
              </p>
            </div>

            <div
              ref={statsRef}
              className="grid grid-cols-2 gap-4 sm:gap-6 scroll-fade-in"
            >
              <div className="glass-card glass-card-hover p-4 sm:p-6 rounded-xl sm:rounded-2xl text-center transform hover:scale-105 transition-transform duration-300 animate-slide-in-left">
                <div className="text-2xl sm:text-3xl font-bold text-gradient mb-1 sm:mb-2">
                  {heroData.stats.experience}
                </div>
                <div className="text-sm sm:text-base text-white/70">Years Experience</div>
              </div>
              <div className="glass-card glass-card-hover p-4 sm:p-6 rounded-xl sm:rounded-2xl text-center transform hover:scale-105 transition-transform duration-300 animate-slide-in-right" style={{animationDelay: '0.1s'}}>
                <div className="text-2xl sm:text-3xl font-bold text-gradient mb-1 sm:mb-2">
                  {heroData.stats.projects}
                </div>
                <div className="text-sm sm:text-base text-white/70">Projects Completed</div>
              </div>
              <div className="glass-card glass-card-hover p-4 sm:p-6 rounded-xl sm:rounded-2xl text-center transform hover:scale-105 transition-transform duration-300 animate-slide-in-left" style={{animationDelay: '0.2s'}}>
                <div className="text-2xl sm:text-3xl font-bold text-gradient mb-1 sm:mb-2">
                  {heroData.stats.technologies}
                </div>
                <div className="text-sm sm:text-base text-white/70">Technologies</div>
              </div>
              <div className="glass-card glass-card-hover p-4 sm:p-6 rounded-xl sm:rounded-2xl text-center transform hover:scale-105 transition-transform duration-300 animate-slide-in-right" style={{animationDelay: '0.3s'}}>
                <div className="text-2xl sm:text-3xl font-bold text-gradient mb-1 sm:mb-2">
                  {heroData.stats.satisfaction}
                </div>
                <div className="text-sm sm:text-base text-white/70">Client Satisfaction</div>
              </div>
            </div>
          </div>

          <div className="flex justify-center animate-float mt-8 lg:mt-0">
            <div className="relative">
              <div className="w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 glass-card rounded-full p-3 sm:p-4 animate-pulse-soft">
                <div className="w-full h-full bg-gradient-to-br from-navy-400 via-ocean-400 to-emerald-400 rounded-full flex items-center justify-center relative overflow-hidden">
                  <div className="text-6xl sm:text-7xl lg:text-8xl animate-float">👨‍💻</div>                  {/* Enhanced Floating Icons with Deep Ocean Theme - Mobile Responsive */}
                  <div
                    className="absolute -top-2 -right-2 sm:-top-4 sm:-right-4 w-10 h-10 sm:w-16 sm:h-16 glass-card-glow rounded-full flex items-center justify-center animate-float shadow-lg shadow-ocean-500/20"
                    style={{ animationDelay: "1s" }}
                  >
                    <span className="text-lg sm:text-2xl">🚀</span>
                  </div>
                  <div
                    className="absolute -bottom-2 -left-2 sm:-bottom-4 sm:-left-4 w-10 h-10 sm:w-16 sm:h-16 glass-card-glow rounded-full flex items-center justify-center animate-float shadow-lg shadow-emerald-500/20"
                    style={{ animationDelay: "2s" }}
                  >
                    <span className="text-lg sm:text-2xl">💡</span>
                  </div>
                  <div
                    className="absolute top-1/4 -left-4 sm:-left-8 w-8 h-8 sm:w-12 sm:h-12 glass-card-glow rounded-full flex items-center justify-center animate-float shadow-lg shadow-navy-500/20"
                    style={{ animationDelay: "3s" }}
                  >
                    <span className="text-sm sm:text-xl">🎯</span>
                  </div>

                  {/* Added New Floating Icon */}
                  <div
                    className="absolute bottom-1/4 -right-4 sm:-right-8 w-8 h-8 sm:w-12 sm:h-12 glass-card-glow rounded-full flex items-center justify-center animate-float shadow-lg shadow-ocean-500/20"
                    style={{ animationDelay: "2.5s" }}
                  >
                    <span className="text-sm sm:text-xl">🔥</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
