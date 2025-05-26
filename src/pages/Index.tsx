
import React, { useEffect } from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import About from '../components/About';
import Skills from '../components/Skills';
import Experience from '../components/Experience';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import FloatingNav from '../components/FloatingNav';
import { initScrollAnimations, initStaggeredAnimations } from '../lib/scroll-animations';

const Index = () => {
  useEffect(() => {
    // Initialize scroll animations after component mounts
    const scrollObserver = initScrollAnimations();
    const staggerObserver = initStaggeredAnimations();

    return () => {
      // Cleanup observers on unmount
      scrollObserver.disconnect();
      staggerObserver.disconnect();
    };
  }, []);
  return (
    <div className="min-h-screen bg-gradient-to-br from-dark-900 via-dark-700 to-dark-800 text-white font-poppins">
      <Header />
      <FloatingNav />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
