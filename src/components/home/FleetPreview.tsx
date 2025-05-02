
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const vans = [{
  id: 1,
  name: 'Compact Van',
  image: '/lovable-uploads/7fe5b0cd-6a7a-4f14-bfc9-78a6364e16da.png',
  description: 'Perfect for small deliveries and urban navigation',
  price: 'From R650/day',
  link: '/fleet?category=compact'
}, {
  id: 2,
  name: 'Medium Van',
  image: '/lovable-uploads/b3856f74-747f-4752-8887-fa3840e7029c.png',
  description: 'Ideal for medium loads and furniture moving',
  price: 'From R850/day',
  link: '/fleet?category=medium'
}, {
  id: 3,
  name: 'Large Van',
  image: 'https://mrat.creativortexstudio.co.za/wp-content/uploads/2025/05/Quantum-Panelvan.png',
  description: 'Spacious capacity for larger moves and deliveries',
  price: 'From R1050/day',
  link: '/fleet?category=large'
}];

const FleetPreview = () => {
  return <section className="py-16 bg-gray-50">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {vans.map(van => (
            <div key={van.id} className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:shadow-lg hover:-translate-y-1 duration-300">
              <div className="h-48 overflow-hidden">
                <img 
                  src={van.image} 
                  alt={van.name}
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="p-4">
                <h3 className="text-xl font-bold mb-2">{van.name}</h3>
                <p className="text-gray-600 mb-3">{van.description}</p>
                <p className="font-semibold text-primary-maroon mb-4">{van.price}</p>
                <Link to={van.link} className="inline-block">
                  <Button variant="outline" className="border-primary-maroon text-primary-maroon hover:bg-primary-maroon hover:text-white">
                    View Details
                  </Button>
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link to="/all-vehicles">
            <Button className="bg-primary-maroon hover:bg-primary-light text-white py-2 rounded-md inline-flex items-center mx-0 my-0 px-[14px]">
              View All Vehicles <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </div>
    </section>;
};

export default FleetPreview;
