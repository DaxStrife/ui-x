import cn from "@/utils/cn";

export const Spinner = ({ className }) => {
  return (
    <div
      className={cn(
        `animate-spin inline-block size-6 border-[3px] border-current border-t-transparent text-blue-600 rounded-full ${className}`
      )}
      role="status"
      aria-label="loading"
    >
      <span className="sr-only">Loading...</span>
    </div>
  );
};
