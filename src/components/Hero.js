"use client";

import Button from "@/common/Button";
import Pointer from "@/common/Pointer";
import SampleBlock from "@/common/SampleBlock";
import { motion, useAnimate } from "framer-motion";
import { useEffect } from "react";
import downloadSvg from "@/assets/download.svg";

import customCursor from "@/assets/cursor-you.svg";
import Image from "next/image";

const Hero = () => {
  const [leftDesignScope, leftDesignAnimate] = useAnimate();
  const [leftPointerScope, leftPointerAnimate] = useAnimate();
  const [rightDesignScope, rightDesignAnimate] = useAnimate();
  const [rightPointerScope, rightPointerAnimate] = useAnimate();

  useEffect(() => {
    leftDesignAnimate([
      [leftDesignScope.current, { opacity: 1 }, { duration: 0.5 }],
      [leftDesignScope.current, { y: 0, x: 0 }, { duration: 0.5 }],
    ]);

    leftPointerAnimate([
      [leftPointerScope.current, { opacity: 1 }, { duration: 0.5 }],
      [leftPointerScope.current, { y: 0, x: -100 }, { duration: 0.5 }],
      [
        leftPointerScope.current,
        { x: 0, y: [0, 16, 0] },
        { duration: 0.5, ease: "easeInOut" },
      ],
    ]);

    rightDesignAnimate([
      [rightDesignScope.current, { opacity: 1 }, { duration: 0.5, delay: 1.5 }],
      [rightDesignScope.current, { y: 0, x: 0 }, { duration: 0.5 }],
    ]);

    rightPointerAnimate([
      [
        rightPointerScope.current,
        { opacity: 1 },
        { duration: 0.5, delay: 1.5 },
      ],
      [rightPointerScope.current, { y: 0, x: 175 }, { duration: 0.5 }],
      [rightPointerScope.current, { x: 0, y: [0, 20, 0] }, { duration: 0.5 }],
    ]);
  }, []);

  return (
    <section className="py-24">
      <div
        className="container relative"
        style={{ cursor: `url(${customCursor.src}), auto` }}
      >
        <motion.div
          ref={leftDesignScope}
          initial={{ opacity: 0, y: 100, x: -100 }}
          drag
          className="absolute -left-80 top-16 hidden lg:block"
        >
          <SampleBlock height={440} width={310} draggable="false">
            <div className="w-[310px] h-[440px] flex items-center p-6">
              Hello
            </div>
          </SampleBlock>
        </motion.div>

        <motion.div
          ref={rightDesignScope}
          initial={{ opacity: 0, y: 100, x: 100 }}
          drag
          className="absolute -right-90 -top-16 hidden lg:block"
        >
          <SampleBlock height={440} width={310} draggable="false">
            <div className="w-[310px] h-[440px] flex items-center p-6">
              Hello2
            </div>
          </SampleBlock>
        </motion.div>

        <motion.div
          ref={leftPointerScope}
          initial={{ opacity: 0, y: 100, x: -200 }}
          className="absolute left-16 top-90 hidden lg:block"
        >
          <Pointer name="Shyam" />
        </motion.div>

        <motion.div
          ref={rightPointerScope}
          initial={{ opacity: 0, y: 100, x: 275 }}
          className="absolute right-20 -top-4 hidden lg:block"
        >
          <Pointer name="Ram" color="red" />
        </motion.div>

        <div className="flex justify-center">
          <div className="inline-flex py-2 px-4 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full text-neutral-950 font-semibold">
            ✨ Frontend Developer
          </div>
        </div>

        <h1 className="text-6xl md:text-7xl lg:text-8xl font-medium text-center mt-6">
          Lorem ipsum dolor sit amet.
        </h1>

        <p className="text-center text-xl text-white/50 mt-8 mx-auto">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
          dolor veritatis quas hic consequuntur officiis illum voluptas
          reprehenderit odit reiciendis.
        </p>

        <div className="flex border border-white/15 rounded-full p-2 mt-8 items-center justify-between max-w-[500px] mx-auto">
          <div className="bg-transparent px-4">CTRL + S My Resume</div>

          <Button type="primary" size="sm">
            <Image src={downloadSvg} alt="Download" className="size-7" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
