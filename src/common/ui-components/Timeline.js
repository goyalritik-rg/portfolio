"use client";

import { useScroll, useTransform, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export default function Timeline({ data }) {
  const ref = useRef(null);
  const containerRef = useRef(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 50%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div className="w-full bg-white dark:bg-neutral-950" ref={containerRef}>
      <div ref={ref} className="relative max-w-7xl mx-auto pb-20">
        {data.map((item, index) => {
          const { title, content, startDate, endDate, company, icon } = item;

          return (
            <div
              key={index}
              className="flex justify-between pt-10 md:pt-40 md:gap-15"
            >
              <div className="sticky flex flex-col lg:flex-row z-40 items-center top-1/5 self-start ">
                <div className="h-10 absolute left-3.5  w-10 rounded-full bg-white dark:bg-black flex max-md:-mt-1.5 items-center justify-center">
                  <div className="h-4 w-4 rounded-full bg-neutral-200 dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 p-2" />
                </div>

                <h3 className="hidden lg:flex flex-col text-xl md:pl-20 md:text-5xl font-bold text-neutral-500 dark:text-neutral-500 w-max">
                  <p className="text-base md:text-3xl">{`${startDate} - ${endDate ? endDate : "Present"}`}</p>
                  <div className="flex items-center gap-2">
                    {icon && <span className="mr-2 -mb-4">{icon}</span>}
                    <p className="mt-5 w-max">{title}</p>
                  </div>
                </h3>
              </div>

              <div className="relative pl-20 pr-4 lg:pl-4 w-full lg:w-[55%]">
                <h3 className="lg:hidden block text-2xl md:text-3xl mb-4 text-left font-bold text-neutral-500 dark:text-neutral-500">
                  <p> {title}</p>
                  <p className="text-lg md:text-xl">
                    {`${startDate} - ${endDate ? endDate : "Present"}`}
                  </p>
                </h3>

                <div className="flex gap-3 md:gap-5 flex-col">
                  <p className="text-base md:text-3xl font-semibold text-neutral-500">
                    {company}
                  </p>

                  <div className="text-xs md:text-base">{content}</div>
                </div>
              </div>
            </div>
          );
        })}

        <div
          style={{
            height: height + "px",
          }}
          className="absolute left-8 top-8 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-neutral-200 dark:via-neutral-700 to-transparent to-[99%]  [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)] "
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0 w-[2px] bg-gradient-to-t from-green-600 via-emerald-400 to-transparent from-[0%] via-[10%] rounded-full"
          />
        </div>
      </div>
    </div>
  );
}
