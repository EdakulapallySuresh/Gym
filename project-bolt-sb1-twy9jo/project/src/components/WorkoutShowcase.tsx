import React from 'react';
import { Users, Target, Trophy } from 'lucide-react';

const workoutCategories = [
  {
    icon: <Users className="h-8 w-8" />,
    title: 'Group Classes',
    description: 'Join our energetic group sessions led by expert trainers',
    image: 'https://images.unsplash.com/photo-1571902943202-507ec2618e8f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80'
  },
  {
    icon: <Target className="h-8 w-8" />,
    title: 'Personal Training',
    description: 'Get personalized attention and reach your goals faster',
    image: 'https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80'
  },
  {
    icon: <Trophy className="h-8 w-8" />,
    title: 'Specialized Programs',
    description: 'Follow structured programs designed for specific goals',
    image: 'https://images.unsplash.com/photo-1599058945522-28d584b6f0ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80'
  }
];

export const WorkoutShowcase = () => {
  return (
    <div className="bg-gray-800 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-white mb-4">
            Expert-Led Training Programs
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Choose from a variety of programs designed to help you achieve your fitness goals
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {workoutCategories.map((category, index) => (
            <div
              key={index}
              className="bg-gray-900 rounded-lg overflow-hidden transition-transform hover:scale-105"
            >
              <div className="relative h-48">
                <img
                  src={category.image}
                  alt={category.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="text-gray-400">
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white">
                    {category.title}
                  </h3>
                </div>
                <p className="text-gray-400">
                  {category.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};