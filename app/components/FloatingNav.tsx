"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import {
  Home01Icon,
  CodeIcon,
  NoteIcon,
  Briefcase01Icon,
  Sun01Icon,
  Moon02Icon,
} from "hugeicons-react";

type Theme = "light" | "dark";

const PILL_SHADOW =
  "inset 0 1px 0 0 color-mix(in srgb, var(--fg) 8%, transparent), " +
  "inset 0 -1px 0 0 color-mix(in srgb, var(--bg) 50%, transparent), " +
  "0 10px 24px -10px color-mix(in srgb, var(--fg) 30%, transparent), " +
  "0 2px 4px -2px color-mix(in srgb, var(--fg) 15%, transparent)";

const PUCK_SHADOW =
  "inset 0 1px 0 0 color-mix(in srgb, var(--fg) 18%, transparent), " +
  "inset 0 -1px 1px 0 color-mix(in srgb, var(--bg) 40%, transparent), " +
  "0 2px 4px 0 color-mix(in srgb, var(--bg) 50%, transparent)";

export default function FloatingNav() {
  const pathname = usePathname();
  const [hoveredItem, setHoveredItem] = useState<string | null>( null);
  const [theme, setTheme] = useState<Theme>("light");
  const [mounted, setMounted] = useState(false);
  const audioCtxRef = useRef<AudioContext | null>(null);
  const audioBufferRef = useRef<AudioBuffer | null>(null);

  useEffect(() => {
    const current = (document.documentElement.getAttribute("data-theme") as Theme) || "light";
    setTheme(current);
    setMounted(true);

    const ctx = new AudioContext();
    audioCtxRef.current = ctx;
    fetch("/universfield-computer-mouse-click-352734.mp3")
      .then((r) => r.arrayBuffer())
      .then((buf) => ctx.decodeAudioData(buf))
      .then((decoded) => { audioBufferRef.current = decoded; })
      .catch(() => {});

    return () => { ctx.close(); };
  }, []);

  const playClickSound = () => {
    const ctx = audioCtxRef.current;
    const buffer = audioBufferRef.current;
    if (!ctx || !buffer) return;
    if (ctx.state === "suspended") ctx.resume();
    const source = ctx.createBufferSource();
    source.buffer = buffer;
    const gain = ctx.createGain();
    gain.gain.value = 0.25;
    source.connect(gain);
    gain.connect(ctx.destination);
    source.start(0);
  };

  const toggleTheme = () => {
    const next: Theme = theme === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", next);
    try {
      localStorage.setItem("theme", next);
    } catch {}
    setTheme(next);
  };

  const items = [
    { id: "home", href: "/", Icon: Home01Icon },
    { id: "resume", href: "/resume", Icon: NoteIcon },
  ];

  return (
    <nav className="fixed top-5 right-[max(1.25rem,calc((100vw-48rem)/2))] z-50">
      <div
        className="flex items-center gap-0.5 rounded-full p-1"
        style={{
          backgroundColor: "var(--surface)",
        }}
      >
        {items.map(({ id, href, Icon }) => {
          const isActive = pathname === href;
          const isHovered = hoveredItem === id;

          return (
            <Link
              key={id}
              href={href}
              aria-label={id}
              onClick={playClickSound}
              onMouseEnter={() => setHoveredItem(id)}
              onMouseLeave={() => setHoveredItem(null)}
              className="flex h-7 w-7 items-center justify-center rounded-full transition-colors duration-200"
              style={{
                color: isActive ? "var(--fg)" : isHovered ? "var(--fg-2)" : "var(--fg-3)",
                background: isActive
                  ? "color-mix(in srgb, var(--fg) 14%, var(--surface))"
                  : "transparent",
                boxShadow: isActive ? PUCK_SHADOW : "none",
              }}
            >
              <Icon size={14} strokeWidth={1.75} />
            </Link>
          );
        })}

        <button
          type="button"
          aria-label="Toggle theme"
          onClick={() => {
            playClickSound();
            toggleTheme();
          }}
          onMouseEnter={() => setHoveredItem("theme")}
          onMouseLeave={() => setHoveredItem(null)}
          className="flex h-7 w-7 items-center justify-center rounded-full transition-colors duration-200"
          style={{
            color: "var(--fg)",
            background: "color-mix(in srgb, var(--fg) 14%, var(--surface))",
            boxShadow: PUCK_SHADOW,
          }}
        >
          {mounted ? (
            theme === "dark" ? <Moon02Icon size={14} strokeWidth={1.75} /> : <Sun01Icon size={14} strokeWidth={1.75} />
          ) : (
            <Sun01Icon size={14} strokeWidth={1.75} />
          )}
        </button>
      </div>
    </nav>
  );
}
