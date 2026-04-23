import type { Metadata } from "next";
import { experiences } from "@/app/data/experience";

export const metadata: Metadata = {
  title: "Experience",
};

export default function ExperiencePage() {
  return (
    <main className="flex flex-col w-screen justify-center items-center min-h-screen bg-bg overflow-x-hidden">
      <div className="flex flex-col w-full max-w-5xl px-6 sm:px-10 lg:px-26 py-24 sm:py-16 lg:py-20">
        <h1 className="text-2xl text-fg-2 leading-[1.1] mb-10 sm:mb-14 font-[family-name:var(--font-geist-mono)] ">
          Experience
        </h1>

        <div className="space-y-10 sm:space-y-14">
          {experiences.map((exp, i) => {
            const bullets = exp.details.workIncluded ?? [];
            return (
              <article
                key={i}
                className="grid grid-cols-1 md:grid-cols-[160px_1fr] gap-2 md:gap-14"
              >
                <div className="font-[family-name:var(--font-geist-mono)] tracking-wider text-[0.8rem] text-fg-4 md:pt-0.5">
                  {exp.date}
                </div>

                <div>
                  <h2 className="text-[0.9rem] font-[family-name:var(--font-geist-sans)]">
                    <span className="font-medium text-[1.1rem] text-fg">{exp.role}</span>
                    <span className="text-fg-4"> / </span>
                    <span className="text-fg-3">{exp.company}</span>
                  </h2>

                  {bullets.length > 0 ? (
                    <ul className="mt-3 space-y-1.5">
                      {bullets.map((work, j) => (
                        <li
                          key={j}
                          className="flex gap-2 text-fg-3 text-[0.94rem] leading-6"
                        >
                          <span className="text-fg-5 shrink-0 select-none" aria-hidden>
                            -
                          </span>
                          <span>{work.description}</span>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p className="mt-3 text-fg-3 text-[0.82rem] leading-6">
                      {exp.details.description}
                    </p>
                  )}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </main>
  );
}
