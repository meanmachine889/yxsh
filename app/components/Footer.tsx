"use client";

import React, { useState } from "react";
import Image from "next/image";

export default function Footer() {
  const [hovering, setHovering] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  return (
    <section className="bg-black border-t border-dashed border-[#333333]  py-12 sm:py-16 lg:py-20 w-full text-white flex justify-center font-[family-name:var(--font-geist-sans)]">
      <div className="w-full flex flex-col sm:flex-row sm:items-end sm:justify-between gap-10 sm:gap-0">
        <div className="flex flex-col">
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

              <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-[#888888] font-[family-name:var(--font-geist-mono)] text-[clamp(0.8rem,1.8vw,0.95rem)]">
                <a href="https://x.com/furiyash" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">twitter</a>
                <span className="text-[#444444]">•</span>
                <a href="https://www.linkedin.com/in/yash-bharadwaj-47871b251" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">linkedin</a>
                <span className="text-[#444444]">•</span>
                <a href="https://github.com/meanmachine889" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">github</a>
                <span className="text-[#444444]">•</span>
                <a href="https://drive.google.com/file/d/1gcJPKYqwmLngCaruuUED1utYBywRZB6k/view?usp=drive_link" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">resume</a>
              </div>
            </div>
          </div>
        </div>

        {/* Red Bull Image */}
        <div
          className="relative flex-shrink-0 w-28 h-44 sm:w-35 sm:h-60 rounded-2xl overflow-hidden cursor-pointer"
          onMouseMove={handleMouseMove}
          onMouseEnter={() => setHovering(true)}
          onMouseLeave={() => setHovering(false)}
        >
          <Image
            src="/redbull/image.png"
            alt="Red Bull"
            fill
            className="object-contain"
            sizes="128px"
            loading="eager"
          />
          {/* Soft Radial Glow */}
          <div
            className="absolute inset-0 pointer-events-none transition-opacity duration-300 ease-in-out z-20"
            style={{
              opacity: hovering ? 0.75 : 0,
              background: `radial-gradient(ellipse at ${mousePos.x}px ${mousePos.y}px, rgba(255,255,255,0.5) 0%, rgba(255,255,255,0.15) 40%, transparent 70%)`,
              mixBlendMode: 'overlay',
            }}
          />
          {/* Sharp Light Streak */}
          <div
            className="absolute inset-0 pointer-events-none transition-opacity duration-300 ease-in-out z-30"
            style={{
              opacity: hovering ? 0.65 : 0,
              background: `linear-gradient(${105 + (mousePos.x / 8)}deg, transparent 25%, rgba(255,255,255,0.25) 42%, rgba(255,255,255,0.5) 50%, rgba(255,255,255,0.25) 58%, transparent 75%)`,
              mixBlendMode: 'overlay',
            }}
          />
        </div>
      </div>
    </section>
  );
}
