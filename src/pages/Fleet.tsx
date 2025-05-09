
import React, { useState } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Link, useSearchParams } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select';
import { ArrowRight, Truck, Users, Weight, Fuel, Calendar } from 'lucide-react';

const vans = [
  {
    id: 1,
    name: 'Small Panel Van',
    category: 'compact',
    image: 'https://drive.google.com/file/d/1ikoDoeTp-oQLEqt0Xsk_ajUIJJfgvmWF/view?usp=drive_link',
    description: 'Perfect for small deliveries and urban navigation',
    specs: {
      capacity: '2.9 cubic meters',
      payload: '650 kg',
      fuelType: 'Petrol',
      passengers: '2',
      transmission: 'Manual',
      length: '4.4 meters'
    },
    rates: {
      daily: 'R650',
      weekly: 'R3,900 (R557/day)',
      monthly: 'R14,300 (R477/day)'
    }
  },
  {
    id: 2,
    name: 'Medium Panel Van',
    category: 'medium',
    image: 'https://drive.google.com/file/d/1pzlcR8G83MpwOYpzFPV7Ehq40-9_4NBW/view?usp=drive_link',
    description: 'Versatile van for medium-sized loads and deliveries',
    specs: {
      capacity: '5.7 cubic meters',
      payload: '1,000 kg',
      fuelType: 'Diesel',
      passengers: '3',
      transmission: 'Manual',
      length: '5.2 meters'
    },
    rates: {
      daily: 'R750',
      weekly: 'R5,100 (R729/day)',
      monthly: 'R18,700 (R623/day)'
    }
  },
  {
    id: 3,
    name: 'Large Panel Van',
    category: 'large',
    image: 'https://drive.google.com/file/d/1zWMO19-FEDW1R-IwVXkPxPSqspT2ABXb/view?usp=drive_link',
    description: 'Spacious capacity for larger moves and deliveries',
    specs: {
      capacity: '11.5 cubic meters',
      payload: '1,400 kg',
      fuelType: 'Diesel',
      passengers: '3',
      transmission: 'Automatic',
      length: '6.3 meters'
    },
    rates: {
      daily: 'R1,050',
      weekly: 'R6,300 (R900/day)',
      monthly: 'R23,100 (R770/day)'
    }
  },
  {
    id: 4,
    name: 'Compact Cargo Van',
    category: 'compact',
    image: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
    description: 'Economical option for light loads and city navigation',
    specs: {
      capacity: '2.2 cubic meters',
      payload: '550 kg',
      fuelType: 'Petrol',
      passengers: '2',
      transmission: 'Manual',
      length: '4.2 meters'
    },
    rates: {
      daily: 'R550',
      weekly: 'R3,300 (R471/day)',
      monthly: 'R12,100 (R403/day)'
    }
  },
  {
    id: 5,
    name: 'Medium Cargo Van',
    category: 'medium',
    image: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
    description: 'Ideal for medium loads and furniture moving',
    specs: {
      capacity: '4.8 cubic meters',
      payload: '900 kg',
      fuelType: 'Diesel',
      passengers: '3',
      transmission: 'Manual',
      length: '5.0 meters'
    },
    rates: {
      daily: 'R750',
      weekly: 'R4,500 (R643/day)',
      monthly: 'R16,500 (R550/day)'
    }
  },
  {
    id: 6,
    name: 'Box Truck',
    category: 'large',
    image: 'https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80',
    description: 'Large capacity for significant moving needs and deliveries',
    specs: {
      capacity: '15.0 cubic meters',
      payload: '1,800 kg',
      fuelType: 'Diesel',
      passengers: '3',
      transmission: 'Automatic',
      length: '7.2 meters'
    },
    rates: {
      daily: 'R1,250',
      weekly: 'R7,500 (R1,071/day)',
      monthly: 'R27,500 (R917/day)'
    }
  }
];

const Fleet = () => {
  const [searchParams] = useSearchParams();
  const initialCategory = searchParams.get('category') || 'all';

  const [categoryFilter, setCategoryFilter] = useState(initialCategory);
  const [sortBy, setSortBy] = useState('name');
  const [uploadedImages, setUploadedImages] = useState<{[key: number]: string}>({});

  const handleImageUpload = (vanId: number, file: File) => {
    const reader = new FileReader();
    reader.onloadend = () => {
      setUploadedImages(prev => ({
        ...prev,
        [vanId]: reader.result as string
      }));
    };
    reader.readAsDataURL(file);
  };

  const filteredVans = categoryFilter === 'all'
    ? vans
    : vans.filter(van => van.category === categoryFilter);

  const sortedVans = [...filteredVans].sort((a, b) => {
    if (sortBy === 'name') {
      return a.name.localeCompare(b.name);
    } else if (sortBy === 'price-low') {
      return parseInt(a.rates.daily.replace(/[^0-9]/g, '')) - parseInt(b.rates.daily.replace(/[^0-9]/g, ''));
    } else if (sortBy === 'price-high') {
      return parseInt(b.rates.daily.replace(/[^0-9]/g, '')) - parseInt(a.rates.daily.replace(/[^0-9]/g, ''));
    } else if (sortBy === 'capacity') {
      return parseFloat(b.specs.capacity) - parseFloat(a.specs.capacity);
    }
    return 0;
  });

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Hero Banner */}
      <div className="bg-primary-blue text-white pt-28 pb-16 px-4">
        <div className="container mx-auto">
          <h1 className="text-4xl font-bold mb-4">Our Fleet</h1>
          <p className="text-lg opacity-90 max-w-2xl">
            Browse our extensive range of well-maintained vans available for hire.
            We have options for every need, from small deliveries to large moves.
          </p>
        </div>
      </div>

      {/* Filter and Sort Section */}
      <div className="bg-gray-100 py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center space-x-4 w-full md:w-auto">
              <span className="text-gray-700">Filter by:</span>
              <Select value={categoryFilter} onValueChange={setCategoryFilter}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Vans</SelectItem>
                  <SelectItem value="compact">Compact</SelectItem>
                  <SelectItem value="medium">Medium</SelectItem>
                  <SelectItem value="large">Large</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="flex items-center space-x-4 w-full md:w-auto">
              <span className="text-gray-700">Sort by:</span>
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="name">Name (A-Z)</SelectItem>
                  <SelectItem value="price-low">Price (Low to High)</SelectItem>
                  <SelectItem value="price-high">Price (High to Low)</SelectItem>
                  <SelectItem value="capacity">Capacity</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {sortedVans.map((van) => (
            <div
              key={van.id}
              className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col md:flex-row"
            >
              <div className="md:w-2/5 relative">
                <img
                  src={uploadedImages[van.id] || van.image}
                  alt={van.name}
                  className="w-full h-64 md:h-full object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
                  <label htmlFor={`van-upload-${van.id}`} className="cursor-pointer bg-white text-primary-blue px-4 py-2 rounded-md hover:bg-gray-100 transition">
                    Upload Image
                    <input
                      id={`van-upload-${van.id}`}
                      type="file"
                      accept="image/*"
                      className="hidden"
                      onChange={(e) => {
                        if (e.target.files && e.target.files[0]) {
                          handleImageUpload(van.id, e.target.files[0]);
                        }
                      }}
                    />
                  </label>
                </div>
              </div>
              <div className="md:w-3/5 p-6 flex flex-col">
                <div>
                  <h2 className="text-2xl font-bold text-primary-blue mb-2">{van.name}</h2>
                  <p className="text-gray-600 mb-4">{van.description}</p>

                  <div className="grid grid-cols-2 gap-x-4 gap-y-2 mb-6">
                    <div className="flex items-center">
                      <Truck className="h-4 w-4 text-accent-orange mr-2" />
                      <span className="text-sm">Capacity: {van.specs.capacity}</span>
                    </div>
                    <div className="flex items-center">
                      <Weight className="h-4 w-4 text-accent-orange mr-2" />
                      <span className="text-sm">Payload: {van.specs.payload}</span>
                    </div>
                    <div className="flex items-center">
                      <Fuel className="h-4 w-4 text-accent-orange mr-2" />
                      <span className="text-sm">Fuel Type: {van.specs.fuelType}</span>
                    </div>
                    <div className="flex items-center">
                      <Users className="h-4 w-4 text-accent-orange mr-2" />
                      <span className="text-sm">Passengers: {van.specs.passengers}</span>
                    </div>
                  </div>
                </div>

                <div className="mt-auto">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <span className="text-sm text-gray-500">Daily Rate:</span>
                      <p className="text-lg font-bold text-accent-orange">{van.rates.daily}</p>
                    </div>
                    <div>
                      <span className="text-sm text-gray-500">Weekly Rate:</span>
                      <p className="text-base font-semibold">{van.rates.weekly}</p>
                    </div>
                    <div>
                      <span className="text-sm text-gray-500">Monthly Rate:</span>
                      <p className="text-base font-semibold">{van.rates.monthly}</p>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <Link
                      to={`/booking?vanId=${van.id}`}
                      className="w-full"
                    >
                      <Button className="w-full btn-accent">Book Now</Button>
                    </Link>
                    <Link
                      to={`/fleet/${van.id}`}
                      className="w-auto flex items-center"
                    >
                      <Button variant="outline" className="flex items-center gap-1 group">
                        Details
                        <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredVans.length === 0 && (
          <div className="text-center py-12">
            <p className="text-lg text-gray-600">No vans found matching your criteria.</p>
          </div>
        )}
      </div>

      {/* Contact Form Section */}
      <div className="bg-gray-100 py-12">
        <div className="container mx-auto px-4">
          <div className="bg-white rounded-lg shadow-md p-8 max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-primary-blue mb-6">Contact Us</h2>
            <p className="text-gray-600 mb-6">Have questions about our fleet or need assistance? Fill out the form below and our team will get back to you as soon as possible.</p>

            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary-blue focus:border-primary-blue"
                    placeholder="Your name"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary-blue focus:border-primary-blue"
                    placeholder="your.email@example.com"
                    required
                  />
                </div>
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                <input
                  type="tel"
                  id="phone"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary-blue focus:border-primary-blue"
                  placeholder="Your phone number"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                <input
                  type="text"
                  id="subject"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary-blue focus:border-primary-blue"
                  placeholder="What is this regarding?"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary-blue focus:border-primary-blue"
                  placeholder="Your message here..."
                  required
                ></textarea>
              </div>

              <div>
                <Button type="submit" className="w-full md:w-auto btn-accent">
                  Send Message
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Fleet;
