import React from 'react';
import { Heart, Sparkles } from 'lucide-react';

const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-primary text-primary-foreground py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Brand */}
            <div className="lg:col-span-2">
              <h3 className="text-2xl lg:text-3xl font-display font-bold mb-4">
                Nakashi <span className="text-accent">Creation</span>
              </h3>
              <p className="text-primary-foreground/80 leading-relaxed mb-6 max-w-md">
                Where tradition meets elegance. Discover the perfect blend of timeless Indian fashion 
                and contemporary style in every piece we create.
              </p>
              <div className="flex items-center space-x-2 text-sm text-primary-foreground/60">
                <span>Crafted with</span>
                <Heart className="w-4 h-4 text-accent animate-pulse" />
                <span>in India</span>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-display font-semibold mb-6 text-accent">Quick Links</h4>
              <ul className="space-y-3">
                {['Home', 'About', 'Gallery', 'Contact'].map((item) => (
                  <li key={item}>
                    <button
                      onClick={() => scrollToSection(item.toLowerCase())}
                      className="text-primary-foreground/80 hover:text-accent transition-colors duration-smooth text-sm"
                    >
                      {item}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Collections */}
            <div>
              <h4 className="font-display font-semibold mb-6 text-accent">Collections</h4>
              <ul className="space-y-3 text-sm">
                {[
                  'Sarees',
                  'Lehengas', 
                  'Kurtis',
                  'Gowns',
                  'Indo-Western',
                  "Nakashi's Signature Collection"
                ].map((item) => (
                  <li key={item}>
                    <span className="text-primary-foreground/80 hover:text-accent transition-colors duration-smooth cursor-default">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="border-t border-primary-foreground/20 mt-12 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="text-primary-foreground/60 text-sm mb-4 md:mb-0">
                © 2024 Nakashi Creation. All rights reserved.
              </div>
              <div className="flex items-center space-x-2 text-sm text-primary-foreground/60">
                <Sparkles className="w-4 h-4 text-accent" />
                <span>Luxury Traditional Fashion</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;