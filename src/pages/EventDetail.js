import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  CalendarIcon, 
  MapPinIcon, 
  CurrencyDollarIcon,
  StarIcon,
  ClockIcon,
  UserIcon,
  ShareIcon,
  HeartIcon,
  TicketIcon,
  UsersIcon,
  PhoneIcon,
  EnvelopeIcon,
  GlobeAltIcon
} from '@heroicons/react/24/outline';
import { format } from 'date-fns';
import toast from 'react-hot-toast';

const EventDetail = () => {
  const { id } = useParams();
  const [event, setEvent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [selectedTicket, setSelectedTicket] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [isLiked, setIsLiked] = useState(false);

  // Mock event data - in a real app, this would come from an API
  useEffect(() => {
    const mockEvent = {
      id: parseInt(id),
      title: "Afro Nation Ghana 2024",
      category: "Nightlife, Party & Concert",
      location: "Greater Accra",
      address: "Accra International Conference Centre, Accra, Ghana",
      date: "2024-12-15",
      time: "18:00",
      endTime: "23:00",
      description: "Join us for the biggest Afro music festival in Ghana! Experience the best of African music, culture, and entertainment. Featuring top artists from across the continent, this is an event you don't want to miss.",
      longDescription: `Afro Nation Ghana 2024 is set to be the most spectacular celebration of African music and culture. This year's festival promises to be bigger and better than ever before, featuring:

• Live performances from top African artists
• Traditional and contemporary music fusion
• Cultural exhibitions and workshops
• Food and craft vendors from across Africa
• Interactive art installations
• Networking opportunities with industry professionals

The festival will showcase the rich diversity of African music, from traditional rhythms to modern Afrobeat, creating an unforgettable experience for all attendees.`,
      image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      organizer: "Afro Nation",
      organizerImage: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2126&q=80",
      rating: 4.8,
      totalReviews: 1247,
      soldTickets: 1200,
      totalTickets: 2000,
      tickets: [
        {
          id: 1,
          name: "General Admission",
          price: "₵500",
          description: "Access to all festival areas and performances",
          available: 800,
          total: 1000
        },
        {
          id: 2,
          name: "VIP Experience",
          price: "₵1,200",
          description: "Premium seating, exclusive lounge access, complimentary drinks",
          available: 150,
          total: 200
        },
        {
          id: 3,
          name: "Backstage Pass",
          price: "₵2,500",
          description: "Meet & greet with artists, backstage access, exclusive merchandise",
          available: 50,
          total: 100
        }
      ],
      highlights: [
        "Live performances from top African artists",
        "Traditional and contemporary music fusion",
        "Cultural exhibitions and workshops",
        "Food and craft vendors from across Africa",
        "Interactive art installations",
        "Networking opportunities"
      ],
      tags: ["Music", "Festival", "Culture", "Entertainment", "Live Performance"],
      relatedEvents: [
        {
          id: 2,
          title: "Tech Conference 2024",
          category: "Business & Professional",
          location: "Kumasi",
          date: "2024-11-20",
          price: "₵300",
          image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
        },
        {
          id: 3,
          title: "Food Festival Accra",
          category: "Food & Drinks",
          location: "Greater Accra",
          date: "2024-12-08",
          price: "₵150",
          image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
        }
      ]
    };

    setEvent(mockEvent);
    setLoading(false);
  }, [id]);

  const formatDate = (dateString) => {
    return format(new Date(dateString), 'EEEE, MMMM dd, yyyy');
  };

  const getProgressPercentage = () => {
    return (event.soldTickets / event.totalTickets) * 100;
  };

  const handleTicketSelect = (ticket) => {
    setSelectedTicket(ticket);
    setQuantity(1);
  };

  const handleBookNow = () => {
    if (!selectedTicket) {
      toast.error('Please select a ticket type');
      return;
    }
    
    if (quantity > selectedTicket.available) {
      toast.error('Not enough tickets available');
      return;
    }

    // Navigate to checkout with ticket details
    const checkoutData = {
      eventId: event.id,
      eventTitle: event.title,
      ticketId: selectedTicket.id,
      ticketName: selectedTicket.name,
      price: selectedTicket.price,
      quantity: quantity,
      total: parseInt(selectedTicket.price.replace('₵', '')) * quantity
    };

    // In a real app, you'd store this in state management or pass via navigation
    localStorage.setItem('checkoutData', JSON.stringify(checkoutData));
    window.location.href = '/checkout';
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: event.title,
        text: `Check out this amazing event: ${event.title}`,
        url: window.location.href,
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
      toast.success('Link copied to clipboard!');
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary-600"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-96 md:h-[500px] overflow-hidden">
        <img
          src={event.image}
          alt={event.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-white"
            >
              <div className="flex items-center space-x-2 mb-4">
                <span className="bg-primary-600 px-3 py-1 rounded-full text-sm font-semibold">
                  {event.category}
                </span>
                <div className="flex items-center space-x-1">
                  <StarIcon className="h-4 w-4 fill-current text-yellow-400" />
                  <span className="text-sm">{event.rating} ({event.totalReviews} reviews)</span>
                </div>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-4">{event.title}</h1>
              <div className="flex items-center space-x-6 text-lg">
                <div className="flex items-center space-x-2">
                  <CalendarIcon className="h-5 w-5" />
                  <span>{formatDate(event.date)}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <ClockIcon className="h-5 w-5" />
                  <span>{event.time} - {event.endTime}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MapPinIcon className="h-5 w-5" />
                  <span>{event.location}</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Event Description */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white rounded-lg shadow-sm p-6"
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-4">About This Event</h2>
              <p className="text-gray-700 leading-relaxed mb-6">{event.description}</p>
              <p className="text-gray-700 leading-relaxed">{event.longDescription}</p>
            </motion.div>

            {/* Event Highlights */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white rounded-lg shadow-sm p-6"
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Event Highlights</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {event.highlights.map((highlight, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-primary-600 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-700">{highlight}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Organizer Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-white rounded-lg shadow-sm p-6"
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Organizer</h2>
              <div className="flex items-center space-x-4">
                <img
                  src={event.organizerImage}
                  alt={event.organizer}
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">{event.organizer}</h3>
                  <p className="text-gray-600">Event Organizer</p>
                  <div className="flex items-center space-x-4 mt-2">
                    <button className="flex items-center space-x-1 text-primary-600 hover:text-primary-700">
                      <PhoneIcon className="h-4 w-4" />
                      <span className="text-sm">Contact</span>
                    </button>
                    <button className="flex items-center space-x-1 text-primary-600 hover:text-primary-700">
                      <EnvelopeIcon className="h-4 w-4" />
                      <span className="text-sm">Email</span>
                    </button>
                    <button className="flex items-center space-x-1 text-primary-600 hover:text-primary-700">
                      <GlobeAltIcon className="h-4 w-4" />
                      <span className="text-sm">Website</span>
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Related Events */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-white rounded-lg shadow-sm p-6"
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Related Events</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {event.relatedEvents.map((relatedEvent) => (
                  <Link
                    key={relatedEvent.id}
                    to={`/events/${relatedEvent.id}`}
                    className="block group"
                  >
                    <div className="flex space-x-4 p-4 rounded-lg border border-gray-200 hover:border-primary-300 transition-colors">
                      <img
                        src={relatedEvent.image}
                        alt={relatedEvent.title}
                        className="w-20 h-20 rounded-lg object-cover"
                      />
                      <div className="flex-1">
                        <h3 className="font-semibold text-gray-900 group-hover:text-primary-600 transition-colors">
                          {relatedEvent.title}
                        </h3>
                        <p className="text-sm text-gray-600">{relatedEvent.category}</p>
                        <p className="text-sm text-gray-600">{formatDate(relatedEvent.date)}</p>
                        <p className="text-sm font-semibold text-primary-600">{relatedEvent.price}</p>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="sticky top-8"
            >
              {/* Ticket Booking */}
              <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-gray-900">Book Tickets</h3>
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={handleShare}
                      className="p-2 text-gray-600 hover:text-primary-600 transition-colors"
                    >
                      <ShareIcon className="h-5 w-5" />
                    </button>
                    <button
                      onClick={() => setIsLiked(!isLiked)}
                      className={`p-2 transition-colors ${
                        isLiked ? 'text-red-500' : 'text-gray-600 hover:text-red-500'
                      }`}
                    >
                      <HeartIcon className={`h-5 w-5 ${isLiked ? 'fill-current' : ''}`} />
                    </button>
                  </div>
                </div>

                {/* Ticket Progress */}
                <div className="mb-6">
                  <div className="flex justify-between text-sm text-gray-600 mb-2">
                    <span>{event.soldTickets} of {event.totalTickets} tickets sold</span>
                    <span>{Math.round(getProgressPercentage())}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-primary-600 h-2 rounded-full transition-all duration-300"
                      style={{ width: `${getProgressPercentage()}%` }}
                    ></div>
                  </div>
                </div>

                {/* Ticket Types */}
                <div className="space-y-4 mb-6">
                  {event.tickets.map((ticket) => (
                    <div
                      key={ticket.id}
                      className={`border-2 rounded-lg p-4 cursor-pointer transition-all ${
                        selectedTicket?.id === ticket.id
                          ? 'border-primary-600 bg-primary-50'
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                      onClick={() => handleTicketSelect(ticket)}
                    >
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <h4 className="font-semibold text-gray-900">{ticket.name}</h4>
                          <p className="text-sm text-gray-600">{ticket.description}</p>
                        </div>
                        <div className="text-right">
                          <div className="text-lg font-bold text-primary-600">{ticket.price}</div>
                          <div className="text-xs text-gray-500">{ticket.available} available</div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Quantity Selector */}
                {selectedTicket && (
                  <div className="mb-6">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Quantity
                    </label>
                    <div className="flex items-center space-x-3">
                      <button
                        onClick={() => setQuantity(Math.max(1, quantity - 1))}
                        className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-50"
                      >
                        -
                      </button>
                      <span className="text-lg font-semibold">{quantity}</span>
                      <button
                        onClick={() => setQuantity(Math.min(selectedTicket.available, quantity + 1))}
                        className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-50"
                      >
                        +
                      </button>
                    </div>
                  </div>
                )}

                {/* Total */}
                {selectedTicket && (
                  <div className="border-t pt-4 mb-6">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Total:</span>
                      <span className="text-xl font-bold text-primary-600">
                        ₵{parseInt(selectedTicket.price.replace('₵', '')) * quantity}
                      </span>
                    </div>
                  </div>
                )}

                {/* Book Button */}
                <button
                  onClick={handleBookNow}
                  disabled={!selectedTicket}
                  className="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <TicketIcon className="h-5 w-5 mr-2" />
                  Book Now
                </button>
              </div>

              {/* Event Details */}
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Event Details</h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <CalendarIcon className="h-5 w-5 text-gray-400" />
                    <span className="text-gray-700">{formatDate(event.date)}</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <ClockIcon className="h-5 w-5 text-gray-400" />
                    <span className="text-gray-700">{event.time} - {event.endTime}</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MapPinIcon className="h-5 w-5 text-gray-400" />
                    <span className="text-gray-700">{event.address}</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <UsersIcon className="h-5 w-5 text-gray-400" />
                    <span className="text-gray-700">{event.totalTickets} total capacity</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventDetail; 