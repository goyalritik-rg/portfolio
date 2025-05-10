"use client";

import CustomCursor from "@/common/components/CustomCursor";
import { motion, useAnimate } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { twMerge } from "tailwind-merge";

const CallToAction = () => {
  const ref = useRef();

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

  return (
    <section className="py-24 w-[100vw] md:ml-[-12%] lg:ml-[-21%]">
      <div className="overflow-x-clip p-4 flex">
        <CustomCursor showCustomCursor={hovered} />

        <motion.div
          ref={scope}
          className="flex flex-none gap-16 pr-16 text-6xl md:text-8xl font-medium cursor-pointer"
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          style={{ cursor: hovered ? "none" : "pointer" }}
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
                  Work With Me!
                </span>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default CallToAction;
