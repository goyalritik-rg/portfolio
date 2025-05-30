"use client";

import useChatBot from "@/hooks/useChatBot";
import { motion, AnimatePresence } from "framer-motion";
import { Fragment } from "react";
import EmptyState from "./EmptyState";
import Messages from "./Messages";
import Responding from "./Responding";
import Banner from "@/common/components/Banner";

const ChatBot = () => {
  const {
    toggleChat,
    isOpen,
    messages,
    isTyping,
    handleSendMessage,
    messagesEndRef,
    input,
    setInput,
    inputRef,
  } = useChatBot();

  return (
    <Fragment>
      <motion.button
        onClick={toggleChat}
        className="fixed cursor-pointer bottom-6 right-6 bg-blue-600 text-white rounded-full p-4 shadow-xl z-20 hover:bg-blue-700 transition-all duration-300"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        aria-label="Chat with AI assistant"
      >
        {isOpen ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
            />
          </svg>
        )}
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed bottom-0 right-0 md:bottom-24 md:right-6 w-full md:w-96 h-[85dvh] md:h-[600px] bg-gray-900 rounded-t-lg md:rounded-lg shadow-2xl z-100 flex flex-col overflow-hidden border border-gray-700"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.3 }}
          >
            <div className="bg-gray-800 p-4 flex justify-between items-center border-b border-gray-700">
              {/* <div className="flex items-center space-x-3">
                <div className="h-2.5 w-2.5 rounded-full bg-green-500"></div>
                <h3 className="font-semibold text-md text-gray-100">
                  AI Assistant
                </h3>
              </div> */}

              <Banner />

              <button
                onClick={toggleChat}
                className="text-gray-400 hover:bg-gray-700 rounded-full p-1.5 transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            <div className="flex-1 p-4 overflow-y-auto bg-gray-900 text-gray-200 chat-window">
              {messages.length === 0 ? (
                <EmptyState setInput={setInput} />
              ) : (
                <Messages messages={messages} />
              )}
              {isTyping && <Responding />}
              <div ref={messagesEndRef} />
            </div>

            <form
              onSubmit={handleSendMessage}
              className="p-4 border-t border-gray-700 bg-gray-900"
            >
              <div className="flex relative items-center">
                <input
                  type="text"
                  ref={inputRef}
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Type your message..."
                  className={`flex-1 border border-gray-600 bg-gray-800 text-gray-100 rounded-full px-5 py-3 focus:outline-none focus:ring-2 focus:ring-slate-500 focus:border-transparent placeholder-gray-500 pr-12`}
                />

                <button
                  type="submit"
                  disabled={!input.trim()}
                  className="absolute right-[10px] top-[8px] bg-gradient-to-r from-blue-600 to-sky-600 hover:from-blue-700 hover:to-sky-700 rounded-full p-2 disabled:opacity-50 transition-all duration-300 disabled:cursor-not-allowed"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-white rotate-45 -mr-[2px] -mt-[2px]"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
                  </svg>
                </button>
              </div>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </Fragment>
  );
};

export default ChatBot;
