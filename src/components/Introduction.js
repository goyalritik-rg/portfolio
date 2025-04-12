"use client";

import Tag from "@/common/ui-components/Tag";
import { useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { twMerge } from "tailwind-merge";

const text =
  "I write code that looks good and works even better. Obsessive about clean UI, smooth animations, and responsive layouts — I turn Figma dreams into functional, user-friendly web experiences.";

const words = text.split(" ");

const Introduction = () => {
  const scrollRef = useRef(null);

  const [currentIndex, setCurrentIndex] = useState(0);

  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ["start end", "end end"],
  });

  const wordIndex = useTransform(scrollYProgress, [0, 1], [0, words.length]);

  useEffect(() => {
    wordIndex.on("change", (val) => setCurrentIndex(val));
  }, [wordIndex]);

  return (
    <section className="py-28 lg:pt-40">
      <div className="container">
        <div className="sticky top-28 md:top-48 lg:top-32">
          <div className="flex justify-center">
            <Tag>Introduction</Tag>
          </div>

          <div className="text-4xl md:text-5xl lg:text-6xl text-center font-medium mt-10">
            <span className="text-white/15">
              {words.map((word, index) => {
                return (
                  <span
                    key={index}
                    className={twMerge(
                      "transition-all",
                      index < currentIndex && "text-white"
                    )}
                  >{`${word} `}</span>
                );
              })}
            </span>

            <br />

            <div className="text-lime-400 mt-4">
              Crafting Web, One Pixel At A Time.
            </div>
          </div>
        </div>

        <div className="h-[150vh]" ref={scrollRef}></div>
      </div>
    </section>
  );
};

export default Introduction;
