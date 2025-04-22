import { Award, Users, ThumbsUp, Truck } from 'lucide-react';
const AboutContent = () => {
  const stats = [{
    value: '5+',
    label: 'Years Experience'
  }, {
    value: '1000+',
    label: 'Happy Customers'
  }, {
    value: '50+',
    label: 'Vehicles'
  }, {
    value: '24/7',
    label: 'Support'
  }];
  const values = [{
    icon: Truck,
    title: 'Reliability',
    description: 'We pride ourselves on maintaining an exceptionally reliable fleet of vehicles, ensuring your transportation needs are met without any hitches.'
  }, {
    icon: Award,
    title: 'Quality Service',
    description: 'Our commitment to quality service means we go above and beyond to ensure your rental experience is smooth, hassle-free, and exceeds expectations.'
  }, {
    icon: ThumbsUp,
    title: 'Customer Satisfaction',
    description: 'We measure our success by the satisfaction of our customers, which is why we constantly strive to improve our services based on your feedback.'
  }, {
    icon: Users,
    title: 'Community',
    description: "As a local business, we're committed to supporting the communities we serve and maintaining strong relationships with our customers."
  }];
  return <section className="section-padding bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="section-title text-[#601112]">About McKenna's Rental And Transport</h2>
          <p className="section-subtitle mx-auto">
            Learn about our journey, our values, and why customers choose us for their van rental needs.
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-8 mb-16">
          <div className="md:w-1/2">
            <h3 className="text-2xl font-bold text-primary-blue mb-4">Our Story</h3>
            <p className="text-gray-700 mb-4">McKenna's rental and transport was founded in 2025 with a simple mission: to provide reliable, affordable van rental solutions for businesses and individuals in Durban and beyond.</p>
            <p className="text-gray-700 mb-4">What started with a modest fleet of just 2 vans has grown into one of the region's most trusted vehicle rental services, now operating over 50 vehicles of various sizes to meet any transportation need.</p>
            <p className="text-gray-700">Our founder, Deshan Naidoo, identified a gap in the market for quality van rentals with exceptional customer service, and this vision continues to drive our business today. We've built our reputation on reliability, transparency, and going the extra mile for our customers.</p>
          </div>

          <div className="md:w-1/2">
            <img alt="Apex Van Hire fleet" className="rounded-lg shadow-lg w-full h-80 object-cover" src="/lovable-uploads/63d0ab4f-cbff-4333-8d78-a1adc22e8dd7.jpg" />
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {stats.map((stat, index) => <div key={index} className="bg-gray-50 rounded-lg p-6 text-center shadow-sm">
              <div className="text-3xl font-bold text-accent-orange mb-1">{stat.value}</div>
              <div className="text-gray-600">{stat.label}</div>
            </div>)}
        </div>

        <h3 className="text-2xl font-bold text-primary-blue mb-6 text-center">Our Values</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {values.map((value, index) => <div key={index} className="bg-gray-50 rounded-lg p-6 text-center shadow-md">
              <div className="bg-primary-light bg-opacity-10 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4 mx-auto">
                <value.icon className="w-8 h-8 text-primary-blue" />
              </div>
              <h4 className="text-lg font-semibold mb-3">{value.title}</h4>
              <p className="text-gray-600 text-sm">{value.description}</p>
            </div>)}
        </div>

        <div className="text-white rounded-lg p-8 text-center bg-[#801818]">
          <h3 className="text-2xl font-bold mb-4">Join the MRAT Family</h3>
          <p className="mb-6 max-w-2xl mx-auto">
            Whether you're a business in need of reliable transportation or an individual with a moving project, we're here to support you with quality vehicles and exceptional service.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="#fleet" className="bg-white text-primary-blue hover:bg-gray-100 font-semibold py-2 px-6 rounded-md transition-colors">
              Explore Our Fleet
            </a>
            <a href="#contact" className="border border-white text-white hover:bg-white hover:bg-opacity-10 font-semibold py-2 px-6 rounded-md transition-colors">
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </section>;
};
export default AboutContent;