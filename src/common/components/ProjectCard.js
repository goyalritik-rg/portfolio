"use client";

import { useState } from "react";
import { FaGithub } from "react-icons/fa";
import { Lens } from "@/common/ui-components/Lens";
import Share from "../svgs/Share";
import ProjectImage from "./ProjectImage";

const TechChip = ({ tech }) => (
  <span className="inline-flex items-center px-3 py-1.5 rounded-full text-xs font-medium bg-white/10 text-white/80 backdrop-blur-sm border border-white/10 transition-all hover:bg-white/15">
    {tech}
  </span>
);

const ProjectCard = ({ className = "", project = {} }) => {
  const [hovering, setHovering] = useState(false);

  const {
    image,
    label,
    description,
    githubLink,
    siteUrl,
    techStack = [],
  } = project;

  return (
    <div className="h-full w-full flex flex-col justify-between">
      <div>
        <Lens hovering={hovering} setHovering={setHovering}>
          <ProjectImage imageHref={image} href={siteUrl} />
        </Lens>

        <h3 className="text-xl md:text-3xl font-medium mt-4">{label}</h3>

        <p className="text-white/50 mt-2 text-xs md:text-sm">{description}</p>

        <div className="flex flex-wrap gap-2 mt-4">
          {techStack.map((tech, index) => (
            <TechChip key={index} tech={tech} />
          ))}
        </div>
      </div>

      <div className="mt-6 flex items-center gap-4">
        <a href={githubLink} target="_blank" rel="noopener noreferrer">
          <FaGithub className="text-[32px] cursor-pointer" />
        </a>

        <a href={siteUrl} target="_blank" rel="noopener noreferrer">
          <Share className="cursor-pointer" />
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
