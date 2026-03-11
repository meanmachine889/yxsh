import React from "react";
import { experiences } from "@/app/data/experience";
import { skills } from "@/app/data/skills";

const getTechIconInfo = (tech: string) => {
  const normalizedTech = tech.toLowerCase();
  const existingSkill = skills.find((s) => s.name.toLowerCase() === normalizedTech);
  if (existingSkill) return existingSkill;

  if (normalizedTech.includes('tailwind')) return { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg", invert: false };
  if (normalizedTech.includes('express')) return { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg", invert: true };
  if (normalizedTech.includes('redux')) return { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg", invert: false };
  if (normalizedTech.includes('chakra')) return { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/chakraui/chakraui-original.svg", invert: false };
  if (normalizedTech.includes('aws')) return { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg", invert: true };
  if (normalizedTech.includes('shadcn')) return { icon: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/shadcnui.svg", invert: true };

  return null;
};
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";

export async function generateStaticParams() {
  return experiences.map((exp) => ({
    slug: exp.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const resolvedParams = await params;
  const experience = experiences.find((exp) => exp.slug === resolvedParams.slug);
  if (!experience) return { title: "Not Found" };

  return {
    title: `${experience.company} - Work Experience`,
    description: experience.details.description,
  };
}

export default async function ExperiencePage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const experience = experiences.find((exp) => exp.slug === resolvedParams.slug);

  if (!experience) {
    notFound();
  }

  return (
    <main className="bg-[#0a0a0a] min-h-screen w-full text-white flex flex-col items-center p-8 pt-24 font-[family-name:var(--font-geist-sans)]">
      <div className="max-w-6xl p-8 w-full">
        <Link
          href="/"
          className="text-[#888888] hover:text-white transition-colors mb-12 inline-flex items-center gap-2"
        >
          Back
        </Link>

        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-start gap-6 mb-16">
          {/* <div className={`relative w-18 h-18 rounded-full overflow-hidden shrink-0 ${experience.slug === 'eventory' ? 'bg-purple-400' :
            experience.slug === 'yocket' ? 'bg-orange-500' : experience.slug === 'eventory' ?
              'bg-[#1a1a1a]' : 'bg-white'
            }`}>
            <Image
              src={experience.logo}
              alt={`${experience.company} logo`}
              fill
              className={experience.slug === 'eventory' ? 'object-contain p-5' : 'object-contain p-4'}
            />
          </div> */}
          <div className="flex flex-col">
            <h1 className="text-4xl tracking-tight font-[family-name:var(--font-geist-mono)]">
              {experience.company}
            </h1>
            <div className="text-[#888888] text-lg mt-2 font-[family-name:var(--font-geist-mono)]">
              {experience.date} <span className="mx-2">&bull;</span> {experience.location}
            </div>
            <div className="text-xl mt-4">
              {experience.details.description}
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="space-y-16">
          {experience.slug === 'integral' ? (
            <div className="text-[#888888] text-lg">
              Currently working, will be updated soon.
            </div>
          ) : (
            <>
              {experience.details.techStack && experience.details.techStack.length > 0 && (
                <section>
                  <h2 className="text-xl font-[family-name:var(--font-geist-mono)] tracking-tight mb-6">
                    Tech I Worked with
                  </h2>
                  <div className="flex flex-wrap gap-6">
                    {experience.details.techStack.map((tech, index) => {
                      const techInfo = getTechIconInfo(tech);

                      if (techInfo) {
                        return (
                          <div
                            key={index}
                            className="flex flex-col items-center justify-center gap-3 group hover:opacity-80 transition-opacity"
                          >
                            <div className="relative w-8 h-8 shrink-0">
                              <Image
                                src={techInfo.icon}
                                alt={`${tech} icon`}
                                fill
                                className={`object-contain ${techInfo.invert ? 'invert' : ''}`}
                              />
                            </div>
                            <span className="font-[family-name:var(--font-geist-mono)] text-[0.85rem] text-[#888888] tracking-tight">
                              {tech}
                            </span>
                          </div>
                        );
                      }

                      return (
                        <div key={index} className="flex flex-col items-center justify-center gap-3 group hover:opacity-80 transition-opacity">
                          <div className="relative w-8 h-8 shrink-0 flex items-center justify-center bg-[#1a1a1a] rounded-full border border-[#333333]">
                            <span className="text-[#888888] font-bold text-base">{tech.charAt(0)}</span>
                          </div>
                          <span className="font-[family-name:var(--font-geist-mono)] text-[0.85rem] text-[#888888] tracking-tight">
                            {tech}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </section>
              )}

              {experience.details.workIncluded && experience.details.workIncluded.length > 0 && (
                <section>
                  <h2 className="text-xl font-[family-name:var(--font-geist-mono)] tracking-tight mb-6">
                    My Work Included
                  </h2>
                  <div className="space-y-12">
                    {experience.details.workIncluded.map((work, index) => (
                      <div key={index} className="flex flex-col md:flex-row gap-6">
                        <div className="text-[#555555] font-[family-name:var(--font-geist-mono)] text-xl shrink-0">
                          {String(index + 1).padStart(2, '0')}
                        </div>
                        <div>
                          <h3 className="text-lg font-[family-name:var(--font-geist-mono)] mb-3 text-[#eeeeee]">
                            {work.title}
                          </h3>
                          <p className="text-[#a0a0a0] leading-relaxed">
                            {work.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </section>
              )}
            </>
          )}
        </div>
      </div>
    </main>
  );
}
