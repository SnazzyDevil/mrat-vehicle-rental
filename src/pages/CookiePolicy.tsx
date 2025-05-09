
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

const CookiePolicy = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="container mx-auto py-12 px-4 flex-grow">
        <h1 className="text-3xl md:text-4xl font-bold mb-6">Cookie Policy</h1>
        
        <div className="prose max-w-none">
          <p className="mb-4">Last updated: May 9, 2025</p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">1. What Are Cookies</h2>
          <p className="mb-4">
            Cookies are small text files that are stored on your computer or mobile device when you visit a website. 
            They are widely used to make websites work more efficiently and provide information to the website owners.
          </p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">2. How We Use Cookies</h2>
          <p className="mb-4">We use cookies for various purposes, including:</p>
          <ul className="list-disc ml-6 mb-4">
            <li>Essential cookies: These are necessary for the website to function properly</li>
            <li>Preference cookies: These remember your preferences for a better user experience</li>
            <li>Analytics cookies: These help us understand how visitors interact with our website</li>
            <li>Marketing cookies: These track your online activity to help us deliver relevant advertisements</li>
          </ul>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">3. Types of Cookies We Use</h2>
          <p className="mb-4">
            <strong>Session Cookies:</strong> These temporary cookies expire when you close your browser.<br />
            <strong>Persistent Cookies:</strong> These remain on your device until they expire or you delete them.<br />
            <strong>First-party Cookies:</strong> Set by our website.<br />
            <strong>Third-party Cookies:</strong> Set by our partners and service providers.
          </p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">4. Managing Cookies</h2>
          <p className="mb-4">
            Most web browsers allow you to control cookies through their settings. 
            You can typically delete existing cookies, block certain types of cookies, 
            or set your browser to notify you when cookies are being set.
          </p>
          <p className="mb-4">
            Please note that restricting cookies may impact your experience on our website and limit the functionality of certain features.
          </p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">5. Specific Cookies We Use</h2>
          <p className="mb-4">
            <strong>Essential cookies:</strong> Used for user authentication and security purposes.<br />
            <strong>Analytics cookies:</strong> We use Google Analytics to understand how visitors interact with our website.<br />
            <strong>Social media cookies:</strong> Allow you to share content on social media platforms.
          </p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">6. Updates to This Policy</h2>
          <p className="mb-4">
            We may update this Cookie Policy from time to time. The updated version will be indicated by an updated 
            "Last updated" date at the top of this page.
          </p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">7. Contact Us</h2>
          <p className="mb-4">
            If you have questions about our Cookie Policy, please contact us at:
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

export default CookiePolicy;
