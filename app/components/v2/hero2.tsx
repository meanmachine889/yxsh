"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { XProfileCard } from "@/components/ui/x-profile-card";
import { LinkedInProfileCard } from "@/components/ui/linkedin-profile-card";
import { GithubCalendarCard } from "@/components/ui/github-calendar-card";
import { GraphicsCard } from "@/components/ui/graphics-card";
import { SpotifyCard } from "@/components/ui/spotify-card";


export default function Hero2() {
  const [showXCard, setShowXCard] = useState(false);
  const [showGhCard, setShowGhCard] = useState(false);
  const [showLinkedInCard, setShowLinkedInCard] = useState(false);
  const [showMusicCard, setShowMusicCard] = useState(false);
  const [showGraphicsCard, setShowGraphicsCard] = useState(false);
  const [showEmailTip, setShowEmailTip] = useState(false);
  const [emailCopied, setEmailCopied] = useState(false);
  const [showShiplogPreview, setShowShiplogPreview] = useState(false);
  const [showScanMcpTip, setShowScanMcpTip] = useState(false);
  const [showMcpScannerPreview, setShowMcpScannerPreview] = useState(false);

  const EMAIL = "bharadwajj131@gmail.com";
  const CARD_TRANSITION =
    "opacity 240ms cubic-bezier(0.16, 1, 0.3, 1), transform 240ms cubic-bezier(0.16, 1, 0.3, 1)";

  const cardTransform = (visible: boolean) =>
    visible ? "translateY(0) scale(1)" : "translateY(-6px) scale(0.98)";

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setEmailCopied(true);
      setTimeout(() => setEmailCopied(false), 1500);
    } catch { }
  };
  return (
    <div className="w-full max-w-2xl font-[family-name:var(--font-poppins)] text-fg-1 text-[0.88rem] leading-[1.5rem] space-y-4 md:text-[0.95rem] md:leading-[1.75rem] md:space-y-5">
      <div className="flex justify-between items-start mt-7 w-full gap-2">
        <Image
          src="/psyduck.gif"
          alt="laptop"
          width={110}
          height={110}
          className="inline-block -ml-7 -mb-9 mt-6 sm:mt-3 md:mt-0 shrink-0"
        />
      </div>
      <p className="mb-9">Hey, I'm Yash Bharadwaj</p>

      <p>
        I’m a software developer at{" "}
        <Link
          href="https://www.integral.com/integral-launches-worlds-first-stablecoin-based-crypto-prime-broker/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-fg-3 underline underline-offset-2 hover:text-blue-400 transition-colors"
          style={{ textDecorationColor: "color-mix(in srgb, currentColor 30%, transparent)" }}
        >
          Integral
        </Link>
        , where I work on{" "}
        <Link
          href="https://www.primeone.net/?utm_source=pressrelease&utm_medium=referral&utm_campaign=launch"
          target="_blank"
          rel="noopener noreferrer"
          className="text-fg-3 underline underline-offset-2 hover:text-blue-400 transition-colors"
          style={{ textDecorationColor: "color-mix(in srgb, currentColor 30%, transparent)" }}
        >
          PrimeOne
        </Link>
        , the world’s first stablecoin based crypto prime broker.
      </p>

      <div>
        Some of my recent works are {" "}
        <span
          className="relative"
          onMouseEnter={() => setShowShiplogPreview(true)}
          onMouseLeave={() => setShowShiplogPreview(false)}
        >
          <a
            href="https://shiplog.today"
            target="_blank"
            rel="noopener noreferrer"
            className="text-fg-3 underline underline-offset-2 hover:text-blue-400 transition-colors"
            style={{ textDecorationColor: "color-mix(in srgb, currentColor 30%, transparent)" }}
          >
            Shiplog
          </a>
          <div
            className="hidden md:block absolute left-0 top-full z-40 pt-2"
            style={{
              opacity: showShiplogPreview ? 1 : 0,
              transform: cardTransform(showShiplogPreview),
              pointerEvents: showShiplogPreview ? "auto" : "none",
              transition: CARD_TRANSITION,
            }}
          >
            <div
              className="rounded-xl overflow-hidden border-2"
              style={{ width: 300, height: 188, borderColor: "var(--border-1)", boxShadow: "0 12px 36px rgba(0,0,0,0.13)" }}
            >
              <iframe
                src="https://shiplog.today"
                title="shiplog.today preview"
                style={{ width: 1200, height: 752, border: "none", transform: "scale(0.25)", transformOrigin: "top left", pointerEvents: "none", userSelect: "none" }}
                loading="lazy"
                sandbox="allow-scripts allow-same-origin"
              />
            </div>
          </div>
        </span>
        ,{" "}
        <span
          className="relative"
          onMouseEnter={() => setShowScanMcpTip(true)}
          onMouseLeave={() => setShowScanMcpTip(false)}
        >
          <a
            href="https://www.npmjs.com/package/scan-my-mcp"
            target="_blank"
            rel="noopener noreferrer"
            className="text-fg-3 underline underline-offset-2 hover:text-blue-400 transition-colors"
            style={{ textDecorationColor: "color-mix(in srgb, currentColor 30%, transparent)" }}
          >
            scan-my-mcp
          </a>
          <div
            className="hidden md:block absolute left-0 top-full z-40 pt-2"
            style={{
              opacity: showScanMcpTip ? 1 : 0,
              transform: cardTransform(showScanMcpTip),
              pointerEvents: "none",
              transition: CARD_TRANSITION,
            }}
          >
            <div
              className="rounded-lg border-2 px-3 py-2.5 text-left whitespace-nowrap"
              style={{ borderColor: "var(--border-1)", backgroundColor: "var(--bg)", boxShadow: "0 8px 28px rgba(0,0,0,0.10)" }}
            >
              <p className="text-[0.78rem] font-mono text-fg-2 mb-1">$ npx scan-my-mcp</p>
              <p className="text-[0.72rem] text-fg-3">CLI tool · scans your MCP server for issues</p>
            </div>
          </div>
        </span>
        , and{" "}
        <span
          className="relative"
          onMouseEnter={() => setShowMcpScannerPreview(true)}
          onMouseLeave={() => setShowMcpScannerPreview(false)}
        >
          <a
            href="https://mcpscanner.yxsh.in"
            target="_blank"
            rel="noopener noreferrer"
            className="text-fg-3 underline underline-offset-2 hover:text-blue-400 transition-colors"
            style={{ textDecorationColor: "color-mix(in srgb, currentColor 30%, transparent)" }}
          >
            MCP Scanner
          </a>
          <div
            className="hidden md:block absolute left-0 top-full z-40 pt-2"
            style={{
              opacity: showMcpScannerPreview ? 1 : 0,
              transform: cardTransform(showMcpScannerPreview),
              pointerEvents: showMcpScannerPreview ? "auto" : "none",
              transition: CARD_TRANSITION,
            }}
          >
            <div
              className="rounded-xl overflow-hidden border-2"
              style={{ width: 300, height: 188, borderColor: "var(--border-1)", boxShadow: "0 12px 36px rgba(0,0,0,0.13)" }}
            >
              <iframe
                src="https://mcpscanner.yxsh.in"
                title="mcpscanner.yxsh.in preview"
                style={{ width: 1200, height: 752, border: "none", transform: "scale(0.25)", transformOrigin: "top left", pointerEvents: "none", userSelect: "none" }}
                loading="lazy"
                sandbox="allow-scripts allow-same-origin"
              />
            </div>
          </div>
        </span>.
      </div>
      <div>
        When I’m not coding, you’ll probably find me watching series or anime, listening to <span
          className="relative"
          onMouseEnter={() => setShowMusicCard(true)}
          onMouseLeave={() => setShowMusicCard(false)}
        >
          <a
            href="https://open.spotify.com/playlist/2Om35BZD8zdKnfrrSJNtHl"
            target="_blank"
            rel="noopener noreferrer"
            className="text-fg-3 underline underline-offset-2 hover:text-blue-400 transition-colors"
            style={{ textDecorationColor: "color-mix(in srgb, currentColor 30%, transparent)" }}
          >
            music
          </a>
          <div
            className="hidden md:block absolute left-0 top-full z-40 pt-3"
            style={{
              opacity: showMusicCard ? 1 : 0,
              transform: cardTransform(showMusicCard),
              pointerEvents: showMusicCard ? "auto" : "none",
              transition: CARD_TRANSITION,
            }}
          >
            <SpotifyCard url="https://open.spotify.com/playlist/2Om35BZD8zdKnfrrSJNtHl" />
          </div>
        </span>, or experimenting with video edits, <span
          className="relative"
          onMouseEnter={() => setShowGraphicsCard(true)}
          onMouseLeave={() => setShowGraphicsCard(false)}
        >
          <a
            href="https://in.pinterest.com/furiyash/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-fg-3 underline underline-offset-2 hover:text-blue-400 transition-colors"
            style={{ textDecorationColor: "color-mix(in srgb, currentColor 30%, transparent)" }}
          >
            graphics
          </a>
          <div
            className="hidden md:block absolute left-0 top-full z-40 pt-3"
            style={{
              opacity: showGraphicsCard ? 1 : 0,
              transform: cardTransform(showGraphicsCard),
              pointerEvents: "none",
              transition: CARD_TRANSITION,
            }}
          >
            <GraphicsCard url="https://in.pinterest.com/furiyash/" />
          </div>
        </span>, and sketches.</div>
      <div className="flex flex-wrap items-center gap-x-1 gap-y-2">
        Reach me at{" "}
        <span
          className="relative"
          onMouseEnter={() => setShowXCard(true)}
          onMouseLeave={() => setShowXCard(false)}
        >
          <a
            href="https://x.com/furiyash"
            target="_blank"
            rel="noopener noreferrer"
            className="text-fg-3 underline underline-offset-2 hover:text-blue-400 transition-colors"
            style={{ textDecorationColor: "color-mix(in srgb, currentColor 30%, transparent)" }}
          >
            @furiyash
          </a>
          <div
            className="hidden md:block absolute left-0 top-full z-40 pt-3"
            style={{
              opacity: showXCard ? 1 : 0,
              transform: cardTransform(showXCard),
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
                { type: "mention", handle: "IntegralCorp" },
                { type: "text", text: " | " },
                { type: "url", href: "https://kinetic.yxsh.in", text: "kinetic.yxsh.in" },
                { type: "text", text: " | " },
                { type: "mention", handle: "shiploggg" },
              ]}
            />
          </div>
        </span>
        , <span
          className="relative"
          onMouseEnter={() => setShowGhCard(true)}
          onMouseLeave={() => setShowGhCard(false)}
        >
          <a
            href="https://github.com/meanmachine889"
            target="_blank"
            rel="noopener noreferrer"
            className="text-fg-3 underline underline-offset-2 hover:text-blue-400 transition-colors"
            style={{ textDecorationColor: "color-mix(in srgb, currentColor 30%, transparent)" }}
          >
            github
          </a>
          <div
            className="hidden md:block absolute left-0 top-full z-40 pt-3"
            style={{
              opacity: showGhCard ? 1 : 0,
              transform: cardTransform(showGhCard),
              pointerEvents: showGhCard ? "auto" : "none",
              transition: CARD_TRANSITION,
            }}
          >
            <GithubCalendarCard username="meanmachine889" />
          </div>
        </span>
        , <span
          className="relative"
          onMouseEnter={() => setShowEmailTip(true)}
          onMouseLeave={() => setShowEmailTip(false)}
        >
          <button
            type="button"
            onClick={copyEmail}
            className="text-fg-3 underline underline-offset-2 hover:text-blue-400 transition-colors cursor-pointer"
            style={{ textDecorationColor: "color-mix(in srgb, currentColor 30%, transparent)" }}
          >
            email
          </button>
          <span
            className="absolute left-0 top-full z-40 mt-2 whitespace-nowrap rounded-md border px-2 py-1 text-left text-[11px]"
            style={{
              backgroundColor: "color-mix(in srgb, var(--bg) 92%, transparent)",
              borderColor: "var(--border-2)",
              color: "var(--fg-2)",
              opacity: showEmailTip ? 1 : 0,
              transform: showEmailTip
                ? "translateY(0) scale(1)"
                : "translateY(-6px) scale(0.98)",
              pointerEvents: "none",
              transition: CARD_TRANSITION,
            }}
          >
            {emailCopied ? "copied!" : "click to copy"}
          </span>
        </span>
        or on{" "}
        <span
          className="relative"
          onMouseEnter={() => setShowLinkedInCard(true)}
          onMouseLeave={() => setShowLinkedInCard(false)}
        >
          <a
            href="https://linkedin.com/in/yash-bharadwaj-47871b251"
            target="_blank"
            rel="noopener noreferrer"
            className="text-fg-3 underline underline-offset-2 hover:text-blue-400 transition-colors"
            style={{ textDecorationColor: "color-mix(in srgb, currentColor 30%, transparent)" }}
          >
            LinkedIn
          </a>
          <div
            className="hidden md:block absolute left-0 top-full z-40 pt-3"
            style={{
              opacity: showLinkedInCard ? 1 : 0,
              transform: cardTransform(showLinkedInCard),
              pointerEvents: showLinkedInCard ? "auto" : "none",
              transition: CARD_TRANSITION,
            }}
          >
            <LinkedInProfileCard
              name="Yash Bharadwaj"
              handle="yash-bharadwaj-47871b251"
              avatar="https://media.licdn.com/dms/image/v2/D5603AQHX1t0KZ6WeRA/profile-displayphoto-crop_800_800/B56ZvfYtnCIcAQ-/0/1768979358024?e=1781136000&v=beta&t=vIAGkdAOq8GJ-3dJNPMm0Z4TaZMl7GWeEJe_KTvVSh8"
              url="https://linkedin.com/in/yash-bharadwaj-47871b251"
              bio="SDE Intern @ Integral | ex dev @ Eventory & Horse's Mouth (Yocket)"
            />
          </div>
        </span>.
      </div>
    </div>
  );
}