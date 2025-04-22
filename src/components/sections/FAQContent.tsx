import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
const FAQContent = () => {
  // FAQ items organized by category
  const faqItems = {
    general: [{
      question: 'What do I need to rent a van?',
      answer: 'To rent a van, you need a valid driver\'s license (held for at least one year), proof of address, ID or passport, and a credit card for the security deposit.'
    }, {
      question: 'How old do I need to be to rent a van?',
      answer: 'The minimum age requirement is 23 years old. Drivers aged 23-25 may incur a young driver surcharge.'
    }, {
      question: 'Is insurance included in the rental price?',
      answer: 'Basic insurance is included in all rentals. Additional comprehensive insurance options are available for a fee to reduce potential excess charges.'
    }, {
      question: 'Can someone else drive the van I rent?',
      answer: 'Yes, additional drivers can be added to your rental agreement for a small fee. They must meet the same eligibility criteria as the main driver.'
    }],
    booking: [{
      question: 'How far in advance should I book a van?',
      answer: 'We recommend booking at least 48 hours in advance to ensure availability, especially during peak seasons. Last-minute bookings are possible subject to availability.'
    }, {
      question: 'Can I modify or cancel my booking?',
      answer: 'Yes, bookings can be modified or canceled up to 24 hours before the rental period begins without penalty. Late cancellations may incur a charge.'
    }, {
      question: 'Is there a minimum rental period?',
      answer: 'Our minimum rental period is 4 hours for local rentals. For longer distances, a one-day minimum applies.'
    }],
    payment: [{
      question: 'What payment methods do you accept?',
      answer: 'We accept all major credit cards, debit cards, and electronic fund transfers for advance bookings. Cash payments are not accepted.'
    }, {
      question: 'How much is the security deposit?',
      answer: 'The security deposit ranges from R2,000 to R5,000 depending on the van size and rental duration. This is pre-authorized on your credit card and released after the van is returned in good condition.'
    }, {
      question: 'Are there any additional fees I should know about?',
      answer: 'Our rental prices are transparent, but additional fees may apply for: after-hours pickup/return, late returns, excessive mileage beyond the included allowance, or returning the van without refueling.'
    }],
    vehicle: [{
      question: 'Are your vans manual or automatic?',
      answer: 'Our fleet includes both manual and automatic vehicles. You can specify your preference when booking, subject to availability.'
    }, {
      question: 'What happens if the van breaks down?',
      answer: 'All our vans come with 24/7 roadside assistance. In case of a breakdown, call our emergency number and we\'ll arrange assistance or a replacement vehicle as soon as possible.'
    }, {
      question: 'Do I need to clean the van before returning it?',
      answer: 'We expect vans to be returned in a reasonably clean condition. Excessive dirt or stains may incur a cleaning fee. All vans are professionally cleaned between rentals.'
    }, {
      question: 'What is the fuel policy?',
      answer: 'Our fuel policy is "full-to-full". Vans are provided with a full tank, and you should return it with a full tank. If not, a refueling charge will apply.'
    }]
  };

  // State to track which category and question is active
  const [activeCategory, setActiveCategory] = useState('general');
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const toggleQuestion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
  return <section className="section-padding bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="section-title">Frequently Asked Questions</h2>
          <p className="section-subtitle mx-auto text-accent-orange">
            Find answers to common questions about our van rental services.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {Object.keys(faqItems).map(category => <button key={category} onClick={() => {
            setActiveCategory(category);
            setActiveIndex(null);
          }} className={`px-4 py-2 rounded-full ${activeCategory === category ? 'bg-primary-blue text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}>
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>)}
          </div>

          <div className="space-y-4">
            {faqItems[activeCategory as keyof typeof faqItems].map((item, index) => <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
                <button onClick={() => toggleQuestion(index)} className="flex justify-between items-center w-full p-4 text-left bg-gray-50 hover:bg-gray-100">
                  <span className="font-medium text-primary-blue">{item.question}</span>
                  {activeIndex === index ? <ChevronUp className="h-5 w-5 text-primary-blue" /> : <ChevronDown className="h-5 w-5 text-primary-blue" />}
                </button>
                {activeIndex === index && <div className="p-4 bg-white">
                    <p className="text-gray-700">{item.answer}</p>
                  </div>}
              </div>)}
          </div>

          <div className="mt-12 text-center">
            <p className="mb-4">Still have questions? Contact our customer support team.</p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
              <a href="#contact" className="btn-primary">
                Contact Us
              </a>
              <a href="tel:+27612384456" className="flex items-center gap-2 border border-primary-blue text-primary-blue hover:bg-primary-blue hover:bg-opacity-5 font-semibold py-2 px-6 rounded-md transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
                061 238 4456
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default FAQContent;