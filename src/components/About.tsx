import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Sparkles, Heart, Crown } from 'lucide-react';
import studioImage from '@/assets/about-studio.jpg';
import embroideryDetail from '@/assets/embroidery-detail.jpg';

const About = () => {
  const features = [
    {
      icon: Crown,
      title: "Premium Quality",
      description: "Each piece is carefully crafted with the finest fabrics and traditional techniques"
    },
    {
      icon: Heart,
      title: "Cultural Heritage",
      description: "Celebrating the rich traditions of Indian fashion with authentic designs"
    },
    {
      icon: Sparkles,
      title: "Modern Touch",
      description: "Contemporary styling that brings traditional wear into the modern world"
    }
  ];

  const collections = [
    "Elegant Sarees",
    "Royal Lehengas", 
    "Stylish Kurtis",
    "Designer Gowns",
    "Indo-Western Fusion",
    "Ethnic Sarees",
    "Nakashi's Signature Style"
  ];

  return (
    <section id="about" className="py-20 lg:py-32 bg-gradient-to-br from-background to-muted">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-primary mb-6">
              The <span className="text-accent">Nakashi</span> Legacy
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              At Nakashi Creation, we believe that fashion is more than just clothing—it's a celebration of culture, 
              craftsmanship, and individual expression.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-20">
            {/* Studio Image */}
            <div className="relative group overflow-hidden rounded-2xl animate-slide-in">
              <img
                src={studioImage}
                alt="Nakashi Creation Studio"
                className="w-full h-96 object-cover transform group-hover:scale-110 transition-transform duration-luxury shadow-luxury"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-luxury" />
              <div className="absolute bottom-6 left-6 right-6 text-white transform translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-luxury">
                <h4 className="font-display font-semibold text-xl mb-2">Our Boutique Experience</h4>
                <p className="text-sm leading-relaxed">Where every piece tells a story of heritage and craftsmanship</p>
              </div>
              {/* Decorative corner elements */}
              <div className="absolute top-4 left-4 w-8 h-8 border-l-2 border-t-2 border-accent opacity-60" />
              <div className="absolute bottom-4 right-4 w-8 h-8 border-r-2 border-b-2 border-accent opacity-60" />
            </div>

            <div className="space-y-6">
              <div className="animate-slide-in">
                <h3 className="text-2xl lg:text-3xl font-display font-semibold text-primary mb-6">
                  Our Story
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Founded with a passion for preserving the timeless beauty of Indian traditional wear, 
                  Nakashi Creation has become synonymous with luxury and authenticity. We carefully curate 
                  each piece to ensure it meets our exacting standards of quality and design.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  From the intricate embroidery of our sarees to the flowing silhouettes of our lehengas, 
                  every garment tells a story of heritage, skill, and artistic vision. Our brand 
                  represent the perfect fusion of traditional craftsmanship and contemporary sensibility.
                </p>
              </div>

              {/* Embroidery detail image */}
              <div className="relative overflow-hidden rounded-xl">
                <img
                  src={embroideryDetail}
                  alt="Intricate embroidery detail"
                  className="w-full h-32 object-cover shimmer"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-accent/20 to-transparent" />
              </div>
            </div>
          </div>

          <div className="grid gap-6 lg:grid-cols-3 mb-20">
            {features.map((feature, index) => (
              <Card key={index} className="group hover:shadow-luxury transition-all duration-luxury transform hover:-translate-y-2 hover:rotate-1 bg-gradient-silk border-accent/20">
                <CardContent className="p-6 text-center">
                  <div className="flex justify-center mb-4">
                    <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center group-hover:animate-pulse-glow shadow-emboss">
                      <feature.icon className="w-8 h-8 text-primary-foreground" />
                    </div>
                  </div>
                  <h4 className="font-display font-semibold text-primary mb-3 text-lg">{feature.title}</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center relative">
            <h3 className="text-2xl lg:text-3xl font-display font-semibold text-primary mb-8">
              Our Collection
            </h3>
            
            {/* Decorative background pattern */}
            <div className="absolute inset-0 pattern-overlay opacity-5" />
            
            <div className="flex flex-wrap justify-center gap-3 lg:gap-4 max-w-4xl mx-auto relative z-10">
              {collections.map((collection, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-gradient-gold text-accent-foreground rounded-full text-sm font-medium shadow-gold transform hover:scale-110 hover:rotate-1 transition-all duration-bounce cursor-default shimmer"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {collection}
                </span>
              ))}
            </div>
            
            {/* Floating decorative elements */}
            <div className="absolute top-0 left-10 w-20 h-20 bg-gradient-royal rounded-full opacity-10 animate-float" />
            <div className="absolute bottom-0 right-10 w-16 h-16 bg-gradient-gold rounded-full opacity-10 animate-bounce-slow" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;