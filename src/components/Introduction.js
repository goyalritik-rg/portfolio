import Tag from "@/common/Tag";
const text =
  "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet error excepturi corporis doloribus modi voluptates sit quae repudiandae quod perferendis, obcaecati optio quibusdam dolores a blanditiis. Molestias quia modi quis.";

const Introduction = () => {
  return (
    <section className="py-28 lg:py-40">
      <div className="container">
        <div className="flex justify-center">
          <Tag>Introduction</Tag>
        </div>

        <div className="text-4xl md:text-5xl lg:text-6xl text-center font-medium mt-10">
          <span className="text-white/15">{text}</span>
          <br />
          <div className="text-lime-400 mt-4">Lorem ipsum dolor sit amet.</div>
        </div>
      </div>
    </section>
  );
};

export default Introduction;
