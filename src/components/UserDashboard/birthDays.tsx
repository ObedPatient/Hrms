import React from 'react';
import { Calendar, MoreVertical } from 'lucide-react';
import Card from '../common/card';

const Birthdays: React.FC = () => {
  const birthdays = [
    { name: 'John Doe', date: 'April 25th', isToday: true },
    { name: 'Jane Smith', date: 'April 26th', isToday: false },
    { name: 'Alex Johnson', date: 'April 27th', isToday: false },
    { name: 'Maria Garcia', date: 'April 28th', isToday: false },
    { name: 'David Lee', date: 'April 29th', isToday: false },
  ];

  return (
    <Card>
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold text-gray-800">Birthdays</h2>

        <button
          aria-label="More options"
          className="p-2 rounded-full hover:bg-gray-100 transition shadow-sm shadow-gray-300"
        >
          <MoreVertical className="w-5 h-5 text-gray-600" />
        </button>
      </div>

      <div className="space-y-3">
        {birthdays.map((birthday, index) => (
          <div
            key={index}
            className="flex items-center justify-between bg-[#e8f0fe] px-4 py-3 rounded-xl transition"
          >
            <div className="flex items-center gap-3">
              <Calendar className="w-4 h-4 text-gray-600" />
              <span className="text-sm font-medium text-gray-700">
                {birthday.name} - {birthday.date}
              </span>
            </div>
            
            <button
              className="px-4 py-2 bg-accent text-white text-sm font-medium rounded-full cursor-pointer  hover:bg-primary hover:text-white transition shadow-md shadow-gray-400/50">
              Send Wish
            </button>
          </div>
        ))}
      </div>
    </Card>
  );
};

export default Birthdays;