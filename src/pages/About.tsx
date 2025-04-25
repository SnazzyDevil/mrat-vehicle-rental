
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Clock, Shield, Truck, Users, Award, ThumbsUp } from 'lucide-react';

const About = () => {
  // Company stats
  const stats = [
    { value: '20+', label: 'Years Experience' },
    { value: '500+', label: 'Vehicles' },
    { value: '10,000+', label: 'Happy Customers' },
    { value: '5', label: 'Service Centers' }
  ];

  // Core values
  const values = [
    {
      icon: <Shield className="h-10 w-10 text-accent-orange" />,
      title: 'Reliability',
      description: 'We pride ourselves on our reliable service and well-maintained vehicles.'
    },
    {
      icon: <Users className="h-10 w-10 text-accent-orange" />,
      title: 'Customer Focus',
      description: 'Our customers are at the heart of everything we do, ensuring satisfaction with every rental.'
    },
    {
      icon: <Award className="h-10 w-10 text-accent-orange" />,
      title: 'Quality',
      description: 'We maintain the highest standards across our entire fleet and service offerings.'
    },
    {
      icon: <ThumbsUp className="h-10 w-10 text-accent-orange" />,
      title: 'Integrity',
      description: 'We operate with honesty and transparency in all our business practices.'
    }
  ];

  // Team members
  const team = [
    {
      name: 'John Mitchell',
      role: 'CEO & Founder',
      image: 'https://randomuser.me/api/portraits/men/23.jpg',
      bio: 'With over 20 years in the transport industry, John founded Apex Van Hire with a vision to provide reliable, affordable van rentals.'
    },
    {
      name: 'Sarah Williams',
      role: 'Operations Director',
      image: 'https://randomuser.me/api/portraits/women/35.jpg',
      bio: 'Sarah oversees all operational aspects of Apex, ensuring smooth service delivery and customer satisfaction.'
    },
    {
      name: 'David Nkosi',
      role: 'Fleet Manager',
      image: 'https://randomuser.me/api/portraits/men/54.jpg',
      bio: 'David manages our extensive fleet, ensuring all vehicles are maintained to the highest standards.'
    },
    {
      name: 'Lisa Johnson',
      role: 'Customer Service Manager',
      image: 'https://randomuser.me/api/portraits/women/65.jpg',
      bio: 'Lisa leads our customer service team, dedicated to providing exceptional support throughout the rental process.'
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <div className="bg-primary-blue text-white pt-28 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">About Apex Van Hire</h1>
            <p className="text-lg opacity-90">
              We're on a mission to provide reliable, affordable, and hassle-free van rental services to businesses and individuals across South Africa.
            </p>
          </div>
        </div>
      </div>
      
      {/* Our Story */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="section-title">Our Story</h2>
              <p className="text-gray-600 mb-6">
                Established in 2013, Apex Van Hire began with a small fleet of just 5 vans. Our founder, John Mitchell, identified a gap in the market for reliable, transparent van rental services that put customers first.
              </p>
              <p className="text-gray-600 mb-6">
                What started as a small operation in Cape Town has grown into one of South Africa's most trusted van rental companies, with branches in major cities across the country. Despite our growth, we've never lost sight of our core values: reliability, transparency, and customer satisfaction.
              </p>
              <p className="text-gray-600 mb-6">
                Today, we're proud to serve thousands of customers each year, from individuals moving homes to businesses requiring fleet solutions. Our extensive range of well-maintained vans caters to all needs and budgets.
              </p>
            </div>
            <div className="lg:pl-8">
              <img 
                src="https://images.unsplash.com/photo-1629806088627-9923d731ecdd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" 
                alt="Apex Van Hire team" 
                className="rounded-lg shadow-lg w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Stats Section */}
      <section className="bg-gradient-to-r from-primary-blue to-primary-light text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <p className="text-4xl md:text-5xl font-bold mb-2">{stat.value}</p>
                <p className="text-lg opacity-80">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Core Values */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="section-title">Our Core Values</h2>
            <p className="section-subtitle mx-auto">
              These principles guide everything we do at Apex Van Hire.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div 
                key={index} 
                className="p-6 bg-gray-50 rounded-lg hover:shadow-md transition-shadow text-center"
              >
                <div className="mb-4 flex justify-center">{value.icon}</div>
                <h3 className="text-xl font-bold text-primary-blue mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Meet The Team */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="section-title">Meet Our Leadership Team</h2>
            <p className="section-subtitle mx-auto">
              The passionate individuals driving Apex Van Hire forward.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div 
                key={index} 
                className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="h-64 overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover" 
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-primary-blue mb-1">{member.name}</h3>
                  <p className="text-accent-orange font-semibold mb-3">{member.role}</p>
                  <p className="text-gray-600">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Our Fleet Overview */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="section-title">Our Fleet</h2>
              <p className="text-gray-600 mb-6">
                At Apex Van Hire, we take pride in our extensive and diverse fleet of well-maintained vans. We regularly update our vehicles to ensure you always have access to reliable, efficient, and modern transportation options.
              </p>
              <p className="text-gray-600 mb-6">
                Whether you need a compact van for urban deliveries, a medium-sized vehicle for moving apartments, or a large van for significant relocations, we have the perfect solution for your needs.
              </p>
              <p className="text-gray-600 mb-6">
                All our vans undergo rigorous maintenance checks between rentals, ensuring you receive a vehicle that's clean, reliable, and ready for the road.
              </p>
              <Link to="/fleet">
                <Button className="btn-primary">
                  View Our Fleet
                </Button>
              </Link>
            </div>
            <div className="order-1 lg:order-2">
              <img 
                src="https://images.unsplash.com/photo-1532408840957-031d8034aca9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80" 
                alt="Apex Van Hire fleet" 
                className="rounded-lg shadow-lg w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="bg-accent-orange text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Experience Our Service?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Book a van today and discover why thousands of customers trust Apex Van Hire for their transportation needs.
          </p>
          <div className="flex justify-center space-x-4">
            <Link to="/booking">
              <Button className="bg-white text-accent-orange hover:bg-gray-100">
                Book Now
              </Button>
            </Link>
            <Link to="/contact">
              <Button variant="outline" className="border-2 border-white text-white hover:bg-white hover:bg-opacity-10">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default About;
