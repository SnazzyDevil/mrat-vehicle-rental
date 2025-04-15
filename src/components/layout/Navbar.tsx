import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const toggleDropdown = (dropdown: string) => {
    if (openDropdown === dropdown) {
      setOpenDropdown(null);
    } else {
      setOpenDropdown(dropdown);
    }
  };
  const navItems = [{
    title: 'Home',
    path: '/'
  }, {
    title: 'Our Fleet',
    path: '/fleet'
  }, {
    title: 'Services',
    dropdown: true,
    items: [{
      title: 'Business Rentals',
      path: '/business-rentals'
    }, {
      title: 'Personal Rentals',
      path: '/personal-rentals'
    }]
  }, {
    title: 'Booking',
    path: '/booking'
  }, {
    title: 'About Us',
    path: '/about'
  }, {
    title: 'FAQ',
    path: '/faq'
  }, {
    title: 'Contact Us',
    path: '/contact'
  }];
  return <nav className={`fixed top-0 w-full z-50 ${isScrolled ? 'bg-white shadow-md' : 'bg-transparent'} transition-all duration-300`}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center">
              <span className="text-2xl font-bold text-primary-blue">APEX</span>
              <span className="ml-1 text-xl text-accent-orange font-semibold">VAN HIRE</span>
            </Link>
          </div>
          
          {/* Desktop navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map(item => item.dropdown ? <div key={item.title} className="relative group">
                  <button onClick={() => toggleDropdown(item.title)} className="px-3 py-2 flex items-center text-gray-700 hover:text-primary-blue">
                    {item.title}
                    <ChevronDown className="ml-1 h-4 w-4" />
                  </button>
                  {openDropdown === item.title && <div className="absolute mt-1 w-48 bg-white border border-gray-200 rounded-md shadow-lg z-20">
                      {item.items?.map(dropdownItem => <Link key={dropdownItem.title} to={dropdownItem.path} className="block px-4 py-2 text-gray-700 hover:bg-gray-100" onClick={() => setOpenDropdown(null)}>
                          {dropdownItem.title}
                        </Link>)}
                    </div>}
                </div> : <Link key={item.title} to={item.path} className="px-3 py-2 text-white-700 hover:text-primary-blue">
                  {item.title}
                </Link>)}
          </div>
          
          <div className="hidden md:flex">
            <Link to="/booking">
              <Button className="btn-accent">Book Now</Button>
            </Link>
          </div>
          
          {/* Mobile menu button */}
          <div className="flex md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="p-2 text-gray-700 rounded-md outline-none">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
        
        {/* Mobile Menu */}
        {isOpen && <div className="md:hidden bg-white shadow-lg absolute top-20 left-0 right-0 z-50 animate-fade-in">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navItems.map(item => item.dropdown ? <div key={item.title}>
                    <button onClick={() => toggleDropdown(item.title)} className="block w-full text-left px-3 py-2 text-base font-medium text-gray-700 hover:text-primary-blue hover:bg-gray-50 rounded-md">
                      <div className="flex items-center justify-between">
                        {item.title}
                        <ChevronDown className={`ml-1 h-4 w-4 transition-transform ${openDropdown === item.title ? 'rotate-180' : ''}`} />
                      </div>
                    </button>
                    {openDropdown === item.title && <div className="pl-4 space-y-1">
                        {item.items?.map(dropdownItem => <Link key={dropdownItem.title} to={dropdownItem.path} className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-primary-blue hover:bg-gray-50 rounded-md" onClick={() => setIsOpen(false)}>
                            {dropdownItem.title}
                          </Link>)}
                      </div>}
                  </div> : <Link key={item.title} to={item.path} className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-primary-blue hover:bg-gray-50 rounded-md" onClick={() => setIsOpen(false)}>
                    {item.title}
                  </Link>)}
              <div className="pt-4">
                <Link to="/booking" className="block w-full text-center btn-accent" onClick={() => setIsOpen(false)}>
                  Book Now
                </Link>
              </div>
            </div>
          </div>}
      </div>
    </nav>;
};
export default Navbar;