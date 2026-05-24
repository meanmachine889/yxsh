import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import shiplogImg from "@/app/project-shots/shiplog.png";
import mcpScannerImg from "@/app/project-shots/mcpscanner.png";
import kineticImg from "@/app/project-shots/kinetic-1.png";

const listItems = [
  {
    name: "scan-my-mcp",
    label: "CLI tool",
    url: "https://www.npmjs.com/package/scan-my-mcp",
    external: true,
  },
  {
    name: "Decentralized Uptime Monitor",
    label: "",
    url: "/projects/uptime-monitor",
    external: false,
  },
  {
    name: "Go Task Distribution Engine",
    label: "",
    url: "/projects/task-engine",
    external: false,
  },
];

const projects = [
  {
    name: "Shiplog",
    image: shiplogImg,
    url: "https://shiplog.today",
  },
  {
    name: "MCP Scanner",
    image: mcpScannerImg,
    url: "https://mcpscanner.yxsh.in",
  },
  {
    name: "Kinetic",
    image: kineticImg,
    url: "https://kinetic.yxsh.in",
    natural: true,
  },
];

export default function Projects2() {
  return (
    <section className="w-full max-w-2xl mt-12 font-[family-name:var(--font-poppins)] md:mt-14">
      <h2 className="mb-6 text-[0.94rem] text-fg-1 leading-[1.65rem]">Things I've built</h2>

      <div className="grid grid-cols-2 gap-3 sm:gap-4">
        {projects.map((project) => (
          <Link
            key={project.name}
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col"
          >
            <div className="w-full rounded-lg overflow-hidden border border-border-1 transition-transform duration-300 group-hover:scale-[1.02]">
              {project.natural ? (
                <Image
                  src={project.image}
                  alt={project.name}
                  className="w-full h-auto block"
                />
              ) : (
                <div className="relative w-full aspect-video">
                  <Image
                    src={project.image}
                    alt={project.name}
                    fill
                    className="object-cover object-top"
                  />
                </div>
              )}
            </div>
            <div className="flex items-center justify-between mt-2 px-0.5">
              <span className="text-[0.78rem] text-fg-2">{project.name}</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-fg-3 transition-colors group-hover:text-blue-400" />
            </div>
          </Link>
        ))}

        <div className="rounded-xl border border-dashed border-border-1 flex flex-col gap-1.5 p-1.5 self-start w-full">
          {listItems.map((item) => (
            <Link
              key={item.name}
              href={item.url}
              target={item.external ? "_blank" : undefined}
              rel={item.external ? "noopener noreferrer" : undefined}
              className="group flex items-center justify-between rounded-lg bg-fg/[0.04] px-3 py-2.5 hover:bg-fg/[0.07] transition-colors"
            >
              <span className="text-[0.73rem] leading-snug text-fg-2 group-hover:text-fg transition-colors">
                {item.name}
                {item.label && <span className="ml-1.5 text-fg-4">{item.label}</span>}
              </span>
              <ArrowUpRight className="w-3 h-3 text-fg-4 transition-colors group-hover:text-blue-400 shrink-0 ml-2" />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
