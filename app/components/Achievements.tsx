"use client";

import React from "react";
import Link from "next/link";
import { achievements } from "@/app/data/achievements";

export default function Achievements() {
  return (
    <section className="bg-[#0a0a0a] max-w-6xl w-full lg:px-24 text-white flex justify-center p-8  font-[family-name:var(--font-geist-sans)]">
      <div className="w-full flex flex-col space-y-10">
        <h2 className="text-xl font-[family-name:var(--font-geist-mono)] tracking-tight text-white mb-9">
          Achievements
        </h2>

        <div className="space-y-12 w-full">
          {achievements.map((item, index) => (
            <div
              key={index}
              className="flex flex-col md:flex-row gap-6 md:gap-14 group hover:opacity-80 transition-opacity"
            >
              {/* Left Column */}
              <div className="flex flex-col w-full md:w-1/3 shrink-0 gap-3">
                <div className="flex gap-7">
                  <span className="text-[1.5rem] font-[family-name:var(--font-geist-mono)] text-[#333333]">
                    {item.id}
                  </span>
                  <div>
                    <h3 className="text-[1.1rem] font-[family-name:var(--font-geist-mono)] text-white tracking-tight">
                      {item.title}
                    </h3>
                    <div className="text-[#888888] text-[0.95rem] font-[family-name:var(--font-geist-mono)]">
                      {item.subtitle}
                    </div>
                    <Link
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-4 text-[0.85rem] font-[family-name:var(--font-geist-mono)] text-white border border-[#333333] hover:bg-white hover:text-black transition-colors w-max px-4 py-2 rounded-full flex items-center gap-2"
                    >
                      View post
                    </Link>
                  </div>
                </div>
              </div>

              {/* Right Column */}
              <div className="flex flex-col w-full md:w-2/3 md:pt-1">
                <p className="text-[#888888] text-[0.95rem] leading-relaxed max-w-2xl text-justify md:text-left">
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
