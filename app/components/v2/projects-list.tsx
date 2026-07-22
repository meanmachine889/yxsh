import Link from "next/link";

const projects = [
  { year: "2025", name: "Shiplog", type: "changelogs that write themselves", href: "https://shiplog.today" },
  { year: "2025", name: "Kinetic", type: "effects & visuals vault", href: "https://kinetic.yxsh.in" },
  { year: "2025", name: "MCP Scanner", type: "security scanner for MCP servers", href: "https://mcpscanner.yxsh.in" },
  { year: "2025", name: "scan-my-mcp", type: "npx scanner CLI", href: "https://www.npmjs.com/package/scan-my-mcp" },
];

export default function ProjectsList() {
  return (
    <section className="w-full">
      <h2 className="text-[0.9rem] md:text-[0.95rem] text-fg-3 py-4 md:py-5 px-4 sm:px-6">Projects</h2>

      <div className="flex flex-col">
        {projects.map((p) => (
          <Link
            key={p.name}
            href={p.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-baseline justify-between gap-4 border-t border-border-3 px-4 sm:px-6 py-3 hover:opacity-70 transition-opacity"
          >
            <span className="flex items-baseline gap-2.5 min-w-0">
              <span className="text-[0.9rem] md:text-[0.95rem] text-fg shrink-0">
                {p.name}
              </span>
              {/* <span className="text-[0.85rem] text-fg-3 truncate hidden sm:inline">
                {p.type}
              </span> */}
            </span>
            <span className="font-[family-name:var(--font-geist-mono)] text-xs tracking-widest uppercase shrink-0 opacity-45 font-[family-name:var(--font-geist-mono)]">
              {p.year}
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}
