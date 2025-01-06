import cn from "@/utils/cn";

import { Ic_select } from "@/icons/Ic_arrow";

export const Select = ({ className = "", children, ...props }) => {
  return (
    <div className="relative max-w-min">
      <div className="absolute right-2 top-1/2 -translate-y-1/2">
        <Ic_select className="size-4" />
      </div>
      <select
        {...props}
        className={cn(
          `h-10 px-4 w-56 cursor-pointer rounded-lg ring-blue-200 transition-all placeholder:text-slate-500 focus:ring-[3px] bg-slate-100 appearance-none ${className}`
        )}
      >
        {children}
      </select>
    </div>
  );
};
