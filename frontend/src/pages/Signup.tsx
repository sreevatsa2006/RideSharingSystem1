import React, { useState } from 'react';
import axios from 'axios';
import { Car } from 'lucide-react';

interface SignupProps {
  onSignupSuccess: () => void;
  onLogin: () => void;
}

const Signup: React.FC<SignupProps> = ({ onSignupSuccess, onLogin }) => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    try {
      const response = await axios.post('http://localhost:9090/api/signup', {
        username,
        email,
        password,
      });
      // Accept any 2xx status code as success for more robust handling
      if (response.status >= 200 && response.status < 300) {
        onSignupSuccess();
      }
    } catch (err: any) {
      setError(err.response?.data?.error || 'Signup failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-700 via-blue-400 to-orange-300 relative overflow-hidden"
      style={{
        backgroundImage:
          'url(https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1500&q=80)', // Modern ride-sharing themed image
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Overlay for glassmorphism effect */}
      <div className="absolute inset-0 bg-black bg-opacity-40 z-0 transition-all duration-700" />
      <div className="relative z-10 w-full max-w-md">
        <div className="bg-white/60 backdrop-blur-xl border border-gray-200 p-10 rounded-2xl shadow-2xl animate-fade-in-up" style={{ boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)', border: '1px solid rgba(255,255,255,0.18)' }}>
          <div className="flex justify-center mb-6">
            <Car className="h-16 w-16 text-blue-600 animate-bounce" />
          </div>
          <h2 className="text-3xl font-extrabold mb-6 text-center text-blue-700 drop-shadow-lg transition-all duration-500">Create Your Account</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            {error && <div className="text-red-600 text-sm mb-2">{error}</div>}
            <div>
              <label className="block text-sm font-medium mb-2 text-blue-700">Username</label>
              <input
                type="text"
                value={username}
                onChange={e => setUsername(e.target.value)}
                required
                className="w-full px-4 py-3 border border-blue-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                style={{ cursor: 'url("https://cdn.jsdelivr.net/npm/lucide-static/icons/car.svg"), auto' }}
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2 text-blue-700">Email</label>
              <input
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                required
                className="w-full px-4 py-3 border border-blue-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                style={{ cursor: 'url("https://cdn.jsdelivr.net/npm/lucide-static/icons/car.svg"), auto' }}
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2 text-blue-700">Password</label>
              <input
                type="password"
                value={password}
                onChange={e => setPassword(e.target.value)}
                required
                className="w-full px-4 py-3 border border-blue-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                style={{ cursor: 'url("https://cdn.jsdelivr.net/npm/lucide-static/icons/car.svg"), auto' }}
              />
            </div>
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-600 to-orange-400 hover:from-blue-700 hover:to-orange-500 text-white px-6 py-3 rounded-lg font-bold shadow-lg transition-all duration-300"
              disabled={loading}
              style={{ cursor: 'url("https://cdn.jsdelivr.net/npm/lucide-static/icons/car.svg"), auto' }}
            >
              {loading ? (
                <span className="flex items-center justify-center gap-2">
                  <Car className="h-5 w-5 animate-spin" /> Signing Up...
                </span>
              ) : (
                <span className="flex items-center justify-center gap-2">
                  <Car className="h-5 w-5" /> Sign Up
                </span>
              )}
            </button>
          </form>
          <div className="mt-6 text-center">
            <span className="text-gray-700">Already have an account?</span>
            <button
              onClick={onLogin}
              className="ml-2 text-blue-600 hover:text-orange-500 font-bold transition-colors duration-300"
              style={{ cursor: 'url("https://cdn.jsdelivr.net/npm/lucide-static/icons/car.svg"), auto' }}
            >
              Login
            </button>
          </div>
        </div>
      </div>
      {/* Animation keyframes */}
      <style>{`
        @keyframes fade-in-up {
          0% { opacity: 0; transform: translateY(40px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up {
          animation: fade-in-up 1s cubic-bezier(0.23, 1, 0.32, 1);
        }
      `}</style>
    </div>
  );
};

export default Signup;
