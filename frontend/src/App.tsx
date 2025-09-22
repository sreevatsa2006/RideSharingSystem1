import React, { useState } from 'react';
import Navigation from './components/Navigation';
import Landing from './pages/Landing';
import Booking from './pages/Booking';
import Profile from './pages/Profile';
import DriverDetails from './pages/DriverDetails';
import Offers from './pages/Offers';
import RideHistory from './pages/RideHistory';
import Wallet from './pages/Wallet';
import Login from './pages/Login';
import Signup from './pages/Signup';

function App() {
  const [currentPage, setCurrentPage] = useState('landing');
  const [selectedDriver, setSelectedDriver] = useState(null);
  const [authPage, setAuthPage] = useState<'login' | 'signup' | 'app'>('login');

  const handleLogin = () => setAuthPage('app');
  const handleSignup = () => setAuthPage('signup');
  const handleSignupSuccess = () => setAuthPage('login');

  const renderPage = () => {
    switch (currentPage) {
      case 'landing':
        return <Landing onNavigate={setCurrentPage} />;
      case 'booking':
        return <Booking onNavigate={setCurrentPage} onSelectDriver={setSelectedDriver} />;
      case 'profile':
        return <Profile onNavigate={setCurrentPage} />;
      case 'driver-details':
        return <DriverDetails driver={selectedDriver} onNavigate={setCurrentPage} />;
      case 'offers':
        return <Offers onNavigate={setCurrentPage} />;
      case 'ride-history':
        return <RideHistory onNavigate={setCurrentPage} />;
      case 'wallet':
        return <Wallet onNavigate={setCurrentPage} />;
      default:
        return <Landing onNavigate={setCurrentPage} />;
    }
  };

  if (authPage === 'login') {
    return <Login onLogin={handleLogin} onSignup={handleSignup} />;
  }
  if (authPage === 'signup') {
    return <Signup onSignupSuccess={handleSignupSuccess} onLogin={() => setAuthPage('login')} />;
  }
  // Main app after login
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation currentPage={currentPage} onNavigate={setCurrentPage} />
      {renderPage()}
    </div>
  );
}

export default App;