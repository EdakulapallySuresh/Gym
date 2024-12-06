import React from 'react';
import { MapPin, Calendar, Clock, CreditCard } from 'lucide-react';

const features = [
  {
    icon: <MapPin className="h-6 w-6" />,
    title: 'Find Nearby Gyms',
    description: 'Discover top-rated fitness centers in your area with detailed information and reviews.'
  },
  {
    icon: <Calendar className="h-6 w-6" />,
    title: 'Easy Booking',
    description: 'Book your preferred time slots with just a few clicks through our intuitive scheduling system.'
  },
  {
    icon: <Clock className="h-6 w-6" />,
    title: 'Flexible Hours',
    description: 'Access to 24/7 facilities and flexible scheduling to fit your busy lifestyle.'
  },
  {
    icon: <CreditCard className="h-6 w-6" />,
    title: 'Simple Payments',
    description: 'Secure and hassle-free payment options for your gym bookings and memberships.'
  }
];

export const Features = () => {
  return (
    <div className="py-24 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            Why Choose FitHub?
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-300">
            Everything you need to achieve your fitness goals in one place.
          </p>
        </div>

        <div className="mt-20">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((feature, index) => (
              <div key={index} className="relative">
                <div className="flex flex-col items-center p-6 bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-black text-white">
                    {feature.icon}
                  </div>
                  <h3 className="mt-4 text-lg font-medium text-white">{feature.title}</h3>
                  <p className="mt-2 text-base text-gray-300 text-center">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};