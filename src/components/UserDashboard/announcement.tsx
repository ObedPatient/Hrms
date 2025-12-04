import React from 'react';
import { ChevronDown, MoreVertical } from 'lucide-react';
import Card from '../common/card';

const Announcement: React.FC = () => {
  const announcements = [
    'Welcome saron - We have a new staff joining us ',
    'Sendforth for Project Manager : Kindly gather at the meeting hall',
    'Marriage Alert',
    'Office Space Update',
  ];

  return (
    <Card>
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold text-gray-800">Announcements</h2>

        <button
          aria-label="More options"
          className="p-2 rounded-full hover:bg-gray-100 transition"
        >
          <MoreVertical className="w-5 h-5 text-gray-600" />
        </button>
      </div>

      <div className="space-y-3 mb-16">
        {announcements.map((announcement, index) => (
          <div
            key={index}
            className="flex items-center justify-between bg-[#e8f0fe] px-4 py-3 rounded-xl cursor-pointer"
          >
            <span className="text-sm font-medium text-gray-700">
              {announcement}
            </span>
            <ChevronDown className="w-4 h-4 text-gray-600" />
          </div>
        ))}
      </div>
    </Card>
  );
};

export default Announcement;
