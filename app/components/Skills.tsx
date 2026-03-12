"use client";

import React from "react";
import Image from "next/image";
import { skills } from "@/app/data/skills";

export default function Skills() {
  return (
    <section className="bg-[#0a0a0a] border-t border-dashed border-[#333333]  w-full py-12 sm:py-16 lg:py-20 text-white flex justify-center font-[family-name:var(--font-geist-sans)]">
      <div className="w-full flex flex-col">
        <h2 className="text-[clamp(0.9rem,2vw,1.1rem)] font-[family-name:var(--font-geist-mono)] tracking-tight text-white mb-8 sm:mb-10">
          Tech Stack
        </h2>

        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-6 sm:gap-8 w-full">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center gap-3 sm:gap-4 group hover:opacity-80 transition-opacity"
            >
              <div className="relative w-10 h-10 sm:w-12 sm:h-12 shrink-0">
                <Image
                  src={skill.icon}
                  alt={`${skill.name} icon`}
                  fill
                  className={`object-contain ${skill.invert ? 'invert' : ''}`}
                />
              </div>
              <span className="font-[family-name:var(--font-geist-mono)] text-[clamp(0.7rem,1.8vw,0.95rem)] text-[#888888] tracking-tight text-center">
                {skill.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
