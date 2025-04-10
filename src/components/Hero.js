import Button from "@/common/Button";
import Pointer from "@/common/Pointer";
import SampleBlock from "@/common/SampleBlock";

const Hero = () => {
  return (
    <section className="py-24">
      <div className="container relative">
        <div className="absolute -left-80 top-16 hidden lg:block">
          <SampleBlock height={440} width={310}>
            <div className="w-[310px] h-[440px] flex items-center p-6">
              Hello
            </div>
          </SampleBlock>
        </div>

        <div className="absolute -right-90 -top-16 hidden lg:block">
          <SampleBlock height={440} width={310}>
            <div className="w-[310px] h-[440px] flex items-center p-6">
              Hello2
            </div>
          </SampleBlock>
        </div>

        <div className="absolute left-16 top-96 hidden lg:block">
          <Pointer name="Shyam" />
        </div>

        <div className="absolute left-[90%] -top-14 hidden lg:block">
          <Pointer name="Ram" color="red" />
        </div>

        <div className="flex justify-center">
          <div className="inline-flex py-2 px-4 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full text-neutral-950 font-semibold">
            ✨ Frontend Developer
          </div>
        </div>

        <h1 className="text-6xl md:text-7xl lg:text-8xl font-medium text-center mt-6">
          Lorem ipsum dolor sit amet.
        </h1>

        <p className="text-center text-xl text-white/50 mt-8 mx-auto">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
          dolor veritatis quas hic consequuntur officiis illum voluptas
          reprehenderit odit reiciendis.
        </p>

        <div className="flex border border-white/15 rounded-full p-2 mt-8 items-center justify-between max-w-[500px] mx-auto">
          <div className="bg-transparent px-4">Download Resume</div>

          <Button type="primary" size="sm">
            Download
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
