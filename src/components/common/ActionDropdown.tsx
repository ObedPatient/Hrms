import React, { useState, useRef, useEffect } from "react";
import { ChevronDown } from "lucide-react";

export interface DropdownAction<T> {
  label: string;
  onClick?: (row: T) => void;
  href?: string; 
  colorClass?: string;
}

interface ActionDropdownProps<T> {
  row: T;
  actions: DropdownAction<T>[];
  buttonLabel?: string;
  buttonClassName?: string;
  showDividers?: boolean; 
}

const ActionDropdown = <T extends Record<string, any>>({
  row,
  actions,
  buttonLabel = "Actions",
  buttonClassName = "",
  showDividers = true, 
}: ActionDropdownProps<T>) => {
  const [open, setOpen] = useState(false);
  const [buttonFullWidth, setButtonFullWidth] = useState<number>(0);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    if (buttonRef.current) {
      const rect = buttonRef.current.getBoundingClientRect();
      setButtonFullWidth(rect.width);
    }
  }, [open]);

  return (
    <div ref={dropdownRef} className="relative inline-block">
      <button
        ref={buttonRef}
        onClick={() => setOpen((prev) => !prev)}
        className={`px-4 py-2 rounded-lg text-sm bg-primary font-medium border border-primary text-white hover:bg-primary-light flex items-center justify-center gap-2 transition-colors min-w-[100px] ${buttonClassName}`}
      >
        {buttonLabel}
        <span className="rounded-full bg-white"><ChevronDown className={`w-4 h-4 text-black transition-transform hover:text-accent ${open ? "rotate-180" : ""}`} /></span>
      </button>

      {open && buttonFullWidth > 0 && (
        <div 
          className="absolute bg-primary rounded-lg shadow-lg border border-gray-200 z-50 overflow-hidden py-0 box-border"
          style={{ 
            width: `${buttonFullWidth}px`,
            left: 0,
            top: '100%',
            marginTop: '4px',
          }}
        >
          {actions.map((action, i) => {
            const handleAction = () => {
              setOpen(false);
              action.onClick?.(row);
            };

            const content = (
              <div className="w-full">
                {action.href ? (
                  <a
                    href={action.href}
                    className={`block w-full text-left px-4 py-3 text-sm hover:bg-gray-50 transition-colors cursor-pointer ${
                      action.colorClass || "text-gray-700"
                    }`}
                    onClick={() => setOpen(false)}
                  >
                    {action.label}
                  </a>
                ) : (
                  <button
                    onClick={handleAction}
                    className={`block w-full text-left px-4 py-3 text-sm hover:bg-primary hover:text-accent transition-colors cursor-pointer ${
                      action.colorClass || "text-primary-gray"
                    }`}
                  >
                    {action.label}
                  </button>
                )}
                
                {showDividers && i < actions.length - 1 && (
                  <hr className="border-t border-gray-100 mx-0" />
                )}
              </div>
            );

            return <div key={i}>{content}</div>;
          })}
        </div>
      )}
    </div>
  );
};

export default ActionDropdown;