import { Phone, Mail, MapPin, Facebook, Instagram, Twitter, Clock } from 'lucide-react';
interface FooterProps {
  isSinglePage?: boolean;
}
const Footer = ({
  isSinglePage = false
}: FooterProps) => {
  const LinkComponent = ({
    path,
    children,
    className
  }: {
    path: string;
    children: React.ReactNode;
    className?: string;
  }) => {
    if (isSinglePage && path.startsWith('/')) {
      // Convert route paths to anchor links
      const anchor = path.replace('/', '#');
      return <a href={anchor} className={className}>{children}</a>;
    } else {
      return <a href={path} className={className}>{children}</a>;
    }
  };
  return <footer className="text-white pt-12 pb-6 bg-[#18100f]">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <LinkComponent path={isSinglePage ? '#home' : '/'} className="flex items-center mb-4">
              <span className="text-2xl font-bold text-white">MRAT</span>
              <span className="ml-1 text-xl text-accent-orange font-semibold">VEHICLE RENTAL</span>
            </LinkComponent>
            <p className="text-gray-400 mb-4">
              Your trusted partner for reliable and affordable van rentals. Whether for business or personal use, we've got the right vehicle for your needs.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <LinkComponent path={isSinglePage ? '#fleet' : '/fleet'} className="text-gray-400 hover:text-white transition-colors">Our Fleet</LinkComponent>
              </li>
              <li>
                <LinkComponent path={isSinglePage ? '#business-rentals' : '/business-rentals'} className="text-gray-400 hover:text-white transition-colors">Business Rentals</LinkComponent>
              </li>
              <li>
                <LinkComponent path={isSinglePage ? '#personal-rentals' : '/personal-rentals'} className="text-gray-400 hover:text-white transition-colors">Personal Rentals</LinkComponent>
              </li>
              <li>
                <LinkComponent path={isSinglePage ? '#booking' : '/booking'} className="text-gray-400 hover:text-white transition-colors">Book Online</LinkComponent>
              </li>
              <li>
                <LinkComponent path={isSinglePage ? '#about' : '/about'} className="text-gray-400 hover:text-white transition-colors">About Us</LinkComponent>
              </li>
              <li>
                <LinkComponent path={isSinglePage ? '#faq' : '/faq'} className="text-gray-400 hover:text-white transition-colors">FAQ</LinkComponent>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Phone className="h-5 w-5 mr-2 mt-1 text-accent-orange" />
                <span className="text-gray-400">
                  <a href="tel:+27612384456" className="hover:text-white transition-colors">061 238 4456</a>
                </span>
              </li>
              <li className="flex items-start">
                <Mail className="h-5 w-5 mr-2 mt-1 text-accent-orange" />
                <span className="text-gray-400">
                  <a href="mailto:info@apexvanhire.co.za" className="hover:text-white transition-colors">info@apexvanhire.co.za</a>
                </span>
              </li>
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-2 mt-1 text-accent-orange" />
                <span className="text-gray-400">123 Main Street<br />Cape Town, 8001<br />South Africa</span>
              </li>
              <li className="flex items-start">
                <Clock className="h-5 w-5 mr-2 mt-1 text-accent-orange" />
                <div className="text-gray-400">
                  <p>Mon-Fri: 8:00 - 18:00</p>
                  <p>Sat: 8:00 - 14:00</p>
                  <p>Sun: 9:00 - 12:00</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
            <p className="text-gray-400 mb-4">Subscribe to our newsletter for exclusive deals and updates.</p>
            <form className="space-y-2">
              <input type="email" placeholder="Your email address" className="w-full px-4 py-2 rounded bg-gray-800 border border-gray-700 text-white focus:outline-none focus:border-accent-orange" required />
              <button type="submit" className="w-full bg-accent-orange hover:bg-orange-600 text-white py-2 px-4 rounded transition-colors">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <hr className="border-gray-800 my-6" />

        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Apex Van Hire. All rights reserved.
          </p>
          <div className="flex space-x-4 text-sm text-gray-400">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>;
};
export default Footer;