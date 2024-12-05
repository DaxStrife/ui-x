import cn from "@/utils/cn";

const Main = ({ children, className, ...props }) => {
  return (
    <button
      {...props}
      className={cn(
        `py-2 px-4 rounded-lg cursor-pointer text-sm text-slate-800 bg-slate-100 border border-slate-200 ring-slate-200 transition-all focus:ring-[3px] focus:ring-offset-0 focus:ring-slate-200 hover:bg-slate-200 hover:duration-300 hover:ease-in-out focus:bg-slate-100 disabled:cursor-default disabled:hover:bg-slate-100 ${className}`
      )}
    >
      {children}
    </button>
  );
};

export default Main;
