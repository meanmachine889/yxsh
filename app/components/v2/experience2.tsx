"use client";

import Image from "next/image";
import { ArrowDown01Icon } from "hugeicons-react";
import { experiences } from "@/app/data/experience";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

type TechMeta = { icon: string; invert?: boolean };

const TECH_ICONS: Record<string, TechMeta> = {
  "Next.js": {
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
    invert: true,
  },
  React: {
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  "Tailwind CSS": {
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
  },
  Redux: {
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg",
  },
  AWS: {
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg",
    invert: true,
  },
  "Node.js": {
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  },
  Express: {
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
    invert: true,
  },
  MongoDB: {
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
  },
  "Chakra UI": {
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/chakraui/chakraui-original.svg",
  },
  Go: {
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original.svg",
  },
  Solidity: {
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/solidity/solidity-original.svg",
    invert: true,
  },
  TypeScript: {
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
  },
};

type Segment = { text: string; bold?: boolean };

const BULLETS: Record<string, Segment[][]> = {
  integral: [
    [
      { text: "Contributing to " },
      { text: "PrimeOne", bold: true },
      { text: ", a " },
      { text: "large scale institutional trading platform", bold: true },
      { text: " built for " },
      { text: "real-time credit transfer", bold: true },
      { text: " and " },
      { text: "high throughput operations", bold: true },
    ],
    [
      { text: "Shipped " },
      { text: "production grade Go services", bold: true },
      { text: " powering " },
      { text: "end to end deposit flows", bold: true },
      { text: " and " },
      { text: "Solana account sweeps", bold: true },
      { text: ", with " },
      { text: "support for chains including Ethereum, Solana, Tron, etc.", bold: true },
    ],
    [
      { text: "Built " },
      { text: "trading workflows", bold: true },
      { text: " on the frontend with " },
      { text: "Next.js, TypeScript, and Redux Toolkit", bold: true },
      { text: ", and designed " },
      { text: "secure APIs", bold: true },
      { text: " across services" },
    ],
  ],
  eventory: [
    [
      { text: "Joined as a " },
      { text: "founding developer", bold: true },
      { text: " and built the " },
      { text: "MVP from the ground up", bold: true },
    ],
    [
      { text: "Built complete " },
      { text: "auth flows", bold: true },
      { text: " using " },
      { text: "AWS Cognito", bold: true },
    ],
    [
      { text: "Designed " },
      { text: "media pipelines", bold: true },
      { text: " on " },
      { text: "S3 + CloudFront", bold: true },
      { text: " for fast delivery" },
    ],
  ],
  yocket: [
    [
      { text: "Boosted " },
      { text: "performance", bold: true },
      { text: " by refactoring legacy code and optimizing asset delivery" },
    ],
    [
      { text: "Migrated " },
      { text: "state management", bold: true },
      { text: " from " },
      { text: "Atoms to Jotai", bold: true },
    ],
    [
      { text: "Built " },
      { text: "reusable components", bold: true },
      { text: " and end-to-end " },
      { text: "auth flows", bold: true },
      { text: " for mentor onboarding" },
    ],
  ],
};

function TechChip({ name }: { name: string }) {
  const meta = TECH_ICONS[name];
  return (
    <span className="inline-flex items-center gap-1 rounded-md border border-dashed border-border-1 bg-fg/5 px-2 py-0.5 text-[0.75rem] leading-none backdrop-blur-sm sm:gap-2 sm:px-3 sm:py-[3px] sm:text-sm sm:leading-normal">
      {meta && (
        <Image
          src={meta.icon}
          alt={name}
          width={14}
          height={14}
          className={meta.invert ? "tech-icon invert opacity-90" : "tech-icon"}
        />
      )}
      <span>{name}</span>
    </span>
  );
}

function Bullet({ segments }: { segments: Segment[] }) {
  return (
    <li className="flex gap-3 text-[13.5px] leading-6 text-fg-2 sm:text-[15px]">
      <span aria-hidden className="shrink-0 select-none translate-y-[-2px] text-xl font-bold text-fg-4">
        •
      </span>
      <span>
        {segments.map((s, i) =>
          s.bold ? (
            <span key={i} className="text-fg font-medium">
              {s.text}
            </span>
          ) : (
            <span className="" key={i}>{s.text}</span>
          )
        )}
      </span>
    </li>
  );
}

export default function Experience2() {
  return (
    <section className="w-full max-w-3xl mt-14 font-[family-name:var(--font-poppins)] sm:mt-16">
      <h2 className="mb-4 text-[0.92rem] text-fg-1 sm:text-[1rem]">Places I've worked at</h2>

      <Accordion className="flex w-full flex-col" defaultValue={["integral"]}>
        {experiences.map((exp) => {
          const bullets = BULLETS[exp.slug] ?? [];
          return (
            <AccordionItem
              key={exp.slug}
              value={exp.slug}
              className="border-dashed border-border-2"
            >
              <AccordionTrigger
                className="py-4 hover:no-underline [&_[data-slot=accordion-trigger-icon]]:hidden"
              >
                <div className="flex w-full items-start justify-between gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:justify-between sm:gap-4">
                  <div className="flex min-w-0 flex-1 flex-col items-start gap-2 sm:flex-row sm:items-center sm:gap-3">
                    <div
                      className={`relative w-8 h-8 rounded-md overflow-hidden shrink-0 ${exp.slug === "eventory"
                          ? "bg-purple-400"
                          : exp.slug === "yocket"
                            ? "bg-orange-500"
                            : "bg-fg/10"
                        }`}
                    >
                      <Image
                        src={exp.logo}
                        alt={exp.company}
                        fill
                        className={
                          exp.slug === "eventory"
                            ? "object-contain p-1.5"
                            : "object-cover"
                        }
                      />
                    </div>
                    <div className="flex min-w-0 flex-col text-left">
                      <span className="md:text-[0.9rem] text-[0.95rem] tracking-tight text-fg">
                        {exp.company}
                      </span>
                      <span className="mt-0.5 text-[0.8rem] text-fg-3">
                        {exp.role}
                      </span>
                      <div className="mt-1 flex flex-col items-start text-left text-[0.8rem] text-fg-2 sm:hidden">
                        <span>{exp.date}</span>
                        <span className="mt-0.5 text-fg-3">{exp.location}</span>
                      </div>
                    </div>
                  </div>

                  <div className="ml-auto flex shrink-0 items-center gap-3 self-start pt-1 sm:self-auto sm:pt-0">
                    <div className="hidden flex-col items-start text-left sm:flex sm:items-end sm:text-right">
                      <span className="text-[0.85rem] text-fg-2">
                        {exp.date}
                      </span>
                      <span className="mt-0.5 text-[0.85rem] text-fg-3">
                        {exp.location}
                      </span>
                    </div>
                    <div style={{
                      backgroundColor: "var(--surface)", background: "color-mix(in srgb, var(--fg) 14%, var(--surface))"
                    }} className="rounded-sm aspect-square flex items-center justify-center p-1 text-[0.75rem] text-fg backdrop-blur-sm">
                      <ArrowDown01Icon
                        size={16}
                        strokeWidth={1.75}
                        className="text-fg-3 transition-transform duration-200 group-aria-expanded/accordion-trigger:rotate-180"
                      />
                    </div>
                  </div>
                </div>
              </AccordionTrigger>

              <AccordionContent className="pb-5 md:pt-3 pt-1 md:px-5 px-1">
                {/* {exp.details.techStack.length > 0 && (
                  <div className="mb-5 flex flex-wrap gap-2">
                    {exp.details.techStack.map((tech) => (
                      <TechChip key={tech} name={tech} />
                    ))}
                  </div>
                )} */}

                {bullets.length > 0 && (
                  <ul className="space-y-4">
                    {bullets.map((segments, i) => (
                      <Bullet key={i} segments={segments} />
                    ))}
                  </ul>
                )}
              </AccordionContent>
            </AccordionItem>
          );
        })}
      </Accordion>
    </section>
  );
}
