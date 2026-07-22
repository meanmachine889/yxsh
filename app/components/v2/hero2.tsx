"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
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
  const [time, setTime] = useState("");

  const EMAIL = "bharadwajj131@gmail.com";
  const CARD_TRANSITION =
    "opacity 240ms cubic-bezier(0.16, 1, 0.3, 1), transform 240ms cubic-bezier(0.16, 1, 0.3, 1)";

  const cardTransform = (visible: boolean) =>
    visible ? "translateY(0) scale(1)" : "translateY(-6px) scale(0.98)";

  useEffect(() => {
    const tick = () => {
      const t = new Intl.DateTimeFormat("en-US", {
        hour: "numeric",
        minute: "2-digit",
        hour12: true,
        timeZone: "Asia/Kolkata",
      })
        .format(new Date())
        .replace(" ", "")
        .toLowerCase();
      setTime(t);
    };
    tick();
    const id = setInterval(tick, 30_000);
    return () => clearInterval(id);
  }, []);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setEmailCopied(true);
      setTimeout(() => setEmailCopied(false), 1500);
    } catch { }
  };

  const linkClass =
    "text-fg-2 underline underline-offset-[3px] hover:text-fg transition-colors";
  const linkStyle = {
    textDecorationColor: "color-mix(in srgb, currentColor 30%, transparent)",
  } as const;

  return (
    <div className="w-full text-fg-2 text-[0.9rem] leading-[1.55rem] space-y-4 md:text-[0.95rem] md:leading-[1.65rem]">
      <header className="mb-4">
        <h1 className="text-[0.9rem] font-semibold text-fg tracking-tight">
          Yash Bharadwaj
        </h1>
        {/* <p className="text-fg-3 text-[0.8rem]" suppressHydrationWarning>
          {time ? `${time} in India` : " "}
        </p> */}
      </header>

      <p>
        I&rsquo;m a software developer at{" "}
        <Link
          href="https://www.optum.in"
          target="_blank"
          rel="noopener noreferrer"
          className={linkClass}
          style={linkStyle}
        >
          Optum
        </Link>
        . Most recently, I worked on{" "}
        <Link
          href="https://www.primeone.net/?utm_source=pressrelease&utm_medium=referral&utm_campaign=launch"
          target="_blank"
          rel="noopener noreferrer"
          className={linkClass}
          style={linkStyle}
        >
          PrimeOne
        </Link>{" "}
        at{" "}
        <Link
          href="https://www.integral.com/integral-launches-worlds-first-stablecoin-based-crypto-prime-broker/"
          target="_blank"
          rel="noopener noreferrer"
          className={linkClass}
          style={linkStyle}
        >
          Integral
        </Link>
        , the world&rsquo;s first stablecoin-based crypto prime broker.
      </p>

      <div>
        When I&rsquo;m not coding, you&rsquo;ll probably find me watching series or anime,
        listening to{" "}
        <span
          className="relative"
          onMouseEnter={() => setShowMusicCard(true)}
          onMouseLeave={() => setShowMusicCard(false)}
        >
          <a
            href="https://open.spotify.com/playlist/2Om35BZD8zdKnfrrSJNtHl"
            target="_blank"
            rel="noopener noreferrer"
            className={linkClass}
            style={linkStyle}
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
        </span>
        , or experimenting with video edits,{" "}
        <span
          className="relative"
          onMouseEnter={() => setShowGraphicsCard(true)}
          onMouseLeave={() => setShowGraphicsCard(false)}
        >
          <a
            href="https://in.pinterest.com/furiyash/"
            target="_blank"
            rel="noopener noreferrer"
            className={linkClass}
            style={linkStyle}
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
        </span>
        , and sketches.
      </div>

      <p>
        When I get some free time, I like playing with UI and building all
        kinds of crazy stuff over at{" "}
        <a
          href="https://kinetic.yxsh.in"
          target="_blank"
          rel="noopener noreferrer"
          className="kinetic-chip"
        >
          Kinetic
        </a>
        .
      </p>

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
            className={linkClass}
            style={linkStyle}
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
        ,{" "}
        <span
          className="relative"
          onMouseEnter={() => setShowGhCard(true)}
          onMouseLeave={() => setShowGhCard(false)}
        >
          <a
            href="https://github.com/meanmachine889"
            target="_blank"
            rel="noopener noreferrer"
            className={linkClass}
            style={linkStyle}
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
        ,{" "}
        <span
          className="relative"
          onMouseEnter={() => setShowEmailTip(true)}
          onMouseLeave={() => setShowEmailTip(false)}
        >
          <button
            type="button"
            onClick={copyEmail}
            className={`${linkClass} cursor-pointer`}
            style={linkStyle}
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
        </span>{" "}
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
            className={linkClass}
            style={linkStyle}
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
        </span>
        .
      </div>
    </div>
  );
}
