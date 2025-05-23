"use client";

import { twMerge } from "tailwind-merge";
import { motion } from "framer-motion";
import Loader from "./Loader";

const typeClasses = {
  primary:
    "bg-lime-400 text-neutral-950 border-lime-400 whitespace-nowrap hover:bg-white hover:border-white",
  secondary:
    "border-white bg-transparent hover:text-lime-400 hover:border-lime-400",
};

const loaderClasses = {
  primary: "text-neutral-950",
  secondary: "",
};

const sizeClasses = {
  sm: "h-10",
};

export const buttonClass = ({ type = "primary", size = "md", className }) => {
  return twMerge(
    "border h-12 rounded-full px-6 font-medium cursor-pointer relative transition-all duration-300 ease-in-out flex items-center",
    typeClasses[type],
    sizeClasses[size],
    className
  );
};

const Button = ({
  type = "primary",
  size = "md",
  className,
  loading = false,
  children = null,
  ...props
}) => {
  return (
    <motion.button
      whileTap={{ scale: 0.95 }}
      className={buttonClass({ type, size, className })}
      {...props}
      style={{ cursor: loading ? "progress" : "pointer" }}
    >
      <div
        className={twMerge(
          "flex items-center gap-1 justify-center",
          loading ? "invisible" : "visible"
        )}
      >
        {children}
      </div>

      {loading && (
        <span className="absolute inset-0 flex items-center justify-center">
          <Loader className={twMerge(loaderClasses[type])} />
        </span>
      )}
    </motion.button>
  );
};

export default Button;
