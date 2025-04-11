import { twMerge } from "tailwind-merge";
import { motion } from "framer-motion";

const typeClasses = {
  primary: "bg-lime-400 text-neutral-950 border-lime-400 whitespace-nowrap",
  secondary: "border-white text-white bg-transparent",
};

const sizeClasses = {
  sm: "h-10",
};

const Button = ({ type = "primary", size = "md", className, ...props }) => {
  return (
    <motion.button
      whileTap={{ scale: 0.95 }}
      className={twMerge(
        "border h-12 rounded-full px-6 font-medium cursor-pointer",
        typeClasses[type],
        sizeClasses[size],
        className
      )}
      {...props}
    />
  );
};

export default Button;
