import React, { useState } from 'react';
import { MapPin, Star, Clock, Users, Car, ArrowRight } from 'lucide-react';

interface BookingProps {
  onNavigate: (page: string) => void;
  onSelectDriver: (driver: any) => void;
}

const Booking: React.FC<BookingProps> = ({ onNavigate, onSelectDriver }) => {
  const [pickup, setPickup] = useState('');
  const [destination, setDestination] = useState('');
  const [showDrivers, setShowDrivers] = useState(false);

  const popularLocations = [
    'Mumbai Central', 'Bandra West', 'Andheri East', 'Powai', 'Colaba', 'Worli',
    'Malad West', 'Borivali', 'Thane', 'Ghatkopar', 'Juhu', 'Santa Cruz',
    'Dadar', 'Lower Parel', 'Kurla', 'Vikhroli', 'Chembur', 'Navi Mumbai',
    'Goregaon', 'Kandivali', 'Mira Road', 'Vasai', 'Virar', 'Kalyan'
  ];

  const calculatePrice = (from: string, to: string) => {
    const distances = {
      'Mumbai Central-Bandra West': 12,
      'Andheri East-Powai': 8,
      'Colaba-Worli': 6,
      'Malad West-Borivali': 11,
      'Thane-Ghatkopar': 18,
      'Juhu-Santa Cruz': 5,
      'Dadar-Lower Parel': 7,
      'Kurla-Vikhroli': 9,
      'Chembur-Navi Mumbai': 15,
      'Goregaon-Kandivali': 8,
      'Mira Road-Vasai': 12,
      'Virar-Kalyan': 25
    };
    
    const key = `${from}-${to}`;
    const reverseKey = `${to}-${from}`;
    const distance = distances[key] || distances[reverseKey] || Math.floor(Math.random() * 20) + 5;
    
    // Base rate: ₹12-15 per km + base fare ₹25-40
    const baseRate = Math.floor(Math.random() * 4) + 12;
    const baseFare = Math.floor(Math.random() * 16) + 25;
    return Math.floor(distance * baseRate + baseFare);
  };
  const drivers = [
    {
      id: 1,
      name: 'Raj Kumar',
      rating: 4.8,
      experience: '5 years',
      vehicle: {
        model: 'Maruti Swift Dzire',
        color: 'White',
        number: 'MH 02 AB 1234',
        year: 2021,
        fuel: 'Petrol'
      },
      price: pickup && destination ? calculatePrice(pickup, destination) : 180,
      eta: '8 mins',
      rides: 2500,
      image: 'https://images.pexels.com/photos/1139743/pexels-photo-1139743.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2'
    },
    {
      id: 2,
      name: 'Priya Sharma',
      rating: 4.9,
      experience: '3 years',
      vehicle: {
        model: 'Hyundai i20',
        color: 'Blue',
        number: 'DL 08 CA 5678',
        year: 2022,
        fuel: 'Petrol'
      },
      price: pickup && destination ? calculatePrice(pickup, destination) - 15 : 165,
      eta: '12 mins',
      rides: 1800,
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2'
    },
    {
      id: 3,
      name: 'Vikash Singh',
      rating: 4.7,
      experience: '4 years',
      vehicle: {
        model: 'Tata Nexon',
        color: 'Red',
        number: 'KA 05 MN 9012',
        year: 2023,
        fuel: 'Electric'
      },
      price: pickup && destination ? calculatePrice(pickup, destination) + 25 : 195,
      eta: '15 mins',
      rides: 3200,
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2'
    }
  ];

  const handleSearch = () => {
    if (pickup && destination) {
      setShowDrivers(true);
    }
  };

  const handleDriverSelect = (driver: any) => {
    onSelectDriver(driver);
    onNavigate('driver-details');
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="grid lg:grid-cols-3 gap-8">
        {/* Booking Form */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-xl shadow-lg p-6 sticky top-24">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Book Your Ride</h2>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Pickup Location
                </label>
                <div className="relative">
                  <MapPin className="absolute left-3 top-3 h-5 w-5 text-green-500" />
                  <select
                    type="text"
                    value={pickup}
                    onChange={(e) => setPickup(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="">Select pickup location</option>
                    {popularLocations.map((location) => (
                      <option key={location} value={location}>{location}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Destination
                </label>
                <div className="relative">
                  <MapPin className="absolute left-3 top-3 h-5 w-5 text-red-500" />
                  <select
                    value={destination}
                    onChange={(e) => setDestination(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="">Where to?</option>
                    {popularLocations.filter(loc => loc !== pickup).map((location) => (
                      <option key={location} value={location}>{location}</option>
                    ))}
                  </select>
                </div>
              </div>

              <button
                onClick={handleSearch}
                disabled={!pickup || !destination}
                className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed text-white py-3 rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center"
              >
                Search Rides
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
            </div>

            <div className="mt-6 pt-6 border-t border-gray-200">
              <div className="flex items-center justify-between text-sm text-gray-600">
                <span>Your Coins Balance</span>
                <button 
                  onClick={() => onNavigate('wallet')}
                  className="text-blue-600 hover:text-blue-700 font-medium"
                >
                  ₹250 (500 coins)
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Available Drivers */}
        <div className="lg:col-span-2">
          {showDrivers ? (
            <div>
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-gray-900">Available Drivers</h3>
                <p className="text-gray-600 mt-1">
                  From {pickup} to {destination} • Choose your preferred driver
                </p>
              </div>

              <div className="space-y-4">
                {drivers.map((driver) => (
                  <div 
                    key={driver.id}
                    className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer"
                    onClick={() => handleDriverSelect(driver)}
                  >
                    <div className="p-6">
                      <div className="flex items-start gap-4">
                        <img
                          src={driver.image}
                          alt={driver.name}
                          className="w-16 h-16 rounded-full object-cover"
                        />
                        
                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-2">
                            <h4 className="text-lg font-semibold text-gray-900">{driver.name}</h4>
                            <div className="text-right">
                              <div className="text-2xl font-bold text-blue-600">₹{driver.price}</div>
                              <div className="text-sm text-gray-500 flex items-center">
                                <Clock className="h-4 w-4 mr-1" />
                                {driver.eta}
                              </div>
                            </div>
                          </div>
                          
                          <div className="flex items-center gap-4 text-sm text-gray-600 mb-3">
                            <div className="flex items-center">
                              <Star className="h-4 w-4 text-yellow-400 mr-1" />
                              <span className="font-medium">{driver.rating}</span>
                            </div>
                            <div className="flex items-center">
                              <Users className="h-4 w-4 mr-1" />
                              <span>{driver.rides} rides</span>
                            </div>
                            <div className="flex items-center">
                              <Car className="h-4 w-4 mr-1" />
                              <span>{driver.experience}</span>
                            </div>
                          </div>

                          <div className="bg-gray-50 rounded-lg p-3">
                            <div className="flex items-center justify-between">
                              <div>
                                <div className="font-medium text-gray-900">{driver.vehicle.model}</div>
                                <div className="text-sm text-gray-600">
                                  {driver.vehicle.color} • {driver.vehicle.year} • {driver.vehicle.fuel}
                                </div>
                              </div>
                              <div className="text-right">
                                <div className="font-mono text-sm text-gray-700">{driver.vehicle.number}</div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <div className="bg-white rounded-xl shadow-lg p-8 text-center">
              <Car className="h-16 w-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Ready to Go?</h3>
              <p className="text-gray-600">Enter your pickup and destination to find available drivers</p>
              
              <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-3 text-sm">
                <div className="bg-blue-50 p-3 rounded-lg">
                  <div className="font-medium text-blue-900">Short Distance</div>
                  <div className="text-blue-600">₹40-80</div>
                </div>
                <div className="bg-green-50 p-3 rounded-lg">
                  <div className="font-medium text-green-900">Medium Distance</div>
                  <div className="text-green-600">₹80-150</div>
                </div>
                <div className="bg-orange-50 p-3 rounded-lg">
                  <div className="font-medium text-orange-900">Long Distance</div>
                  <div className="text-orange-600">₹150-300</div>
                </div>
                <div className="bg-purple-50 p-3 rounded-lg">
                  <div className="font-medium text-purple-900">Airport/Outstation</div>
                  <div className="text-purple-600">₹300+</div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Booking;