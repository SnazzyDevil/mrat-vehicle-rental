
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const vans = [
  {
    id: 1,
    name: 'Compact Van',
    image: '/lovable-uploads/7fe5b0cd-6a7a-4f14-bfc9-78a6364e16da.png',
    description: 'Perfect for small deliveries and urban navigation',
    price: 'From R650/day',
    link: '/fleet?category=compact'
  },
  {
    id: 2,
    name: 'Medium Van',
    image: '/lovable-uploads/b3856f74-747f-4752-8887-fa3840e7029c.png',
    description: 'Ideal for medium loads and furniture moving',
    price: 'From R850/day',
    link: '/fleet?category=medium'
  },
  {
    id: 3,
    name: 'Large Van',
    image: '/lovable-uploads/f46d667c-ad10-48de-9ba7-d76ba328e15b.png',
    description: 'Spacious capacity for larger moves and deliveries',
    price: 'From R1050/day',
    link: '/fleet?category=large'
  }
];

const FleetPreview = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-maroon mb-4">Our Fleet</h2>
          <p className="text-lg text-gray-600 mb-8 max-w-3xl mx-auto">
            We offer a variety of well-maintained vehicles to suit your needs, from compact vans for small deliveries to larger options for moving home.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {vans.map((van) => (
            <div key={van.id} className="bg-white rounded-lg shadow-md overflow-hidden card-hover">
              <div className="h-48 overflow-hidden">
                <img 
                  src={van.image} 
                  alt={van.name} 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-primary-maroon">{van.name}</h3>
                <p className="text-gray-600 mb-4">{van.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-accent-maroon font-bold">{van.price}</span>
                  <Link to={van.link} className="text-primary-maroon hover:text-primary-light flex items-center">
                    Details <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link to="/fleet">
            <Button variant="outline" className="border-primary-maroon text-primary-maroon hover:bg-primary-maroon hover:text-white">
              View All Vehicles <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FleetPreview;
