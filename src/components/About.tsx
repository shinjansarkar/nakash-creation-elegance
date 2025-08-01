import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Sparkles, Heart, Crown } from 'lucide-react';

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
    "Signature Nakashis"
  ];

  return (
    <section id="about" className="py-20 lg:py-32 bg-gradient-to-br from-background to-muted">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-primary mb-6">
              The <span className="text-accent">Nakash</span> Legacy
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              At Nakash Creation, we believe that fashion is more than just clothing—it's a celebration of culture, 
              craftsmanship, and individual expression.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-20">
            <div className="animate-slide-in">
              <h3 className="text-2xl lg:text-3xl font-display font-semibold text-primary mb-6">
                Our Story
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Founded with a passion for preserving the timeless beauty of Indian traditional wear, 
                Nakash Creation has become synonymous with luxury and authenticity. We carefully curate 
                each piece to ensure it meets our exacting standards of quality and design.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                From the intricate embroidery of our sarees to the flowing silhouettes of our lehengas, 
                every garment tells a story of heritage, skill, and artistic vision. Our signature Nakashis 
                represent the perfect fusion of traditional craftsmanship and contemporary sensibility.
              </p>
            </div>

            <div className="grid gap-6">
              {features.map((feature, index) => (
                <Card key={index} className="group hover:shadow-card transition-all duration-luxury transform hover:-translate-y-1">
                  <CardContent className="p-6 flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center group-hover:animate-glow">
                        <feature.icon className="w-6 h-6 text-primary-foreground" />
                      </div>
                    </div>
                    <div>
                      <h4 className="font-display font-semibold text-primary mb-2">{feature.title}</h4>
                      <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div className="text-center">
            <h3 className="text-2xl lg:text-3xl font-display font-semibold text-primary mb-8">
              Our Collection
            </h3>
            <div className="flex flex-wrap justify-center gap-3 lg:gap-4 max-w-4xl mx-auto">
              {collections.map((collection, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-gradient-gold text-accent-foreground rounded-full text-sm font-medium shadow-gold transform hover:scale-105 transition-all duration-luxury cursor-default"
                >
                  {collection}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;