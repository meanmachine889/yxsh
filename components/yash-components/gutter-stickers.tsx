"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";

import { cn } from "@/lib/utils";

export type StickerSide = "left" | "right";

export interface StickerSpec {
  /** path under /public, e.g. "/stickers/star.png" */
  src: string;
  /** rendered WIDTH of the sticker in px; height follows `ratio` */
  size?: number;
  /** aspect ratio (width ÷ height) of the source art; set for non-square
   *  images so they don't letterbox. Square art can omit it (defaults to 1). */
  ratio?: number;
  /** which gutter it sits in */
  side: StickerSide;
  /** vertical offset from the top of the section, as a CSS length (e.g. "8px", "40%") */
  top?: string;
  /** vertical offset from the bottom instead of the top */
  bottom?: string;
  /** how far into the gutter, measured from the frame edge outward (px). Larger = further from the content. */
  inset?: number;
  /** resting tilt in degrees; the float animation wobbles around this */
  rotate?: number;
  /** describe the sticker for screen readers; omit for purely decorative */
  alt?: string;
}

/**
 * Renders decorative stickers pinned to the empty outer gutters beside a
 * SectionFrame's centered max-w-2xl content box. Each sticker gently drifts
 * while idle and reacts on hover. Hidden below `xl` where the gutter is too
 * narrow to seat them without clipping, and fully disabled when the user
 * prefers reduced motion (for the
 * drift only — the images still show).
 *
 * Must live inside a `position: relative` container that spans the full
 * section width (SectionFrame's outer div does).
 */
export function GutterStickers({ stickers }: { stickers: StickerSpec[] }) {
  if (!stickers?.length) return null;
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 z-10 hidden xl:block">
      {stickers.map((s, i) => (
        <Sticker key={`${s.src}-${i}`} spec={s} />
      ))}
    </div>
  );
}

function Sticker({ spec }: { spec: StickerSpec }) {
  const {
    src,
    size = 72,
    ratio = 1,
    side,
    top,
    bottom,
    inset = 16,
    rotate = 0,
    alt = "",
  } = spec;

  // `size` is the rendered width; derive height from the art's aspect ratio so
  // non-square stickers keep their proportions instead of letterboxing.
  const width = size;
  const height = Math.round(size / ratio);

  const reduce = useReducedMotion();

  // The content frame is max-w-2xl (42rem/672px) centered, so each frame edge
  // sits 336px out from the page centre. We anchor the sticker's inner edge to
  // the frame border and push it OUTWARD into the empty gutter by `inset`px:
  //   left sticker  -> its right edge = frameLeftEdge - inset
  //   right sticker -> its left edge  = frameRightEdge + inset
  // Anchoring the inner edge (not the box's left/top) keeps the whole sticker
  // out in the margin, never overlapping the content column.
  const HALF_FRAME = 336; // half of max-w-2xl (672px)
  // Baseline push so every sticker sits further out in the gutter (closer to the
  // window edge) rather than hugging the content column. Per-sticker `inset`
  // stacks on top of this for relative variation.
  const GUTTER_PUSH = 44;
  const positionStyle: React.CSSProperties =
    side === "left"
      ? { right: `calc(50% + ${HALF_FRAME + GUTTER_PUSH + inset}px)` }
      : { left: `calc(50% + ${HALF_FRAME + GUTTER_PUSH + inset}px)` };

  if (top != null) positionStyle.top = top;
  if (bottom != null) positionStyle.bottom = bottom;
  if (top == null && bottom == null) positionStyle.top = "50%";

  // Slow, offset drift so multiple stickers don't move in lockstep.
  const floatAnim = reduce
    ? {}
    : {
        y: [0, -6, 0, 4, 0],
        rotate: [rotate, rotate + 2.5, rotate, rotate - 2.5, rotate],
      };

  return (
    <motion.div
      className="pointer-events-auto absolute select-none"
      style={{
        ...positionStyle,
        width,
        height,
        rotate,
        // A drop-shadow filter follows the image's alpha channel, so the
        // shadow traces the die-cut silhouette instead of a bounding box.
        // Keep the blur/offset small so it stays snug to the outline. Applied
        // to the wrapper (not the <img>) so the blur isn't clipped at the
        // image box; `overflow-visible` on the box lets it spill.
        filter:
          "drop-shadow(0 2px 3px rgba(0,0,0,0.28)) drop-shadow(0 4px 6px rgba(0,0,0,0.16))",
      }}
      initial={{ rotate }}
      animate={floatAnim}
      transition={{
        duration: 7 + Math.random() * 3,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      whileHover={{
        scale: 1.12,
        rotate: rotate + (side === "left" ? -6 : 6),
        transition: { type: "spring", stiffness: 300, damping: 18 },
      }}
    >
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        draggable={false}
        className={cn("h-full w-full object-contain overflow-visible")}
      />
    </motion.div>
  );
}
