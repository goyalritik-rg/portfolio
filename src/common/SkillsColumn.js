"use client";

import { twMerge } from "tailwind-merge";
import { motion } from "framer-motion";
import { Fragment } from "react";
const { default: Image } = require("next/image");

function SkillsColumn({ skillsArray = [], reverse = false, className = "" }) {
  return (
    <motion.div
      initial={{ y: reverse ? "-50%" : 0 }}
      animate={{ y: reverse ? 0 : "-50%" }}
      transition={{
        duration: 16,
        repeat: Infinity,
        ease: "linear",
      }}
      className={twMerge("flex flex-col gap-4 pb-4", className)}
    >
      {Array.from({ length: 2 }).map((_, i) => {
        return (
          <Fragment key={i}>
            {skillsArray.map((skill) => {
              return (
                <div
                  key={skill.name}
                  className="bg-neutral-900 border border-white/10 p-6 rounded-3xl"
                >
                  <div className="flex justify-center">
                    <Image
                      src={skill.icon}
                      alt={skill.name}
                      className="size-24"
                    />
                  </div>

                  <h3 className="text-3xl text-center mt-6">{skill.name}</h3>

                  <p className="text-center text-white/50 mt-2 text-sm">
                    {skill.description}
                  </p>
                </div>
              );
            })}
          </Fragment>
        );
      })}
    </motion.div>
  );
}

export default SkillsColumn;
