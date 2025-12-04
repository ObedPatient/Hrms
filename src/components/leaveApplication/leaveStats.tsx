import React, { useRef, useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom'; // If using React Router

const LeaveStats: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);

  const leaveTypes = [
    { 
      id: 1, 
      days: 60, 
      type: 'Annual Leave', 
      available: 60, 
      used: 0, 
      bgColor: 'bg-primary', 
      textColor: 'text-primary', 
      borderColor: 'border-primary',
      applyLink: '/leave/apply/annual' 
    },
    { 
      id: 2, 
      days: 20, 
      type: 'Sick Leave', 
      available: 20, 
      used: 0, 
      bgColor: 'bg-primary', 
      textColor: 'text-primary', 
      borderColor: 'border-primary',
      applyLink: '/leave/apply/sick'
    },
    { 
      id: 3, 
      days: 60, 
      type: 'Maternity Leave', 
      available: 60, 
      used: 0, 
      bgColor: 'bg-primary', 
      textColor: 'text-primary', 
      borderColor: 'border-primary',
      applyLink: '/leave/apply/maternity'
    },
    { 
      id: 4, 
      days: 30, 
      type: 'Paternity Leave', 
      available: 30, 
      used: 0, 
      bgColor: 'bg-primary', 
      textColor: 'text-primary', 
      borderColor: 'border-primary',
      applyLink: '/leave/apply/paternity'
    },
  ];

  const CARD_WIDTH = 350;
  const CARD_GAP = 24;
  const TOTAL_CARD_WIDTH = CARD_WIDTH + CARD_GAP;

  const scrollLeft = () => {
    if (containerRef.current) {
      const newIndex = Math.max(0, currentIndex - 1);
      containerRef.current.scrollLeft = newIndex * TOTAL_CARD_WIDTH;
      setCurrentIndex(newIndex);
    }
  };

  const scrollRight = () => {
    if (containerRef.current) {
      const newIndex = Math.min(leaveTypes.length - 1, currentIndex + 1);
      containerRef.current.scrollLeft = newIndex * TOTAL_CARD_WIDTH;
      setCurrentIndex(newIndex);
    }
  };

  const scrollToIndex = (index: number) => {
    if (containerRef.current) {
      containerRef.current.scrollLeft = index * TOTAL_CARD_WIDTH;
      setCurrentIndex(index);
    }
  };

  useEffect(() => {
    const updateArrows = () => {
      setShowLeftArrow(currentIndex > 0);
      setShowRightArrow(currentIndex < leaveTypes.length - 1);
    };
    updateArrows();
  }, [currentIndex, leaveTypes.length]);

  return (
    <div className="relative px-10"> 
      {showLeftArrow && (
        <button
          onClick={scrollLeft}
          className="absolute left-2 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-all duration-200 hover:scale-110 active:scale-95 border border-gray-200"
          aria-label="Scroll left"
        >
          <ChevronLeft className="w-6 h-6 text-gray-700" />
        </button>
      )}

      <div
        ref={containerRef}
        className="flex gap-6 overflow-x-hidden scroll-smooth py-4" 
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {leaveTypes.map((leave) => (
          <div 
            key={leave.id} 
            className={`${leave.bgColor} p-6 rounded-2xl border ${leave.borderColor} shadow-lg hover:shadow-xl transition-all duration-300 flex flex-row items-center justify-between w-[350px] flex-shrink-0`}
          >
            <div className="rounded-full bg-white w-24 h-24 flex items-center justify-center shadow-md border border-gray-100">
              <span className={`text-4xl font-bold ${leave.textColor}`}>{leave.days}</span>
            </div>
            
            <div className="flex flex-col items-end text-right ml-8">
              <p className="text-sm text-white mb-2 text-center">{leave.type}</p>
              
              {/* Option 1: Using React Router Link */}
              <Link 
                to={leave.applyLink}
                className="px-8 py-3 bg-accent text-black text-base font-semibold rounded-full hover:bg-accent-hover transition-all duration-200 shadow-lg hover:shadow-xl active:scale-95 whitespace-nowrap min-w-[120px] text-center"
              >
                Apply
              </Link>
            </div>
          </div>
        ))}
      </div>

      {showRightArrow && (
        <button
          onClick={scrollRight}
          className="absolute right-2 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-all duration-200 hover:scale-110 active:scale-95 border border-gray-200"
          aria-label="Scroll right"
        >
          <ChevronRight className="w-6 h-6 text-gray-700" />
        </button>
      )}

      <div className="flex justify-center gap-2 mt-6">
        {leaveTypes.map((_, index) => (
          <button
            key={index}
            onClick={() => scrollToIndex(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentIndex 
                ? 'bg-primary w-8' 
                : 'bg-gray-300 hover:bg-gray-400'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default LeaveStats;