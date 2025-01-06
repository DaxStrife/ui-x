import { useEffect, useRef } from "react";

import cn from "@/utils/cn";

export const Drawer = ({ open = false, setOpen = () => {}, dir = "right", children, className = "", ...props }) => {
  const elementRef = useRef(null);

  const directions = {
    left: `top-0 left-0 h-full max-w-xs lg:max-w-lg 2xl:max-w-2xl ${
      !open ? "-translate-x-full opacity-0" : "translate-x-0"
    }`,
    right: `top-0 right-0 h-full max-w-xs lg:max-w-lg 2xl:max-w-2xl ${
      !open ? "translate-x-full opacity-0" : "-translate-x-0"
    }`,
    top: `top-0 left-0 h-auto max-w-full ${!open ? "-translate-y-full opacity-0" : "translate-y-0"}`,
    bottom: `bottom-0 left-0 h-auto max-w-full ${!open ? "translate-y-full opacity-0" : "-translate-y-0"}`,
  };

  useEffect(() => {
    const element = elementRef.current;
    if (element) {
      if (open) {
        document.body.classList.add("overflow-hidden");
      } else {
        document.body.classList.remove("overflow-hidden");
      }
    }
  }, [open]);

  return (
    <div>
      <div
        ref={elementRef}
        onClick={() => setOpen(false)}
        className={`fixed z-50 cursor-pointer inset-0 bg-black/30 bg-opacity-75 transition-all ease-in duration-1000 w-screen h-screen ${
          !open && "hidden"
        }`}
      />

      <div
        className={cn(
          `fixed z-[999] transition ease-in duration-300 bg-white w-full shadow-xl pointer-events-auto overflow-hidden p-6 ${className} ${directions[dir]}`
        )}
      >
        {children}
      </div>
    </div>
  );
};
