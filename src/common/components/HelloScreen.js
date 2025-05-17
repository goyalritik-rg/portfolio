"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const helloMessages = [
  "Hello",
  "你好",
  "Bonjour",
  "Hola",
  "こんにちは",
  "안녕하세요",
  "Ciao",
  "नमस्ते",
];

const HelloScreen = () => {
  const [activeHelloIndex, setActiveHelloIndex] = useState(0);
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    if (showSplash) {
      document.body.style.overflow = "hidden";
      document.body.style.pointerEvents = "none";
    } else {
      document.body.style.overflow = "";
      document.body.style.pointerEvents = "";
    }
  }, [showSplash]);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveHelloIndex((prevIndex) => {
        if (prevIndex >= helloMessages.length - 1) {
          clearInterval(interval);

          setTimeout(() => {
            setShowSplash(false);
          }, 300);

          return prevIndex;
        }
        return prevIndex + 1;
      });
    }, 200);

    const splashTimer = setTimeout(() => {
      setShowSplash(false);
    }, 2500);

    return () => {
      clearInterval(interval);
      clearTimeout(splashTimer);
    };
  }, []);

  return (
    <AnimatePresence>
      {showSplash && (
        <motion.div
          className="fixed top-0 left-0 right-0 bottom-0 bg-[#0a0a0a] flex items-center justify-center z-999"
          exit={{
            y: "-100%",
            transition: { duration: 0.7, ease: [0.65, 0, 0.35, 1] },
          }}
        >
          <div className="">
            {helloMessages.map((hello, index) => {
              if (activeHelloIndex !== index) {
                return null;
              }

              return (
                <div
                  key={hello}
                  className="text-4xl text-[#fff7e9] md:text-5xl lg:text-6xl font-light absolute left-1/2 top-[44%] transform -translate-x-1/2 flex items-center gap-3"
                >
                  <div className="w-4 h-4 bg-[#fff7e9] rounded-full"></div>
                  {hello}
                </div>
              );
            })}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default HelloScreen;
