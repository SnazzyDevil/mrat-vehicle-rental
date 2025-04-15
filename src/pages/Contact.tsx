
import { useState } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from '@/components/ui/select';
import { Phone, Mail, MapPin, Clock, Send, ArrowRight } from 'lucide-react';
import { toast } from '@/hooks/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    submitting: false
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSelectChange = (value: string) => {
    setFormData(prev => ({
      ...prev,
      subject: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // Simple validation
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      toast({
        title: "Missing information",
        description: "Please fill in all required fields.",
        variant: "destructive"
      });
      return;
    }
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast({
        title: "Invalid email",
        description: "Please enter a valid email address.",
        variant: "destructive"
      });
      return;
    }
    
    setFormData(prev => ({ ...prev, submitting: true }));
    
    // Simulate form submission
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
        submitting: false
      });
      
      // Show success message
      toast({
        title: "Message sent!",
        description: "We'll get back to you as soon as possible.",
      });
    } catch (error) {
      toast({
        title: "Error sending message",
        description: "Please try again later or contact us directly by phone.",
        variant: "destructive"
      });
    } finally {
      setFormData(prev => ({ ...prev, submitting: false }));
    }
  };

  // Branch locations
  const branches = [
    {
      name: 'Cape Town (Head Office)',
      address: '123 Main Road, Cape Town, 8001',
      phone: '061 238 4456',
      email: 'capetown@apexvanhire.co.za',
      hours: 'Mon-Fri: 8:00 - 18:00\nSat: 8:00 - 14:00\nSun: 9:00 - 12:00'
    },
    {
      name: 'Johannesburg',
      address: '456 Oak Avenue, Sandton, 2196',
      phone: '061 238 4457',
      email: 'johannesburg@apexvanhire.co.za',
      hours: 'Mon-Fri: 8:00 - 18:00\nSat: 8:00 - 14:00\nSun: 9:00 - 12:00'
    },
    {
      name: 'Durban',
      address: '789 Beach Road, Durban, 4001',
      phone: '061 238 4458',
      email: 'durban@apexvanhire.co.za',
      hours: 'Mon-Fri: 8:00 - 18:00\nSat: 8:00 - 14:00\nSun: 9:00 - 12:00'
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <div className="bg-primary-blue text-white pt-28 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
            <p className="text-lg opacity-90">
              Get in touch with our team for any inquiries, bookings, or support needs.
              We're here to help with all your van rental requirements.
            </p>
          </div>
        </div>
      </div>
      
      {/* Main Contact Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold text-primary-blue mb-6">Send Us a Message</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Your Name <span className="text-red-500">*</span></Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Smith"
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address <span className="text-red-500">*</span></Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      required
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="061 123 4567"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject <span className="text-red-500">*</span></Label>
                    <Select value={formData.subject} onValueChange={handleSelectChange}>
                      <SelectTrigger id="subject">
                        <SelectValue placeholder="Select a subject" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="general">General Inquiry</SelectItem>
                        <SelectItem value="booking">Booking Question</SelectItem>
                        <SelectItem value="support">Customer Support</SelectItem>
                        <SelectItem value="feedback">Feedback</SelectItem>
                        <SelectItem value="business">Business Partnership</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="message">Message <span className="text-red-500">*</span></Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="How can we help you?"
                    rows={6}
                    required
                  />
                </div>
                
                <Button 
                  type="submit" 
                  className="btn-primary"
                  disabled={formData.submitting}
                >
                  {formData.submitting ? (
                    <>Sending...</>
                  ) : (
                    <>
                      Send Message <Send className="ml-2 h-4 w-4" />
                    </>
                  )}
                </Button>
              </form>
            </div>
            
            {/* Contact Info */}
            <div>
              <h2 className="text-2xl font-bold text-primary-blue mb-6">Contact Information</h2>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <Phone className="h-6 w-6 text-accent-orange mr-3 mt-1" />
                  <div>
                    <h3 className="font-semibold">Main Phone</h3>
                    <p className="text-gray-600">
                      <a href="tel:+27612384456" className="hover:text-primary-blue">061 238 4456</a>
                    </p>
                    <p className="text-sm text-gray-500">Mon-Fri: 8:00 - 18:00</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Mail className="h-6 w-6 text-accent-orange mr-3 mt-1" />
                  <div>
                    <h3 className="font-semibold">Email</h3>
                    <p className="text-gray-600">
                      <a href="mailto:info@apexvanhire.co.za" className="hover:text-primary-blue">info@apexvanhire.co.za</a>
                    </p>
                    <p className="text-sm text-gray-500">We aim to respond within 24 hours</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Clock className="h-6 w-6 text-accent-orange mr-3 mt-1" />
                  <div>
                    <h3 className="font-semibold">Business Hours</h3>
                    <p className="text-gray-600">Monday - Friday: 8:00 - 18:00</p>
                    <p className="text-gray-600">Saturday: 8:00 - 14:00</p>
                    <p className="text-gray-600">Sunday: 9:00 - 12:00</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <MapPin className="h-6 w-6 text-accent-orange mr-3 mt-1" />
                  <div>
                    <h3 className="font-semibold">Head Office</h3>
                    <p className="text-gray-600">123 Main Road</p>
                    <p className="text-gray-600">Cape Town, 8001</p>
                    <p className="text-gray-600">South Africa</p>
                  </div>
                </div>
                
                <div className="mt-8">
                  <a href="https://www.google.com/maps" target="_blank" rel="noopener noreferrer" className="text-primary-blue hover:text-primary-light flex items-center">
                    View on Google Maps <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Branches Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="section-title">Our Branches</h2>
            <p className="section-subtitle mx-auto">
              Visit us at one of our convenient locations across South Africa.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {branches.map((branch, index) => (
              <div 
                key={index} 
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all"
              >
                <h3 className="text-xl font-bold text-primary-blue mb-4">{branch.name}</h3>
                
                <div className="space-y-4">
                  <div className="flex items-start">
                    <MapPin className="h-5 w-5 text-accent-orange mr-2 mt-0.5" />
                    <p className="text-gray-600">{branch.address}</p>
                  </div>
                  
                  <div className="flex items-start">
                    <Phone className="h-5 w-5 text-accent-orange mr-2 mt-0.5" />
                    <p className="text-gray-600">
                      <a href={`tel:+27${branch.phone.replace(/\s/g, '')}`} className="hover:text-primary-blue">
                        {branch.phone}
                      </a>
                    </p>
                  </div>
                  
                  <div className="flex items-start">
                    <Mail className="h-5 w-5 text-accent-orange mr-2 mt-0.5" />
                    <p className="text-gray-600">
                      <a href={`mailto:${branch.email}`} className="hover:text-primary-blue">
                        {branch.email}
                      </a>
                    </p>
                  </div>
                  
                  <div className="flex items-start">
                    <Clock className="h-5 w-5 text-accent-orange mr-2 mt-0.5" />
                    <p className="text-gray-600 whitespace-pre-line">{branch.hours}</p>
                  </div>
                </div>
                
                <div className="mt-6">
                  <a 
                    href="https://www.google.com/maps" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="inline-flex items-center text-sm font-medium text-primary-blue hover:text-primary-light"
                  >
                    Get Directions <ArrowRight className="ml-1 h-4 w-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Map Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="section-title">Find Us</h2>
            <p className="section-subtitle mx-auto">
              Visit our head office in Cape Town or one of our branches across the country.
            </p>
          </div>
          
          <div className="h-96 bg-gray-200 rounded-lg overflow-hidden">
            {/* Placeholder for Google Maps iframe */}
            <div className="w-full h-full flex items-center justify-center bg-gray-200">
              <p className="text-gray-500">Google Maps would be embedded here</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="bg-primary-blue text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Book Your Van?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Don't wait! Secure your van rental today and ensure you have the perfect vehicle for your needs.
          </p>
          <Button 
            className="btn-accent"
            onClick={() => window.location.href = '/booking'}
          >
            Book Online Now
          </Button>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Contact;
