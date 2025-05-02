
import { useState } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Search } from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

// FAQ data
const faqData = [
  {
    category: 'Booking & Reservations',
    items: [
      {
        question: "How do I make a reservation?",
        answer: "You can make a reservation through our website by using our online booking system, by calling our customer service at 078 310 2618, or by visiting one of our branch locations in person."
      },
      {
        question: "Can I modify or cancel my reservation?",
        answer: "Yes, you can modify or cancel your reservation by logging into your account on our website or by contacting our customer service team. Please note that cancellation fees may apply depending on how close to the pickup date you cancel."
      },
      {
        question: "What documents do I need to rent a van?",
        answer: "You will need a valid driver's license, proof of address, and a credit or debit card for the security deposit. International customers may need additional documentation such as a passport or international driving permit."
      },
      {
        question: "Is there a minimum rental period?",
        answer: "Our standard minimum rental period is 24 hours, but we offer flexible options including hourly rentals for certain vehicle types. Contact us for more details on short-term rentals."
      },
      {
        question: "How far in advance should I book?",
        answer: "We recommend booking at least 48 hours in advance to ensure availability, especially during peak seasons. For weekend rentals or holiday periods, earlier bookings are advisable."
      }
    ]
  },
  {
    category: 'Pricing & Payment',
    items: [
      {
        question: "What payment methods do you accept?",
        answer: "We accept all major credit cards (Visa, MasterCard, American Express), debit cards, and electronic funds transfers for advance bookings. Cash payments are only accepted at selected branches."
      },
      {
        question: "Is there a security deposit required?",
        answer: "Yes, a security deposit is required for all rentals. The amount varies depending on the vehicle category, ranging from R2,000 to R6,000. This deposit is refundable upon return of the vehicle in its original condition."
      },
      {
        question: "Are there any hidden fees I should know about?",
        answer: "We pride ourselves on transparency. Our quoted prices include standard insurance, VAT, and unlimited mileage. Additional fees may apply for extras such as GPS, additional drivers, or premium insurance options."
      },
      {
        question: "Do you offer discounts for long-term rentals?",
        answer: "Yes, we offer significant discounts for weekly and monthly rentals. The longer the rental period, the greater the discount applied to your daily rate."
      },
      {
        question: "What happens if I return the vehicle late?",
        answer: "Late returns may incur additional charges. We provide a grace period of 30 minutes, after which you will be charged for an extra day. Please contact us if you anticipate being late."
      }
    ]
  },
  {
    category: 'Vehicle Information',
    items: [
      {
        question: "What types of vans do you offer?",
        answer: "We offer a wide range of vans including small panel vans, medium cargo vans, large panel vans, box trucks, and specialty vehicles. Visit our Fleet page to see detailed specifications for each vehicle type."
      },
      {
        question: "Are your vans automatic or manual transmission?",
        answer: "We offer both automatic and manual transmission vans. Most of our compact and medium vans are manual, while our larger vans and box trucks typically come with automatic transmission. You can specify your preference during the booking process."
      },
      {
        question: "How much can I fit in the different van sizes?",
        answer: "Our small panel vans have approximately 2-3 cubic meters of space, suitable for small deliveries or moving a few items. Medium vans offer 5-6 cubic meters, ideal for apartment moves, while our large vans provide 10-15 cubic meters, perfect for house moves or business shipments."
      },
      {
        question: "Do your vans have air conditioning?",
        answer: "Yes, all our vans are equipped with air conditioning for your comfort, regardless of the season."
      },
      {
        question: "What fuel policy do you have?",
        answer: "We provide all vans with a full tank of fuel and expect them to be returned with a full tank. If the van is not returned with a full tank, a refueling fee will be charged based on current fuel prices plus a service charge."
      }
    ]
  },
  {
    category: 'Pickup & Return',
    items: [
      {
        question: "Where can I pick up and return my van?",
        answer: "You can pick up and return your van at any of our branch locations in Cape Town, Johannesburg, and Durban. We also offer delivery and collection services within certain areas for an additional fee."
      },
      {
        question: "Can I pick up at one location and return to another?",
        answer: "Yes, we offer one-way rentals between our branch locations for an additional fee. This must be arranged at the time of booking."
      },
      {
        question: "What happens during the pickup process?",
        answer: "Upon arrival, our staff will verify your documentation, process the security deposit, complete the rental agreement, and conduct a vehicle inspection with you. We'll also explain the van's features and answer any questions you might have."
      },
      {
        question: "What time can I pick up and return the van?",
        answer: "Pickups and returns can be made during our business hours: Monday to Friday from 8:00 to 17:00, Saturday from 8:00 to 17:00. We are closed on Sundays and public holidays. After-hours service may be available by prior arrangement."
      },
      {
        question: "What if I need to extend my rental period?",
        answer: "If you need to extend your rental, please contact us as soon as possible. Extensions are subject to availability and may result in rate adjustments. Unauthorized late returns may incur penalty fees."
      }
    ]
  },
  {
    category: 'Insurance & Safety',
    items: [
      {
        question: "What insurance coverage is included in the rental?",
        answer: "Standard insurance with basic collision damage waiver and third-party liability is included in all rentals. This covers damage to the van with an excess (deductible) amount that varies by vehicle type."
      },
      {
        question: "Can I purchase additional insurance coverage?",
        answer: "Yes, we offer premium insurance options that reduce or eliminate the excess amount. These can be added during the booking process or at the time of pickup."
      },
      {
        question: "What should I do if I'm involved in an accident?",
        answer: "In case of an accident, ensure everyone's safety first, then contact emergency services if necessary. Document the incident with photos and exchange information with other parties involved. Contact our emergency hotline immediately at the number provided in your rental agreement."
      },
      {
        question: "Are there any restrictions on where I can drive the van?",
        answer: "Our vans can be driven anywhere within South Africa on proper roads. Off-road driving is strictly prohibited. For international travel to neighboring countries, prior authorization is required and additional fees may apply."
      },
      {
        question: "What happens if the van breaks down?",
        answer: "All our rentals include 24/7 roadside assistance. In case of a breakdown, call the emergency number provided in your rental agreement, and we'll arrange for assistance or a replacement vehicle as quickly as possible."
      }
    ]
  }
];

const FAQ = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');

  // Filter FAQ items based on search term and active category
  const filteredFAQs = faqData.map(category => {
    const filteredItems = category.items.filter(item => {
      const matchesSearch = searchTerm === '' ||
        item.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.answer.toLowerCase().includes(searchTerm.toLowerCase());

      const matchesCategory = activeCategory === 'all' || activeCategory === category.category;

      return matchesSearch && matchesCategory;
    });

    return {
      ...category,
      items: filteredItems
    };
  }).filter(category => category.items.length > 0);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Hero Section */}
      <div className="bg-primary-blue text-white pt-28 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-bold mb-4">Frequently Asked Questions</h1>
            <p className="text-lg opacity-90">
              Find answers to common questions about our van rental services.
              If you can't find what you're looking for, feel free to contact us.
            </p>
          </div>
        </div>
      </div>

      {/* Search and Filter Section */}
      <section className="bg-white py-10 border-b">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search for questions..."
                value={searchTerm}
                onChange={handleSearch}
                className="w-full pl-10 pr-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-blue"
              />
            </div>

            <div className="flex flex-wrap gap-2 mt-6">
              <button
                onClick={() => setActiveCategory('all')}
                className={`px-4 py-2 rounded-full text-sm transition-colors ${
                  activeCategory === 'all'
                    ? 'bg-primary-blue text-white'
                    : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
                }`}
              >
                All Categories
              </button>

              {faqData.map((category, index) => (
                <button
                  key={index}
                  onClick={() => setActiveCategory(category.category)}
                  className={`px-4 py-2 rounded-full text-sm transition-colors ${
                    activeCategory === category.category
                      ? 'bg-primary-blue text-white'
                      : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
                  }`}
                >
                  {category.category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            {filteredFAQs.length === 0 ? (
              <div className="text-center py-10">
                <h3 className="text-xl font-semibold text-gray-700 mb-2">No results found</h3>
                <p className="text-gray-600">
                  Try adjusting your search or filter to find what you're looking for.
                </p>
              </div>
            ) : (
              filteredFAQs.map((category, categoryIndex) => (
                <div key={categoryIndex} className="mb-10">
                  {(activeCategory === 'all' || filteredFAQs.length > 1) && (
                    <h2 className="text-2xl font-bold text-primary-blue mb-6">{category.category}</h2>
                  )}

                  <Accordion type="single" collapsible className="space-y-4">
                    {category.items.map((item, itemIndex) => (
                      <AccordionItem
                        key={itemIndex}
                        value={`${categoryIndex}-${itemIndex}`}
                        className="bg-white border rounded-lg shadow-sm overflow-hidden"
                      >
                        <AccordionTrigger className="px-6 py-4 font-semibold text-left hover:no-underline hover:bg-gray-50">
                          {item.question}
                        </AccordionTrigger>
                        <AccordionContent className="px-6 pb-4 pt-2 text-gray-600">
                          {item.answer}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </div>
              ))
            )}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-primary-blue mb-4">Still have questions?</h2>
          <p className="text-gray-600 mb-8 max-w-xl mx-auto">
            If you couldn't find the answer you were looking for, our friendly team is here to help.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/contact">
              <Button className="btn-primary">
                Contact Us
              </Button>
            </Link>
            <a href="tel:+27783102618">
              <Button variant="outline">
                Call 078 310 2618
              </Button>
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default FAQ;
