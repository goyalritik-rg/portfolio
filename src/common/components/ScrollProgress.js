"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const INITIAL_SCROLL_PROGRESS = 2;

const ScrollProgress = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const progress = (scrollPosition / (documentHeight - windowHeight)) * 100;

      setScrollProgress(progress);
      setIsVisible(progress >= INITIAL_SCROLL_PROGRESS);
    };

    window.addEventListener("scroll", handleScroll);

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed right-2 md:right-6 top-[40%] -translate-y-[40%] h-[200px] w-[2px] z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="absolute inset-0 rounded-full bg-white/10"></div>

          <motion.div
            className="absolute inset-0 origin-top rounded-full bg-green-600"
            style={{
              scaleY: scrollProgress / 100,
              transformOrigin: "top",
            }}
            transition={{ type: "spring", stiffness: 100 }}
          >
            <div className="absolute inset-[-1px] rounded-full bg-emerald-600 blur-[2px] opacity-50"></div>
          </motion.div>

          <motion.div
            className="absolute -left-8 top-1/2 -translate-y-1/2"
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
          >
            <span className="text-xs tracking-wider text-white/50">
              {Math.round(scrollProgress)}
            </span>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ScrollProgress;
