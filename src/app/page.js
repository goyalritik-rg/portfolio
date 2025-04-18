import ChatbotFrame from "@/common/components/Chatbot";
import CallToAction from "@/components/CallToAction";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Introduction from "@/components/Introduction";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import { Skills } from "@/components/Skills";

export default function Home() {
  const showBot = process.env.NEXT_PUBLIC_SHOW_CHATBOT;

  return (
    <div className="flex flex-col items-center max-w-[100vw] overflow-clip md:pt-20 lg:pt-32">
      <div className="w-[90%] md:w-[80%] lg:w-[70%] flex flex-col items-center">
        {showBot === "true" && <ChatbotFrame />}
        <Navbar />
        <Hero />
        <Introduction />
        <Projects />
        <Skills />
        <CallToAction />
        <Footer />
      </div>
    </div>
  );
}
