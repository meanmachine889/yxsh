"use client";

import Link from "next/link";

type Achievement = {
  link: string;
  before: string;
  anchor: string;
  after: string;
};

const ACHIEVEMENTS: Achievement[] = [
  {
    link: "https://www.linkedin.com/posts/yash-bharadwaj-47871b251_competed-in-enduraverse25-a-72-hour-hackathon-activity-7300228997345415168-MCHf?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAD44gdwBDO_Pk1LThAKnSZO5vYF8x4WSS3s",
    before: "Secured 2nd place nationwide at ",
    anchor: "Enduraverse'25",
    after: ", a 72-hour hackathon by Endurance Technologies, building a cross-platform tracker with Flutter, ESP32, and MPU6050.",
  },
  {
    link: "https://www.linkedin.com/posts/yash-bharadwaj-47871b251_hackathon-webdevelopment-teamdronaid-activity-7187014257496973312-iz32?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAD44gdwBDO_Pk1LThAKnSZO5vYF8x4WSS3s",
    before: "Placed 3rd out of 350 at MIT Manipal's ",
    anchor: "WebCraft Hackathon",
    after: ", making it to the final 32 and shipping a full event management platform.",
  },
  {
    link: "https://www.linkedin.com/posts/yash-bharadwaj-47871b251_hackathonsuccess-teamwork-innovation-activity-7166847214651224064-xB92?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAD44gdwBDO_Pk1LThAKnSZO5vYF8x4WSS3s",
    before: "Finished in the top 6 of 345 teams worldwide at the ",
    anchor: "VoiceAI Hackathon",
    after: " with YatriGPT, a smart travel voice assistant, pitching to the DaaS CEO in the finals.",
  },
  {
    link: "https://www.linkedin.com/posts/yash-bharadwaj-47871b251_just-wrapped-up-an-amazing-experience-ugcPost-7255276892134510592-a275?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAD44gdwBDO_Pk1LThAKnSZO5vYF8x4WSS3s",
    before: "Shipped the official platform for a ",
    anchor: "national-level hackathon",
    after: " organised by my college, supporting 2,200+ users and 400+ teams from 100+ colleges across India.",
  },
];

export default function Achievements2() {
  return (
    <section className="w-full max-w-2xl mt-12 font-[family-name:var(--font-poppins)] md:mt-14">
      <h2 className="mb-5 text-[0.94rem] text-fg-1 leading-[1.65rem]">Notable achievements</h2>

      <ul className="flex flex-col gap-4">
        {ACHIEVEMENTS.map((a, i) => (
          <li key={i} className="flex gap-3">
            <div className="shrink-0 w-[1.35rem] h-[1.35rem] rounded-md bg-fg/[0.05] flex items-center justify-center mt-0.5">
              <span className="text-[0.7rem] text-fg-3 font-medium select-none">{i + 1}</span>
            </div>
            <p className="text-[0.94rem] leading-[1.65rem] text-fg">
              {a.before}
              <Link
                href={a.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-fg-2 underline underline-offset-2 hover:opacity-80 transition-opacity"
                style={{ textDecorationColor: "color-mix(in srgb, currentColor 25%, transparent)" }}
              >
                {a.anchor}
              </Link>
              {a.after}
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
}
