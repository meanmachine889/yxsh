# Gutter stickers

Decorative images pinned to the empty outer gutters beside each `SectionFrame`.
They gently drift while idle and react on hover. Rendered by
`components/yash-components/gutter-stickers.tsx` and declared per-section via the
`stickers` prop on `SectionFrame`.

## Adding a sticker

1. Drop a **transparent-background PNG** (or WebP) into this folder, e.g.
   `public/stickers/frog.png`. Square-ish assets (~1:1) sit best in the gutter.
2. Reference it from a section in `app/page.tsx`:

   ```tsx
   <SectionFrame
     stickers={[
       { src: "/stickers/frog.png", side: "left",  top: "24px",   size: 72, rotate: -8 },
       { src: "/stickers/star.png", side: "right", bottom: "16px", size: 60, rotate: 10 },
     ]}
   >
     ...
   </SectionFrame>
   ```

### Prop reference (per sticker)

| prop     | default | meaning                                                                 |
| -------- | ------- | ----------------------------------------------------------------------- |
| `src`    | —       | path under `/public`                                                     |
| `side`   | —       | `"left"` or `"right"` gutter                                             |
| `size`   | `72`    | rendered **width** in px; height follows `ratio`                        |
| `ratio`  | `1`     | source aspect ratio (width ÷ height); set for non-square art so it doesn't letterbox |
| `top`    | `50%`   | vertical offset from the section top (CSS length)                       |
| `bottom` | —       | vertical offset from the bottom instead (overrides `top`)               |
| `inset`  | `16`    | gap in px between the frame's vertical border and the sticker, out in the margin |
| `rotate` | `0`     | resting tilt in degrees; the drift wobbles ±2.5° around this            |
| `alt`    | `""`    | screen-reader text; leave empty for purely decorative                   |

## Behavior notes

- **Only visible at `lg` and up** — below that there's no gutter room, so the
  whole layer is hidden. Stickers never overlap the content box.
- **Reduced motion:** if the visitor prefers reduced motion, the idle drift is
  disabled but the stickers still render (and still react to hover).
- Position is anchored to the `max-w-2xl` (672px) frame edge with `calc`, so a
  sticker hangs a fixed distance outside the content box at any viewport width.

## Generating art in Higgsfield (or any generator)

You want **isolated subjects on a transparent / plain background** so they read
as stickers, not photos. A prompt template that works well:

> `<subject>, die-cut sticker, thick white border, glossy vinyl, flat vector
> illustration, centered, isolated on plain white background, no shadow, high
> contrast, playful`

Then remove the background (Higgsfield's cutout / remove-bg, or any
background-remover) and export a **transparent PNG**. Keep the subject centered
with a little padding so the tilt/hover never clips it.

Pick subjects that match the site's voice — small tech/dev motifs, anime-ish
doodles, music/graphics nods (the things mentioned in the hero copy) work with
the existing tone. Keep the palette limited so multiple stickers feel like one
set.

Current art in this folder (die-cut, baked-in white border, transparent bg):
`pizza.png`, `burger.png`, `me.png`, `keyboard.png`, `dietcoke.png` (square,
ratio 1); `macbook.png` (ratio 1.34); `headphones.png` (ratio 0.747);
`milkshake.png` (ratio 0.558).
Drop more in the same style and reference them from `app/page.tsx` — remember to
pass `ratio` for any that aren't square.
