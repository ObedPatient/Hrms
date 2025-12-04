import React from 'react';
import { Link } from 'react-router-dom';

const QuickActions: React.FC = () => {
  const actions = [
    { 
      name: 'Apply for Leave', 
      path: '/leave' 
    },
    { 
      name: 'KPI Goals', 
      path: '/kpi-goals' 
    },
    { 
      name: 'Take Appraisal', 
      path: '/appraisal' 
    },
    { 
      name: 'View Payslip', 
      path: '/payslip' 
    },
    { 
      name: 'Update Profile', 
      path: '/edit-profile' 
    },
    { 
      name: 'Events', 
      path: '/events' 
    },
  ];

  return (
    <div className="py-6">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">Quick Actions</h2>
      <div className="flex flex-wrap gap-4"> 
        {actions.map((action, index) => (
          <Link
            key={index}
            to={action.path}
            className="flex items-center justify-center w-[170px] h-[40px] bg-white hover:bg-primary hover:text-white text-gray-700 rounded-[30px] cursor-pointer transition-colors duration-200 text-base font-medium no-underline"
          >
            {action.name}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default QuickActions;