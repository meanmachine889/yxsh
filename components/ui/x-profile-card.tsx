"use client";

import { cn } from "@/lib/utils";
import { SiX } from "@icons-pack/react-simple-icons";
import { VerifiedBadge } from "./tweet";

type BioPart =
  | { type: "text"; text: string }
  | { type: "mention"; handle: string }
  | { type: "url"; href: string; text: string };

interface XProfileCardProps {
  name: string;
  handle: string;
  avatar: string;
  bio: BioPart[];
  url: string;
  verified?: boolean;
  className?: string;
}

export function XProfileCard({
  name,
  handle,
  avatar,
  bio,
  url,
  verified,
  className,
}: XProfileCardProps) {
  return (
    <div
      className={cn(
        "w-[260px] rounded-lg p-3 backdrop-blur-md font-sans",
        "border",
        className
      )}
      style={{
        backgroundColor: "color-mix(in srgb, var(--bg) 92%, transparent)",
        borderColor: "var(--border-2)",
        color: "var(--fg)",
      }}
    >
      <div className="flex items-start justify-between">
        <div className="flex items-center gap-2">
          <img
            src={avatar}
            alt={name}
            loading="lazy"
            width={32}
            height={32}
            className="rounded-full"
          />
          <div className="flex flex-col">
            <span className="flex items-center gap-1 text-[13px] font-semibold">
              {name}
              {verified && <VerifiedBadge className="size-3.5 text-[#1C9BF1]" />}
            </span>
            <span
              className="-mt-4 text-[11px]"
              style={{ color: "var(--fg-3)" }}
            >
              @{handle}
            </span>
          </div>
        </div>
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Open X profile"
          style={{ color: "var(--fg-2)" }}
        >
          <SiX className="size-3" />
        </a>
      </div>
      <p
        className="mt-2.5 text-[11.5px] leading-5"
        style={{ color: "var(--fg-2)" }}
      >
        {bio.map((part, i) =>
          part.type === "mention" ? (
            <a
              key={i}
              href={`https://x.com/${part.handle}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
              style={{ color: "#1C9BF1" }}
            >
              @{part.handle}
            </a>
          ) : part.type === "url" ? (
            <a
              key={i}
              href={part.href}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
              style={{ color: "#1C9BF1" }}
            >
              {part.text}
            </a>
          ) : (
            <span key={i}>{part.text}</span>
          )
        )}
      </p>
    </div>
  );
}
