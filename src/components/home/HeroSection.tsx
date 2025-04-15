
import { Link } from 'react-router-dom';
import BookingWidget from '@/components/ui/BookingWidget';

const HeroSection = () => {
  return (
    <div className="relative bg-gradient-to-r from-gray-900 to-primary-blue pt-20">
      <div className="container mx-auto pt-10 pb-20 md:pt-16 md:pb-32 px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="text-white animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
              Reliable Van Rental at Competitive Rates
            </h1>
            <p className="text-lg md:text-xl opacity-90 mb-8 max-w-lg">
              From business deliveries to personal moves, our fleet of well-maintained vans is ready to meet your needs.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/fleet" className="btn-accent">
                View Our Fleet
              </Link>
              <Link to="/contact" className="bg-transparent border-2 border-white text-white hover:bg-white hover:bg-opacity-10 font-semibold py-3 px-6 rounded-md transition-all duration-300">
                Contact Us
              </Link>
            </div>
          </div>
          
          <div className="animate-fade-up">
            <BookingWidget className="lg:ml-auto lg:max-w-md" />
          </div>
        </div>
      </div>
      
      {/* Overlay with transparent gradient */}
      <div 
        className="absolute inset-0 z-0 opacity-20" 
        style={{ 
          backgroundImage: "url('https://images.unsplash.com/photo-1532408840957-031d8034aca9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center"
        }} 
      />
    </div>
  );
};

export default HeroSection;
