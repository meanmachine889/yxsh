"use client";

import Link from "next/link";
import Image from "next/image";
import { useRef, useState } from "react";
import { XProfileCard } from "@/components/ui/x-profile-card";
import { LinkedInProfileCard } from "@/components/ui/linkedin-profile-card";
import { GithubCalendarCard } from "@/components/ui/github-calendar-card";
import { GraphicsCard } from "@/components/ui/graphics-card";
import { SpotifyCard } from "@/components/ui/spotify-card";


export default function Hero2() {
  const cardRef = useRef<HTMLDivElement>(null);
  const [hovering, setHovering] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [showXCard, setShowXCard] = useState(false);
  const [showGhCard, setShowGhCard] = useState(false);
  const [showShiplogCard, setShowShiplogCard] = useState(false);
  const [showLinkedInCard, setShowLinkedInCard] = useState(false);
  const [showMusicCard, setShowMusicCard] = useState(false);
  const [showGraphicsCard, setShowGraphicsCard] = useState(false);
  const [showEmailTip, setShowEmailTip] = useState(false);
  const [emailCopied, setEmailCopied] = useState(false);

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
    <div className="w-full max-w-3xl font-[family-name:var(--font-poppins)] text-fg-1 text-[0.94rem] leading-[1.55rem] space-y-[1.125rem] sm:text-[1.02rem] sm:leading-8 sm:space-y-6">
      <Image
        src="/psyduck.gif"
        alt="laptop"
        width={110}
        height={110}
          className="inline-block -ml-7"
      />
      <p className="mb-9">Hey, I'm Yash Bharadwaj</p>
      <p>
        I’m a software developer{" "}
        <Image
          src="/laptop.png"
          alt="laptop"
          width={25}
          height={25}
          className="inline-block align-middle transition-transform hover:scale-110"
        />{" "}
        at{" "}
        <Link
          href="https://www.integral.com/integral-launches-worlds-first-stablecoin-based-crypto-prime-broker/"
          target="_blank"
          rel="noopener noreferrer"
          className="underline underline-offset-2 hover:text-blue-300"
          style={{ textDecorationColor: "color-mix(in srgb, currentColor 25%, transparent)" }}
        >
          Integral
        </Link>
        , where I work on{" "}
        <Link
          href="https://www.primeone.net/?utm_source=pressrelease&utm_medium=referral&utm_campaign=launch"
          target="_blank"
          rel="noopener noreferrer"
          className="underline underline-offset-2 hover:text-blue-300"
          style={{ textDecorationColor: "color-mix(in srgb, currentColor 25%, transparent)" }}
        >
          PrimeOne
        </Link>
        , the world’s first stablecoin-based crypto prime broker.
      </p>

      <div>
        I’m also building {" "}
        <Image
          src="/shiplog-logo.png"
          alt="laptop"
          width={30}
          height={30}
          className="inline-block -translate-y-0.5 align-middle transition-transform hover:scale-110"
        />{" "} Shiplog, a tool that automates changelog generation so teams can focus more on shipping and less on documenting. Check out the <Link href="https://shiplog.today" target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 hover:text-blue-300" style={{ textDecorationColor: "color-mix(in srgb, currentColor 25%, transparent)" }}>website</Link> or follow updates at <span
          className="relative"
          onMouseEnter={() => setShowShiplogCard(true)}
          onMouseLeave={() => setShowShiplogCard(false)}
        >
          <a
            href="https://x.com/shiploggg"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-fg transition-colors"
          >
            <span className="underline underline-offset-2" style={{ textDecorationColor: "color-mix(in srgb, currentColor 25%, transparent)" }}>@shiploggg</span>
          </a>
          <div
            className="hidden md:block absolute left-0 top-full z-40 pt-3"
            style={{
              opacity: showShiplogCard ? 1 : 0,
              transform: cardTransform(showShiplogCard),
              pointerEvents: showShiplogCard ? "auto" : "none",
              transition: CARD_TRANSITION,
            }}
          >
            <XProfileCard
              name="Shiplog"
              handle="shiploggg"
              avatar="https://pbs.twimg.com/profile_images/2048064078195941376/bjFys8uO_400x400.jpg"
              url="https://x.com/shiploggg"
              bio={[
                { type: "text", text: "We automate your changelogs so you don't have to publish them manually" },
              ]}
            />
          </div>
        </span>.
      </div>

      <p>
        When I’m not coding, you’ll probably find me watching <Image
          src="/tv.png"
          alt="laptop"
          width={25}
          height={25}
          className="inline-block -translate-y-1 align-middle transition-transform hover:scale-110"
        />{" "} series or anime, listening to <Image
          src="/hdphn.png"
          alt="laptop"
          width={20}
          height={20}
          className="inline-block -translate-y-1 align-middle transition-transform hover:scale-110"
        />{" "}  <span
            className="relative"
            onMouseEnter={() => setShowMusicCard(true)}
            onMouseLeave={() => setShowMusicCard(false)}
          >
            <a
              href="https://open.spotify.com/playlist/2Om35BZD8zdKnfrrSJNtHl"
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-2 hover:text-blue-300 transition-colors"
              style={{ textDecorationColor: "color-mix(in srgb, currentColor 25%, transparent)" }}
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
              className="underline underline-offset-2 hover:text-blue-300 transition-colors"
              style={{ textDecorationColor: "color-mix(in srgb, currentColor 25%, transparent)" }}
            >
              graphics
            </a>
            <div
              className="hidden md:block absolute left-0 top-full z-40 pt-3"
              style={{
                opacity: showGraphicsCard ? 1 : 0,
                transform: cardTransform(showGraphicsCard),
                pointerEvents: showGraphicsCard ? "auto" : "none",
                transition: CARD_TRANSITION,
              }}
            >
              <GraphicsCard url="https://in.pinterest.com/furiyash/" />
            </div>
          </span>, and  <Image
          src="/draw.png"
          alt="laptop"
          width={22}
          height={22}
          className="inline-block -translate-y-1 align-middle transition-transform hover:scale-110"
        />{" "}sketches. </p>
      <p>I enjoy being <span className="bg-gradient-to-r from-pink-500 to-violet-500 bg-clip-text text-transparent">creative</span> and exploring new hobbies from time to time.
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
            className="hover:text-fg transition-colors"
          >
            <span className="text-fg-2 underline underline-offset-2" style={{ textDecorationColor: "color-mix(in srgb, currentColor 25%, transparent)" }}>@furiyash</span>
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
                { type: "text", text: "currently " },
                { type: "mention", handle: "IntegralCorp" },
                { type: "text", text: " | building " },
                { type: "mention", handle: "shiploggg" },
                { type: "text", text: " | ex dev @ startups × 2 | open to freelance" },
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
            className="hover:text-fg transition-colors"
          >
            <span className="text-fg-2 underline underline-offset-2" style={{ textDecorationColor: "color-mix(in srgb, currentColor 25%, transparent)" }}>github</span>
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
            className="text-fg-2 underline underline-offset-2 hover:text-fg transition-colors cursor-pointer"
            style={{ textDecorationColor: "color-mix(in srgb, currentColor 25%, transparent)" }}
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
            className="hover:text-fg transition-colors"
          >
            <span className="text-fg-2 underline underline-offset-2" style={{ textDecorationColor: "color-mix(in srgb, currentColor 25%, transparent)" }}>LinkedIn</span>
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
              avatar="https://media.licdn.com/dms/image/v2/D5603AQHX1t0KZ6WeRA/profile-displayphoto-crop_800_800/B56ZvfYtnCIcAQ-/0/1768979358024?e=1778716800&v=beta&t=XCY-33x-QxPkRRcWvAeoN9Mdu6eVWfKm5_0Z-5aZbkc"
              url="https://linkedin.com/in/yash-bharadwaj-47871b251"
              bio="SDE Intern @ Integral | ex dev @ Eventory & Horse's Mouth (Yocket)"
            />
          </div>
        </span>.
      </div>
    </div>
  );
}