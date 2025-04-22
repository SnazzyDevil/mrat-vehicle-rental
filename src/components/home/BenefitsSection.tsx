import { Truck, Clock, CreditCard, Smile } from 'lucide-react';
const benefits = [{
  title: "Wide Range of Vans",
  description: "Choose from our diverse fleet to find the perfect van for your specific needs.",
  icon: Truck
}, {
  title: "Quick Booking Process",
  description: "Our streamlined booking system gets you on the road faster with minimal paperwork.",
  icon: Clock
}, {
  title: "Competitive Pricing",
  description: "Enjoy affordable rates with transparent pricing and no hidden fees.",
  icon: CreditCard
}, {
  title: "Excellent Customer Service",
  description: "Our friendly team is always ready to assist you with any queries or requirements.",
  icon: Smile
}];
const BenefitsSection = () => {
  return <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-blue mb-4">Why Choose MRAT Vehicle Rental?</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We pride ourselves on providing reliable vehicles and exceptional service for all your transportation needs.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => <div key={index} className="bg-white p-6 rounded-lg shadow-md card-hover flex flex-col items-center text-center">
              <div className="bg-primary-light bg-opacity-10 p-4 rounded-full mb-4">
                <benefit.icon className="w-8 h-8 text-primary-blue" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </div>)}
        </div>
      </div>
    </section>;
};
export default BenefitsSection;