import Hero from "./components/Hero";
import WorkExperience from "./components/WorkExperience";
import Skills from "./components/Skills";
import Achievements from "./components/Achievements";
import Footer from "./components/Footer";
export default function Home() {
  return (
    <main className="flex flex-col w-screen justify-center items-center min-h-screen bg-black overflow-x-hidden">
      <Hero />
      <div className="flex flex-col w-full max-w-7xl px-6 sm:px-10 lg:px-24">
        <WorkExperience />
        <Skills />
        <Achievements />
        <Footer />
      </div>
    </main>
  );
}
