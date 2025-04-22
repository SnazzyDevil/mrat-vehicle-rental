
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger, DialogClose } from "@/components/ui/dialog";

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
  
  const selectedVanItem = selectedVan !== null ? vans.find(van => van.id === selectedVan) : null;

  return (
    <section className="section-padding bg-gray-50">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-blue mb-4">Our Van Fleet</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Browse our range of vans for hire, from compact city vans to large movers. Find the perfect van for your needs.
          </p>
        </div>

        <Tabs defaultValue="all" className="w-full mb-8">
          <TabsList className="flex justify-center mb-8">
            {categories.map((category) => (
              <TabsTrigger 
                key={category} 
                value={category}
                onClick={() => setActiveCategory(category)}
                className="capitalize"
              >
                {category}
              </TabsTrigger>
            ))}
          </TabsList>
        </Tabs>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredVans.map((van) => (
            <div key={van.id} className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105">
              <div className="relative h-48">
                <img 
                  src={van.image} 
                  alt={van.name} 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold text-primary-blue">{van.name}</h3>
                  <span className="text-accent-orange font-semibold">{van.price}</span>
                </div>
                <p className="text-gray-600 text-sm mb-4">{van.description}</p>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button 
                      onClick={() => setSelectedVan(van.id)} 
                      className="w-full"
                    >
                      View Details
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-[600px]">
                    {selectedVanItem && (
                      <>
                        <DialogHeader>
                          <DialogTitle className="text-2xl">{selectedVanItem.name}</DialogTitle>
                          <DialogDescription>{selectedVanItem.description}</DialogDescription>
                        </DialogHeader>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
                          <div>
                            <img 
                              src={selectedVanItem.image} 
                              alt={selectedVanItem.name} 
                              className="w-full h-auto rounded-lg"
                            />
                            <p className="text-lg font-semibold text-accent-orange mt-2">{selectedVanItem.price}</p>
                          </div>
                          <div>
                            <h4 className="font-semibold text-lg mb-2">Specifications</h4>
                            <ul className="space-y-2">
                              <li className="flex justify-between">
                                <span className="text-gray-600">Load Space:</span>
                                <span className="font-medium">{selectedVanItem.specs.loadSpace}</span>
                              </li>
                              <li className="flex justify-between">
                                <span className="text-gray-600">Max Load:</span>
                                <span className="font-medium">{selectedVanItem.specs.maxLoad}</span>
                              </li>
                              <li className="flex justify-between">
                                <span className="text-gray-600">Dimensions:</span>
                                <span className="font-medium">{selectedVanItem.specs.dimensions}</span>
                              </li>
                              <li className="flex justify-between">
                                <span className="text-gray-600">Fuel Type:</span>
                                <span className="font-medium">{selectedVanItem.specs.fuelType}</span>
                              </li>
                              <li className="flex justify-between">
                                <span className="text-gray-600">Transmission:</span>
                                <span className="font-medium">{selectedVanItem.specs.transmission}</span>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="flex justify-between mt-4">
                          <a href="#contact" className="bg-accent-orange text-white py-2 px-5 rounded font-medium hover:bg-opacity-90 transition-colors">
                            Contact Us
                          </a>
                          <DialogClose asChild>
                            <Button variant="outline">Close</Button>
                          </DialogClose>
                        </div>
                      </>
                    )}
                  </DialogContent>
                </Dialog>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FleetContent;
