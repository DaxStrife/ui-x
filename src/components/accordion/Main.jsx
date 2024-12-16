import { useState, useRef } from "react";

import cn from "@/utils/cn";

const Main = ({ className, title = "", onClick, children, ...props }) => {
  const [open, setOpen] = useState(false);
  const contentRef = useRef(null);

  const handleClick = (event) => {
    setOpen(!open);

    if (onClick) {
      onClick(event);
    }
  };

  return (
    <div {...props} onClick={handleClick} className={cn(`w-full cursor-pointer ${className}`)}>
      <div>{title}</div>
      <div
        onClick={() => setOpen(!open)}
        ref={contentRef}
        style={{ height: open ? contentRef.current.scrollHeight : 0 }}
        className="overflow-hidden transition-all duration-300 ease-in-out"
      >
        {children}
      </div>
    </div>
  );
};

export default Main;
