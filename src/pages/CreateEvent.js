import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  CalendarIcon,
  MapPinIcon,
  CurrencyDollarIcon,
  PhotoIcon,
  PlusIcon,
  TrashIcon
} from '@heroicons/react/24/outline';
import toast from 'react-hot-toast';

const CreateEvent = () => {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    title: '',
    category: '',
    description: '',
    longDescription: '',
    date: '',
    startTime: '',
    endTime: '',
    location: '',
    address: '',
    image: '',
    tickets: [
      {
        id: 1,
        name: '',
        price: '',
        description: '',
        quantity: 0
      }
    ]
  });

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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleTicketChange = (index, field, value) => {
    const updatedTickets = [...formData.tickets];
    updatedTickets[index] = {
      ...updatedTickets[index],
      [field]: value
    };
    setFormData({
      ...formData,
      tickets: updatedTickets
    });
  };

  const addTicket = () => {
    const newTicket = {
      id: formData.tickets.length + 1,
      name: '',
      price: '',
      description: '',
      quantity: 0
    };
    setFormData({
      ...formData,
      tickets: [...formData.tickets, newTicket]
    });
  };

  const removeTicket = (index) => {
    if (formData.tickets.length > 1) {
      const updatedTickets = formData.tickets.filter((_, i) => i !== index);
      setFormData({
        ...formData,
        tickets: updatedTickets
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validate form
    if (!formData.title || !formData.category || !formData.date) {
      toast.error('Please fill in all required fields');
      return;
    }

    // Simulate API call
    toast.success('Event created successfully!');
    navigate('/dashboard');
  };

  const steps = [
    { number: 1, title: 'Basic Information' },
    { number: 2, title: 'Event Details' },
    { number: 3, title: 'Tickets & Pricing' },
    { number: 4, title: 'Review & Publish' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <h1 className="text-2xl font-bold text-gray-900">Create Event</h1>
          <p className="text-gray-600">Share your event with the world</p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Progress Steps */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            {steps.map((step, index) => (
              <div key={step.number} className="flex items-center">
                <div className={`flex items-center justify-center w-8 h-8 rounded-full border-2 ${
                  currentStep >= step.number
                    ? 'border-primary-600 bg-primary-600 text-white'
                    : 'border-gray-300 text-gray-500'
                }`}>
                  {step.number}
                </div>
                <span className={`ml-2 text-sm font-medium ${
                  currentStep >= step.number ? 'text-primary-600' : 'text-gray-500'
                }`}>
                  {step.title}
                </span>
                {index < steps.length - 1 && (
                  <div className={`w-16 h-0.5 mx-4 ${
                    currentStep > step.number ? 'bg-primary-600' : 'bg-gray-300'
                  }`} />
                )}
              </div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-lg shadow-sm p-6"
        >
          <form onSubmit={handleSubmit}>
            {currentStep === 1 && (
              <div className="space-y-6">
                <h2 className="text-xl font-bold text-gray-900 mb-6">Basic Information</h2>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Event Title *
                  </label>
                  <input
                    type="text"
                    name="title"
                    value={formData.title}
                    onChange={handleChange}
                    className="input-field"
                    placeholder="Enter your event title"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Category *
                  </label>
                  <select
                    name="category"
                    value={formData.category}
                    onChange={handleChange}
                    className="input-field"
                    required
                  >
                    <option value="">Select a category</option>
                    {categories.map(category => (
                      <option key={category} value={category}>{category}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Event Date *
                  </label>
                  <input
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    className="input-field"
                    required
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Start Time *
                    </label>
                    <input
                      type="time"
                      name="startTime"
                      value={formData.startTime}
                      onChange={handleChange}
                      className="input-field"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      End Time *
                    </label>
                    <input
                      type="time"
                      name="endTime"
                      value={formData.endTime}
                      onChange={handleChange}
                      className="input-field"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Location *
                  </label>
                  <input
                    type="text"
                    name="location"
                    value={formData.location}
                    onChange={handleChange}
                    className="input-field"
                    placeholder="City, Country"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Full Address
                  </label>
                  <textarea
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    rows={3}
                    className="input-field"
                    placeholder="Enter the full address of your event"
                  />
                </div>
              </div>
            )}

            {currentStep === 2 && (
              <div className="space-y-6">
                <h2 className="text-xl font-bold text-gray-900 mb-6">Event Details</h2>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Short Description *
                  </label>
                  <textarea
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    rows={3}
                    className="input-field"
                    placeholder="Brief description of your event (max 200 characters)"
                    maxLength={200}
                    required
                  />
                  <p className="text-sm text-gray-500 mt-1">
                    {formData.description.length}/200 characters
                  </p>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Detailed Description
                  </label>
                  <textarea
                    name="longDescription"
                    value={formData.longDescription}
                    onChange={handleChange}
                    rows={6}
                    className="input-field"
                    placeholder="Provide detailed information about your event, including what attendees can expect, special features, and any important details."
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Event Image
                  </label>
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                    <PhotoIcon className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                    <p className="text-gray-600 mb-2">Upload an image for your event</p>
                    <input
                      type="file"
                      accept="image/*"
                      className="hidden"
                      id="event-image"
                    />
                    <label
                      htmlFor="event-image"
                      className="btn-secondary cursor-pointer"
                    >
                      Choose Image
                    </label>
                  </div>
                </div>
              </div>
            )}

            {currentStep === 3 && (
              <div className="space-y-6">
                <h2 className="text-xl font-bold text-gray-900 mb-6">Tickets & Pricing</h2>
                
                <div className="space-y-4">
                  {formData.tickets.map((ticket, index) => (
                    <div key={ticket.id} className="border border-gray-200 rounded-lg p-4">
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="text-lg font-medium text-gray-900">
                          Ticket Type {index + 1}
                        </h3>
                        {formData.tickets.length > 1 && (
                          <button
                            type="button"
                            onClick={() => removeTicket(index)}
                            className="text-red-600 hover:text-red-700"
                          >
                            <TrashIcon className="h-5 w-5" />
                          </button>
                        )}
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Ticket Name *
                          </label>
                          <input
                            type="text"
                            value={ticket.name}
                            onChange={(e) => handleTicketChange(index, 'name', e.target.value)}
                            className="input-field"
                            placeholder="e.g., General Admission"
                            required
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Price *
                          </label>
                          <input
                            type="number"
                            value={ticket.price}
                            onChange={(e) => handleTicketChange(index, 'price', e.target.value)}
                            className="input-field"
                            placeholder="₵0"
                            min="0"
                            required
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Quantity Available *
                          </label>
                          <input
                            type="number"
                            value={ticket.quantity}
                            onChange={(e) => handleTicketChange(index, 'quantity', e.target.value)}
                            className="input-field"
                            placeholder="0"
                            min="0"
                            required
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Description
                          </label>
                          <input
                            type="text"
                            value={ticket.description}
                            onChange={(e) => handleTicketChange(index, 'description', e.target.value)}
                            className="input-field"
                            placeholder="What's included with this ticket?"
                          />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <button
                  type="button"
                  onClick={addTicket}
                  className="flex items-center space-x-2 text-primary-600 hover:text-primary-700 font-medium"
                >
                  <PlusIcon className="h-5 w-5" />
                  <span>Add Another Ticket Type</span>
                </button>
              </div>
            )}

            {currentStep === 4 && (
              <div className="space-y-6">
                <h2 className="text-xl font-bold text-gray-900 mb-6">Review & Publish</h2>
                
                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Event Summary</h3>
                  <div className="space-y-3">
                    <div>
                      <span className="font-medium text-gray-700">Title:</span> {formData.title}
                    </div>
                    <div>
                      <span className="font-medium text-gray-700">Category:</span> {formData.category}
                    </div>
                    <div>
                      <span className="font-medium text-gray-700">Date:</span> {formData.date}
                    </div>
                    <div>
                      <span className="font-medium text-gray-700">Time:</span> {formData.startTime} - {formData.endTime}
                    </div>
                    <div>
                      <span className="font-medium text-gray-700">Location:</span> {formData.location}
                    </div>
                    <div>
                      <span className="font-medium text-gray-700">Tickets:</span> {formData.tickets.length} types
                    </div>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <input
                    type="checkbox"
                    id="publish-now"
                    className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
                  />
                  <label htmlFor="publish-now" className="text-sm text-gray-700">
                    Publish event immediately
                  </label>
                </div>
              </div>
            )}

            {/* Navigation Buttons */}
            <div className="flex justify-between pt-6 border-t border-gray-200">
              <button
                type="button"
                onClick={() => setCurrentStep(Math.max(1, currentStep - 1))}
                disabled={currentStep === 1}
                className="btn-secondary disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Previous
              </button>
              
              {currentStep < 4 ? (
                <button
                  type="button"
                  onClick={() => setCurrentStep(currentStep + 1)}
                  className="btn-primary"
                >
                  Next
                </button>
              ) : (
                <button
                  type="submit"
                  className="btn-primary"
                >
                  Create Event
                </button>
              )}
            </div>
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default CreateEvent; 