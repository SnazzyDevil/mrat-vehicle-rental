import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Upload, Info } from 'lucide-react';
const categories = ['all', 'compact', 'medium', 'large'];
const vans = [{
  id: 1,
  name: 'Compact Van',
  image: 'https://mrat.creativortexstudio.co.za/wp-content/uploads/2025/04/Compact-Van.png',
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
  image: 'https://mrat.creativortexstudio.co.za/wp-content/uploads/2025/04/Medium-Van.png',
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
  image: 'https://mrat.creativortexstudio.co.za/wp-content/uploads/2025/04/Large-Van.png',
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
  const [customImages, setCustomImages] = useState<{
    [key: number]: string;
  }>({});
  const filteredVans = activeCategory === 'all' ? vans : vans.filter(van => van.category === activeCategory);
  const handleImageUpload = (vanId: number, event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];
      const reader = new FileReader();
      reader.onloadend = () => {
        setCustomImages(prev => ({
          ...prev,
          [vanId]: reader.result as string
        }));
      };
      reader.readAsDataURL(file);
    }
  };
  return <div className="bg-gray-50 py-12 px-[7px] my-0 mx-0">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-[#601112] mb-4">Our Fleet</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Browse our range of vans available for hire. Select a category to filter or view details of each vehicle.
          </p>
        </div>
        
        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {categories.map(category => <Button key={category} variant={activeCategory === category ? "default" : "outline"} onClick={() => setActiveCategory(category)} className="capitalize">
              {category}
            </Button>)}
        </div>
        
        {/* Fleet Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredVans.map(van => <Card key={van.id} className="overflow-hidden">
              <div className="relative h-48 overflow-hidden bg-gray-200">
                <img src={customImages[van.id] || van.image} alt={van.name} className="w-full h-full object-cover transition-transform hover:scale-105 duration-500" />
                <div className="absolute top-2 right-2">
                  <label htmlFor={`upload-${van.id}`} className="bg-white/90 hover:bg-white p-2 rounded-full cursor-pointer flex items-center justify-center shadow-md" title="Upload custom image">
                    <Upload size={18} className="text-[#601112]" />
                    <input type="file" id={`upload-${van.id}`} className="hidden" accept="image/*" onChange={e => handleImageUpload(van.id, e)} />
                  </label>
                </div>
                <span className="absolute bottom-2 left-2 bg-[#601112] text-white px-3 py-1 text-sm rounded-md">
                  {van.category}
                </span>
              </div>
              
              <CardHeader>
                <CardTitle>{van.name}</CardTitle>
                <CardDescription>{van.description}</CardDescription>
              </CardHeader>
              
              <CardContent>
                <div className="text-lg font-semibold text-[#601112]">
                  {van.price}
                </div>
              </CardContent>
              
              <CardFooter className="flex justify-between">
                <Button variant="outline" size="sm" onClick={() => setSelectedVan(selectedVan === van.id ? null : van.id)}>
                  <Info size={16} className="mr-2" />
                  Specifications
                </Button>
                <Button>Book Now</Button>
              </CardFooter>
              
              {/* Specifications Section */}
              {selectedVan === van.id && <div className="px-6 pb-6 pt-0">
                  <div className="border-t border-gray-200 pt-4 mt-2">
                    <h4 className="font-medium mb-3">Vehicle Specifications</h4>
                    <div className="grid grid-cols-2 gap-3">
                      <div className="text-sm">
                        <span className="text-gray-500 block">Load Space:</span>
                        <span>{van.specs.loadSpace}</span>
                      </div>
                      <div className="text-sm">
                        <span className="text-gray-500 block">Maximum Load:</span>
                        <span>{van.specs.maxLoad}</span>
                      </div>
                      <div className="text-sm">
                        <span className="text-gray-500 block">Dimensions:</span>
                        <span>{van.specs.dimensions}</span>
                      </div>
                      <div className="text-sm">
                        <span className="text-gray-500 block">Fuel Type:</span>
                        <span>{van.specs.fuelType}</span>
                      </div>
                      <div className="text-sm">
                        <span className="text-gray-500 block">Transmission:</span>
                        <span>{van.specs.transmission}</span>
                      </div>
                    </div>
                  </div>
                </div>}
            </Card>)}
        </div>
      </div>
    </div>;
};
export default FleetContent;