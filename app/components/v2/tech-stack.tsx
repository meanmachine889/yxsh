"use client";

import Image from "next/image";

type Tech = {
  name: string;
  icon: string;
  invert?: boolean;
};

const techStack: Tech[] = [
  {
    name: "Swift",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/swift/swift-original.svg",
  },
  {
    name: "Go",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original.svg",
  },
  {
    name: "React",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  {
    name: "Next.js",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
    invert: true,
  },
  {
    name: "Solidity",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/solidity/solidity-original.svg",
    invert: true,
  },
  {
    name: "Rust",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/rust/rust-original.svg",
    invert: true,
  },
  {
    name: "Redis",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg",
  },
  {
    name: "Node.js",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  },
  {
    name: "Express.js",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
    invert: true,
  },
  {
    name: "PostgreSQL",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
  },
  {
    name: "Tailwind",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
  },
  {
    name: "Docker",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-plain.svg",
  },
];

function TechBadge({ tech }: { tech: Tech }) {
  return (
    <span className="group inline-flex cursor-pointer items-center rounded-md border border-dashed border-border-1 bg-fg/5 px-2 py-0.5 backdrop-blur-sm sm:px-3 sm:py-[3px]">
      <Image
        src={tech.icon}
        alt={tech.name}
        width={14}
        height={14}
        className={`shrink-0 ${tech.invert ? "tech-icon invert opacity-90" : "tech-icon"}`}
      />
      <span
        className="max-w-0 overflow-hidden whitespace-nowrap text-[0.7rem] leading-none sm:text-[0.76rem] sm:leading-normal group-hover:max-w-[120px] group-hover:ml-1.5 sm:group-hover:ml-2"
        style={{ transition: "max-width 420ms cubic-bezier(0.4,0,0.2,1), margin 420ms cubic-bezier(0.4,0,0.2,1)" }}
      >
        {tech.name}
      </span>
    </span>
  );
}

export default function TechStack2() {
  return (
    <div className="w-full max-w-2xl mt-8 font-[family-name:var(--font-poppins)] text-[0.88rem] leading-[1.5rem] text-fg-1 md:mt-9 md:text-[0.95rem] md:leading-[1.7rem]">
      <p className="flex flex-wrap items-center gap-x-1.5 gap-y-1.5 md:gap-x-2 md:gap-y-2">
        My main tech stack includes
        {techStack.slice(0, 6).map((tech) => (
          <TechBadge key={tech.name} tech={tech} />
        ))}
        and I also work with
        {techStack.slice(6).map((tech) => (
          <TechBadge key={tech.name} tech={tech} />
        ))}
        across different projects.
      </p>
    </div>
  );
}