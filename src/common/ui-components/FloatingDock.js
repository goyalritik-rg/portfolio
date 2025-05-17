"use client";

import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";

import { useState } from "react";

export const FloatingDock = ({ items, className }) => {
  return (
    <div
      className={cn(
        "mx-auto h-16 rounded-2xl bg-gray-50 px-6 py-3 dark:bg-neutral-900 flex items-center gap-4",
        className
      )}
    >
      {items.map((item, idx) => (
        <IconContainer key={idx} {...item} />
      ))}
    </div>
  );
};

function IconContainer({ label, icon: Icon, href }) {
  const [hovered, setHovered] = useState(false);

  return (
    <a href={href}>
      <div
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className="rounded-full flex items-center justify-center aspect-square"
      >
        <AnimatePresence>
          {hovered && (
            <motion.div
              initial={{ opacity: 0, y: 10, x: "-50%" }}
              animate={{ opacity: 1, y: 0, x: "-50%" }}
              exit={{ opacity: 0, y: 2, x: "-50%" }}
              className="absolute -top-8 left-1/2 w-fit rounded-md border border-gray-200 bg-gray-100 px-2 py-0.5 text-xs whitespace-pre text-neutral-700 dark:border-neutral-900 dark:bg-neutral-800 dark:text-white"
            >
              {label}
            </motion.div>
          )}
        </AnimatePresence>

        <div className="flex items-center justify-center">
          <Icon className="size-10 hover:size-14 transition-all duration-300 ease-in-out fill-white" />
        </div>
      </div>
    </a>
  );
}
