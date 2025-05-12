import CallToAction from "@/components/CallToAction";
// import ChatBot from "@/components/ChatBot";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Introduction from "@/components/Introduction";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import { Skills } from "@/components/Skills";
import HelloScreen from "@/common/components/HelloScreen";
import ScrollProgress from "@/common/components/ScrollProgress";

export default function Home() {
  return (
    <div className="flex flex-col items-center max-w-[100vw] overflow-clip md:pt-20 lg:pt-32 relative">
      <ScrollProgress />

      <HelloScreen />

      <div className="w-[90%] md:w-[80%] lg:w-[70%] flex flex-col items-center">
        <Navbar />
        <Hero />
        <Introduction />
        <Projects />
        <Skills />
        <CallToAction />
        <Footer />
        {/* <ChatBot /> */}
      </div>
    </div>
  );
}
