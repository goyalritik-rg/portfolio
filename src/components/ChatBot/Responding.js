import { motion } from "framer-motion";
import Sparkle from "@/common/svgs/Sparkle";

const Responding = () => {
  const dotColorClass = "bg-sky-500";

  return (
    <div className="self-start flex items-end gap-2.5 mb-4">
      <Sparkle className={`fill-sky-500 size-5 shrink-0`} />

      <motion.div
        initial={{ opacity: 0, y: 5 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.2 }}
        className="flex items-center space-x-2"
      >
        <div className="p-3 bg-gray-800 rounded-lg rounded-bl-none flex items-center space-x-1.5 shadow-md">
          <span
            className={`w-2 h-2 ${dotColorClass} rounded-full animate-bounce`}
            style={{ animationDelay: "0ms" }}
          ></span>
          <span
            className={`w-2 h-2 ${dotColorClass} rounded-full animate-bounce`}
            style={{ animationDelay: "150ms" }}
          ></span>
          <span
            className={`w-2 h-2 ${dotColorClass} rounded-full animate-bounce`}
            style={{ animationDelay: "300ms" }}
          ></span>
        </div>
      </motion.div>
    </div>
  );
};

export default Responding;
