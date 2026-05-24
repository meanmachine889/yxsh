import Hero2 from "./components/v2/hero2";
import TechStack2 from "./components/v2/tech-stack";
import Experience2 from "./components/v2/experience2";
import Footer2 from "./components/v2/footer2";
export default function Home() {
  return (
    <main className="flex min-h-screen w-full flex-col items-center justify-center bg-bg px-4 pt-12 sm:px-6 lg:px-8">
      <Hero2 />
      <TechStack2 />
      <Experience2 />
      <Footer2 />
    </main>
  );
}
