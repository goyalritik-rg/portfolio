import Tag from "@/common/ui-components/Tag";

import framerIcon from "@/assets/framer-logo.svg";
import reactIcon from "@/assets/react-logo.svg";
import nextIcon from "@/assets/next-logo.svg";
import javascriptIcon from "@/assets/javascript-logo.svg";
import githubIcon from "@/assets/github-logo.svg";
import tailwindIcon from "@/assets/tailwind-logo.svg";
import reduxIcon from "@/assets/redux-logo.svg";
import jiraIcon from "@/assets/jira-logo.svg";
import SkillsColumn from "@/common/components/SkillsColumn";

const skillsSet1 = [
  {
    name: "JavaScript",
    icon: javascriptIcon,
    description: "JavaScript: The web's dynamic programming language.",
  },
  {
    name: "React JS",
    icon: reactIcon,
    description: "React is a JavaScript library for building UIs.",
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
    name: "GitHub",
    icon: githubIcon,
    description: "GitHub is the leading platform for code collaboration.",
  },
  {
    name: "Jira",
    icon: jiraIcon,
    description: "Jira: Agile project management and issue tracking tool.",
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
              <span className="text-lime-400">Tools</span> Behind The Scenes
            </h2>

            <p className="text-white/50 mt-4 text-lg text-center">
              Every creator needs tools — here are mine. From clean code to
              pixel-perfect designs, these are what bring ideas to life.
            </p>
          </div>

          <div className="h-[400px] lg:h-[800px] mt-8 lg:mt-0 overflow-hidden [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)] grid md:grid-cols-2 gap-4">
            <SkillsColumn
              skillsArray={[...skillsSet1, ...skillsSet2]}
              className="flex md:hidden"
            />

            <SkillsColumn
              skillsArray={[...skillsSet1, ...skillsSet1]}
              className="hidden md:flex"
            />

            <SkillsColumn
              skillsArray={[...skillsSet2, ...skillsSet2]}
              reverse
              className="hidden md:flex"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
