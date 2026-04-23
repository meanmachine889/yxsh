"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { XProfileCard } from "@/components/ui/x-profile-card";
import { GithubCalendarCard } from "@/components/ui/github-calendar-card";

export default function   Hero() {
  const cardRef = useRef<HTMLDivElement>(null);
  const [hovering, setHovering] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [showXCard, setShowXCard] = useState(false);
  const [showGhCard, setShowGhCard] = useState(false);

  useEffect(() => {
    const read = () =>
      setTheme((document.documentElement.getAttribute("data-theme") as "light" | "dark") || "light");
    read();
    const observer = new MutationObserver(read);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ["data-theme"] });
    return () => observer.disconnect();
  }, []);

  const isLight = theme === "light";
  const cardImage = isLight
    ? { src: "/card/idcard-white.png", width: 991, height: 1583 }
    : { src: "/card/image-2.png", width: 1496, height: 2435 };

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
    <section className="bg-bg max-w-4xl h-[60vh] w-full text-fg-2 flex items-center justify-center px-6 sm:px-10 md:pt-0 pt-24 lg:px-24 overflow-hidden font-[family-name:var(--font-geist-sans)]" style={{ transition: "background-color 0.3s ease, color 0.3s ease" }}>
      <div className="max-w-5xl w-full grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-6 items-center">

        {/* Left Side: Text Content */}
        <div className="flex flex-col space-y-4 mx-auto lg:mx-0 lg:col-span-3">
          <div>
            <h1 className="text-[clamp(1.75rem,5vw,2.75rem)] font-medium text-fg-2 leading-[1.15] tracking-tight">
              Hi, I'm Yash
            </h1>
          </div>

          <div className="text-fg-3 text-[clamp(0.85rem,1.6vw,1rem)] tracking-tight max-w-xl leading-relaxed">
            <p>
              22 y/o builder from india. i spend most of my time learning new things and building products. currently exploring <span className="text-fg-2">web3</span>, <span className="text-fg-2">ios development</span>, and better ways to build modern apps.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-8">
            <a
              href="mailto:bharadwajj131@gmail.com"
              className="text-fg-2 hover:text-fg transition-colors text-[clamp(0.8rem,1.4vw,0.9rem)] break-all sm:break-normal"
            >
              bharadwajj131@gmail.com
            </a>

            <div className="flex items-center gap-3 text-fg-3 font-[family-name:var(--font-geist-mono)] text-[clamp(0.75rem,1.3vw,0.85rem)]">
              <span
                className="relative"
                onMouseEnter={() => setShowXCard(true)}
                onMouseLeave={() => setShowXCard(false)}
              >
                <a
                  href="https://x.com/furiyash"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-fg transition-colors"
                >
                  twitter
                </a>
                <div
                  className="absolute left-0 top-full z-40 pt-3"
                  style={{
                    opacity: showXCard ? 1 : 0,
                    transform: showXCard ? "translateY(0)" : "translateY(-4px)",
                    pointerEvents: showXCard ? "auto" : "none",
                    transition: "opacity 180ms ease, transform 180ms ease",
                  }}
                >
                  <XProfileCard
                    name="yash"
                    handle="furiyash"
                    avatar="https://unavatar.io/x/furiyash"
                    url="https://x.com/furiyash"
                    verified
                    bio={[
                      { type: "text", text: "currently " },
                      { type: "mention", handle: "IntegralCorp" },
                      { type: "text", text: " | building " },
                      { type: "mention", handle: "shiploggg" },
                      { type: "text", text: " | ex dev @ startups × 2 | open to freelance" },
                    ]}
                  />
                </div>
              </span>
              <span className="text-fg-6">•</span>
              <a href="https://www.linkedin.com/in/yash-bharadwaj-47871b251" target="_blank" rel="noopener noreferrer" className="hover:text-fg transition-colors">linkedin</a>
              <span className="text-fg-6">•</span>
              <span
                className="relative"
                onMouseEnter={() => setShowGhCard(true)}
                onMouseLeave={() => setShowGhCard(false)}
              >
                <a
                  href="https://github.com/meanmachine889"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-fg transition-colors"
                >
                  github
                </a>
                <div
                  className="absolute left-0 top-full z-40 pt-3"
                  style={{
                    opacity: showGhCard ? 1 : 0,
                    transform: showGhCard ? "translateY(0)" : "translateY(-4px)",
                    pointerEvents: showGhCard ? "auto" : "none",
                    transition: "opacity 180ms ease, transform 180ms ease",
                  }}
                >
                  <GithubCalendarCard username="meanmachine889" />
                </div>
              </span>
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
            className="relative w-[42vw] sm:w-[28vw] md:w-[20vw] lg:w-full lg:max-w-[200px] rounded-3xl transition-all duration-200 ease-out cursor-pointer group"
            style={{
              transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg) rotateZ(${hovering ? 0 : 3}deg) scale(${hovering ? 1.05 : 1})`,
              transformStyle: "preserve-3d",
            }}
          >
            {/* Card image — drives the wrapper size so overlays fit exactly */}
            <Image
              src={cardImage.src}
              alt="Trainer Card"
              width={cardImage.width}
              height={cardImage.height}
              className="block w-full h-auto rounded-3xl select-none"
              priority
              sizes="(max-width: 768px) 42vw, 200px"
            />

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

          </div>
        </div>
      </div>
    </section>
  );
}
