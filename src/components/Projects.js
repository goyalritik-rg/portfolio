"use client";

import Tag from "@/common/Tag";
import { twMerge } from "tailwind-merge";

import { FaGithub } from "react-icons/fa";
import { MdArrowOutward } from "react-icons/md";
import Image from "next/image";

import rideSure from "@/assets/RideSure.png";
import portfolio from "@/assets/Portfolio.png";
import ProjectCard from "@/common/ProjectCard";

const projects = [
  {
    image: rideSure,
    label: "Ridesure",
    description:
      "Web3-powered cab booking app with crypto payments, dynamic pricing, and seamless onboarding.",
    githubLink: "https://github.com/goyalRitik6776/RideSure",
    siteUrl: "https://ridesure.vercel.app/",
  },
  {
    image: portfolio,
    label: (
      <div>
        console.log(<span className="text-lime-400">me</span>)
      </div>
    ),
    description:
      "Breaking layouts, fixing bugs, shipping pixels — my frontend playground on the web.",
    githubLink: "https://github.com/goyalritik-rg/portfolio",
    siteUrl: "https://goyal-dev.vercel.app",
  },
  {
    image: rideSure,
    label: "Project 3",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, quisquam.",
  },
];

const Projects = () => {
  return (
    <section className="py-24 lg:pt-30" id="projects">
      <div className="container">
        <div className="flex justify-center">
          <Tag>Projects</Tag>
        </div>

        <h2 className="text-6xl font-medium text-center mt-8 max-w-2xl mx-auto">
          My Creative Internet <span className="text-lime-400">Playground</span>
        </h2>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-4 lg:grid-cols-3 gap-8 lg:mx-[-6%]">
          {projects.map((project, index) => {
            let className = "md:col-span-2 lg:col-span-1";

            if (index === projects.length - 1) {
              className += " md:col-start-2 lg:col-start-auto";
            }

            return (
              <ProjectCard
                className={className}
                project={project}
                key={project.label}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
