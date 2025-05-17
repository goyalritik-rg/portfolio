import Tag from "@/common/ui-components/Tag";
import Timeline from "@/common/ui-components/Timeline";

export function Highlight({ children }) {
  return <span className="text-lime-300 font-semibold">{children}</span>;
}

const experiences = [
  {
    title: "B.Tech",
    startDate: "2019",
    endDate: "2023",
    company: "NIT Allahabad",
    content: (
      <div>
        <p className="text-sm md:text-base">
          Graduated with a <Highlight>CPI of 8.05</Highlight>, gaining a solid
          foundation in algorithms, systems design, and software engineering.
        </p>
      </div>
    ),
  },
  {
    title: "SDE Intern",
    startDate: "Feb '23",
    endDate: "Jul '23",
    company: "Cogoport, Mumbai",
    content: (
      <div>
        <ul className="list-disc ml-4 md:ml-6 flex flex-col md:gap-4 gap-2">
          <li>
            Developed an <Highlight>Announcement Module</Highlight> using React
            Hook Form for seamless data handling — adopted by{" "}
            <Highlight>800+ employees</Highlight>.
          </li>
          <li>
            Engineered an <Highlight>Assessment Platform</Highlight> that
            reduced form code by <Highlight>30%</Highlight> and cut grading time
            by <Highlight>40%</Highlight>.
          </li>
          <li>
            Migrated critical admin tools to the mobile app using React Native —
            improving access for <Highlight>800+ users</Highlight>.
          </li>
        </ul>
      </div>
    ),
  },
  {
    title: "SDE 1",
    startDate: "Jul '23",
    endDate: null,
    company: "Cogoport, Mumbai",
    content: (
      <div>
        <ul className="list-disc ml-4 md:ml-6 flex flex-col md:gap-4 gap-2">
          <li>
            Built a multi-modal freight platform (Sea ✈️, Air 🚚, Road)
            aggregating rates from{" "}
            <Highlight>50+ logistics providers</Highlight>.
          </li>
          <li>
            Enabled commodity-specific pricing — powering{" "}
            <Highlight>1000+ monthly bookings</Highlight> across shipping modes.
          </li>
          <li>
            Created a dynamic promotion engine with customizable rules — boosted
            conversions by <Highlight>25%</Highlight>.
          </li>
          <li>
            Delivered an intelligent RFQ system with margin controls — reduced
            user input errors by <Highlight>40%</Highlight>.
          </li>
          <li>
            Personally negotiated and secured{" "}
            <Highlight>300+ high-value bookings</Highlight>, contributing to{" "}
            <Highlight>50% of yearly revenue</Highlight>.
          </li>
          <li>
            Developed <Highlight>CogoBot</Highlight>, an AI-powered chatbot
            answering <Highlight>200+ daily queries</Highlight> — cut support
            tickets by <Highlight>30%</Highlight>.
          </li>
        </ul>
      </div>
    ),
  },
];

const Experiences = () => {
  return (
    <section className="py-24 container mx-auto lg:pt-40" id="experience">
      <div className="flex justify-center">
        <Tag>Education & Experience</Tag>
      </div>

      <Timeline data={experiences} />
    </section>
  );
};

export default Experiences;
