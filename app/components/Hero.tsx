"use client";

import React, { useRef, useState } from "react";
import Image from "next/image";

export default function Hero() {
  const cardRef = useRef<HTMLDivElement>(null);
  const [hovering, setHovering] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [rotation, setRotation] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    setMousePos({ x, y });

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((centerY - y) / centerY) * 15;
    const rotateY = ((x - centerX) / centerX) * 15;

    setRotation({ x: rotateX, y: rotateY });
  };

  const handleMouseEnter = () => setHovering(true);

  const handleMouseLeave = () => {
    setHovering(false);
    setRotation({ x: 0, y: 0 });
  };

  return (
    <section className="bg-[var(--bg-primary)] max-w-6xl h-screen w-full text-[#cccccc] flex items-center justify-center px-6 sm:px-10 lg:px-24 overflow-hidden font-[family-name:var(--font-geist-sans)]" style={{ transition: "background-color 0.3s ease, color 0.3s ease" }}>
      <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-7 items-center">

        {/* Left Side: Text Content */}
        <div className="flex flex-col space-y-5 lg:space-y-6 mx-auto lg:mx-0 lg:col-span-3">
          <div>
            <h1 className="text-[clamp(2.5rem,8vw,4.5rem)] font-bold  text-[#cccccc] leading-[1.1]">
              Hi, I'm Yash
            </h1>
          </div>

          <div className="space-y-4 text-[#888888] text-[clamp(0.95rem,2.2vw,1.25rem)] tracking-tight max-w-2xl leading-relaxed">
            <p>
              22 y/o builder from india. i spend most of my time learning new things and building products. currently exploring <span className="text-[#cccccc]">web3</span>, <span className="text-[#cccccc]">ios development</span>, and better ways to build modern apps.
            </p>
          </div>

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

        {/* Right Side: Interactive Card */}
        <div className="flex justify-center lg:justify-end lg:col-span-2" style={{ perspective: "2000px" }}>
          <div
            ref={cardRef}
            onMouseMove={handleMouseMove}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className="relative w-[70vw] sm:w-[50vw] md:w-[40vw] lg:w-full lg:max-w-[420px] aspect-[4/5] rounded-3xl transition-all duration-200 ease-out cursor-pointer shadow-2xl group"
            style={{
              transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg) rotateZ(${hovering ? 0 : 3}deg) scale(${hovering ? 1.05 : 1})`,
              transformStyle: "preserve-3d",
            }}
          >
            {/* Main Card Image Container */}
            <div className="absolute inset-0 rounded-3xl overflow-hidden bg-black shadow-[0_0_50px_rgba(0,0,0,0.5)] flex items-center justify-center">
              <Image
                src="/card/image-2.png"
                alt="Trainer Card"
                fill
                className="object-contain p-4"
                priority
                sizes="100vw, 420px"
              />
            </div>


            {/* Plastic Cover — Soft Radial Glow */}
            <div
              className="absolute inset-0 rounded-3xl pointer-events-none transition-opacity duration-300 ease-in-out z-20"
              style={{
                opacity: hovering ? 0.75 : 0,
                background: `radial-gradient(ellipse at ${mousePos.x}px ${mousePos.y}px, rgba(255,255,255,0.5) 0%, rgba(255,255,255,0.15) 40%, transparent 70%)`,
                mixBlendMode: 'overlay',
              }}
            />

            {/* Plastic Cover — Sharp Light Streak */}
            <div
              className="absolute inset-0 rounded-3xl pointer-events-none transition-opacity duration-300 ease-in-out z-30"
              style={{
                opacity: hovering ? 0.65 : 0,
                background: `linear-gradient(${105 + (mousePos.x / 8)}deg, transparent 25%, rgba(255,255,255,0.25) 42%, rgba(255,255,255,0.5) 50%, rgba(255,255,255,0.25) 58%, transparent 75%)`,
                mixBlendMode: 'overlay',
              }}
            />

            {/* Dynamic Drop Shadow */}
            <div
              className="absolute inset-0 -z-10 rounded-3xl pointer-events-none transition-all duration-300"
              style={{
                boxShadow: hovering
                  ? `${rotation.y * -1}px ${rotation.x * 1}px 40px rgba(0,0,0,0.8)`
                  : '0 0 20px rgba(0,0,0,0.5)',
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
