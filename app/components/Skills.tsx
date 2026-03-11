"use client";

import React from "react";
import Image from "next/image";
import { skills } from "@/app/data/skills";

export default function Skills() {
  return (
    <section className="bg-[#0a0a0a] max-w-6xl w-full lg:px-24 text-white flex justify-center p-8  font-[family-name:var(--font-geist-sans)]">
      <div className="w-full flex flex-col space-y-10">
        <h2 className="text-xl font-[family-name:var(--font-geist-mono)] tracking-tight text-white mb-9">
          Tech Stack
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 w-full">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center gap-4 group hover:opacity-80 transition-opacity"
            >
              <div className="relative w-12 h-12 shrink-0">
                <Image
                  src={skill.icon}
                  alt={`${skill.name} icon`}
                  fill
                  className={`object-contain ${skill.invert ? 'invert' : ''}`}
                />
              </div>
              <span className="font-[family-name:var(--font-geist-mono)] text-[0.95rem] text-[#888888] tracking-tight">
                {skill.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
