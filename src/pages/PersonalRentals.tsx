
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import {
  CheckCircle2,
  Star,
  RotateCcw,
  Clock,
  Phone,
  ThumbsUp,
  LifeBuoy,
  Users,
  MapPin,
  CalendarClock
} from 'lucide-react';

// Benefits
const benefits = [
  {
    icon: <Star className="h-12 w-12 text-accent-orange" />,
    title: 'Quality Guaranteed',
    description: 'All our vans are thoroughly checked and maintained to ensure reliability and safety.'
  },
  {
    icon: <RotateCcw className="h-12 w-12 text-accent-orange" />,
    title: 'Flexible Rental Periods',
    description: 'Rent for just a few hours, a day, a week, or longer - whatever suits your needs.'
  },
  {
    icon: <ThumbsUp className="h-12 w-12 text-accent-orange" />,
    title: 'Easy Booking Process',
    description: 'Book online in minutes or call our friendly team to arrange your rental.'
  },
  {
    icon: <LifeBuoy className="h-12 w-12 text-accent-orange" />,
    title: '24/7 Support',
    description: 'Our customer support team is available around the clock to assist you.'
  }
];

// Common use cases
const useCases = [
  {
    icon: <Users className="h-10 w-10 text-white" />,
    title: 'Moving Home',
    description: 'Perfect for moving apartments or houses, with enough space for furniture and belongings.'
  },
  {
    icon: <MapPin className="h-10 w-10 text-white" />,
    title: 'Road Trips',
    description: 'Ideal for weekend getaways or longer trips with family and friends.'
  },
  {
    icon: <ThumbsUp className="h-10 w-10 text-white" />,
    title: 'DIY Projects',
    description: 'Great for transporting materials and supplies for home improvement projects.'
  },
  {
    icon: <CalendarClock className="h-10 w-10 text-white" />,
    title: 'Special Events',
    description: 'Transport equipment, supplies, or decorations for weddings, parties, and events.'
  }
];

const PersonalRentals = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-primary-blue to-primary-light text-white pt-28 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Personal Van Rentals</h1>
            <p className="text-lg opacity-90 mb-6">
              Whether you're moving home, going on a road trip, or tackling a DIY project,
              our vans provide the perfect solution for your personal transportation needs.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/booking">
                <Button className="btn-accent">Book a Van Today</Button>
              </Link>
              <a href="tel:+27783102618">
                <Button variant="outline" className="bg-transparent border-2 border-white text-white hover:bg-white hover:bg-opacity-10 flex items-center gap-2">
                  <Phone className="h-4 w-4" /> 078 310 2618
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="section-title">Why Choose Us for Personal Rentals</h2>
            <p className="section-subtitle mx-auto">
              We make van rental easy, affordable, and stress-free for your personal needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow text-center"
              >
                <div className="mb-4 flex justify-center">{benefit.icon}</div>
                <h3 className="text-xl font-bold text-primary-blue mb-3">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="section-title">How It Works</h2>
            <p className="section-subtitle mx-auto">
              Renting a van for your personal needs is quick and easy with Apex Van Hire.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative md:grid md:grid-cols-4 md:gap-3">
              {/* Timeline line for desktop */}
              <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-gray-300 transform -translate-y-1/2 z-0"></div>

              {/* Step 1 */}
              <div className="relative z-10 mb-8 md:mb-0">
                <div className="w-12 h-12 rounded-full bg-primary-blue text-white flex items-center justify-center text-xl font-bold mx-auto mb-4">1</div>
                <div className="bg-white p-4 rounded-lg shadow-sm text-center">
                  <h3 className="text-lg font-bold text-primary-blue mb-2">Choose Your Van</h3>
                  <p className="text-gray-600 text-sm">Browse our range and select the perfect van for your needs.</p>
                </div>
              </div>

              {/* Step 2 */}
              <div className="relative z-10 mb-8 md:mb-0">
                <div className="w-12 h-12 rounded-full bg-primary-blue text-white flex items-center justify-center text-xl font-bold mx-auto mb-4">2</div>
                <div className="bg-white p-4 rounded-lg shadow-sm text-center">
                  <h3 className="text-lg font-bold text-primary-blue mb-2">Book Online</h3>
                  <p className="text-gray-600 text-sm">Complete the simple booking form and secure your rental.</p>
                </div>
              </div>

              {/* Step 3 */}
              <div className="relative z-10 mb-8 md:mb-0">
                <div className="w-12 h-12 rounded-full bg-primary-blue text-white flex items-center justify-center text-xl font-bold mx-auto mb-4">3</div>
                <div className="bg-white p-4 rounded-lg shadow-sm text-center">
                  <h3 className="text-lg font-bold text-primary-blue mb-2">Collect Your Van</h3>
                  <p className="text-gray-600 text-sm">Visit our location, complete paperwork, and collect your keys.</p>
                </div>
              </div>

              {/* Step 4 */}
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-full bg-primary-blue text-white flex items-center justify-center text-xl font-bold mx-auto mb-4">4</div>
                <div className="bg-white p-4 rounded-lg shadow-sm text-center">
                  <h3 className="text-lg font-bold text-primary-blue mb-2">Return</h3>
                  <p className="text-gray-600 text-sm">Return the van at the agreed time and location.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link to="/booking">
              <Button className="btn-accent">Start Your Booking</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Common Use Cases */}
      <section className="py-16 bg-primary-blue text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Popular Uses for Personal Van Rentals</h2>
            <p className="text-lg opacity-90 max-w-2xl mx-auto">
              Our vans are versatile and can be used for a variety of personal needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {useCases.map((useCase, index) => (
              <div
                key={index}
                className="p-6 bg-white bg-opacity-10 rounded-lg border border-white border-opacity-20 hover:bg-opacity-20 transition-all"
              >
                <div className="mb-4 rounded-full bg-accent-orange bg-opacity-90 p-3 w-16 h-16 flex items-center justify-center">
                  {useCase.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{useCase.title}</h3>
                <p className="opacity-90">{useCase.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/fleet">
              <Button className="bg-white text-primary-blue hover:bg-gray-100">
                Explore Our Fleet
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="section-title">What Our Customers Say</h2>
            <p className="section-subtitle mx-auto">
              Don't just take our word for it - see what our personal rental customers have to say.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center space-x-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-gray-700 mb-6">"I used Apex Van Hire for my house move and was very impressed. The booking process was simple, the van was clean and well-maintained, and the pricing was very reasonable. Highly recommend!"</p>
              <div className="flex items-center">
                <img
                  src="https://randomuser.me/api/portraits/women/44.jpg"
                  alt="Sarah Johnson"
                  className="h-12 w-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-semibold">Sarah Johnson</h4>
                  <p className="text-sm text-gray-500">House Move</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center space-x-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-gray-700 mb-6">"Rented a van for a weekend to help my daughter move to university. The process was straightforward and the staff were friendly and accommodating. Would use again without hesitation."</p>
              <div className="flex items-center">
                <img
                  src="https://randomuser.me/api/portraits/women/17.jpg"
                  alt="Emily Wilson"
                  className="h-12 w-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-semibold">Emily Wilson</h4>
                  <p className="text-sm text-gray-500">University Move</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center space-x-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-gray-700 mb-6">"Perfect van for our weekend DIY project. Plenty of space for all our materials, and the van was easy to drive. The team at Apex were super helpful with explaining everything. Great value for money!"</p>
              <div className="flex items-center">
                <img
                  src="https://randomuser.me/api/portraits/men/67.jpg"
                  alt="James Thompson"
                  className="h-12 w-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-semibold">James Thompson</h4>
                  <p className="text-sm text-gray-500">DIY Project</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="section-title">Frequently Asked Questions</h2>
            <p className="section-subtitle mx-auto">
              Common questions about our personal van rental services.
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold text-primary-blue mb-2">What documents do I need to rent a van?</h3>
              <p className="text-gray-600">You will need a valid driver's license, proof of address, and a credit or debit card for the security deposit. International customers may need additional documentation.</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold text-primary-blue mb-2">Can I add an additional driver?</h3>
              <p className="text-gray-600">Yes, additional drivers can be added to your rental agreement. They must be present at the time of pick-up with their valid driving license and will be subject to the same requirements as the main driver.</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold text-primary-blue mb-2">What happens if I return the van late?</h3>
              <p className="text-gray-600">Late returns may incur additional charges. We provide a grace period of 30 minutes, after which you will be charged for an extra day. Please contact us if you anticipate being late.</p>
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
      <section className="bg-accent-orange text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <Clock className="h-16 w-16 mx-auto mb-6" />
            <h2 className="text-3xl font-bold mb-4">Ready to Book Your Van?</h2>
            <p className="text-lg mb-8">
              Our simple booking process takes just minutes. Secure your van rental today!
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/booking">
                <Button className="bg-white text-accent-orange hover:bg-gray-100">
                  Book Online Now
                </Button>
              </Link>
              <a href="tel:+27783102618">
                <Button variant="outline" className="bg-transparent border-2 border-white text-white hover:bg-white hover:bg-opacity-10 flex items-center gap-2">
                  <Phone className="h-4 w-4" /> Call to Book
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PersonalRentals;
