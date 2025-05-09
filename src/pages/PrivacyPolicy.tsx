
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="container mx-auto py-12 px-4 flex-grow">
        <h1 className="text-3xl md:text-4xl font-bold mb-6">Privacy Policy</h1>
        
        <div className="prose max-w-none">
          <p className="mb-4">Last updated: May 9, 2025</p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">1. Introduction</h2>
          <p className="mb-4">
            At MRAT Vehicle Rental, we take your privacy seriously. This Privacy Policy explains how we collect, use, 
            disclose, and safeguard your information when you visit our website or use our vehicle rental services.
          </p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">2. Information We Collect</h2>
          <p className="mb-4">We may collect personal information that you provide to us, including but not limited to:</p>
          <ul className="list-disc ml-6 mb-4">
            <li>Personal information (name, address, email address, phone number)</li>
            <li>Payment information</li>
            <li>Driver's license details</li>
            <li>Vehicle preferences and rental history</li>
            <li>Information provided in communication with us</li>
          </ul>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">3. How We Use Your Information</h2>
          <p className="mb-4">We may use the information we collect for various purposes, including:</p>
          <ul className="list-disc ml-6 mb-4">
            <li>To process and manage vehicle rentals</li>
            <li>To communicate with you about your rentals</li>
            <li>To improve our services and website</li>
            <li>To send promotional materials with your consent</li>
            <li>For legal and administrative purposes</li>
          </ul>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">4. Information Sharing</h2>
          <p className="mb-4">
            We do not sell or rent your personal information to third parties. We may share your information in 
            limited circumstances, such as with service providers who assist in our business operations, when 
            required by law, or with your consent.
          </p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">5. Data Security</h2>
          <p className="mb-4">
            We implement appropriate security measures to protect your personal information. However, no method of 
            transmission over the Internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
          </p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">6. Your Rights</h2>
          <p className="mb-4">
            Depending on your location, you may have certain rights regarding your personal information, 
            including the right to access, correct, delete, or restrict processing of your data.
          </p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">7. Changes to This Policy</h2>
          <p className="mb-4">
            We may update this Privacy Policy from time to time. The updated version will be indicated by an 
            updated "Last updated" date at the top of this page.
          </p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">8. Contact Us</h2>
          <p className="mb-4">
            If you have questions about this Privacy Policy, please contact us at:
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

export default PrivacyPolicy;
