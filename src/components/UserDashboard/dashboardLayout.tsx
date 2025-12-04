import React from 'react';
import Header from './header';
import QuickActions from './quickActions';
import LeaveDays from './leaveDays';
import Todos from './todos';
import Tabs from './tabs';  
import Announcement from './announcement';
import PayslipBreakdown from './paySlip';
import Birthdays from './birthDays';

const DashboardLayout: React.FC = () => {
  return (
    <div className="min-h-screen w-full bg-black flex flex-col">
      <div className="flex-1 max-w-7xl mx-auto w-full bg-gradient flex flex-col">
        
        <Tabs />

        <div className="px-20 flex-1 flex flex-col">
          <Header />
          <QuickActions />
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 flex-1 mt-6">
            <div className="space-y-6 h-full">
              <LeaveDays />
            </div>
            <div className="space-y-6 h-full">
              <Todos />
            </div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 flex-1 mt-15">
            <div className="space-y-6 h-full">
              <Announcement />
            </div>
            <div className="space-y-6 h-full">
              <PayslipBreakdown />
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 flex-1 mt-15 mb-16"> 
            <div className="space-y-6 h-full">
              <Birthdays />
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default DashboardLayout;