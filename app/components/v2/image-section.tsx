import Image from "next/image";
import image from "./assets/image.png";

const GRAIN =
  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='160'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")";

export default function ImageSection() {
  return (
    <div className="relative h-[180px] overflow-hidden md:h-[220px]">
      <Image
        src={image}
        alt=""
        placeholder="blur"
        fill
        sizes="(max-width: 672px) 100vw, 672px"
        className="object-cover select-none"
        style={{ filter: "contrast(1.06) saturate(1.05)" }}
      />
      {/* film grain — masks upscale softness */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 mix-blend-overlay"
        style={{
          backgroundImage: GRAIN,
          backgroundRepeat: "repeat",
          backgroundSize: "160px 160px",
          opacity: 0.35,
        }}
      />
      {/* soft vignette so the crop blends into the frame */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(120% 90% at 50% 45%, transparent 60%, rgba(0,0,0,0.22) 100%)",
        }}
      />
    </div>
  );
}
