import React from 'react';
import { Car, Shield, Clock, Star, ArrowRight, MapPin, Users, Gift } from 'lucide-react';

interface LandingProps {
  onNavigate: (page: string) => void;
}

const Landing: React.FC<LandingProps> = ({ onNavigate }) => {
  const features = [
    {
      icon: Car,
      title: 'Quality Vehicles',
      description: 'Well-maintained Indian cars for comfortable rides',
    },
    {
      icon: Shield,
      title: 'Safe & Secure',
      description: 'Verified drivers and real-time safety tracking',
    },
    {
      icon: Clock,
      title: 'Quick Booking',
      description: 'Find rides in minutes with our smart matching',
    },
    {
      icon: Gift,
      title: 'Reward Coins',
      description: 'Earn coins on every ride and get amazing offers',
    },
  ];

  const stats = [
    { label: 'Happy Customers', value: '50K+' },
    { label: 'Cities Covered', value: '25+' },
    { label: 'Daily Rides', value: '1000+' },
    { label: 'Verified Drivers', value: '5K+' },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
                Your Ride,
                <span className="text-orange-400"> Your Way</span>
              </h1>
              <p className="text-xl mb-8 text-blue-100 leading-relaxed">
                Connect with trusted drivers across India. Safe, affordable, and convenient rides at your fingertips.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <button
                  onClick={() => onNavigate('booking')}
                  className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center"
                >
                  Book Your Ride
                  <ArrowRight className="ml-2 h-5 w-5" />
                </button>
                <button
                  onClick={() => onNavigate('offers')}
                  className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 flex items-center justify-center"
                >
                  View Offers
                  <Gift className="ml-2 h-5 w-5" />
                </button>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white rounded-2xl p-6 shadow-2xl">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    <MapPin className="h-5 w-5 text-green-500 mr-2" />
                    <span className="text-gray-700 font-medium">Andheri East</span>
                  </div>
                  <div className="text-2xl font-bold text-gray-900">₹145</div>
                </div>
                <div className="flex items-center mb-4">
                  <div className="flex-1 border-t-2 border-dashed border-gray-300"></div>
                  <Car className="mx-2 h-6 w-6 text-blue-600" />
                  <div className="flex-1 border-t-2 border-dashed border-gray-300"></div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <MapPin className="h-5 w-5 text-red-500 mr-2" />
                    <span className="text-gray-700 font-medium">Powai</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-500">
                    <Clock className="h-4 w-4 mr-1" />
                    <span>18 mins</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Why Choose RideShare India?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience the best of Indian ride-sharing with our premium features and services
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div 
                  key={index}
                  className="text-center p-6 rounded-xl bg-gray-50 hover:bg-white hover:shadow-lg transition-all duration-300 cursor-pointer"
                  onClick={() => onNavigate('booking')}
                >
                  <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-blue-600 mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-orange-500 to-red-500 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Ready to Start Your Journey?
          </h2>
          <p className="text-xl mb-8 text-orange-100">
            Join thousands of satisfied customers across India
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => onNavigate('booking')}
              className="bg-white text-orange-500 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Book Now
            </button>
            <button
              onClick={() => onNavigate('profile')}
              className="border-2 border-white text-white hover:bg-white hover:text-orange-500 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300"
            >
              Create Account
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Landing;