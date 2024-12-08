import { useRef, useEffect } from "react";
import cn from "../../utils/cn";

const Main = ({ option, setOption, items = [], className = "", styleBar = "", ...props }) => {
  const barRef = useRef(null);
  const buttonRefs = useRef([]);

  useEffect(() => {
    if (buttonRefs.current[option] && barRef.current) {
      const { offsetWidth, offsetLeft } = buttonRefs.current[option];
      barRef.current.style.width = `${offsetWidth}px`;
      barRef.current.style.left = `${offsetLeft}px`;
    }
  }, [option]);

  return (
    <div {...props} className={cn(`flex gap-1 bg-gray-800 w-max rounded-lg p-1 relative text-white ${className}`)}>
      {/* LINE */}
      <div
        ref={barRef}
        className={cn(`bg-slate-900 h-10 rounded-lg absolute duration-300 transition-all ${styleBar}`)}
      />

      {items.map((item, index) => {
        return (
          <button
            ref={(el) => (buttonRefs.current[index] = el)}
            key={`button-tab-${index}`}
            type="button"
            onClick={() => setOption(index)}
            className="py-2 px-4 z-0"
          >
            {item}
          </button>
        );
      })}
    </div>
  );
};

export default Main;
