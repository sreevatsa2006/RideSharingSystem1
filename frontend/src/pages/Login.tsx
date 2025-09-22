import React, { useState } from 'react';
import axios from 'axios';
import { Car } from 'lucide-react';

interface LoginProps {
  onLogin: () => void;
  onSignup: () => void;
}

const Login: React.FC<LoginProps> = ({ onLogin, onSignup }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    try {
      const response = await axios.post('http://localhost:9090/api/login', {
        username,
        password,
      });
      if (response.data && response.data.message === 'Login successful') {
        onLogin();
      } else {
        setError('Invalid username or password');
      }
    } catch (err: any) {
      setError(err.response?.data?.error || 'Login failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="min-h-screen flex items-center justify-end pr-24 relative overflow-hidden"
      style={{
        backgroundImage:
          'url(https://cdn-s3.autocarindia.com/BMW/m8-competition/P90448637_highRes_bmw-m8-competition-g.jpg?w=640&q=75)', // BMW M8 from Autocar India
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="relative z-10 w-full max-w-md">
        <div className="bg-white/60 backdrop-blur-xl border border-gray-200 p-10 rounded-2xl shadow-2xl animate-fade-in-up" style={{ boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)', border: '1px solid rgba(255,255,255,0.18)' }}>
          <div className="flex flex-col items-center mb-6">
            <Car className="h-16 w-16 text-blue-600 animate-bounce mb-2" />
            <h1 className="text-4xl font-extrabold text-blue-700 drop-shadow-lg mb-2">Indian Ride Sharing Platform</h1>
            <p className="text-base text-gray-700 text-center mb-2 font-medium">Secure login for your rides, rewards, and history. Enjoy premium cars, trusted drivers, and exclusive offers.</p>
          </div>
          <h2 className="text-3xl font-extrabold mb-4 text-center text-blue-700 drop-shadow-lg transition-all duration-500">Welcome Back!</h2>
          <p className="text-center text-gray-600 mb-6">Sign in to continue your journey with us.</p>
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
                  <Car className="h-5 w-5 animate-spin" /> Logging in...
                </span>
              ) : (
                <span className="flex items-center justify-center gap-2">
                  <Car className="h-5 w-5" /> Login
                </span>
              )}
            </button>
          </form>
          <div className="mt-6 text-center">
            <span className="text-gray-700">Don't have an account?</span>
            <button
              onClick={onSignup}
              className="ml-2 text-blue-600 hover:text-orange-500 font-bold transition-colors duration-300"
              style={{ cursor: 'url("https://cdn.jsdelivr.net/npm/lucide-static/icons/car.svg"), auto' }}
            >
              Sign Up
            </button>
          </div>
        </div>
        {/* Banner image removed for a cleaner look */}
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

export default Login;
