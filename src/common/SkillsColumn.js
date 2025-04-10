import { twMerge } from "tailwind-merge";

const { default: Image } = require("next/image");

function SkillsColumn({ skillsArray = [], type = "", className = "" }) {
  return (
    <div className={twMerge("flex flex-col gap-4 pb-4", className)}>
      {skillsArray.map((skill) => {
        return (
          <div
            key={skill.name}
            className="bg-neutral-900 border border-white/10 p-6 rounded-3xl"
          >
            <div className="flex justify-center">
              <Image src={skill.icon} alt={skill.name} className="size-24" />
            </div>
            <h3 className="text-3xl text-center mt-6">{skill.name}</h3>
            <p className="text-center text-white/50 mt-2">
              {skill.description}
            </p>
          </div>
        );
      })}
    </div>
  );
}

export default SkillsColumn;
