import React from 'react';
import { Button } from '@/components/ui/button';
import heroImage from '@/assets/hero-saree.jpg';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transform hover:scale-105 transition-transform duration-[10s]"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      
      {/* Decorative floating elements */}
      <div className="floating-ornament top-20 left-20 animate-bounce-slow" />
      <div className="floating-ornament top-40 right-32 animate-float" style={{ animationDelay: '2s' }} />
      <div className="floating-ornament bottom-32 left-40 animate-bounce-slow" style={{ animationDelay: '4s' }} />
      
      {/* Pattern overlay */}
      <div className="absolute inset-0 pattern-overlay opacity-30" />
      
      {/* Enhanced overlay with gradient */}
      <div className="absolute inset-0 bg-gradient-hero" />
      <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-transparent to-accent/20" />
      
      {/* Content with enhanced animations */}
      <div className="relative z-10 text-center text-background max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="animate-slide-up">
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-display font-bold mb-6 leading-tight">
            <span className="inline-block animate-fade-in">Where</span>{' '}
            <span className="inline-block animate-fade-in" style={{ animationDelay: '0.2s' }}>Tradition</span>
            <br />
            <span className="text-accent inline-block animate-fade-in shimmer" style={{ animationDelay: '0.4s' }}>
              Meets Elegance
            </span>
          </h1>
        </div>
        
        <div className="animate-slide-up" style={{ animationDelay: '0.6s' }}>
          <p className="text-lg sm:text-xl lg:text-2xl mb-8 font-light leading-relaxed max-w-2xl mx-auto">
            Discover the perfect blend of timeless Indian fashion and contemporary style at 
            <span className="font-semibold text-accent"> Nakashi Creation</span>
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slide-up" style={{ animationDelay: '0.8s' }}>
          <Button 
            variant="hero" 
            size="xl"
            onClick={() => scrollToSection('gallery')}
            className="font-medium transform hover:scale-110 hover:shadow-glow transition-all duration-bounce group"
          >
            <span className="group-hover:animate-wiggle">✨</span>
            Explore Collection
          </Button>
          <Button 
            variant="ghost" 
            size="xl"
            onClick={() => scrollToSection('about')}
            className="text-background hover:text-background border-background/30 hover:bg-background/10 transform hover:scale-105 transition-all duration-bounce"
          >
            Our Story
          </Button>
        </div>

        {/* Decorative elements */}
        <div className="absolute -top-20 -left-20 w-40 h-40 bg-gradient-royal rounded-full opacity-20 animate-pulse-glow" />
        <div className="absolute -bottom-20 -right-20 w-32 h-32 bg-gradient-gold rounded-full opacity-20 animate-pulse-glow" style={{ animationDelay: '2s' }} />
      </div>
      
      {/* Enhanced scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce-slow">
        <div className="w-6 h-10 border-2 border-background/50 rounded-full flex justify-center bg-background/10 backdrop-blur-sm shadow-glow">
          <div className="w-1 h-3 bg-gradient-gold rounded-full mt-2 animate-pulse" />
        </div>
        <p className="text-background/70 text-xs mt-2 font-light">Scroll</p>
      </div>
    </section>
  );
};

export default Hero;