
import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from '@/components/ui/card';
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger
} from '@/components/ui/tabs';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Calendar } from '@/components/ui/calendar';
import { cn } from '@/lib/utils';
import { CalendarIcon, MapPin, Clock, CreditCard, ChevronRight, Loader2 } from 'lucide-react';
import { format, addDays } from 'date-fns';
import { toast } from '@/hooks/use-toast';

// Sample van data
const vans = [
  {
    id: 1,
    name: 'Small Panel Van',
    category: 'compact',
    image: 'https://images.unsplash.com/photo-1609519031670-f5c6ab64858c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
    price: 650,
    deposit: 3000,
  },
  {
    id: 2,
    name: 'Medium Panel Van',
    category: 'medium',
    image: 'https://images.unsplash.com/photo-1672590858482-a8ed5532d771?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
    price: 850,
    deposit: 4000,
  },
  {
    id: 3,
    name: 'Large Panel Van',
    category: 'large',
    image: 'https://images.unsplash.com/photo-1532408840957-031d8034aca9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
    price: 1050,
    deposit: 5000,
  },
  {
    id: 4,
    name: 'Compact Cargo Van',
    category: 'compact',
    image: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
    price: 550,
    deposit: 2500,
  },
  {
    id: 5,
    name: 'Medium Cargo Van',
    category: 'medium',
    image: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
    price: 750,
    deposit: 3500,
  },
  {
    id: 6,
    name: 'Box Truck',
    category: 'large',
    image: 'https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80',
    price: 1250,
    deposit: 6000,
  }
];

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

const extras = [
  { id: 'gps', name: 'GPS Navigation', price: 50, description: 'GPS navigation system' },
  { id: 'insurance', name: 'Extra Insurance', price: 120, description: 'Comprehensive insurance coverage' },
  { id: 'driver', name: 'Additional Driver', price: 80, description: 'Add an additional driver' },
  { id: 'childseat', name: 'Child Seat', price: 45, description: 'Child safety seat' },
  { id: 'wifi', name: 'Mobile WiFi', price: 60, description: '4G WiFi hotspot device' }
];

const Booking = () => {
  const [searchParams] = useSearchParams();
  const initialVanId = searchParams.get('vanId') ? parseInt(searchParams.get('vanId') || '0') : null;

  const [activeStep, setActiveStep] = useState(0);
  const [selectedVan, setSelectedVan] = useState<number | null>(initialVanId);
  const [pickupLocation, setPickupLocation] = useState(searchParams.get('pickup') || '');
  const [dropoffLocation, setDropoffLocation] = useState(searchParams.get('dropoff') || '');
  const [pickupDate, setPickupDate] = useState<Date | undefined>(
    searchParams.get('pickupDate') ? new Date(searchParams.get('pickupDate') || '') : undefined
  );
  const [returnDate, setReturnDate] = useState<Date | undefined>(
    searchParams.get('returnDate') ? new Date(searchParams.get('returnDate') || '') : undefined
  );
  const [pickupTime, setPickupTime] = useState(searchParams.get('pickupTime') || '');
  const [returnTime, setReturnTime] = useState(searchParams.get('returnTime') || '');
  const [selectedExtras, setSelectedExtras] = useState<string[]>([]);

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    postalCode: '',
    licenseNumber: '',
    agreeTerms: false
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  // Calculate rental duration and total cost
  const calculateDuration = () => {
    if (!pickupDate || !returnDate) return 0;
    const diffTime = returnDate.getTime() - pickupDate.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return Math.max(1, diffDays); // Minimum 1 day
  };

  const calculateTotal = () => {
    if (!selectedVan) return 0;
    const van = vans.find(van => van.id === selectedVan);
    if (!van) return 0;

    const duration = calculateDuration();
    const basePrice = van.price * duration;

    const extrasTotal = selectedExtras.reduce((total, extraId) => {
      const extra = extras.find(extra => extra.id === extraId);
      return total + (extra ? extra.price : 0);
    }, 0);

    return basePrice + extrasTotal;
  };

  const handleNextStep = () => {
    if (validateCurrentStep()) {
      setActiveStep(prevStep => prevStep + 1);
      window.scrollTo(0, 0);
    }
  };

  const handlePreviousStep = () => {
    setActiveStep(prevStep => prevStep - 1);
    window.scrollTo(0, 0);
  };

  const validateCurrentStep = () => {
    switch(activeStep) {
      case 0: // Vehicle selection
        if (!selectedVan) {
          toast({
            title: "Please select a van",
            description: "You must select a van to continue.",
            variant: "destructive"
          });
          return false;
        }
        return true;

      case 1: // Dates and locations
        if (!pickupLocation || !dropoffLocation) {
          toast({
            title: "Missing location",
            description: "Please select both pickup and dropoff locations.",
            variant: "destructive"
          });
          return false;
        }

        if (!pickupDate || !returnDate) {
          toast({
            title: "Missing dates",
            description: "Please select both pickup and return dates.",
            variant: "destructive"
          });
          return false;
        }

        if (!pickupTime || !returnTime) {
          toast({
            title: "Missing times",
            description: "Please select both pickup and return times.",
            variant: "destructive"
          });
          return false;
        }

        return true;

      case 2: // Extras
        return true; // Extras are optional

      case 3: // Personal details
        const {
          firstName,
          lastName,
          email,
          phone,
          agreeTerms
        } = formData;

        if (!firstName || !lastName || !email || !phone) {
          toast({
            title: "Missing personal details",
            description: "Please fill in all the required fields.",
            variant: "destructive"
          });
          return false;
        }

        if (!agreeTerms) {
          toast({
            title: "Terms and conditions",
            description: "You must agree to the terms and conditions to continue.",
            variant: "destructive"
          });
          return false;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
          toast({
            title: "Invalid email",
            description: "Please enter a valid email address.",
            variant: "destructive"
          });
          return false;
        }

        return true;

      default:
        return true;
    }
  };

  const handleSubmit = async () => {
    if (validateCurrentStep()) {
      setIsSubmitting(true);

      try {
        // Simulate API request
        await new Promise(resolve => setTimeout(resolve, 2000));

        // Success - show confirmation
        setActiveStep(5);
        window.scrollTo(0, 0);

        toast({
          title: "Booking successful!",
          description: "Your van booking has been confirmed.",
        });
      } catch (error) {
        toast({
          title: "Booking failed",
          description: "There was an error processing your booking. Please try again.",
          variant: "destructive"
        });
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  const handleExtraToggle = (extraId: string) => {
    setSelectedExtras(prev =>
      prev.includes(extraId)
        ? prev.filter(id => id !== extraId)
        : [...prev, extraId]
    );
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  // Reset form if URL params change
  useEffect(() => {
    if (searchParams.get('vanId')) {
      const vanId = parseInt(searchParams.get('vanId') || '0');
      setSelectedVan(vanId);
    }

    if (searchParams.get('pickup')) {
      setPickupLocation(searchParams.get('pickup') || '');
    }

    if (searchParams.get('dropoff')) {
      setDropoffLocation(searchParams.get('dropoff') || '');
    }

    if (searchParams.get('pickupDate')) {
      setPickupDate(new Date(searchParams.get('pickupDate') || ''));
    }

    if (searchParams.get('returnDate')) {
      setReturnDate(new Date(searchParams.get('returnDate') || ''));
    }

    if (searchParams.get('pickupTime')) {
      setPickupTime(searchParams.get('pickupTime') || '');
    }

    if (searchParams.get('returnTime')) {
      setReturnTime(searchParams.get('returnTime') || '');
    }
  }, [searchParams]);

  const renderStepContent = () => {
    switch(activeStep) {
      case 0:
        return (
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold mb-4">Select a Vehicle</h2>
              <p className="text-gray-600 mb-6">Choose the van that best suits your needs.</p>

              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {vans.map(van => (
                  <div
                    key={van.id}
                    className={`border rounded-lg overflow-hidden cursor-pointer transition-all ${selectedVan === van.id ? 'ring-2 ring-primary-blue shadow-md' : 'hover:shadow-md'}`}
                    onClick={() => setSelectedVan(van.id)}
                  >
                    <div className="h-48 overflow-hidden">
                      <img
                        src={van.image}
                        alt={van.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="font-bold mb-1">{van.name}</h3>
                      <p className="text-sm text-gray-500 mb-2">Category: {van.category}</p>
                      <p className="font-semibold text-accent-orange">R{van.price} per day</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex justify-end">
              <Button
                onClick={handleNextStep}
                className="btn-primary"
              >
                Continue to Dates & Locations <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        );

      case 1:
        return (
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold mb-4">Dates & Locations</h2>
              <p className="text-gray-600 mb-6">Please select your pickup and return details.</p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Pickup Location */}
                <div className="space-y-2">
                  <Label htmlFor="pickup-location" className="flex items-center">
                    <MapPin className="w-4 h-4 mr-1" /> Pickup Location
                  </Label>
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
                  <Label htmlFor="dropoff-location" className="flex items-center">
                    <MapPin className="w-4 h-4 mr-1" /> Dropoff Location
                  </Label>
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
                  <Label className="flex items-center">
                    <CalendarIcon className="w-4 h-4 mr-1" /> Pickup Date
                  </Label>
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
                  <Label htmlFor="pickup-time" className="flex items-center">
                    <Clock className="w-4 h-4 mr-1" /> Pickup Time
                  </Label>
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
                  <Label className="flex items-center">
                    <CalendarIcon className="w-4 h-4 mr-1" /> Return Date
                  </Label>
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
                  <Label htmlFor="return-time" className="flex items-center">
                    <Clock className="w-4 h-4 mr-1" /> Return Time
                  </Label>
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
            </div>

            <div className="flex justify-between">
              <Button
                variant="outline"
                onClick={handlePreviousStep}
              >
                Back
              </Button>
              <Button
                onClick={handleNextStep}
                className="btn-primary"
              >
                Continue to Extras <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        );

      case 2:
        return (
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold mb-4">Select Additional Options</h2>
              <p className="text-gray-600 mb-6">Enhance your rental experience with these useful extras.</p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {extras.map((extra) => (
                  <div
                    key={extra.id}
                    className={`p-4 border rounded-lg cursor-pointer transition-all ${selectedExtras.includes(extra.id) ? 'border-primary-blue bg-blue-50' : 'hover:border-gray-400'}`}
                    onClick={() => handleExtraToggle(extra.id)}
                  >
                    <div className="flex items-start">
                      <Checkbox
                        id={`extra-${extra.id}`}
                        checked={selectedExtras.includes(extra.id)}
                        onCheckedChange={() => handleExtraToggle(extra.id)}
                        className="mt-1"
                      />
                      <div className="ml-3">
                        <Label
                          htmlFor={`extra-${extra.id}`}
                          className="font-medium cursor-pointer"
                        >
                          {extra.name}
                        </Label>
                        <p className="text-sm text-gray-500">{extra.description}</p>
                        <p className="text-accent-orange font-semibold mt-1">R{extra.price}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex justify-between">
              <Button
                variant="outline"
                onClick={handlePreviousStep}
              >
                Back
              </Button>
              <Button
                onClick={handleNextStep}
                className="btn-primary"
              >
                Continue to Personal Details <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        );

      case 3:
        return (
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold mb-4">Personal Details</h2>
              <p className="text-gray-600 mb-6">Please enter your details to complete your booking.</p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="firstName">First Name</Label>
                  <Input
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="lastName">Last Name</Label>
                  <Input
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="address">Address</Label>
                  <Input
                    id="address"
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="city">City</Label>
                  <Input
                    id="city"
                    name="city"
                    value={formData.city}
                    onChange={handleInputChange}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="postalCode">Postal Code</Label>
                  <Input
                    id="postalCode"
                    name="postalCode"
                    value={formData.postalCode}
                    onChange={handleInputChange}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="licenseNumber">Driver's License Number</Label>
                  <Input
                    id="licenseNumber"
                    name="licenseNumber"
                    value={formData.licenseNumber}
                    onChange={handleInputChange}
                  />
                </div>
              </div>

              <div className="mt-6">
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="agreeTerms"
                    name="agreeTerms"
                    checked={formData.agreeTerms}
                    onCheckedChange={(checked) =>
                      setFormData(prev => ({
                        ...prev,
                        agreeTerms: checked === true
                      }))
                    }
                  />
                  <Label htmlFor="agreeTerms" className="text-sm">
                    I agree to the <a href="#" className="text-primary-blue underline">terms and conditions</a> and <a href="#" className="text-primary-blue underline">privacy policy</a>
                  </Label>
                </div>
              </div>
            </div>

            <div className="flex justify-between">
              <Button
                variant="outline"
                onClick={handlePreviousStep}
              >
                Back
              </Button>
              <Button
                onClick={handleNextStep}
                className="btn-primary"
              >
                Review Booking <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        );

      case 4:
        const van = vans.find(van => van.id === selectedVan);
        const duration = calculateDuration();
        const total = calculateTotal();
        const formattedPickupDate = pickupDate ? format(pickupDate, "PPP") : '';
        const formattedReturnDate = returnDate ? format(returnDate, "PPP") : '';
        const selectedExtraItems = extras.filter(extra => selectedExtras.includes(extra.id));

        return (
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold mb-4">Review Your Booking</h2>
              <p className="text-gray-600 mb-6">Please review your booking details before confirming.</p>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2 space-y-6">
                  {/* Vehicle Details */}
                  <Card>
                    <CardHeader className="pb-3">
                      <CardTitle>Vehicle Details</CardTitle>
                    </CardHeader>
                    <CardContent className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="md:col-span-1">
                        {van && (
                          <img
                            src={van.image}
                            alt={van.name}
                            className="w-full h-32 object-cover rounded-md"
                          />
                        )}
                      </div>
                      <div className="md:col-span-2">
                        <p className="font-semibold text-lg">{van?.name}</p>
                        <p className="text-gray-500">Category: {van?.category}</p>
                        <p className="text-accent-orange font-medium mt-2">R{van?.price} per day</p>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Rental Details */}
                  <Card>
                    <CardHeader className="pb-3">
                      <CardTitle>Rental Details</CardTitle>
                    </CardHeader>
                    <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-semibold mb-1">Pickup</h4>
                        <p>Location: {pickupLocation}</p>
                        <p>Date: {formattedPickupDate}</p>
                        <p>Time: {pickupTime}</p>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">Return</h4>
                        <p>Location: {dropoffLocation}</p>
                        <p>Date: {formattedReturnDate}</p>
                        <p>Time: {returnTime}</p>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Personal Details */}
                  <Card>
                    <CardHeader className="pb-3">
                      <CardTitle>Personal Details</CardTitle>
                    </CardHeader>
                    <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <p><span className="font-semibold">Name:</span> {formData.firstName} {formData.lastName}</p>
                        <p><span className="font-semibold">Email:</span> {formData.email}</p>
                        <p><span className="font-semibold">Phone:</span> {formData.phone}</p>
                      </div>
                      <div>
                        <p><span className="font-semibold">Address:</span> {formData.address}</p>
                        <p><span className="font-semibold">City:</span> {formData.city}</p>
                        <p><span className="font-semibold">Postal Code:</span> {formData.postalCode}</p>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Order Summary */}
                <div className="lg:col-span-1">
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle>Order Summary</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="flex justify-between">
                        <span>Van Rental ({van?.name})</span>
                        <span>R{van?.price} x {duration} days</span>
                      </div>

                      <div className="flex justify-between">
                        <span>Base Price</span>
                        <span>R{van ? van.price * duration : 0}</span>
                      </div>

                      {selectedExtraItems.length > 0 && (
                        <>
                          <div className="pt-2 border-t">
                            <p className="font-semibold">Additional Options:</p>
                            {selectedExtraItems.map(extra => (
                              <div key={extra.id} className="flex justify-between text-sm mt-2">
                                <span>{extra.name}</span>
                                <span>R{extra.price}</span>
                              </div>
                            ))}
                          </div>
                        </>
                      )}

                      <div className="pt-4 border-t">
                        <div className="flex justify-between font-semibold text-lg">
                          <span>Total</span>
                          <span>R{total}</span>
                        </div>
                        <p className="text-xs text-gray-500 mt-1">* Excluding security deposit of R{van?.deposit}</p>
                      </div>
                    </CardContent>
                    <CardFooter className="flex-col space-y-2 pt-0">
                      <Button
                        className="w-full btn-accent"
                        onClick={handleSubmit}
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? (
                          <>
                            <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Processing...
                          </>
                        ) : (
                          <>Confirm & Pay</>
                        )}
                      </Button>
                      <p className="text-xs text-center text-gray-500 mt-2">
                        Your payment details will be collected securely on the next step
                      </p>
                    </CardFooter>
                  </Card>
                </div>
              </div>
            </div>

            <div className="flex justify-start">
              <Button
                variant="outline"
                onClick={handlePreviousStep}
                disabled={isSubmitting}
              >
                Back
              </Button>
            </div>
          </div>
        );

      case 5: // Confirmation
        return (
          <div className="text-center max-w-xl mx-auto py-8">
            <div className="bg-green-100 rounded-full h-20 w-20 flex items-center justify-center mx-auto mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-green-600 mb-4">Booking Confirmed!</h2>
            <p className="text-gray-600 mb-6">
              Thank you for your booking. A confirmation email with all the details has been sent to {formData.email}.
            </p>

            <div className="bg-gray-50 p-6 rounded-lg shadow-sm mb-6 text-left">
              <h3 className="font-bold mb-2">Booking Reference</h3>
              <p className="text-xl font-mono">APX-{Math.floor(10000 + Math.random() * 90000)}</p>

              <h3 className="font-bold mt-4 mb-2">Next Steps</h3>
              <ul className="list-disc list-inside space-y-2">
                <li>Please arrive at the pickup location 15 minutes before your scheduled time</li>
                <li>Bring your driver's license, ID, and payment card used for the booking</li>
                <li>A security deposit of R{vans.find(van => van.id === selectedVan)?.deposit} will be held against your card</li>
              </ul>
            </div>

            <p className="text-sm text-gray-500 mb-6">
              If you have any questions about your booking, please contact our customer service team at 078 310 2618.
            </p>

            <Button className="btn-primary" onClick={() => window.location.href = '/'}>
              Return to Homepage
            </Button>
          </div>
        );

      default:
        return null;
    }
  };

  // Progress steps
  const steps = [
    { name: 'Vehicle', status: activeStep >= 0 ? 'complete' : 'upcoming' },
    { name: 'Dates & Locations', status: activeStep >= 1 ? 'complete' : 'upcoming' },
    { name: 'Extras', status: activeStep >= 2 ? 'complete' : 'upcoming' },
    { name: 'Your Details', status: activeStep >= 3 ? 'complete' : 'upcoming' },
    { name: 'Review & Pay', status: activeStep >= 4 ? 'complete' : 'upcoming' }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <div className="bg-primary-blue text-white pt-28 pb-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Book Your Van</h1>
          <p className="text-lg opacity-90 max-w-2xl">
            Complete the steps below to book your van. Our simple process makes renting a van quick and easy.
          </p>
        </div>
      </div>

      {activeStep < 5 && (
        <div className="border-b bg-white sticky top-0 z-30 shadow-sm">
          <div className="container mx-auto px-4">
            <nav className="overflow-x-auto">
              <ol className="flex min-w-full py-4">
                {steps.map((step, index) => (
                  <li key={step.name} className={`relative flex-1 ${index !== steps.length - 1 ? 'pr-8' : ''}`}>
                    <div className="flex items-center">
                      <div className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full ${activeStep >= index ? 'bg-primary-blue text-white' : 'bg-gray-200 text-gray-500'}`}>
                        {index + 1}
                      </div>
                      <div className="ml-3">
                        <p className={`text-sm font-medium ${activeStep >= index ? 'text-primary-blue' : 'text-gray-500'}`}>
                          {step.name}
                        </p>
                      </div>
                    </div>

                    {index !== steps.length - 1 && (
                      <div className="absolute top-4 left-8 -ml-px mt-0.5 h-0.5 w-full bg-gray-200">
                        <div className={`h-0.5 ${activeStep > index ? 'bg-primary-blue' : 'bg-gray-200'}`} style={{ width: activeStep > index ? '100%' : '0%' }}></div>
                      </div>
                    )}
                  </li>
                ))}
              </ol>
            </nav>
          </div>
        </div>
      )}

      <div className="flex-grow bg-gray-50 py-10">
        <div className="container mx-auto px-4">
          {renderStepContent()}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Booking;
