import Image from "next/image";
import { useState } from "react";
import { FaGithub } from "react-icons/fa";
import { MdArrowOutward } from "react-icons/md";
import { twMerge } from "tailwind-merge";
import { Lens } from "@/common/ui-components/Lens";

const ProjectCard = ({ className = "", project = {} }) => {
  const [hovering, setHovering] = useState(false);

  const { image, label, description, githubLink, siteUrl } = project;

  return (
    <div
      className={twMerge(
        "bg-neutral-900 border border-white/15 p-6 rounded-3xl",
        className
      )}
    >
      <Lens hovering={hovering} setHovering={setHovering}>
        <Image src={image} alt={label} className="aspect-video rounded-xl" />
      </Lens>

      <h3 className="text-3xl font-medium mt-6">{label}</h3>

      <p className="text-white/50 mt-2">{description}</p>

      <div className="mt-6 flex items-center gap-4">
        <div
          role="presentation"
          onClick={() => {
            window.open(siteUrl);
          }}
          className="py-1.5 px-3 border border-white/50 rounded-lg w-fit text-sm cursor-pointer flex items-center gap-1 hover:border-white transition-all"
        >
          Visit Site
          <MdArrowOutward className="text-xl text-white" />
        </div>

        <FaGithub
          className="text-[32px] cursor-pointer"
          onClick={() => window.open(githubLink)}
        />
      </div>
    </div>
  );
};

export default ProjectCard;
