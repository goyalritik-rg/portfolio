"use client";

import { motion, useScroll } from "framer-motion";

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      id="scroll-indicator"
      className="bg-lime-400 z-100 fixed top-0 left-0 right-0 h-1"
      style={{
        scaleX: scrollYProgress,
        originX: 0,
      }}
    />
  );
}
