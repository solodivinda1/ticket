import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  CheckCircleIcon,
  TicketIcon,
  DownloadIcon,
  ShareIcon,
  CalendarIcon,
  MapPinIcon,
  ClockIcon
} from '@heroicons/react/24/outline';

const Success = () => {
  // Mock order data - in a real app, this would come from the checkout process
  const order = {
    id: "ORD-2024-001234",
    eventTitle: "Afro Nation Ghana 2024",
    ticketType: "VIP Experience",
    quantity: 2,
    total: "₵2,450",
    date: "2024-12-15",
    time: "18:00",
    location: "Accra International Conference Centre",
    qrCode: "https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=EGOTICKETS-2024-001234"
  };

  const handleDownloadTicket = () => {
    // In a real app, this would generate and download a PDF ticket
    alert('Ticket download started...');
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: 'I just booked tickets for Afro Nation Ghana 2024!',
        text: 'Check out this amazing event on eGotickets',
        url: window.location.origin + '/events/1'
      });
    } else {
      navigator.clipboard.writeText(window.location.origin + '/events/1');
      alert('Event link copied to clipboard!');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-lg shadow-sm p-8 text-center"
        >
          {/* Success Icon */}
          <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
            <CheckCircleIcon className="h-8 w-8 text-green-600" />
          </div>

          {/* Success Message */}
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Payment Successful!
          </h1>
          <p className="text-gray-600 mb-8">
            Your tickets have been confirmed. You'll receive an email confirmation shortly.
          </p>

          {/* Order Details */}
          <div className="bg-gray-50 rounded-lg p-6 mb-8">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Order Details</h2>
            <div className="space-y-3 text-left">
              <div className="flex justify-between">
                <span className="text-gray-600">Order ID:</span>
                <span className="font-medium">{order.id}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Event:</span>
                <span className="font-medium">{order.eventTitle}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Ticket Type:</span>
                <span className="font-medium">{order.ticketType}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Quantity:</span>
                <span className="font-medium">{order.quantity}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Total Paid:</span>
                <span className="font-bold text-green-600">{order.total}</span>
              </div>
            </div>
          </div>

          {/* Event Details */}
          <div className="bg-blue-50 rounded-lg p-6 mb-8">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Event Information</h2>
            <div className="space-y-3 text-left">
              <div className="flex items-center space-x-3">
                <CalendarIcon className="h-5 w-5 text-gray-400" />
                <span className="text-gray-700">{order.date}</span>
              </div>
              <div className="flex items-center space-x-3">
                <ClockIcon className="h-5 w-5 text-gray-400" />
                <span className="text-gray-700">{order.time}</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPinIcon className="h-5 w-5 text-gray-400" />
                <span className="text-gray-700">{order.location}</span>
              </div>
            </div>
          </div>

          {/* QR Code */}
          <div className="mb-8">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Your Ticket QR Code</h2>
            <div className="bg-white border-2 border-gray-200 rounded-lg p-6 inline-block">
              <img
                src={order.qrCode}
                alt="Ticket QR Code"
                className="w-32 h-32 mx-auto"
              />
              <p className="text-sm text-gray-600 mt-2">Scan this QR code at the event entrance</p>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="space-y-4">
            <button
              onClick={handleDownloadTicket}
              className="w-full btn-primary"
            >
              <DownloadIcon className="h-5 w-5 mr-2" />
              Download Ticket
            </button>
            
            <button
              onClick={handleShare}
              className="w-full btn-secondary"
            >
              <ShareIcon className="h-5 w-5 mr-2" />
              Share Event
            </button>
          </div>

          {/* Additional Information */}
          <div className="mt-8 pt-6 border-t border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">What's Next?</h3>
            <div className="space-y-3 text-left text-sm text-gray-600">
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-primary-600 rounded-full mt-2 flex-shrink-0"></div>
                <span>You'll receive an email confirmation with your ticket details</span>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-primary-600 rounded-full mt-2 flex-shrink-0"></div>
                <span>Save the QR code or download your ticket for easy access</span>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-primary-600 rounded-full mt-2 flex-shrink-0"></div>
                <span>Arrive 30 minutes before the event starts</span>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-primary-600 rounded-full mt-2 flex-shrink-0"></div>
                <span>Have your QR code ready for scanning at the entrance</span>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="mt-8 pt-6 border-t border-gray-200">
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/dashboard" className="btn-secondary">
                Go to Dashboard
              </Link>
              <Link to="/events" className="btn-primary">
                Discover More Events
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Success; 