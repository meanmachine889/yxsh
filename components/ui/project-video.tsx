"use client";

import { useRef } from "react";
import { cn } from "@/lib/utils";

interface Props {
  src: string;
  poster?: string;
  className?: string;
}

function derivePoster(src: string): string | undefined {
  if (!/\.(mp4|webm|mov)$/i.test(src)) return undefined;
  let poster = src.replace(/\.(mp4|webm|mov)$/i, ".jpg");
  // Cloudinary defaults to a mid-clip frame — force the first frame with so_0.
  if (poster.includes("/video/upload/") && !/\/so_[^/]+\//.test(poster)) {
    poster = poster.replace("/video/upload/", "/video/upload/so_0/");
  }
  return poster;
}

export function ProjectVideo({ src, poster, className }: Props) {
  const ref = useRef<HTMLVideoElement>(null);
  const resolvedPoster = poster ?? derivePoster(src);

  return (
    <video
      ref={ref}
      src={src}
      poster={resolvedPoster}
      loop
      muted
      playsInline
      preload="metadata"
      onMouseEnter={() => {
        ref.current?.play().catch(() => {});
      }}
      onMouseLeave={() => {
        if (!ref.current) return;
        ref.current.pause();
        ref.current.currentTime = 0;
      }}
      className={cn(
        "w-full rounded-lg border border-border-3 object-cover bg-fg/5",
        className
      )}
    />
  );
}
