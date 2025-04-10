import Image from "next/image";
import logoImage from "@/assets/logo.svg";
import Button from "@/common/Button";
const navLinks = [
  { label: "Home", href: "#" },
  { label: "Features", href: "#features" },
  { label: "Integrations", href: "#integrations" },
  { label: "FAQs", href: "#faqs" },
];

const Navbar = () => {
  return (
    <section className="py-4 lg:py-8">
      <div className="container mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-3 border border-white/15 rounded-full p-2 px-4 md:pr-2 items-center">
          <Image src={logoImage} alt="Logo" className="h-9 md:h-auto w-auto" />

          <nav className="lg:flex gap-6 font-medium hidden">
            {navLinks.map((e) => {
              return (
                <a href={e.href} key={e.label}>
                  {e.label}
                </a>
              );
            })}
          </nav>

          <div className="flex justify-end">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="feather feather-menu md:hidden cursor-pointer"
            >
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>

            <div className="md:flex items-center gap-4 hidden">
              <Button type="secondary">Email Me</Button>
              <Button type="primary">Resume</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Navbar;
