import { HoverExpand, HoverExpandItem } from "@/components/ui/hover-expand";

const items: HoverExpandItem[] = [
  {
    label: "Shiplog",
    sublabel: "2025",
    image: "/project-shots/shiplog.png",
    imageAlt: "Shiplog app screenshot",
    description: "changelogs that write themselves",
    href: "https://shiplog.today",
  },
  {
    label: "Kinetic",
    sublabel: "2025",
    image: "/project-shots/kinetic.png",
    imageAlt: "Kinetic effects vault screenshot",
    description: "effects & visuals vault",
    href: "https://kinetic.yxsh.in",
  },
  {
    label: "MCP Scanner",
    sublabel: "2025",
    image: "/project-shots/mcpscanner.png",
    imageAlt: "MCP Scanner screenshot",
    description: "security scanner for MCP servers",
    href: "https://mcpscanner.yxsh.in",
  },
  {
    label: "Uptime Monitor",
    sublabel: "2025",
    image:
      "https://res.cloudinary.com/dnfv0h10u/video/upload/so_0,q_auto/v1773372842/decentralized_uptime_monitor_zanf6z.jpg",
    imageAlt: "Decentralized uptime monitor demo frame",
    description: "decentralized, validator-staked monitoring",
    href: "https://github.com/meanmachine889/Decentralized-uptime-monitor",
  },
  {
    label: "Task Engine",
    sublabel: "2025",
    image:
      "https://res.cloudinary.com/dnfv0h10u/video/upload/so_0,q_auto/v1773372842/go_project_optdfg.jpg",
    imageAlt: "Go distributed task engine demo frame",
    description: "distributed job scheduler in Go",
    href: "https://github.com/meanmachine889/Job-Orchestrator",
  },
];

export default function ProjectsHover() {
  return (
    <section className="w-full max-w-2xl mt-10 md:mt-12">
      <h2 className="text-[0.9rem] text-fg-3 mb-2">Projects</h2>
      <HoverExpand items={items} collapsedHeight={52} expandedHeight={280} />
    </section>
  );
}
