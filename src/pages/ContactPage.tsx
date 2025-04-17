import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
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

const EMAIL_SERVICE_ID = 'service_gs48rp9';
const EMAIL_TEMPLATE_ID = 'template_21h7q16';
const EMAIL_PUBLIC_KEY = 'qGQxArshJNM3ldvEP';

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
      const result = await emailjs.send(
        EMAIL_SERVICE_ID,
        EMAIL_TEMPLATE_ID,
        {
          from_name: formData.name, // Map to match EmailJS template
          reply_to: formData.email, // Map to match EmailJS template
          subject: formData.subject,
          message: formData.message,
        },
        EMAIL_PUBLIC_KEY
      );

      console.log('EmailJS response:', result);

      toast({
        title: "Message Sent!",
        description: "Thank you for reaching out. I'll get back to you soon.",
        className: `${currentTheme.button} text-white`
      });

      setFormData({ name: '', email: '', subject: '', message: '' });
      setErrors({});
    } catch (error) {
      console.error('EmailJS error:', error);
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
      {/* HEADER */}
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

      {/* TERMINAL */}
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

      {/* CONTACT + FORM */}
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
            {/* Contact Info Card */}
            <Card className={`group ${currentTheme.card} transition-all duration-300 hover:shadow-xl hover:-translate-y-1`}>
              <CardHeader className="pb-2">
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="font-sans text-2xl">Contact Information</CardTitle>
                    <CardDescription className="font-mono text-xs mt-1">Nicolas ROMANINA</CardDescription>
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
                      I'm excited to connect for new projects, collaborations, or just to discuss tech. Reach out via any of these channels.
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
                      <a href="https://github.com/nicolasromanina" target="_blank" rel="noopener noreferrer"><Github className={`h-6 w-6 ${currentTheme.accent}`} /></a>
                      <a href="https://linkedin.com/in/nicolasromanina" target="_blank" rel="noopener noreferrer"><Linkedin className={`h-6 w-6 ${currentTheme.accent}`} /></a>
                      <a href="https://twitter.com/nicolasromanina" target="_blank" rel="noopener noreferrer"><Twitter className={`h-6 w-6 ${currentTheme.accent}`} /></a>
                    </div>
                    <Button className={`${currentTheme.button} flex items-center gap-2`} onClick={() => navigate('/projects')}>
                      <span>View Portfolio</span>
                    </Button>
                  </div>
                  <div className="relative h-64 overflow-hidden rounded-lg">
                    <img src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3" alt="Contact" className="object-cover w-full h-full" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Message Form */}
            <Card className={`group ${currentTheme.card} transition-all duration-300 hover:shadow-xl hover:-translate-y-1`}>
              <CardHeader className="pb-2">
                <CardTitle className="font-sans text-2xl">Send Me a Message</CardTitle>
                <CardDescription className="font-mono text-xs mt-1">I'll respond as soon as possible</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  {['name', 'email', 'subject'].map(field => (
                    <div key={field}>
                      <label htmlFor={field} className="block font-bold mb-1 text-sm capitalize">{field}</label>
                      <input
                        id={field}
                        name={field}
                        type={field === 'email' ? 'email' : 'text'}
                        value={formData[field as keyof FormData]}
                        onChange={handleChange}
                        className={`w-full p-2 rounded-md border ${currentTheme.input}`}
                        required
                      />
                      {errors[field as keyof FormData] && (
                        <p className="text-red-500 text-xs mt-1">{errors[field as keyof FormData]}</p>
                      )}
                    </div>
                  ))}
                  <div>
                    <label htmlFor="message" className="block font-bold mb-1 text-sm">Message</label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      className={`w-full p-2 rounded-md border ${currentTheme.input}`}
                      required
                    />
                    {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
                  </div>
                  <Button type="submit" disabled={isSubmitting} className={`w-full flex items-center justify-center gap-2 ${currentTheme.button}`}>
                    <Send className="w-4 h-4" />
                    <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* FOOTER TIP */}
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
