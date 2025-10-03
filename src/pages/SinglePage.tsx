import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import HeroSection from '@/components/home/HeroSection';
import FleetPreview from '@/components/home/FleetPreview';
import BenefitsSection from '@/components/home/BenefitsSection';
import TestimonialsSection from '@/components/home/TestimonialsSection';
import { Phone } from 'lucide-react';

// Import content from other pages to create complete sections
import FleetContent from '@/components/sections/FleetContent';
import BusinessRentalsContent from '@/components/sections/BusinessRentalsContent';
import PersonalRentalsContent from '@/components/sections/PersonalRentalsContent';
import BookingContent from '@/components/sections/BookingContent';
import AboutContent from '@/components/sections/AboutContent';
import ContactContent from '@/components/sections/ContactContent';
import FAQContent from '@/components/sections/FAQContent';
const SinglePage = () => {
  return <div className="min-h-screen flex flex-col">
      <Navbar isSinglePage={true} />

      {/* Hero Section */}
      <section id="home">
        <HeroSection />
      </section>

      {/* Fleet Section */}
      <section id="fleet">
        <FleetContent />
      </section>

      {/* Benefits Section */}
      <section id="benefits">
        <BenefitsSection />
      </section>

      {/* Business Rentals */}
      <section id="business-rentals">
        <BusinessRentalsContent />
      </section>

      {/* Personal Rentals */}
      <section id="personal-rentals">
        <PersonalRentalsContent />
      </section>

      {/* Booking Section */}
      <section id="booking">
        <BookingContent />
      </section>

      {/* About Us Section */}
      <section id="about">
        <AboutContent />
      </section>

      {/* FAQ Section */}
      <section id="faq">
        <FAQContent />
      </section>

      {/* Call to Action */}
      <section className="text-white py-16 bg-[#601112]">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Book Your Van?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Contact our friendly team today or use our online booking system to secure your van rental.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6">
            <a href="#booking" className="bg-white text-primary-maroon hover:bg-gray-100 font-semibold py-3 px-8 rounded-md transition-colors">
              Book Online
            </a>
            <a href="tel:+27783102618" className="flex items-center text-white hover:text-gray-200 font-semibold border border-white rounded-md px-3 py-2">
              <Phone className="mr-2" /> 078 310 2618
            </a>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials">
        <TestimonialsSection />
      </section>

      {/* Contact Section */}
      <section id="contact">
        <ContactContent />
      </section>

      <Footer isSinglePage={true} />
    </div>;
};
export default SinglePage;