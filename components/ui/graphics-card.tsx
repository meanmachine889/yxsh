"use client";

import Image from "next/image";
import { cn } from "@/lib/utils";

interface GraphicsCardProps {
  url: string;
  className?: string;
}

export function GraphicsCard({ url, className }: GraphicsCardProps) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "relative block w-[260px] rounded-sm overflow-hidden border",
        className
      )}
      style={{
        aspectRatio: "1832/1092",
        borderColor: "rgba(174, 174, 174, 0.45)",
      }}
    >
      <Image
        src="/graphic.png"
        alt="graphics"
        fill
        className="object-cover"
        sizes="260px"
      />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          boxShadow: "inset 0 0 0 1px rgba(0,0,0,0.3)",
          borderRadius: "inherit",
        }}
      />
    </a>
  );
}
