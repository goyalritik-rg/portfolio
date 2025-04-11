"use client";

import Tag from "@/common/Tag";
import { twMerge } from "tailwind-merge";

import { FaGithub } from "react-icons/fa";
import { MdArrowOutward } from "react-icons/md";
import Image from "next/image";

import rideSure from "@/assets/RideSure.png";

const projects = [
  {
    image: rideSure,
    label: "Ridesure",
    description: "Web3 based cab booking platform",
    githubLink: "https://github.com/goyalRitik6776/RideSure",
    siteUrl: "https://ridesure.vercel.app/",
  },
  {
    image: rideSure,
    label: "Portfolio",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, quisquam.",
    githubLink: "https://github.com/goyalritik-rg/portfolio",
    siteUrl: "",
  },
  {
    image: rideSure,
    label: "label3",
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
            const { image, label, description, githubLink, siteUrl } = project;

            let className = "md:col-span-2 lg:col-span-1";

            if (index === projects.length - 1) {
              className += " md:col-start-2 lg:col-start-auto";
            }

            return (
              <div
                key={label}
                className={twMerge(
                  "bg-neutral-900 border border-white/15 p-6 rounded-3xl",
                  className
                )}
              >
                <div className="aspect-video">
                  <Image src={image} alt={label} />
                </div>

                <h3 className="text-3xl font-medium mt-6">{label}</h3>

                <p className="text-white/50 mt-2">{description}</p>

                <div className="mt-6 flex items-center gap-4">
                  <FaGithub
                    className="text-[32px] cursor-pointer"
                    onClick={() => window.open(githubLink)}
                  />

                  <div
                    role="presentation"
                    onClick={() => {
                      window.open(siteUrl);
                    }}
                    className="py-1.5 px-3 border border-white/50 rounded-lg w-fit text-sm cursor-pointer flex items-center gap-1"
                  >
                    Visit Site
                    <MdArrowOutward className="text-xl text-white" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
