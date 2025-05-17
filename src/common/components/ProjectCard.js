"use client";

import { useState, useRef } from "react";
import { FaGithub } from "react-icons/fa";
// import { Lens } from "@/common/ui-components/Lens";
import Share from "../svgs/Share";
// import ProjectImage from "./ProjectImage";
import Image from "next/image";
import { twMerge } from "tailwind-merge";

const TechChip = ({ tech }) => (
  <span className="inline-flex items-center px-3 py-1.5 rounded-full text-xs font-medium bg-white/10 text-white/80 backdrop-blur-sm border border-white/10 transition-all hover:bg-white/15">
    {tech}
  </span>
);

const ProjectCard = ({ className = "", project = {} }) => {
  const [rotateDirection, setRotateDirection] = useState(0);

  const imageContainerRef = useRef(null);

  const {
    image,
    label,
    description,
    githubLink,
    siteUrl,
    techStack = [],
  } = project;

  const handleMouseMove = (e) => {
    if (imageContainerRef.current) {
      const rect = imageContainerRef.current.getBoundingClientRect();
      const mouseX = e.clientX - rect.left;
      const containerWidth = rect.width;

      if (mouseX < containerWidth / 2) {
        setRotateDirection(-1);
      } else {
        setRotateDirection(1);
      }
    }
  };

  const handleMouseLeave = () => {
    setRotateDirection(0);
  };

  return (
    <div className="w-full flex flex-col justify-between">
      <div>
        <a href={siteUrl} target="_blank" rel="noopener noreferrer">
          <div
            ref={imageContainerRef}
            className={twMerge(
              "border-1 border-white rounded-3xl h-full w-full mb-8 transition-all duration-300",
              rotateDirection === 1
                ? "md:rotate-1"
                : rotateDirection === -1
                  ? "-md:rotate-1"
                  : ""
            )}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
          >
            <Image
              src={image}
              alt="Img"
              width={1000}
              height={1000}
              className="w-full aspect-video rounded-3xl border-6 border-black saturate-110"
            />
          </div>
        </a>

        {/* <Lens hovering={hovering} setHovering={setHovering}>
          <ProjectImage imageHref={image} href={siteUrl} />
        </Lens> */}

        <h3 className="text-xl md:text-3xl font-medium">{label}</h3>

        <p className="text-white/50 mt-2 text-xs md:text-sm">{description}</p>

        <div className="flex flex-wrap gap-2 mt-6">
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
