import React, { useState } from 'react';
import { Wallet as WalletIcon, Plus, ArrowUpRight, ArrowDownLeft, Gift, CreditCard, Smartphone, Building } from 'lucide-react';

interface WalletProps {
  onNavigate: (page: string) => void;
}

const Wallet: React.FC<WalletProps> = ({ onNavigate }) => {
  const [activeTab, setActiveTab] = useState('balance');
  const [showAddMoney, setShowAddMoney] = useState(false);

  const transactions = [
    {
      id: 1,
      type: 'debit',
      description: 'Ride from Andheri East to Powai',
      amount: 145,
      date: '2024-01-20',
      time: '09:30 AM',
      status: 'completed'
    },
    {
      id: 2,
      type: 'credit',
      description: 'Coins converted to wallet balance',
      amount: 50,
      date: '2024-01-20',
      time: '08:15 AM',
      status: 'completed'
    },
    {
      id: 3,
      type: 'credit',
      description: 'Wallet top-up',
      amount: 500,
      date: '2024-01-19',
      time: '06:45 PM',
      status: 'completed'
    },
    {
      id: 4,
      type: 'debit',
      description: 'Ride from Colaba to Worli',
      amount: 95,
      date: '2024-01-19',
      time: '07:15 PM',
      status: 'completed'
    },
    {
      id: 5,
      type: 'debit',
      description: 'Ride from Thane to Ghatkopar',
      amount: 285,
      date: '2024-01-18',
      time: '02:45 PM',
      status: 'completed'
    },
    {
      id: 6,
      type: 'credit',
      description: 'Referral bonus - Friend joined',
      amount: 100,
      date: '2024-01-18',
      time: '11:30 AM',
      status: 'completed'
    }
  ];

  const paymentMethods = [
    { id: 1, type: 'card', name: 'Credit Card', detail: '**** 1234', icon: CreditCard },
    { id: 2, type: 'upi', name: 'UPI', detail: 'amit@paytm', icon: Smartphone },
    { id: 3, type: 'netbanking', name: 'Net Banking', detail: 'HDFC Bank', icon: Building }
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">My Wallet</h1>
          <p className="text-gray-600">Manage your balance and transactions</p>
        </div>
        <button 
          onClick={() => onNavigate('offers')}
          className="flex items-center bg-orange-600 hover:bg-orange-700 text-white px-4 py-2 rounded-lg font-medium transition-colors"
        >
          <Gift className="h-4 w-4 mr-2" />
          View Offers
        </button>
      </div>

      {/* Wallet Balance Card */}
      <div className="bg-gradient-to-br from-blue-600 to-blue-800 text-white rounded-xl p-8 mb-8">
        <div className="flex items-center justify-between">
          <div>
            <div className="flex items-center mb-4">
              <WalletIcon className="h-8 w-8 mr-3" />
              <span className="text-xl font-semibold">Wallet Balance</span>
            </div>
            <div className="text-4xl font-bold mb-2">₹742.50</div>
            <div className="text-blue-200">Available for rides</div>
          </div>
          <div className="text-right">
            <div className="bg-white/20 rounded-full p-3 mb-4">
              <Gift className="h-8 w-8" />
            </div>
            <div className="text-lg font-semibold">500 Coins</div>
            <div className="text-blue-200 text-sm">Worth ₹250</div>
          </div>
        </div>
        
        <div className="flex gap-3 mt-6">
          <button 
            onClick={() => setShowAddMoney(true)}
            className="bg-white text-blue-600 hover:bg-gray-100 px-6 py-3 rounded-lg font-semibold transition-colors flex items-center"
          >
            <Plus className="h-5 w-5 mr-2" />
            Add Money
          </button>
          <button 
            onClick={() => onNavigate('booking')}
            className="border border-white text-white hover:bg-white/10 px-6 py-3 rounded-lg font-semibold transition-colors"
          >
            Book Ride
          </button>
        </div>
      </div>

      {/* Coins Section */}
      <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white rounded-xl p-6 mb-8">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-xl font-semibold mb-2">Reward Coins</h3>
            <div className="text-3xl font-bold mb-1">500 Coins</div>
            <p className="text-yellow-100">Convert to ₹250 wallet balance</p>
          </div>
          <button className="bg-white text-orange-500 hover:bg-gray-100 px-4 py-2 rounded-lg font-medium transition-colors">
            Convert
          </button>
        </div>
      </div>

      {/* Tab Navigation */}
      <div className="bg-white rounded-xl shadow-lg overflow-hidden">
        <div className="border-b border-gray-200">
          <nav className="flex">
            {['balance', 'transactions', 'payment-methods'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-3 font-medium text-sm capitalize transition-colors ${
                  activeTab === tab
                    ? 'border-b-2 border-blue-600 text-blue-600 bg-blue-50'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                }`}
              >
                {tab.replace('-', ' ')}
              </button>
            ))}
          </nav>
        </div>

        <div className="p-6">
          {activeTab === 'balance' && (
            <div className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-green-50 rounded-lg p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-sm text-green-600 mb-1">Total Earned</div>
                      <div className="text-xl font-bold text-green-700">₹2,450</div>
                    </div>
                    <ArrowDownLeft className="h-6 w-6 text-green-600" />
                  </div>
                </div>
                
                <div className="bg-red-50 rounded-lg p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-sm text-red-600 mb-1">Total Spent</div>
                      <div className="text-xl font-bold text-red-700">₹1,707</div>
                    </div>
                    <ArrowUpRight className="h-6 w-6 text-red-600" />
                  </div>
                </div>
                
                <div className="bg-blue-50 rounded-lg p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-sm text-blue-600 mb-1">This Month</div>
                      <div className="text-xl font-bold text-blue-700">₹458</div>
                    </div>
                    <WalletIcon className="h-6 w-6 text-blue-600" />
                  </div>
                </div>
              </div>

              <div className="text-center py-8">
                <WalletIcon className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Manage Your Balance</h3>
                <p className="text-gray-600 mb-4">Add money to your wallet for quick and easy payments</p>
                <button 
                  onClick={() => setShowAddMoney(true)}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
                >
                  Add Money Now
                </button>
              </div>
            </div>
          )}

          {activeTab === 'transactions' && (
            <div>
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-semibold text-gray-900">Recent Transactions</h3>
                <select className="border border-gray-300 rounded-lg px-3 py-2 text-sm">
                  <option>All Transactions</option>
                  <option>Credits Only</option>
                  <option>Debits Only</option>
                </select>
              </div>

              <div className="space-y-4">
                {transactions.map((transaction) => (
                  <div key={transaction.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                    <div className="flex items-center">
                      <div className={`p-2 rounded-full mr-4 ${
                        transaction.type === 'credit' ? 'bg-green-100' : 'bg-red-100'
                      }`}>
                        {transaction.type === 'credit' ? (
                          <ArrowDownLeft className="h-5 w-5 text-green-600" />
                        ) : (
                          <ArrowUpRight className="h-5 w-5 text-red-600" />
                        )}
                      </div>
                      <div>
                        <div className="font-medium text-gray-900">{transaction.description}</div>
                        <div className="text-sm text-gray-600">
                          {new Date(transaction.date).toLocaleDateString()} at {transaction.time}
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className={`text-lg font-semibold ${
                        transaction.type === 'credit' ? 'text-green-600' : 'text-red-600'
                      }`}>
                        {transaction.type === 'credit' ? '+' : '-'}₹{transaction.amount}
                      </div>
                      <div className="text-sm text-gray-500 capitalize">{transaction.status}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'payment-methods' && (
            <div>
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-semibold text-gray-900">Payment Methods</h3>
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium transition-colors">
                  Add New
                </button>
              </div>

              <div className="space-y-4">
                {paymentMethods.map((method) => {
                  const Icon = method.icon;
                  return (
                    <div key={method.id} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:bg-gray-50">
                      <div className="flex items-center">
                        <div className="bg-blue-100 p-2 rounded-lg mr-4">
                          <Icon className="h-5 w-5 text-blue-600" />
                        </div>
                        <div>
                          <div className="font-medium text-gray-900">{method.name}</div>
                          <div className="text-sm text-gray-600">{method.detail}</div>
                        </div>
                      </div>
                      <button className="text-blue-600 hover:text-blue-700 font-medium">
                        Edit
                      </button>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Add Money Modal */}
      {showAddMoney && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl p-8 max-w-md mx-4 w-full">
            <h3 className="text-xl font-semibold text-gray-900 mb-6">Add Money to Wallet</h3>
            
            <div className="space-y-4 mb-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Amount
                </label>
                <input
                  type="number"
                  placeholder="Enter amount"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              
              <div className="flex gap-2">
                {[100, 200, 500, 1000].map((amount) => (
                  <button
                    key={amount}
                    className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 text-sm"
                  >
                    ₹{amount}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex gap-3">
              <button
                onClick={() => setShowAddMoney(false)}
                className="flex-1 bg-gray-200 hover:bg-gray-300 text-gray-700 py-3 rounded-lg font-medium transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={() => setShowAddMoney(false)}
                className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-medium transition-colors"
              >
                Add Money
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Wallet;