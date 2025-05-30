import Tag from "@/common/ui-components/Tag";

import ProjectCard from "@/common/components/ProjectCard";

const projects = [
  {
    image: "/RideSure.png",
    label: "Ridesure",
    description:
      "Web3-powered cab booking app with crypto payments, dynamic pricing, and seamless onboarding.",
    githubLink: "https://github.com/goyalRitik6776/RideSure",
    siteUrl: "https://ridesure.vercel.app/",
    techStack: [
      "NextJS",
      "Mapbox",
      "Ethereum",
      "Tailwind CSS",
      "Metamask",
      "Resend",
      "Sanity",
      "Material UI",
    ],
  },
  {
    image: "/Portfolio.png",
    label: "Portfolio",
    description:
      "Breaking layouts, fixing bugs, shipping pixels — my frontend playground on the web.",
    githubLink: "https://github.com/goyalritik-rg/portfolio",
    siteUrl: "https://goyal-dev.vercel.app",
    techStack: ["NextJS", "Tailwind CSS", "Framer Motion", "Resend"],
  },
];

const Projects = () => {
  return (
    <section className="py-24 lg:pt-30" id="projects">
      <div className="container">
        <div className="flex justify-center">
          <Tag>Projects</Tag>
        </div>

        <h2 className="text-5xl md:text-6xl font-medium text-center mt-8 max-w-2xl mx-auto">
          My Creative Internet <span className="text-lime-400">Playground</span>
        </h2>

        <div className="mt-15 flex flex-col gap-[6rem] max-w-xl mx-auto">
          {projects.map((project, idx) => {
            return <ProjectCard project={project} key={idx} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
