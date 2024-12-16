import cn from "@/utils/cn";

const Main = ({ children, content, className = "", dir = "top", ...props }) => {
  const positions = {
    top: "left-1/2 -translate-x-1/2 bottom-full mb-2",
    right: "left-full top-1/2 -translate-y-1/2 ml-2",
    left: "right-full top-1/2 -translate-y-1/2 mr-2",
    bottom: "left-1/2 -translate-x-1/2 top-full mt-2",
  };

  const positionClass = positions[dir] || positions.top;

  return (
    <div {...props} className="group relative max-w-max">
      {children}
      <div
        role="tooltip"
        className={cn(
          `absolute w-full z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-800 rounded-lg shadow-sm opacity-0 group-hover:opacity-100 group-hover:visible group-hover:scale-100 ${positionClass} ${className}`
        )}
      >
        {content}
      </div>
    </div>
  );
};

export default Main;
