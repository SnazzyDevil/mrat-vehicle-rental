
import { useState } from 'react';
import { CalendarIcon } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Calendar } from '@/components/ui/calendar';
import { format } from 'date-fns';
import { cn } from '@/lib/utils';
import { toast } from '@/hooks/use-toast';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

// Vehicle data - using the same data structure as in FleetContent.tsx
const vehicles = [
  {
    id: 1,
    name: 'Compact Van',
    category: 'compact'
  }, 
  {
    id: 2,
    name: 'Medium Van',
    category: 'medium'
  }, 
  {
    id: 3,
    name: 'Large Van',
    category: 'large'
  },
  {
    id: 4,
    name: 'Small Panel Van',
    category: 'compact'
  },
  {
    id: 5,
    name: 'Medium Panel Van',
    category: 'medium'
  },
  {
    id: 6,
    name: 'Box Truck',
    category: 'large'
  }
];

const BookingContent = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    vehiclePreference: '',
  });
  const [pickupDate, setPickupDate] = useState<Date | undefined>(undefined);
  const [returnDate, setReturnDate] = useState<Date | undefined>(undefined);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleVehicleChange = (value: string) => {
    setFormData(prev => ({
      ...prev,
      vehiclePreference: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.phone) {
      toast({
        title: "Missing information",
        description: "Please fill in all required fields",
        variant: "destructive"
      });
      return;
    }

    if (!pickupDate || !returnDate) {
      toast({
        title: "Missing dates",
        description: "Please select pickup and return dates",
        variant: "destructive"
      });
      return;
    }

    setIsSubmitting(true);

    try {
      // Prepare the data to be sent
      const bookingData = {
        ...formData,
        pickupDate: pickupDate ? format(pickupDate, 'PPP') : '',
        returnDate: returnDate ? format(returnDate, 'PPP') : '',
        recipientEmail: 'info@mckennasrental.co.za' // The email address where the booking request will be sent
      };

      // In a real-world scenario, you would send this to your backend
      // For now, we'll simulate a successful submission
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Reset the form
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        vehiclePreference: '',
      });
      setPickupDate(undefined);
      setReturnDate(undefined);
      
      // Show success message
      toast({
        title: "Booking request submitted!",
        description: `Your booking request has been sent to ${bookingData.recipientEmail}`,
      });
    } catch (error) {
      toast({
        title: "Error submitting booking",
        description: "There was a problem submitting your booking request. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return <section className="bg-[#601112]">
      <div className="container mx-auto py-[42px]">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Easy Booking Process</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 text-center text-white">
          {/* Step 1 */}
          <div className="flex flex-col items-center">
            <div className="bg-red-600 rounded-full w-14 h-14 flex items-center justify-center mb-4 px-[2px]">
              <span className="text-white text-xl font-bold">1</span>
            </div>
            <h3 className="font-bold text-lg mb-2">Choose Your Vehicle</h3>
            <p>Select from our wide range of vehicles to suit your needs and budget.</p>
          </div>

          {/* Step 2 */}
          <div className="flex flex-col items-center">
            <div className="bg-red-600 rounded-full w-14 h-14 flex items-center justify-center mb-4">
              <span className="text-white text-xl font-bold">2</span>
            </div>
            <h3 className="font-bold text-lg mb-2">Select Dates & Location</h3>
            <p>Pick your rental period and preferred pickup location.</p>
          </div>

          {/* Step 3 */}
          <div className="flex flex-col items-center">
            <div className="bg-red-600 rounded-full w-14 h-14 flex items-center justify-center mb-4">
              <span className="text-white text-xl font-bold">3</span>
            </div>
            <h3 className="font-bold text-lg mb-2">Complete Booking</h3>
            <p>Provide your details and payment information to confirm your booking.</p>
          </div>
        </div>

        {/* Booking Form */}
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-xl overflow-hidden p-8">
          <h3 className="text-2xl font-bold text-[#601112] mb-6">Start Your Booking</h3>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* First Name */}
              <div>
                <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
                <Input 
                  id="firstName" 
                  name="firstName" 
                  value={formData.firstName} 
                  onChange={handleInputChange} 
                  className="w-full" 
                  required 
                />
              </div>
              
              {/* Last Name */}
              <div>
                <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
                <Input 
                  id="lastName" 
                  name="lastName" 
                  value={formData.lastName} 
                  onChange={handleInputChange} 
                  className="w-full" 
                  required 
                />
              </div>
            </div>
            
            {/* Email Address */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
              <Input 
                id="email" 
                name="email" 
                type="email" 
                value={formData.email} 
                onChange={handleInputChange} 
                className="w-full" 
                required 
              />
            </div>
            
            {/* Phone Number */}
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
              <Input 
                id="phone" 
                name="phone" 
                type="tel" 
                value={formData.phone} 
                onChange={handleInputChange} 
                className="w-full" 
                required 
              />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Pick-Up Date */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Pick-Up Date</label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button variant="outline" className={cn("w-full justify-start text-left font-normal", !pickupDate && "text-muted-foreground")}>
                      {pickupDate ? format(pickupDate, "PPP") : <span>Pick a date</span>}
                      <CalendarIcon className="ml-auto h-4 w-4" />
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar mode="single" selected={pickupDate} onSelect={setPickupDate} initialFocus disabled={date => date < new Date()} className={cn("p-3 pointer-events-auto")} />
                  </PopoverContent>
                </Popover>
              </div>
              
              {/* Return Date */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Return Date</label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button variant="outline" className={cn("w-full justify-start text-left font-normal", !returnDate && "text-muted-foreground")}>
                      {returnDate ? format(returnDate, "PPP") : <span>Pick a date</span>}
                      <CalendarIcon className="ml-auto h-4 w-4" />
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar mode="single" selected={returnDate} onSelect={setReturnDate} initialFocus disabled={date => date < (pickupDate || new Date())} className={cn("p-3 pointer-events-auto")} />
                  </PopoverContent>
                </Popover>
              </div>
            </div>
            
            {/* Vehicle Preference - Changed to dropdown */}
            <div>
              <label htmlFor="vehiclePreference" className="block text-sm font-medium text-gray-700 mb-1">Vehicle Preference</label>
              <Select 
                value={formData.vehiclePreference} 
                onValueChange={handleVehicleChange}
              >
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select a vehicle" />
                </SelectTrigger>
                <SelectContent>
                  {vehicles.map(vehicle => (
                    <SelectItem key={vehicle.id} value={vehicle.name}>
                      {vehicle.name} ({vehicle.category})
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            
            {/* Submit Button */}
            <Button 
              type="submit" 
              className="w-full text-white transition-colors py-6 bg-red-600 hover:bg-red-500"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Processing...' : 'Submit Booking Request'}
            </Button>
          </form>
        </div>
      </div>
    </section>;
};
export default BookingContent;
