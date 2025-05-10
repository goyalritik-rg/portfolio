"use client";

import PixelText from "@/common/components/PixelText";
import Tag from "@/common/ui-components/Tag";
import { useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const text =
  "I write code that looks good and works even better. Obsessive about clean UI, smooth animations, and responsive layouts — I turn Figma dreams into functional, user-friendly web experiences.";

const words = text.split(" ");

const Introduction = () => {
  const scrollRef = useRef(null);

  const [currentIndex, setCurrentIndex] = useState(0);

  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ["center end", "center center"],
  });

  const wordIndex = useTransform(scrollYProgress, [0, 1], [0, words.length]);

  useEffect(() => {
    wordIndex.on("change", (val) => setCurrentIndex(val));
  }, [wordIndex]);

  return (
    <section className="py-28 lg:pt-40 container mx-auto">
      <div className="sticky top-28 md:top-48 lg:top-32">
        <div className="flex justify-center">
          <Tag>Introduction</Tag>
        </div>

        <div
          ref={scrollRef}
          className="text-4xl/snug md:text-5xl/tight lg:text-6xl/tight text-center font-medium mt-10"
        >
          <div className="text-white/15">
            {words.map((word, index) => {
              const progress = Math.max(0, Math.min(1, currentIndex - index));

              return (
                <span
                  key={index}
                  style={{
                    color: `rgba(255, 255, 255, ${0.15 + progress * 0.85})`,
                    transition: "color 0.3s ease",
                  }}
                >{`${word} `}</span>
              );
            })}
          </div>

          <PixelText
            text="Crafting Web, One Pixel At A Time."
            className="text-lime-400 mt-10 md:mt-15 font-medium"
          />
        </div>
      </div>
    </section>
  );
};

export default Introduction;
