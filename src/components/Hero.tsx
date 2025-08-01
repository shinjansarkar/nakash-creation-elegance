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
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-hero" />
      
      {/* Content */}
      <div className="relative z-10 text-center text-background max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-display font-bold mb-6 animate-fade-in leading-tight">
          Where Tradition
          <br />
          <span className="text-accent">Meets Elegance</span>
        </h1>
        
        <p className="text-lg sm:text-xl lg:text-2xl mb-8 animate-fade-in font-light leading-relaxed max-w-2xl mx-auto">
          Discover the perfect blend of timeless Indian fashion and contemporary style at Nakash Creation
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-scale-in">
          <Button 
            variant="hero" 
            size="xl"
            onClick={() => scrollToSection('gallery')}
            className="font-medium"
          >
            Explore Collection
          </Button>
          <Button 
            variant="ghost" 
            size="xl"
            onClick={() => scrollToSection('about')}
            className="text-background hover:text-background border-background/30 hover:bg-background/10"
          >
            Our Story
          </Button>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-float">
        <div className="w-6 h-10 border-2 border-background/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-background/70 rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;