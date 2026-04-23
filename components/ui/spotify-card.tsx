"use client";

import { useState, useEffect } from "react";
import { SiSpotify } from "@icons-pack/react-simple-icons";
import { cn } from "@/lib/utils";

interface SpotifyData {
  title: string;
  subtitle: string;
  image: string;
  link: string;
}

interface SpotifyCardProps {
  url: string;
  className?: string;
}

export function SpotifyCard({ url, className }: SpotifyCardProps) {
  const [data, setData] = useState<SpotifyData | null>(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    let cancelled = false;
    fetch(`/api/spotify?url=${encodeURIComponent(url)}`)
      .then((r) => (r.ok ? r.json() : Promise.reject()))
      .then((d) => { if (!cancelled) setData(d); })
      .catch(() => { if (!cancelled) setError(true); });
    return () => { cancelled = true; };
  }, [url]);

  if (error) {
    return (
      <div
        className={cn(
          "w-[260px] h-[96px] rounded-xl border flex items-center justify-center text-[11.5px]",
          className
        )}
        style={{
          backgroundColor: "color-mix(in srgb, var(--bg) 92%, transparent)",
          borderColor: "var(--border-2)",
          color: "var(--fg-3)",
        }}
      >
        Couldn&apos;t load Spotify preview
      </div>
    );
  }

  if (!data) {
    return (
      <div
        className={cn(
          "w-[260px] h-[96px] rounded-xl border flex items-stretch gap-3 p-3",
          className
        )}
        style={{
          backgroundColor: "color-mix(in srgb, var(--bg) 92%, transparent)",
          borderColor: "var(--border-2)",
        }}
      >
        <div
          className="aspect-square h-full animate-pulse rounded-md"
          style={{ backgroundColor: "var(--surface)" }}
        />
        <div className="flex flex-col justify-center gap-1.5 flex-1">
          <div
            className="h-3 w-3/4 animate-pulse rounded"
            style={{ backgroundColor: "var(--surface)" }}
          />
          <div
            className="h-2.5 w-1/2 animate-pulse rounded"
            style={{ backgroundColor: "var(--surface)" }}
          />
        </div>
      </div>
    );
  }

  return (
    <a
      href={data.link}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "relative block w-[260px] h-[96px] overflow-hidden rounded-xl border",
        className
      )}
      style={{ borderColor: "var(--border-2)", backgroundColor: "#111" }}
    >
      <img
        src={data.image}
        alt=""
        aria-hidden
        className="absolute inset-0 h-full w-full object-cover scale-110"
        style={{ filter: "blur(28px) brightness(1) saturate(2)" }}
      />
      <div className="absolute inset-0" style={{ background: "rgba(0,0,0,0.45)" }} />

      <div className="relative z-10 flex h-full items-center gap-3 p-3">
        <img
          src={data.image}
          alt={data.title}
          className="h-[72px] w-[72px] shrink-0 rounded-md object-cover shadow-md"
        />
        <div className="flex min-w-0 flex-1 flex-col justify-between self-stretch py-0.5">
          <div className="min-w-0">
            <div className="truncate text-[13px] font-semibold text-white">
              {data.title}
            </div>
            <div className="truncate text-[11.5px] text-white/70">
              {data.subtitle}
            </div>
          </div>
        </div>
      </div>
    </a>
  );
}
