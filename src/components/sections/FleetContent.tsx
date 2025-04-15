import { useState } from 'react';
import { Button } from '@/components/ui/button';
const categories = ['all', 'compact', 'medium', 'large'];
const vans = [{
  id: 1,
  name: 'Compact Van',
  image: '/lovable-uploads/52a6678c-4975-40eb-9e10-d0cc68c65dd5.png',
  description: 'Perfect for small deliveries and urban navigation. Ideal for small moves and deliveries in tight urban spaces.',
  price: 'From R650/day',
  category: 'compact',
  specs: {
    loadSpace: '3.6 cubic meters',
    maxLoad: '800kg',
    dimensions: '4.2m x 1.8m x 1.9m',
    fuelType: 'Diesel',
    transmission: 'Manual'
  }
}, {
  id: 2,
  name: 'Medium Van',
  image: '/lovable-uploads/b3856f74-747f-4752-8887-fa3840e7029c.png',
  description: 'Ideal for medium loads and furniture moving. Perfect balance of space and maneuverability.',
  price: 'From R850/day',
  category: 'medium',
  specs: {
    loadSpace: '6.5 cubic meters',
    maxLoad: '1200kg',
    dimensions: '5.4m x 2.0m x 2.1m',
    fuelType: 'Diesel',
    transmission: 'Manual'
  }
}, {
  id: 3,
  name: 'Large Van',
  image: '/lovable-uploads/f46d667c-ad10-48de-9ba7-d76ba328e15b.png',
  description: 'Spacious capacity for larger moves and deliveries. Ideal for moving home or large office relocations.',
  price: 'From R1050/day',
  category: 'large',
  specs: {
    loadSpace: '11.3 cubic meters',
    maxLoad: '1500kg',
    dimensions: '6.9m x 2.2m x 2.4m',
    fuelType: 'Diesel',
    transmission: 'Automatic'
  }
}, {
  id: 4,
  name: 'Small City Van',
  image: '/lovable-uploads/52a6678c-4975-40eb-9e10-d0cc68c65dd5.png',
  description: 'Compact and fuel-efficient for city deliveries. Easy to park and navigate through busy streets.',
  price: 'From R550/day',
  category: 'compact',
  specs: {
    loadSpace: '2.5 cubic meters',
    maxLoad: '650kg',
    dimensions: '4.0m x 1.7m x 1.8m',
    fuelType: 'Petrol',
    transmission: 'Manual'
  }
}, {
  id: 5,
  name: 'Moving Van Plus',
  image: '/lovable-uploads/b3856f74-747f-4752-8887-fa3840e7029c.png',
  description: 'Enhanced medium van with extra features for comfortable longer journeys.',
  price: 'From R950/day',
  category: 'medium',
  specs: {
    loadSpace: '7.2 cubic meters',
    maxLoad: '1300kg',
    dimensions: '5.5m x 2.1m x 2.2m',
    fuelType: 'Diesel',
    transmission: 'Manual'
  }
}, {
  id: 6,
  name: 'Extra Large Mover',
  image: '/lovable-uploads/f46d667c-ad10-48de-9ba7-d76ba328e15b.png',
  description: 'Our largest van with maximum capacity for big moves and commercial use.',
  price: 'From R1250/day',
  category: 'large',
  specs: {
    loadSpace: '13.5 cubic meters',
    maxLoad: '1800kg',
    dimensions: '7.2m x 2.3m x 2.5m',
    fuelType: 'Diesel',
    transmission: 'Automatic'
  }
}];
const FleetContent = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedVan, setSelectedVan] = useState<number | null>(null);
  const filteredVans = activeCategory === 'all' ? vans : vans.filter(van => van.category === activeCategory);
  return <section className="py-12 bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-8">
          
          <p className="section-subtitle mx-auto">
            Find the perfect van for your needs, whether you're moving house, delivering goods, or transporting equipment.
          </p>
        </div>

        <div className="flex justify-center flex-wrap gap-2 mb-8">
          {categories.map(category => <button key={category} onClick={() => setActiveCategory(category)} className={`px-4 py-2 rounded-md ${activeCategory === category ? 'bg-primary-blue text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}>
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>)}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredVans.map(van => <div key={van.id} className="bg-white rounded-lg overflow-hidden shadow-md card-hover">
              <div className="h-48 overflow-hidden">
                <img src={van.image} alt={van.name} className="w-full h-full object-cover transition-transform duration-500 hover:scale-110" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-primary-blue mb-2">{van.name}</h3>
                <p className="text-gray-600 mb-4">{van.description}</p>
                <div className="mb-4">
                  <span className="text-accent-orange font-semibold">{van.price}</span>
                </div>
                <div className="flex flex-col space-y-2 mb-4">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Load Space:</span>
                    <span className="font-semibold">{van.specs.loadSpace}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Max Load:</span>
                    <span className="font-semibold">{van.specs.maxLoad}</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <button onClick={() => setSelectedVan(selectedVan === van.id ? null : van.id)} className="text-primary-blue hover:underline">
                    {selectedVan === van.id ? 'Hide Details' : 'View Details'}
                  </button>
                  <a href="#booking" className="btn-accent text-sm py-2 px-4">
                    Book Now
                  </a>
                </div>
                
                {selectedVan === van.id && <div className="mt-4 pt-4 border-t border-gray-200">
                    <h4 className="font-semibold mb-2">Specifications</h4>
                    <div className="grid grid-cols-2 gap-2">
                      <div>
                        <p className="text-sm text-gray-600">Dimensions:</p>
                        <p className="text-sm font-medium">{van.specs.dimensions}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-600">Fuel Type:</p>
                        <p className="text-sm font-medium">{van.specs.fuelType}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-600">Transmission:</p>
                        <p className="text-sm font-medium">{van.specs.transmission}</p>
                      </div>
                    </div>
                  </div>}
              </div>
            </div>)}
        </div>
      </div>
    </section>;
};
export default FleetContent;