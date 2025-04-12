
import React, { useState } from 'react';
import Terminal from '../components/Terminal';
import { toast } from '../hooks/use-toast';

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
      <header className="mb-8">
        <h1 className="text-terminal-green text-3xl font-bold mb-2">Contact</h1>
        <p className="text-terminal-muted">Get in touch with me</p>
      </header>
      
      <div className="mb-8">
        <Terminal initialPath="/contact" />
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        <div className="brutalist-card p-6">
          <h2 className="text-xl font-bold mb-4">Send Me a Message</h2>
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
            <button type="submit" className="brutalist-button w-full">Send Message</button>
          </form>
        </div>
        
        <div>
          <div className="brutalist-card p-6 mb-6">
            <h2 className="text-xl font-bold mb-4">Contact Information</h2>
            <div className="space-y-4">
              <div>
                <p className="font-bold">Email</p>
                <p className="text-terminal-green">developer@example.com</p>
              </div>
              <div>
                <p className="font-bold">Phone</p>
                <p>(123) 456-7890</p>
              </div>
              <div>
                <p className="font-bold">Location</p>
                <p>San Francisco, California</p>
              </div>
            </div>
          </div>
          
          <div className="brutalist-card p-6">
            <h2 className="text-xl font-bold mb-4">Connect With Me</h2>
            <div className="grid grid-cols-2 gap-4">
              <a href="#" className="brutalist-button text-center">GitHub</a>
              <a href="#" className="brutalist-button text-center">LinkedIn</a>
              <a href="#" className="brutalist-button text-center">Twitter</a>
              <a href="#" className="brutalist-button text-center">Portfolio</a>
            </div>
          </div>
        </div>
      </div>
      
      <div className="brutalist-card p-6 mb-8">
        <h2 className="text-xl font-bold mb-4">Availability</h2>
        <p className="mb-4">I'm currently open to:</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-4 border-2 border-brutalist-black bg-brutalist-grey/30">
            <h3 className="font-bold mb-2">Freelance Work</h3>
            <p>Available for project-based work and consultancy</p>
          </div>
          <div className="p-4 border-2 border-brutalist-black bg-brutalist-grey/30">
            <h3 className="font-bold mb-2">Full-time Positions</h3>
            <p>Open to interesting opportunities</p>
          </div>
          <div className="p-4 border-2 border-brutalist-black bg-brutalist-grey/30">
            <h3 className="font-bold mb-2">Collaborations</h3>
            <p>Interested in open-source and side projects</p>
          </div>
        </div>
      </div>
      
      <div className="text-terminal-muted">
        <p>Pro tip: Use the 'contact' command in the terminal to quickly see my contact information</p>
      </div>
    </div>
  );
};

export default ContactPage;
