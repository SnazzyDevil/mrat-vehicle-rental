
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
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-primary-maroon mb-4">Our Fleet</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Browse our range of vans available for hire. Select a category to filter or view details of each vehicle.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {vans.map((van) => (
            <div key={van.id} className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:shadow-lg hover:-translate-y-1 duration-300">
              <div className="h-56 overflow-hidden">
                <img
                  src={van.image}
                  alt={van.name}
                  className="w-full h-full object-cover transform transition-transform hover:scale-105 duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">{van.name}</h3>
                <p className="text-gray-600 mb-4">{van.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-primary-maroon font-semibold">{van.price}</span>
                  <Link to={van.link}>
                    <Button variant="outline" className="border-primary-maroon text-primary-maroon hover:bg-primary-maroon hover:text-white">
                      View Details
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link to="/all-vehicles">
            <Button className="bg-primary-maroon hover:bg-primary-light text-white px-8 py-2 rounded-md inline-flex items-center">
              View All Vehicles <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FleetPreview;
