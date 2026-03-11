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
    <section className="bg-[var(--bg-primary)] min-h-screen max-w-6xl text-[var(--text-primary)] flex items-center justify-center p-8 lg:p-24 overflow-hidden font-[family-name:var(--font-geist-sans)]" style={{ transition: "background-color 0.3s ease, color 0.3s ease" }}>
      <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-5 gap-16 items-center">

        {/* Left Side: Text Content */}
        <div className="flex flex-col space-y-6  sm:max-w-md lg:max-w-none mx-auto lg:mx-0 lg:col-span-3">
          <div className="">
            <h1 className="text-7xl lg:text-7xl font-bold tracking-tighter text-[var(--text-primary)]">
              Hi, I'm Yash
            </h1>
          </div>

          <div className="space-y-4 text-[var(--text-secondary)] text-xl tracking-tight max-w-2xl leading-relaxed">
            <p>
              22 y/o builder from india. i spend most of my time learning new things and building products. currently exploring <span className="text-[var(--text-primary)]">web3</span>, <span className="text-[var(--text-primary)]">ios development</span>, and better ways to build modern apps.
            </p>
          </div>

          <div className="flex items-center gap-4 font-[family-name:var(--font-geist-mono)] text-[0.95rem] text-[var(--text-secondary)]">
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--text-primary)] transition-colors">twitter</a>
            <span className="text-[var(--text-muted)]">•</span>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--text-primary)] transition-colors">linkedin</a>
            <span className="text-[var(--text-muted)]">•</span>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--text-primary)] transition-colors">github</a>
          </div>
        </div>

        {/* Right Side: Interactive Card */}
        <div className="flex justify-center lg:justify-end lg:col-span-2" style={{ perspective: "900px" }}>
          <div
            ref={cardRef}
            onMouseMove={handleMouseMove}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className="relative w-full max-w-[350px] aspect-[4/5] rounded-3xl transition-all duration-200 ease-out cursor-pointer shadow-2xl group"
            style={{
              transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg) scale(${hovering ? 1.05 : 1})`,
              transformStyle: "preserve-3d",
            }}
          >
            {/* Main Card Image Container */}
            <div className="absolute inset-0 rounded-3xl overflow-hidden bg-black shadow-[0_0_50px_rgba(0,0,0,0.5)] flex items-center justify-center">
              <Image
                src="/card/image.png"
                alt="Trainer Card"
                fill
                className="object-contain p-4"
                priority
                sizes="100vw, 420px"
              />
            </div>

            {/* Glare/Shine Effect */}
            <div
              className="absolute inset-0 rounded-3xl pointer-events-none transition-opacity duration-300 ease-in-out mix-blend-overlay z-20"
              style={{
                opacity: hovering ? 0.7 : 0,
                background: `radial-gradient(circle at ${mousePos.x}px ${mousePos.y}px, rgba(255,255,255,0.4) 0%, rgba(255,255,255,0) 60%)`,
              }}
            />

            {/* Holographic Shift Effect on Hover */}
            <div
              className="absolute inset-0 rounded-3xl pointer-events-none transition-opacity duration-300 ease-in-out mix-blend-color-dodge z-30"
              style={{
                opacity: hovering ? 0.6 : 0,
                background: `linear-gradient(115deg, transparent 20%, rgba(255, 0, 0, 0.3) 25%, rgba(255, 127, 0, 0.3) 30%, rgba(255, 255, 0, 0.3) 35%, rgba(0, 255, 0, 0.3) 40%, rgba(0, 255, 255, 0.3) 45%, rgba(0, 0, 255, 0.3) 50%, rgba(139, 0, 255, 0.3) 55%, transparent 60%)`,
                backgroundSize: '300% 300%',
                backgroundPosition: hovering ? `${mousePos.x / 5}% ${mousePos.y / 5}%` : '0% 0%',
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
