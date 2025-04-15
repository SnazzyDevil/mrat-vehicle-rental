import { CheckCircle, User, Box, Calendar } from 'lucide-react';
const PersonalRentalsContent = () => {
  const useCases = [{
    title: 'Moving Home',
    icon: Box,
    description: 'Save money on moving costs by renting a van and doing it yourself. Perfect for apartment or small home moves.'
  }, {
    title: 'Furniture Transport',
    icon: User,
    description: 'Transport large furniture items from stores to your home or when buying second-hand furniture online.'
  }, {
    title: 'Weekend Projects',
    icon: Calendar,
    description: 'Perfect for DIY projects, garden clearance, or taking waste to the recycling center.'
  }];
  const benefits = ['No hidden fees or charges', 'Flexible rental periods from 4 hours to multiple days', 'Comprehensive insurance options', 'Clean, well-maintained vehicles', '24/7 roadside assistance', 'Easy pick-up and drop-off process', 'Affordable security deposit options', 'All vehicles under 3 years old'];
  return <section className="section-padding bg-gray-50">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="section-title">Personal Van Rentals</h2>
          <p className="section-subtitle mx-auto">
            Affordable and convenient van rental solutions for all your personal transportation needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {useCases.map((useCase, index) => <div key={index} className="bg-white rounded-lg p-6 shadow-md card-hover">
              <div className="bg-primary-light bg-opacity-10 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4 mx-auto">
                <useCase.icon className="w-8 h-8 text-primary-blue" />
              </div>
              <h3 className="text-xl font-semibold text-center mb-3">{useCase.title}</h3>
              <p className="text-gray-600 text-center">{useCase.description}</p>
            </div>)}
        </div>

        <div className="flex flex-col md:flex-row gap-8 items-center mb-16">
          <div className="md:w-1/2">
            <img alt="Person loading a van" className="rounded-lg shadow-lg w-full h-80 object-cover" src="/lovable-uploads/b0560789-70cc-41ab-99c7-f2cb621d8e0d.jpg" />
          </div>
          
          <div className="md:w-1/2">
            <h3 className="text-2xl font-bold text-primary-blue mb-6">Why Rent With Us</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
              {benefits.map((benefit, index) => <div key={index} className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-accent-orange mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">{benefit}</span>
                </div>)}
            </div>
            
            <a href="#booking" className="btn-accent inline-block">
              Book Your Van Today
            </a>
          </div>
        </div>

        <div className="bg-white p-8 rounded-lg shadow-md">
          <h3 className="text-2xl font-bold text-primary-blue mb-4 text-center">How It Works</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
            <div className="text-center">
              <div className="bg-accent-orange rounded-full w-10 h-10 flex items-center justify-center text-white font-bold mx-auto mb-3">1</div>
              <h4 className="font-semibold mb-2">Choose Your Van</h4>
              <p className="text-gray-600 text-sm">Select the right van size for your needs</p>
            </div>
            
            <div className="text-center">
              <div className="bg-accent-orange rounded-full w-10 h-10 flex items-center justify-center text-white font-bold mx-auto mb-3">2</div>
              <h4 className="font-semibold mb-2">Pick a Date</h4>
              <p className="text-gray-600 text-sm">Select your rental period and location</p>
            </div>
            
            <div className="text-center">
              <div className="bg-accent-orange rounded-full w-10 h-10 flex items-center justify-center text-white font-bold mx-auto mb-3">3</div>
              <h4 className="font-semibold mb-2">Complete Booking</h4>
              <p className="text-gray-600 text-sm">Provide your details and confirm your booking</p>
            </div>
            
            <div className="text-center">
              <div className="bg-accent-orange rounded-full w-10 h-10 flex items-center justify-center text-white font-bold mx-auto mb-3">4</div>
              <h4 className="font-semibold mb-2">Collect & Go</h4>
              <p className="text-gray-600 text-sm">Pick up your van and you're ready to go!</p>
            </div>
          </div>
          
          <div className="text-center">
            <a href="#faq" className="text-primary-blue hover:underline font-semibold">
              Have Questions? Check our FAQ
            </a>
          </div>
        </div>
      </div>
    </section>;
};
export default PersonalRentalsContent;