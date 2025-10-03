
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const vans = [{
  id: 1,
  name: 'Compact Van',
  image: 'https://www.media.mckennasrental.co.za/wp-content/uploads/2025/10/Compact-Van.jpg',
  description: 'Perfect for small deliveries and urban navigation',
  price: 'From R650/day',
  link: '/fleet?category=compact'
}, {
  id: 2,
  name: 'Medium Van',
  image: 'https://www.media.mckennasrental.co.za/wp-content/uploads/2025/10/Medium-Van.jpg',
  description: 'Ideal for medium loads and furniture moving',
  price: 'From R750/day',
  link: '/fleet?category=medium'
}, {
  id: 3,
  name: 'Large Van',
  image: 'https://www.media.mckennasrental.co.za/wp-content/uploads/2025/10/Large-Van.jpg',
  description: 'Spacious capacity for larger moves and deliveries',
  price: 'From R1050/day',
  link: '/fleet?category=large'
}];

const FleetPreview = () => {
  return (
    <section className="bg-gray-50 mx-[51px] my-0 py-[2px] px-0">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {vans.map(van => (
            <div key={van.id} className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:shadow-lg hover:-translate-y-1 duration-300">
              <div className="relative">
                <img src={van.image} alt={van.name} className="w-full h-48 object-cover" />
                <span className="absolute bottom-4 left-4 bg-primary-maroon text-white px-3 py-1 rounded text-sm font-medium">
                  {van.name.toLowerCase().split(' ')[0]}
                </span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{van.name}</h3>
                <p className="text-gray-600 mb-4">{van.description}</p>
                <p className="text-primary-maroon font-bold text-lg mb-4">{van.price}</p>
                <div className="flex gap-3">
                  <Link to={van.link} className="flex-1">
                    <Button variant="outline" className="w-full">Specifications</Button>
                  </Link>
                  <Link to="/booking" className="flex-1">
                    <Button className="w-full bg-accent-red hover:bg-accent-red/90">Book Now</Button>
                  </Link>
                </div>
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
    </section>
  );
};

export default FleetPreview;
