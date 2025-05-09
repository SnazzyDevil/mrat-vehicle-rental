
import { Link } from 'react-router-dom';
const HeroSection = () => {
  return <div className="bg-[#601112]">
      <div className="container mx-auto pt-10 pb-20 md:pt-16 md:pb-32 px-4 md:px-6 relative z-10 bg-[601112] bg-[#601112] py-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="text-white animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">Reliable Vehicle Rental at Competitive Rates</h1>
            <p className="text-lg md:text-xl opacity-90 mb-8 max-w-lg">
              From business deliveries to personal moves, our fleet of well-maintained vans is ready to meet your needs.
            </p>
            <div className="flex flex-wrap gap-4">
              
              <Link to="/all-vehicles" className="bg-transparent border-2 border-white text-white hover:bg-white hover:bg-opacity-10 font-semibold py-3 px-6 rounded-md transition-all duration-300">
                View All Vehicles
              </Link>
            </div>
          </div>
          
          <div className="animate-fade-up mx-px my-[32px]">
            <img src="/lovable-uploads/7ae40599-533f-4d80-b460-97e4c0674bdf.png" alt="MRAT Vehicle Rental Van" className="w-full h-auto object-contain rounded-lg shadow-lg" />
          </div>
        </div>
      </div>
      
      {/* Overlay with transparent gradient */}
      <div style={{
      backgroundImage: "url('https://images.unsplash.com/photo-1532408840957-031d8034aca9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80')",
      backgroundSize: "cover",
      backgroundPosition: "center"
    }} className="bg-[#601112]" />
    </div>;
};
export default HeroSection;
