"use client";

import React from "react";

export default function Footer() {
  return (
    <section className="bg-[#0a0a0a] border-t border-dashed border-[#333333]  py-12 sm:py-16 lg:py-20 w-full text-white flex justify-center font-[family-name:var(--font-geist-sans)]">
      <div className="w-full flex flex-col">
        <h2 className="text-[clamp(0.9rem,2vw,1.1rem)] font-[family-name:var(--font-geist-mono)] tracking-tight text-white mb-8 sm:mb-10">
          Contact
        </h2>

        <div className="w-full flex flex-col">
          <p className="text-[#888888] text-[clamp(0.85rem,2vw,1.05rem)] max-w-2xl leading-relaxed mb-10">
            Tackling a complex problem, launching an ambitious project, or simply want to chat? My inbox is always open.
          </p>

          <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-10">
            <a
              href="mailto:bharadwajj131@gmail.com"
              className="text-[#cccccc] hover:text-white transition-colors text-[clamp(0.85rem,2vw,1rem)] break-all sm:break-normal"
            >
              bharadwajj131@gmail.com
            </a>

            <div className="flex items-center gap-4 text-[#888888] font-[family-name:var(--font-geist-mono)] text-[clamp(0.8rem,1.8vw,0.95rem)]">
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
