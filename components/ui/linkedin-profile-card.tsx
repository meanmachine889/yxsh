import { cn } from "@/lib/utils";

interface LinkedInProfileCardProps {
  name: string;
  handle: string;
  avatar: string;
  bio: string;
  url: string;
  className?: string;
}

export function LinkedInProfileCard({
  name,
  handle,
  avatar,
  bio,
  url,
  className,
}: LinkedInProfileCardProps) {
  return (
    <div
      className={cn(
        "w-[260px] rounded-lg p-3 backdrop-blur-md font-sans border",
        className
      )}
      style={{
        backgroundColor: "color-mix(in srgb, var(--bg) 92%, transparent)",
        borderColor: "var(--border-2)",
        color: "var(--fg)",
      }}
    >
      <div className="flex items-start justify-between gap-3">
        <div className="flex flex-col gap-2">
          <img
            src={avatar}
            alt={name}
            loading="lazy"
            width={32}
            height={32}
            className="rounded-full object-cover"
          />
          <div className="flex flex-col">
            <span className="text-[13px] font-semibold">{name}</span>
          </div>
        </div>
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Open LinkedIn profile"
          className="shrink-0"
          style={{ color: "var(--fg-2)" }}
        >
          <img
            src={"/linked.png"}
            alt="LinkedIn profile"
            loading="lazy"
            width={18}
            height={18}
            className="size-[18px] rounded-xs grayscale"
          />
        </a>
      </div>
      <p className="mt-2.5 text-[11.5px] leading-5" style={{ color: "var(--fg-2)" }}>
        {bio}
      </p>
    </div>
  );
}