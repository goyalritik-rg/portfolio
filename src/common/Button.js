import { twMerge } from "tailwind-merge";
import { motion } from "framer-motion";
import Loader from "./Loader";

const typeClasses = {
  primary: "bg-lime-400 text-neutral-950 border-lime-400 whitespace-nowrap",
  secondary: "border-white text-white bg-transparent",
};

const loaderClasses = {
  primary: "text-neutral-950",
  secondary: "",
};

const sizeClasses = {
  sm: "h-10",
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
      className={twMerge(
        "border h-12 rounded-full px-6 font-medium cursor-pointer relative",
        typeClasses[type],
        sizeClasses[size],
        className
      )}
      {...props}
      style={{ cursor: loading ? "progress" : "pointer" }}
    >
      <span className={loading ? "invisible" : "visible"}>{children}</span>

      {loading && (
        <span className="absolute inset-0 flex items-center justify-center">
          <Loader className={twMerge(loaderClasses[type])} />
        </span>
      )}
    </motion.button>
  );
};

export default Button;
