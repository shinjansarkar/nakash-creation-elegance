import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Dialog, DialogContent, DialogTitle } from '@/components/ui/dialog';
import { X } from 'lucide-react';

import galleryLehenga from '@/assets/gallery-lehenga.jpg';
import galleryKurti from '@/assets/gallery-kurti.jpg';
import galleryGown from '@/assets/gallery-gown.jpg';
import galleryNakashi from '@/assets/gallery-nakashi.jpg';
import galleryEthnicSaree from '@/assets/gallery-ethnic-saree.jpg';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<null | {
    src: string;
    title: string;
    description: string;
  }>(null);

  const galleryItems = [
    {
      src: galleryLehenga,
      title: "Royal Lehenga",
      description: "Emerald green lehenga with intricate gold embroidery, perfect for special occasions",
      category: "Lehengas"
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
      src: galleryNakashi,
      title: "Signature Nakashi",
      description: "Our exclusive purple Nakashi design with intricate silver work",
      category: "Nakashis"
    },
    {
      src: galleryEthnicSaree,
      title: "Ethnic Saree",
      description: "Traditional orange saree with beautiful border work and classic draping",
      category: "Sarees"
    }
  ];

  return (
    <section id="gallery" className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-primary mb-6">
              Our <span className="text-accent">Exquisite</span> Collection
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Discover our carefully curated selection of traditional and contemporary Indian fashion, 
              each piece crafted with love and attention to detail.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {galleryItems.map((item, index) => (
              <Card 
                key={index} 
                className="group overflow-hidden cursor-pointer transform hover:scale-105 transition-all duration-luxury hover:shadow-luxury"
                onClick={() => setSelectedImage(item)}
              >
                <div className="relative aspect-[3/4] overflow-hidden">
                  <img
                    src={item.src}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-luxury group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-luxury" />
                  <div className="absolute bottom-4 left-4 right-4 text-white transform translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-luxury">
                    <span className="inline-block px-3 py-1 bg-accent text-accent-foreground text-xs font-medium rounded-full mb-2">
                      {item.category}
                    </span>
                    <h3 className="font-display font-semibold text-lg">{item.title}</h3>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-muted-foreground mb-6">
              Each piece in our collection represents the perfect harmony of traditional craftsmanship and modern design
            </p>
            <div className="flex flex-wrap justify-center gap-2">
              {["Handcrafted", "Premium Quality", "Authentic Design", "Modern Comfort"].map((tag, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-muted text-muted-foreground text-sm rounded-full"
                >
                  {tag}
                </span>
              ))}
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