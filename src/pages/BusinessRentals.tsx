
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import {
  BadgeCheck,
  Building2,
  CheckCircle2,
  Calendar,
  Percent,
  FileText,
  Clock,
  ShieldCheck,
  TrendingUp
} from 'lucide-react';

// Business benefits
const benefits = [
  {
    icon: <Building2 className="h-12 w-12 text-accent-orange" />,
    title: 'Corporate Accounts',
    description: 'Set up a corporate account for streamlined booking and consolidated billing.'
  },
  {
    icon: <Percent className="h-12 w-12 text-accent-orange" />,
    title: 'Volume Discounts',
    description: 'Enjoy special rates based on frequency and volume of rentals.'
  },
  {
    icon: <FileText className="h-12 w-12 text-accent-orange" />,
    title: 'Simplified Invoicing',
    description: 'Receive detailed, organized invoices for easy accounting and tax purposes.'
  },
  {
    icon: <Clock className="h-12 w-12 text-accent-orange" />,
    title: 'Priority Service',
    description: 'Get priority booking and fast-track pickup/dropoff for business clients.'
  },
  {
    icon: <ShieldCheck className="h-12 w-12 text-accent-orange" />,
    title: 'Enhanced Insurance',
    description: 'Access to comprehensive business insurance packages.'
  },
  {
    icon: <Calendar className="h-12 w-12 text-accent-orange" />,
    title: 'Flexible Scheduling',
    description: 'Adjust your rental schedule to accommodate changing business needs.'
  }
];

// Packages
const packages = [
  {
    name: 'Business Standard',
    price: 'From R650/day',
    features: [
      'Access to all van categories',
      'Third-party liability insurance',
      'Free cancellation up to 24 hours before pickup',
      'Online booking system access',
      '24/7 roadside assistance',
      'Standard invoicing'
    ],
    popular: false
  },
  {
    name: 'Business Premium',
    price: 'From R850/day',
    features: [
      'Access to all van categories',
      'Comprehensive insurance included',
      'Free cancellation up to 12 hours before pickup',
      'Priority booking and service',
      '24/7 roadside assistance',
      'Detailed invoicing and reporting',
      '10% discount on weekly rentals',
      'Dedicated account manager'
    ],
    popular: true
  },
  {
    name: 'Business Enterprise',
    price: 'Custom Pricing',
    features: [
      'Access to all van categories',
      'Comprehensive insurance included',
      'Free cancellation at any time',
      'Priority booking and service',
      '24/7 roadside assistance',
      'Detailed invoicing and reporting',
      'Volume-based discounts on all rentals',
      'Dedicated account manager',
      'Customized rental agreements',
      'Option for branding on vehicles'
    ],
    popular: false
  }
];

const BusinessRentals = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-primary-blue to-primary-light text-white pt-28 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Business Van Rentals</h1>
            <p className="text-lg opacity-90 mb-6">
              Tailored van rental solutions to meet the unique needs of your business,
              whether you're a small startup or a large corporation.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/booking">
                <Button className="btn-accent">Book a Business Rental</Button>
              </Link>
              <Link to="/contact">
                <Button variant="outline" className="bg-transparent border-2 border-white text-white hover:bg-white hover:bg-opacity-10">
                  Contact Sales Team
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="section-title">Business Benefits</h2>
            <p className="section-subtitle mx-auto">
              We understand the unique challenges businesses face when it comes to transportation.
              That's why we offer specialized services designed specifically for our business clients.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="p-6 bg-gray-50 rounded-lg hover:shadow-lg transition-shadow"
              >
                <div className="mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-bold text-primary-blue mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Business Packages */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="section-title">Business Packages</h2>
            <p className="section-subtitle mx-auto">
              Choose the right package that suits your business needs and budget.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <div
                key={index}
                className={`bg-white rounded-lg shadow-md overflow-hidden relative ${pkg.popular ? 'ring-2 ring-accent-orange transform scale-105 md:scale-105 z-10' : ''}`}
              >
                {pkg.popular && (
                  <div className="absolute top-0 right-0">
                    <div className="bg-accent-orange text-white py-1 px-4 text-sm font-semibold transform rotate-45 translate-x-[30%] translate-y-[40%]">
                      Popular
                    </div>
                  </div>
                )}
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-primary-blue mb-2">{pkg.name}</h3>
                  <p className="text-accent-orange text-xl font-semibold mb-6">{pkg.price}</p>
                  <ul className="space-y-3 mb-8">
                    {pkg.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link to="/booking">
                    <Button className={`w-full ${pkg.popular ? 'btn-accent' : 'btn-primary'}`}>
                      Select {pkg.name}
                    </Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="section-title">How It Works</h2>
            <p className="section-subtitle mx-auto">
              Our streamlined process makes it easy for businesses to get the vans they need.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-primary-blue text-white flex items-center justify-center text-2xl font-bold mx-auto mb-4">1</div>
                <h3 className="text-xl font-bold text-primary-blue mb-2">Register</h3>
                <p className="text-gray-600">Set up a business account with us by providing your company details.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-primary-blue text-white flex items-center justify-center text-2xl font-bold mx-auto mb-4">2</div>
                <h3 className="text-xl font-bold text-primary-blue mb-2">Select</h3>
                <p className="text-gray-600">Choose the appropriate van(s) and rental duration for your needs.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-primary-blue text-white flex items-center justify-center text-2xl font-bold mx-auto mb-4">3</div>
                <h3 className="text-xl font-bold text-primary-blue mb-2">Drive</h3>
                <p className="text-gray-600">Collect your van and get on the road with our reliable vehicles.</p>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link to="/booking">
              <Button className="btn-accent">Get Started</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="section-title">Frequently Asked Questions</h2>
            <p className="section-subtitle mx-auto">
              Find answers to common questions about our business rental services.
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold text-primary-blue mb-2">Can I add multiple drivers to a business rental?</h3>
              <p className="text-gray-600">Yes, you can add multiple authorized drivers to your business rental. Each driver must meet our standard driver requirements and be approved prior to driving the vehicle.</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold text-primary-blue mb-2">Do you offer long-term business rentals?</h3>
              <p className="text-gray-600">Yes, we offer flexible rental periods including long-term options for businesses. Our Enterprise package is ideal for extended rentals, offering significant discounts for longer commitments.</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold text-primary-blue mb-2">What documentation do I need for a business rental?</h3>
              <p className="text-gray-600">For business rentals, we require company registration documents, a purchase order or company credit card, and driver's identification for all authorized drivers. Additional requirements may apply based on the rental agreement.</p>
            </div>
          </div>

          <div className="text-center mt-8">
            <Link to="/faq">
              <Button variant="link" className="text-primary-blue">
                View All FAQs
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary-blue text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <TrendingUp className="h-16 w-16 mx-auto mb-6" />
            <h2 className="text-3xl font-bold mb-4">Take Your Business Further</h2>
            <p className="text-lg mb-8">
              Join hundreds of businesses that rely on MRAT vehicle rental for their transportation needs. Our business specialists are ready to create a custom solution for you.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/booking">
                <Button className="btn-accent">Book a Van</Button>
              </Link>
              <Link to="/contact">
                <Button variant="outline" className="bg-transparent border-2 border-white text-white hover:bg-white hover:bg-opacity-10">
                  Contact Sales
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BusinessRentals;
