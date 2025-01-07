import { useRef } from "react";

import cn from "@/utils/cn";

export const ColorPicker = ({ value = "#1d4ed8", className, ...props }) => {
  const inputRef = useRef(null);

  return (
    <div className="relative max-w-max">
      <button
        type="button"
        onClick={() => inputRef.current?.click()}
        className={cn(`w-10 h-10 rounded-xl cursor-pointer ring-blue-200 focus:ring-[3px] ${className}`)}
        style={{ background: value }}
      />
      <input
        {...props}
        ref={inputRef}
        value={value}
        type="color"
        className="opacity-0 absolute h-full w-full left-0 top-0 -z-10"
      />
    </div>
  );
};
