import { Star } from 'lucide-react';
import { useState } from 'react';
const testimonials = [{
  id: 1,
  name: 'John Smith',
  company: 'ABC Logistics',
  image: 'https://randomuser.me/api/portraits/men/32.jpg',
  rating: 5,
  text: 'Apex Van Hire provided excellent service for our company\'s delivery needs. The vans were in great condition and the staff was extremely helpful. Will definitely use their services again!',
  type: 'business'
}, {
  id: 2,
  name: 'Sarah Johnson',
  company: 'Personal Customer',
  image: 'https://randomuser.me/api/portraits/women/44.jpg',
  rating: 5,
  text: 'I used Apex Van Hire for my house move and was very impressed. The booking process was simple, the van was clean and well-maintained, and the pricing was very reasonable. Highly recommend!',
  type: 'personal'
}, {
  id: 3,
  name: 'Michael Brown',
  company: 'XYZ Distributors',
  image: 'https://randomuser.me/api/portraits/men/52.jpg',
  rating: 4,
  text: 'We\'ve been using Apex Van Hire for our distribution needs for over a year now. Their fleet is reliable and their customer service is top-notch. A great partner for our business.',
  type: 'business'
}, {
  id: 4,
  name: 'Emily Wilson',
  company: 'Personal Customer',
  image: 'https://randomuser.me/api/portraits/women/17.jpg',
  rating: 5,
  text: 'Rented a van for a weekend to help my daughter move to university. The process was straightforward and the staff were friendly and accommodating. Would use again without hesitation.',
  type: 'personal'
}, {
  id: 5,
  name: 'David Thompson',
  company: 'Thompson\'s Furniture',
  image: 'https://randomuser.me/api/portraits/men/85.jpg',
  rating: 5,
  text: 'As a furniture retailer, reliable delivery is crucial for our business. Apex Van Hire has consistently provided us with excellent vehicles and service. A trustworthy partner.',
  type: 'business'
}];
const TestimonialsSection = () => {
  const [filter, setFilter] = useState('all');
  const filteredTestimonials = filter === 'all' ? testimonials : testimonials.filter(testimonial => testimonial.type === filter);
  return <section className="section-padding from-primary-blue to-primary-light text-white bg-[801818] bg-[#801818]">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Customers Say</h2>
          <p className="text-lg opacity-90 max-w-3xl mx-auto mb-8">
            Don't just take our word for it. Here's what some of our satisfied customers have to say about their experience with Apex Van Hire.
          </p>
          
          <div className="flex justify-center space-x-4 mb-8">
            <button onClick={() => setFilter('all')} className={`px-6 py-2 rounded-full transition-colors ${filter === 'all' ? 'bg-white text-primary-blue' : 'bg-transparent border border-white'}`}>
              All
            </button>
            <button onClick={() => setFilter('business')} className={`px-6 py-2 rounded-full transition-colors ${filter === 'business' ? 'bg-white text-primary-blue' : 'bg-transparent border border-white'}`}>
              Business
            </button>
            <button onClick={() => setFilter('personal')} className={`px-6 py-2 rounded-full transition-colors ${filter === 'personal' ? 'bg-white text-primary-blue' : 'bg-transparent border border-white'}`}>
              Personal
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredTestimonials.map(testimonial => <div key={testimonial.id} className="bg-white text-gray-800 rounded-lg p-6 shadow-lg">
              <div className="flex items-center space-x-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />)}
                {[...Array(5 - testimonial.rating)].map((_, i) => <Star key={i + testimonial.rating} className="h-5 w-5 text-gray-300" />)}
              </div>
              <p className="text-gray-700 mb-6">"{testimonial.text}"</p>
              <div className="flex items-center">
                <img src={testimonial.image} alt={testimonial.name} className="h-12 w-12 rounded-full object-cover mr-4" />
                <div>
                  <h4 className="font-semibold">{testimonial.name}</h4>
                  <p className="text-sm text-gray-500">{testimonial.company}</p>
                </div>
              </div>
            </div>)}
        </div>
      </div>
    </section>;
};
export default TestimonialsSection;