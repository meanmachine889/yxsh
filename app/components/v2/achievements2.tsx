"use client";

import Link from "next/link";

type Segment = { text: string; bold?: boolean };

type Achievement = {
  title: string;
  link: string;
  body: Segment[];
};

const ACHIEVEMENTS: Achievement[] = [
  {
    title: "Enduraverse'25 Hackathon.",
    link: "https://www.linkedin.com/posts/yash-bharadwaj-47871b251_competed-in-enduraverse25-a-72-hour-hackathon-activity-7300228997345415168-MCHf?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAD44gdwBDO_Pk1LThAKnSZO5vYF8x4WSS3s",
    body: [
      { text: "Secured " },
      { text: "2nd place nationwide", bold: true },
      { text: " at a " },
      { text: "72-hour hackathon", bold: true },
      { text: " by Endurance Technologies. Built a cross-platform " },
      { text: "tracker", bold: true },
      { text: " with " },
      { text: "Flutter + ESP32 + MPU6050", bold: true },
      { text: ", featuring real-time sync and offline storage." },
    ],
  },
  {
    title: "WebCraft Hackathon 2024.",
    link: "https://www.linkedin.com/posts/yash-bharadwaj-47871b251_hackathon-webdevelopment-teamdronaid-activity-7187014257496973312-iz32?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAD44gdwBDO_Pk1LThAKnSZO5vYF8x4WSS3s",
    body: [
      { text: "Placed " },
      { text: "3rd out of 350 participants", bold: true },
      { text: " at MIT Manipal's WebCraft Hackathon. Advanced to the final 32 after a " },
      { text: "24-hour cloning challenge", bold: true },
      { text: " and shipped a full " },
      { text: "event management platform", bold: true },
      { text: " for organizers and attendees." },
    ],
  },
  {
    title: "VoiceAI Hackathon.",
    link: "https://www.linkedin.com/posts/yash-bharadwaj-47871b251_hackathonsuccess-teamwork-innovation-activity-7166847214651224064-xB92?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAD44gdwBDO_Pk1LThAKnSZO5vYF8x4WSS3s",
    body: [
      { text: "Finished in the " },
      { text: "top 6 of 345 teams worldwide", bold: true },
      { text: " with " },
      { text: "YatriGPT", bold: true },
      { text: ", a smart travel voice assistant. Led the frontend and contributed backend with " },
      { text: "Flask + MongoDB", bold: true },
      { text: ", pitching to the DaaS CEO in the final round." },
    ],
  },
  {
    title: "National Hackathon platform.",
    link: "https://www.linkedin.com/posts/yash-bharadwaj-47871b251_just-wrapped-up-an-amazing-experience-ugcPost-7255276892134510592-a275?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAD44gdwBDO_Pk1LThAKnSZO5vYF8x4WSS3s",
    body: [
      { text: "Shipped the " },
      { text: "official website", bold: true },
      { text: " for a " },
      { text: "national-level hackathon organised by my college", bold: true },
      { text: ", supporting " },
      { text: "2,200+ users", bold: true },
      { text: " and " },
      { text: "400+ teams", bold: true },
      { text: " from over " },
      { text: "100 colleges", bold: true },
      { text: " across India." },
    ],
  },
];

function renderBody(segs: Segment[]) {
  return segs.map((s, i) =>
    s.bold ? (
      <span key={i} className="text-fg font-medium">
        {s.text}
      </span>
    ) : (
      <span key={i}>{s.text}</span>
    )
  );
}

export default function Achievements2() {
  return (
    <section className="w-full max-w-3xl mt-14 font-[family-name:var(--font-poppins)] sm:mt-16">
      <h2 className="mb-4 leading-[1.55rem] text-fg-1 text-[1.02rem]">Notable achievements</h2>

      <ul className="space-y-4">
        {ACHIEVEMENTS.map((a, i) => (
          <li key={i} className="flex gap-3 text-[13.5px] leading-6 text-fg-2 sm:text-[15px]">
            <span
              aria-hidden
              className="shrink-0 select-none translate-y-[-2px] text-xl font-bold text-fg-4"
            >
              •
            </span>
            <span>
              <span className="relative inline-block max-w-full group/ach">
                <Link
                  href={a.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block text-fg underline underline-offset-3 transition-opacity hover:opacity-90"
                >
                  {a.title}
                </Link>
                <span
                  aria-hidden
                  className="pointer-events-none absolute left-0 top-full mt-1 hidden whitespace-nowrap rounded-md border px-2 py-1 text-[11px] opacity-0 -translate-y-1 transition-all duration-200 group-hover/ach:opacity-100 group-hover/ach:translate-y-0 md:block"
                  style={{
                    backgroundColor:
                      "color-mix(in srgb, var(--bg) 92%, transparent)",
                    borderColor: "var(--border-2)",
                    color: "var(--fg-2)",
                  }}
                >
                  see post
                </span>
              </span>{" "}
              {renderBody(a.body)}
            </span>
          </li>
        ))}
      </ul>
    </section>
  );
}
