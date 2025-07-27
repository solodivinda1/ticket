import React from 'react';
import { Link } from 'react-router-dom';
import { 
  CalendarIcon, 
  MapPinIcon, 
  CurrencyDollarIcon,
  StarIcon,
  ClockIcon,
  UserIcon
} from '@heroicons/react/24/outline';
import { format } from 'date-fns';

const EventCard = ({ event }) => {
  const formatDate = (dateString) => {
    return format(new Date(dateString), 'MMM dd, yyyy');
  };

  const getProgressPercentage = () => {
    return (event.soldTickets / event.totalTickets) * 100;
  };

  return (
    <Link to={`/events/${event.id}`} className="block">
      <div className="card overflow-hidden group">
        {/* Image */}
        <div className="relative overflow-hidden">
          <img
            src={event.image}
            alt={event.title}
            className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute top-4 left-4">
            <span className="bg-primary-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
              {event.category}
            </span>
          </div>
          <div className="absolute top-4 right-4">
            <div className="flex items-center space-x-1 bg-black/70 text-white px-2 py-1 rounded text-xs">
              <StarIcon className="h-3 w-3 fill-current" />
              <span>{event.rating}</span>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          <h3 className="font-bold text-lg text-gray-900 mb-2 group-hover:text-primary-600 transition-colors">
            {event.title}
          </h3>
          
          <div className="flex items-center space-x-2 text-sm text-gray-600 mb-3">
            <UserIcon className="h-4 w-4" />
            <span>{event.organizer}</span>
          </div>

          <div className="space-y-2 mb-4">
            <div className="flex items-center space-x-2 text-sm text-gray-600">
              <CalendarIcon className="h-4 w-4" />
              <span>{formatDate(event.date)}</span>
            </div>
            <div className="flex items-center space-x-2 text-sm text-gray-600">
              <ClockIcon className="h-4 w-4" />
              <span>{event.time}</span>
            </div>
            <div className="flex items-center space-x-2 text-sm text-gray-600">
              <MapPinIcon className="h-4 w-4" />
              <span>{event.location}</span>
            </div>
          </div>

          {/* Price */}
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-2">
              <CurrencyDollarIcon className="h-5 w-5 text-primary-600" />
              <span className="font-bold text-lg text-gray-900">{event.price}</span>
            </div>
            <span className="text-sm text-gray-500">
              {event.soldTickets} of {event.totalTickets} sold
            </span>
          </div>

          {/* Progress Bar */}
          <div className="w-full bg-gray-200 rounded-full h-2 mb-4">
            <div 
              className="bg-primary-600 h-2 rounded-full transition-all duration-300"
              style={{ width: `${getProgressPercentage()}%` }}
            ></div>
          </div>

          {/* CTA Button */}
          <button className="w-full btn-primary">
            Book Now
          </button>
        </div>
      </div>
    </Link>
  );
};

export default EventCard; 