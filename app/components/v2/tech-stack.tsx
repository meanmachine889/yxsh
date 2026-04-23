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
    <span className="inline-flex items-center gap-1 rounded-md border border-dashed border-border-1 bg-fg/5 px-2 py-0.5 text-[0.75rem] leading-none backdrop-blur-sm sm:gap-2 sm:px-3 sm:py-[3px] sm:text-[0.82rem] sm:leading-normal">
      <Image
        src={tech.icon}
        alt={tech.name}
        width={14}
        height={14}
        className={tech.invert ? "tech-icon invert opacity-90" : "tech-icon"}
      />
      <span>{tech.name}</span>
    </span>
  );
}

export default function TechStack2() {
  return (
    <div className="w-full max-w-3xl mt-8 font-[family-name:var(--font-poppins)] text-[0.94rem] leading-[1.55rem] text-fg-1 sm:mt-9 sm:text-[1.02rem] sm:leading-[1.75rem]">
      <p className="flex flex-wrap items-center gap-x-1.5 gap-y-1.5 sm:gap-x-2 sm:gap-y-2">
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