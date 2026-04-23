"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { XProfileCard } from "@/components/ui/x-profile-card";
import { GithubCalendarCard } from "@/components/ui/github-calendar-card";

const EMAIL = "bharadwajj131@gmail.com";
const CARD_TRANSITION =
  "opacity 240ms cubic-bezier(0.16, 1, 0.3, 1), transform 240ms cubic-bezier(0.16, 1, 0.3, 1)";

export default function Footer2() {
  const [showXCard, setShowXCard] = useState(false);
  const [showGhCard, setShowGhCard] = useState(false);
  const [showEmailTip, setShowEmailTip] = useState(false);
  const [emailCopied, setEmailCopied] = useState(false);

  const cardTransform = (visible: boolean) =>
    visible ? "translateY(0) scale(1)" : "translateY(6px) scale(0.98)";

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setEmailCopied(true);
      setTimeout(() => setEmailCopied(false), 1500);
    } catch {}
  };

  return (
    <section className="relative w-full max-w-3xl mt-16 mb-14 font-[family-name:var(--font-poppins)] text-[0.92rem] leading-[1.55rem] text-fg-1 space-y-4 sm:mt-20 sm:mb-16 sm:text-[1rem] sm:leading-6">
      <p className="text-fg-1 text-[0.92rem] sm:text-[1rem]">
        Got an idea, a role, or just want to chat — my inbox is always open.
      </p>

      <div className="flex flex-wrap items-center gap-x-1 gap-y-2 pt-2 text-[0.92rem] sm:text-[1rem]">
        Find me at{" "}
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
            <span className="text-fg-2">@furiyash</span>
          </a>
          <div
            className="hidden md:block absolute left-0 bottom-full z-40 pb-3"
            style={{
              opacity: showXCard ? 1 : 0,
              transform: cardTransform(showXCard),
              pointerEvents: showXCard ? "auto" : "none",
              transition: CARD_TRANSITION,
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
            className="hover:text-fg transition-colors"
          >
            <span className="text-fg-2">github</span>
          </a>
          <div
            className="hidden md:block absolute left-0 bottom-full z-40 pb-3"
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
            className="text-fg-2 hover:text-fg transition-colors cursor-pointer"
          >
            email
          </button>
          <span
            className="absolute left-1/2 bottom-full z-40 mb-2 hidden -translate-x-1/2 whitespace-nowrap rounded-md border px-2 py-1 text-[11px] md:block"
            style={{
              backgroundColor: "color-mix(in srgb, var(--bg) 92%, transparent)",
              borderColor: "var(--border-2)",
              color: "var(--fg-2)",
              opacity: showEmailTip ? 1 : 0,
              transform: showEmailTip
                ? "translate(-50%, 0) scale(1)"
                : "translate(-50%, 6px) scale(0.98)",
              pointerEvents: "none",
              transition: CARD_TRANSITION,
            }}
          >
            {emailCopied ? "copied!" : "click to copy"}
          </span>
        </span>{" "}
        or on{" "}
        <Link
          href="https://linkedin.com/in/yashbharadwaj"
          target="_blank"
          rel="noopener noreferrer"
          className="text-fg-2 hover:text-fg transition-colors"
        >
          LinkedIn
        </Link>
        .
      </div>
      <Image
        src="/charmander.gif" // change to your asset
        alt="footer decoration"
        width={90}
        height={90}
        className="absolute md:bottom-2 right-0 opacity-80 pointer-events-none select-none"
      />
    </section>
  );
}
