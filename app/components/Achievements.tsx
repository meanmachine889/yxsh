"use client";

import React from "react";
import Link from "next/link";
import { achievements } from "@/app/data/achievements";

export default function Achievements() {
  return (
    <section className="bg-[#0a0a0a] w-full border-t border-dashed border-[#333333]  py-12 sm:py-16 lg:py-20 text-white flex justify-center font-[family-name:var(--font-geist-sans)]">
      <div className="w-full flex flex-col">
        <h2 className="text-[clamp(0.9rem,2vw,1.1rem)] font-[family-name:var(--font-geist-mono)] tracking-tight text-white mb-8 sm:mb-10">
          Achievements
        </h2>

        <div className="space-y-10 sm:space-y-12 w-full">
          {achievements.map((item, index) => (
            <div
              key={index}
              className="flex flex-col md:flex-row gap-6 md:gap-14 group hover:opacity-80 transition-opacity"
            >
              {/* Left Column */}
              <div className="flex flex-col w-full md:w-1/3 shrink-0 gap-3">
                <div className="flex gap-5 sm:gap-7">
                  <span className="text-[clamp(1.1rem,3vw,1.5rem)] font-[family-name:var(--font-geist-mono)] text-[#333333]">
                    {item.id}
                  </span>
                  <div>
                    <h3 className="text-[clamp(0.95rem,2.2vw,1.1rem)] font-[family-name:var(--font-geist-mono)] text-white tracking-tight">
                      {item.title}
                    </h3>
                    <div className="text-[#888888] text-[clamp(0.8rem,1.8vw,0.95rem)] font-[family-name:var(--font-geist-mono)]">
                      {item.subtitle}
                    </div>
                    <Link
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-4 text-[clamp(0.75rem,1.5vw,0.85rem)] font-[family-name:var(--font-geist-mono)] text-white border border-[#333333] hover:bg-white hover:text-black transition-colors w-max px-4 py-2 rounded-full flex items-center gap-2"
                    >
                      View post
                    </Link>
                  </div>
                </div>
              </div>

              {/* Right Column */}
              <div className="hidden md:flex flex-col w-full md:w-2/3 md:pt-1">
                <p className="text-[#888888] text-[clamp(0.85rem,2vw,0.95rem)] leading-relaxed max-w-2xl text-left">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
