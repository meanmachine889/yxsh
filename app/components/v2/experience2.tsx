import { HoverExpand, HoverExpandItem } from "@/components/ui/hover-expand";

const items: HoverExpandItem[] = [
  {
    label: "Integral",
    sublabel: "2025",
    detail:
      "Building PrimeOne, the world's first stablecoin-based crypto prime broker. Working across the full stack on backend services, blockchain integrations, and frontend trading workflows.",
    href: "https://www.integral.com",
  },
  {
    label: "Eventory",
    sublabel: "2024",
    detail:
      "Joined as a founding developer and took the product from zero to a working MVP. Built vendor dashboards, media pipelines, and onboarding flows across the full stack.",
    href: "https://eventory.in",
  },
  {
    label: "Yocket",
    sublabel: "2024",
    detail:
      "Worked as an intern on Horse's Mouth, Yocket's mentor platform. Shipped features across frontend and backend, improved performance, and built reusable components.",
    href: "https://yocket.com",
  },
];

export default function Experience2() {
  return (
    <section className="w-full">
      <h2 className="text-[0.9rem] md:text-[0.95rem] text-fg-3 py-4 md:py-5 px-4 sm:px-6">Work</h2>
      <HoverExpand items={items} collapsedHeight={52} expandedHeight={118} />
    </section>
  );
}
