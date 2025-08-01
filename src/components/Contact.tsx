import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { MapPin, Phone, Mail, Instagram, Facebook, Twitter } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    toast({
      title: "Message Sent!",
      description: "Thank you for your interest. We'll get back to you soon.",
    });
    setFormData({ name: '', email: '', message: '' });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      detail: "+91 98765 43210",
      link: "tel:+919876543210"
    },
    {
      icon: Mail,
      title: "Email",
      detail: "info@nakashcreation.com",
      link: "mailto:info@nakashcreation.com"
    },
    {
      icon: MapPin,
      title: "Location",
      detail: "Metropolitian Bypass Dhaba, Kolkata, India",
      link: "#"
    }
  ];

  const socialLinks = [
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" }
  ];

  return (
    <section id="contact" className="py-20 lg:py-32 bg-gradient-to-br from-muted via-background to-muted relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-10 right-20 w-32 h-32 bg-gradient-royal rounded-full opacity-10 animate-float" />
      <div className="absolute bottom-20 left-20 w-24 h-24 bg-gradient-gold rounded-full opacity-10 animate-bounce-slow" />
      <div className="pattern-overlay absolute inset-0 opacity-5" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="animate-slide-up">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-primary mb-6">
                Get In <span className="text-accent shimmer">Touch</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                We'd love to hear from you. Whether you have a question about our collection, 
                need styling advice, or want to discuss custom orders, we're here to help.
              </p>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Contact Form */}
            <Card className="shadow-luxury hover:shadow-glow transition-all duration-luxury bg-gradient-silk border-accent/20 animate-slide-up">
              <CardHeader className="relative">
                <CardTitle className="font-display text-2xl text-primary">Send us a Message</CardTitle>
                <div className="absolute top-4 right-4 w-8 h-8 bg-gradient-gold rounded-full opacity-20 animate-pulse-glow" />
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-sm font-medium flex items-center gap-2">
                      Name <span className="text-accent">✨</span>
                    </Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="transition-all duration-smooth focus:shadow-gold hover:border-accent/50 bg-background/50"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-sm font-medium flex items-center gap-2">
                      Email <span className="text-accent">💫</span>
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="transition-all duration-smooth focus:shadow-gold hover:border-accent/50 bg-background/50"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-sm font-medium flex items-center gap-2">
                      Message <span className="text-accent">💝</span>
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      className="transition-all duration-smooth focus:shadow-gold hover:border-accent/50 bg-background/50"
                      placeholder="Tell us about your requirements or ask any questions..."
                    />
                  </div>
                  
                  <Button type="submit" variant="luxury" size="lg" className="w-full shimmer">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-8 animate-slide-up" style={{ animationDelay: '0.2s' }}>
              <div>
                <h3 className="font-display text-2xl font-semibold text-primary mb-6">Visit Our Store</h3>
                <div className="space-y-4">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="flex items-start space-x-4 group">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center group-hover:animate-pulse-glow shadow-emboss transform group-hover:scale-110 transition-all duration-bounce">
                          <info.icon className="w-6 h-6 text-primary-foreground" />
                        </div>
                      </div>
                      <div>
                        <h4 className="font-medium text-primary mb-1">{info.title}</h4>
                        <a 
                          href={info.link}
                          className="text-muted-foreground hover:text-primary transition-colors duration-smooth"
                        >
                          {info.detail}
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Map Placeholder */}
              <Card className="overflow-hidden shadow-card hover:shadow-luxury transition-all duration-luxury">
                <div className="h-64 bg-gradient-to-br from-muted via-muted/80 to-accent/20 flex items-center justify-center relative pattern-overlay">
                  <div className="text-center relative z-10">
                    <MapPin className="w-12 h-12 text-primary mx-auto mb-4 animate-bounce-slow" />
                    <p className="text-primary font-medium">Interactive Map</p>
                    <p className="text-muted-foreground text-sm">Fashion District, Mumbai</p>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
                  
                  {/* Decorative elements */}
                  <div className="absolute top-4 left-4 w-6 h-6 border-l-2 border-t-2 border-accent opacity-30" />
                  <div className="absolute bottom-4 right-4 w-6 h-6 border-r-2 border-b-2 border-accent opacity-30" />
                </div>
              </Card>

              {/* Social Media */}
              <div>
                <h4 className="font-display text-xl font-semibold text-primary mb-4 flex items-center gap-2">
                  Follow Us <span className="text-accent animate-wiggle">🌟</span>
                </h4>
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      aria-label={social.label}
                      className="w-12 h-12 bg-gradient-gold rounded-full flex items-center justify-center hover:shadow-glow transform hover:scale-110 hover:rotate-12 transition-all duration-bounce group"
                    >
                      <social.icon className="w-6 h-6 text-accent-foreground group-hover:animate-wiggle" />
                    </a>
                  ))}
                </div>
              </div>

              {/* Store Hours */}
              <Card className="shadow-card hover:shadow-luxury transition-all duration-luxury bg-gradient-silk border-accent/20">
                <CardHeader>
                  <CardTitle className="font-display text-lg text-primary flex items-center gap-2">
                    Store Hours <span className="text-accent">⏰</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Monday - Saturday</span>
                      <span className="font-medium">10:00 AM - 8:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Sunday</span>
                      <span className="font-medium">11:00 AM - 6:00 PM</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;