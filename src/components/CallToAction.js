"use client";

import { EMAIL } from "@/constants";
import { motion, useAnimate, AnimatePresence } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { twMerge } from "tailwind-merge";

const CallToAction = () => {
  const ref = useRef();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(false);
  const [scope, animate] = useAnimate();

  useEffect(() => {
    ref.current = animate(
      scope.current,
      { x: "-50%" },
      { duration: 40, repeat: Infinity, ease: "linear" }
    );
  }, []);

  useEffect(() => {
    if (ref.current) {
      ref.current.speed = hovered ? 0.25 : 1;
    }
  }, [hovered]);

  const handleMouseMove = (e) => {
    setMousePosition({ x: e.clientX, y: e.clientY });
  };

  return (
    <section className="py-24 w-[100vw] relative" onMouseMove={handleMouseMove}>
      <div
        className="overflow-x-clip p-4 flex"
        role="presentation"
        onClick={() => {
          window.open(`mailto:${EMAIL}`, "_blank");
        }}
      >
        <motion.div
          ref={scope}
          className="flex flex-none gap-16 pr-16 text-6xl md:text-[80px] font-medium"
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          {Array.from({ length: 10 }).map((_, i) => {
            return (
              <div key={i} className="flex items-center gap-16">
                <span className="text-lime-400 text-7xl">&#10038;</span>
                <span
                  className={twMerge(
                    "transition-all",
                    hovered && "text-lime-300"
                  )}
                >
                  Let&apos;s Connect
                </span>
              </div>
            );
          })}
        </motion.div>
      </div>

      <AnimatePresence>
        {hovered && (
          <motion.div
            className="fixed px-3 py-1 w-fit rounded-full font-medium bg-purple-600 text-foreground text-sm"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{
              type: "spring",
              stiffness: 500,
              damping: 25,
              mass: 0.5,
            }}
            style={{
              left: mousePosition.x + 25,
              top: mousePosition.y + 15,
            }}
          >
            Yes, please 🙌
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default CallToAction;
