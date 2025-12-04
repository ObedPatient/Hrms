import { Bell, Mail, User, Menu, X } from 'lucide-react';
import { useState } from 'react';

const TopNav = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  const navItems = [
    { id: 1, label: 'Dashboard', isActive: true },
    { id: 2, label: 'Requests', isActive: false },
    { id: 3, label: 'Payroll', isActive: false },
    { id: 4, label: 'Company', isActive: false },
    { id: 5, label: 'Extras', isActive: false },
  ];

  return (
    <div className="w-full bg-white border-b border-gray-200">
      <div className="flex items-center justify-between px-4 py-4 md:px-6 lg:px-8 max-w-7xl mx-auto">
        

        <div className="hidden md:flex items-center justify-center space-x-6 lg:space-x-8 flex-1">
          {navItems.map((item) => (
            <button
              key={item.id}
              className={`font-medium text-sm transition-colors duration-200 relative py-2 ${
                item.isActive
                  ? 'text-black'
                  : 'text-gray-600 hover:text-primary'
              }`}
            >
              {item.label}
              {item.isActive && (
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-accent transform translate-y-4"></div>
              )}
            </button>
          ))}
        </div>

        <div className="flex items-center space-x-4 md:space-x-6">
          <div className="hidden md:flex items-center space-x-4">
            <button className="relative p-2 rounded-full bg-primary hover:bg-primary/90 transition-colors duration-200 shadow-sm">
              <Bell className="w-5 h-5 text-white" />
              <span className="absolute -top-1 -right-1 min-w-[18px] h-[18px] flex items-center justify-center bg-red-500 rounded-full text-[10px] font-semibold text-white px-1">
                10
              </span>
            </button>
            
            <button className="relative p-2 rounded-full bg-green-500 hover:bg-green-600 transition-colors duration-200 shadow-sm">
              <Mail className="w-5 h-5 text-white" />
              <span className="absolute -top-1 -right-1 min-w-[18px] h-[18px] flex items-center justify-center bg-red-500 rounded-full text-[10px] font-semibold text-white px-1">
                10
              </span>
            </button>
          </div>

          <div className="hidden md:block h-6 w-px bg-gray-300"></div>

          <div className="flex items-center space-x-3 md:space-x-3">
            <div className="flex md:hidden items-center space-x-2">
              <button className="relative p-2 rounded-full bg-primary hover:bg-primary/90 transition-colors duration-200">
                <Bell className="w-5 h-5 text-white" />
                <span className="absolute -top-1 -right-1 min-w-[18px] h-[18px] flex items-center justify-center bg-red-500 rounded-full text-[10px] font-semibold text-white px-1">
                  10
                </span>
              </button>
            </div>

            <button className="relative">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 md:w-9 md:h-9 rounded-full bg-accent/20 flex items-center justify-center hover:bg-gray-100 transition-colors duration-200">
                  <User className="w-4 h-4 md:w-5 md:h-5 text-primary" />
                </div>
                <span className="hidden md:inline text-sm font-medium text-gray-700">
                  John Doe
                </span>
              </div>
            </button>

            <button 
              className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6 text-gray-700" />
              ) : (
                <Menu className="w-6 h-6 text-gray-700" />
              )}
            </button>
          </div>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden border-t border-gray-200 bg-white px-4 py-3">
          <div className="flex flex-col space-y-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                className={`text-left px-4 py-3 rounded-lg transition-colors duration-200 font-medium ${
                  item.isActive
                    ? 'bg-primary/10 text-primary border-l-4 border-primary'
                    : 'text-gray-700 hover:bg-gray-50'
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.label}
              </button>
            ))}
            
            <div className="pt-4 border-t border-gray-200 mt-2">
              <button className="flex items-center justify-between w-full px-4 py-3 rounded-lg hover:bg-gray-50 transition-colors">
                <div className="flex items-center space-x-3">
                  <div className="p-2 rounded-full bg-green-500">
                    <Mail className="w-4 h-4 text-white" />
                  </div>
                  <span className="font-medium text-gray-700">Messages</span>
                </div>
                <span className="bg-red-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                  10
                </span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TopNav;