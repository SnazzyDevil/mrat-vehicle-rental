import { CheckCircle } from 'lucide-react';
const BusinessRentalsContent = () => {
  const benefits = ['Flexible contract lengths to suit your business needs', 'Reduced rates for longer rental periods', 'Dedicated account manager for your business', 'Customized invoicing and payment terms', 'Priority booking and vehicle availability', 'Vehicle branding opportunities', 'Scheduled maintenance to minimize disruption', 'Optional driver provision for busy periods'];
  const packages = [{
    name: 'Daily Business',
    description: 'Ideal for occasional use and short-term projects',
    features: ['Flexible vehicle selection', 'Same-day booking (subject to availability)', 'No long-term commitment', 'Business insurance included'],
    price: 'From R650/day'
  }, {
    name: 'Weekly Business',
    description: 'Perfect for medium-term projects and regular deliveries',
    features: ['Discounted weekly rates', 'Free additional driver', 'Extended mileage allowance', 'Business insurance included', 'Priority customer support'],
    price: 'From R3,500/week'
  }, {
    name: 'Monthly Business',
    description: 'The economical choice for ongoing business transportation needs',
    features: ['Significantly discounted monthly rates', 'Unlimited mileage', 'Free vehicle replacement in case of breakdown', 'Multiple driver options', 'Dedicated account manager', 'Flexible payment terms'],
    price: 'From R12,000/month'
  }];
  return <section className="section-padding bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="section-title text-[#601112]">Business Vehicle Rentals</h2>
          <p className="section-subtitle mx-auto">
            Reliable and cost-effective transportation solutions for your business logistics and delivery needs.
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-8 mb-16">
          <div className="md:w-1/2">
            <h3 className="text-2xl font-bold text-primary-blue mb-4">How It Works</h3>
            <div className="bg-gray-50 p-6 rounded-lg mb-6">
              <ol className="list-decimal list-inside space-y-3 text-gray-700">
                <li><span className="font-medium">Contact our business team</span> to discuss your specific requirements</li>
                <li><span className="font-medium">Receive a customized quote</span> tailored to your business needs</li>
                <li><span className="font-medium">Complete the simple paperwork</span> and business verification process</li>
                <li><span className="font-medium">Schedule your van rentals</span> according to your operational timeline</li>
                <li><span className="font-medium">Enjoy priority support</span> throughout your rental period</li>
              </ol>
            </div>
            <p className="text-gray-600">
              Our business rental process is designed to be straightforward and flexible, allowing you to focus on running your business while we handle your transportation needs.
            </p>
          </div>

          <div className="md:w-1/2">
            <h3 className="text-2xl font-bold text-primary-blue mb-4">Business Benefits</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {benefits.map((benefit, index) => <div key={index} className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-accent-orange mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">{benefit}</span>
                </div>)}
            </div>
          </div>
        </div>

        <h3 className="text-2xl font-bold text-primary-blue mb-6 text-center">Business Rental Packages</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {packages.map((pkg, index) => <div key={index} className="bg-gray-50 rounded-lg overflow-hidden shadow-md border border-gray-100">
              <div className="text-white p-4 text-center bg-[#601112]">
                <h4 className="text-xl font-bold">{pkg.name}</h4>
              </div>
              <div className="p-6">
                <p className="text-gray-600 mb-4">{pkg.description}</p>
                <div className="mb-4">
                  <h5 className="font-semibold text-gray-800 mb-2">Features:</h5>
                  <ul className="space-y-2">
                    {pkg.features.map((feature, i) => <li key={i} className="flex items-start">
                        <CheckCircle className="h-4 w-4 text-accent-orange mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700 text-sm">{feature}</span>
                      </li>)}
                  </ul>
                </div>
                <div className="text-center mt-6">
                  <p className="text-accent-orange font-bold text-xl mb-3">{pkg.price}</p>
                  <a href="#booking" className="btn-accent inline-block text-sm py-2 px-4">
                    Request Quote
                  </a>
                </div>
              </div>
            </div>)}
        </div>

        <div className="text-center mt-8">
          <p className="mb-6">Looking for a customized solution for your business?</p>
          <a href="#contact" className="btn-primary">
            Contact Our Business Team
          </a>
        </div>
      </div>
    </section>;
};
export default BusinessRentalsContent;