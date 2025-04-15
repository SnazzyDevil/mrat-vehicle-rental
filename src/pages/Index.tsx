
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import HeroSection from '@/components/home/HeroSection';
import FleetPreview from '@/components/home/FleetPreview';
import BenefitsSection from '@/components/home/BenefitsSection';
import TestimonialsSection from '@/components/home/TestimonialsSection';
import { Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <HeroSection />
      
      {/* Fleet Preview */}
      <FleetPreview />
      
      {/* Benefits Section */}
      <BenefitsSection />
      
      {/* Call to Action */}
      <section className="bg-accent-orange text-white py-16">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Book Your Van?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Contact our friendly team today or use our online booking system to secure your van rental.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6">
            <Link to="/booking" className="bg-white text-accent-orange hover:bg-gray-100 font-semibold py-3 px-8 rounded-md transition-colors">
              Book Online
            </Link>
            <a 
              href="tel:+27612384456" 
              className="flex items-center text-white hover:text-gray-200 font-semibold"
            >
              <Phone className="mr-2" /> 061 238 4456
            </a>
          </div>
        </div>
      </section>
      
      {/* Testimonials */}
      <TestimonialsSection />
      
      <Footer />
    </div>
  );
};

export default Index;
