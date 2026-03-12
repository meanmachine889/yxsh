"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { experiences } from "@/app/data/experience";

export default function WorkExperience() {
  return (
    <section className="bg-[#0a0a0a] w-full py-12 border-t border-dashed border-[#333333] sm:py-16 lg:py-20 text-white flex justify-center font-[family-name:var(--font-geist-sans)]">
      <div className="w-full flex flex-col">
        <h2 className="text-[clamp(0.9rem,2vw,1.1rem)] font-[family-name:var(--font-geist-mono)] tracking-tight text-white mb-8 sm:mb-10">
          Experience
        </h2>

        <div className="space-y-8 sm:space-y-10 w-full">
          {experiences.map((exp, index) => (
            <Link key={index} href={`/experience/${exp.slug}`} className="flex flex-col md:flex-row md:items-center md:justify-between tracking-tight gap-3 md:gap-0 group cursor-pointer pb-2 hover:opacity-80 transition-opacity">
              {/* Left Side: Logo, Company and Role */}
              <div className="flex items-center gap-4">
                <div className={`relative w-10 h-10 rounded-full overflow-hidden shrink-0 ${exp.slug === 'eventory' ? 'bg-purple-400' :
                  exp.slug === 'yocket' ? 'bg-orange-500' :
                    'bg-[#1a1a1a]'
                  }`}>
                  <Image
                    src={exp.logo}
                    alt={`${exp.company} logo`}
                    fill
                    className={exp.slug === 'eventory' ? "object-contain p-3" : "object-cover"}
                  />
                </div>

                <div className="flex flex-col">
                  <div className="flex items-center gap-3">
                    <h3 className="text-[clamp(0.95rem,2.2vw,1.1rem)] font-[family-name:var(--font-geist-mono)] text-white">
                      {exp.company}
                    </h3>
                  </div>
                  <div className="text-[#888888] text-[clamp(0.8rem,1.8vw,0.95rem)] mt-1">
                    {exp.role}
                  </div>
                </div>
              </div>

              {/* Right Side: Date and Location */}
              <div className="flex flex-col md:text-right mt-1 md:mt-0 pl-14 md:pl-0">
                <div className="text-[#888888] text-[clamp(0.8rem,1.8vw,0.95rem)] font-[family-name:var(--font-geist-mono)]">
                  {exp.date}
                </div>
                <div className="text-[#888888] text-[clamp(0.8rem,1.8vw,0.95rem)] mt-1">
                  {exp.location}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
