import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Dialog, DialogContent, DialogTitle } from '@/components/ui/dialog';
import { X } from 'lucide-react';

import galleryLehenga from '@/assets/gallery-lehenga.jpg';
import galleryKurti from '@/assets/gallery-kurti.jpg';
import galleryGown from '@/assets/gallery-gown.jpg';
import galleryNakashi from '@/assets/gallery-nakashi.jpg';
import galleryEthnicSaree from '@/assets/gallery-ethnic-saree.jpg';
import galleryJewelry from '@/assets/gallery-jewelry.jpg';
import galleryBridal from '@/assets/gallery-bridal.jpg';
import galleryDupatta from '@/assets/gallery-dupatta.jpg';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<null | {
    src: string;
    title: string;
    description: string;
  }>(null);

  const galleryItems = [
    {
      src: galleryBridal,
      title: "Bridal Collection",
      description: "Exquisite red and gold bridal lehenga with intricate embroidery, perfect for the most special day",
      category: "Bridal"
    },
    {
      src: galleryLehenga,
      title: "Royal Lehenga",
      description: "Emerald green lehenga with intricate gold embroidery, perfect for special occasions",
      category: "Lehengas"
    },
    {
      src: galleryNakashi,
      title: "Signature Nakashi",
      description: "Our exclusive purple Nakashi design with intricate silver work",
      category: "Nakashis"
    },
    {
      src: galleryJewelry,
      title: "Traditional Jewelry",
      description: "Stunning collection of authentic Indian jewelry to complete your look",
      category: "Accessories"
    },
    {
      src: galleryKurti,
      title: "Designer Kurti",
      description: "Elegant pink kurti with golden threadwork, combining comfort with style",
      category: "Kurtis"
    },
    {
      src: galleryGown,
      title: "Indo-Western Gown",
      description: "Navy blue fusion gown that perfectly blends traditional and modern elements",
      category: "Indo-Western"
    },
    {
      src: galleryDupatta,
      title: "Elegant Dupatta Collection",
      description: "Beautiful collection of colorful dupatta scarves with intricate patterns",
      category: "Accessories"
    },
    {
      src: galleryEthnicSaree,
      title: "Ethnic Saree",
      description: "Traditional orange saree with beautiful border work and classic draping",
      category: "Sarees"
    }
  ];

  return (
    <section id="gallery" className="py-20 lg:py-32 bg-background relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-20 left-10 w-40 h-40 bg-gradient-royal rounded-full opacity-5 animate-float" />
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-gradient-gold rounded-full opacity-5 animate-bounce-slow" />
      <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-gradient-primary rounded-full opacity-5 animate-pulse-glow" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="animate-slide-up">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-primary mb-6">
                Our <span className="text-accent shimmer">Exquisite</span> Collection
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Discover our carefully curated selection of traditional and contemporary Indian fashion, 
                each piece crafted with love and attention to detail.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8">
            {galleryItems.map((item, index) => (
              <Card 
                key={index} 
                className="group overflow-hidden cursor-pointer transform hover:scale-105 hover:rotate-1 transition-all duration-luxury hover:shadow-luxury bg-gradient-silk border-accent/20 animate-slide-up"
                onClick={() => setSelectedImage(item)}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative aspect-[3/4] overflow-hidden">
                  <img
                    src={item.src}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-luxury group-hover:scale-110 shimmer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-luxury" />
                  <div className="absolute top-4 right-4">
                    <span className="inline-block px-3 py-1 bg-gradient-gold text-accent-foreground text-xs font-medium rounded-full shadow-gold animate-pulse-glow">
                      {item.category}
                    </span>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4 text-white transform translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-luxury">
                    <h3 className="font-display font-semibold text-lg mb-1">{item.title}</h3>
                    <p className="text-xs leading-relaxed opacity-90">{item.description}</p>
                  </div>
                  
                  {/* Decorative corner frame */}
                  <div className="absolute top-2 left-2 w-6 h-6 border-l-2 border-t-2 border-accent opacity-0 group-hover:opacity-70 transition-opacity duration-luxury" />
                  <div className="absolute bottom-2 right-2 w-6 h-6 border-r-2 border-b-2 border-accent opacity-0 group-hover:opacity-70 transition-opacity duration-luxury" />
                </div>
              </Card>
            ))}
          </div>

          <div className="text-center mt-16 relative">
            <div className="pattern-overlay absolute inset-0 opacity-5" />
            <div className="relative z-10">
              <p className="text-muted-foreground mb-6">
                Each piece in our collection represents the perfect harmony of traditional craftsmanship and modern design
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                {["Handcrafted", "Premium Quality", "Authentic Design", "Modern Comfort", "Luxury Experience"].map((tag, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-gradient-to-r from-muted to-muted/50 text-muted-foreground text-sm rounded-full hover:bg-gradient-gold hover:text-accent-foreground transition-all duration-luxury transform hover:scale-105 cursor-default border border-border/50"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Image Modal */}
      <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-4xl w-full p-0 overflow-hidden">
          <DialogTitle className="sr-only">
            {selectedImage?.title}
          </DialogTitle>
          {selectedImage && (
            <div className="relative">
              <img
                src={selectedImage.src}
                alt={selectedImage.title}
                className="w-full h-auto max-h-[80vh] object-contain"
              />
              <div className="absolute top-4 right-4">
                <button
                  onClick={() => setSelectedImage(null)}
                  className="w-8 h-8 bg-black/50 text-white rounded-full flex items-center justify-center hover:bg-black/70 transition-colors"
                >
                  <X size={16} />
                </button>
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                <h3 className="text-white font-display font-semibold text-xl mb-2">
                  {selectedImage.title}
                </h3>
                <p className="text-white/90 text-sm leading-relaxed">
                  {selectedImage.description}
                </p>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Gallery;