import React, { useState } from 'react';
import { User, Star, MapPin, Phone, Mail, Edit, Camera, Award, Clock, Car } from 'lucide-react';

interface ProfileProps {
  onNavigate: (page: string) => void;
}

const Profile: React.FC<ProfileProps> = ({ onNavigate }) => {

  const [activeTab, setActiveTab] = useState('profile');
  // Profile state
  const [firstName, setFirstName] = useState('Amit');
  const [lastName, setLastName] = useState('Sharma');
  const [email, setEmail] = useState('amit.sharma@email.com');
  const [phone, setPhone] = useState('+91 98765 43210');
  const [address, setAddress] = useState('123 Main Street, Bandra West, Mumbai, Maharashtra 400050');
  // For header display
  const [headerName, setHeaderName] = useState('Amit Sharma');
  const [headerEmail, setHeaderEmail] = useState('amit.sharma@email.com');
  const [headerPhone, setHeaderPhone] = useState('+91 99999 99999');
  const [headerAddress, setHeaderAddress] = useState('Mumbai, Maharashtra');

  const userStats = [
    { label: 'Total Rides', value: '47', icon: Car },
    { label: 'Rating', value: '4.9', icon: Star },
    { label: 'Member Since', value: '2023', icon: Award },
    { label: 'Total Distance', value: '1,240 km', icon: MapPin },
  ];

  // Save handler
  const handleSave = () => {
    setHeaderName(`${firstName} ${lastName}`);
    setHeaderEmail(email);
    setHeaderPhone(phone);
    setHeaderAddress(address.split(',')[1]?.trim() ? address.split(',')[1].trim() : address);
  };

  const handleLogout = () => {
    if (window.confirm('Are you sure to logout? If you logout, you have to sign in again.')) {
      // Clear user session (e.g., localStorage, cookies, etc.)
      localStorage.clear();
      // Redirect to login page
      onNavigate('login');
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Profile Header */}
      <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
        <div className="flex items-center gap-6">
          <div className="relative">
            
            <button className="absolute bottom-0 right-0 bg-blue-600 text-white p-2 rounded-full hover:bg-blue-700 transition-colors">
              <Camera className="h-4 w-4" />
            </button>
          </div>
          
          <div className="flex-1">
            <div className="flex items-center justify-between mb-2">
              <h1 className="text-2xl font-bold text-gray-900">{headerName}</h1>
              <button className="flex items-center text-blue-600 hover:text-blue-700 font-medium">
                <Edit className="h-4 w-4 mr-1" />
                Edit
              </button>
            </div>
            <div className="space-y-2 text-gray-600">
              <div className="flex items-center">
                <Phone className="h-4 w-4 mr-2" />
                <span>{headerPhone}</span>
              </div>
              <div className="flex items-center">
                <Mail className="h-4 w-4 mr-2" />
                <span>{headerEmail}</span>
              </div>
              <div className="flex items-center">
                <MapPin className="h-4 w-4 mr-2" />
                <span>{headerAddress}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        {userStats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <div key={index} className="bg-white rounded-lg shadow-md p-4 text-center">
              <div className="bg-blue-100 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-2">
                <Icon className="h-6 w-6 text-blue-600" />
              </div>
              <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
              <div className="text-sm text-gray-600">{stat.label}</div>
            </div>
          );
        })}
      </div>

      {/* Tab Navigation */}
      <div className="bg-white rounded-xl shadow-lg overflow-hidden">
        <div className="border-b border-gray-200">
          <nav className="flex">
            {['profile', 'preferences', 'security'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-3 font-medium text-sm capitalize transition-colors ${
                  activeTab === tab
                    ? 'border-b-2 border-blue-600 text-blue-600 bg-blue-50'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                }`}
              >
                {tab}
              </button>
            ))}
          </nav>
        </div>

        <div className="p-6">
          {activeTab === 'profile' && (
            <div className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                  <input
                    type="text"
                    value={firstName}
                    onChange={e => setFirstName(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                  <input
                    type="text"
                    value={lastName}
                    onChange={e => setLastName(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                <input
                  type="email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                <input
                  type="tel"
                  value={phone}
                  onChange={e => setPhone(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Address</label>
                <textarea
                  value={address}
                  onChange={e => setAddress(e.target.value)}
                  rows={3}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>
          )}

          {activeTab === 'preferences' && (
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-4">Ride Preferences</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-medium text-gray-900">Music Preference</div>
                      <div className="text-sm text-gray-600">Choose your preferred music genre</div>
                    </div>
                    <select className="border border-gray-300 rounded-lg px-3 py-2">
                      <option>Bollywood</option>
                      <option>Classical</option>
                      <option>No Music</option>
                      <option>English Pop</option>
                    </select>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-medium text-gray-900">Temperature</div>
                      <div className="text-sm text-gray-600">AC temperature preference</div>
                    </div>
                    <select className="border border-gray-300 rounded-lg px-3 py-2">
                      <option>Cool (18-20°C)</option>
                      <option>Moderate (21-23°C)</option>
                      <option>Warm (24-26°C)</option>
                    </select>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-4">Notifications</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-medium text-gray-900">Ride Updates</div>
                      <div className="text-sm text-gray-600">Get notified about ride status</div>
                    </div>
                    <input type="checkbox" defaultChecked className="rounded" />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-medium text-gray-900">Offers & Promotions</div>
                      <div className="text-sm text-gray-600">Receive promotional messages</div>
                    </div>
                    <input type="checkbox" defaultChecked className="rounded" />
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'security' && (
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-4">Account Security</h3>
                <div className="space-y-4">
                  <button className="w-full text-left p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                    <div className="font-medium text-gray-900">Change Password</div>
                    <div className="text-sm text-gray-600 mt-1">Update your account password</div>
                  </button>
                  
                  <button className="w-full text-left p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                    <div className="font-medium text-gray-900">Two-Factor Authentication</div>
                    <div className="text-sm text-gray-600 mt-1">Add an extra layer of security</div>
                  </button>
                  
                  <button className="w-full text-left p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                    <div className="font-medium text-gray-900">Emergency Contacts</div>
                    <div className="text-sm text-gray-600 mt-1">Manage your emergency contacts</div>
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
          <div className="flex gap-3">
            <button
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium transition-colors"
              onClick={handleSave}
            >
              Save Changes
            </button>
            <button 
              onClick={() => onNavigate('wallet')}
              className="bg-gray-200 hover:bg-gray-300 text-gray-700 px-6 py-2 rounded-lg font-medium transition-colors"
            >
              Manage Wallet
            </button>
            <button
              onClick={handleLogout}
              className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-lg font-medium transition-colors"
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;