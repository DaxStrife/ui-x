import cn from "@/utils/cn";

export const Switch = ({ value, setValue, className = "", ...props }) => {
  return (
    <div className="inline-flex cursor-pointer">
      <input {...props} type="checkbox" value="" className="sr-only peer" onChange={() => {}} checked={value} />
      <div
        onClick={() => setValue(!value)}
        className={cn(
          `relative w-10 h-4 after:h-5 after:w-5 bg-slate-100 peer-focus:ring-blue-200 peer-checked:bg-blue-700 after:bg-white after:border-slate-400 after:start-[0px] peer-focus:outline-none peer-focus:ring-4 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute  after:top-1/2 after:-translate-y-1/2 after:border after:rounded-full after:transition-all ${className}`
        )}
      />
    </div>
  );
};
