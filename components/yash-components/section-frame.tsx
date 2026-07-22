import { cn } from "@/lib/utils";
import { GutterStickers, type StickerSpec } from "./gutter-stickers";

// Page-level frame: thin vertical hairlines at the content's max-width edges and
// a horizontal divider on top, so every section reads as part of one gridded
// layout (Aside-style). Wrap each section's content in this.
export function SectionFrame({
  className,
  innerClassName,
  divider = true,
  stickers,
  children,
}: {
  className?: string;
  innerClassName?: string;
  divider?: boolean;
  /** decorative images pinned to the outer gutters beside the content box */
  stickers?: StickerSpec[];
  children: React.ReactNode;
}) {
  return (
    <div className={cn("relative", divider && "border-t border-border-3", className)}>
      {stickers?.length ? <GutterStickers stickers={stickers} /> : null}
      {/* Centered frame: max-width box with vertical side rules */}
      <div className="relative mx-auto max-w-2xl border-x border-border-3">
        <div className={cn("px-6", innerClassName)}>{children}</div>
      </div>
    </div>
  );
}
