import { Metadata } from "next";
import { projects, frontendProjects } from "@/app/data/projects";

export const metadata: Metadata = {
  title: "Projects",
};

export default function ProjectsPage() {
  return (
    <main className="flex flex-col w-screen justify-center items-center min-h-screen bg-[#0a0a0a] overflow-x-hidden">
      <div className="flex flex-col w-full max-w-8xl px-6 sm:px-10 lg:px-24 py-24 sm:py-16 lg:py-20">
        {/* Page heading */}
        <h1 className="text-[clamp(1.1rem,2.5vw,1.4rem)] text-[#cccccc] leading-[1.1] mb-12 sm:mb-16 font-[family-name:var(--font-geist-mono)] tracking-tight">
          Selected Projects
        </h1>

        {/* Main projects */}
        <div className="space-y-16 sm:space-y-20">
          {projects.map((project, index) => (
            <div key={index} className="flex flex-col gap-4">
              {/* Project name + links */}
              <div className="flex items-center gap-4">
                <h2 className="text-[clamp(1rem,2.2vw,1.25rem)] font-[family-name:var(--font-geist-mono)] tracking-tight text-white">
                  {project.name}
                </h2>
                
              </div>

              {/* Video (left) + Description (right) */}
              <div className="flex flex-col lg:flex-row justify-between gap-4 sm:gap-6 lg:gap-10">
                <div className="w-full lg:w-[50%] flex-shrink-0">
                  <video
                    src={project.video}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full rounded-lg border border-[#222222] object-cover"
                  />
                </div>
                <div className="w-full lg:w-2/5 flex flex-col items-start gap-5 sm:gap-7 lg:gap-9">
                  <p className="text-[#888888] text-[clamp(0.85rem,2vw,1.05rem)] leading-relaxed font-[family-name:var(--font-geist-sans)]">
                    {project.description.map((part, i) =>
                      part.highlight ? (
                        <span key={i} className="text-[#cccccc]">
                          {part.text}
                        </span>
                      ) : (
                        <span key={i}>{part.text}</span>
                      )
                    )}
                  </p>
                  <div className="flex items-center gap-3 text-[#888888] text-[clamp(0.85rem,1.8vw,0.95rem)] font-[family-name:var(--font-geist-mono)]">
                  {project.xLink && (
                    <a
                      href={project.xLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-white transition-colors"
                    >
                      x post
                    </a>
                  )}
                  {project.xLink && project.githubLink && (
                    <span className="text-[#444444]">·</span>
                  )}
                  {project.githubLink && (
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-white transition-colors"
                    >
                      github
                    </a>
                  )}
                </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Frontend Work subheading */}
        <div className="mt-20 sm:mt-28">
          <h2 className="text-[clamp(1rem,2.2vw,1.25rem)] font-[family-name:var(--font-geist-mono)] tracking-tight text-white mb-10 sm:mb-14 border-t border-dashed border-[#333333] pt-12 sm:pt-16">
            Frontend Work
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
            {frontendProjects.map((project, index) => (
              <div key={index} className="flex flex-col gap-3">
                <video
                  src={project.video}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full rounded-lg border border-[#222222] object-cover aspect-video"
                />
                {project.xLink && (
                  <a
                    href={project.xLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#888888] hover:text-white transition-colors text-[clamp(0.85rem,1.8vw,0.95rem)] font-[family-name:var(--font-geist-mono)]"
                  >
                    x post
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
