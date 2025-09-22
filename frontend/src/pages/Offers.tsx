import React from 'react';
import { Gift, Star, Clock, Percent, Users, Car } from 'lucide-react';

interface OffersProps {
  onNavigate: (page: string) => void;
}

const Offers: React.FC<OffersProps> = ({ onNavigate }) => {
  const offers = [
    {
      id: 1,
      title: 'First Ride Free',
      description: 'Get your first ride absolutely free up to ₹100',
      discount: '100% OFF',
      coins: 0,
      validTill: '31 Dec 2024',
      code: 'FIRST100',
      color: 'from-green-400 to-green-600',
      icon: Gift
    },
    {
      id: 2,
      title: 'Weekend Special',
      description: 'Extra 25% off on weekend rides',
      discount: '25% OFF',
      coins: 150,
      validTill: '31 Dec 2024',
      code: 'WEEKEND25',
      color: 'from-purple-400 to-purple-600',
      icon: Star
    },
    {
      id: 3,
      title: 'Rush Hour Savings',
      description: 'Beat the traffic and save money during peak hours',
      discount: '₹50 OFF',
      coins: 200,
      validTill: '28 Feb 2025',
      code: 'RUSH50',
      color: 'from-orange-400 to-red-500',
      icon: Clock
    },
    {
      id: 4,
      title: 'Student Discount',
      description: 'Special discount for students with valid ID',
      discount: '30% OFF',
      coins: 100,
      validTill: '30 Jun 2025',
      code: 'STUDENT30',
      color: 'from-blue-400 to-blue-600',
      icon: Users
    },
    {
      id: 5,
      title: 'Eco Ride Bonus',
      description: 'Choose electric vehicles and earn extra coins',
      discount: '2X COINS',
      coins: 0,
      validTill: '31 Mar 2025',
      code: 'ECO2X',
      color: 'from-green-500 to-teal-500',
      icon: Car
    },
    {
      id: 6,
      title: 'Refer & Earn',
      description: 'Refer friends and get ₹200 each when they take their first ride',
      discount: '₹200 EACH',
      coins: 0,
      validTill: 'Ongoing',
      code: 'REFER200',
      color: 'from-pink-400 to-rose-500',
      icon: Gift
    }
  ];

  const coinOffers = [
    {
      title: '50 Bonus Coins',
      description: 'Complete 5 rides this week',
      progress: 60,
      total: 5,
      current: 3,
      reward: 50
    },
    {
      title: '100 Bonus Coins',
      description: 'Refer 2 new users',
      progress: 25,
      total: 2,
      current: 1,
      reward: 100
    },
    {
      title: '200 Bonus Coins',
      description: 'Take 10 weekend rides',
      progress: 40,
      total: 10,
      current: 4,
      reward: 200
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Exclusive Offers & Rewards</h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Save more on every ride with our amazing deals and earn coins for future discounts
        </p>
      </div>

      {/* Coins Balance */}
      <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white rounded-xl p-6 mb-8">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-xl font-semibold mb-2">Your Coins Balance</h2>
            <div className="text-3xl font-bold">500 Coins</div>
            <p className="text-yellow-100 mt-1">Worth ₹250 in rides</p>
          </div>
          <div className="bg-white/20 rounded-full p-4">
            <Gift className="h-12 w-12 text-white" />
          </div>
        </div>
        <div className="flex gap-3 mt-4">
          <button 
            onClick={() => onNavigate('wallet')}
            className="bg-white text-orange-500 px-4 py-2 rounded-lg font-medium hover:bg-gray-100 transition-colors"
          >
            View Wallet
          </button>
          <button 
            onClick={() => onNavigate('booking')}
            className="border border-white text-white px-4 py-2 rounded-lg font-medium hover:bg-white/10 transition-colors"
          >
            Use Coins
          </button>
        </div>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Available Offers */}
        <div className="lg:col-span-2">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Available Offers</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {offers.map((offer) => {
              const Icon = offer.icon;
              return (
                <div key={offer.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                  <div className={`bg-gradient-to-r ${offer.color} p-4`}>
                    <div className="flex items-center justify-between text-white">
                      <Icon className="h-8 w-8" />
                      <div className="text-right">
                        <div className="text-2xl font-bold">{offer.discount}</div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-4">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{offer.title}</h3>
                    <p className="text-gray-600 text-sm mb-3">{offer.description}</p>
                    
                    <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                      <span>Code: {offer.code}</span>
                      <span>Valid till {offer.validTill}</span>
                    </div>

                    {offer.coins > 0 ? (
                      <div className="flex items-center justify-between">
                        <div className="text-sm text-gray-600">
                          Cost: {offer.coins} coins
                        </div>
                        <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors">
                          Redeem
                        </button>
                      </div>
                    ) : (
                      <button 
                        onClick={() => onNavigate('booking')}
                        className="w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded-lg font-medium transition-colors"
                      >
                        Apply Now
                      </button>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Earn More Coins */}
        <div className="lg:col-span-1">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Earn More Coins</h2>
          <div className="space-y-4">
            {coinOffers.map((offer, index) => (
              <div key={index} className="bg-white rounded-xl shadow-md p-4">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-semibold text-gray-900">{offer.title}</h3>
                  <div className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full text-xs font-medium">
                    +{offer.reward}
                  </div>
                </div>
                
                <p className="text-gray-600 text-sm mb-3">{offer.description}</p>
                
                <div className="mb-2">
                  <div className="flex justify-between text-sm text-gray-600 mb-1">
                    <span>Progress</span>
                    <span>{offer.current}/{offer.total}</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                      style={{ width: `${offer.progress}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-blue-50 rounded-xl p-6 mt-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">How to Earn Coins?</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li className="flex items-center">
                <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                Complete rides to earn 10 coins each
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                Refer friends and get 100 coins
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                Rate your driver 5 stars for bonus coins
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                Use eco-friendly rides for 2x coins
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Offers;