import { Fragment, useState } from "react";

import cn from "@/utils/cn";

import { Ic_eye, Ic_eye_off } from "@/icons/Ic_eye";

const Main = ({ type = "text", placeholder = "", className = "", ...props }) => {
  const [openEye, setOpenEye] = useState(false);

  return (
    <div className="relative">
      <input
        {...props}
        type={type === "password" ? (openEye ? "text" : "password") : type}
        placeholder={placeholder}
        className={cn(
          `h-10 px-4 rounded-lg ring-slate-200 transition-all placeholder:text-slate-500 focus:ring-[3px] bg-slate-100 ${className}`
        )}
      />
      {type === "password" && (
        <Fragment>
          {!openEye && (
            <Ic_eye_off
              onClick={() => setOpenEye(true)}
              className="cursor-pointer absolute right-3 top-1/2 -translate-y-1/2"
            />
          )}
          {openEye && (
            <Ic_eye
              onClick={() => setOpenEye(false)}
              className="cursor-pointer absolute right-3 top-1/2 -translate-y-1/2"
            />
          )}
        </Fragment>
      )}
    </div>
  );
};

export default Main;
