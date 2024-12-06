import React, { useState } from 'react';
import { Search, MapPin, Star } from 'lucide-react';
import { motion } from 'framer-motion';
import { Gym } from '../types';

const gyms: Gym[] = [
  {
    id: '1',
    name: 'FitHub Elite',
    address: '123 Fitness Street, Downtown',
    image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
    rating: 4.8,
    amenities: ['Pool', '24/7 Access', 'Personal Training'],
    price: 49.99
  },
  {
    id: '2',
    name: 'PowerFlex Gym',
    address: '456 Strength Avenue, Uptown',
    image: 'https://images.unsplash.com/photo-1571902943202-507ec2618e8f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
    rating: 4.6,
    amenities: ['CrossFit', 'Yoga Studio', 'Sauna'],
    price: 39.99
  },
  {
    id: '3',
    name: 'Core Fitness Center',
    address: '789 Wellness Boulevard, Midtown',
    image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
    rating: 4.7,
    amenities: ['Group Classes', 'Cardio Cinema', 'Nutrition Coaching'],
    price: 44.99
  }
];

export const FindGyms = () => {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div className="pt-20 min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Find Your Perfect Gym</h1>
          <div className="relative">
            <input
              type="text"
              placeholder="Search by location or gym name..."
              className="w-full px-4 py-3 pl-12 rounded-lg border border-gray-300 focus:ring-2 focus:ring-black focus:border-transparent"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <Search className="absolute left-4 top-3.5 text-gray-400" />
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {gyms.map((gym, index) => (
            <motion.div
              key={gym.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow"
            >
              <div className="relative h-48">
                <img
                  src={gym.image}
                  alt={gym.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold text-gray-900">{gym.name}</h3>
                  <div className="flex items-center">
                    <Star className="h-5 w-5 text-yellow-400 fill-current" />
                    <span className="ml-1 text-gray-600">{gym.rating}</span>
                  </div>
                </div>
                <div className="flex items-center text-gray-600 mb-4">
                  <MapPin className="h-5 w-5 mr-2" />
                  <span>{gym.address}</span>
                </div>
                <div className="flex flex-wrap gap-2 mb-4">
                  {gym.amenities.map((amenity) => (
                    <span
                      key={amenity}
                      className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm"
                    >
                      {amenity}
                    </span>
                  ))}
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-gray-900">
                    ${gym.price}
                    <span className="text-sm text-gray-600">/month</span>
                  </span>
                  <button className="btn btn-primary">Book Now</button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};