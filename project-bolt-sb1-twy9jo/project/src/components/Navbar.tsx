import React from 'react';
import { Link } from 'react-router-dom';
import { Dumbbell } from 'lucide-react';

export const Navbar = () => {
  return (
    <nav className="fixed w-full bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <Dumbbell className="h-8 w-8 text-black" />
              <span className="text-xl font-bold text-black">FitHub</span>
            </Link>
          </div>
          
          <div className="flex items-center space-x-8">
            <Link to="/gyms" className="text-gray-700 hover:text-black">Find Gyms</Link>
            <Link to="/schedule" className="text-gray-700 hover:text-black">Schedule</Link>
            <Link to="/login" className="text-gray-700 hover:text-black">Login</Link>
            <Link 
              to="/signup" 
              className="bg-black text-white px-4 py-2 rounded-md hover:bg-gray-900 transition-colors"
            >
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};