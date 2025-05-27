import React, { useState } from 'react';
import { Mail, MessageCircle, Send } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { BackgroundTechIcons } from '@/components/ui/background-tech-icons';
import { GeometricShapes, CircuitPattern } from '@/components/ui/geometric-shapes';
import { FloatingShapes, GlowEffect } from '@/components/ui/section-animations';
import { techIcons } from '@/data/skills/data-enhanced';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message Sent!",
        description: "Thank you for your message. I'll get back to you soon!",
      });
      setFormData({ name: '', email: '', message: '' });
      setIsSubmitting(false);
    }, 1000);
  };  return (    
    <section id="contact" className="py-16 sm:py-20 lg:py-24 px-3 sm:px-4 md:px-6 bg-gradient-to-br from-dark-900 via-dark-700 to-dark-800 relative overflow-hidden">
      {/* Enhanced Background Effects with Dark Teal Yellow Theme */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(20,184,166,0.15)_0%,transparent_70%)]"></div>
      <div className="absolute top-1/4 left-1/4 w-64 h-64 sm:w-96 sm:h-96 bg-gradient-to-r from-teal-500/10 to-dark-600/10 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-1/4 right-1/4 w-48 h-48 sm:w-80 sm:h-80 bg-gradient-to-r from-yellow-400/10 to-teal-500/10 rounded-full blur-3xl animate-float" style={{animationDelay: '2s'}}></div>
        {/* Add tech icons */}
      <BackgroundTechIcons 
        techIcons={techIcons.slice(8, 14)} 
        density="medium" 
      />
      
      {/* Add geometric shapes */}
      <GeometricShapes
        variant="minimal"
        density="medium"
        colorScheme="yellow"
        opacity={0.1}
        className="z-0"
      />
      
      {/* Add circuit pattern */}
      <CircuitPattern
        opacity={0.07}
        color="yellow"
        density="low"
        className="z-0"
      />
      
      {/* Add glow effects */}
      <GlowEffect 
        position="bottom" 
        color="from-yellow-400/10 to-teal-500/5"
        size="large"
        intensity="low"
      />
      
      {/* Add floating shapes */}
      <FloatingShapes 
        count={3} 
        shape="circle" 
        size="large" 
        opacity={0.05}
        blur="heavy"
      />
        <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          {/* Badge above header */}
          <div className="inline-flex items-center px-4 sm:px-6 py-2 sm:py-3 glass-card rounded-full text-teal-400 text-xs sm:text-sm font-medium mb-6 sm:mb-8 relative overflow-hidden group animate-scale-in">
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
              <div className="absolute inset-0 bg-gradient-to-r from-teal-500/20 to-yellow-400/20"></div>
            </div>
            <MessageCircle size={14} className="sm:w-4 sm:h-4 mr-2 group-hover:animate-pulse" />
            <span className="relative z-10">Let's Connect</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-6 sm:mb-8 text-gradient animate-fade-in">
            Get In Touch
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-white/70 max-w-2xl mx-auto mb-6 sm:mb-8 px-2">
            I'm always open to discussing new projects, creative ideas or opportunities to be part of your vision.
          </p>
        </div>        <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12">          
          {/* Contact Information */}
          <div className="space-y-6 sm:space-y-8 animate-slide-up">
            <div className="glass-card glass-card-hover rounded-xl sm:rounded-2xl p-6 sm:p-8 border border-transparent hover:border-teal-500/30 transition-all duration-500">
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4 sm:mb-6 text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-yellow-400">
                Let's Work Together
              </h3>
              <p className="text-white/80 text-base sm:text-lg leading-relaxed mb-6 sm:mb-8">
                I'm always interested in new opportunities and exciting projects. 
                Whether you have a project in mind or just want to chat about technology, 
                feel free to reach out!
              </p>
            </div>
            
            <div className="space-y-4 sm:space-y-6">
              <a
                href="mailto:dev@abdoanany.com"
                className="flex items-center gap-3 sm:gap-4 text-white/80 hover:text-white transition-colors duration-300 group glass-card glass-card-hover rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-transparent hover:border-teal-500/30 min-h-[80px] sm:min-h-[88px] touch-target"
              >
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-teal-500 to-teal-600 rounded-xl sm:rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-teal-500/20 flex-shrink-0">
                  <Mail size={20} className="sm:w-7 sm:h-7 text-white" />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="font-bold text-white text-base sm:text-lg">Email</div>
                  <div className="text-white/80 group-hover:text-teal-400 transition-colors duration-300 text-sm sm:text-base truncate">dev@abdoanany.com</div>
                </div>
              </a>
              
              <a
                href="https://wa.me/201118836732"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 sm:gap-4 text-white/80 hover:text-white transition-colors duration-300 group glass-card glass-card-hover rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-transparent hover:border-yellow-400/30 min-h-[80px] sm:min-h-[88px] touch-target"
              >
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-xl sm:rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-yellow-500/20 flex-shrink-0">
                  <MessageCircle size={20} className="sm:w-7 sm:h-7 text-white" />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="font-bold text-white text-base sm:text-lg group-hover:text-yellow-400 transition-colors duration-300">WhatsApp</div>
                  <div className="text-white/80 text-sm sm:text-base">Click to chat on WhatsApp</div>
                </div>
              </a>
            </div>
          </div>          {/* Contact Form */}
          <div className="glass-card glass-card-hover rounded-xl sm:rounded-2xl p-6 sm:p-8 animate-slide-up border border-transparent hover:border-teal-500/30 transition-all duration-500 mt-8 lg:mt-0" style={{animationDelay: '0.2s'}}>
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-6 sm:mb-8 text-center">Send a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-white/90 mb-2 sm:mb-3">
                  Name <span className="text-teal-400">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 sm:px-6 py-3 sm:py-4 glass-card rounded-lg sm:rounded-xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-teal-400/50 border border-white/20 focus:border-teal-400 transition-all duration-300 text-sm sm:text-base min-h-[48px] touch-target"
                  placeholder="Your name"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-white/90 mb-2 sm:mb-3">
                  Email <span className="text-teal-400">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 sm:px-6 py-3 sm:py-4 glass-card rounded-lg sm:rounded-xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-teal-400/50 border border-white/20 focus:border-teal-400 transition-all duration-300 text-sm sm:text-base min-h-[48px] touch-target"
                  placeholder="your.email@example.com"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-white/90 mb-2 sm:mb-3">
                  Message <span className="text-teal-400">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-4 sm:px-6 py-3 sm:py-4 glass-card rounded-lg sm:rounded-xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-teal-400/50 border border-white/20 focus:border-teal-400 transition-all duration-300 resize-none text-sm sm:text-base min-h-[120px] touch-target"
                  placeholder="Tell me about your project..."
                />
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-teal-600 to-yellow-500 hover:from-teal-500 hover:to-yellow-400 text-white py-3 sm:py-4 px-6 sm:px-8 rounded-lg sm:rounded-xl font-bold text-base sm:text-lg transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 flex items-center justify-center gap-2 sm:gap-3 shadow-lg shadow-teal-500/25 mt-6 sm:mt-8 min-h-[48px] touch-target"
              >
                {isSubmitting ? (
                  'Sending...'
                ) : (
                  <>
                    <Send size={18} className="sm:w-5 sm:h-5" />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
