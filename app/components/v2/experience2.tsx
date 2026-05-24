"use client";

import Image from "next/image";
import Link from "next/link";
import { experiences } from "@/app/data/experience";

const URLS: Record<string, string> = {
  integral: "https://www.integral.com",
  eventory: "https://eventory.in",
  yocket: "https://yocket.com",
};

const PARAS: Record<string, string> = {
  integral:
    "Building PrimeOne, the world's first stablecoin-based crypto prime broker. Working across the full stack on backend services, blockchain integrations, and frontend trading workflows.",
  eventory:
    "Joined as a founding developer and took the product from zero to a working MVP. Built vendor dashboards, media pipelines, and onboarding flows across the full stack.",
  yocket:
    "Worked as an intern on Horse's Mouth, Yocket's mentor platform. Shipped features across frontend and backend, improved performance, and built reusable components.",
};

export default function Experience2() {
  return (
    <section className="w-full max-w-2xl font-[family-name:var(--font-poppins)] mt-12 md:mt-14">
      <h2 className="mb-6 text-[0.94rem] text-fg-1 leading-[1.65rem]">Places I've worked at</h2>

      <div className="flex flex-col gap-6">
        {experiences.map((exp) => (
          <div key={exp.slug} className="flex gap-3">
            <div
              className={`relative w-8 h-8 rounded-md overflow-hidden shrink-0 mt-0.5 ${
                exp.slug === "eventory"
                  ? "bg-purple-400"
                  : exp.slug === "yocket"
                  ? "bg-orange-500"
                  : "bg-fg/10 border border-border-1"
              }`}
            >
              <Image
                src={exp.logo}
                alt={exp.company}
                fill
                className={exp.slug === "eventory" ? "object-contain p-1.5" : "object-cover"}
              />
            </div>
            <div className="flex min-w-0 flex-1 flex-col gap-1">
              <Link
                href={URLS[exp.slug]}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[0.97rem] font-medium text-fg hover:text-blue-400 transition-colors w-fit leading-snug"
              >
                {exp.company}
              </Link>
              <span className="text-[0.72rem] text-fg-3">{exp.date} · {exp.location}</span>
              <p className="text-[0.94rem] leading-[1.6rem] text-fg-2 mt-1">
                {PARAS[exp.slug]}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
