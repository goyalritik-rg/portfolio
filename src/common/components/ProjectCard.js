"use client";

import Image from "next/image";
import { useState } from "react";
import { FaGithub } from "react-icons/fa";
import { twMerge } from "tailwind-merge";
import { Lens } from "@/common/ui-components/Lens";
import Share from "../svgs/Share";

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
        <FaGithub
          className="text-[32px] cursor-pointer"
          onClick={() => window.open(githubLink)}
        />

        <Share
          className="cursor-pointer"
          onClick={() => {
            window.open(siteUrl);
          }}
        />
      </div>
    </div>
  );
};

export default ProjectCard;
