
import ContactForm from '@/components/ui/ContactForm';

const BookingContent = () => {
  return (
    <section className="section-padding bg-gradient-to-r from-gray-900 to-primary-blue">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Get in Touch</h2>
          <p className="text-lg text-gray-200 max-w-3xl mx-auto">
            Have any questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
        </div>

        <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-xl overflow-hidden">
          <ContactForm className="w-full" />
        </div>

        <div className="mt-12 text-center text-white">
          <h3 className="text-xl font-semibold mb-4">Need Immediate Assistance?</h3>
          <p className="mb-6">
            Our customer service team is available to assist you with any questions or special requirements.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <a href="tel:+27612384456" className="flex items-center gap-2 bg-white text-primary-blue hover:bg-gray-100 font-semibold py-2 px-6 rounded-md transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
              </svg>
              Call Us: 061 238 4456
            </a>
            <a href="#contact" className="flex items-center gap-2 border border-white text-white hover:bg-white hover:bg-opacity-10 font-semibold py-2 px-6 rounded-md transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                <polyline points="22,6 12,13 2,6"></polyline>
              </svg>
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookingContent;
