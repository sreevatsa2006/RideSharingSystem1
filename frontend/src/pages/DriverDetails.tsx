import React, { useState } from 'react';
import { Star, Car, Shield, Clock, Phone, MessageCircle, ArrowLeft, MapPin, Users, Award, Fuel } from 'lucide-react';

interface DriverDetailsProps {
  driver: any;
  onNavigate: (page: string) => void;
}

const DriverDetails: React.FC<DriverDetailsProps> = ({ driver, onNavigate }) => {
  const [showBookingConfirm, setShowBookingConfirm] = useState(false);

  if (!driver) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Driver Not Selected</h2>
          <button
            onClick={() => onNavigate('booking')}
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold"
          >
            Back to Booking
          </button>
        </div>
      </div>
    );
  }

  const reviews = [
    {
      name: 'Anita Patel',
      rating: 5,
      comment: 'Excellent driver! Very punctual and safe driving. The car was clean and comfortable.',
      date: '2 days ago'
    },
    {
      name: 'Rohit Mehta',
      rating: 5,
      comment: 'Great experience. Professional behavior and knew all the shortcuts in the city.',
      date: '1 week ago'
    },
    {
      name: 'Sunita Gupta',
      rating: 4,
      comment: 'Good service overall. The vehicle was in excellent condition.',
      date: '2 weeks ago'
    }
  ];

  const handleConfirmBooking = () => {
    setShowBookingConfirm(true);
    setTimeout(() => {
      onNavigate('ride-history');
    }, 2000);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <div className="flex items-center mb-6">
        <button
          onClick={() => onNavigate('booking')}
          className="mr-4 p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors"
        >
          <ArrowLeft className="h-6 w-6" />
        </button>
        <h1 className="text-2xl font-bold text-gray-900">Driver Details</h1>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Driver Profile */}
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex items-start gap-6">
              <img
                src={driver.image}
                alt={driver.name}
                className="w-24 h-24 rounded-full object-cover"
              />
              <div className="flex-1">
                <div className="flex items-center justify-between mb-2">
                  <h2 className="text-2xl font-bold text-gray-900">{driver.name}</h2>
                  <div className="flex items-center bg-green-100 text-green-800 px-3 py-1 rounded-full">
                    <Shield className="h-4 w-4 mr-1" />
                    <span className="text-sm font-medium">Verified</span>
                  </div>
                </div>
                
                <div className="flex items-center gap-6 text-sm text-gray-600 mb-4">
                  <div className="flex items-center">
                    <Star className="h-4 w-4 text-yellow-400 mr-1" />
                    <span className="font-medium">{driver.rating}</span>
                    <span className="ml-1">({driver.rides} rides)</span>
                  </div>
                  <div className="flex items-center">
                    <Award className="h-4 w-4 mr-1" />
                    <span>{driver.experience} experience</span>
                  </div>
                </div>

                <div className="flex gap-3">
                  <button className="flex items-center bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg font-medium transition-colors">
                    <Phone className="h-4 w-4 mr-2" />
                    Call
                  </button>
                  <button className="flex items-center bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium transition-colors">
                    <MessageCircle className="h-4 w-4 mr-2" />
                    Message
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Vehicle Details */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
              <Car className="h-6 w-6 mr-2 text-blue-600" />
              Vehicle Information
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600">Model</span>
                  <span className="font-medium">{driver.vehicle.model}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Color</span>
                  <span className="font-medium">{driver.vehicle.color}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Year</span>
                  <span className="font-medium">{driver.vehicle.year}</span>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600">Number</span>
                  <span className="font-mono font-medium">{driver.vehicle.number}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Fuel Type</span>
                  <div className="flex items-center">
                    <Fuel className="h-4 w-4 mr-1 text-green-500" />
                    <span className="font-medium">{driver.vehicle.fuel}</span>
                  </div>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Seats</span>
                  <div className="flex items-center">
                    <Users className="h-4 w-4 mr-1 text-blue-500" />
                    <span className="font-medium">4 passengers</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Reviews */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Recent Reviews</h3>
            <div className="space-y-4">
              {reviews.map((review, index) => (
                <div key={index} className="border-b border-gray-200 pb-4 last:border-b-0 last:pb-0">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center">
                      <span className="font-medium text-gray-900">{review.name}</span>
                      <div className="flex items-center ml-2">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`h-4 w-4 ${
                              i < review.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
                            }`}
                          />
                        ))}
                      </div>
                    </div>
                    <span className="text-sm text-gray-500">{review.date}</span>
                  </div>
                  <p className="text-gray-600 text-sm">{review.comment}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Booking Panel */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-xl shadow-lg p-6 sticky top-24">
            <div className="mb-6">
              <div className="bg-gray-50 rounded-lg p-4 mb-4">
                <div className="flex items-center text-gray-700 mb-2">
                  <MapPin className="h-4 w-4 text-green-500 mr-2" />
                  <span className="text-sm font-medium">From: Andheri East</span>
                </div>
                <div className="flex items-center text-gray-700 mb-2">
                  <MapPin className="h-4 w-4 text-red-500 mr-2" />
                  <span className="text-sm font-medium">To: Powai</span>
                </div>
                <div className="text-xs text-gray-500 mt-2">
                  Distance: ~8.5 km • Estimated time: 18-25 mins
                </div>
              </div>
              <div className="flex items-center text-gray-600">
                <Clock className="h-4 w-4 mr-2" />
                <span className="text-sm">ETA: {driver.eta}</span>
              </div>
            </div>

            <div className="space-y-4 mb-6">
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Base Fare</span>
                <span className="font-medium">₹{driver.price}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Platform Fee</span>
                <span className="font-medium">₹20</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-green-600">Coin Discount</span>
                <span className="font-medium text-green-600">-₹15</span>
              </div>
              <div className="border-t border-gray-200 pt-4">
                <div className="flex justify-between items-center">
                  <span className="text-lg font-semibold">Total</span>
                  <span className="text-2xl font-bold text-blue-600">₹{driver.price + 20 - 15}</span>
                </div>
              </div>
            </div>

            <button
              onClick={handleConfirmBooking}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition-colors duration-200"
            >
              Confirm Booking
            </button>

            <div className="mt-4 text-center">
              <button 
                onClick={() => onNavigate('offers')}
                className="text-sm text-blue-600 hover:text-blue-700"
              >
                View available offers
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Booking Confirmation Modal */}
      {showBookingConfirm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl p-8 max-w-md mx-4">
            <div className="text-center">
              <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Booking Confirmed!</h3>
              <p className="text-gray-600 mb-4">
                Your ride has been booked successfully. {driver.name} will arrive in {driver.eta}.
              </p>
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto"></div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DriverDetails;