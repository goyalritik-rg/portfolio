import { motion } from "framer-motion";
import Sparkle from "@/common/svgs/Sparkle";

const Responding = () => {
  return (
    <div className="self-start flex items-end gap-3">
      <Sparkle className="fill-indigo-400 size-6" />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="flex items-center space-x-2 mt-4"
      >
        <div className="p-3 bg-gray-800 rounded-2xl rounded-bl-none flex items-center space-x-1">
          <span
            className="w-2 h-2 bg-indigo-400 rounded-full animate-bounce"
            style={{ animationDelay: "0ms" }}
          ></span>
          <span
            className="w-2 h-2 bg-indigo-400 rounded-full animate-bounce"
            style={{ animationDelay: "150ms" }}
          ></span>
          <span
            className="w-2 h-2 bg-indigo-400 rounded-full animate-bounce"
            style={{ animationDelay: "300ms" }}
          ></span>
        </div>
      </motion.div>
    </div>
  );
};

export default Responding;
