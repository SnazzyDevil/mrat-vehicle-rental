
import { CheckCircle, Clock, Truck, CreditCard, ShieldCheck, HeartHandshake } from 'lucide-react';

const benefits = [
  {
    icon: <Truck className="h-10 w-10 text-accent-orange" />,
    title: 'Wide Range of Vans',
    description: 'Choose from our extensive fleet of well-maintained vans to meet your specific needs.'
  },
  {
    icon: <CreditCard className="h-10 w-10 text-accent-orange" />,
    title: 'Competitive Pricing',
    description: 'Get the best value for your money with our transparent and competitive rates.'
  },
  {
    icon: <Clock className="h-10 w-10 text-accent-orange" />,
    title: 'Flexible Rental Periods',
    description: 'Rent for as short as a day or as long as several months to suit your schedule.'
  },
  {
    icon: <CheckCircle className="h-10 w-10 text-accent-orange" />,
    title: 'Quality Guaranteed',
    description: 'All our vans are regularly serviced and maintained to ensure reliability.'
  },
  {
    icon: <ShieldCheck className="h-10 w-10 text-accent-orange" />,
    title: 'Comprehensive Insurance',
    description: 'Drive with peace of mind knowing you're covered by our comprehensive insurance options.'
  },
  {
    icon: <HeartHandshake className="h-10 w-10 text-accent-orange" />,
    title: 'Excellent Customer Service',
    description: 'Our friendly team is always ready to assist you with any queries or special requirements.'
  }
];

const BenefitsSection = () => {
  return (
    <section className="section-padding">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="section-title">Why Choose Apex Van Hire</h2>
          <p className="section-subtitle mx-auto">
            We strive to provide the best van rental experience with our commitment to quality, reliability, and customer satisfaction.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index} 
              className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="mb-4">{benefit.icon}</div>
              <h3 className="text-xl font-semibold text-primary-blue mb-2">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
