
import React, { useState } from 'react';
import Terminal from '../components/Terminal';
import { toast } from '../hooks/use-toast';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter } from 'lucide-react';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    toast({
      title: "Message sent!",
      description: "Thanks for reaching out. I'll get back to you soon.",
    });
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };
  
  return (
    <div className="max-w-7xl mx-auto p-6">
      <header className="mb-8 animate-fade-in">
        <h1 className="text-terminal-green text-3xl font-bold mb-2">Contact</h1>
        <p className="text-terminal-muted">Get in touch with me</p>
      </header>
      
      <div className="mb-8 animate-slide-up">
        <Terminal initialPath="/contact" />
      </div>
      
      <div className="content-section mb-16">
        <div className="flex items-center mb-10 animate-slide-up" style={{ animationDelay: '100ms' }}>
          <Mail className="text-terminal-green mr-3 h-7 w-7" />
          <h2 className="text-terminal-green text-3xl font-bold font-sans">Get In Touch</h2>
        </div>
        
        <div className="space-y-8 mb-8 modern-grid" style={{ animationDelay: '200ms' }}>
          <Card className="feature-card group">
            <CardHeader className="pb-2">
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle className="font-sans text-2xl">Contact Information</CardTitle>
                  <CardDescription className="font-mono text-xs mt-1">Nicolas ROMANINA</CardDescription>
                </div>
                <div className="glass-panel flex items-center space-x-1">
                  <span className="text-xs">Available</span>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="md:col-span-2">
                  <p className="font-sans mb-6">Feel free to reach out to me through any of these channels. I'm always interested in new opportunities, collaborations, or just a friendly chat about technology.</p>
                  
                  <div className="space-y-4 mb-6">
                    <div className="flex items-center gap-3">
                      <Phone className="text-terminal-green h-5 w-5" />
                      <span>+261 34 11 815 03</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Mail className="text-terminal-green h-5 w-5" />
                      <span>nicolasromanina@gmail.com</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <MapPin className="text-terminal-green h-5 w-5" />
                      <span>Madagascar</span>
                    </div>
                  </div>
                  
                  <h3 className="font-bold mb-3">Social Networks</h3>
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <a href="#" className="brutalist-button text-center flex items-center justify-center gap-2">
                      <Github className="w-4 h-4" />
                      <span>GitHub</span>
                    </a>
                    <a href="#" className="brutalist-button text-center flex items-center justify-center gap-2">
                      <Linkedin className="w-4 h-4" />
                      <span>LinkedIn</span>
                    </a>
                    <a href="#" className="brutalist-button text-center flex items-center justify-center gap-2">
                      <Twitter className="w-4 h-4" />
                      <span>Twitter</span>
                    </a>
                    <a href="#" className="brutalist-button text-center">Portfolio</a>
                  </div>
                </div>
                <div className="border-2 border-brutalist-black h-64 flex items-center justify-center bg-brutalist-grey/30 hover-glow overflow-hidden">
                  <img src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d" alt="Contact" className="object-cover w-full h-full" />
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="feature-card group">
            <CardHeader className="pb-2">
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle className="font-sans text-2xl">Send Me a Message</CardTitle>
                  <CardDescription className="font-mono text-xs mt-1">I'll get back to you as soon as possible</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="md:col-span-2">
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label htmlFor="name" className="block font-bold mb-1">Name</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full p-2 border-2 border-brutalist-black bg-brutalist-white"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block font-bold mb-1">Email</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full p-2 border-2 border-brutalist-black bg-brutalist-white"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="subject" className="block font-bold mb-1">Subject</label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        className="w-full p-2 border-2 border-brutalist-black bg-brutalist-white"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="message" className="block font-bold mb-1">Message</label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={5}
                        className="w-full p-2 border-2 border-brutalist-black bg-brutalist-white"
                        required
                      ></textarea>
                    </div>
                    <button 
                      type="submit" 
                      className="brutalist-button w-full flex items-center justify-center gap-2"
                    >
                      <Send className="w-4 h-4" />
                      <span>Send Message</span>
                    </button>
                  </form>
                </div>
                <div className="md:col-span-1">
                  <div className="brutalist-card p-6 h-full">
                    <h3 className="text-xl font-bold mb-4">Availability</h3>
                    <div className="space-y-4">
                      <div className="p-4 border-2 border-brutalist-black bg-brutalist-grey/30 hover-glow">
                        <h4 className="font-bold mb-2">Freelance Work</h4>
                        <p>Available for project-based work and consultancy</p>
                      </div>
                      <div className="p-4 border-2 border-brutalist-black bg-brutalist-grey/30 hover-glow">
                        <h4 className="font-bold mb-2">Full-time Positions</h4>
                        <p>Open to interesting opportunities</p>
                      </div>
                      <div className="p-4 border-2 border-brutalist-black bg-brutalist-grey/30 hover-glow">
                        <h4 className="font-bold mb-2">Collaborations</h4>
                        <p>Interested in open-source and side projects</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
      
      <div className="mt-6 glass-panel text-terminal-muted text-sm font-sans animate-fade-in" style={{ animationDelay: '400ms' }}>
        <p>Pro tip: Use the 'contact' command in the terminal to quickly see my contact information</p>
      </div>
    </div>
  );
};

export default ContactPage;
