import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  MagnifyingGlassIcon,
  FunnelIcon,
  MapPinIcon,
  CalendarIcon,
  CurrencyDollarIcon,
  StarIcon
} from '@heroicons/react/24/outline';
import EventCard from '../components/EventCard';

const Events = () => {
  const [events, setEvents] = useState([]);
  const [filteredEvents, setFilteredEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedLocation, setSelectedLocation] = useState('');
  const [selectedDate, setSelectedDate] = useState('');
  const [priceRange, setPriceRange] = useState('');
  const [sortBy, setSortBy] = useState('date');
  const [showFilters, setShowFilters] = useState(false);

  const categories = [
    'All Categories',
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
    'All Locations',
    'Greater Accra',
    'Kumasi',
    'Ghana',
    'Nigeria',
    'Lagos',
    'Kenya',
    'Uganda',
    'Rwanda'
  ];

  const priceRanges = [
    'Any Price',
    'Free',
    'Under ₵100',
    '₵100 - ₵500',
    '₵500 - ₵1000',
    'Over ₵1000'
  ];

  // Mock data - in a real app, this would come from an API
  useEffect(() => {
    const mockEvents = [
      {
        id: 1,
        title: "Afro Nation Ghana 2024",
        category: "Nightlife, Party & Concert",
        location: "Greater Accra",
        date: "2024-12-15",
        time: "18:00",
        price: "₵500",
        image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
        organizer: "Afro Nation",
        rating: 4.8,
        soldTickets: 1200,
        totalTickets: 2000
      },
      {
        id: 2,
        title: "Tech Conference 2024",
        category: "Business & Professional",
        location: "Kumasi",
        date: "2024-11-20",
        time: "09:00",
        price: "₵300",
        image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
        organizer: "Tech Ghana",
        rating: 4.9,
        soldTickets: 450,
        totalTickets: 500
      },
      {
        id: 3,
        title: "Food Festival Accra",
        category: "Food & Drinks",
        location: "Greater Accra",
        date: "2024-12-08",
        time: "12:00",
        price: "₵150",
        image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
        organizer: "Food Network Ghana",
        rating: 4.7,
        soldTickets: 800,
        totalTickets: 1000
      },
      {
        id: 4,
        title: "Fashion Week Lagos",
        category: "Fashion & Beauty",
        location: "Lagos",
        date: "2024-11-25",
        time: "19:00",
        price: "₵750",
        image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
        organizer: "Fashion Africa",
        rating: 4.6,
        soldTickets: 300,
        totalTickets: 400
      },
      {
        id: 5,
        title: "Yoga Retreat Weekend",
        category: "Health & Wellness",
        location: "Greater Accra",
        date: "2024-12-01",
        time: "07:00",
        price: "₵200",
        image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2020&q=80",
        organizer: "Wellness Ghana",
        rating: 4.5,
        soldTickets: 150,
        totalTickets: 200
      },
      {
        id: 6,
        title: "Startup Networking Mixer",
        category: "Networking & Conferences",
        location: "Kumasi",
        date: "2024-11-30",
        time: "18:30",
        price: "₵100",
        image: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2080&q=80",
        organizer: "Startup Ghana",
        rating: 4.4,
        soldTickets: 80,
        totalTickets: 120
      }
    ];

    setEvents(mockEvents);
    setFilteredEvents(mockEvents);
    setLoading(false);
  }, []);

  // Filter events based on search criteria
  useEffect(() => {
    let filtered = events;

    if (searchTerm) {
      filtered = filtered.filter(event =>
        event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        event.organizer.toLowerCase().includes(searchTerm.toLowerCase()) ||
        event.category.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (selectedCategory && selectedCategory !== 'All Categories') {
      filtered = filtered.filter(event => event.category === selectedCategory);
    }

    if (selectedLocation && selectedLocation !== 'All Locations') {
      filtered = filtered.filter(event => event.location === selectedLocation);
    }

    if (selectedDate) {
      filtered = filtered.filter(event => event.date === selectedDate);
    }

    if (priceRange && priceRange !== 'Any Price') {
      filtered = filtered.filter(event => {
        const price = parseInt(event.price.replace('₵', ''));
        switch (priceRange) {
          case 'Free':
            return price === 0;
          case 'Under ₵100':
            return price < 100;
          case '₵100 - ₵500':
            return price >= 100 && price <= 500;
          case '₵500 - ₵1000':
            return price >= 500 && price <= 1000;
          case 'Over ₵1000':
            return price > 1000;
          default:
            return true;
        }
      });
    }

    // Sort events
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'date':
          return new Date(a.date) - new Date(b.date);
        case 'price':
          return parseInt(a.price.replace('₵', '')) - parseInt(b.price.replace('₵', ''));
        case 'rating':
          return b.rating - a.rating;
        case 'popularity':
          return b.soldTickets - a.soldTickets;
        default:
          return 0;
      }
    });

    setFilteredEvents(filtered);
  }, [events, searchTerm, selectedCategory, selectedLocation, selectedDate, priceRange, sortBy]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary-600"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Discover Events</h1>
          <p className="text-gray-600">Find amazing events happening near you</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Filters Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-sm p-6 sticky top-24">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-lg font-semibold text-gray-900">Filters</h2>
                <button
                  onClick={() => setShowFilters(!showFilters)}
                  className="lg:hidden p-2 text-gray-600 hover:text-primary-600"
                >
                  <FunnelIcon className="h-5 w-5" />
                </button>
              </div>

              <div className={`space-y-6 ${showFilters ? 'block' : 'hidden lg:block'}`}>
                {/* Search */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Search Events
                  </label>
                  <div className="relative">
                    <MagnifyingGlassIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                    <input
                      type="text"
                      placeholder="Search events..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    />
                  </div>
                </div>

                {/* Category */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Category
                  </label>
                  <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  >
                    {categories.map(category => (
                      <option key={category} value={category}>{category}</option>
                    ))}
                  </select>
                </div>

                {/* Location */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Location
                  </label>
                  <select
                    value={selectedLocation}
                    onChange={(e) => setSelectedLocation(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  >
                    {locations.map(location => (
                      <option key={location} value={location}>{location}</option>
                    ))}
                  </select>
                </div>

                {/* Date */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Date
                  </label>
                  <input
                    type="date"
                    value={selectedDate}
                    onChange={(e) => setSelectedDate(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  />
                </div>

                {/* Price Range */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Price Range
                  </label>
                  <select
                    value={priceRange}
                    onChange={(e) => setPriceRange(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  >
                    {priceRanges.map(range => (
                      <option key={range} value={range}>{range}</option>
                    ))}
                  </select>
                </div>

                {/* Sort By */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Sort By
                  </label>
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  >
                    <option value="date">Date</option>
                    <option value="price">Price</option>
                    <option value="rating">Rating</option>
                    <option value="popularity">Popularity</option>
                  </select>
                </div>

                {/* Clear Filters */}
                <button
                  onClick={() => {
                    setSearchTerm('');
                    setSelectedCategory('');
                    setSelectedLocation('');
                    setSelectedDate('');
                    setPriceRange('');
                    setSortBy('date');
                  }}
                  className="w-full text-sm text-gray-600 hover:text-primary-600 font-medium"
                >
                  Clear All Filters
                </button>
              </div>
            </div>
          </div>

          {/* Events Grid */}
          <div className="lg:col-span-3">
            {/* Results Header */}
            <div className="flex justify-between items-center mb-6">
              <div className="text-sm text-gray-600">
                Showing {filteredEvents.length} of {events.length} events
              </div>
              <div className="text-sm text-gray-600">
                {filteredEvents.length > 0 ? (
                  <span className="text-green-600">✓ {filteredEvents.length} events found</span>
                ) : (
                  <span className="text-red-600">No events found</span>
                )}
              </div>
            </div>

            {/* Events Grid */}
            {filteredEvents.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {filteredEvents.map((event, index) => (
                  <motion.div
                    key={event.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <EventCard event={event} />
                  </motion.div>
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <div className="text-6xl mb-4">🔍</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">No events found</h3>
                <p className="text-gray-600 mb-6">
                  Try adjusting your search criteria or browse all events
                </p>
                <button
                  onClick={() => {
                    setSearchTerm('');
                    setSelectedCategory('');
                    setSelectedLocation('');
                    setSelectedDate('');
                    setPriceRange('');
                    setSortBy('date');
                  }}
                  className="btn-primary"
                >
                  Clear Filters
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Events; 