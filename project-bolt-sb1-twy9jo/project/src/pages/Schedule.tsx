import React, { useState } from 'react';
import { Calendar as CalendarIcon, Clock, ChevronLeft, ChevronRight } from 'lucide-react';
import { format, addDays, startOfWeek } from 'date-fns';
import { motion } from 'framer-motion';

const timeSlots = [
  '06:00 AM', '07:00 AM', '08:00 AM', '09:00 AM', '10:00 AM',
  '11:00 AM', '12:00 PM', '01:00 PM', '02:00 PM', '03:00 PM',
  '04:00 PM', '05:00 PM', '06:00 PM', '07:00 PM', '08:00 PM'
];

export const Schedule = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedSlot, setSelectedSlot] = useState<string | null>(null);

  const weekDays = Array.from({ length: 7 }, (_, i) => 
    addDays(startOfWeek(selectedDate), i)
  );

  return (
    <div className="pt-20 min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-lg shadow-md p-6"
        >
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900">Schedule Your Session</h1>
            <div className="flex items-center space-x-4">
              <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                <ChevronLeft className="h-6 w-6" />
              </button>
              <span className="text-lg font-medium">
                {format(selectedDate, 'MMMM yyyy')}
              </span>
              <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                <ChevronRight className="h-6 w-6" />
              </button>
            </div>
          </div>

          <div className="grid grid-cols-7 gap-4 mb-8">
            {weekDays.map((date, index) => (
              <motion.button
                key={date.toString()}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                onClick={() => setSelectedDate(date)}
                className={`p-4 rounded-lg text-center transition-all ${
                  format(date, 'yyyy-MM-dd') === format(selectedDate, 'yyyy-MM-dd')
                    ? 'bg-black text-white'
                    : 'hover:bg-gray-100'
                }`}
              >
                <div className="text-sm mb-1">{format(date, 'EEE')}</div>
                <div className="text-lg font-semibold">{format(date, 'd')}</div>
              </motion.button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {timeSlots.map((slot, index) => (
              <motion.button
                key={slot}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.03 }}
                onClick={() => setSelectedSlot(slot)}
                className={`p-4 rounded-lg border transition-all ${
                  selectedSlot === slot
                    ? 'border-black bg-black text-white'
                    : 'border-gray-200 hover:border-black'
                }`}
              >
                <div className="flex items-center justify-center">
                  <Clock className="h-5 w-5 mr-2" />
                  <span>{slot}</span>
                </div>
              </motion.button>
            ))}
          </div>

          {selectedSlot && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-8 p-4 bg-gray-50 rounded-lg"
            >
              <h3 className="text-lg font-semibold mb-2">Selected Time:</h3>
              <p className="text-gray-600">
                {format(selectedDate, 'EEEE, MMMM d, yyyy')} at {selectedSlot}
              </p>
              <button className="mt-4 btn btn-primary">
                Confirm Booking
              </button>
            </motion.div>
          )}
        </motion.div>
      </div>
    </div>
  );
};