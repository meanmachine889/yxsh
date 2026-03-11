import Hero from "./components/Hero";
import WorkExperience from "./components/WorkExperience";
import Skills from "./components/Skills";
import Achievements from "./components/Achievements";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="flex flex-col w-screen justify-center items-center min-h-screen bg-[#0a0a0a] overflow-x-hidden">
      <Hero />
      <div className="flex flex-col gap-17">
        <WorkExperience />
        <Skills />
        <Achievements />
        <Footer />
      </div>
    </main>
  );
}
