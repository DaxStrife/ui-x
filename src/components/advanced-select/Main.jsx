import { useState, useRef, useEffect } from "react";

import cn from "@/utils/cn";
import { Ic_select } from "@/icons/Ic_arrow";

export const Options = ({ className, type = "button", children, ...props }) => {
  return (
    <button
      {...props}
      type={type}
      className={`py-1 px-2 text-left w-full cursor-pointer rounded-md hover:bg-slate-300 focus:bg-blue-500 focus:text-white ${className}`}
    >
      {children}
    </button>
  );
};

const Main = ({ className = "", value = "", children }) => {
  const [open, setOpen] = useState(false);
  const buttonRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (buttonRef.current && !buttonRef.current.contains(event.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div ref={buttonRef} className="relative max-w-min">
      <button
        onClick={() => setOpen(true)}
        type="button"
        className={cn(
          `py-2 px-4 h-10 w-56 rounded-lg ring-slate-200 transition-all focus:ring-[3px] relative bg-slate-100 text-left text-slate-500 ${className}`
        )}
      >
        {value}
        <div className="absolute right-2 top-1/2 -translate-y-1/2">
          <Ic_select className="size-4" />
        </div>
      </button>
      {open && (
        <div className="absolute z-10 left-0 top-full w-full">
          <div className="py-2 px-1 bg-slate-100 rounded-lg shadow-lg mt-2 w-full">
            <div
              id="select-option"
              className="max-h-52 overflow-y-auto [&::-webkit-scrollbar]:w-[6px] [&::-webkit-scrollbar-thumb]:bg-slate-600/50 [&::-webkit-scrollbar-thumb]:rounded-md"
            >
              {children}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Main;
