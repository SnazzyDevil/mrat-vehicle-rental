
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

const TermsOfService = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="container mx-auto py-12 px-4 flex-grow">
        <h1 className="text-3xl md:text-4xl font-bold mb-6">Terms of Service</h1>
        
        <div className="prose max-w-none">
          <p className="mb-4">Last updated: May 9, 2025</p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">1. Acceptance of Terms</h2>
          <p className="mb-4">
            By accessing or using MRAT Vehicle Rental's services, you agree to be bound by these Terms of Service. 
            If you do not agree to these terms, please do not use our services.
          </p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">2. Rental Requirements</h2>
          <p className="mb-4">To rent a vehicle from us, you must:</p>
          <ul className="list-disc ml-6 mb-4">
            <li>Be at least 23 years of age</li>
            <li>Possess a valid driver's license for at least two years</li>
            <li>Provide a valid credit card for payment and security deposit</li>
            <li>Meet our insurance requirements</li>
          </ul>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">3. Vehicle Pickup and Return</h2>
          <p className="mb-4">
            You agree to pick up and return the vehicle at the agreed-upon times and locations. 
            Late returns may incur additional charges. The vehicle must be returned in the same 
            condition as when it was rented, except for normal wear and tear.
          </p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">4. Payment and Fees</h2>
          <p className="mb-4">
            Payment is required at the time of rental. Additional fees may apply for late returns, 
            refueling, cleaning, or damages to the vehicle. You are responsible for any traffic 
            violations or fines incurred during your rental period.
          </p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">5. Prohibited Uses</h2>
          <p className="mb-4">You agree not to use the rental vehicle for:</p>
          <ul className="list-disc ml-6 mb-4">
            <li>Illegal activities</li>
            <li>Off-road driving unless specifically authorized</li>
            <li>Carrying passengers for hire</li>
            <li>Pushing or towing other vehicles</li>
            <li>Transporting hazardous materials</li>
          </ul>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">6. Insurance and Liability</h2>
          <p className="mb-4">
            Our rental vehicles come with basic insurance coverage. You have the option to purchase 
            additional coverage. You remain liable for any damage not covered by the insurance.
          </p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">7. Cancellation Policy</h2>
          <p className="mb-4">
            Cancellations made at least 48 hours before the scheduled pickup time will receive a full refund. 
            Cancellations made within 48 hours of the scheduled pickup time may be subject to a cancellation fee.
          </p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">8. Limitation of Liability</h2>
          <p className="mb-4">
            MRAT Vehicle Rental is not liable for any indirect, incidental, or consequential damages 
            arising from the use of our services or vehicles.
          </p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">9. Modifications to Terms</h2>
          <p className="mb-4">
            We reserve the right to modify these Terms of Service at any time. 
            Updated terms will be posted on our website with the effective date.
          </p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">10. Contact Information</h2>
          <p className="mb-4">
            If you have questions about these Terms of Service, please contact us at:
          </p>
          <p className="mb-4">
            Email: info@mratvehiclerental.co.za<br />
            Phone: 078 310 2618<br />
            Address: 8 Maud road, Malvern, Durban, 4068, South Africa
          </p>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default TermsOfService;
