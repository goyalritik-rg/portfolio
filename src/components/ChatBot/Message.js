import Sparkle from "@/common/svgs/Sparkle";
import { formatContent } from "@/lib/utils";
import { motion } from "framer-motion";
import { FaUser } from "react-icons/fa";

const Message = ({ message = {} }) => {
  const { id, sender, content, created_at } = message || {};

  const Icon = sender === "user" ? FaUser : Sparkle;

  const handleLinkClick = (e) => {
    if (e.target.tagName === "A" && e.target.closest(".message-content")) {
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
      className={`mb-4 gap-2.5 flex items-end ${
        sender === "user" ? "self-end flex-row-reverse" : "self-start"
      }`}
    >
      <Icon className={`fill-sky-500 size-5 shrink-0`} />

      <div
        className={`max-w-[85%] min-w-[80px] p-3.5 rounded-lg ${
          sender === "user"
            ? "bg-slate-700 text-white rounded-br-none shadow-md"
            : "bg-gray-800 text-gray-200 rounded-bl-none shadow-md"
        }`}
      >
        <div className="text-sm whitespace-pre-wrap message-content">
          {formatContent(content)}
        </div>

        <span className="text-[10px] opacity-60 block text-right mt-1.5">
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
