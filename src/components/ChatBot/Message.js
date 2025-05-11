import Sparkle from "@/common/svgs/Sparkle";
import { formatContent } from "@/lib/utils";
import { motion } from "framer-motion";
import { FaUser } from "react-icons/fa";

const Message = ({ message = {} }) => {
  const { id, sender, content, created_at } = message || {};

  const Icon = sender === "user" ? FaUser : Sparkle;

  const handleLinkClick = (e) => {
    if (e.target.tagName === "A") {
      return;
    }
  };

  return (
    <motion.div
      key={id}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      onClick={handleLinkClick}
      className={`mb-4 gap-2 flex items-end ${sender === "user" ? "self-end flex-row-reverse" : "self-start"}`}
    >
      <Icon className="fill-indigo-400 size-6" />

      <div
        className={`max-w-[80%] min-w-1/3 p-4 rounded-xl ${
          sender === "user"
            ? "bg-gradient-to-br from-indigo-600 to-indigo-700 text-white rounded-br-none shadow-lg"
            : "bg-gray-800 text-gray-100 rounded-bl-none shadow-md"
        }`}
      >
        <div className="text-sm whitespace-pre-wrap">
          {formatContent(content)}
        </div>

        <span className="text-[10px] opacity-70 block text-right">
          {new Date(created_at).toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
          })}
        </span>
      </div>
    </motion.div>
  );
};

export default Message;
