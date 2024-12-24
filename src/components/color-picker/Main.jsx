import { useRef } from "react";

import cn from "@/utils/cn";

const Main = ({ value = "#1d4ed8", setValue, className }) => {
  const inputRef = useRef(null);

  return (
    <div className="relative max-w-max">
      <button
        type="button"
        onClick={() => inputRef.current?.click()}
        className={cn(`w-10 h-10 rounded-xl cursor-pointer ring-slate-200 focus:ring-[3px] ${className}`)}
        style={{ background: value }}
      />
      <input
        ref={inputRef}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        type="color"
        className="opacity-0 absolute h-full w-full left-0 top-0 -z-10"
      />
    </div>
  );
};

export default Main;
