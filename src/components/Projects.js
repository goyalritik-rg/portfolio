import Tag from "@/common/Tag";
import { twMerge } from "tailwind-merge";

const projects = [
  {
    image: "",
    label: "label",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, quisquam.",
  },
  {
    image: "",
    label: "label2",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, quisquam.",
  },
  {
    image: "",
    label: "label3",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, quisquam.",
  },
];

const Projects = () => {
  return (
    <section className="py-24">
      <div className="container">
        <div className="flex justify-center">
          <Tag>Projects</Tag>
        </div>

        <h2 className="text-6xl font-medium text-center mt-6 max-w-2xl mx-auto">
          Where power meets <span className="text-lime-400">simplicity</span>
        </h2>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-4 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => {
            const { image, label, description } = project;

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
                {/* <div className="aspect-video">Image</div> */}
                <div className="">Image</div>
                <h3 className="text-3xl font-medium mt-6">{label}</h3>
                <p className="text-white/50 mt-2">{description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
