import React from 'react';
import { User } from 'lucide-react';
import arrowImage from '../../assets/arrow.png';
import { Link } from 'react-router-dom';

const DashboardHeader: React.FC = () => {
  return (
    <div className="mt-8">
      <div className="relative rounded-xl mb-8"> 
        <h2 className='mb-4 text-2xl font-bold text-gray-900'>Dashboard</h2>
        <div className="bg-primary border border-gray-200 rounded-xl overflow-hidden relative">
          <div className="px-8 py-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="relative w-12 h-12 rounded-full border-2 border-white overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-9 h-9 rounded-full flex items-center justify-center">
                      <User className="w-4 h-4 text-white" />
                    </div>
                  </div>
                </div>
                <div>
                  <h1 className="text-lg font-semibold text-white">Redwan husein</h1>
                  <p className="text-white/80 text-sm mt-0.5">UI / UX Designer & UX Writer</p>
                </div>
              </div>

              <div className="flex items-center pr-20">
                <button className="px-4 py-2 bg-accent border border-gray-300 text-black font-medium rounded-lg hover:bg-accent hover:border-primary transition-colors duration-200 flex items-center space-x-2 shadow-sm text-sm">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                  </svg>
                  <span><Link to="/edit-profile">Edit Profile</Link></span>
                </button>
              </div>
            </div>
          </div>

          <div className="absolute right-0 top-1/2 transform -translate-y-1/2 -rotate-45"> 
            <img 
              src={arrowImage} 
              alt="Arrow" 
              className="w-16 h-16 object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardHeader;