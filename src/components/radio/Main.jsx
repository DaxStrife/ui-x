import cn from "@/utils/cn";

export const Radio = ({ className = "", ...props }) => {
  return <input {...props} type="radio" className={cn(`h-5 w-5 cursor-pointer accent-blue-700 ${className}`)} />;
};
