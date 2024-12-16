import cn from "@/utils/cn";
import useRipple from "@/hooks/useRipple";

const Main = ({ children, className = "", onClick = () => {}, ...props }) => {
  const { createRipple, buttonRef } = useRipple();

  const handleClick = (event) => {
    createRipple(event);

    if (onClick) {
      onClick(event);
    }
  };

  return (
    <button
      {...props}
      ref={buttonRef}
      onClick={handleClick}
      className={cn(
        `py-2.5 px-4 rounded-lg cursor-pointer text-sm text-slate-800 bg-slate-100 border border-slate-200 relative overflow-hidden disabled:cursor-default disabled:hover:bg-slate-100 select-none`,
        className
      )}
    >
      {children}
    </button>
  );
};

export default Main;
