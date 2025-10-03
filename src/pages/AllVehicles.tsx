import { useState } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

// Vehicle groups from A to P
const vehicleGroups = [{
  id: 'A',
  title: 'Group A - Economy',
  description: 'Small, fuel-efficient vehicles ideal for city driving',
  image: 'https://www.media.mckennasrental.co.za/wp-content/uploads/2025/10/Picanto.jpg'
}, {
  id: 'B',
  title: 'Group B - Compact',
  description: 'Compact vehicles with slightly more space and comfort',
  image: 'https://www.media.mckennasrental.co.za/wp-content/uploads/2025/10/Starlet.png'
}, {
  id: 'C',
  title: 'Group C - Midsize',
  description: 'Midsize vehicles offering a good balance of space and efficiency',
  image: 'https://www.media.mckennasrental.co.za/wp-content/uploads/2025/10/Polo-GTI.png'
}, {
  id: 'D',
  title: 'Group D - Standard',
  description: 'Standard size vehicles with more room for passengers and luggage.',
  image: 'https://www.media.mckennasrental.co.za/wp-content/uploads/2025/10/Kia-Sonet.png'
}, {
  id: 'E',
  title: 'Group E - 1 Ton Cargo Van',
  description: '1 ton cargo van suitable for transporting goods',
  image: 'https://www.media.mckennasrental.co.za/wp-content/uploads/2025/10/Hilux-with-canopy.png'
}, {
  id: 'F',
  title: 'Group F - Quantum Panel Van',
  description: 'Quantum panel van for medium-sized loads',
  image: 'https://www.media.mckennasrental.co.za/wp-content/uploads/2025/10/Panel-Van.jpg'
}, {
  id: 'H',
  title: 'Group H - 2.5 ton fridge truck',
  description: '2.5 ton fridge truck for transporting perishable goods',
  image: 'https://www.media.mckennasrental.co.za/wp-content/uploads/2025/10/Fridge.png'
}, {
  id: 'I',
  title: 'Group I - Minivan',
  description: 'Minivans with flexible seating for families or groups',
  image: 'https://www.media.mckennasrental.co.za/wp-content/uploads/2025/10/Staria.png'
}, {
  id: 'J',
  title: 'Group J - Luxury Sedan',
  description: 'Luxury sedan with premium features for comfortable travel',
  image: 'https://www.media.mckennasrental.co.za/wp-content/uploads/2025/10/Mercedes-C-class.png'
}, {
  id: 'K',
  title: 'Group K - 14 ton Truck',
  description: '14 ton Isuzu for heavy hauling',
  image: 'https://www.media.mckennasrental.co.za/wp-content/uploads/2025/10/Isuzu-Truck.png'
}, {
  id: 'N',
  title: 'Group N - Double cab Hilux Van',
  description: 'Double cab Hilux for hauling and off-road capability ',
  image: 'https://www.media.mckennasrental.co.za/wp-content/uploads/2025/10/Hilux-double-cab.png'
}, {
  id: 'O',
  title: 'Group O - Commercial van',
  description: 'Commercial vehicles for business transportation needs',
  image: 'https://www.media.mckennasrental.co.za/wp-content/uploads/2025/10/Toyota-Hiace.png'
}, {
  id: 'P',
  title: 'Group P - Half ton van',
  description: 'NP200 Perfect for small deliveries and urban navigation. Ideal for small moves and deliveries in tight urban spaces.',
  image: 'https://www.media.mckennasrental.co.za/wp-content/uploads/2025/10/NP200.jpg'
}];
const AllVehicles = () => {
  const [selectedGroup, setSelectedGroup] = useState<string | null>(null);
  const [selectedType, setSelectedType] = useState<string | null>(null);

  // Helper function to determine if a group contains a specific vehicle type
  const groupContainsType = (groupId: string, type: string): boolean => {
    // This is a simplified mapping - in a real app, you'd have a more sophisticated way to determine this
    const carGroups = ['A', 'B', 'C', 'D', 'J'];
    const vanGroups = ['D', 'E', 'F', 'H', 'I', 'N', 'O', 'P'];
    const truckGroups = ['H', 'I', 'J', 'K', 'O'];
    switch (type) {
      case 'car':
        return carGroups.includes(groupId);
      case 'van':
        return vanGroups.includes(groupId);
      case 'truck':
        return truckGroups.includes(groupId);
      default:
        return true;
    }
  };

  // Filter vehicles based on selected group and vehicle type
  const filteredVehicles = vehicleGroups.filter(group => {
    // Filter by group if a group is selected
    if (selectedGroup && group.id !== selectedGroup) {
      return false;
    }

    // Filter by vehicle type if a type is selected
    if (selectedType && !groupContainsType(group.id, selectedType)) {
      return false;
    }
    return true;
  });
  return <div className="min-h-screen flex flex-col">
      <Navbar />

      <main>
        {/* Hero section */}
        <section className="bg-primary-maroon text-white py-16">
          <div className="container px-4 md:px-6 text-center mx-0 my-[26px]">
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
              <Button variant={selectedType === null ? "default" : "outline"} onClick={() => {
              setSelectedType(null);
              setSelectedGroup(null);
            }} className={selectedType === null ? "bg-primary-maroon hover:bg-primary-light" : "text-primary-maroon border-primary-maroon hover:bg-primary-maroon hover:text-white"}>
                All Groups
              </Button>

              <Button variant={selectedType === "car" ? "default" : "outline"} onClick={() => setSelectedType("car")} className={selectedType === "car" ? "bg-primary-maroon hover:bg-primary-light" : "text-primary-maroon border-primary-maroon hover:bg-primary-maroon hover:text-white"}>
                Cars
              </Button>

              <Button variant={selectedType === "van" ? "default" : "outline"} onClick={() => setSelectedType("van")} className={selectedType === "van" ? "bg-primary-maroon hover:bg-primary-light" : "text-primary-maroon border-primary-maroon hover:bg-primary-maroon hover:text-white"}>
                Vans
              </Button>

              <Button variant={selectedType === "truck" ? "default" : "outline"} onClick={() => setSelectedType("truck")} className={selectedType === "truck" ? "bg-primary-maroon hover:bg-primary-light" : "text-primary-maroon border-primary-maroon hover:bg-primary-maroon hover:text-white"}>
                Trucks
              </Button>
            </div>
          </div>
        </section>

        {/* Group selection buttons */}
        <section className="py-6 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Select a Vehicle Group</h2>
            <div className="flex flex-wrap justify-center gap-2 mb-4">
              {vehicleGroups.map(group => {
              // Only show groups that match the selected type filter
              if (selectedType && !groupContainsType(group.id, selectedType)) {
                return null;
              }
              return <Button key={group.id} variant={selectedGroup === group.id ? "default" : "outline"} onClick={() => setSelectedGroup(group.id === selectedGroup ? null : group.id)} className={selectedGroup === group.id ? "bg-primary-maroon hover:bg-primary-light" : "text-primary-maroon border-primary-maroon hover:bg-primary-maroon hover:text-white"}>
                    Group {group.id}
                  </Button>;
            })}
            </div>
          </div>
        </section>

        {/* Vehicle grid */}
        <section className="py-12">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredVehicles.map(group => {
              // Special case for Group D - show different content based on the selected tab
              if (group.id === 'D' && selectedType === 'van') {
                return <Card key={`${group.id}-van`} className="overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                      <div className="h-60 overflow-hidden">
                        <img src="https://www.media.mckennasrental.co.za/wp-content/uploads/2025/10/Toyota-Hilux-Single-Cab-Canopy.png" alt="Group D - 1 ton single cab van" className="w-full h-full object-cover transform transition-transform hover:scale-105 duration-500" />
                        <div className="absolute top-4 left-4 bg-primary-maroon text-white px-3 py-1 rounded-md">
                          Group {group.id}
                        </div>
                      </div>
                      <CardContent className="p-6">
                        <h3 className="text-xl font-bold text-gray-800 mb-2">Group D - 1 ton single cab van</h3>
                        <p className="text-gray-600 mb-4">1 ton single cab van with canopy for transporting goods and equipment.</p>

                        {/* Vehicle type indicators */}
                        <div className="flex gap-2 mb-4">
                          <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded">Van</span>
                        </div>


                      </CardContent>
                    </Card>;
              }

              // Special case for Group H - show different content when viewed under the Vans tab
              if (group.id === 'H' && selectedType === 'van') {
                return <Card key={`${group.id}-van`} className="overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                      <div className="h-60 overflow-hidden">
                        <img src="https://www.media.mckennasrental.co.za/wp-content/uploads/2025/10/Fortuner.png" alt="Group H - Family SUV" className="w-full h-full object-cover transform transition-transform hover:scale-105 duration-500" />
                        <div className="absolute top-4 left-4 bg-primary-maroon text-white px-3 py-1 rounded-md">
                          Group {group.id}
                        </div>
                      </div>
                      <CardContent className="p-6">
                        <h3 className="text-xl font-bold text-gray-800 mb-2">Group H - Family SUV</h3>
                        <p className="text-gray-600 mb-4">Spacious family SUV with comfortable seating for 7 passengers.</p>

                        {/* Vehicle type indicators */}
                        <div className="flex gap-2 mb-4">
                          <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded">Van</span>
                        </div>


                      </CardContent>
                    </Card>;
              }

              // Special case for Group I - show different content when viewed under the Trucks tab
              if (group.id === 'I' && selectedType === 'truck') {
                return <Card key={`${group.id}-truck`} className="overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                      <div className="h-60 overflow-hidden">
                        <img src="https://www.media.mckennasrental.co.za/wp-content/uploads/2025/10/Fridge.png" alt="Group I - 5 ton fridge truck" className="w-full h-full object-cover transform transition-transform hover:scale-105 duration-500" />
                        <div className="absolute top-4 left-4 bg-primary-maroon text-white px-3 py-1 rounded-md">
                          Group {group.id}
                        </div>
                      </div>
                      <CardContent className="p-6">
                        <h3 className="text-xl font-bold text-gray-800 mb-2">Group I - 5 ton fridge truck</h3>
                        <p className="text-gray-600 mb-4">5 ton fridge truck for transporting perishable goods.</p>

                        {/* Vehicle type indicators */}
                        <div className="flex gap-2 mb-4">
                          <span className="bg-amber-100 text-amber-800 text-xs font-medium px-2.5 py-0.5 rounded">Truck</span>
                        </div>


                      </CardContent>
                    </Card>;
              }

              // Special case for Group J - show different content when viewed under the Trucks tab
              if (group.id === 'J' && selectedType === 'truck') {
                return <Card key={`${group.id}-truck`} className="overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                      <div className="h-60 overflow-hidden">
                        <img src="https://www.media.mckennasrental.co.za/wp-content/uploads/2025/10/Isuzu-800.png" alt="Group J - 8 ton Fridge Truck" className="w-full h-full object-cover transform transition-transform hover:scale-105 duration-500" />
                        <div className="absolute top-4 left-4 bg-primary-maroon text-white px-3 py-1 rounded-md">
                          Group {group.id}
                        </div>
                      </div>
                      <CardContent className="p-6">
                        <h3 className="text-xl font-bold text-gray-800 mb-2">Group J - 8 ton Fridge Truck</h3>
                        <p className="text-gray-600 mb-4">Isuzu 8 ton fridge truck for transporting perishable goods.</p>

                        {/* Vehicle type indicators */}
                        <div className="flex gap-2 mb-4">
                          <span className="bg-amber-100 text-amber-800 text-xs font-medium px-2.5 py-0.5 rounded">Truck</span>
                        </div>


                      </CardContent>
                    </Card>;
              }

              // Default rendering for all other groups and Group D under Cars tab
              return <Card key={group.id} className="overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                    <div className="h-60 overflow-hidden">
                      <img src={group.image} alt={group.title} className="w-full h-full object-cover transform transition-transform hover:scale-105 duration-500" />
                      <div className="absolute top-4 left-4 bg-primary-maroon text-white px-3 py-1 rounded-md">
                        Group {group.id}
                      </div>
                    </div>
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold text-gray-800 mb-2">{group.title}</h3>
                      <p className="text-gray-600 mb-4">{group.description}</p>

                      {/* Vehicle type indicators */}
                      <div className="flex gap-2 mb-4">
                        {/* Car badge - show for all car groups except when viewing Group D as van or Group J as truck */}
                        {groupContainsType(group.id, 'car') && group.id !== 'D' && !(group.id === 'J' && selectedType === 'truck') && <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">Car</span>}
                        {/* Special case for Group D car badge */}
                        {groupContainsType(group.id, 'car') && group.id === 'D' && selectedType !== 'van' && <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">Car</span>}
                        {/* Van badge - show for all van groups except when viewed as special cases */}
                        {groupContainsType(group.id, 'van') && group.id !== 'D' && !(group.id === 'I' && selectedType === 'truck') && !(group.id === 'H' && selectedType === 'van') && <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded">Van</span>}
                        {/* Truck badge - show for all truck groups except when viewed as special cases */}
                        {groupContainsType(group.id, 'truck') && !(group.id === 'J' && selectedType === 'truck') && !(group.id === 'J' && selectedType === 'car') && !(group.id === 'I' && selectedType === 'truck') && !(group.id === 'H' && selectedType === 'van') && <span className="bg-amber-100 text-amber-800 text-xs font-medium px-2.5 py-0.5 rounded">Truck</span>}
                      </div>


                    </CardContent>
                  </Card>;
            })}
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
    </div>;
};
export default AllVehicles;