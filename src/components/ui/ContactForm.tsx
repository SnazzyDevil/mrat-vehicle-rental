import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { toast } from '@/hooks/use-toast';
import { Mail } from 'lucide-react';
const ContactForm = ({
  className = ""
}) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    submitting: false
  });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const {
      name,
      value
    } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Missing information",
        description: "Please fill in all required fields.",
        variant: "destructive"
      });
      return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast({
        title: "Invalid email",
        description: "Please enter a valid email address.",
        variant: "destructive"
      });
      return;
    }
    setFormData(prev => ({
      ...prev,
      submitting: true
    }));
    try {
      await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate API call
      toast({
        title: "Message sent!",
        description: "We'll get back to you as soon as possible."
      });
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: '',
        submitting: false
      });
    } catch (error) {
      toast({
        title: "Error sending message",
        description: "Please try again later.",
        variant: "destructive"
      });
    } finally {
      setFormData(prev => ({
        ...prev,
        submitting: false
      }));
    }
  };
  return <div className={`bg-white rounded-lg shadow-lg p-6 ${className}`}>
      <h2 className="text-xl font-bold text-primary-blue mb-4">Contact Us</h2>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name *</label>
          <Input type="text" id="name" name="name" value={formData.name} onChange={handleChange} placeholder="Your name" required />
        </div>
        
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email *</label>
          <Input type="email" id="email" name="email" value={formData.email} onChange={handleChange} placeholder="your@email.com" required />
        </div>
        
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone (optional)</label>
          <Input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} placeholder="Your phone number" />
        </div>
        
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message *</label>
          <Textarea id="message" name="message" value={formData.message} onChange={handleChange} placeholder="How can we help you?" rows={4} required />
        </div>
        
        <Button type="submit" disabled={formData.submitting} className="w-full text-[601112]">
          <Mail className="mr-2 h-4 w-4" />
          {formData.submitting ? 'Sending...' : 'Send Message'}
        </Button>
      </form>
    </div>;
};
export default ContactForm;