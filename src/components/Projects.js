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

        <h2 className="text-6xl font-medium text-center mt-8 max-w-2xl mx-auto">
          My Creative Internet <span className="text-lime-400">Playground</span>
        </h2>

        {/* <div className="mt-12 grid grid-cols-1 md:grid-cols-4 lg:grid-cols-3 gap-8 lg:mx-[-6%]">
          {projects.map((project, index) => {
            let className = "md:col-span-2 lg:col-span-1";

            if (index === projects.length - 1) {
              className += " md:col-start-2 lg:col-start-auto";
            }

            return (
              <ProjectCard
                className={className}
                project={project}
                key={index}
              />
            );
          })}
        </div> */}

        <div className="mt-12 flex flex-col gap-25 max-w-2xl">
          {projects.map((project, idx) => {
            return <ProjectCard project={project} key={idx} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
