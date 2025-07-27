import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { 
  MagnifyingGlassIcon, 
  UserIcon, 
  Bars3Icon, 
  XMarkIcon,
  CalendarIcon,
  MapPinIcon,
  CurrencyDollarIcon
} from '@heroicons/react/24/outline';
import { motion, AnimatePresence } from 'framer-motion';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const navigate = useNavigate();

  const categories = [
    'Business & Professional',
    'Charity & Causes',
    'Community & Culture',
    'Esports, Video Games',
    'Family & Education',
    'Fashion & Beauty',
    'Food & Drinks',
    'Health & Wellness',
    'Movies & Cinema',
    'Networking & Conferences',
    'Nightlife, Party & Concert',
    'Performing & Visual Arts',
    'Religion & Spirituality',
    'Science & Technology',
    'Sports',
    'Travel & Outdoor'
  ];

  const locations = [
    'Greater Accra',
    'Kumasi',
    'Ghana',
    'Nigeria',
    'Lagos',
    'Kenya',
    'Uganda',
    'Rwanda'
  ];

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      {/* Top Bar */}
      <div className="bg-primary-600 text-white py-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center space-x-4">
              <span>🇬🇭 Ghana's most trusted event ticketing partner since 2013</span>
            </div>
            <div className="flex items-center space-x-4">
              <span>📱 USSD • WhatsApp • Mobile App</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-primary-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">e</span>
            </div>
            <span className="text-xl font-bold text-gray-900">eGotickets</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/events" className="text-gray-700 hover:text-primary-600 font-medium">
              Discover Events
            </Link>
            <Link to="/create-event" className="text-gray-700 hover:text-primary-600 font-medium">
              Create Event
            </Link>
            <Link to="/pricing" className="text-gray-700 hover:text-primary-600 font-medium">
              Pricing
            </Link>
            <Link to="/partners" className="text-gray-700 hover:text-primary-600 font-medium">
              Partners
            </Link>
          </nav>

          {/* Search Bar */}
          <div className="hidden lg:flex flex-1 max-w-md mx-8">
            <div className="relative w-full">
              <MagnifyingGlassIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search events, categories, or locations..."
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
            </div>
          </div>

          {/* User Actions */}
          <div className="flex items-center space-x-4">
            <button
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className="lg:hidden p-2 text-gray-600 hover:text-primary-600"
            >
              <MagnifyingGlassIcon className="h-6 w-6" />
            </button>
            
            <div className="relative">
              <button
                onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
                className="flex items-center space-x-2 p-2 text-gray-600 hover:text-primary-600 rounded-lg hover:bg-gray-100"
              >
                <UserIcon className="h-6 w-6" />
                <span className="hidden sm:block font-medium">Sign In</span>
              </button>

              <AnimatePresence>
                {isUserMenuOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-2"
                  >
                    <Link
                      to="/login"
                      className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                    >
                      Sign In
                    </Link>
                    <Link
                      to="/register"
                      className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                    >
                      Sign Up
                    </Link>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link to="/create-event" className="btn-primary hidden sm:block">
              Create Event
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 text-gray-600 hover:text-primary-600"
            >
              {isMenuOpen ? (
                <XMarkIcon className="h-6 w-6" />
              ) : (
                <Bars3Icon className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Search */}
        <AnimatePresence>
          {isSearchOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden py-4"
            >
              <div className="relative">
                <MagnifyingGlassIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search events..."
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                />
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden border-t border-gray-200 py-4"
            >
              <nav className="space-y-2">
                <Link
                  to="/events"
                  className="block py-2 text-gray-700 hover:text-primary-600"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Discover Events
                </Link>
                <Link
                  to="/create-event"
                  className="block py-2 text-gray-700 hover:text-primary-600"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Create Event
                </Link>
                <Link
                  to="/pricing"
                  className="block py-2 text-gray-700 hover:text-primary-600"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Pricing
                </Link>
                <Link
                  to="/partners"
                  className="block py-2 text-gray-700 hover:text-primary-600"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Partners
                </Link>
                <div className="pt-4 border-t border-gray-200">
                  <Link
                    to="/login"
                    className="block py-2 text-gray-700 hover:text-primary-600"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Sign In
                  </Link>
                  <Link
                    to="/register"
                    className="block py-2 text-gray-700 hover:text-primary-600"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Sign Up
                  </Link>
                </div>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

export default Header; 