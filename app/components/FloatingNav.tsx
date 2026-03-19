"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { useState } from "react";
import { House, Monitor, FileText } from "lucide-react";

function HomeIcon() {
  return (
    <House  size={18}/>
  );
}

function ProjectsIcon() {
  return (
    <Monitor size={18} />
  );
}

function ResumeIcon() {
  return (
    <FileText size={18} />
  );
}

export default function FloatingNav() {
  const pathname = usePathname();
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  const items = [
    { id: "home", label: "Home", href: "/", icon: HomeIcon },
    { id: "projects", label: "Projects", href: "/projects", icon: ProjectsIcon },
    { id: "resume", label: "Resume", href: "/resume", icon: ResumeIcon },
  ];

  return (
    <nav className="fixed top-5 right-5 z-50">
      <div
        className="flex items-center rounded-full border border-[#2a2a2a] bg-black/80 backdrop-blur-md shadow-lg shadow-black/30"
        style={{ padding: "4px" }}
      >
        {items.map((item, index) => {
          const Icon = item.icon;
          const isActive = pathname === item.href;
          const isHovered = hoveredItem === item.id;

          return (
            <div key={item.id} className="flex items-center">
              
              <Link
                href={item.href}
                onMouseEnter={() => setHoveredItem(item.id)}
                onMouseLeave={() => setHoveredItem(null)}
                className="relative flex items-center gap-1 rounded-full transition-all duration-300 ease-out"
                style={{
                  padding: "8px 12px",
                  color: isActive ? "#ffffff" : isHovered ? "#cccccc" : "#666666",
                  backgroundColor: isActive
                    ? "rgba(255,255,255,0.08)"
                    : isHovered
                    ? "rgba(255,255,255,0.04)"
                    : "transparent",
                }}
              >
                <Icon />
                <span
                  className="overflow-hidden font-[family-name:var(--font-geist-mono)] whitespace-nowrap text-xs font-medium transition-all duration-300 ease-out"
                  style={{
                    fontFamily: "var(--font-geist-mono)",
                    maxWidth: isHovered || !isActive ? "80px" : "0px",
                    opacity: isHovered || !isActive ? 1 : 0,
                    marginLeft: isHovered || !isActive ? "6px" : "0px",
                  }}
                >
                  {item.label}
                </span>
              </Link>
            </div>
          );
        })}
      </div>
    </nav>
  );
}
