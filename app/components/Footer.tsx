"use client";

import React from "react";

export default function Footer() {
  return (
    <section className="bg-[#0a0a0a] max-w-6xl w-full lg:px-24 text-white flex justify-center p-8 font-[family-name:var(--font-geist-sans)] pb-24">
      <div className="w-full flex flex-col">
        <h2 className="text-xl font-[family-name:var(--font-geist-mono)] tracking-tight text-white mb-9">
          Contact
        </h2>

        <div className="w-full flex flex-col">
          <p className="text-[#888888] text-[1.05rem] max-w-2xl leading-relaxed mb-10">
            Tackling a complex problem, launching an ambitious project, or simply want to chat? My inbox is always open.
          </p>

          <div className="flex flex-col md:flex-row md:items-center gap-6 md:gap-10">
            <a
              href="mailto:bharadwajj131@gmail.com"
              className="text-[#cccccc] hover:text-white transition-colors"
            >
              bharadwajj131@gmail.com
            </a>

            <div className="flex items-center gap-4 text-[#888888] font-[family-name:var(--font-geist-mono)] text-[0.95rem]">
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">twitter</a>
              <span className="text-[#444444]">•</span>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">linkedin</a>
              <span className="text-[#444444]">•</span>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">github</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
