import React from 'react';
import Card from '../common/card';

const Birthdays: React.FC = () => {
  const birthdays = [
    { name: 'John Doe', date: 'Today, April 25th', isToday: true },
    { name: 'Jane Smith', date: 'Tomorrow, April 26th', isToday: false },
    { name: 'Robert Johnson', date: 'April 27th', isToday: false },
    { name: 'Sarah Williams', date: 'April 28th', isToday: false },
    { name: 'Mike Brown', date: 'April 29th', isToday: false },
  ];

  return (
    <Card title="Birthdays">
      <div className="space-y-4">
        {birthdays.map((birthday, index) => (
          <div 
            key={index} 
            className={`p-4 rounded-lg ${birthday.isToday ? 'bg-blue-50 border border-blue-100' : 'bg-white border border-gray-200'}`}
          >
            <div className="flex items-start justify-between">
              <div className="flex items-center">
                <div className={`p-2 rounded-full ${birthday.isToday ? 'bg-blue-100' : 'bg-gray-100'}`}>
                  {/* Cake icon as SVG */}
                  <svg 
                    className={`w-5 h-5 ${birthday.isToday ? 'text-blue-600' : 'text-gray-600'}`} 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24" 
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M21 15.546c-.523 0-1.046.151-1.5.454a2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.701 2.701 0 00-1.5-.454M9 6v2m3-2v2m3-2v2M9 3h.01M12 3h.01M15 3h.01M21 21v-7a2 2 0 00-2-2H5a2 2 0 00-2 2v7h18zm-3-9v-2a2 2 0 00-2-2H8a2 2 0 00-2 2v2h12z" 
                    />
                  </svg>
                </div>
                <div className="ml-3">
                  <h4 className={`text-sm font-medium ${birthday.isToday ? 'text-blue-800' : 'text-gray-900'}`}>
                    {birthday.name}
                  </h4>
                  <p className={`text-xs ${birthday.isToday ? 'text-blue-600' : 'text-gray-500'} mt-1`}>
                    {birthday.date}
                  </p>
                </div>
              </div>
              
              <button className={`px-4 py-1.5 text-sm font-medium rounded-full ${birthday.isToday ? 'bg-blue-600 text-white hover:bg-blue-700' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'} transition-colors duration-200`}>
                {birthday.isToday ? 'Send Wishes' : 'Remind'}
              </button>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
};

export default Birthdays;