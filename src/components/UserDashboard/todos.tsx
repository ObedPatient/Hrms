import React from 'react';
import { ChevronDown, MoreVertical } from 'lucide-react';
import Card from '../common/card';

const Todos: React.FC = () => {
  const todos = [
    'Complete Onboarding Document Upload',
    'Follow up on clients on documents',
    'Design wireframes for LMS',
    'Create case study for next IT project',
    'Follow up on clients on documents',
  ];

  return (
    <Card>
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold text-gray-800">To-dos</h2>

        <button
          aria-label="More options"
          className="p-2 rounded-full hover:bg-gray-100 transition"
        >
          <MoreVertical className="w-5 h-5 text-gray-600" />
        </button>
      </div>

      <div className="space-y-3">
        {todos.map((todo, index) => (
          <div
            key={index}
            className="flex items-center justify-between bg-[#e8f0fe] px-4 py-3 rounded-xl cursor-pointer">
            <span className="text-sm font-medium text-gray-700">
              {todo}
            </span>
            <ChevronDown className="w-4 h-4 text-gray-600" />
          </div>
        ))}
      </div>
    </Card>
  );
};

export default Todos;
