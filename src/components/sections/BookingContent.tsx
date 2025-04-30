import { useState } from 'react';
import { CalendarIcon } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Calendar } from '@/components/ui/calendar';
import { format } from 'date-fns';
import { cn } from '@/lib/utils';
const BookingContent = () => {
  const [pickupDate, setPickupDate] = useState<Date | undefined>(undefined);
  const [returnDate, setReturnDate] = useState<Date | undefined>(undefined);
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
          
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* First Name */}
              <div>
                <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
                <Input id="firstName" className="w-full" />
              </div>
              
              {/* Last Name */}
              <div>
                <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
                <Input id="lastName" className="w-full" />
              </div>
            </div>
            
            {/* Email Address */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
              <div className="relative">
                <Input id="email" type="email" className="w-full" />
                <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-red-600" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                    <path fillRule="evenodd" d="M10 0C4.477 0 0 4.477 0 10c0 5.523 4.477 10 10 10s10-4.477 10-10C20 4.477 15.523 0 10 0zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
            </div>
            
            {/* Phone Number */}
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
              <Input id="phone" type="tel" className="w-full" />
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
            
            {/* Vehicle Preference */}
            <div>
              <label htmlFor="vehicle" className="block text-sm font-medium text-gray-700 mb-1">Vehicle Preference</label>
              <Input id="vehicle" className="w-full" />
            </div>
            
            {/* Submit Button */}
            <Button type="submit" className="w-full bg-[#601112] text-white hover:bg-[#701112] transition-colors py-6">
              Submit Booking Request
            </Button>
          </form>
        </div>
      </div>
    </section>;
};
export default BookingContent;