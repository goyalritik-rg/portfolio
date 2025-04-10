import Tag from "@/common/Tag";

import figmaIcon from "@/assets/figma-logo.svg";
import framerIcon from "@/assets/framer-logo.svg";
import Image from "next/image";
import { twMerge } from "tailwind-merge";
import SkillsColumn from "@/common/SkillsColumn";

const skills = [
  {
    name: "Figma",
    icon: figmaIcon,
    description: "Figma is a collaborative interface design tool.",
  },
  {
    name: "Notion",
    icon: figmaIcon,
    description: "Notion is an all-in-one workspace for notes and docs.",
  },
  {
    name: "Slack",
    icon: figmaIcon,
    description: "Slack is a powerful team communication platform.",
  },
  {
    name: "Relume",
    icon: figmaIcon,
    description: "Relume is a no-code website builder and design system.",
  },
  {
    name: "Framer",
    icon: framerIcon,
    description: "Framer is a professional website prototyping tool.",
  },
  {
    name: "GitHub",
    icon: figmaIcon,
    description: "GitHub is the leading platform for code collaboration.",
  },
];

export const Skills = () => {
  return (
    <section className="py-24 overflow-hidden lg:mx-[-10%]" id="skills">
      <div className="container">
        <div className="grid lg:grid-cols-2 items-center lg:gap-16">
          <div className="">
            <div className="flex justify-center">
              <Tag>Skills</Tag>
            </div>

            <h2 className="text-6xl font-medium text-center mt-6 max-w-2xl mx-auto">
              Play well with <span className="text-lime-400">others</span>
            </h2>

            <p className="text-white/50 mt-4 text-lg text-center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
              esse eaque numquam magni ut totam!
            </p>
          </div>

          <div className="h-[400px] lg:h-[800px] mt-8 lg:mt-0 overflow-hidden [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)] grid md:grid-cols-2 gap-4">
            <SkillsColumn skillsArray={skills} />

            <SkillsColumn
              skillsArray={skills.slice().reverse()}
              className="hidden md:flex"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
