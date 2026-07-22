import Hero2 from "./components/v2/hero2";
import Experience2 from "./components/v2/experience2";
import ProjectsList from "./components/v2/projects-list";
import Footer2 from "./components/v2/footer2";
import ImageSection from "./components/v2/image-section";
import { SectionFrame } from "@/components/yash-components/section-frame";

export default function Home() {
  return (
    <main className="min-h-screen w-full bg-bg">
      <SectionFrame
        divider={false}
        innerClassName="px-4 sm:px-6 pt-12 pb-6 md:pt-14 md:pb-8"
        stickers={[
          { src: "/stickers/me.png", side: "left", top: "16px", inset: 20, size: 124, rotate: -7, alt: "Yash sticker" },
          { src: "/stickers/dietcoke.png", side: "right", top: "24px", inset: 30, size: 92, rotate: -12, alt: "Diet Coke sticker" },
          { src: "/stickers/burger.png", side: "right", top: "200px", inset: 52, size: 108, rotate: 11, alt: "cheeseburger sticker" },
        ]}
      >
        <Hero2 />
      </SectionFrame>
      <SectionFrame
        innerClassName="px-0 py-0"
        stickers={[
          { src: "/stickers/macbook.png", side: "left", top: "72px", inset: 40, size: 120, ratio: 1.34, rotate: -9, alt: "MacBook sticker" },
          { src: "/stickers/keyboard.png", side: "right", top: "20px", inset: 24, size: 122, rotate: 8, alt: "mechanical keyboard sticker" },
        ]}
      >
        <Experience2 />
      </SectionFrame>
      <SectionFrame
        innerClassName="px-0 py-0"
        stickers={[
          { src: "/stickers/pizza.png", side: "right", top: "16px", inset: 30, size: 104, rotate: 13, alt: "pizza slice sticker" },
        ]}
      >
        <ProjectsList />
      </SectionFrame>
      <SectionFrame
        innerClassName="px-4 sm:px-6 py-6 md:py-8"
        stickers={[
          { src: "/stickers/headphones.png", side: "left", bottom: "12px", inset: 48, size: 96, ratio: 0.747, rotate: 9, alt: "headphones sticker" },
          { src: "/stickers/milkshake.png", side: "right", top: "0px", inset: 18, size: 78, ratio: 0.558, rotate: -8, alt: "chocolate milkshake sticker" },
        ]}
      >
        <Footer2 />
      </SectionFrame>
    </main>
  );
}
