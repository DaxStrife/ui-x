import cn from "@/utils/cn";

const Main = ({ children, className = "", ...props }) => {
  return (
    <div {...props} className={cn(`mx-4 md:mx-8 2xl:mx-auto 2xl:container ${className}`)}>
      {children}
    </div>
  );
};

export default Main;
