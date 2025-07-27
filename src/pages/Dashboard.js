import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  UserIcon,
  CalendarIcon,
  CurrencyDollarIcon,
  TicketIcon,
  ChartBarIcon,
  CogIcon,
  BellIcon,
  HeartIcon,
  ClockIcon,
  MapPinIcon
} from '@heroicons/react/24/outline';

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState('overview');

  // Mock user data
  const user = {
    name: "John Doe",
    email: "john.doe@example.com",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    userType: "attendee",
    joinDate: "January 2024"
  };

  const stats = [
    { name: "Events Attended", value: "12", icon: CalendarIcon, color: "text-blue-600" },
    { name: "Tickets Purchased", value: "24", icon: TicketIcon, color: "text-green-600" },
    { name: "Total Spent", value: "₵3,450", icon: CurrencyDollarIcon, color: "text-purple-600" },
    { name: "Saved Events", value: "8", icon: HeartIcon, color: "text-red-600" }
  ];

  const upcomingEvents = [
    {
      id: 1,
      title: "Afro Nation Ghana 2024",
      date: "2024-12-15",
      time: "18:00",
      location: "Greater Accra",
      image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      ticketType: "VIP Experience",
      status: "confirmed"
    },
    {
      id: 2,
      title: "Tech Conference 2024",
      date: "2024-11-20",
      time: "09:00",
      location: "Kumasi",
      image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      ticketType: "General Admission",
      status: "confirmed"
    }
  ];

  const recentActivity = [
    {
      id: 1,
      action: "Booked ticket for Afro Nation Ghana 2024",
      date: "2 hours ago",
      type: "booking"
    },
    {
      id: 2,
      action: "Saved Food Festival Accra to wishlist",
      date: "1 day ago",
      type: "save"
    },
    {
      id: 3,
      action: "Attended Tech Conference 2024",
      date: "3 days ago",
      type: "attended"
    },
    {
      id: 4,
      action: "Updated profile information",
      date: "1 week ago",
      type: "profile"
    }
  ];

  const tabs = [
    { id: 'overview', name: 'Overview', icon: ChartBarIcon },
    { id: 'events', name: 'My Events', icon: CalendarIcon },
    { id: 'tickets', name: 'My Tickets', icon: TicketIcon },
    { id: 'saved', name: 'Saved Events', icon: HeartIcon },
    { id: 'settings', name: 'Settings', icon: CogIcon }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
              <p className="text-gray-600">Welcome back, {user.name}!</p>
            </div>
            <div className="flex items-center space-x-4">
              <button className="p-2 text-gray-600 hover:text-primary-600 relative">
                <BellIcon className="h-6 w-6" />
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  3
                </span>
              </button>
              <img
                src={user.avatar}
                alt={user.name}
                className="w-10 h-10 rounded-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-sm p-6">
              {/* User Profile */}
              <div className="text-center mb-6">
                <img
                  src={user.avatar}
                  alt={user.name}
                  className="w-20 h-20 rounded-full object-cover mx-auto mb-4"
                />
                <h3 className="text-lg font-semibold text-gray-900">{user.name}</h3>
                <p className="text-gray-600">{user.email}</p>
                <p className="text-sm text-gray-500 mt-1">Member since {user.joinDate}</p>
              </div>

              {/* Navigation Tabs */}
              <nav className="space-y-2">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-left transition-colors ${
                      activeTab === tab.id
                        ? 'bg-primary-50 text-primary-700 border border-primary-200'
                        : 'text-gray-700 hover:bg-gray-50'
                    }`}
                  >
                    <tab.icon className="h-5 w-5" />
                    <span className="font-medium">{tab.name}</span>
                  </button>
                ))}
              </nav>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            {activeTab === 'overview' && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="space-y-6"
              >
                {/* Stats Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {stats.map((stat, index) => (
                    <motion.div
                      key={stat.name}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="bg-white rounded-lg shadow-sm p-6"
                    >
                      <div className="flex items-center">
                        <div className={`p-3 rounded-lg bg-gray-50 ${stat.color}`}>
                          <stat.icon className="h-6 w-6" />
                        </div>
                        <div className="ml-4">
                          <p className="text-sm font-medium text-gray-600">{stat.name}</p>
                          <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Upcoming Events */}
                <div className="bg-white rounded-lg shadow-sm p-6">
                  <h2 className="text-xl font-bold text-gray-900 mb-4">Upcoming Events</h2>
                  <div className="space-y-4">
                    {upcomingEvents.map((event) => (
                      <div key={event.id} className="flex items-center space-x-4 p-4 border border-gray-200 rounded-lg">
                        <img
                          src={event.image}
                          alt={event.title}
                          className="w-16 h-16 rounded-lg object-cover"
                        />
                        <div className="flex-1">
                          <h3 className="font-semibold text-gray-900">{event.title}</h3>
                          <div className="flex items-center space-x-4 text-sm text-gray-600 mt-1">
                            <div className="flex items-center space-x-1">
                              <CalendarIcon className="h-4 w-4" />
                              <span>{event.date}</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <ClockIcon className="h-4 w-4" />
                              <span>{event.time}</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <MapPinIcon className="h-4 w-4" />
                              <span>{event.location}</span>
                            </div>
                          </div>
                          <p className="text-sm text-primary-600 font-medium mt-1">{event.ticketType}</p>
                        </div>
                        <div className="text-right">
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                            {event.status}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Recent Activity */}
                <div className="bg-white rounded-lg shadow-sm p-6">
                  <h2 className="text-xl font-bold text-gray-900 mb-4">Recent Activity</h2>
                  <div className="space-y-4">
                    {recentActivity.map((activity) => (
                      <div key={activity.id} className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-primary-600 rounded-full mt-2 flex-shrink-0"></div>
                        <div className="flex-1">
                          <p className="text-gray-900">{activity.action}</p>
                          <p className="text-sm text-gray-500">{activity.date}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}

            {activeTab === 'events' && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-white rounded-lg shadow-sm p-6"
              >
                <h2 className="text-xl font-bold text-gray-900 mb-4">My Events</h2>
                <p className="text-gray-600">You haven't created any events yet.</p>
                <button className="btn-primary mt-4">
                  Create Your First Event
                </button>
              </motion.div>
            )}

            {activeTab === 'tickets' && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-white rounded-lg shadow-sm p-6"
              >
                <h2 className="text-xl font-bold text-gray-900 mb-4">My Tickets</h2>
                <div className="space-y-4">
                  {upcomingEvents.map((event) => (
                    <div key={event.id} className="border border-gray-200 rounded-lg p-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <h3 className="font-semibold text-gray-900">{event.title}</h3>
                          <p className="text-sm text-gray-600">{event.ticketType}</p>
                        </div>
                        <button className="text-primary-600 hover:text-primary-700 text-sm font-medium">
                          View Ticket
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}

            {activeTab === 'saved' && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-white rounded-lg shadow-sm p-6"
              >
                <h2 className="text-xl font-bold text-gray-900 mb-4">Saved Events</h2>
                <p className="text-gray-600">You haven't saved any events yet.</p>
              </motion.div>
            )}

            {activeTab === 'settings' && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-white rounded-lg shadow-sm p-6"
              >
                <h2 className="text-xl font-bold text-gray-900 mb-4">Account Settings</h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-medium text-gray-900 mb-4">Profile Information</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                        <input
                          type="text"
                          defaultValue={user.name.split(' ')[0]}
                          className="input-field"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                        <input
                          type="text"
                          defaultValue={user.name.split(' ')[1]}
                          className="input-field"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                        <input
                          type="email"
                          defaultValue={user.email}
                          className="input-field"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                        <input
                          type="tel"
                          placeholder="Enter phone number"
                          className="input-field"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-end">
                    <button className="btn-primary">Save Changes</button>
                  </div>
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard; 