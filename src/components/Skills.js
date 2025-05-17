import Tag from "@/common/ui-components/Tag";

import framerIcon from "@/assets/framer-logo.svg";
import reactIcon from "@/assets/react-logo.svg";
import nextIcon from "@/assets/next-logo.svg";
import javascriptIcon from "@/assets/javascript-logo.svg";
import tailwindIcon from "@/assets/tailwind-logo.svg";
import supabaseIcon from "@/assets/supabase-logo.svg";
import nodejsIcon from "@/assets/nodejs-logo.svg";
import reduxIcon from "@/assets/redux-logo.svg";
import SkillsColumn from "@/common/components/SkillsColumn";

const skillsSet1 = [
  {
    name: "JavaScript",
    icon: javascriptIcon,
    description: "JavaScript: The web's dynamic programming language.",
  },
  {
    name: "Next JS",
    icon: nextIcon,
    description:
      "Next.js supercharges React with SSR, SSG, and seamless routing.",
  },
  {
    name: "Redux",
    icon: reduxIcon,
    description: "Redux: Predictable state container for JavaScript apps.",
  },
  {
    name: "Supabase",
    icon: supabaseIcon,
    description:
      "Supabase: open-source backend with database, auth, and storage.",
  },

  {
    name: "React JS",
    icon: reactIcon,
    description: "React is a JavaScript library for building UIs.",
  },
];

const skillsSet2 = [
  {
    name: "React Native",
    icon: reactIcon,
    description:
      "React Native builds mobile apps with React for iOS & Android.",
  },
  {
    name: "Framer Motion",
    icon: framerIcon,
    description: "Motion brings React components to life with animations.",
  },
  {
    name: "Tailwind CSS",
    icon: tailwindIcon,
    description:
      "Tailwind CSS: Utility-first styling for rapid UI development.",
  },
  {
    name: "Node JS",
    icon: nodejsIcon,
    description: "Fast, scalable JavaScript runtime for backend development",
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

            <h2 className="text-5xl md:text-6xl font-medium text-center mt-6 max-w-2xl mx-auto">
              <span className="text-lime-400">Tools</span> Behind The Scenes
            </h2>

            <p className="text-white/50 mt-4 text-base md:text-lg text-center">
              Every creator needs tools — here are mine. From clean code to
              pixel-perfect designs, these are what bring ideas to life.
            </p>
          </div>

          <div className="h-[400px] lg:h-[800px] mt-8 lg:mt-0 overflow-hidden [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)] grid grid-cols-2 gap-4">
            <SkillsColumn skillsArray={[...skillsSet1, ...skillsSet1]} />

            <SkillsColumn
              skillsArray={[...skillsSet2, ...skillsSet2]}
              reverse
            />
          </div>
        </div>
      </div>
    </section>
  );
};
