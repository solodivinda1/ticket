import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  CalendarIcon, 
  MapPinIcon, 
  CurrencyDollarIcon,
  StarIcon,
  PlayIcon,
  ArrowDownTrayIcon,
  ChatBubbleLeftRightIcon,
  PhoneIcon
} from '@heroicons/react/24/outline';
import EventCard from '../components/EventCard';

const Home = () => {
  const featuredEvents = [
    {
      id: 1,
      title: "Afro Nation Ghana 2024",
      category: "Music & Concert",
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
    }
  ];

  const stats = [
    { number: "45,000+", label: "Events hosted since 2013" },
    { number: "5,200+", label: "Creators trust us" },
    { number: "$2.5m", label: "Paid out to creators (24 months)" },
    { number: "10+ yrs", label: "Trailblazing experience" }
  ];

  const categories = [
    { name: "Nightlife & Parties", icon: "🎉", count: "1,200+" },
    { name: "Movies & Cinema", icon: "🎬", count: "800+" },
    { name: "Arts & Theatre", icon: "🎭", count: "600+" },
    { name: "Food & Drinks", icon: "🍽️", count: "900+" },
    { name: "Networking", icon: "🤝", count: "400+" },
    { name: "Travel & Outdoor", icon: "🌍", count: "300+" },
    { name: "Professional", icon: "💼", count: "500+" },
    { name: "Health & Wellness", icon: "🧘", count: "200+" }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-primary-600 to-secondary-600 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                Find, book, & enjoy events you love.
              </h1>
              <p className="text-xl text-gray-100 leading-relaxed">
                Ghana's most trusted event ticketing partner since 2013, now expanding across Africa. 
                Empowering thousands of event creators with seamless online and offline experiences.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/events" className="btn-primary text-center">
                  Discover Events
                </Link>
                <Link to="/create-event" className="btn-secondary text-center">
                  Hosting an event?
                </Link>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <h3 className="text-2xl font-semibold mb-6">Quick Search</h3>
                <div className="space-y-4">
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="Search events..."
                      className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <select className="px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-white/50">
                      <option>Any Category</option>
                      <option>Music & Concert</option>
                      <option>Business & Professional</option>
                      <option>Food & Drinks</option>
                    </select>
                    <select className="px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-white/50">
                      <option>Any Location</option>
                      <option>Greater Accra</option>
                      <option>Kumasi</option>
                      <option>Lagos</option>
                    </select>
                  </div>
                  <button className="w-full btn-primary">
                    Search Events
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-3xl md:text-4xl font-bold text-primary-600 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 text-sm md:text-base">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              What creators are saying...
            </h2>
          </div>
          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg">
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-semibold text-gray-900 mb-4">
                "When I think events, I always think eGotickets"
              </div>
              <div className="text-gray-600 mb-6">
                — Amma Aboagye, Founding curator of The Afropole
              </div>
              <div className="flex justify-center space-x-1">
                {[...Array(5)].map((_, i) => (
                  <StarIcon key={i} className="h-6 w-6 text-yellow-400 fill-current" />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Events */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900">Featured Events</h2>
            <Link to="/events" className="text-primary-600 hover:text-primary-700 font-semibold">
              View All Events →
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredEvents.map((event, index) => (
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
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Browse by Category
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {categories.map((category, index) => (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="card p-6 text-center cursor-pointer hover:shadow-xl transition-all duration-300"
              >
                <div className="text-4xl mb-4">{category.icon}</div>
                <h3 className="font-semibold text-gray-900 mb-2">{category.name}</h3>
                <p className="text-sm text-gray-600">{category.count} events</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mobile App Section */}
      <section className="py-16 bg-primary-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold">
                Get the eGotickets App
              </h2>
              <p className="text-xl text-gray-100">
                Discover and book your next experience anytime, anywhere—online, offline, USSD, WhatsApp, or the Cityloop app!
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="flex items-center space-x-2 bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors">
                  <PlayIcon className="h-5 w-5" />
                  <span>Google Play</span>
                </button>
                <button className="flex items-center space-x-2 bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors">
                  <ArrowDownTrayIcon className="h-5 w-5" />
                  <span>App Store</span>
                </button>
              </div>
              <div className="flex space-x-6 text-sm">
                <div className="flex items-center space-x-2">
                  <PhoneIcon className="h-5 w-5" />
                  <span>USSD</span>
                </div>
                <div className="flex items-center space-x-2">
                  <ChatBubbleLeftRightIcon className="h-5 w-5" />
                  <span>WhatsApp</span>
                </div>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <div className="text-6xl mb-4">📱</div>
                <h3 className="text-xl font-semibold mb-2">Mobile App</h3>
                <p className="text-gray-100">Download now for the best experience</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home; 