import logoImage from "@/assets/logo.svg";
import Banner from "@/common/Banner";
import Image from "next/image";
const footerLinks = [
  { href: "#", label: "Contact" },
  { href: "#", label: "Privacy Policy" },
  { href: "#", label: "Terms & Conditions" },
];

const Footer = () => {
  return (
    <section className="py-16">
      <div className="container flex flex-col items-center gap-6 md:flex-row md:justify-between">
        <Banner />

        <nav className="flex gap-6">
          {footerLinks.map((link) => {
            return (
              <a
                key={link.label}
                href={link.href}
                className="text-white/50 hover:text-white transition text-sm"
              >
                {link.label}
              </a>
            );
          })}
        </nav>
      </div>
    </section>
  );
};

export default Footer;
