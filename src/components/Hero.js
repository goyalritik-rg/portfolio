"use client";

import { buttonClass } from "@/common/ui-components/Button";
// import Pointer from "@/common/components/Pointer";
// import SampleBlock from "@/common/components/SampleBlock";
// import { motion, useAnimate } from "framer-motion";
import customCursor from "@/assets/cursor-you.svg";
import Image from "next/image";
// import ContactForm from "./ContactForm";
import { FlipWords } from "@/common/ui-components/FlipWords";
import Link from "next/link";
import { Download } from "lucide-react";
// import TetrisGame from "@/common/components/TetrisGame";

const heroWords = ["Designs", "Layouts", "Dreams", "Ideas"];

const Hero = () => {
  // const containerRef = useRef(null);

  // const [constraints, setConstraints] = useState({});

  // const [leftDesignScope, leftDesignAnimate] = useAnimate();
  // const [leftPointerScope, leftPointerAnimate] = useAnimate();
  // const [rightDesignScope, rightDesignAnimate] = useAnimate();
  // const [rightPointerScope, rightPointerAnimate] = useAnimate();

  // const animateRightBlock = () => {
  //   rightDesignAnimate([
  //     [rightDesignScope.current, { opacity: 1 }, { duration: 0.5 }],
  //     [rightDesignScope.current, { y: 0, x: 0 }, { duration: 0.5 }],
  //   ]);
  // };

  // const animateLeftBlock = () => {
  //   leftDesignAnimate([
  //     [leftDesignScope.current, { opacity: 1 }, { duration: 0.5 }],
  //     [leftDesignScope.current, { y: 0, x: 0 }, { duration: 0.5 }],
  //   ]);
  // };

  // useEffect(() => {
  //   animateLeftBlock();

  //   leftPointerAnimate([
  //     [leftPointerScope.current, { opacity: 1 }, { duration: 0.5 }],
  //     [leftPointerScope.current, { y: 0, x: -100 }, { duration: 0.5 }],
  //     [
  //       leftPointerScope.current,
  //       { x: 0, y: [0, 16, 0] },
  //       { duration: 0.5, ease: "easeInOut" },
  //     ],
  //   ]);

  //   rightDesignAnimate([
  //     [rightDesignScope.current, { opacity: 1 }, { duration: 0.5, delay: 1.5 }],
  //     [rightDesignScope.current, { y: 0, x: 0 }, { duration: 0.5 }],
  //   ]);

  //   rightPointerAnimate([
  //     [
  //       rightPointerScope.current,
  //       { opacity: 1 },
  //       { duration: 0.5, delay: 1.5 },
  //     ],
  //     [rightPointerScope.current, { y: 0, x: 175 }, { duration: 0.5 }],
  //     [rightPointerScope.current, { x: 0, y: [0, 20, 0] }, { duration: 0.5 }],
  //   ]);
  // }, []);

  // useEffect(() => {
  //   if (!containerRef.current) return;

  //   const container = containerRef.current;

  //   const extraSpace = 0.2;

  //   const { offsetWidth, offsetHeight } = container;

  //   setConstraints({
  //     top: -offsetHeight * extraSpace,
  //     left: -offsetWidth * extraSpace,
  //     right: offsetWidth * (1 + extraSpace),
  //     bottom: offsetHeight * (1 - extraSpace),
  //   });
  // }, []);

  return (
    <section
      className="pt-30 md:pt-20 lg:pt-10 lg:pb-40"
      // ref={containerRef}
      // style={{ cursor: `url(${customCursor.src}), auto` }}
    >
      <div className="container relative">
        {/* <motion.div
          ref={leftDesignScope}
          initial={{ opacity: 0, y: 100, x: -100 }}
          drag
          dragConstraints={{ ...constraints, left: 0 }}
          className="absolute -left-80 top-16 hidden lg:block z-1"
        >
          <SampleBlock height={440} width={310} draggable="false">
            <div className="w-[310px] h-[440px] flex items-center">
              <TetrisGame onReset={animateLeftBlock} />
            </div>
          </SampleBlock>
        </motion.div> */}

        {/* <motion.div
          ref={rightDesignScope}
          initial={{ opacity: 0, y: 100, x: 100 }}
          drag
          dragConstraints={{
            ...constraints,
            left: -constraints.right,
            right: 0,
          }}
          className="absolute -right-96 -top-25 hidden lg:block z-1"
        >
          <SampleBlock height={580} width={400} draggable="false">
            <div className="w-[400px] h-[580px] flex items-center">
              <ContactForm onSuccess={animateRightBlock} />
            </div>
          </SampleBlock>
        </motion.div> */}

        {/* <motion.div
          ref={leftPointerScope}
          initial={{ opacity: 0, y: 100, x: -200 }}
          className="absolute left-16 top-90 hidden lg:block z-2"
        >
          <Pointer name="User" />
        </motion.div> */}

        {/* <motion.div
          ref={rightPointerScope}
          initial={{ opacity: 0, y: 100, x: 275 }}
          className="absolute right-20 -top-4 hidden lg:block z-2"
        >
          <Pointer name="User" color="red" />
        </motion.div> */}

        <div className="flex justify-center">
          <div className="inline-flex py-2 px-4 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full text-neutral-950 font-semibold">
            ✨ Frontend Developer
          </div>
        </div>

        <h1 className="text-5xl md:text-6xl lg:text-7xl font-medium text-center mt-6 leading-[1.18] text-white">
          Shaping
          <br className="sm:hidden" />
          <FlipWords
            words={heroWords}
            className="text-lime-400 dark:text-lime-400"
          />
          <br />
          into Reality
        </h1>

        <p className="text-center text-2xl text-white/50 mt-8 mx-auto lg:w-[90%]">
          <span className="text-white">
            Hi, I&apos;m <span className="text-lime-400">Ritik</span>
          </span>{" "}
          — a frontend developer based in Mumbai, crafting slick UIs with
          precision and passion.
        </p>

        <div className="flex border border-white/20 rounded-full p-2 mt-8 items-center justify-between max-w-[500px] mx-auto">
          <div className="bg-transparent px-4">Download my Resume here</div>

          <Link
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className={buttonClass({ size: "sm", type: "primary" })}
          >
            <Download className="size-7" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
