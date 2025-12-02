import React from 'react';
import { MoreVertical } from 'lucide-react';
import Card from '../common/card';

const LeaveDays: React.FC = () => {
  const leaves = [
    { type: 'Annual Leave', used: 10, total: 60, color: 'bg-[#233f9b]' },
    { type: 'Sick Leave', used: 0, total: 10, color: 'bg-[#233f9b]' },
    { type: 'Compassionate Leave', used: 8, total: 15, color: 'bg-[#233f9b]' },
  ];

  return (
    <Card>
      <div className="flex items-center justify-between mb-5">
        <h2 className="text-lg font-semibold text-gray-800">Available Leave Days</h2>

        <button
          aria-label="More options"
          className="p-2 rounded-full hover:bg-gray-100 transition"
        >
          <MoreVertical className="w-5 h-5 text-gray-600" />
        </button>
      </div>

      <div className="space-y-6">
        {leaves.map((leave, index) => {
          const percentage = (leave.used / leave.total) * 100;

          return (
            <div key={index} className="space-y-2 mb-12">
              <div className="flex justify-between text-sm font-medium text-gray-700">
                <span>{leave.type}</span>
                <span>{leave.used} of {leave.total} day(s)</span>
              </div>

              <div className="w-full h-3 bg-[#e2e5ef] rounded">
                <div
                  className={`h-3 rounded ${leave.color}`}
                  style={{ width: `${percentage}%` }}
                ></div>
              </div>
            </div>
          );
        })}
      </div>
    </Card>
  );
};

export default LeaveDays;
