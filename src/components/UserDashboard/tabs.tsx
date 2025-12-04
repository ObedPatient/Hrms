import { Bell, Mail, User } from 'lucide-react';

const TopNav = () => {
  const navItems = [
    { id: 1, label: 'Dashboard', isActive: true },
    { id: 2, label: 'Requests', isActive: false },
    { id: 3, label: 'Payroll', isActive: false },
    { id: 4, label: 'Company', isActive: false },
    { id: 5, label: 'Extras', isActive: false },
  ];

  return (
    <div className="w-full bg-white border-b border-gray-200 px-6 py-4">
      <div className="flex items-center justify-between max-w-7xl mx-auto px-20">
        <div className="w-40"></div>

        <div className="flex items-center justify-center space-x-8 flex-1 relative">
          {navItems.map((item) => (
            <button
              key={item.id}
              className={`font-medium text-sm transition-colors duration-200 relative py-2 ${
                item.isActive
                  ? 'text-black'
                  : 'text-primary-gray hover:text-primary'
              }`}
            >
              {item.label}
              {item.isActive && (
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-accent transform translate-y-4"></div>
              )}
            </button>
          ))}
        </div>

        <div className="flex items-center space-x-6">
        <div className="flex items-center space-x-4">
            <button className="relative p-2 rounded-full bg-primary hover:bg-primary-gray transition-colors duration-200 shadow-primary-gray shadow-sm">
            <Bell className="w-5 h-5 text-white" />
            <span className="absolute -top-1 -right-1 min-w-[18px] h-[18px] flex items-center justify-center bg-red-500 border-accent rounded-full border text-[10px] font-semibold text-white px-1">
                10
            </span>
            </button>
            
            <button className="relative p-2 rounded-full  bg-green-400 hover:bg-primary-gray transition-colors duration-200 shadow-primary-gray shadow-sm">
            <Mail className="w-5 h-5 text-white" />
            <span className="absolute -top-1 -right-1 min-w-[18px] h-[18px] flex items-center justify-center bg-red-500 border-accent rounded-full border  text-[10px] font-semibold text-white px-1">
                10
            </span>
            </button>
        </div>

        <div className="h-6 w-px bg-gray-300"></div>

        <div className="flex items-center space-x-3">
            <button className="relative">
            <div className="flex items-center space-x-2">
                <div className="w-8 h-8 rounded-full bg-accent flex items-center justify-center hover:bg-gray-200 transition-colors duration-200">
                <User className="w-4 h-4 text-primary" />
                </div>
            </div>
            </button>
        </div>
        </div>
      </div>
    </div>
  );
};

export default TopNav;