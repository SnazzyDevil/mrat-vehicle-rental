
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const vans = [
  {
    id: 1,
    name: 'Compact Van',
    image: '/lovable-uploads/52a6678c-4975-40eb-9e10-d0cc68c65dd5.png',
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
    <section className="section-padding bg-gray-50">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="section-title">Our Fleet</h2>
          <p className="section-subtitle mx-auto">
            We offer a wide range of vans to suit your needs, from compact vans for small deliveries to large vans for bigger moves.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {vans.map((van) => (
            <div 
              key={van.id} 
              className="bg-white rounded-lg overflow-hidden shadow-md card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={van.image} 
                  alt={van.name} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110" 
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-primary-blue mb-2">{van.name}</h3>
                <p className="text-gray-600 mb-4">{van.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-accent-orange font-semibold">{van.price}</span>
                  <Link to={van.link}>
                    <Button variant="outline" size="sm" className="flex items-center gap-1 group">
                      View Details 
                      <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link to="/fleet">
            <Button className="btn-primary">
              View All Vehicles
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FleetPreview;
