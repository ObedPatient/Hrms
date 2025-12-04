import React from 'react';
import Tabs from '../UserDashboard/tabs';  
import { NotebookText } from 'lucide-react';
import { Link } from 'react-router-dom';

const ApplyLeave: React.FC = () => {
  return (
    <div className="min-h-screen w-full bg-black flex flex-col">
      <div className="flex-1 max-w-7xl mx-auto w-full bg-gradient flex flex-col">
        <Tabs />
        <div className="px-20 flex-1 flex flex-col">
          <div className="text-2xl text-black mt-10 bg-white h-16 flex items-center">
                <p className='px-8 text-[16px]'>
                    <Link to="/dashboard" className="text-black hover:text-accent">
                    Dashboard
                    </Link>
                    <span className="mx-2">{'>'}</span>
                    <Link to="/leave" className="text-black hover:text-accent">
                    Leave Application
                    </Link>
                    <span className="mx-2">{'>'}</span>
                    <span className="text-blackz">Apply for Annual Leave</span>
                </p>
            </div>

          <div className="bg-white mt-6 p-8 shadow-sm">
            <div className="flex items-center gap-3 mb-6">
              <NotebookText className="w-7 h-7 text-black" />
              <h2 className="text-2xl text-gray-800">Leave Application</h2>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default ApplyLeave;