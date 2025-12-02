import React from 'react';

const QuickActions: React.FC = () => {
  const actions = [
    'Apply for Leave',
    'KPI Goals', 
    'Take Appraisal',
    'View Payslip',
    'Update Profile',
    'Events',
  ];

  return (
    <div className="py-6">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">Quick Actions</h2>
      <div className="flex flex-wrap gap-4"> 
        {actions.map((action, index) => (
          <div
            key={index}
            className="flex items-center justify-center w-[170px] h-[40px] bg-white hover:bg-primary hover:text-white text-gray-700 rounded-[30px] cursor-pointer transition-colors duration-200 text-base font-medium" 
          >
            {action}
          </div>
        ))}
      </div>
    </div>
  );
};

export default QuickActions;