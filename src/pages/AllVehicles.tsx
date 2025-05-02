
import { useState } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

// Vehicle groups from A to P
const vehicleGroups = [
  {
    id: 'A',
    title: 'Group A - Economy',
    description: 'Small, fuel-efficient vehicles ideal for city driving',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 'B',
    title: 'Group B - Compact',
    description: 'Compact vehicles with slightly more space and comfort',
    image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 'C',
    title: 'Group C - Midsize',
    description: 'Midsize vehicles offering a good balance of space and efficiency',
    image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 'D',
    title: 'Group D - Standard',
    description: 'Standard size vehicles with more room for passengers and luggage',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 'E',
    title: 'Group E - Full Size',
    description: 'Full-size vehicles offering maximum comfort for longer journeys',
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 'F',
    title: 'Group F - Premium',
    description: 'Premium vehicles with enhanced features and performance',
    image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 'G',
    title: 'Group G - Luxury',
    description: 'Luxury vehicles offering the highest level of comfort and prestige',
    image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 'H',
    title: 'Group H - Specialty',
    description: 'Specialty vehicles for unique transportation needs',
    image: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 'I',
    title: 'Group I - Minivan',
    description: 'Minivans with flexible seating for families or groups',
    image: 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 'J',
    title: 'Group J - SUV',
    description: 'Sport Utility Vehicles for versatile transportation needs',
    image: 'https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 'K',
    title: 'Group K - Convertible',
    description: 'Convertible vehicles for an open-air driving experience',
    image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 'L',
    title: 'Group L - Pickup Truck',
    description: 'Pickup trucks for hauling and off-road capability',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 'M',
    title: 'Group M - Cargo Van',
    description: 'Cargo vans for transporting goods and equipment',
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 'N',
    title: 'Group N - Passenger Van',
    description: 'Passenger vans for transporting larger groups',
    image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 'O',
    title: 'Group O - Commercial',
    description: 'Commercial vehicles for business transportation needs',
    image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 'P',
    title: 'Group P - Specialty Commercial',
    description: 'Specialized commercial vehicles for unique business needs',
    image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80&w=600'
  }
];

const AllVehicles = () => {
  const [selectedGroup, setSelectedGroup] = useState<string | null>(null);

  const filteredVehicles = selectedGroup 
    ? vehicleGroups.filter(group => group.id === selectedGroup) 
    : vehicleGroups;

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main>
        {/* Hero section */}
        <section className="bg-primary-maroon text-white py-16">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">All Vehicle Groups</h1>
            <p className="text-lg max-w-2xl mx-auto">
              Browse our comprehensive range of vehicle groups available for rental. From economy to luxury, we have the perfect vehicle for your needs.
            </p>
          </div>
        </section>
        
        {/* Filters */}
        <section className="py-8 bg-gray-50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-wrap justify-center gap-2 mb-6">
              <Button 
                variant={selectedGroup === null ? "default" : "outline"}
                onClick={() => setSelectedGroup(null)}
                className={selectedGroup === null ? "bg-primary-maroon hover:bg-primary-light" : "text-primary-maroon border-primary-maroon hover:bg-primary-maroon hover:text-white"}
              >
                All Groups
              </Button>
              
              {vehicleGroups.map(group => (
                <Button 
                  key={group.id}
                  variant={selectedGroup === group.id ? "default" : "outline"}
                  onClick={() => setSelectedGroup(group.id)}
                  className={selectedGroup === group.id ? "bg-primary-maroon hover:bg-primary-light" : "text-primary-maroon border-primary-maroon hover:bg-primary-maroon hover:text-white"}
                >
                  Group {group.id}
                </Button>
              ))}
            </div>
          </div>
        </section>
        
        {/* Vehicle grid */}
        <section className="py-12">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredVehicles.map(group => (
                <Card key={group.id} className="overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                  <div className="h-60 overflow-hidden">
                    <img 
                      src={group.image} 
                      alt={group.title} 
                      className="w-full h-full object-cover transform transition-transform hover:scale-105 duration-500"
                    />
                    <div className="absolute top-4 left-4 bg-primary-maroon text-white px-3 py-1 rounded-md">
                      Group {group.id}
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-gray-800 mb-2">{group.title}</h3>
                    <p className="text-gray-600 mb-4">{group.description}</p>
                    <div className="flex justify-end">
                      <Button className="bg-accent-red hover:bg-red-600 text-white">
                        View Vehicles
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
        
        {/* Call to action */}
        <section className="py-16 bg-gray-100">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <h2 className="text-3xl font-bold text-primary-maroon mb-4">Ready to Book Your Vehicle?</h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto">
              Contact our friendly team today or use our online booking system to secure your vehicle rental.
            </p>
            <Button className="bg-primary-maroon hover:bg-primary-light text-white px-8 py-6 text-lg rounded-md">
              Book Now
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default AllVehicles;
