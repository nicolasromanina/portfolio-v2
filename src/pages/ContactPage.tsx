import React, { useState } from 'react';
import Terminal from '../components/Terminal';
import { toast } from '../hooks/use-toast';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const ContactPage = ({ theme = 'dark' }: { theme?: 'dark' | 'light' }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<Partial<FormData>>({});

  const themeStyles = {
    dark: {
      container: 'bg-gray-900 text-gray-100',
      card: 'bg-gray-800/50 backdrop-blur-md border-gray-700',
      input: 'bg-gray-800 border-gray-600 text-gray-100 focus:ring-green-400',
      text: 'text-gray-100',
      muted: 'text-gray-400',
      accent: 'text-green-400',
      button: 'bg-green-600 hover:bg-green-700'
    },
    light: {
      container: 'bg-gray-100 text-gray-900',
      card: 'bg-white/80 backdrop-blur-md border-gray-200',
      input: 'bg-white border-gray-300 text-gray-900 focus:ring-green-500',
      text: 'text-gray-900',
      muted: 'text-gray-600',
      accent: 'text-green-600',
      button: 'bg-green-500 hover:bg-green-600'
    }
  };

  const currentTheme = themeStyles[theme];

  const validateForm = () => {
    const newErrors: Partial<FormData> = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Invalid email format';
    if (!formData.subject.trim()) newErrors.subject = 'Subject is required';
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    setErrors(prev => ({ ...prev, [name]: undefined }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      console.log('Form submitted:', formData);
      toast({
        title: "Message Sent!",
        description: "Thank you for reaching out. I'll get back to you soon.",
        className: `${currentTheme.button} text-white`
      });
      setFormData({ name: '', email: '', subject: '', message: '' });
      setErrors({});
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again later.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.div 
      className={`max-w-7xl mx-auto p-6 ${currentTheme.container}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <header className="mb-8">
        <motion.h1 
          className={`text-4xl font-bold ${currentTheme.accent} mb-2 font-mono`}
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          Contact
        </motion.h1>
        <motion.p 
          className={`text-lg ${currentTheme.muted} font-sans`}
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          Let's connect and create something amazing
        </motion.p>
      </header>

      <motion.div 
        className="mb-8"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        <Terminal 
          initialPath="/contact"
          theme={theme}
          additionalCommands={[
            {
              name: 'contact',
              description: 'Show contact information',
              handler: () => `
Phone: +261 34 11 815 03
Email: nicolasromanina@gmail.com
Location: Madagascar
GitHub: github.com/nicolasromanina
LinkedIn: linkedin.com/in/nicolasromanina
Twitter: twitter.com/nicolasromanina
              `
            },
            {
              name: 'availability',
              description: 'Show availability status',
              handler: () => `
Freelance: Available for project-based work
Full-time: Open to opportunities
Collaborations: Interested in open-source projects
              `
            }
          ]}
        />
      </motion.div>

      <div className="content-section mb-16">
        <motion.div 
          className="flex items-center mb-10"
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <Mail className={`mr-3 h-8 w-8 ${currentTheme.accent}`} />
          <h2 className={`text-3xl font-bold font-sans ${currentTheme.text}`}>
            Get In Touch
          </h2>
        </motion.div>

        <AnimatePresence>
          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <Card 
              className={`group ${currentTheme.card} transition-all duration-300 hover:shadow-xl hover:-translate-y-1`}
              role="article"
              aria-labelledby="contact-title"
            >
              <CardHeader className="pb-2">
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle id="contact-title" className="font-sans text-2xl">
                      Contact Information
                    </CardTitle>
                    <CardDescription className="font-mono text-xs mt-1">
                      Nicolas ROMANINA
                    </CardDescription>
                  </div>
                  <Badge className={`flex items-center space-x-1 ${currentTheme.accent} bg-opacity-20`}>
                    <span className="text-xs">Available</span>
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="md:col-span-2">
                    <p className={`font-sans mb-6 ${currentTheme.text}`}>
                      I'm excited to connect for new projects, collaborations, or just to discuss tech. Reach out via any of these channels, and let's create something extraordinary together!
                    </p>
                    <div className="space-y-4 mb-6">
                      <div className="flex items-center gap-3">
                        <Phone className={`h-5 w-5 ${currentTheme.accent}`} />
                        <span>+261 34 11 815 03</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Mail className={`h-5 w-5 ${currentTheme.accent}`} />
                        <span>nicolasromanina@gmail.com</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <MapPin className={`h-5 w-5 ${currentTheme.accent}`} />
                        <span>Madagascar</span>
                      </div>
                    </div>
                    <h3 className="font-bold mb-3 text-lg">Connect with Me</h3>
                    <div className="flex gap-4 mb-6">
                      <motion.a 
                        href="https://github.com/nicolasromanina" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Github className={`h-6 w-6 ${currentTheme.accent}`} />
                      </motion.a>
                      <motion.a 
                        href="https://linkedin.com/in/nicolasromanina" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Linkedin className={`h-6 w-6 ${currentTheme.accent}`} />
                      </motion.a>
                      <motion.a 
                        href="https://twitter.com/nicolasromanina" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Twitter className={`h-6 w-6 ${currentTheme.accent}`} />
                      </motion.a>
                    </div>
                    <Button 
                      className={`${currentTheme.button} flex items-center gap-2`}
                      onClick={() => navigate('/projects')}
                    >
                      <span>View Portfolio</span>
                    </Button>
                  </div>
                  <motion.div 
                    className="relative h-64 overflow-hidden rounded-lg"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  >
                    <img 
                      src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3" 
                      alt="Contact" 
                      className="object-cover w-full h-full"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  </motion.div>
                </div>
              </CardContent>
            </Card>

            <Card 
              className={`group ${currentTheme.card} transition-all duration-300 hover:shadow-xl hover:-translate-y-1`}
              role="article"
              aria-labelledby="message-title"
            >
              <CardHeader className="pb-2">
                <CardTitle id="message-title" className="font-sans text-2xl">
                  Send Me a Message
                </CardTitle>
                <CardDescription className="font-mono text-xs mt-1">
                  I'll respond as soon as possible
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="md:col-span-2">
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div>
                        <label htmlFor="name" className="block font-bold mb-1 text-sm">
                          Name
                        </label>
                        <motion.input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          className={`w-full p-2 rounded-md border ${currentTheme.input} focus:outline-none focus:ring-2 transition-all duration-300`}
                          required
                          whileFocus={{ scale: 1.02 }}
                        />
                        {errors.name && (
                          <motion.p 
                            className="text-red-500 text-xs mt-1"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                          >
                            {errors.name}
                          </motion.p>
                        )}
                      </div>
                      <div>
                        <label htmlFor="email" className="block font-bold mb-1 text-sm">
                          Email
                        </label>
                        <motion.input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          className={`w-full p-2 rounded-md border ${currentTheme.input} focus:outline-none focus:ring-2 transition-all duration-300`}
                          required
                          whileFocus={{ scale: 1.02 }}
                        />
                        {errors.email && (
                          <motion.p 
                            className="text-red-500 text-xs mt-1"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                          >
                            {errors.email}
                          </motion.p>
                        )}
                      </div>
                      <div>
                        <label htmlFor="subject" className="block font-bold mb-1 text-sm">
                          Subject
                        </label>
                        <motion.input
                          type="text"
                          id="subject"
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          className={`w-full p-2 rounded-md border ${currentTheme.input} focus:outline-none focus:ring-2 transition-all duration-300`}
                          required
                          whileFocus={{ scale: 1.02 }}
                        />
                        {errors.subject && (
                          <motion.p 
                            className="text-red-500 text-xs mt-1"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                          >
                            {errors.subject}
                          </motion.p>
                        )}
                      </div>
                      <div>
                        <label htmlFor="message" className="block font-bold mb-1 text-sm">
                          Message
                        </label>
                        <motion.textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          rows={5}
                          className={`w-full p-2 rounded-md border ${currentTheme.input} focus:outline-none focus:ring-2 transition-all duration-300 resize-y`}
                          required
                          whileFocus={{ scale: 1.02 }}
                        />
                        {errors.message && (
                          <motion.p 
                            className="text-red-500 text-xs mt-1"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                          >
                            {errors.message}
                          </motion.p>
                        )}
                      </div>
                      <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Button
                          type="submit"
                          className={`w-full flex items-center justify-center gap-2 ${currentTheme.button}`}
                          disabled={isSubmitting}
                        >
                          <motion.span
                            animate={{ rotate: isSubmitting ? 360 : 0 }}
                            transition={{ duration: 1, repeat: isSubmitting ? Infinity : 0 }}
                          >
                            <Send className="w-4 h-4" />
                          </motion.span>
                          <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
                        </Button>
                      </motion.div>
                    </form>
                  </div>
                  <div className="md:col-span-1">
                    <motion.div 
                      className={`p-6 h-full rounded-lg ${currentTheme.card}`}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.7 }}
                    >
                      <h3 className="text-xl font-bold mb-4">Availability</h3>
                      <div className="space-y-4">
                        {[
                          {
                            title: 'Freelance Work',
                            description: 'Available for project-based work and consultancy'
                          },
                          {
                            title: 'Full-time Positions',
                            description: 'Open to interesting opportunities'
                          },
                          {
                            title: 'Collaborations',
                            description: 'Interested in open-source and side projects'
                          }
                        ].map((item, index) => (
                          <motion.div
                            key={index}
                            className={`p-4 rounded-lg border ${currentTheme.card}`}
                            whileHover={{ scale: 1.03 }}
                            transition={{ duration: 0.3 }}
                          >
                            <h4 className="font-bold mb-2">{item.title}</h4>
                            <p className={`text-sm ${currentTheme.muted}`}>{item.description}</p>
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </AnimatePresence>
      </div>

      <motion.div 
        className={`mt-6 p-4 rounded-lg backdrop-blur-md ${currentTheme.card} text-sm font-sans`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
      >
        <p className={currentTheme.muted}>
          Pro tip: Type 'contact' or 'availability' in the terminal for quick info
        </p>
      </motion.div>
    </motion.div>
  );
};

export default ContactPage;