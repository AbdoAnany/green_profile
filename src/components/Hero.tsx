import React from "react";
import { Download, Mail, ArrowRight, Github, Linkedin } from "lucide-react";
import { BackgroundTechIcons } from "@/components/ui/background-tech-icons";
import {
  GeometricShapes,
  CircuitPattern,
} from "@/components/ui/geometric-shapes";
import { frontendIcons, heroIcons } from "@/data/skills/data-enhanced";
import { heroData } from "@/data/hero/hero-data";

const Hero = () => {
  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToProjects = () => {
    const element = document.querySelector("#projects");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <section className="min-h-screen flex items-center justify-center px-3 sm:px-4 md:px-6 pt-16 sm:pt-20 pb-16 sm:pb-20 relative overflow-hidden">
      {/* Enhanced Animated Background with Dark Teal Yellow Theme */}
      <div className="absolute inset-0 bg-gradient-to-br from-dark-900 via-dark-800 to-dark-700"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(20,184,166,0.15)_0%,transparent_70%)]"></div>
      {/* Responsive Teal and Yellow Floating Elements */}
      <div className="absolute top-1/4 left-1/4 w-32 h-32 sm:w-48 sm:h-48 md:w-80 md:h-80 lg:w-96 lg:h-96 bg-gradient-to-r from-teal-500/20 to-yellow-400/20 rounded-full blur-3xl animate-float"></div>
      <div
        className="absolute bottom-1/4 right-1/4 w-28 h-28 sm:w-40 sm:h-40 md:w-64 md:h-64 lg:w-80 lg:h-80 bg-gradient-to-r from-yellow-400/20 to-teal-600/20 rounded-full blur-3xl animate-float"
        style={{ animationDelay: "2s" }}
      ></div>
      <div
        className="absolute top-1/2 right-1/3 w-24 h-24 sm:w-32 sm:h-32 md:w-48 md:h-48 lg:w-64 lg:h-64 bg-gradient-to-r from-teal-400/15 to-yellow-400/15 rounded-full blur-2xl animate-float"
        style={{ animationDelay: "4s" }}
      ></div>
      {/* Add tech icons specific to the hero section */}
      <BackgroundTechIcons techIcons={heroIcons} density="high" />
      {/* Add geometric shapes for visual interest */}
      <GeometricShapes
        variant="creative"
        density="low"
        colorScheme="teal"
        opacity={0.1}
      />
      {/* Add circuit pattern for tech feel */}
      <CircuitPattern
        opacity={0.1}
        color="teal"
        density="medium"
        className="z-0"
      />{" "}
      <div className="container mx-auto max-w-7xl relative z-10 px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Side - Content */}
          <div className="text-center lg:text-left space-y-6 lg:space-y-8 animate-fade-in">
            {/* Status Badge */}
            <div className="inline-flex items-center px-4 sm:px-6 py-2 sm:py-3 glass-card rounded-full text-xs sm:text-sm mb-6 lg:mb-8">
              <span
                className={`w-2 h-2 sm:w-3 sm:h-3 ${
                  heroData.status.available ? "bg-green-400" : "bg-red-400"
                } rounded-full mr-2 sm:mr-3 animate-pulse`}
              ></span>
              <span className="text-white/90">{heroData.status.message}</span>
            </div>
            {/* Main Heading */}
            <div className="space-y-3 sm:space-y-4">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-tight">
                <span className="text-white block animate-slide-in-left">
                  Creative
                </span>
                <span
                  className="text-gradient block animate-slide-in-right"
                  style={{ animationDelay: "0.2s" }}
                >
                  {heroData.profile.subtitle}
                </span>
                <span
                  className="text-white block animate-slide-in-left"
                  style={{ animationDelay: "0.4s" }}
                >
                  Developer
                </span>
              </h1>

              <p
                className="text-lg sm:text-xl md:text-2xl text-white/70 max-w-2xl leading-relaxed mx-auto lg:mx-0 animate-fade-in"
                style={{ animationDelay: "0.6s" }}
              >
                {heroData.profile.description}
              </p>
            </div>{" "}
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center lg:justify-start">
              <button
                onClick={scrollToContact}
                className="group glass-card glass-card-hover px-6 sm:px-8 py-3 sm:py-4 rounded-2xl font-semibold text-white bg-gradient-to-r from-teal-600 to-teal-500 hover:from-teal-500 hover:to-teal-400 transition-all duration-300 flex items-center gap-3 justify-center animate-bounce-subtle"
                style={{ animationDelay: "0.8s" }}
              >
                <Mail size={18} className="sm:w-5 sm:h-5" />
                <span className="text-sm sm:text-base">
                  {heroData.buttons.primary.text}
                </span>
                <ArrowRight
                  size={14}
                  className="sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform"
                />
              </button>

              <button
                onClick={scrollToProjects}
                className="group glass-card glass-card-hover px-6 sm:px-8 py-3 sm:py-4 rounded-2xl font-semibold text-white border border-yellow-400/30 hover:border-yellow-400/60 hover:bg-yellow-400/10 transition-all duration-300 flex items-center gap-3 justify-center animate-bounce-subtle"
                style={{ animationDelay: "1s" }}
              >
                <span className="text-sm sm:text-base">
                  {heroData.buttons.secondary.text}
                </span>
                <ArrowRight
                  size={14}
                  className="sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform"
                />
              </button>
            </div>
            {/* Quick Links */}
            <div className="flex gap-4 justify-center lg:justify-start">
              <a
                href={heroData.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 glass-card rounded-full flex items-center justify-center text-white/70 hover:text-white transition-colors hover:scale-110 transform duration-300"
              >
                <Github size={20} />
              </a>
              <a
                href={heroData.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 glass-card rounded-full flex items-center justify-center text-white/70 hover:text-white transition-colors hover:scale-110 transform duration-300"
              >
                <Linkedin size={20} />
              </a>
              <a
                href={heroData.social.resume}
                target="_blank"
                download
                className="w-12 h-12 glass-card rounded-full flex items-center justify-center text-white/70 hover:text-white transition-colors hover:scale-110 transform duration-300"
              >
                <Download size={20} />
              </a>
            </div>
          </div>{" "}
          {/* Right Side - Professional Photo */}
          <div
            className="flex justify-center lg:justify-end animate-slide-up"
            style={{ animationDelay: "0.3s" }}
          >
            <div className="relative">
              {/* Profile Image Container */}{" "}
              <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96">
                <div className="absolute inset-0 glass-card rounded-full p-2">
                  <img
                    src={heroData.profile.image}
                    alt={heroData.profile.imageAlt}
                    className="w-full h-full object-cover rounded-full border-2 border-yellow-400/50"
                  />
                </div>

                {/* Floating Tech Icons */}
                <div className="absolute -top-4 -right-4 w-16 h-16 glass-card rounded-full flex items-center justify-center animate-float">
                  <span className="text-2xl">📱</span>
                </div>
                <div
                  className="absolute -bottom-4 -left-4 w-16 h-16 glass-card rounded-full flex items-center justify-center animate-float"
                  style={{ animationDelay: "1s" }}
                >
                  <span className="text-2xl">💻</span>
                </div>
                <div
                  className="absolute top-1/2 -right-8 w-12 h-12 glass-card rounded-full flex items-center justify-center animate-float"
                  style={{ animationDelay: "2s" }}
                >
                  <span className="text-xl">⚡</span>
                </div>
              </div>
            </div>
          </div>
        </div>{" "}
        {/* Stats Section */}
        <div
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 animate-fade-in"
          style={{ animationDelay: "0.6s" }}
        >
          <div className="text-center glass-card glass-card-hover p-6 rounded-2xl">
            <div className="text-4xl font-bold text-gradient mb-2">
              {heroData.stats.experience}
            </div>
            <div className="text-sm text-white/60 uppercase tracking-wider">
              Years Experience
            </div>
          </div>
          <div className="text-center glass-card glass-card-hover p-6 rounded-2xl">
            <div className="text-4xl font-bold text-gradient mb-2">
              {heroData.stats.projects}
            </div>
            <div className="text-sm text-white/60 uppercase tracking-wider">
              Projects
            </div>
          </div>
          <div className="text-center glass-card glass-card-hover p-6 rounded-2xl">
            <div className="text-4xl font-bold text-gradient mb-2">
              {heroData.stats.technologies}
            </div>
            <div className="text-sm text-white/60 uppercase tracking-wider">
              Technologies
            </div>
          </div>{" "}
          <div className="text-center glass-card glass-card-hover p-6 rounded-2xl">
            <div className="text-4xl font-bold text-gradient mb-2">
              {heroData.stats.satisfaction}
            </div>
            <div className="text-sm text-white/60 uppercase tracking-wider">
              Satisfaction
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
