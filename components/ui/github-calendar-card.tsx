"use client";

import { useEffect, useState } from "react";
import { GitHubCalendar } from "react-github-calendar";
import { cn } from "@/lib/utils";

interface Props {
  username: string;
  className?: string;
}

export function GithubCalendarCard({ username, className }: Props) {
  const [mounted, setMounted] = useState(false);
  const [colorScheme, setColorScheme] = useState<"light" | "dark">("dark");

  useEffect(() => {
    const read = () =>
      setColorScheme(
        (document.documentElement.getAttribute("data-theme") as "light" | "dark") || "dark"
      );
    read();
    setMounted(true);
    const observer = new MutationObserver(read);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["data-theme"],
    });
    return () => observer.disconnect();
  }, []);

  if (!mounted) return (
    <div
      className={cn("rounded-xl p-4 backdrop-blur-md border", className)}
      style={{
        backgroundColor: "color-mix(in srgb, var(--bg) 92%, transparent)",
        borderColor: "var(--border-2)",
      }}
    />
  );

  return (
    <div
      className={cn("rounded-xl p-4 backdrop-blur-md border", className)}
      style={{
        backgroundColor: "color-mix(in srgb, var(--bg) 92%, transparent)",
        borderColor: "var(--border-2)",
        color: "var(--fg-3)",
      }}
    >
      <GitHubCalendar
        username={username}
        colorScheme={colorScheme}
        blockSize={10}
        blockMargin={3}
        blockRadius={2}
        fontSize={11}
        showColorLegend={false}
        showTotalCount={false}
        transformData={(data) => {
          const cutoff = new Date();
          cutoff.setMonth(cutoff.getMonth() - 4);
          const cutoffStr = cutoff.toISOString().slice(0, 10);
          return data.filter((d) => d.date >= cutoffStr);
        }}
      />
    </div>
  );
}
