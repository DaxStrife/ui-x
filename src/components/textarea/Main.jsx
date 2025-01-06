import cn from "@/utils/cn";

export const TextArea = ({ placeholder = "", className = "", ...props }) => {
  return (
    <textarea
      {...props}
      placeholder={placeholder}
      // style={{ fieldSizing: "content" }}
      className={cn(
        `py-2 px-4 w-56 rounded-lg ring-blue-200 transition-all placeholder:text-slate-500 focus:ring-[3px] bg-slate-100 [&::-webkit-scrollbar]:w-[6px] [&::-webkit-scrollbar-thumb]:bg-slate-600/50 [&::-webkit-scrollbar-thumb]:rounded-md ${className}`
      )}
    />
  );
};
