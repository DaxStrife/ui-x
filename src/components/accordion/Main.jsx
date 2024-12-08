import { useState, useRef } from "react";

import cn from "../../utils/cn";

const Main = ({ className, title = "", children, ...props }) => {
  const [open, setOpen] = useState(false);
  const contentRef = useRef(null);

  return (
    <div {...props} onClick={() => setOpen(!open)} className={cn(`w-full cursor-pointer ${className}`)}>
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
