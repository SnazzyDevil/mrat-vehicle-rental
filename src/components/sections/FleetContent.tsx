import { useState } from 'react';
import { Button } from '@/components/ui/button';
const categories = ['all', 'compact', 'medium', 'large'];
const vans = [{
  id: 1,
  name: 'Compact Van',
  image: 'https://drive.google.com/file/d/1ikoDoeTp-oQLEqt0Xsk_ajUIJJfgvmWF/view?usp=drive_link',
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
  image: 'https://drive.google.com/file/d/1pzlcR8G83MpwOYpzFPV7Ehq40-9_4NBW/view?usp=drive_link',
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
  image: 'https://drive.google.com/file/d/1zWMO19-FEDW1R-IwVXkPxPSqspT2ABXb/view?usp=drive_link',
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
  return;
};
export default FleetContent;