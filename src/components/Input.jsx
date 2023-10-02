import { forwardRef, useId } from "react";

import { cn } from "../helper";

const Input = forwardRef(
  ({ label, type = "text", className = "", ...props }, ref) => {
    const id = useId();

    return (
      <>
        <div className="w-full">
          {label && (
            <label className="mb-1 inline-block  pl-1" htmlFor={id}>
              {label}
            </label>
          )}
          <input
            type={type}
            id={id}
            className={cn(
              "w-full rounded-lg border border-gray-200 bg-white px-3 py-2 text-black outline-none duration-200 focus:bg-gray-50",
              className,
            )}
            ref={ref}
            {...props}
          />
        </div>
      </>
    );
  },
);

export default Input;
