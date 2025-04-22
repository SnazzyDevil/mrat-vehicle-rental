
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CalendarIcon, MapPin, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { format, addDays } from 'date-fns';
import { Calendar } from '@/components/ui/calendar';
import { cn } from '@/lib/utils';

const locations = [
  'Cape Town CBD',
  'Cape Town Airport',
  'Durban Central',
  'Durban Airport',
  'Johannesburg Central',
  'Johannesburg Airport',
];

const times = Array.from({ length: 14 }, (_, i) => {
  const hour = i + 8; // Starting from 8 AM
  return `${hour}:00`;
});

const BookingWidget = ({ className = "" }) => {
  const navigate = useNavigate();
  const [pickupLocation, setPickupLocation] = useState('');
  const [dropoffLocation, setDropoffLocation] = useState('');
  const [pickupDate, setPickupDate] = useState<Date>();
  const [returnDate, setReturnDate] = useState<Date>();
  const [pickupTime, setPickupTime] = useState('');
  const [returnTime, setReturnTime] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create URL with query parameters
    const params = new URLSearchParams();
    if (pickupLocation) params.append('pickup', pickupLocation);
    if (dropoffLocation) params.append('dropoff', dropoffLocation);
    if (pickupDate) params.append('pickupDate', pickupDate.toISOString());
    if (returnDate) params.append('returnDate', returnDate.toISOString());
    if (pickupTime) params.append('pickupTime', pickupTime);
    if (returnTime) params.append('returnTime', returnTime);
    
    navigate(`/booking?${params.toString()}`);
  };

  return (
    <div className={`bg-white rounded-lg shadow-lg p-6 ${className}`}>
      <h2 className="text-xl font-bold text-primary-blue mb-4">Quick Booking</h2>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Pickup Location */}
          <div className="space-y-2">
            <label htmlFor="pickup-location" className="text-sm font-medium text-gray-700 flex items-center">
              <MapPin className="w-4 h-4 mr-1" /> Pickup Location
            </label>
            <Select value={pickupLocation} onValueChange={setPickupLocation}>
              <SelectTrigger id="pickup-location" className="w-full">
                <SelectValue placeholder="Select location" />
              </SelectTrigger>
              <SelectContent>
                {locations.map((location) => (
                  <SelectItem key={location} value={location}>
                    {location}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          
          {/* Dropoff Location */}
          <div className="space-y-2">
            <label htmlFor="dropoff-location" className="text-sm font-medium text-gray-700 flex items-center">
              <MapPin className="w-4 h-4 mr-1" /> Dropoff Location
            </label>
            <Select value={dropoffLocation} onValueChange={setDropoffLocation}>
              <SelectTrigger id="dropoff-location" className="w-full">
                <SelectValue placeholder="Select location" />
              </SelectTrigger>
              <SelectContent>
                {locations.map((location) => (
                  <SelectItem key={location} value={location}>
                    {location}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          
          {/* Pickup Date */}
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700 flex items-center">
              <CalendarIcon className="w-4 h-4 mr-1" /> Pickup Date
            </label>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  className={cn(
                    "w-full justify-start text-left font-normal",
                    !pickupDate && "text-muted-foreground"
                  )}
                >
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {pickupDate ? format(pickupDate, "PPP") : <span>Select date</span>}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0" align="start">
                <Calendar
                  mode="single"
                  selected={pickupDate}
                  onSelect={setPickupDate}
                  initialFocus
                  disabled={(date) => date < new Date()}
                  className={cn("p-3 pointer-events-auto")}
                />
              </PopoverContent>
            </Popover>
          </div>
          
          {/* Pickup Time */}
          <div className="space-y-2">
            <label htmlFor="pickup-time" className="text-sm font-medium text-gray-700 flex items-center">
              <Clock className="w-4 h-4 mr-1" /> Pickup Time
            </label>
            <Select value={pickupTime} onValueChange={setPickupTime}>
              <SelectTrigger id="pickup-time" className="w-full">
                <SelectValue placeholder="Select time" />
              </SelectTrigger>
              <SelectContent>
                {times.map((time) => (
                  <SelectItem key={`pickup-${time}`} value={time}>
                    {time}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          
          {/* Return Date */}
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700 flex items-center">
              <CalendarIcon className="w-4 h-4 mr-1" /> Return Date
            </label>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  className={cn(
                    "w-full justify-start text-left font-normal",
                    !returnDate && "text-muted-foreground"
                  )}
                >
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {returnDate ? format(returnDate, "PPP") : <span>Select date</span>}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0" align="start">
                <Calendar
                  mode="single"
                  selected={returnDate}
                  onSelect={setReturnDate}
                  initialFocus
                  disabled={(date) => date < (pickupDate || new Date())}
                  className={cn("p-3 pointer-events-auto")}
                />
              </PopoverContent>
            </Popover>
          </div>
          
          {/* Return Time */}
          <div className="space-y-2">
            <label htmlFor="return-time" className="text-sm font-medium text-gray-700 flex items-center">
              <Clock className="w-4 h-4 mr-1" /> Return Time
            </label>
            <Select value={returnTime} onValueChange={setReturnTime}>
              <SelectTrigger id="return-time" className="w-full">
                <SelectValue placeholder="Select time" />
              </SelectTrigger>
              <SelectContent>
                {times.map((time) => (
                  <SelectItem key={`return-${time}`} value={time}>
                    {time}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
        
        <Button type="submit" className="w-full btn-accent">
          Search Availability
        </Button>
      </form>
    </div>
  );
};

export default BookingWidget;
