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
    <section id="about" className="py-24 px-6 relative overflow-hidden">
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
        <div ref={titleRef} className="text-center mb-16 scroll-fade-in">
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="text-white">About </span>
            <span className="text-gradient">Me</span>
          </h2>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            {heroData.story.title}
          </p>
        </div>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div ref={contentRef} className="space-y-8 scroll-slide-left">
            <div className="glass-card p-8 rounded-3xl">
              <h3 className="text-2xl font-bold text-white mb-4">My Story</h3>
              <p className="text-lg text-white/80 leading-relaxed mb-6">
                {heroData.story.content[0]}
              </p>

              <p className="text-lg text-white/80 leading-relaxed">
                {heroData.story.content[1]}
              </p>
            </div>

            <div
              ref={statsRef}
              className="grid grid-cols-2 gap-6 scroll-fade-in"
            >
              <div className="glass-card glass-card-hover p-6 rounded-2xl text-center">
                <div className="text-3xl font-bold text-gradient mb-2">
                  {heroData.stats.experience}
                </div>
                <div className="text-white/70">Years Experience</div>
              </div>
              <div className="glass-card glass-card-hover p-6 rounded-2xl text-center">
                <div className="text-3xl font-bold text-gradient mb-2">
                  {heroData.stats.projects}
                </div>
                <div className="text-white/70">Projects Completed</div>
              </div>
              <div className="glass-card glass-card-hover p-6 rounded-2xl text-center">
                <div className="text-3xl font-bold text-gradient mb-2">
                  {heroData.stats.technologies}
                </div>
                <div className="text-white/70">Technologies</div>
              </div>
              <div className="glass-card glass-card-hover p-6 rounded-2xl text-center">
                <div className="text-3xl font-bold text-gradient mb-2">
                  {heroData.stats.satisfaction}
                </div>
                <div className="text-white/70">Client Satisfaction</div>
              </div>
            </div>
          </div>

          <div className="flex justify-center animate-float">
            <div className="relative">
              <div className="w-80 h-80 lg:w-96 lg:h-96 glass-card rounded-full p-4">
                {" "}
                <div className="w-full h-full bg-gradient-to-br from-navy-400 via-ocean-400 to-emerald-400 rounded-full flex items-center justify-center relative overflow-hidden">
                  <div className="text-8xl animate-float">👨‍💻</div>

                  {/* Enhanced Floating Icons with Deep Ocean Theme */}
                  <div
                    className="absolute -top-4 -right-4 w-16 h-16 glass-card-glow rounded-full flex items-center justify-center animate-float shadow-lg shadow-ocean-500/20"
                    style={{ animationDelay: "1s" }}
                  >
                    <span className="text-2xl">🚀</span>
                  </div>
                  <div
                    className="absolute -bottom-4 -left-4 w-16 h-16 glass-card-glow rounded-full flex items-center justify-center animate-float shadow-lg shadow-emerald-500/20"
                    style={{ animationDelay: "2s" }}
                  >
                    <span className="text-2xl">💡</span>
                  </div>
                  <div
                    className="absolute top-1/4 -left-8 w-12 h-12 glass-card-glow rounded-full flex items-center justify-center animate-float shadow-lg shadow-navy-500/20"
                    style={{ animationDelay: "3s" }}
                  >
                    <span className="text-xl">🎯</span>
                  </div>

                  {/* Added New Floating Icon */}
                  <div
                    className="absolute bottom-1/4 -right-8 w-12 h-12 glass-card-glow rounded-full flex items-center justify-center animate-float shadow-lg shadow-ocean-500/20"
                    style={{ animationDelay: "2.5s" }}
                  >
                    <span className="text-xl">🔥</span>
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
