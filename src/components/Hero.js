"use client";

import { buttonClass } from "@/common/ui-components/Button";
import { FlipWords } from "@/common/ui-components/FlipWords";
import Link from "next/link";
import { Download } from "lucide-react";

const heroWords = ["Designs", "Layouts", "Dreams", "Ideas"];

const Hero = () => {
  return (
    <section className="pt-30 md:pt-20 lg:pt-10 lg:pb-40">
      <div className="container relative">
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
