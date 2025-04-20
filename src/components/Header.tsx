import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Heart, Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <Heart className="h-6 w-6 fill-blue-600 stroke-blue-600 mr-2" />
            <Link to="/" className="text-xl font-bold text-gray-800">InVitro HealthCare</Link>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-600 hover:fill-blue-600 ">Find Doctors</Link>
            <Link to="/appointments" className="text-gray-600 hover:fill-blue-600 ">My Appointments</Link>
            <div className="relative">
              <button 
                onClick={toggleMenu}
                className="flex items-center text-gray-600 hover:fill-blue-600 "
              >
                <img 
                  src="/profile-placeholder.jpg" 
                  alt="Profile" 
                  className="h-8 w-8 rounded-full object-cover mr-2" 
                  onError={(e) => {
                    e.currentTarget.src = "assets/profile.png";
                  }}
                />
                <Link to="/profile" className="text-gray-600 hover:fill-blue-600 ">Profile</Link>
                {/* <span>Profile</span> */}
              </button>
            </div>
          </nav>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button 
              onClick={toggleMenu}
              className="flex items-center text-gray-600 hover:fill-blue-600 "
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <>
                  <img 
                    src="/profile-placeholder.jpg" 
                    alt="Profile" 
                    className="h-8 w-8 rounded-full object-cover mr-2" 
                    onError={(e) => {
                      e.currentTarget.src = "assets/profile.png";
                    }}
                  />
                  <Menu className="h-6 w-6" />
                </>
              )}
            </button>
          </div>
        </div>
        
        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 space-y-4">
            <Link 
              to="/" 
              className="block text-gray-600 hover:fill-blue-600 py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Find Doctors
            </Link>
            <Link 
              to="/appointments" 
              className="block text-gray-600 hover:fill-blue-600 py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              My Appointments
            </Link>
            <Link 
              to="/profile" 
              className="block text-gray-600 hover:fill-blue-600 py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Profile
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;