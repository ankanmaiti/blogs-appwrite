import React from "react";
import { cn } from "../helper";

export default function Button({
  children,
  type = "button",
  className = "",
  ...props
}) {
  return (
    <button
      type={type}
      className={cn(`rounded-lg bg-blue-600 px-4 py-2 text-white`, className)}
      {...props}
    >
      {children}
    </button>
  );
}
