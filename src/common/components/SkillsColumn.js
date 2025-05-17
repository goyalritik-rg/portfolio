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
        duration: 40,
        repeat: Infinity,
        ease: "linear",
      }}
      className={twMerge("flex flex-col gap-4 pb-4", className)}
    >
      {Array.from({ length: 2 }).map((_, i) => {
        return (
          <Fragment key={i}>
            {skillsArray.map((skill, idx) => {
              return (
                <div
                  key={`${i}-${idx}`}
                  className="bg-neutral-900 border border-white/10 p-6 rounded-3xl flex justify-center items-center flex-col"
                >
                  <div className="flex justify-center items-center rounded-[24px] bg-white h-20 w-20 md:h-32 md:w-32 ">
                    <Image
                      src={skill.icon}
                      alt={skill.name}
                      className="size-10 md:size-18"
                    />
                  </div>

                  <h3 className="text-xl md:text-3xl text-center mt-2 md:mt-6">
                    {skill.name}
                  </h3>

                  <p className="text-center text-white/50 mt-2 text-sm max-sm:hidden">
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
