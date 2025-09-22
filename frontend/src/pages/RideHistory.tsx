import React, { useState } from 'react';
import { Calendar, MapPin, Star, Car, Clock, Filter, Download } from 'lucide-react';

interface RideHistoryProps {
  onNavigate: (page: string) => void;
}

const RideHistory: React.FC<RideHistoryProps> = ({ onNavigate }) => {
  const [filter, setFilter] = useState('all');
  
  const rides = [
    {
      id: 1,
      date: '2024-01-20',
      time: '09:30 AM',
      from: 'Andheri East',
      to: 'Powai',
      driver: 'Raj Kumar',
      vehicle: 'Maruti Swift Dzire',
      fare: 145,
      rating: 5,
      status: 'completed',
      duration: '18 mins',
      distance: '8.5 km'
    },
    {
      id: 2,
      date: '2024-01-19',
      time: '07:15 PM',
      from: 'Colaba',
      to: 'Worli',
      driver: 'Priya Sharma',
      vehicle: 'Hyundai i20',
      fare: 95,
      rating: 4,
      status: 'completed',
      duration: '15 mins',
      distance: '6.2 km'
    },
    {
      id: 3,
      date: '2024-01-18',
      time: '02:45 PM',
      from: 'Thane',
      to: 'Ghatkopar',
      driver: 'Vikash Singh',
      vehicle: 'Tata Nexon',
      fare: 285,
      rating: 5,
      status: 'completed',
      duration: '35 mins',
      distance: '18 km'
    },
    {
      id: 4,
      date: '2024-01-17',
      time: '11:20 AM',
      from: 'Malad West',
      to: 'Borivali',
      driver: 'Suresh Patel',
      vehicle: 'Maruti Wagon R',
      fare: 125,
      rating: 3,
      status: 'completed',
      duration: '22 mins',
      distance: '11 km'
    },
    {
      id: 5,
      date: '2024-01-16',
      time: '06:30 PM',
      from: 'Juhu',
      to: 'Santa Cruz',
      driver: 'Amit Joshi',
      vehicle: 'Honda City',
      fare: 75,
      rating: 5,
      status: 'completed',
      duration: '12 mins',
      distance: '5 km'
    },
    {
      id: 6,
      date: '2024-01-15',
      time: '03:20 PM',
      from: 'Dadar',
      to: 'Lower Parel',
      driver: 'Neha Gupta',
      vehicle: 'Maruti Baleno',
      fare: 85,
      rating: 4,
      status: 'completed',
      duration: '16 mins',
      distance: '7 km'
    },
    {
      id: 7,
      date: '2024-01-14',
      time: '08:45 AM',
      from: 'Kurla',
      to: 'Vikhroli',
      driver: 'Ravi Sharma',
      vehicle: 'Hyundai Creta',
      fare: 115,
      rating: 5,
      status: 'completed',
      duration: '20 mins',
      distance: '9 km'
    },
    {
      id: 8,
      date: '2024-01-13',
      time: '05:10 PM',
      from: 'Chembur',
      to: 'Navi Mumbai',
      driver: 'Kavita Patel',
      vehicle: 'Tata Tiago',
      fare: 195,
      rating: 4,
      status: 'completed',
      duration: '28 mins',
      distance: '15 km'
    }
  ];

  const stats = [
    { label: 'Total Rides', value: '52' },
    { label: 'Total Spent', value: '₹9,240' },
    { label: 'Average Rating', value: '4.8' },
    { label: 'Total Distance', value: '1,385 km' }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Ride History</h1>
          <p className="text-gray-600">Track all your rides and journey details</p>
        </div>
        <div className="flex gap-3">
          <button className="flex items-center bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg font-medium transition-colors">
            <Download className="h-4 w-4 mr-2" />
            Export
          </button>
          <button 
            onClick={() => onNavigate('booking')}
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium transition-colors"
          >
            Book New Ride
          </button>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {stats.map((stat, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md p-4 text-center">
            <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
            <div className="text-sm text-gray-600">{stat.label}</div>
          </div>
        ))}
      </div>

      {/* Filters */}
      <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Filter className="h-5 w-5 text-gray-500" />
            <select
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
              className="border border-gray-300 rounded-lg px-3 py-2 text-sm"
            >
              <option value="all">All Rides</option>
              <option value="completed">Completed</option>
              <option value="cancelled">Cancelled</option>
              <option value="this-week">This Week</option>
              <option value="this-month">This Month</option>
            </select>
          </div>
          <div className="text-sm text-gray-600">
            Showing {rides.length} rides
          </div>
        </div>
      </div>

      {/* Ride List */}
      <div className="space-y-4">
        {rides.map((ride) => (
          <div key={ride.id} className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow">
            <div className="p-6">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="bg-blue-100 rounded-full p-2">
                    <Car className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">
                      {ride.from} → {ride.to}
                    </div>
                    <div className="flex items-center text-sm text-gray-600 mt-1">
                      <Calendar className="h-4 w-4 mr-1" />
                      <span>{new Date(ride.date).toLocaleDateString()} at {ride.time}</span>
                      <span className="mx-2">•</span>
                      <Clock className="h-4 w-4 mr-1" />
                      <span>{ride.duration}</span>
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-gray-900">₹{ride.fare}</div>
                  <div className="flex items-center justify-end">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 ${
                          i < ride.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-4 text-sm">
                <div>
                  <div className="text-gray-600 mb-1">Driver</div>
                  <div className="font-medium text-gray-900">{ride.driver}</div>
                </div>
                <div>
                  <div className="text-gray-600 mb-1">Vehicle</div>
                  <div className="font-medium text-gray-900">{ride.vehicle}</div>
                </div>
                <div>
                  <div className="text-gray-600 mb-1">Distance</div>
                  <div className="font-medium text-gray-900">{ride.distance}</div>
                </div>
              </div>

              <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-200">
                <div className="flex items-center gap-2">
                  <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-medium">
                    {ride.status}
                  </span>
                </div>
                <div className="flex gap-2">
                  <button className="text-blue-600 hover:text-blue-700 font-medium text-sm">
                    View Details
                  </button>
                  <span className="text-gray-300">•</span>
                  <button 
                    onClick={() => onNavigate('booking')}
                    className="text-blue-600 hover:text-blue-700 font-medium text-sm"
                  >
                    Book Again
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Load More */}
      <div className="text-center mt-8">
        <button className="bg-gray-200 hover:bg-gray-300 text-gray-700 px-6 py-3 rounded-lg font-medium transition-colors">
          Load More Rides
        </button>
      </div>
    </div>
  );
};

export default RideHistory;